import React, { useState, useRef } from 'react';

// EditButton Component
const EditButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-[109px] h-[42px] rounded-[6.341px] bg-[#CBC895] shadow-[0_5.549px_1.585px_0_#000] cursor-pointer flex items-center justify-center gap-2 px-[10.305px] py-[11.098px] hover:bg-[#B8B482] transition-colors"
      aria-label="Edit comic"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5"
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
const DeleteButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex w-[109px] h-[42px] justify-center items-center gap-[7.927px] shadow-[0_5.549px_1.585px_0_#000] cursor-pointer bg-[#EB181B] px-[10.305px] py-[11.098px] rounded-[6.341px] max-sm:w-full hover:bg-[#D41519] transition-colors"
      aria-label="Delete comic"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
      >
        <path
          d="M6.03659 19C6.03659 20.1 6.93659 21 8.03659 21H16.0366C17.1366 21 18.0366 20.1 18.0366 19V9C18.0366 7.9 17.1366 7 16.0366 7H8.03659C6.93659 7 6.03659 7.9 6.03659 9V19ZM18.0366 4H15.5366L14.8266 3.29C14.6466 3.11 14.3866 3 14.1266 3H9.94659C9.68659 3 9.42659 3.11 9.24659 3.29L8.53659 4H6.03659C5.48659 4 5.03659 4.45 5.03659 5C5.03659 5.55 5.48659 6 6.03659 6H18.0366C18.5866 6 19.0366 5.55 19.0366 5C19.0366 4.45 18.5866 4 18.0366 4Z"
          fill="white"
        />
      </svg>
      <span className="text-white text-sm font-bold leading-[22px]">Delete</span>
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
    <article className="w-[272px] h-[636px] relative border flex flex-col bg-[#C0BC75] border-solid border-[#C0BC75] max-md:w-[250px] max-sm:w-[90%] max-sm:max-w-[300px] max-sm:h-auto max-sm:min-h-[500px] alexandria-font">
      <div className="relative">
        <img
          src={comic.coverImage}
          alt={`${comic.title} cover`}
          className="w-[253px] h-[392px] object-cover absolute left-[9px] top-[7px] max-md:w-[231px] max-md:left-[9px] max-sm:w-[calc(100%_-_18px)] max-sm:h-[300px] max-sm:relative max-sm:left-[9px] max-sm:top-[7px]"
        />
      </div>
      
      <div className="w-[252px] h-[215px] absolute bg-[#040404] p-0 left-3 top-[408px] max-md:w-[230px] max-sm:w-[calc(100%_-_24px)] max-sm:h-[180px] max-sm:relative max-sm:left-3 max-sm:top-2.5">
        <header className="flex flex-col items-start gap-[11px] absolute w-[207px] h-[57px] left-[11px] top-[21px] max-md:w-[185px] max-sm:relative max-sm:w-[calc(100%_-_22px)] max-sm:left-[11px] max-sm:top-[15px]">
          <h2 className="text-5xl font-normal leading-7 tracking-[-0.96px] bg-clip-text self-stretch max-sm:text-4xl max-sm:leading-6 text-white font-vision">
            {comic.title}
          </h2>
          <p className="text-[#E0BC5A] text-sm font-normal leading-[17px]">
            by {comic.author}
          </p>
        </header>
        
        <div className="w-[230px] h-px absolute bg-[#C0BC75] left-[15px] top-24 max-sm:relative max-sm:w-[calc(100%_-_30px)] max-sm:left-[15px] max-sm:top-5" />
        
        <div className="flex flex-col items-center gap-1 absolute w-[230px] h-10 left-[11px] top-[103px] max-md:w-52 max-sm:relative max-sm:w-[calc(100%_-_22px)] max-sm:left-[11px] max-sm:top-[25px]">
          <div className="flex justify-between items-center w-full">
            <span className="text-[#E0BC5A] text-sm font-normal leading-[17px]">
              Chapters:
            </span>
            <span className="text-[#E0BC5A] text-sm font-normal leading-[17px] text-right">
              {comic.chapters}
            </span>
          </div>
          <div className="flex justify-between items-center w-full">
            <span className="text-[#E0BC5A] text-sm font-normal leading-[17px]">
              Status:
            </span>
            <span className="text-[#5ACFB5] text-sm font-normal leading-[17px] text-right">
              {comic.status}
            </span>
          </div>
        </div>
        
        <div className="flex justify-between items-center absolute w-[230px] h-[42px] left-[11px] top-[158px] max-md:w-52 max-sm:relative max-sm:w-[calc(100%_-_22px)] max-sm:flex-col max-sm:gap-2.5 max-sm:h-auto max-sm:left-[11px] max-sm:top-[35px]">
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

  return (
    <section className="w-full max-w-[1538px] h-[413px] relative flex items-center justify-center bg-[#525132] border-[3px] border-dashed border-[#CBC895] max-sm:h-[300px] max-sm:m-2.5 max-sm:border-2 alexandria-font">
      <div
        className={`w-full h-full flex items-center justify-center cursor-pointer transition-colors ${
          dragOver ? 'bg-[#5A5A3A]' : ''
        }`}
        onClick={handleClick}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        role="button"
        tabIndex={0}
        aria-label="Upload comic book cover"
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            handleClick();
          }
        }}
      >
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/94153a1d557d70a8557c1256de9fa83cebdb9e69?width=1100"
          alt="Upload area placeholder"
          className="w-[550px] h-[303px] object-contain max-sm:w-[90%] max-sm:h-auto max-sm:max-w-[400px] pointer-events-none"
        />
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
  return (
    <section className="w-full max-w-[1539px] border flex justify-center items-start gap-[31px] flex-wrap bg-[rgba(181,179,135,0.16)] px-7 py-[30px] border-solid border-[#CBC895] max-md:gap-5 max-md:p-5 max-sm:flex-col max-sm:items-center max-sm:gap-[15px] max-sm:p-[15px] alexandria-font">
      {comics.map((comic) => (
        <ComicCard
          key={comic.id}
          comic={comic}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </section>
  );
};

// Main Comic Component
const Comic = () => {
  const [comics] = useState([
    {
      id: '1',
      title: 'Me and the Boys',
      author: 'SpaceRacoon',
      coverImage: 'https://api.builder.io/api/v1/image/assets/TEMP/1d61e7154e7109ee7fa82b469c3c5e078388e405?width=506',
      chapters: 2,
      status: 'active'
    },
    {
      id: '2',
      title: 'Spiderman',
      author: 'Marvel',
      coverImage: 'https://api.builder.io/api/v1/image/assets/TEMP/e3d0c214bc8edf6c9287418e41fe65dd79f8516f?width=506',
      chapters: 2,
      status: 'active'
    },
    {
      id: '3',
      title: 'Iron man',
      author: 'Marvel',
      coverImage: 'https://api.builder.io/api/v1/image/assets/TEMP/dfa1fdb231cd9b7b4a7d7f5a6f57c609914ccc9b?width=506',
      chapters: 2,
      status: 'active'
    },
    {
      id: '4',
      title: 'Spuerman 1',
      author: 'DC',
      coverImage: 'https://api.builder.io/api/v1/image/assets/TEMP/07f5be5c70f63892b5a59cdc9c8ea1415ddc709f?width=506',
      chapters: 2,
      status: 'active'
    },
    {
      id: '5',
      title: 'Duck Walt',
      author: 'Disney',
      coverImage: 'https://api.builder.io/api/v1/image/assets/TEMP/8a97220af60b1a25107ebdcb549385353fd5c71d?width=506',
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

  return (
    <main className="max-w-none w-full min-h-screen relative flex flex-col items-center justify-start bg-[rgba(16,15,0,0.62)] mx-auto m-0 p-0 max-md:max-w-[991px] max-sm:max-w-screen-sm alexandria-font">
      <ComicUploadArea onFileSelected={handleFileSelected} />
      <ComicGrid 
        comics={comics}
        onEdit={handleEditComic}
        onDelete={handleDeleteComic}
      />

      {isDetailsOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="comic-details-title"
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setIsDetailsOpen(false)}
        >
          <div
            className="relative bg-[#242730] border-2 border-[#C1BE91] rounded-2xl p-6 w-[700px] max-w-[92%] alexandria-font"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsDetailsOpen(false)}
              aria-label="Close"
              className="absolute top-4 right-4 text-[#F6F4D3] text-2xl"
              style={{ background: 'transparent', border: 'none', cursor: 'pointer' }}
            >
              ✕
            </button>

            <h3 id="comic-details-title" className="text-[#F6F4D3] text-2xl mb-6 font-vision tracking-[0.2em]">
              COMIC DETAILS
            </h3>

            <div className="space-y-6">
              <div>
                <label className="block text-[#F6F4D3] mb-2">Artist Name</label>
                <input
                  type="text"
                  placeholder="Enter Artist Name"
                  className="w-full h-12 rounded-lg bg-[#191A22] text-[#F6F4D3] placeholder-[#7D7D7D] px-4 outline-none"
                />
              </div>
              <div>
                <label className="block text-[#F6F4D3] mb-2">Comic Title</label>
                <input
                  type="text"
                  placeholder="Enter Comic Title"
                  className="w-full h-12 rounded-lg bg-[#191A22] text-[#F6F4D3] placeholder-[#7D7D7D] px-4 outline-none"
                />
              </div>
              <div>
                <label className="block text-[#F6F4D3] mb-2">Chapter Title</label>
                <input
                  type="text"
                  placeholder="Enter Chapter Title"
                  className="w-full h-12 rounded-lg bg-[#191A22] text-[#F6F4D3] placeholder-[#7D7D7D] px-4 outline-none"
                />
              </div>
              <div>
                <label className="block text-[#F6F4D3] mb-2">Description</label>
                <textarea
                  rows={6}
                  placeholder="Enter Comic Description"
                  className="w-full rounded-lg bg-[#191A22] text-[#F6F4D3] placeholder-[#7D7D7D] p-4 outline-none resize-none"
                />
              </div>
            </div>

            <div className="mt-8 flex gap-6">
              <button
                className="flex-1 h-12 rounded-lg bg-[#3a3a3a] text-white shadow-[0_5px_0_#000]"
                onClick={() => setIsDetailsOpen(false)}
              >
                Cancel
              </button>
              <button
                className="flex-1 h-12 rounded-lg bg-[#C1BE91] text-[#191A22] shadow-[0_5px_0_#000]"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default Comic;