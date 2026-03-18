import React, { useState, useEffect, useCallback, useRef } from "react";
import { DiskIcon, MusicIcon, UploadIcon } from "../../customIcons";
import { useBeatController } from "../../hooks/useBeatController";
import { toast } from "sonner";
import { Modal } from "@mantine/core";

const AudioVisualizer = ({ isDark }) => (
  <div className="flex items-end gap-[2px] h-4 mb-1">
    {[0, 0.2, 0.1, 0.3].map((delay, i) => (
      <div
        key={i}
        className={`w-[3px] rounded-full ${isDark ? "bg-black" : "bg-[#FFD700]"} animate-musicBar`}
        style={{
          animationDelay: `${delay}s`,
          animationDuration: `${0.5 + (i % 2) * 0.2}s`,
        }}
      ></div>
    ))}
  </div>
);

const BeatRow = ({
  beat,
  isPlaying,
  currentTime,
  duration,
  formatTime,
  handlePlayToggle,
  handleOpenEditModal,
  handleDeleteBeat,
}) => {
  const tags = Array.isArray(beat.genre_tags)
    ? beat.genre_tags
    : beat.genre_tags
      ? beat.genre_tags.split(",").map((t) => t.trim())
      : [];
  const date = beat.createdAt
    ? new Date(beat.createdAt).toLocaleDateString()
    : "N/A";

  const [localDuration, setLocalDuration] = useState(0);

  useEffect(() => {
    if (beat.mp3_url && !beat.duration) {
      const tempAudio = new Audio(beat.mp3_url);
      const handleLoadedMetadata = () => {
        setLocalDuration(tempAudio.duration);
      };
      tempAudio.addEventListener("loadedmetadata", handleLoadedMetadata);
      return () =>
        tempAudio.removeEventListener("loadedmetadata", handleLoadedMetadata);
    }
  }, [beat.mp3_url, beat.duration]);

  // Use the global duration state when this beat is playing, otherwise use local/beat duration
  const displayDuration =
    isPlaying && duration > 0
      ? formatTime(duration)
      : beat.duration
        ? typeof beat.duration === "number"
          ? formatTime(beat.duration)
          : beat.duration
        : formatTime(localDuration);

  return (
    <tr
      className={`w-full h-20 lg:h-24 border-b border-[#D4D4B0] transition-all duration-200 ${isPlaying ? "bg-[#C5C274]" : "bg-[#4A4A3C] hover:bg-[#525244]"}`}
    >
      <td className="px-3 lg:px-6 py-2">
        <div className="flex flex-col justify-center items-start gap-1">
          <div
            className={`text-sm lg:text-lg font-bold ${isPlaying ? "text-black" : "text-[#D4D4B0]"}`}
            style={{ fontFamily: "monospace" }}
          >
            {beat.name}
          </div>
          <div
            className={`text-xs w-52 lg:text-sm font-normal flex items-center gap-2 ${isPlaying ? "text-black opacity-70" : "text-[#D4D4B0] opacity-70"}`}
            style={{ fontFamily: "monospace" }}
          >
            {isPlaying && <AudioVisualizer isDark={true} />}
            {isPlaying
              ? `${formatTime(currentTime)} / ${displayDuration}`
              : displayDuration}{" "}
            · {date}
          </div>
        </div>
      </td>
      <td className="px-3 lg:px-6 py-2">
        <div className="flex flex-col justify-center items-start gap-2">
          <div
            className={`text-sm lg:text-lg font-bold ${isPlaying ? "text-black" : "text-[#D4D4B0]"}`}
            style={{ fontFamily: "monospace" }}
          >
            {beat.genre || "HIP-HOP"}
          </div>
          <div
            className={`text-[10px] lg:text-xs font-bold ${isPlaying ? "text-black opacity-80" : "text-[#D4D4B0] opacity-80"}`}
            style={{ fontFamily: "monospace" }}
          >
            Category:{" "}
            {beat.category?.toUpperCase().replace("_", " ") || "SAPHIRE"}
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            {tags.map((tag, i) => (
              <span
                key={i}
                className={`text-[10px] lg:text-xs px-2 py-0.5 rounded border ${isPlaying ? "border-black text-black" : "border-[#D4D4B0] text-[#D4D4B0]"}`}
                style={{ fontFamily: "monospace" }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </td>
      <td
        className="px-3 lg:px-6 py-2 text-[#D4D4B0] font-bold"
        style={{ fontFamily: "monospace" }}
      >
        {(beat.plays || 0).toLocaleString()}
      </td>
      <td
        className="px-3 lg:px-6 py-2 text-[#D4D4B0] font-bold"
        style={{ fontFamily: "monospace" }}
      >
        {beat.no_of_downloads || 0}
      </td>
      <td
        className="px-3 lg:px-6 py-2 text-[#D4D4B0] font-bold"
        style={{ fontFamily: "monospace" }}
      >
        €{(beat.donations?.amount || 0).toFixed(2)}
      </td>
      <td className="px-3 lg:px-6 py-2">
        <div className="flex items-center gap-3">
          <button
            onClick={() => handlePlayToggle(beat.id)}
            className="w-10 h-10 lg:w-12 lg:h-12 bg-[#FFD700] hover:bg-[#E4DA33] transition-colors flex items-center justify-center"
          >
            {isPlaying ? (
              <svg width="14" height="14" viewBox="0 0 16 16" fill="black">
                <rect x="3" y="2" width="3" height="12" />
                <rect x="10" y="2" width="3" height="12" />
              </svg>
            ) : (
              <svg width="14" height="14" viewBox="0 0 16 16" fill="black">
                <path d="M4 2L14 8L4 14V2Z" />
              </svg>
            )}
          </button>
          <button
            onClick={() => handleOpenEditModal(beat)}
            className="w-10 h-10 lg:w-12 lg:h-12 bg-[#4A4A3C] hover:bg-[#D4D1A0] hover:text-black text-[#D4D4B0] border border-[#D4D4B0] transition-colors flex items-center justify-center"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 20h9"></path>
              <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
            </svg>
          </button>
          <button
            onClick={() => handleDeleteBeat(beat.id)}
            className="w-10 h-10 lg:w-12 lg:h-12 bg-[#DC143C] hover:bg-[#B22222] transition-colors flex items-center justify-center"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 16 16"
              fill="white"
              stroke="white"
              strokeWidth="2"
            >
              <path d="M12 4L4 12M4 4L12 12" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </td>
    </tr>
  );
};

const Beat = () => {
  const {
    beats: reduxBeats,
    isLoading: isBeatsLoading,
    isCreating,
    fetchBeats,
    addBeat,
    removeBeat,
    editBeat,
  } = useBeatController();

  // Local state for UI interactions (playing, volume, etc.)
  const [beats, setBeats] = useState([]);

  // Add Beat Form State
  const [newBeatForm, setNewBeatForm] = useState({
    name: "",
    genre: "HIP-HOP",
    genre_tags: "",
    category: "saphire",
    beat: null,
  });
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef(null);

  // Edit Beat Form State
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [currentEditId, setCurrentEditId] = useState(null);
  const [editBeatForm, setEditBeatForm] = useState({
    name: "",
    genre: "HIP-HOP",
    genre_tags: "",
    category: "saphire",
  });

  // Audio Player State
  const [volume, setVolume] = useState(75);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentlyPlayingId, setCurrentlyPlayingId] = useState(null);
  const [pausedTime, setPausedTime] = useState(0);

  // Audio ref - single instance
  const audioRef = useRef(new Audio());
  const isAudioInitialized = useRef(false);
  const animationFrameRef = useRef(null);

  // SearchAndFilter state
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("All Genres");
  const [showGenreDropdown, setShowGenreDropdown] = useState(false);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5;

  // Genres and Categories
  const GENRE_OPTIONS = [
    "HIP-HOP",
    "TRAP",
    "R&B",
    "POP",
    "ELECTRONICS",
    "LO-FI",
    "BOOM BAP",
  ];
  const CATEGORY_OPTIONS = [
    { label: "SAPHIRE", value: "saphire" },
    { label: "PHONIX", value: "phonix" },
    { label: "HORUS", value: "horus" },
    { label: "SPALE RALOOON", value: "spale_ralooon" },
  ];
  const currentlyPlayingIdRef = useRef(currentlyPlayingId);
  useEffect(() => {
    currentlyPlayingIdRef.current = currentlyPlayingId;
  }, [currentlyPlayingId]);

  // FIXED: Proper audio time update using requestAnimationFrame
  const updateTime = useCallback(() => {
    if (audioRef.current && currentlyPlayingIdRef.current) {
      setCurrentTime(audioRef.current.currentTime);
      setPausedTime(audioRef.current.currentTime);
      animationFrameRef.current = requestAnimationFrame(updateTime);
    }
  }, []);

  // Initialize audio event listeners once
  useEffect(() => {
    const audio = audioRef.current;

    const onDurationChange = () => {
      setDuration(audio.duration);
    };

    const onLoadedMetadata = () => {
      setDuration(audio.duration);
    };

    const onEnded = () => {
      setCurrentlyPlayingId(null);
      setPausedTime(0);
      setCurrentTime(0);
      setBeats((prev) => prev.map((b) => ({ ...b, isPlaying: false })));
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };

    const onPlay = () => {
      // Start the animation frame when playing
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      animationFrameRef.current = requestAnimationFrame(updateTime);
    };

    const onPause = () => {
      // Cancel animation frame when paused
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };

    const onTimeUpdate = () => {
      if (currentlyPlayingIdRef.current) {
        setCurrentTime(audio.currentTime);
        setPausedTime(audio.currentTime);
      }
    };

    audio.addEventListener("durationchange", onDurationChange);
    audio.addEventListener("loadedmetadata", onLoadedMetadata);
    audio.addEventListener("ended", onEnded);
    audio.addEventListener("play", onPlay);
    audio.addEventListener("pause", onPause);
    audio.addEventListener("timeupdate", onTimeUpdate);

    return () => {
      audio.removeEventListener("durationchange", onDurationChange);
      audio.removeEventListener("loadedmetadata", onLoadedMetadata);
      audio.removeEventListener("ended", onEnded);
      audio.removeEventListener("play", onPlay);
      audio.removeEventListener("pause", onPause);
      audio.removeEventListener("timeupdate", onTimeUpdate);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [updateTime]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = "";
      }
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  // Volume control
  useEffect(() => {
    audioRef.current.volume = volume / 100;
  }, [volume]);

  // Handle play/pause and track changes
  useEffect(() => {
    const audio = audioRef.current;

    if (currentlyPlayingId) {
      const playingBeat = beats.find((b) => b.id === currentlyPlayingId);
      if (playingBeat && playingBeat.mp3_url) {
        const currentSrc = audio.src;
        const newSrc = playingBeat.mp3_url;

        if (!currentSrc || !currentSrc.includes(newSrc)) {
          // New track - reset position
          audio.src = newSrc;
          audio.load();
          setPausedTime(0);
          setCurrentTime(0);

          // Play after metadata is loaded
          const playAudio = () => {
            audio.play().catch((err) => {
              console.error("Playback error:", err);
              toast.error("Audio playback blocked or failed");
            });
          };

          if (audio.readyState >= 1) {
            playAudio();
          } else {
            audio.addEventListener("canplay", playAudio, { once: true });
          }
        } else {
          // Same track - resume from paused position
          if (
            pausedTime > 0 &&
            Math.abs(audio.currentTime - pausedTime) > 0.1
          ) {
            audio.currentTime = pausedTime;
          }
          audio.play().catch((err) => {
            console.error("Playback error:", err);
            toast.error("Audio playback blocked or failed");
          });
        }
      }
    } else {
      audio.pause();
    }
  }, [currentlyPlayingId, beats, pausedTime]);

  // Sync redux beats to local state
  useEffect(() => {
    if (reduxBeats) {
      setBeats(
        reduxBeats.map((beat) => ({
          ...beat,
          id: beat._id || beat.id,
          isPlaying: false,
        })),
      );
    }
  }, [reduxBeats]);

  useEffect(() => {
    fetchBeats();
  }, [fetchBeats]);

  // Reset page when search or filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedGenre]);

  // Drag and Drop Handlers
  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileSelect(e.dataTransfer.files[0]);
    }
  };

  const handleFileSelect = (file) => {
    if (
      file &&
      (file.type === "audio/mpeg" ||
        file.type === "audio/wav" ||
        file.name.endsWith(".mp3") ||
        file.name.endsWith(".wav"))
    ) {
      if (file.size > 50 * 1024 * 1024) {
        toast.error("File size exceeds 50MB");
        return;
      }
      setNewBeatForm((prev) => ({ ...prev, beat: file }));
      toast.success(`File selected: ${file.name}`);
    } else {
      toast.error("Invalid file type. Please upload MP3 or WAV.");
    }
  };

  const onButtonClick = () => fileInputRef.current.click();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBeatForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddBeat = async (e) => {
    e.preventDefault();
    if (!newBeatForm.name || !newBeatForm.beat) {
      toast.error("Please provide at least a name and an audio file");
      return;
    }

    const formData = new FormData();
    formData.append("name", newBeatForm.name);
    formData.append("beat", newBeatForm.beat);
    formData.append("genre", newBeatForm.genre);
    formData.append("category", newBeatForm.category);

    if (newBeatForm.genre_tags) {
      const tags = newBeatForm.genre_tags
        .split(",")
        .map((t) => t.trim())
        .filter((t) => t !== "");
      tags.forEach((tag) => {
        formData.append("genre_tags", tag);
      });
    }

    const res = await addBeat(formData);
    if (res?.success) {
      toast.success("Beat uploaded successfully!");
      setNewBeatForm({
        name: "",
        genre: "HIP-HOP",
        genre_tags: "",
        beat: null,
        category: "saphire",
      });
      fetchBeats();
    } else {
      toast.error(res?.message || "Upload failed");
    }
  };

  const handleDeleteBeat = async (id) => {
    if (window.confirm("Are you sure you want to delete this beat?")) {
      // Stop playback if deleting currently playing beat
      if (currentlyPlayingId === id) {
        audioRef.current.pause();
        setCurrentlyPlayingId(null);
        setPausedTime(0);
        setCurrentTime(0);
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
        }
      }

      const res = await removeBeat(id);
      if (res?.success) {
        toast.success("Beat deleted successfully");
        fetchBeats();
      } else {
        toast.error(res?.message || "Delete failed");
      }
    }
  };

  const handleOpenEditModal = (beat) => {
    setCurrentEditId(beat._id || beat.id);
    setEditBeatForm({
      name: beat.name || "",
      genre: beat.genre || "HIP-HOP",
      category: beat.category || "saphire",
      genre_tags: Array.isArray(beat.genre_tags)
        ? beat.genre_tags.join(", ")
        : beat.genre_tags || "",
    });
    setIsEditModalOpen(true);
  };

  const handleEditInputChange = (e) => {
    const { name, value } = e.target;
    setEditBeatForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleEditBeat = async (e) => {
    e.preventDefault();
    if (!editBeatForm.name) {
      toast.error("Name is required");
      return;
    }

    const formData = new FormData();
    formData.append("name", editBeatForm.name);
    formData.append("genre", editBeatForm.genre);
    formData.append("category", editBeatForm.category);

    if (editBeatForm.genre_tags) {
      const tags = editBeatForm.genre_tags
        .split(",")
        .map((t) => t.trim())
        .filter((t) => t !== "");
      tags.forEach((tag) => {
        formData.append("genre_tags", tag);
      });
    }

    const res = await editBeat(currentEditId, formData);
    if (res?.success) {
      toast.success("Beat updated successfully!");
      setIsEditModalOpen(false);
      setCurrentEditId(null);
      fetchBeats();
    } else {
      toast.error(res?.message || "Failed to update beat");
    }
  };

  const handlePlayToggle = (id) => {
    setBeats((prevBeats) => {
      const currentBeat = prevBeats.find((beat) => beat.id === id);
      const isCurrentlyPlaying = currentBeat?.isPlaying || false;

      if (isCurrentlyPlaying) {
        // Pausing - store current position
        setPausedTime(audioRef.current.currentTime);
        setCurrentlyPlayingId(null);
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
        }
        return prevBeats.map((beat) => ({ ...beat, isPlaying: false }));
      } else {
        // Stop current audio if any before playing new one
        if (currentlyPlayingId && currentlyPlayingId !== id) {
          audioRef.current.pause();
          if (animationFrameRef.current) {
            cancelAnimationFrame(animationFrameRef.current);
          }
        }
        // Use stored paused time if resuming same track
        if (currentlyPlayingId === id && pausedTime > 0) {
          audioRef.current.currentTime = pausedTime;
        }
        setCurrentlyPlayingId(id);
        return prevBeats.map((beat) => ({
          ...beat,
          isPlaying: beat.id === id,
        }));
      }
    });
  };

  const formatTime = (seconds) => {
    if (isNaN(seconds) || seconds < 0) return "0:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const filteredBeats = beats.filter((beat) => {
    const matchesSearch = beat.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesGenre =
      selectedGenre === "All Genres" ||
      (beat.genre || "HIP-HOP").toUpperCase() === selectedGenre.toUpperCase();
    return matchesSearch && matchesGenre;
  });

  const totalPages = Math.ceil(filteredBeats.length / rowsPerPage);
  const paginatedBeats = filteredBeats.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage,
  );

  const stats = [
    { value: beats.length.toString(), label: "Total Beats" },
    {
      value: beats.reduce((acc, b) => acc + (b.plays || 0), 0).toLocaleString(),
      label: "Total Plays",
    },
    {
      value: beats
        .reduce((acc, b) => acc + (b.no_of_downloads || 0), 0)
        .toLocaleString(),
      label: "Total Downloads",
    },
    {
      value: `€${beats.reduce((acc, b) => acc + (b.donations?.amount || 0), 0).toFixed(2)}`,
      label: "Total Donations",
    },
  ];

  // Add animation CSS to your global styles or create a style tag
  const animationStyles = `
    @keyframes musicBar {
      0%, 100% { height: 4px; }
      50% { height: 12px; }
    }
    .animate-musicBar {
      animation: musicBar 0.6s ease-in-out infinite;
    }
    @keyframes slideDown {
      from {
        opacity: 0;
        transform: translateY(-10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    .animate-slideDown {
      animation: slideDown 0.2s ease-out;
    }
  `;

  return (
    <div className="min-h-screen alexandria-font space-y-10">
      {/* Add animation styles */}
      <style>{animationStyles}</style>

      {/* Upload Section */}
      <section
        className={`w-full bg-[#CBC895] border-[3px] border-dotted transition-all duration-300 rounded-xl p-8 flex flex-col items-center gap-8 ${dragActive ? "border-[#FFD700] bg-[#D4D1A0] scale-[1.01]" : "border-[#D4D4B0]"}`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <input
          ref={fileInputRef}
          type="file"
          className="hidden"
          accept=".mp3,.wav"
          onChange={(e) => handleFileSelect(e.target.files[0])}
        />

        <div
          className="flex flex-col items-center cursor-pointer group"
          onClick={onButtonClick}
        >
          <div className="transform group-hover:rotate-12 transition-transform duration-500">
            <DiskIcon />
          </div>
          <p
            className="mt-4 text-[#191A22] font-bold text-center tracking-tighter"
            style={{ fontFamily: "monospace" }}
          >
            {newBeatForm.beat
              ? `SELECTED: ${newBeatForm.beat.name}`
              : "DRAG AUDIO FILE HERE OR CLICK TO BROWSE"}
          </p>
        </div>

        <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-1">
            <label className="text-[10px] font-bold uppercase text-[#191A22]">
              Beat Name
            </label>
            <input
              type="text"
              name="name"
              value={newBeatForm.name}
              onChange={handleInputChange}
              placeholder="Untilted Beat"
              className="w-full h-12 bg-[#4A4A3C] border border-[#D4D4B0] px-4 text-white focus:outline-none focus:border-[#FFD700]"
              style={{ fontFamily: "monospace" }}
            />
          </div>
          <div className="space-y-1">
            <label className="text-[10px] font-bold uppercase text-[#191A22]">
              Genre (Enum)
            </label>
            <select
              name="genre"
              value={newBeatForm.genre}
              onChange={handleInputChange}
              className="w-full h-12 bg-[#4A4A3C] border border-[#D4D4B0] px-4 text-white focus:outline-none focus:border-[#FFD700] appearance-none cursor-pointer"
              style={{ fontFamily: "monospace" }}
            >
              {GENRE_OPTIONS.map((g) => (
                <option key={g} value={g}>
                  {g}
                </option>
              ))}
            </select>
          </div>
          <div className="space-y-1">
            <label className="text-[10px] font-bold uppercase text-[#191A22]">
              Tags (Comma Separated)
            </label>
            <input
              type="text"
              name="genre_tags"
              value={newBeatForm.genre_tags}
              onChange={handleInputChange}
              placeholder="dark, hard, 808s"
              className="w-full h-12 bg-[#4A4A3C] border border-[#D4D4B0] px-4 text-white focus:outline-none focus:border-[#FFD700]"
              style={{ fontFamily: "monospace" }}
            />
          </div>
          <div className="md:col-span-3 space-y-1">
            <label className="text-[10px] font-bold uppercase text-[#191A22]">
              Beat Category (Producer)
            </label>
            <select
              name="category"
              value={newBeatForm.category}
              onChange={handleInputChange}
              className="w-full h-12 bg-[#4A4A3C] border border-[#D4D4B0] px-4 text-white focus:outline-none focus:border-[#FFD700] appearance-none cursor-pointer"
              style={{ fontFamily: "monospace" }}
            >
              {CATEGORY_OPTIONS.map((c) => (
                <option key={c.value} value={c.value}>
                  {c.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <button
          onClick={handleAddBeat}
          disabled={isCreating}
          className={`px-12 py-4 bg-[#FFD700] text-black font-black uppercase tracking-[3px] hover:bg-[#E4DA33] transition-all shadow-xl disabled:opacity-50 flex items-center gap-4`}
          style={{ fontFamily: "monospace" }}
        >
          {isCreating ? (
            <div className="w-4 h-4 border-2 border-black border-t-transparent animate-spin rounded-full"></div>
          ) : (
            <UploadIcon />
          )}
          {isCreating ? "PROCESSING..." : "UPLOAD TRACK"}
        </button>
      </section>

      {/* Search & Stats */}
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex-1 relative">
          <input
            type="text"
            placeholder="SEARCH BEATS..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full h-16 bg-[#4A4A3C] border border-[#D4D4B0] px-6 text-[#FFD700] font-bold focus:outline-none focus:border-[#E4DA33] placeholder:text-[#9C963A]"
            style={{ fontFamily: "monospace" }}
          />
        </div>
        <div className="relative w-full lg:w-64">
          <button
            onClick={() => setShowGenreDropdown(!showGenreDropdown)}
            className="w-full h-16 bg-[#D4D4B0] text-[#191A22] font-black uppercase flex items-center justify-between px-6 border-b-4 border-black active:translate-y-1 active:border-b-0 transition-all"
            style={{ fontFamily: "monospace" }}
          >
            {selectedGenre}{" "}
            <svg width="12" height="8">
              <path d="M1 1L6 6L11 1" stroke="black" strokeWidth="2" />
            </svg>
          </button>
          {showGenreDropdown && (
            <div className="absolute top-18 left-0 w-full bg-[#D4D4B0] border-2 border-black z-50 shadow-2xl">
              {[
                "All Genres",
                "HIP-HOP",
                "TRAP",
                "R&B",
                "POP",
                "ELECTRONICS",
                "LO-FI",
                "BOOM BAP",
              ].map((g) => (
                <div
                  key={g}
                  onClick={() => {
                    setSelectedGenre(g);
                    setShowGenreDropdown(false);
                  }}
                  className="p-4 text-black font-bold border-b border-black hover:bg-[#E4E4C0] cursor-pointer"
                  style={{ fontFamily: "monospace" }}
                >
                  {g}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Beats Table */}
      <div className="w-full overflow-hidden border-2 border-[#D4D4B0] rounded-xl shadow-2xl">
        <div className="bg-[#4A4A3C]">
          {isBeatsLoading ? (
            <div className="h-64 flex items-center justify-center">
              <div className="w-12 h-12 border-4 border-[#FFD700] border-t-transparent animate-spin rounded-full"></div>
            </div>
          ) : (
            <div className="overflow-x-auto max-h-[800px] overflow-y-auto hidden-scrollbar">
              <table className="w-full min-w-[800px] text-left border-collapse">
                <thead className="bg-black sticky top-0 z-10 shadow-md">
                  <tr
                    className="text-[#FFD700] font-black text-xs lg:text-sm tracking-widest uppercase"
                    style={{ fontFamily: "monospace" }}
                  >
                    <th className="px-3 lg:px-6 py-6">
                      <div className="flex items-center gap-2">
                        NAME <MusicIcon />
                      </div>
                    </th>
                    <th className="px-3 lg:px-6 py-6">GENRE</th>
                    <th className="px-3 lg:px-6 py-6">PLAYS</th>
                    <th className="px-3 lg:px-6 py-6">DOWNLOADS</th>
                    <th className="px-3 lg:px-6 py-6">DONATIONS</th>
                    <th className="px-3 lg:px-6 py-6 shadow-[inset_0_-2px_0_black]">
                      ACTIONS
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {paginatedBeats.length > 0 ? (
                    paginatedBeats.map((b) => (
                      <BeatRow
                        key={b.id}
                        beat={b}
                        isPlaying={b.id === currentlyPlayingId}
                        currentTime={currentTime}
                        duration={duration}
                        formatTime={formatTime}
                        handlePlayToggle={handlePlayToggle}
                        handleOpenEditModal={handleOpenEditModal}
                        handleDeleteBeat={handleDeleteBeat}
                      />
                    ))
                  ) : (
                    <tr className="h-48 text-center text-[#D4D4B0] font-bold">
                      <td colSpan="6">NO TRACKS FOUND IN THE DATABASE</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="bg-[#191A22] border-t-2 border-[#D4D4B0] p-4 flex items-center justify-between px-6">
            <div className="text-[#D4D4B0] text-sm font-bold tracking-widest uppercase">
              Showing {(currentPage - 1) * rowsPerPage + 1} to{" "}
              {Math.min(currentPage * rowsPerPage, filteredBeats.length)} of{" "}
              {filteredBeats.length} Tracks
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="w-10 h-10 flex items-center justify-center bg-[#4A4A3C] text-[#FFD700] border border-[#D4D4B0] disabled:opacity-50 hover:bg-[#525244] transition-colors"
              >
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <div className="w-10 h-10 flex items-center justify-center bg-[#FFD700] text-black font-black text-sm">
                {currentPage}
              </div>
              <button
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                disabled={currentPage === totalPages}
                className="w-10 h-10 flex items-center justify-center bg-[#4A4A3C] text-[#FFD700] border border-[#D4D4B0] disabled:opacity-50 hover:bg-[#525244] transition-colors"
              >
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((s, i) => (
          <div
            key={i}
            className="bg-[#3C3C30] border-2 border-[#D4D4B0] p-6 rounded-xl flex flex-col items-center justify-center transform hover:-translate-y-2 transition-transform duration-300"
          >
            <div
              className="text-[#FFD700] text-2xl lg:text-3xl font-black mb-1"
              style={{ fontFamily: "monospace" }}
            >
              {s.value}
            </div>
            <div
              className="text-[#D4D4B0] text-[10px] lg:text-xs font-bold uppercase tracking-widest"
              style={{ fontFamily: "monospace" }}
            >
              {s.label}
            </div>
          </div>
        ))}
      </div>

      {/* Edit Modal */}
      <Modal
        opened={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        withCloseButton={false}
        padding={0}
        size="lg"
        centered
        overlayProps={{
          color: "black",
          opacity: 0.8,
          blur: 1,
        }}
        styles={{
          content: {
            backgroundColor: "transparent",
            boxShadow: "none",
            border: "none",
            overflow: "visible",
          },
        }}
      >
        <div className="w-full max-w-2xl bg-[#191A22] border-2 border-[#FFD700] shadow-[0_0_30px_rgba(255,215,0,0.15)] rounded-xl overflow-hidden relative alexandria-font">
          <div className="bg-[#FFD700] px-6 py-4 flex justify-between items-center">
            <div className="text-black font-bold tracking-widest uppercase text-sm">
              Edit Track Attributes
            </div>
            <button
              onClick={() => setIsEditModalOpen(false)}
              className="w-8 h-8 flex items-center justify-center bg-black hover:bg-gray-800 transition-colors rounded-sm"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 16 16"
                fill="none"
                stroke="#FFD700"
                strokeWidth="2"
              >
                <path d="M12 4L4 12M4 4L12 12" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          <div className="p-8 space-y-6">
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase text-[#D4D4B0] tracking-widest">
                Track Name
              </label>
              <input
                type="text"
                name="name"
                value={editBeatForm.name}
                onChange={handleEditInputChange}
                placeholder="Midnight Vibes"
                className="w-full h-12 bg-[#4A4A3C] border border-[#D4D4B0] px-4 text-white font-bold focus:outline-none focus:border-[#FFD700] focus:ring-1 focus:ring-[#FFD700] transition-colors text-sm"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase text-[#D4D4B0] tracking-widest">
                  Genre Sequence
                </label>
                <div className="relative">
                  <select
                    name="genre"
                    value={editBeatForm.genre}
                    onChange={handleEditInputChange}
                    className="w-full h-12 bg-[#4A4A3C] border border-[#D4D4B0] px-4 text-[#FFD700] font-bold focus:outline-none focus:border-[#FFD700] appearance-none cursor-pointer text-sm"
                  >
                    {GENRE_OPTIONS.map((g) => (
                      <option key={g} value={g}>
                        {g}
                      </option>
                    ))}
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg width="12" height="8">
                      <path
                        d="M1 1L6 6L11 1"
                        stroke="#FFD700"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase text-[#D4D4B0] tracking-widest">
                  Meta Tags Array
                </label>
                <input
                  type="text"
                  name="genre_tags"
                  value={editBeatForm.genre_tags}
                  onChange={handleEditInputChange}
                  placeholder="dark, hard, 808s"
                  className="w-full h-12 bg-[#4A4A3C] border border-[#D4D4B0] px-4 text-[#FFD700] focus:outline-none focus:border-[#FFD700] text-sm"
                />
                <p className="text-[10px] text-[#D4D4B0] opacity-50 mt-1 uppercase">
                  SEPARATE MULTIPLE TAGS WITH COMMAS
                </p>
              </div>

              <div className="md:col-span-2 space-y-2">
                <label className="text-xs font-bold uppercase text-[#D4D4B0] tracking-widest">
                  Beat Category (Producer)
                </label>
                <div className="relative">
                  <select
                    name="category"
                    value={editBeatForm.category}
                    onChange={handleEditInputChange}
                    className="w-full h-12 bg-[#4A4A3C] border border-[#D4D4B0] px-4 text-[#FFD700] font-bold focus:outline-none focus:border-[#FFD700] appearance-none cursor-pointer text-sm"
                  >
                    {CATEGORY_OPTIONS.map((c) => (
                      <option key={c.value} value={c.value}>
                        {c.label}
                      </option>
                    ))}
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg width="12" height="8">
                      <path
                        d="M1 1L6 6L11 1"
                        stroke="#FFD700"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-[#4A4A3C] flex justify-end gap-4">
              <button
                onClick={() => setIsEditModalOpen(false)}
                className="px-6 py-2 bg-transparent border-2 border-[#D4D4B0] text-[#D4D4B0] font-bold uppercase tracking-widest hover:bg-[#4A4A3C] transition-colors text-xs"
              >
                Cancel
              </button>
              <button
                onClick={handleEditBeat}
                disabled={isCreating}
                className="px-6 py-2 bg-[#FFD700] text-black font-black uppercase tracking-widest hover:bg-[#E4DA33] transition-colors border-2 border-[#FFD700] disabled:opacity-50 flex items-center gap-2 shadow-[0_0_15px_rgba(255,215,0,0.3)] text-xs"
              >
                {isCreating ? "UPDATING DB..." : "OVERWRITE DB"}
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Beat;
