import React, { useEffect, useRef, useMemo, useCallback, memo } from "react";
import { Box } from "@mantine/core";
import { Outlet, useLocation } from "react-router-dom";
import { useSettings } from "../contexts/SettingsContext";

// Map a pathname to its section key (must match backend section_music keys)
const getSection = (pathname) => {
  if (pathname === "/") return "home";
  if (pathname.startsWith("/menu")) return "menu";
  if (pathname.startsWith("/beats") || pathname.startsWith("/beatplay")) return "beats";
  if (pathname.startsWith("/comics")) return "comics";
  if (
    pathname.startsWith("/merch") ||
    pathname.startsWith("/shop") ||
    pathname.startsWith("/buyshirt") ||
    pathname.startsWith("/checkout") ||
    pathname.startsWith("/success")
  ) return "shop";
  if (pathname.startsWith("/games")) return "games";
  return null;
};

// Static background video — rendered once, never re-renders
const BgVideo = memo(() => (
  <video
    autoPlay
    muted
    loop
    playsInline
    style={{
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      zIndex: 0,
    }}
  >
    <source src="/assets/bgvideo.mp4" type="video/mp4" />
  </video>
));
BgVideo.displayName = "BgVideo";

const UserLayout = () => {
  const location = useLocation();
  const { settings, loading: settingsLoading, fetchSettings } = useSettings();
  const bgAudioRef = useRef(null);
  const currentSrcRef = useRef("__NONE__");
  const fetchingRef = useRef(false); // prevent concurrent fetches

  // Derive the section from the current path — only changes when section actually changes
  const section = useMemo(() => getSection(location.pathname), [location.pathname]);

  // Throttled fetch: only re-fetch when the section changes AND no fetch is in-flight
  const fetchIfNeeded = useCallback(() => {
    if (fetchingRef.current) return;
    fetchingRef.current = true;
    fetchSettings().finally(() => {
      fetchingRef.current = false;
    });
  }, [fetchSettings]);

  // Create audio element once on mount
  useEffect(() => {
    const audio = new Audio();
    audio.loop = true;
    bgAudioRef.current = audio;
    return () => {
      audio.pause();
      audio.src = "";
      bgAudioRef.current = null;
    };
  }, []);

  // Re-fetch settings only when section changes (home→menu→beats, not /beats/1→/beats/2)
  useEffect(() => {
    fetchIfNeeded();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [section]);

  // Sync BGM — runs when section OR settings data changes
  useEffect(() => {
    const audio = bgAudioRef.current;
    if (!audio) return;
    if (settingsLoading) return;

    // Game player routes → always silence
    const isGameRoute =
      location.pathname.startsWith("/games/play") ||
      location.pathname.startsWith("/games/eternal-run");

    if (isGameRoute) {
      if (!audio.paused) audio.pause();
      return;
    }

    const sectionMusicMap = settings.section_music || {};
    const sectionTrack = section ? (sectionMusicMap[section] || null) : null;
    const targetSrc = sectionTrack || settings.background_music || null;

    if (!targetSrc) {
      if (!audio.paused) audio.pause();
      currentSrcRef.current = "__NONE__";
      return;
    }

    audio.volume = (settings.default_volume ?? 70) / 100;

    const resolvedTarget = targetSrc.startsWith("http")
      ? targetSrc
      : new URL(targetSrc, window.location.origin).href;

    // Only swap src if the track actually changed — avoids restarting the same track
    if (currentSrcRef.current !== resolvedTarget) {
      currentSrcRef.current = resolvedTarget;
      audio.pause();
      audio.src = targetSrc;
      audio.load();
    }

    if (audio.paused) {
      const p = audio.play();
      if (p !== undefined) {
        p.catch(() => {
          const tryResume = () => {
            if (audio.paused && audio.src) audio.play().catch(() => {});
          };
          window.addEventListener("click",      tryResume, { capture: true, once: true });
          window.addEventListener("keydown",    tryResume, { capture: true, once: true });
          window.addEventListener("touchstart", tryResume, { capture: true, once: true });
        });
      }
    }
  }, [
    section,
    location.pathname,
    settingsLoading,
    settings.default_volume,
    settings.background_music,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    JSON.stringify(settings.section_music),
  ]);

  // Beat play/stop events
  useEffect(() => {
    const handleBeatStart = () => {
      if (settings.pause_radio_when_beat_plays && bgAudioRef.current) {
        bgAudioRef.current.pause();
      }
    };
    const handleBeatStop = () => {
      const audio = bgAudioRef.current;
      if (audio && audio.src && audio.paused) audio.play().catch(() => {});
    };
    window.addEventListener("beat-play-start", handleBeatStart);
    window.addEventListener("beat-play-stop",  handleBeatStop);
    return () => {
      window.removeEventListener("beat-play-start", handleBeatStart);
      window.removeEventListener("beat-play-stop",  handleBeatStop);
    };
  }, [settings.pause_radio_when_beat_plays]);

  return (
    <Box
      style={{
        height: "100vh",
        backgroundColor: "#111827",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <BgVideo />
      <Box style={{ position: "relative", zIndex: 1, flex: 1, height: "100%", overflow: "hidden" }}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default UserLayout;
