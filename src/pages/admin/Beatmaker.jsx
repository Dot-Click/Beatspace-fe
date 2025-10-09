import React, { useState, useCallback, useMemo } from 'react';
import { IconUpload, IconMusic, IconChevronDown, IconPlayerPlay, IconPlayerPause, IconX, IconVolume } from '@tabler/icons-react';


const Beatmaker = () => {
  const [isDragOver, setIsDragOver] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('All Genres');
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(null);
  const [currentTime, setCurrentTime] = useState('0:01');
  const [duration, setDuration] = useState('3:24');
  const [volume, setVolume] = useState(75);

  const handleDragOver = useCallback((e) => {
    e.preventDefault();
    setIsDragOver(true);
  }, []);

  const handleDragLeave = useCallback((e) => {
    e.preventDefault();
    setIsDragOver(false);
  }, []);

  const handleDrop = useCallback((e) => {
    e.preventDefault();
    setIsDragOver(false);
    
    const files = Array.from(e.dataTransfer.files);
    const audioFiles = files.filter(file => {
      const fileType = file.type.toLowerCase();
      const fileName = file.name.toLowerCase();
      return fileType.includes('audio') || 
             fileName.endsWith('.mp3') || 
             fileName.endsWith('.wav') || 
             fileName.endsWith('.midi') || 
             fileName.endsWith('.mid');
    });

    if (audioFiles.length > 0) {
      setUploadedFiles(prev => [...prev, ...audioFiles]);
    }
  }, []);

  const handleFileSelect = useCallback((e) => {
    const files = Array.from(e.target.files);
    setUploadedFiles(prev => [...prev, ...files]);
  }, []);

  const handleClick = () => {
    document.getElementById('file-input').click();
  };

  const genres = [
    'All Genres', 'Hip Hop', 'Trap', 'R&B', 'Pop', 'Rock', 'Electronic', 'Jazz', 'Classical'
  ];

  // Sample beats data
  const beatsData = useMemo(() => [
    {
      id: 1,
      name: 'Dark Trap Vibes',
      date: '3:24 • 2024-12-15',
      genre: 'Trap',
      tags: ['dark', 'hard', '808s'],
      plays: 1547,
      downloads: 89,
      donations: '€25.50'
    },
    {
      id: 2,
      name: 'Chill Lo-Fi Beat',
      date: '2:45 • 2024-12-14',
      genre: 'Lo-Fi',
      tags: ['chill', 'soft', 'piano'],
      plays: 892,
      downloads: 45,
      donations: '€12.30'
    },
    {
      id: 3,
      name: 'Heavy Bass Drop',
      date: '3:12 • 2024-12-13',
      genre: 'Electronic',
      tags: ['bass', 'drop', 'energy'],
      plays: 2103,
      downloads: 156,
      donations: '€45.80'
    },
    {
      id: 4,
      name: 'Smooth Jazz Fusion',
      date: '4:01 • 2024-12-12',
      genre: 'Jazz',
      tags: ['smooth', 'fusion', 'sax'],
      plays: 634,
      downloads: 23,
      donations: '€8.90'
    }
  ], []);

  // Compute filtered beats from search and genre
  const filteredBeats = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return beatsData.filter((beat) => {
      const matchesGenre = selectedGenre === 'All Genres' || beat.genre === selectedGenre;
      const searchable = `${beat.name} ${beat.genre} ${beat.tags.join(' ')}`.toLowerCase();
      const matchesSearch = q === '' || searchable.includes(q);
      return matchesGenre && matchesSearch;
    });
  }, [beatsData, searchQuery, selectedGenre]);

  // Table columns configuration
  const columns = useMemo(() => [
    {
      accessorKey: 'name',
      header: 'BEAT NAME 🎵',
      Cell: ({ row }) => (
        <div>
          <div className="font-bold text-[#1a1a1a] alexandria-font" style={{ fontFamily: 'Alexandria, sans-serif' }}>{row.original.name}</div>
          <div className="text-xs text-[#6b6151] alexandria-font" style={{ fontFamily: 'Alexandria, sans-serif' }}>{row.original.date}</div>
          {currentTrack?.id === row.original.id && (
            <div className="mt-3">
              <div className="w-full h-[2px] bg-[#d4af37] rounded" />
            </div>
          )}
        </div>
      ),
    },
    {
      accessorKey: 'genre',
      header: 'GENRE / TAGS',
      Cell: ({ row }) => (
        <div>
          <div className="text-[#1a1a1a] mb-2 alexandria-font" style={{ fontFamily: 'Alexandria, sans-serif', fontWeight: 600 }}>{row.original.genre}</div>
          <div className="flex gap-2 flex-wrap">
            {row.original.tags.map((tag, index) => (
              <span
                key={index}
                className="px-2 py-0.5 rounded-sm text-[10px] uppercase tracking-wide border alexandria-font"
                style={{
                  backgroundColor: '#3c3c3c',
                  color: '#c9c9c9',
                  borderColor: '#666',
                  fontFamily: 'Alexandria, sans-serif',
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      ),
    },
    {
      accessorKey: 'plays',
      header: 'PLAYS',
      Cell: ({ cell }) => (
        <span
          className="text-[#1a1a1a] alexandria-font"
          style={{ fontFamily: 'Alexandria, sans-serif', fontVariantNumeric: 'tabular-nums' }}
        >
          {Number(cell.getValue()).toLocaleString()}
        </span>
      ),
    },
    {
      accessorKey: 'downloads',
      header: 'DOWNLOADS',
      Cell: ({ cell }) => (
        <span
          className="text-[#1a1a1a] alexandria-font"
          style={{ fontFamily: 'Alexandria, sans-serif', fontVariantNumeric: 'tabular-nums' }}
        >
          {Number(cell.getValue()).toLocaleString()}
        </span>
      ),
    },
    {
      accessorKey: 'donations',
      header: 'DONATIONS (€)',
      Cell: ({ cell }) => (
        <span
          className="text-[#1a1a1a] alexandria-font"
          style={{ fontFamily: 'Alexandria, sans-serif', fontVariantNumeric: 'tabular-nums' }}
        >
          {cell.getValue()}
        </span>
      ),
    },
    {
      accessorKey: 'actions',
      header: 'ACTIONS',
      Cell: ({ row }) => (
        <div className="flex gap-2">
          <button 
            className="w-7 h-7 bg-[#ffd84d] hover:bg-[#ffcc1a] text-black rounded-sm border border-[#d4af37] flex items-center justify-center transition-colors"
            onClick={() => handlePlayPause(row.original)}
            aria-label={currentTrack?.id === row.original.id && isPlaying ? 'Pause' : 'Play'}
          >
            {currentTrack?.id === row.original.id && isPlaying ? (
              <IconPlayerPause size={16} />
            ) : (
              <IconPlayerPlay size={16} />
            )}
          </button>
          <button
            className="w-7 h-7 bg-[#c94c4c] hover:bg-[#b93b3b] text-white rounded-sm border border-[#d4af37] flex items-center justify-center transition-colors"
            aria-label="Delete"
          >
            <IconX size={14} />
          </button>
        </div>
      ),
    },
  ], [currentTrack, isPlaying]);

  const handlePlayPause = (track) => {
    if (currentTrack?.id === track.id) {
      setIsPlaying(!isPlaying);
    } else {
      setCurrentTrack(track);
      setIsPlaying(true);
    }
  };

  // Mantine table removed; using custom layout below.

  return (
    <div className="alexandria-font" style={{ fontFamily: 'Alexandria, sans-serif' }}>
      <div className="max-w-full">
        {/* Dotted Border Container */}
        <div>
        <div 
          className={`
            relative border-4 border-dashed border-[#d4af37] rounded-lg
            bg-[#C5C27459] transition-all duration-300 ease-in-out
            ${isDragOver ? 'border-[#b8941f] scale-105' : ''}
            cursor-pointer
          `}
          style={{
            minHeight: '200px',
            backgroundImage: `radial-gradient(circle, #d4af37 1px, transparent 1px)`,
  
          }}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={handleClick}
        >
          {/* Content Container */}
          <div className="flex flex-col items-center justify-center h-full py-4 px-2">
            {/* Vinyl Record Icon */}
            <div className="relative mb-8">
              <div className="w-24 h-24 bg-[#ffd700] rounded-full border-4 border-[#d4af37] flex items-center justify-center relative">
                {/* Vinyl record design */}
                <div className="w-16 h-16 bg-[#f5f1e8] rounded-full border-2 border-[#d4af37] flex items-center justify-center">
                  <div className="w-4 h-4 bg-[#d4af37] rounded-full"></div>
                </div>
                {/* Download arrow */}
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-[#ff6b35] rounded-full flex items-center justify-center">
                  <IconUpload size={16} className="text-white" />
                </div>
              </div>
            </div>

            {/* Main Text */}
             <h1 className="text-xl font-bold text-[#d4af37] text-center " style={{ fontFamily: 'Alexandria, sans-serif' }}>
               DRAG & DROP MP3/MIDI/WAV HERE OR CLICK TO UPLOAD
             </h1>

            {/* Subtitle */}
            <h1 className="text-sm mt-2 text-[#8b7355] text-center" style={{ fontFamily: 'Alexandria, sans-serif' }}>
              Maximum file size 50MB | Supported formats: MP3, WAV
            </h1>

            {/* Hidden File Input */}
            <input
              id="file-input"
              type="file"
              multiple
              accept=".mp3,.wav,.midi,.mid,audio/*"
              onChange={handleFileSelect}
              className="hidden"
            />
          </div>

          {/* Drag Overlay */}
          {isDragOver && (
            <div className="absolute inset-0 bg-[#d4af37] bg-opacity-10 rounded-lg flex items-center justify-center">
              <div className="text-[#d4af37] text-xl font-bold">
                Drop your files here!
              </div>
            </div>
          )}
        </div>

        {/* Uploaded Files Display */}
        {uploadedFiles.length > 0 && (
          <div className="mt-8 bg-white rounded-lg border-2 border-[#d4af37] p-6">
            <h3 className="text-lg font-bold text-[#d4af37] mb-4 flex items-center" style={{ fontFamily: 'Alexandria, sans-serif' }}>
              <IconMusic size={20} className="mr-2" />
              Uploaded Files ({uploadedFiles.length})
            </h3>
            <div className="space-y-3">
              {uploadedFiles.map((file, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-[#f5f1e8] rounded-lg border border-[#d4af37]">
                  <div className="flex items-center">
                    <IconMusic size={16} className="text-[#d4af37] mr-2" />
                    <span className="text-[#8b7355] font-medium" style={{ fontFamily: 'Alexandria, sans-serif' }}>{file.name}</span>
                  </div>
                  <div className="text-sm text-[#8b7355]" style={{ fontFamily: 'Alexandria, sans-serif' }}>
                    {(file.size / 1024 / 1024).toFixed(2)} MB
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Search Bar Section */}
       
          <div className="flex flex-col md:flex-row gap-4 items-center mt-6">
            {/* Search Input */}
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="Search beats..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full border-2 border-[#d4af37] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4af37] bg-[#f5f1e8] text-[#8b7355] placeholder-[#8b7355] text-sm placeholder:text-sm px-3 py-2 h-10 leading-tight font-normal"
                style={{ fontFamily: 'Alexandria, sans-serif' }}
              />
            </div>

            {/* Genre Dropdown */}
            <div className="relative">
              <select
                value={selectedGenre}
                onChange={(e) => setSelectedGenre(e.target.value)}
                className="appearance-none bg-[#d4af37] text-black rounded-lg border-2 border-[#d4af37] 
                 cursor-pointer hover:bg-[#b8941f] transition-colors duration-200 text-sm font-normal h-10 px-3 pr-8 shadow-sm"
                style={{ fontFamily: 'Alexandria, sans-serif' }}
              >
                {genres.map((genre) => (
                  <option key={genre} value={genre} className="bg-white text-[#8b7355] text-sm font-normal">
                    {genre}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <IconChevronDown size={16} className="text-black" />
              </div>
            </div>
          </div>
      

         {/* Beats Table Section */}
         <div className="mt-6">
           <div className="bg-[#101010] rounded-lg overflow-hidden alexandria-font border-2 border-[#C1BE91]">
             <header className="bg-[#2A2B35] px-4 sm:px-7 py-6 border-b-2 border-[#C1BE91]">
               <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-0">
                 <div className="lg:w-[19.5%] lg:pr-6 flex items-center gap-2.5">
                   <h1 className="text-[#C1BE91] text-sm uppercase tracking-wide">Beat Name</h1>
                 </div>
                 <div className="lg:w-[21%] lg:pr-6 text-[#C1BE91] text-sm uppercase tracking-wide">Genre / Tags</div>
                 <div className="lg:w-[12%] lg:pr-6 text-[#C1BE91] text-sm uppercase tracking-wide">Plays</div>
                 <div className="lg:w-[11.5%] lg:pr-6 text-[#C1BE91] text-sm uppercase tracking-wide">Downloads</div>
                 <div className="lg:w-[15%] lg:pr-6 text-[#C1BE91] text-sm uppercase tracking-wide">Donations (€)</div>
                 <div className="lg:w-[21%] text-[#C1BE91] text-sm uppercase tracking-wide text-left lg:text-right">Actions</div>
               </div>
             </header>
             <main style={{ backgroundColor: '#F5F1E8' }}>
               {filteredBeats.map((beat) => (
                <BeatRow
                  key={beat.id}
                  beat={beat}
                  isCurrent={currentTrack?.id === beat.id}
                  isPlaying={isPlaying}
                  onPlayPause={() => handlePlayPause(beat)}
                />
               ))}
             </main>
           </div>
         </div>

         {/* Audio Player Section */}
         {currentTrack && (
           <div className="mt-8 bg-[#2d3748] rounded-lg p-6">
             <div className="flex items-center justify-between mb-4">
               <div className="flex items-center gap-4">
                 <button 
                   className="bg-yellow-500 hover:bg-yellow-600 text-black p-2 rounded transition-colors"
                   onClick={() => setIsPlaying(!isPlaying)}
                 >
                   {isPlaying ? <IconPlayerPause size={20} /> : <IconPlayerPlay size={20} />}
                 </button>
                 
                 {/* Waveform Visualization */}
                 <div className="flex-1 bg-[#1a202c] rounded p-2 flex items-center gap-1">
                   {Array.from({ length: 50 }).map((_, i) => (
                     <div
                       key={i}
                       className="bg-yellow-500 rounded-sm"
                       style={{
                         width: '2px',
                         height: `${Math.random() * 20 + 5}px`,
                         opacity: i < 15 ? 1 : 0.3,
                       }}
                     />
                   ))}
                 </div>

                 <div className="text-white text-sm" style={{ fontFamily: 'Alexandria, sans-serif' }}>
                   {currentTime} / {duration}
                 </div>

                 <div className="flex items-center gap-2">
                   <IconVolume size={16} className="text-white" />
                   <div className="w-20 bg-[#1a202c] rounded-full h-2 relative">
                     <div 
                       className="bg-yellow-500 h-full rounded-full"
                       style={{ width: `${volume}%` }}
                     />
                     <div 
                       className="absolute top-1/2 transform -translate-y-1/2 w-3 h-3 bg-white rounded-full border-2 border-yellow-500"
                       style={{ left: `${volume}%`, marginLeft: '-6px' }}
                     />
                   </div>
                   <span className="text-white text-sm" style={{ fontFamily: 'Alexandria, sans-serif' }}>{volume}%</span>
                 </div>
               </div>
             </div>

             <div className="w-full bg-yellow-500 h-1 rounded-full mb-2">
               <div className="bg-yellow-600 h-full rounded-full" style={{ width: '25%' }} />
             </div>

             <div className="text-center text-yellow-500 font-bold" style={{ fontFamily: 'Alexandria, sans-serif' }}>
               Now Playing: {currentTrack.name}
             </div>
           </div>
         )}
         
       </div>
       </div>

       {/* Statistics Footer */}
       <div className="mt-12 bg-[#1a202c] text-white p-6 rounded-lg">
         <div className="grid grid-cols-4 gap-8 text-center">
           <div>
             <div className="text-3xl font-bold text-yellow-500" style={{ fontFamily: 'Alexandria, sans-serif' }}>5</div>
             <div className="text-sm text-gray-400" style={{ fontFamily: 'Alexandria, sans-serif' }}>Total Beats</div>
           </div>
           <div>
             <div className="text-3xl font-bold text-yellow-500" style={{ fontFamily: 'Alexandria, sans-serif' }}>9,659</div>
             <div className="text-sm text-gray-400" style={{ fontFamily: 'Alexandria, sans-serif' }}>Total Plays</div>
           </div>
           <div>
             <div className="text-3xl font-bold text-yellow-500" style={{ fontFamily: 'Alexandria, sans-serif' }}>658</div>
             <div className="text-sm text-gray-400" style={{ fontFamily: 'Alexandria, sans-serif' }}>Total Downloads</div>
           </div>
           <div>
             <div className="text-3xl font-bold text-yellow-500" style={{ fontFamily: 'Alexandria, sans-serif' }}>€188.20</div>
             <div className="text-sm text-gray-400" style={{ fontFamily: 'Alexandria, sans-serif' }}>Total Donations</div>
           </div>
         </div>
       </div>
     </div>
   );
};

export default Beatmaker;


// Helper buttons styled to match tabledesign.jsx
const PlayButton = ({ onClick }) => (
  <button
    className="w-[55px] h-12 flex items-center justify-center border-2 rounded-sm hover:bg-[#FFEF2E1A] transition-colors"
    style={{ borderColor: '#FFEF2E' }}
    onClick={onClick}
    aria-label="Play"
  >
    <IconPlayerPlay size={20} color="#FFEF2E" />
  </button>
);

const PauseButton = ({ onClick }) => (
  <button
    className="w-[55px] h-12 flex items-center justify-center border-2 rounded-sm hover:bg-[#FFEF2E1A] transition-colors"
    style={{ borderColor: '#FFEF2E' }}
    onClick={onClick}
    aria-label="Pause"
  >
    <IconPlayerPause size={18} color="#FFEF2E" />
  </button>
);

const DeleteButton = ({ onClick }) => (
  <button
    className="w-[55px] h-12 flex items-center justify-center border-2 rounded-sm"
    style={{ borderColor: '#c94c4c', backgroundColor: 'rgba(201, 76, 76, 0.13)' }}
    onClick={onClick}
    aria-label="Delete"
  >
    <IconX size={18} color="#c94c4c" />
  </button>
);

function BeatRow({ beat, isCurrent, isPlaying, onPlayPause }) {
  return (
    <div className={`px-4 sm:px-7 py-4 border-b border-[#C1BE91] ${isCurrent ? 'bg-[#6B7B3A]' : ''}`}>
      <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-0">
        <div className="lg:w-[19.5%] lg:pr-6">
          <div className="font-bold text-[#1a1a1a]" style={{ fontFamily: 'Alexandria, sans-serif' }}>{beat.name}</div>
          <div className="text-xs text-[#6b6151]" style={{ fontFamily: 'Alexandria, sans-serif' }}>{beat.date}</div>
          {isCurrent && (
            <div className="mt-3"><div className="w-full h-[2px] bg-[#d4af37] rounded" /></div>
          )}
        </div>
        <div className="lg:w-[21%] lg:pr-6">
          <div className="text-[#1a1a1a] mb-2" style={{ fontFamily: 'Alexandria, sans-serif', fontWeight: 600 }}>{beat.genre}</div>
          <div className="flex gap-2 flex-wrap">
            {beat.tags.map((tag, idx) => (
              <span key={idx} className="px-2 py-0.5 rounded-sm text-[10px] uppercase tracking-wide border" style={{ backgroundColor: '#3c3c3c', color: '#c9c9c9', borderColor: '#666', fontFamily: 'Alexandria, sans-serif' }}>{tag}</span>
            ))}
          </div>
        </div>
        <div className="lg:w-[12%] lg:pr-6">
          <span className="text-[#1a1a1a]" style={{ fontFamily: 'Alexandria, sans-serif', fontVariantNumeric: 'tabular-nums' }}>{Number(beat.plays).toLocaleString()}</span>
        </div>
        <div className="lg:w-[11.5%] lg:pr-6">
          <span className="text-[#1a1a1a]" style={{ fontFamily: 'Alexandria, sans-serif', fontVariantNumeric: 'tabular-nums' }}>{Number(beat.downloads).toLocaleString()}</span>
        </div>
        <div className="lg:w-[15%] lg:pr-6">
          <span className="text-[#1a1a1a]" style={{ fontFamily: 'Alexandria, sans-serif', fontVariantNumeric: 'tabular-nums' }}>{beat.donations}</span>
        </div>
        <div className="lg:w-[21%] flex justify-start lg:justify-end gap-2">
          <button className="w-7 h-7 bg-[#ffd84d] hover:bg-[#ffcc1a] text-black rounded-sm border border-[#d4af37] flex items-center justify-center transition-colors" onClick={onPlayPause} aria-label={isCurrent && isPlaying ? 'Pause' : 'Play'}>
            {isCurrent && isPlaying ? <IconPlayerPause size={16} /> : <IconPlayerPlay size={16} />}
          </button>
          <button className="w-7 h-7 bg-[#c94c4c] hover:bg-[#b93b3b] text-white rounded-sm border border-[#d4af37] flex items-center justify-center transition-colors" aria-label="Delete">
            <IconX size={16} />
          </button>
        </div>
      </div>
    </div>
  );
 }