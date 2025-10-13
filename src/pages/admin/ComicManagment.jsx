import React, { useState, useRef } from 'react';

// Constants for consistent styling
const COLORS = {
  primary: '#CBC895',
  primaryHover: '#B8B482',
  secondary: '#C0BC75',
  background: '#040404',
  text: '#F6F4D3',
  textSecondary: '#E0BC5A',
  textAccent: '#5ACFB5',
  danger: '#EB181B',
  dangerHover: '#D41519',
  dark: '#191A22',
  overlay: 'rgba(16,15,0,0.62)',
  modalBg: '#242730',
  modalBorder: '#C1BE91',
};

const SPACING = {
  xs: '0.5rem',
  sm: '1rem',
  md: '1.5rem',
  lg: '2rem',
  xl: '3rem',
};

// EditButton Component
const EditButton = ({ onClick, disabled = false }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="flex items-center justify-center gap-2 px-3 py-2 min-w-[100px] h-10 rounded-md bg-[#CBC895] shadow-[0_4px_1px_0_#000] hover:bg-[#B8B482] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#CBC895] focus:ring-offset-2"
      aria-label="Edit comic"
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5"
        aria-hidden="true"
      >
        <path
          d="M14.0135 4.0041C14.1805 4.0191 14.2535 4.2231 14.1335 4.3421L5.8135 12.6621C5.7195 12.7562 5.6522 12.8735 5.6185 13.0021L4.6185 16.8321C4.5855 16.9587 4.5862 17.0917 4.6204 17.2179C4.6547 17.3442 4.7214 17.4592 4.8139 17.5517C4.9064 17.6442 5.0215 17.7109 5.1477 17.7452C5.2739 17.7795 5.4069 17.7801 5.5335 17.7471L9.3625 16.7471C9.4912 16.7131 9.6086 16.6455 9.7025 16.5511L18.1405 8.1131C18.1669 8.086 18.2005 8.067 18.2374 8.0585C18.2742 8.0499 18.3127 8.052 18.3484 8.0646C18.3841 8.0773 18.4154 8.0998 18.4386 8.1297C18.4618 8.1596 18.476 8.1954 18.4795 8.2331C18.8307 11.5827 18.8106 14.9609 18.4195 18.3061C18.1965 20.2111 16.6655 21.7061 14.7675 21.9191C11.2911 22.3043 7.7829 22.3043 4.3065 21.9191C2.4075 21.7061 0.8765 20.2111 0.6535 18.3061C0.2415 14.7811 0.2415 11.2201 0.6535 7.6951C0.8765 5.7891 2.4075 4.2941 4.3065 4.0821C7.531 3.7247 10.7837 3.6986 14.0135 4.0041Z"
          fill="#191A22"
        />
        <path
          d="M15.36 5.2365C15.3832 5.2133 15.4108 5.1948 15.4412 5.1822C15.4715 5.1696 15.5041 5.1631 15.537 5.1631C15.5699 5.1631 15.6024 5.1696 15.6328 5.1822C15.6632 5.1948 15.6908 5.2133 15.714 5.2365L17.128 6.6515C17.1747 6.6984 17.2009 6.7619 17.2009 6.828C17.2009 6.8942 17.1747 6.9577 17.128 7.0045L8.835 15.2995C8.8035 15.331 8.7641 15.3534 8.721 15.3645L6.807 15.8645C6.7648 15.8755 6.7205 15.8753 6.6784 15.8639C6.6363 15.8525 6.598 15.8302 6.5671 15.7994C6.5363 15.7686 6.5141 15.7302 6.5026 15.6881C6.4912 15.6461 6.491 15.6017 6.502 15.5595L7.002 13.6455C7.0131 13.6024 7.0356 13.5631 7.067 13.5315L15.36 5.2365Z"
          fill="#191A22"
        />
      </svg>
      <span className="text-[#191A22] text-sm font-semibold">Edit</span>
    </button>
  );
};

// DeleteButton Component
const DeleteButton = ({ onClick, disabled = false }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="flex justify-center items-center gap-2 px-3 py-2 min-w-[100px] h-10 shadow-[0_4px_1px_0_#000] cursor-pointer bg-[#EB181B] rounded-md hover:bg-[#D41519] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#EB181B] focus:ring-offset-2"
      aria-label="Delete comic"
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5"
        aria-hidden="true"
      >
        <path
          d="M6.03659 19C6.03659 20.1 6.93659 21 8.03659 21H16.0366C17.1366 21 18.0366 20.1 18.0366 19V9C18.0366 7.9 17.1366 7 16.0366 7H8.03659C6.93659 7 6.03659 7.9 6.03659 9V19ZM18.0366 4H15.5366L14.8266 3.29C14.6466 3.11 14.3866 3 14.1266 3H9.94659C9.68659 3 9.42659 3.11 9.24659 3.29L8.53659 4H6.03659C5.48659 4 5.03659 4.45 5.03659 5C5.03659 5.55 5.48659 6 6.03659 6H18.0366C18.5866 6 19.0366 5.55 19.0366 5C19.0366 4.45 18.5866 4 18.0366 4Z"
          fill="white"
        />
      </svg>
      <span className="text-white text-sm font-bold">Delete</span>
    </button>
  );
};

// ComicCard Component
const ComicCard = ({ comic, onEdit, onDelete }) => {
  const handleEdit = () => {
    onEdit?.(comic);
  };

  const handleDelete = () => {
    onDelete?.(comic);
  };

  return (
    <article className="w-full max-w-[280px] min-w-[240px] flex flex-col bg-[#C0BC75] border border-[#C0BC75] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 alexandria-font">
      {/* Cover Image Container */}
      <div className="relative w-full aspect-[3/4] overflow-hidden">
        <img
          src={comic.coverImage}
          alt={`${comic.title} cover`}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          loading="lazy"
        />
      </div>
      
      {/* Content Container */}
      <div className="flex-1 bg-[#040404] p-4 flex flex-col">
        {/* Header */}
        <header className="mb-4">
          <h2 className="text-2xl md:text-3xl font-normal leading-tight tracking-tight text-white font-vision mb-2 overflow-hidden" style={{
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical'
          }}>
            {comic.title}
          </h2>
          <p className="text-[#E0BC5A] text-sm font-normal">
            by {comic.author}
          </p>
        </header>
        
        {/* Divider */}
        <div className="w-full h-px bg-[#C0BC75] mb-4" />
        
        {/* Comic Info */}
        <div className="space-y-2 mb-6">
          <div className="flex justify-between items-center">
            <span className="text-[#E0BC5A] text-sm font-normal">
              Chapters:
            </span>
            <span className="text-[#E0BC5A] text-sm font-normal">
              {comic.chapters}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-[#E0BC5A] text-sm font-normal">
              Status:
            </span>
            <span className="text-[#5ACFB5] text-sm font-normal capitalize">
              {comic.status}
            </span>
          </div>
        </div>
        
        {/* Action Buttons */}
        <div className="flex gap-2 mt-auto">
          <EditButton onClick={handleEdit} />
          <DeleteButton onClick={handleDelete} />
        </div>
      </div>
    </article>
  );
};

// ComicUploadArea Component
const ComicUploadArea = ({ onFileSelected }) => {
  const fileInputRef = useRef(null);
  const [dragOver, setDragOver] = useState(false);

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      console.log('Selected file:', files[0]);
      onFileSelected?.(files[0]);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = (event) => {
    event.preventDefault();
    setDragOver(false);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setDragOver(false);
    const files = event.dataTransfer.files;
    if (files && files.length > 0) {
      console.log('Dropped file:', files[0]);
      onFileSelected?.(files[0]);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleClick();
    }
  };

  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-8">
      <div
        className={`relative w-full h-64 md:h-80 lg:h-96 flex items-center justify-center bg-[#525132] border-2 border-dashed border-[#CBC895] rounded-lg transition-all duration-300 cursor-pointer group ${
          dragOver ? 'bg-[#5A5A3A] border-[#B8B482] scale-[1.02]' : 'hover:bg-[#5A5A3A] hover:border-[#B8B482]'
        }`}
        onClick={handleClick}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onKeyDown={handleKeyDown}
        role="button"
        tabIndex={0}
        aria-label="Upload comic book cover"
      >
         <div className="text-center">
           <img
             src="/assets/uploadicon.png"
             alt="Upload area placeholder"
             className="w-48 h-32 md:w-64 md:h-40 lg:w-80 lg:h-48 object-contain mx-auto mb-4 opacity-80 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
           />
           <div className="text-[#CBC895] text-sm md:text-base font-medium">
             <p className="mb-2">Click to upload or drag and drop</p>
             <p className="text-xs md:text-sm opacity-75">PNG, JPG, GIF up to 10MB</p>
           </div>
         </div>
        
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="hidden"
          aria-hidden="true"
        />
      </div>
    </section>
  );
};

// ComicGrid Component
const ComicGrid = ({ comics, onEdit, onDelete }) => {
  if (!comics || comics.length === 0) {
    return (
      <section className="w-full max-w-6xl mx-auto px-4 py-8">
        <div className="text-center py-16">
          <div className="text-[#CBC895] text-lg mb-4">No comics found</div>
          <p className="text-[#E0BC5A] text-sm opacity-75">Upload your first comic to get started</p>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 bg-[rgba(181,179,135,0.16)] border border-[#CBC895] rounded-lg p-6 alexandria-font">
        {comics.map((comic) => (
          <ComicCard
            key={comic.id}
            comic={comic}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))}
      </div>
    </section>
  );
};

// ComicDetailsModal Component
const ComicDetailsModal = ({ isOpen, onClose, selectedFile }) => {
  const [formData, setFormData] = useState({
    artistName: '',
    comicTitle: '',
    chapterTitle: '',
    description: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    onClose();
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
      document.removeEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="comic-details-title"
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="relative bg-[#242730] border-2 border-[#C1BE91] rounded-2xl p-4 md:p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto alexandria-font"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 text-[#F6F4D3] text-2xl hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#C1BE91] rounded-full w-8 h-8 flex items-center justify-center"
        >
          ✕
        </button>

        <h3 id="comic-details-title" className="text-[#F6F4D3] text-xl md:text-2xl mb-6 font-vision tracking-[0.2em] pr-8">
          COMIC DETAILS
        </h3>

        <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
          <div>
            <label htmlFor="artistName" className="block text-[#F6F4D3] mb-2 text-sm md:text-base">
              Artist Name
            </label>
            <input
              id="artistName"
              name="artistName"
              type="text"
              value={formData.artistName}
              onChange={handleInputChange}
              placeholder="Enter Artist Name"
              className="w-full h-10 md:h-12 rounded-lg bg-[#191A22] text-[#F6F4D3] placeholder-[#7D7D7D] px-3 md:px-4 outline-none focus:ring-2 focus:ring-[#C1BE91] transition-all"
              required
            />
          </div>
          
          <div>
            <label htmlFor="comicTitle" className="block text-[#F6F4D3] mb-2 text-sm md:text-base">
              Comic Title
            </label>
            <input
              id="comicTitle"
              name="comicTitle"
              type="text"
              value={formData.comicTitle}
              onChange={handleInputChange}
              placeholder="Enter Comic Title"
              className="w-full h-10 md:h-12 rounded-lg bg-[#191A22] text-[#F6F4D3] placeholder-[#7D7D7D] px-3 md:px-4 outline-none focus:ring-2 focus:ring-[#C1BE91] transition-all"
              required
            />
          </div>
          
          <div>
            <label htmlFor="chapterTitle" className="block text-[#F6F4D3] mb-2 text-sm md:text-base">
              Chapter Title
            </label>
            <input
              id="chapterTitle"
              name="chapterTitle"
              type="text"
              value={formData.chapterTitle}
              onChange={handleInputChange}
              placeholder="Enter Chapter Title"
              className="w-full h-10 md:h-12 rounded-lg bg-[#191A22] text-[#F6F4D3] placeholder-[#7D7D7D] px-3 md:px-4 outline-none focus:ring-2 focus:ring-[#C1BE91] transition-all"
              required
            />
          </div>
          
          <div>
            <label htmlFor="description" className="block text-[#F6F4D3] mb-2 text-sm md:text-base">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              rows={4}
              placeholder="Enter Comic Description"
              className="w-full rounded-lg bg-[#191A22] text-[#F6F4D3] placeholder-[#7D7D7D] p-3 md:p-4 outline-none resize-none focus:ring-2 focus:ring-[#C1BE91] transition-all"
              required
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-6 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 h-10 md:h-12 rounded-lg bg-[#3a3a3a] text-white hover:bg-[#4a4a4a] transition-colors focus:outline-none focus:ring-2 focus:ring-[#3a3a3a] focus:ring-offset-2 focus:ring-offset-[#242730]"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 h-10 md:h-12 rounded-lg bg-[#C1BE91] text-[#191A22] hover:bg-[#B8B482] transition-colors focus:outline-none focus:ring-2 focus:ring-[#C1BE91] focus:ring-offset-2 focus:ring-offset-[#242730] font-semibold"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// Main Comic Component
const Comic = () => {
  const [comics] = useState([
    {
      id: '1',
      title: 'Me and the Boys',
      author: 'SpaceRacoon',
      coverImage: '/assets/Me-and-the-boys.png',
      chapters: 2,
      status: 'active'
    },
    {
      id: '2',
      title: 'Spiderman',
      author: 'Marvel',
      coverImage: '/assets/spiderman.png',
      chapters: 2,
      status: 'active'
    },
    {
      id: '3',
      title: 'Iron man',
      author: 'Marvel',
      coverImage: '/assets/iron-man.png',
      chapters: 2,
      status: 'active'
    },
    {
      id: '4',
      title: 'Spuerman 1',
      author: 'DC',
      coverImage: '/assets/superman.png',
      chapters: 2,
      status: 'active'
    },
    {
      id: '5',
      title: 'Duck Walt',
      author: 'Disney',
      coverImage: '/assets/walt-disney.png',
      chapters: 2,
      status: 'active'
    }
  ]);

  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileSelected = (file) => {
    setSelectedFile(file);
    setIsDetailsOpen(true);
  };

  const handleEditComic = (comic) => {
    console.log('Edit comic:', comic);
  };

  const handleDeleteComic = (comic) => {
    console.log('Delete comic:', comic);
  };

  const handleCloseModal = () => {
    setIsDetailsOpen(false);
    setSelectedFile(null);
  };

  return (
    <main className="w-full min-h-screen bg-[rgba(16,15,0,0.62)] alexandria-font">
      <div className="container mx-auto px-4 py-8">
        <ComicUploadArea onFileSelected={handleFileSelected} />
        <ComicGrid 
          comics={comics}
          onEdit={handleEditComic}
          onDelete={handleDeleteComic}
        />
      </div>

      <ComicDetailsModal 
        isOpen={isDetailsOpen}
        onClose={handleCloseModal}
        selectedFile={selectedFile}
      />
    </main>
  );
};

export default Comic;