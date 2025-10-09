import React, { useState, useCallback, useRef } from 'react';

// AssetUpload Component
const AssetUpload = ({ onFileUpload }) => {
  const [isDragOver, setIsDragOver] = useState(false);
  const fileInputRef = useRef(null);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragOver(false);
    
    const files = Array.from(e.dataTransfer.files);
    const validFiles = files.filter(file => {
      const validTypes = ['image/png', 'image/jpeg', 'audio/mp3', 'audio/wav'];
      return validTypes.includes(file.type) && file.size <= 50 * 1024 * 1024;
    });
    
    if (validFiles.length > 0) {
      onFileUpload(validFiles);
    }
  };

  const handleFileSelect = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files || []);
    if (files.length > 0) {
      onFileUpload(files);
    }
  };

  return (
    <section className="bg-[rgba(181,179,135,0.16)] border w-full px-[23px] py-[29px] border-[rgba(203,200,149,1)] border-solid max-md:max-w-full max-md:px-5">
      <div className="flex w-full items-stretch gap-5 flex-wrap justify-between max-md:max-w-full max-md:mr-1">
        <h1 className="text-[rgba(223,215,79,1)] text-[23px] font-normal leading-none my-auto">
          Upload Assets
        </h1>
        <button className="bg-[rgba(203,200,149,1)] shadow-[0px_7px_2px_rgba(0,0,0,1)] flex min-h-[53px] items-center gap-2.5 text-lg text-[rgba(25,26,34,1)] font-semibold leading-loose justify-center p-[13px] rounded-lg hover:bg-[rgba(213,210,159,1)] transition-colors">
          <img
            src="https://api.builder.io/api/v1/image/assets/8194e458f3d34aa4833822b7adb041ea/9befb545c1f7036df55ef6ec8d09750635d056d2?placeholderIfAbsent=true"
            alt="Add icon"
            className="aspect-[1.07] object-contain w-4 self-stretch shrink-0 my-auto"
          />
          <span className="self-stretch my-auto">
            Add New Merch Item
          </span>
        </button>
      </div>
      
      <div 
        className={`bg-[rgba(82,81,50,1)] flex flex-col items-center font-normal mt-[31px] pt-[250px] pb-[81px] px-20 border-[rgba(203,200,149,1)] border-dashed border-[3px] max-md:max-w-full max-md:pt-[100px] max-md:px-5 transition-colors ${
          isDragOver ? 'bg-[rgba(102,101,70,1)]' : ''
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        role="region"
        aria-label="File upload area"
      >
        <div className="flex w-[535px] max-w-full flex-col items-stretch">
          <div className="text-[rgba(235,226,60,1)] text-[22px] leading-none text-center border border-black border-solid max-md:max-w-full max-md:mr-[3px]">
            Drop files here to upload
          </div>
          <div className="text-white text-xl leading-none text-center mt-4 max-md:max-w-full">
            Supports PNG, JPEG, MP3, WAV files up to 50MB each
          </div>
          <button 
            onClick={handleFileSelect}
            className="bg-[rgba(221,209,177,1)] shadow-[0px_7px_2px_rgba(0,0,0,1)] self-center flex min-h-[53px] w-[202px] max-w-full items-center gap-[5px] text-lg text-[rgba(25,26,34,1)] font-semibold leading-loose justify-center mt-[60px] p-[13px] rounded-lg max-md:mt-10 hover:bg-[rgba(231,219,187,1)] transition-colors"
            type="button"
            aria-label="Select files to upload"
          >
            <span className="self-stretch my-auto">Select Files</span>
          </button>
        </div>
        
        <input
          ref={fileInputRef}
          type="file"
          multiple
          accept=".png,.jpeg,.jpg,.mp3,.wav"
          onChange={handleFileChange}
          className="hidden"
          aria-hidden="true"
        />
      </div>
    </section>
  );
};

// AssetFilters Component
const AssetFilters = ({ onSearchChange, onTypeFilter, onCategoryFilter }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearchChange(value);
  };

  return (
    <section className="flex gap-5 text-lg text-[rgba(25,26,34,1)] font-semibold leading-loose flex-wrap mt-[18px] max-md:max-w-full">
      <div className="flex min-w-60 flex-col text-[rgba(156,150,58,1)] font-medium justify-center w-[1096px] px-[27px] py-[18px] max-md:max-w-full max-md:px-5">
        <label htmlFor="asset-search" className="sr-only">Search assets</label>
        <input
          id="asset-search"
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search assets..."
          className="bg-transparent border-none outline-none text-[rgba(156,150,58,1)] placeholder-[rgba(156,150,58,1)] w-full"
          aria-label="Search through uploaded assets"
        />
      </div>
      
      <div className="bg-[rgba(221,209,177,1)] shadow-[0px_7px_0px_rgba(140,129,0,1)] flex min-h-[60px] items-center gap-[18px] justify-center w-[201px] px-[13px] py-4 rounded-lg">
        <select 
          onChange={(e) => onTypeFilter(e.target.value)}
          className="bg-transparent border-none outline-none text-[rgba(25,26,34,1)] font-semibold cursor-pointer appearance-none w-full text-center"
          aria-label="Filter by file type"
        >
          <option value="">All Types</option>
          <option value="audio">Audio</option>
          <option value="image">Images</option>
          <option value="other">Other</option>
        </select>
      </div>
      
      <div className="bg-[rgba(221,209,177,1)] shadow-[0px_7px_0px_rgba(140,129,0,1)] flex min-h-[60px] items-center gap-[18px] justify-center w-[201px] px-[13px] py-4 rounded-lg">
        <select 
          onChange={(e) => onCategoryFilter(e.target.value)}
          className="bg-transparent border-none outline-none text-[rgba(25,26,34,1)] font-semibold cursor-pointer appearance-none w-full text-center"
          aria-label="Filter by category"
        >
          <option value="">All Categories</option>
          <option value="Games">Games</option>
          <option value="Merch">Merch</option>
          <option value="Beats">Beats</option>
        </select>
      </div>
    </section>
  );
};

// AssetRow Component
const AssetRow = ({ asset, onAction }) => {
  const handleDownload = () => {
    onAction(asset.id, 'download');
  };

  const handleDelete = () => {
    onAction(asset.id, 'delete');
  };

  const handleEdit = () => {
    onAction(asset.id, 'edit');
  };

  return (
    <div 
      className="bg-[rgba(197,194,116,0.16)] border flex w-full items-stretch gap-[40px_53px] text-xl text-white font-normal leading-none px-[30px] py-10 border-[rgba(203,200,149,1)] border-solid max-md:max-w-full max-md:mr-2 max-md:px-5"
      role="row"
    >
      <div className="flex items-center" role="cell">
        <img
          src={asset.previewUrl}
          alt={`Preview of ${asset.fileName}`}
          className="aspect-[0.93] object-contain w-[27px] shrink-0"
        />
      </div>
      
      <div className="grow shrink min-w-[166px]" role="cell">
        {asset.fileName}
      </div>
      
      <div role="cell">
        {asset.category}
      </div>
      
      <div role="cell">
        {asset.size}
      </div>
      
      <div className="grow shrink w-[204px]" role="cell">
        {asset.uploadedBy}
      </div>
      
      <div className="grow shrink w-[184px]" role="cell">
        {asset.dateAdded}
      </div>
      
      <div className="grow shrink w-[136px] flex gap-2" role="cell">
        <button
          onClick={handleDownload}
          className="text-[rgba(203,200,149,1)] hover:text-[rgba(223,220,169,1)] transition-colors text-sm"
          aria-label={`Download ${asset.fileName}`}
          title="Download file"
        >
          ↓
        </button>
        <button
          onClick={handleEdit}
          className="text-[rgba(203,200,149,1)] hover:text-[rgba(223,220,169,1)] transition-colors text-sm"
          aria-label={`Edit ${asset.fileName}`}
          title="Edit file"
        >
          ✎
        </button>
        <button
          onClick={handleDelete}
          className="text-red-400 hover:text-red-300 transition-colors text-sm"
          aria-label={`Delete ${asset.fileName}`}
          title="Delete file"
        >
          ✕
        </button>
      </div>
    </div>
  );
};

// AssetTable Component
const AssetTable = ({ assets, onAssetAction }) => {
  return (
    <div className="mt-[17px]" role="region" aria-label="Asset management table">
      <div className="bg-[rgba(19,19,25,1)] flex items-stretch gap-[40px_53px] text-xl text-[rgba(203,200,149,1)] font-normal leading-none px-[26px] py-[22px] max-md:max-w-full max-md:mr-[9px] max-md:px-5">
        <div className="grow">PREVIEW</div>
        <div className="grow shrink w-[184px]">File Name</div>
        <div className="grow shrink w-36">Category</div>
        <div>Size</div>
        <div className="grow shrink w-[204px]">Uploaded By</div>
        <div className="grow shrink w-[184px]">Date Added</div>
        <div className="grow shrink w-[136px]">ACTIONS</div>
      </div>
      
      <div role="table" aria-label="Asset list">
        {assets.map((asset) => (
          <AssetRow 
            key={asset.id} 
            asset={asset} 
            onAction={onAssetAction}
          />
        ))}
      </div>
    </div>
  );
};

// Main Assets Component
const Assets = () => {
  const [assets, setAssets] = useState([
    {
      id: '1',
      fileName: 'game_soundtrack.wav',
      category: 'Games',
      size: '5.42 MB',
      uploadedBy: 'Producer',
      dateAdded: '2024-01-13',
      fileType: 'audio',
      previewUrl: 'https://api.builder.io/api/v1/image/assets/8194e458f3d34aa4833822b7adb041ea/152128324cfd42b713d866a5d7a58a35171867e9?placeholderIfAbsent=true'
    },
    {
      id: '2',
      fileName: 'album_cover.png',
      category: 'Merch',
      size: '5.42 MB',
      uploadedBy: 'Designer',
      dateAdded: '2024-01-13',
      fileType: 'image',
      previewUrl: 'https://api.builder.io/api/v1/image/assets/8194e458f3d34aa4833822b7adb041ea/53eaaf72e1067d4736d4466c8932c0bfe6d6e353?placeholderIfAbsent=true'
    },
    {
      id: '3',
      fileName: 'game_soundtrack',
      category: 'Beats',
      size: '5.42 MB',
      uploadedBy: 'Admin',
      dateAdded: '2024-01-13',
      fileType: 'audio',
      previewUrl: 'https://api.builder.io/api/v1/image/assets/8194e458f3d34aa4833822b7adb041ea/bf6389270235da1e30c42841360b75bec0cc83c3?placeholderIfAbsent=true'
    },
    {
      id: '4',
      fileName: 'game_soundtrack.wav',
      category: 'Games',
      size: '5.42 MB',
      uploadedBy: 'Producer',
      dateAdded: '2024-01-13',
      fileType: 'audio',
      previewUrl: 'https://api.builder.io/api/v1/image/assets/8194e458f3d34aa4833822b7adb041ea/30e22b5aa0e27a7e559db3ff87b6f07e2aa469a7?placeholderIfAbsent=true'
    },
    {
      id: '5',
      fileName: 'album_cover.png',
      category: 'Merch',
      size: '5.42 MB',
      uploadedBy: 'Designer',
      dateAdded: '2024-01-13',
      fileType: 'image',
      previewUrl: 'https://api.builder.io/api/v1/image/assets/8194e458f3d34aa4833822b7adb041ea/e099248c8445cc60243503779e3516a2aef050dc?placeholderIfAbsent=true'
    }
  ]);

  const [filteredAssets, setFilteredAssets] = useState(assets);
  const [searchTerm, setSearchTerm] = useState('');
  const [typeFilter, setTypeFilter] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');

  const applyFilters = useCallback(() => {
    let filtered = assets;

    if (searchTerm) {
      filtered = filtered.filter(asset =>
        asset.fileName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        asset.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        asset.uploadedBy.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (typeFilter) {
      filtered = filtered.filter(asset => asset.fileType === typeFilter);
    }

    if (categoryFilter) {
      filtered = filtered.filter(asset => asset.category === categoryFilter);
    }

    setFilteredAssets(filtered);
  }, [assets, searchTerm, typeFilter, categoryFilter]);

  React.useEffect(() => {
    applyFilters();
  }, [applyFilters]);

  const handleFileUpload = useCallback((files) => {
    const newAssets = files.map((file, index) => {
      const fileType = file.type.startsWith('image/') ? 'image' : 
                      file.type.startsWith('audio/') ? 'audio' : 'other';
      
      return {
        id: `new-${Date.now()}-${index}`,
        fileName: file.name,
        category: 'Uncategorized',
        size: `${(file.size / (1024 * 1024)).toFixed(2)} MB`,
        uploadedBy: 'Current User',
        dateAdded: new Date().toISOString().split('T')[0],
        fileType,
        previewUrl: 'https://api.builder.io/api/v1/image/assets/8194e458f3d34aa4833822b7adb041ea/152128324cfd42b713d866a5d7a58a35171867e9?placeholderIfAbsent=true'
      };
    });

    setAssets(prev => [...prev, ...newAssets]);
  }, []);

  const handleSearchChange = useCallback((search) => {
    setSearchTerm(search);
  }, []);

  const handleTypeFilter = useCallback((type) => {
    setTypeFilter(type);
  }, []);

  const handleCategoryFilter = useCallback((category) => {
    setCategoryFilter(category);
  }, []);

  // FIX: Pure JS version without TypeScript annotations
  const handleAssetAction = useCallback((assetId, action) => {
    switch (action) {
      case 'download':
        console.log(`Downloading asset ${assetId}`);
        break;
      case 'edit':
        console.log(`Editing asset ${assetId}`);
        break;
      case 'delete':
        setAssets(prev => prev.filter(asset => asset.id !== assetId));
        break;
      default:
        console.log(`Unknown action ${action} for asset ${assetId}`);
    }
  }, []);

  return (
    <main className="min-h-screen bg-gray-900 p-4 alexandria-font">
      <div className="max-w-7xl mx-auto">
        <div className="rounded-[0px_0px_0px_0px]">
          <AssetUpload onFileUpload={handleFileUpload} />
          
          <AssetFilters
            onSearchChange={handleSearchChange}
            onTypeFilter={handleTypeFilter}
            onCategoryFilter={handleCategoryFilter}
          />
          
          <AssetTable
            assets={filteredAssets}
            onAssetAction={handleAssetAction}
          />
        </div>
      </div>
    </main>
  );
};

export default Assets;