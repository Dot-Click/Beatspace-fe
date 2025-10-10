import React, { useState, useEffect, useCallback } from 'react';
import { DiskIcon, MusicIcon, UploadIcon } from '../../customIcons';

const Beat = () => {
  // BeatTable state
  const [beats, setBeats] = useState([
    {
      id: '1',
      name: 'Dark Trap Vibes',
      duration: '3:24',
      date: '2024-12-15',
      genre: 'Trap',
      tags: ['dark', 'hard', '808s'],
      plays: 1547,
      downloads: 89,
      donations: 25.50,
      isPlaying: false
    },
    {
      id: '2',
      name: 'UK Drill Storm',
      duration: '2:48',
      date: '2024-12-14',
      genre: 'Drill',
      tags: ['uk', 'drill', 'aggressive'],
      plays: 2103,
      downloads: 156,
      donations: 42.75
    },
    {
      id: '3',
      name: 'Boom Bap Classic',
      duration: '4:12',
      date: '2024-12-13',
      genre: 'Boom-bap',
      tags: ['uk', 'drill', 'aggressive'],
      plays: 892,
      downloads: 67,
      donations: 18.25
    },
    {
      id: '4',
      name: 'Lo-Fi Dreams',
      duration: '3:56',
      date: '2024-12-12',
      genre: 'Lo-Fi',
      tags: ['uk', 'drill', 'aggressive'],
      plays: 3241,
      downloads: 234,
      donations: 67.80
    },
    {
      id: '5',
      name: 'Electronic Pulse',
      duration: '3:33',
      date: '2024-12-11',
      genre: 'Electronic',
      tags: ['uk', 'drill', 'aggressive'],
      plays: 1876,
      downloads: 112,
      donations: 33.90
    }
  ]);

  // SearchAndFilter state
  const [searchTerm, setSearchTerm] = useState('');
  const [showGenreDropdown, setShowGenreDropdown] = useState(false);

  // AudioPlayer state
  const [volume, setVolume] = useState(75);
  const [currentTime, setCurrentTime] = useState(0); // Current time in seconds
  const [currentlyPlayingId, setCurrentlyPlayingId] = useState(null); // Track which beat is playing

  // Simple play/pause handler
  const handlePlayToggle = (id) => {
    console.log('handlePlayToggle called with id:', id);
    
    setBeats(prevBeats => {
      const currentBeat = prevBeats.find(beat => beat.id === id);
      const isCurrentlyPlaying = currentBeat?.isPlaying || false;
      
      console.log(`Beat ${id} is currently playing: ${isCurrentlyPlaying}`);
      
      // If this beat is currently playing, pause it
      if (isCurrentlyPlaying) {
        console.log('Pausing beat:', id);
        setCurrentlyPlayingId(null);
        return prevBeats.map(beat => ({
          ...beat,
          isPlaying: false
        }));
      } else {
        // If this beat is not playing, start it and stop all others
        console.log('Starting beat:', id);
        setCurrentlyPlayingId(id);
        setCurrentTime(0); // Reset timer for new beat
        return prevBeats.map(beat => ({
        ...beat,
          isPlaying: beat.id === id
        }));
      }
    });
  };

  const handleDelete = (id) => {
    setBeats(prevBeats => prevBeats.filter(beat => beat.id !== id));
  };


  const handleVolumeChange = (e) => {
    const newVolume = parseInt(e.target.value);
    setVolume(newVolume);
  };

  const handleVolumeInteraction = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const newVolume = Math.round((clickX / rect.width) * 100);
    setVolume(Math.max(0, Math.min(100, newVolume)));
  };

  const handleVolumeMouseDown = (e) => {
    e.preventDefault();
    handleVolumeInteraction(e);
    
    const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const newVolume = Math.round((clickX / rect.width) * 100);
    setVolume(Math.max(0, Math.min(100, newVolume)));
  };

    const handleMouseUp = () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  // Timer effect for currently playing beat
  useEffect(() => {
    let interval;
    if (currentlyPlayingId) {
      const playingBeat = beats.find(beat => beat.id === currentlyPlayingId);
      if (playingBeat) {
        console.log('Timer started for beat:', playingBeat.name);
        interval = setInterval(() => {
          setCurrentTime(prevTime => {
            const [minutes, seconds] = playingBeat.duration.split(':').map(Number);
            const totalSeconds = minutes * 60 + seconds;
            if (prevTime >= totalSeconds) {
              return 0; // Reset to start
            }
            return prevTime + 1;
          });
        }, 1000);
      }
    } else {
      console.log('No beat is currently playing - timer stopped');
    }
    return () => {
      if (interval) {
        clearInterval(interval);
        console.log('Timer cleared');
      }
    };
  }, [currentlyPlayingId, beats]);


  // Helper function to format time
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };


  // Stats data
  const stats = [
    { value: '5', label: 'Total Beats' },
    { value: '9,659', label: 'Total Plays' },
    { value: '658', label: 'Total Downloads' },
    { value: '€188.20', label: 'Total Donations' }
  ];

  // BeatRow component
  const BeatRow = ({ beat }) => {
    return (
      <tr className={`w-full h-20 lg:h-24 border-b border-[#D4D4B0] relative ${beat.isPlaying ? 'bg-[#C5C274]' : 'bg-[#4A4A3C]'}`}>
        <td className="px-3 lg:px-6 py-2">
          <div className="flex flex-col justify-center items-start gap-1">
            <div className={`text-sm lg:text-lg font-bold ${beat.isPlaying ? 'text-black' : 'text-[#D4D4B0]'}`} style={{ fontFamily: 'monospace', letterSpacing: '0.5px' }}>
              {beat.name}
            </div>
            <div className={`text-xs lg:text-sm font-normal ${beat.isPlaying ? 'text-black' : 'text-[#D4D4B0]'}`} style={{ fontFamily: 'monospace', letterSpacing: '0.3px' }}>
              {beat.duration} · {beat.date}
            </div>
          </div>
        </td>
        <td className="px-3 lg:px-6 py-2">
          <div className="flex flex-col justify-center items-start gap-2">
            <div className={`text-sm lg:text-lg font-bold ${beat.isPlaying ? 'text-black' : 'text-[#D4D4B0]'}`} style={{ fontFamily: 'monospace', letterSpacing: '0.5px' }}>
              {beat.genre}
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              {beat.tags.map((tag, index) => (
                <span
                  key={index}
                  className={`text-xs lg:text-sm font-normal px-2 py-1 rounded border ${beat.isPlaying ? 'text-black bg-[rgba(0,0,0,0.1)] border-black' : 'text-[#D4D4B0] bg-[rgba(212,212,176,0.2)] border-[#D4D4B0]'}`}
                  style={{ fontFamily: 'monospace', letterSpacing: '0.3px' }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </td>
        <td className="px-3 lg:px-6 py-2">
          <div className={`text-sm lg:text-lg font-bold ${beat.isPlaying ? 'text-black' : 'text-[#D4D4B0]'}`} style={{ fontFamily: 'monospace', letterSpacing: '0.5px' }}>
            {beat.plays.toLocaleString()}
          </div>
        </td>
        <td className="px-3 lg:px-6 py-2">
          <div className={`text-sm lg:text-lg font-bold ${beat.isPlaying ? 'text-black' : 'text-[#D4D4B0]'}`} style={{ fontFamily: 'monospace', letterSpacing: '0.5px' }}>
            {beat.downloads}
          </div>
        </td>
        <td className="px-3 lg:px-6 py-2">
          <div className={`text-sm lg:text-lg font-bold ${beat.isPlaying ? 'text-black' : 'text-[#D4D4B0]'}`} style={{ fontFamily: 'monospace', letterSpacing: '0.5px' }}>
            €{beat.donations.toFixed(2)}
          </div>
        </td>
        <td className="px-3 lg:px-6 py-2">
          <div className="flex items-center gap-3">
            <button
              onClick={() => handlePlayToggle(beat.id)}
              className="flex w-10 h-10 lg:w-12 lg:h-12 justify-center items-center bg-[#FFD700] hover:bg-[#FFA500] transition-colors duration-200 cursor-pointer select-none"
              style={{ fontFamily: 'monospace' }}
            >
              {beat.isPlaying ? (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="4" y="2" width="2" height="12" fill="white"/>
                  <rect x="10" y="2" width="2" height="12" fill="white"/>
                </svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 2L14 8L4 14V2Z" fill="white"/>
                </svg>
              )}
            </button>
            <button
              onClick={() => handleDelete(beat.id)}
              className="flex w-10 h-10 lg:w-12 lg:h-12 justify-center items-center bg-[#DC143C] hover:bg-[#B22222] transition-colors duration-200 cursor-pointer select-none"
              style={{ fontFamily: 'monospace' }}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 4L4 12M4 4L12 12" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
          </div>
        </td>
      </tr>
    );
  };

  // NowPlayingDropdown component - separated functionality
  const NowPlayingDropdown = ({ beat }) => {
  return (
      <tr className="bg-[#3C3C30]">
        <td colSpan="6" className="p-0">
          <div className="p-4 lg:p-6">
          <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-6 w-full">
            <button
                onClick={() => handlePlayToggle(beat.id)}
                className="flex w-12 h-12 lg:w-14 lg:h-14 justify-center items-center bg-[#FFD700] hover:bg-[#FFA500] transition-colors duration-200 cursor-pointer select-none"
                style={{ fontFamily: 'monospace' }}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="4" y="2" width="2" height="12" fill="white"/>
                  <rect x="10" y="2" width="2" height="12" fill="white"/>
                  </svg>
            </button>
            
              <div className="flex-1 w-full h-16 lg:h-20 bg-[#4A4A3C] border border-[#D4D4B0] relative overflow-hidden rounded">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex items-center gap-1">
                  {Array.from({ length: 50 }, (_, i) => (
                    <div
                      key={i}
                        className="bg-[#FFD700] w-1 rounded-full animate-pulse"
                      style={{
                          height: `${15 + (i % 3) * 10}px`,
                          animationDelay: `${i * 0.1}s`,
                          animationDuration: '1s',
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-4 lg:gap-6">
                <div className="text-[#FFD700] text-sm lg:text-lg font-bold" style={{ fontFamily: 'monospace', letterSpacing: '0.5px' }}>
                  {formatTime(currentTime)} / {beat.duration}
              </div>
              <div className="flex items-center gap-2">
                <svg width="24" height="28" viewBox="0 0 33 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.579 1.24507C18.8372 1.06034 19.1394 0.94658 19.4554 0.91516C19.7713 0.883739 20.09 0.935752 20.3796 1.06601C20.6691 1.19626 20.9195 1.4002 21.1056 1.65745C21.2916 1.91471 21.407 2.21629 21.4401 2.53207L21.45 2.72017V28.48C21.4501 28.7975 21.3669 29.1095 21.2087 29.3848C21.0505 29.6601 20.8229 29.8891 20.5485 30.0489C20.2741 30.2087 19.9626 30.2938 19.6451 30.2955C19.3276 30.2973 19.0152 30.2158 18.739 30.059L18.5806 29.9567L7.722 22.2001H3.3C2.46745 22.2003 1.66557 21.8859 1.0551 21.3198C0.444627 20.7537 0.0706916 19.9778 0.00825035 19.1476L1.65442e-07 18.9001V12.3001C-0.000263306 11.4675 0.314171 10.6656 0.88027 10.0552C1.44637 9.44469 2.22229 9.07076 3.0525 9.00832L3.3 9.00007H7.722L18.579 1.24507Z" fill="white"/>
                </svg>
                <div 
                    className="w-24 lg:w-32 h-2 bg-[#4A4A3C] border border-[#D4D4B0] relative cursor-pointer rounded"
                    onClick={handleVolumeInteraction}
                    onMouseDown={handleVolumeMouseDown}
                >
                  <div 
                      className="h-full bg-[#FFD700] transition-all duration-200 rounded" 
                    style={{ width: `${volume}%` }}
                  />
                  <div 
                    className="absolute w-3 h-3 bg-white rounded-full -top-[2px] cursor-pointer hover:scale-110 transition-transform duration-200"
                    style={{ left: `${volume}%`, transform: 'translateX(-50%)' }}
                      onMouseDown={handleVolumeMouseDown}
                  />
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={volume}
                    onChange={handleVolumeChange}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                </div>
              </div>
                <div className="text-[#FFD700] text-sm lg:text-lg font-bold" style={{ fontFamily: 'monospace', letterSpacing: '0.5px' }}>
                {volume}%
              </div>
            </div>
          </div>
            <div className="text-[#FFD700] text-sm lg:text-lg font-bold text-center lg:text-left mt-4" style={{ fontFamily: 'monospace', letterSpacing: '1px' }}>
              Now Playing: {beat.name}
            </div>
          </div>
        </td>
      </tr>
    );
  };

  return (
    <div className="min-h-screen alexandria-font">
        {/* Upload Area */}
        <section className="w-full flex flex-col items-center ">
          <div className="w-full  h-[200px] lg:h-[250px] flex items-center justify-center relative bg-[#CBC895] border-[3px] border-dotted border-[#D4D4B0] rounded-lg">
            <div className="w-full h-auto flex flex-col items-center gap-4 p-6 lg:p-8">
              {/* Central Icons */}
              <div className="relative flex items-center justify-center">
                {/* CD Icon */}
                  <DiskIcon />               
              </div>
              
              {/* Main Instruction Text */}
              <div className="text-[#FFD700] text-lg lg:text-xl font-bold text-center" style={{ fontFamily: 'monospace', letterSpacing: '1px' }}>
                DRAG & DROP MP3/WAV HERE OR CLICK TO UPLOAD
              </div>
              
              {/* Additional Information Text */}
              <div className="text-white text-sm lg:text-base text-center" style={{ fontFamily: 'monospace', letterSpacing: '0.5px' }}>
                Maximum file size: 50MB | Supported formats: MP3, WAV
              </div>
            </div>
          </div>
        </section>

        {/* Search and Filter */}
        <div className="w-full flex flex-col lg:flex-row items-start gap-4 mt-6">
          <div className="flex-1 w-full">
            <input
              type="text"
              placeholder="Search beats..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full h-12 lg:h-14 text-[#9C963A] text-base lg:text-lg font-normal bg-[#4A4A3C] px-4 lg:px-6 py-3 border border-[#D4D4B0] focus:outline-none focus:border-[#E4DA33] transition-colors duration-200"
              style={{ fontFamily: 'monospace', letterSpacing: '0.5px' }}
            />
          </div>
          <div className="w-full lg:w-auto relative">
            <button 
              onClick={() => setShowGenreDropdown(!showGenreDropdown)}
              className="w-full lg:w-[200px] h-12 lg:h-14 bg-[#D4D4B0] border border-[#D4D4B0] flex items-center justify-between px-4 lg:px-6 cursor-pointer hover:bg-[#E4E4C0] transition-colors duration-200"
            >
              <span className="text-[#191A22] text-base lg:text-lg font-semibold" style={{ fontFamily: 'monospace', letterSpacing: '0.5px' }}>
                All Genres
              </span>
              <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L6 6L11 1" stroke="#191A22" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            
            {/* Dropdown Menu */}
            {showGenreDropdown && (
              <div className="absolute top-full left-0 right-0 bg-[#D4D4B0] border border-[#D4D4B0] border-t-0 z-10">
                <div className="p-2">
                  <div className="text-[#191A22] text-sm font-semibold px-3 py-2 hover:bg-[#E4E4C0] cursor-pointer" style={{ fontFamily: 'monospace', letterSpacing: '0.5px' }}>
                    All Genres
                  </div>
                  <div className="text-[#191A22] text-sm font-semibold px-3 py-2 hover:bg-[#E4E4C0] cursor-pointer" style={{ fontFamily: 'monospace', letterSpacing: '0.5px' }}>
                    Trap
                  </div>
                  <div className="text-[#191A22] text-sm font-semibold px-3 py-2 hover:bg-[#E4E4C0] cursor-pointer" style={{ fontFamily: 'monospace', letterSpacing: '0.5px' }}>
                    Drill
                  </div>
                  <div className="text-[#191A22] text-sm font-semibold px-3 py-2 hover:bg-[#E4E4C0] cursor-pointer" style={{ fontFamily: 'monospace', letterSpacing: '0.5px' }}>
                    Boom-bap
                  </div>
                  <div className="text-[#191A22] text-sm font-semibold px-3 py-2 hover:bg-[#E4E4C0] cursor-pointer" style={{ fontFamily: 'monospace', letterSpacing: '0.5px' }}>
                    Lo-Fi
                  </div>
                  <div className="text-[#191A22] text-sm font-semibold px-3 py-2 hover:bg-[#E4E4C0] cursor-pointer" style={{ fontFamily: 'monospace', letterSpacing: '0.5px' }}>
                    Electronic
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Beat Table */}
        <section className="w-full relative mt-6 overflow-hidden">
          <header className="w-full h-16 lg:h-20 flex items-center bg-black px-4 lg:px-8">
            <div className="w-full grid grid-cols-6 gap-2 lg:gap-4 text-[#D4D4B0] text-sm lg:text-lg font-bold uppercase" style={{ fontFamily: 'monospace', letterSpacing: '1px' }}>
              <div className="flex items-center gap-2">
                <span>BEAT NAME</span>
                <MusicIcon />
              </div>
              <div>GENRE / TAGS</div>
              <div>PLAYS</div>
              <div>DOWNLOADS</div>
              <div>DONATIONS (€)</div>
              <div>ACTIONS</div>
            </div>
          </header>
          <div className="bg-transparent">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[800px]">
                <tbody>
                  {beats.map((beat) => (
                    <React.Fragment key={beat.id}>
                      <BeatRow beat={beat} />
                      {beat.isPlaying && <NowPlayingDropdown beat={beat} />}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>


        {/* Stats Footer */}
        <footer className="flex flex-col lg:flex-row items-center justify-around bg-[#3C3C30] px-4 lg:px-8 py-6 lg:py-8 gap-4 lg:gap-0">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col justify-center items-center gap-2 text-center">
              <div className="text-[#D4D4B0] text-lg lg:text-xl font-bold" style={{ fontFamily: 'monospace', letterSpacing: '0.5px' }}>
                {stat.value}
              </div>
              <div className="text-[#D4D4B0] text-sm lg:text-lg font-normal" style={{ fontFamily: 'monospace', letterSpacing: '0.3px' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </footer>
    </div>
  );
};

export default Beat;
