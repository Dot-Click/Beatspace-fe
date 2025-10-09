import React, { useState, useCallback, useRef } from 'react';

// FileUpload Component
const FileUpload = ({ onFileSelect, accept = "image/*", maxSize = 2 * 1024 * 1024, className = "" }) => {
  const [isDragOver, setIsDragOver] = useState(false);
  const [error, setError] = useState(null);
  const inputRef = useRef(null);
  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      inputRef.current?.click();
    }
  }, []);

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
    setError(null);

    const files = Array.from(e.dataTransfer.files);
    const file = files[0];

    if (file) {
      if (file.size > maxSize) {
        setError(`File size must be less than ${maxSize / (1024 * 1024)}MB`);
        return;
      }
      onFileSelect?.(file);
    }
  }, [maxSize, onFileSelect]);

  const handleFileInput = useCallback((e) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > maxSize) {
        setError(`File size must be less than ${maxSize / (1024 * 1024)}MB`);
        return;
      }
      setError(null);
      onFileSelect?.(file);
    }
  }, [maxSize, onFileSelect]);

  return (
    <div className={`relative ${className}`}>
      <div
        className={`w-full h-[358px] border-[3px] border-dashed border-[#CBC895] bg-[#525132] flex flex-col items-center justify-center cursor-pointer transition-colors ${isDragOver ? 'bg-[#5a5a3a]' : ''}`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => inputRef.current?.click()}
        role="button"
        tabIndex={0}
        onKeyDown={handleKeyDown}
        aria-label="Upload logo - drag & drop or browse files"
      >
        <div className="mb-8">
          <svg width="80" height="115" viewBox="0 0 80 115" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M61.045 0.063H0.245V98.863H80.045V19.063L61.045 0.063Z" fill="#056BF1"/>
            <path d="M72.444 98.864V106.463H-7.355V7.664H0.245V98.864H72.444Z" fill="#124BF2"/>
            <path d="M64.844 106.463V114.063H-14.955V15.264H-7.355V106.463H64.844Z" fill="#023473"/>
            <path d="M61.045 0.063V19.063H80.045L61.045 0.063Z" fill="#124BF2"/>
            <path d="M54.869 36.81L41.569 21.61C40.847 20.793 39.441 20.793 38.7 21.61L25.4 36.81C24.906 37.38 24.792 38.159 25.096 38.843C25.4 39.527 26.084 39.964 26.825 39.964H32.525V53.264C32.525 54.309 33.38 55.164 34.425 55.164H45.825C46.87 55.164 47.725 54.309 47.725 53.264V39.964H53.425C54.166 39.964 54.85 39.527 55.154 38.843C55.458 38.159 55.344 37.361 54.85 36.81H54.869Z" fill="white"/>
            <path d="M45.843 58.963H34.443C33.394 58.963 32.543 59.814 32.543 60.863V68.463C32.543 69.512 33.394 70.363 34.443 70.363H45.843C46.892 70.363 47.743 69.512 47.743 68.463V60.863C47.743 59.814 46.892 58.963 45.843 58.963Z" fill="white"/>
            <path d="M45.843 74.164H34.443C33.398 74.164 32.543 75.019 32.543 76.064C32.543 77.109 33.398 77.964 34.443 77.964H45.843C46.888 77.964 47.743 77.109 47.743 76.064C47.743 75.019 46.888 74.164 45.843 74.164Z" fill="white"/>
          </svg>
        </div>
        <div className="text-center">
          <p className="text-[#EBE23C] text-xl font-bold mb-4 max-w-md">
            Drag & drop your logo here, or browse files
          </p>
          <p className="text-white text-lg">
            PNG, JPG up to 2MB
          </p>
        </div>
      </div>
      <input
        ref={inputRef}
        type="file"
        accept={accept}
        onChange={handleFileInput}
        className="hidden"
      />
      {error && (
        <p className="text-red-500 text-sm mt-2">{error}</p>
      )}
    </div>
  );
};

// CategoryRow Component
const CategoryRow = ({ categoryName, type, onEdit, onDelete }) => {
  return (
    <div className="flex w-full h-[108px] border items-center bg-[rgba(197,194,116,0.16)] px-[27px] py-0 border-solid border-[#CBC895] max-md:px-[15px] max-sm:flex-col max-sm:items-start max-sm:h-auto max-sm:p-[15px]">
      <div className="text-white text-xl font-normal leading-7 h-7 max-md:text-base max-sm:text-sm max-sm:mx-0 max-sm:my-[5px] min-w-[200px]">
        {categoryName}
      </div>
      <div className="text-white text-xl font-normal leading-7 h-7 max-md:text-base max-sm:text-sm max-sm:mx-0 max-sm:my-[5px] min-w-[150px]">
        {type}
      </div>
      <div className="w-[109px] h-[39px] flex gap-[25px] ml-auto max-sm:mt-2.5 max-sm:mb-0 max-sm:mx-0">
        <button
          onClick={onEdit}
          className="w-[39px] h-[39px] flex items-center justify-center hover:opacity-80 transition-opacity"
          aria-label={`Edit ${categoryName}`}
        >
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M32.8969 1.54167C32.1159 0.760885 31.0567 0.322266 29.9524 0.322266C28.848 0.322266 27.7889 0.760885 27.0078 1.54167L23.5823 4.96931L34.6253 16.0123L38.0509 12.5888C38.4378 12.2021 38.7447 11.7429 38.9541 11.2375C39.1635 10.7321 39.2713 10.1903 39.2713 9.64327C39.2713 9.0962 39.1635 8.55448 38.9541 8.04908C38.7447 7.54367 38.4378 7.08447 38.0509 6.69771L32.8969 1.54167ZM31.6808 18.9568L20.6378 7.91383L2.23969 26.3119L-0.000976562 39.5977L13.2848 37.3549L31.6808 18.9568Z" fill="#FFEF2E"/>
          </svg>
        </button>
        <button
          onClick={onDelete}
          className="w-[45px] h-[39px] flex items-center justify-center hover:opacity-80 transition-opacity"
          aria-label={`Delete ${categoryName}`}
        >
          <svg width="46" height="40" viewBox="0 0 46 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1.35603" y="1.40779" width="42.8316" height="37.104" fill="#EB181B" fillOpacity="0.13"/>
            <rect x="1.35603" y="1.40779" width="42.8316" height="37.104" stroke="#EB181B" strokeWidth="2.17105"/>
            <path d="M16.1047 10.9253L22.7718 17.5925L29.4044 10.9599C29.5509 10.8039 29.7274 10.6792 29.9233 10.5931C30.1192 10.5071 30.3304 10.4614 30.5444 10.459C31.0025 10.459 31.4418 10.641 31.7657 10.9649C32.0896 11.2888 32.2716 11.7281 32.2716 12.1862C32.2756 12.398 32.2364 12.6083 32.1562 12.8044C32.076 13.0004 31.9566 13.178 31.8053 13.3262L25.0863 19.9588L31.8053 26.6777C32.0899 26.9562 32.2569 27.3334 32.2716 27.7313C32.2716 28.1894 32.0896 28.6288 31.7657 28.9527C31.4418 29.2766 31.0025 29.4586 30.5444 29.4586C30.3242 29.4677 30.1046 29.431 29.8995 29.3507C29.6943 29.2704 29.5081 29.1483 29.3526 28.9922L22.7718 22.3251L16.122 28.975C15.976 29.1257 15.8017 29.246 15.609 29.3291C15.4163 29.4121 15.209 29.4561 14.9992 29.4586C14.5412 29.4586 14.1018 29.2766 13.7779 28.9527C13.454 28.6288 13.272 28.1894 13.272 27.7313C13.268 27.5196 13.3073 27.3092 13.3875 27.1132C13.4677 26.9172 13.5871 26.7396 13.7384 26.5914L20.4573 19.9588L13.7384 13.2398C13.4537 12.9613 13.2868 12.5842 13.272 12.1862C13.272 11.7281 13.454 11.2888 13.7779 10.9649C14.1018 10.641 14.5412 10.459 14.9992 10.459C15.4138 10.4642 15.811 10.6317 16.1047 10.9253Z" fill="#EB181B"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

// Main Settings Component
const Settings = () => {
  // General Settings State
  const [siteTitle, setSiteTitle] = useState('Beatspace');
  const [language, setLanguage] = useState('English');

  // Logo Upload State
  const [uploadedFile, setUploadedFile] = useState(null);

  // Theme Settings State
  const [darkMode, setDarkMode] = useState(true);
  const [retroNeonMode, setRetroNeonMode] = useState(false);

  // Category Management State
  const [categories, setCategories] = useState([
    { id: '1', name: 'Hip Hop', type: 'Beat' },
    { id: '2', name: 'T-Shirts', type: 'Merch' },
    { id: '3', name: 'Hoodies', type: 'Game' },
    { id: '4', name: 'Hip Hop', type: 'Merch' }
  ]);

  // Security & Backup State
  const [isExporting, setIsExporting] = useState(false);
  const [isResetting, setIsResetting] = useState(false);

  // Handlers
  const handleFileSelect = (file) => {
    setUploadedFile(file);
    console.log('File selected:', file.name);
  };

  const handleEditCategory = (id) => {
    console.log('Edit category:', id);
  };

  const handleDeleteCategory = (id) => {
    setCategories(categories.filter(cat => cat.id !== id));
  };

  const handleExportBackup = async () => {
    setIsExporting(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const data = {
        siteTitle,
        language,
        darkMode,
        retroNeonMode,
        categories,
        exportDate: new Date().toISOString()
      };
      
      const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `beatspace-backup-${new Date().toISOString().split('T')[0]}.json`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Export failed:', error);
    } finally {
      setIsExporting(false);
    }
  };

  const handleResetSettings = async () => {
    if (window.confirm('Are you sure you want to reset all settings to default? This action cannot be undone.')) {
      setIsResetting(true);
      try {
        await new Promise(resolve => setTimeout(resolve, 1500));
        console.log('Settings reset to default');
      } catch (error) {
        console.error('Reset failed:', error);
      } finally {
        setIsResetting(false);
      }
    }
  };

  return (
    <main className="min-h-screen w-full bg-[#1a1b22] overflow-x-auto alexandria-font">
      <div className="max-w-none relative mx-auto   max-md:p-5 max-sm:p-[15px]">
        
        {/* Background Section 1 */}
        <div className="absolute inset-0 max-md:w-full max-md:h-auto">
          <svg width="1539" height="1062" viewBox="0 0 1539 1062" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path d="M1538.5 0.5V1060.92H0.5V0.5H1538.5Z" fill="#B5B387" fillOpacity="0.16" stroke="#CBC895"/>
          </svg>
        </div>

        {/* General Settings Section */}
        <div className="relative z-10 mt-6 mb-6">
          <section className="w-full mx-auto px-[27px] max-md:px-[15px]">
            <header className="mb-[50px]">
              <h1 className="text-[#DFD74F] text-[23px] font-normal leading-[22px] max-md:text-lg max-md:leading-5 max-sm:text-sm max-sm:leading-[18px]">
                GENERAL SETTINGS
              </h1>
            </header>

            <div className="space-y-[45px]">
              <div className="w-full">
                <label htmlFor="site-title" className="block text-white text-xl font-normal leading-7 uppercase mb-[43px] max-sm:text-base">
                  SITE TITLE
                </label>
                <div className="relative">
                  <input
                    id="site-title"
                    type="text"
                    value={siteTitle}
                    onChange={(e) => setSiteTitle(e.target.value)}
                    className="w-full h-[60px] bg-[#191A22] border border-[#CBC895] px-5 py-3.5 text-[#9C963A] text-lg font-medium leading-7 focus:outline-none focus:ring-2 focus:ring-[#CBC895]"
                    placeholder="Enter site title"
                  />
                </div>
              </div>

              <div className="w-full">
                <label htmlFor="language" className="block text-white text-xl font-normal leading-7 uppercase mb-[43px] max-sm:text-base">
                  LANGUAGE
                </label>
                <div className="relative">
                  <select
                    id="language"
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                    className="w-full h-[60px] bg-[#191A22] border border-[#CBC895] px-5 py-3.5 text-[#9C963A] text-lg font-medium leading-7 appearance-none focus:outline-none focus:ring-2 focus:ring-[#CBC895] cursor-pointer"
                  >
                    <option value="English">English</option>
                    <option value="Spanish">Spanish</option>
                    <option value="French">French</option>
                    <option value="German">German</option>
                  </select>
                  <div className="absolute right-5 top-1/2 transform -translate-y-1/2 pointer-events-none">
                    <svg width="22" height="13" viewBox="0 0 23 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19.3334 0.348354L22.4727 0.348354L22.4727 3.48758L19.3334 3.48758L19.3334 6.62681L16.1942 6.62681L16.1942 9.76604L13.055 9.76604L13.055 12.9053L9.91574 12.9053L9.91574 9.76604L6.77651 9.76604L6.77651 6.62681L3.63728 6.62681L3.63728 3.48758L0.498047 3.48758L0.498047 0.348352L3.63728 0.348353L3.63728 3.48758L6.77651 3.48758L6.77651 6.62681L9.91574 6.62681L9.91574 9.76604L13.055 9.76604L13.055 6.62681L16.1942 6.62681L16.1942 3.48758L19.3334 3.48758L19.3334 0.348354Z" fill="#FFEF2E"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Logo Upload Section */}
        <div className="relative z-10 pb-[100px]">
          <section className="w-full max-w-[1485px] mx-auto px-[27px] max-md:px-[15px]">
            <header className="mb-[43px]">
              <h2 className="text-white text-xl font-normal leading-7 uppercase max-sm:text-base">
                LOGO UPLOAD
              </h2>
            </header>

            <div className="relative">
              <FileUpload
                onFileSelect={handleFileSelect}
                accept="image/png,image/jpeg"
                maxSize={2 * 1024 * 1024}
                className="w-full"
              />
              
              {uploadedFile && (
                <div className="mt-4 p-4 bg-[#191A22] border border-[#CBC895] rounded">
                  <p className="text-[#9C963A] text-sm">
                    Selected: {uploadedFile.name} ({(uploadedFile.size / 1024).toFixed(1)} KB)
                  </p>
                </div>
              )}
            </div>
          </section>
        </div>

        {/* Theme Settings Section */}
        <div className="relative z-10 pb-[100px] flex justify-start">
          <section className="w-full max-w-[300px] mx-auto px-[27px] max-md:px-[15px] max-md:max-w-full">
            <div className="space-y-[45px]">
              <div className="w-full h-16 relative">
                <label className="block text-white text-xl font-normal leading-7 uppercase h-7 max-sm:text-base cursor-pointer">
                  <input
                    type="checkbox"
                    checked={darkMode}
                    onChange={(e) => setDarkMode(e.target.checked)}
                    className="sr-only"
                  />
                  <span className="flex items-center">
                    <span className={`w-6 h-6 border-2 border-[#CBC895] mr-3 flex items-center justify-center ${darkMode ? 'bg-[#CBC895]' : 'bg-transparent'}`}>
                      {darkMode && (
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <path d="M2 6L5 9L10 3" stroke="#191A22" strokeWidth="2" fill="none"/>
                        </svg>
                      )}
                    </span>
                    DARK MODE
                  </span>
                </label>
                <p className="text-[#FFF999] text-center text-xl font-normal leading-7 h-7 mt-2 max-sm:text-base">
                  Default retro theme
                </p>
              </div>

              <div className="w-full h-16 relative">
                <label className="block text-white text-xl font-normal leading-7 uppercase h-7 max-sm:text-base cursor-pointer">
                  <input
                    type="checkbox"
                    checked={retroNeonMode}
                    onChange={(e) => setRetroNeonMode(e.target.checked)}
                    className="sr-only"
                  />
                  <span className="flex items-center">
                    <span className={`w-6 h-6 border-2 border-[#CBC895] mr-3 flex items-center justify-center ${retroNeonMode ? 'bg-[#CBC895]' : 'bg-transparent'}`}>
                      {retroNeonMode && (
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <path d="M2 6L5 9L10 3" stroke="#191A22" strokeWidth="2" fill="none"/>
                        </svg>
                      )}
                    </span>
                    RETRO NEON MODE
                  </span>
                </label>
                <p className="text-[#FFF999] text-center text-xl font-normal leading-7 h-7 mt-2 max-sm:text-base">
                  Enhanced CRT effects
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Background Section 2 */}
        <div className="absolute w-[1539px] h-[612px] left-0 top-[1076px] max-md:w-full max-md:relative max-md:top-0">
          <svg width="1539" height="612" viewBox="0 0 1539 612" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path d="M1538.5 0.918945V610.7H0.5V0.918945H1538.5Z" fill="#B5B387" fillOpacity="0.16" stroke="#CBC895"/>
          </svg>
        </div>

        {/* Category Management Section */}
        <div className="relative z-10 pb-[100px]">
          <section className="w-full mx-auto">
            <header className="mb-[50px] px-[27px] max-md:px-[15px]">
              <h2 className="text-[#DFD74F] text-[23px] font-normal leading-[22px] max-md:text-lg max-md:leading-5 max-sm:text-sm max-sm:leading-[18px]">
                CATEGORY & FILTER MANAGEMENT
              </h2>
            </header>

            <div className="w-full">
              <div className="w-full h-[72px] flex items-center bg-[#131319] px-[26px] py-0 max-md:px-[15px] max-sm:hidden">
                <div className="text-[#CBC895] text-xl font-normal leading-7 h-7 max-md:text-base min-w-[200px]">
                  Category Name
                </div>
                <div className="text-[#CBC895] text-xl font-normal leading-7 h-7 max-md:text-base min-w-[150px]">
                  Type
                </div>
                <div className="text-[#CBC895] text-xl font-normal leading-7 h-7 max-md:text-base ml-auto">
                  ACTIONS
                </div>
              </div>

              <div className="space-y-0">
                {categories.map((category) => (
                  <CategoryRow
                    key={category.id}
                    categoryName={category.name}
                    type={category.type}
                    onEdit={() => handleEditCategory(category.id)}
                    onDelete={() => handleDeleteCategory(category.id)}
                  />
                ))}
              </div>
            </div>
          </section>
        </div>

        {/* Audio Player Section */}
        <div className="relative z-10 pb-[100px]">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/3ada6386d02610637482d84f2361f3afec90745d?width=3078"
            alt="Audio Player Section"
            className="w-full h-auto max-w-[1539px] mx-auto"
          />
        </div>

        {/* Background Section 3 */}
        <div className="absolute w-[1539px] h-[828px] left-0 top-[3389px] max-md:w-full max-md:relative max-md:top-0">
          <svg width="1539" height="828" viewBox="0 0 1539 828" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path d="M1538.5 1.19336V827.143H0.5V1.19336H1538.5Z" fill="#B5B387" fillOpacity="0.16" stroke="#CBC895"/>
          </svg>
        </div>

        {/* Security & Backup Section */}
        <div className="relative z-10 pt-[50px] pb-[100px]">
          <section className="w-full mx-auto px-[27px] max-md:px-[15px]">
            <header className="mb-[50px]">
              <h2 className="text-[#DFD74F] text-[23px] font-normal leading-[22px] max-md:text-lg max-md:leading-5 max-sm:text-sm max-sm:leading-[18px]">
                SECURITY & BACKUP
              </h2>
            </header>

            <div className="space-y-[108px]">
              <div className="space-y-[53px]">
                <div className="flex items-center gap-[30px] max-sm:flex-col max-sm:items-start max-sm:gap-[15px]">
                  <div className="flex-shrink-0">
                    <svg width="53" height="58" viewBox="0 0 55 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.93271 24.1849H6.2748V18.869H11.5906V21.527H14.2485V24.1849H16.9064V26.8428H19.5644V29.5007H22.2223V32.1586H24.8802V0.263672H30.196V32.1586H32.8539V29.5007H35.5118V26.8428H38.1697V24.1849H40.8276V21.527H43.4855V18.869H48.8014V24.1849H46.1435V26.8428H43.4855V29.5007H40.8276V32.1586H38.1697V34.8165H35.5118V37.4744H32.8539V40.1323H30.196V42.7902H24.8802V40.1323H22.2223V37.4744H19.5644V34.8165H16.9064V32.1586H14.2485V29.5007H11.5906V26.8428H8.93271V24.1849ZM0.958984 53.4219H54.1172V58.7377H0.958984V53.4219Z" fill="#FFEF2E"/>
                    </svg>
                  </div>
                  <div className="flex-1 max-sm:w-full">
                    <h3 className="text-white text-xl font-normal leading-7 uppercase mb-2 max-sm:text-base">
                      EXPORT DATA BACKUP
                    </h3>
                    <p className="text-[#FFF999] text-xl font-normal leading-7 max-sm:text-base">
                      Download all settings and configurations as JSON
                    </p>
                  </div>
                </div>

                <button
                  onClick={handleExportBackup}
                  disabled={isExporting}
                  className="flex w-[246px] h-[53px] justify-center items-center gap-2.5 shadow-[0_7px_2px_0_#000] bg-[#CBC895] px-[13px] py-3.5 rounded-lg hover:bg-[#b8b582] transition-colors disabled:opacity-50 max-sm:w-full"
                >
                  <svg width="19.914" height="19.914" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.0165 15.5327V0.0439453H9.80382V11.1073H7.59115V8.89464H5.37847V11.1073H7.59115V13.32H9.80382V15.5327H12.0165ZM20.8672 17.7453V13.32H18.6545V17.7453H3.1658V13.32H0.953125V19.958H20.8672V17.7453ZM12.0165 11.1073V13.32H14.2292V11.1073H16.4418V8.89464H14.2292V11.1073H12.0165Z" fill="#191A22"/>
                  </svg>
                  <span className="text-[#191A22] text-lg font-semibold leading-7">
                    {isExporting ? 'Exporting...' : 'Export Backup'}
                  </span>
                </button>
              </div>

              <div className="space-y-[53px]">
                <div className="flex items-center gap-[30px] max-sm:flex-col max-sm:items-start max-sm:gap-[15px]">
                  <div className="flex-shrink-0">
                    <svg width="53" height="44" viewBox="0 0 55 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M24.0859 3.10352C27.9225 1.51439 32.1439 1.09809 36.2168 1.9082C40.2897 2.71836 44.0314 4.71788 46.9678 7.6543C49.9042 10.5907 51.9037 14.3324 52.7139 18.4053C53.524 22.4781 53.1077 26.6996 51.5186 30.5361C49.9294 34.3726 47.2388 37.6519 43.7861 39.959C40.6112 42.0804 36.9227 43.2894 33.1211 43.4707V41.8027C36.593 41.6228 39.9594 40.5126 42.8604 38.5742C46.0392 36.4502 48.5164 33.4306 49.9795 29.8984C51.4424 26.3664 51.8258 22.48 51.0801 18.7305C50.3342 14.9807 48.4925 11.5364 45.7891 8.83301C43.0857 6.1296 39.6413 4.28786 35.8916 3.54199C32.1421 2.79623 28.2556 3.17964 24.7236 4.64258C21.1915 6.10564 18.1719 8.5829 16.0479 11.7617C13.9239 14.9405 12.7901 18.6779 12.79 22.501V36.2803L20.3887 28.6816L21.54 29.833L11.957 39.417L2.37305 29.833L3.52539 28.6816L11.124 36.2803V22.501C11.1241 18.3484 12.356 14.2887 14.6631 10.8359C16.9702 7.3833 20.2495 4.69262 24.0859 3.10352Z" fill="#FFEF2E" stroke="#FFEF2E" strokeWidth="2"/>
                    </svg>
                  </div>
                  <div className="flex-1 max-sm:w-full">
                    <h3 className="text-white text-xl font-normal leading-7 uppercase mb-2 max-sm:text-base">
                      RESET TO DEFAULT SETTINGS
                    </h3>
                    <p className="text-[#FFF999] text-xl font-normal leading-7 max-sm:text-base">
                      Restore all settings to factory defaults
                    </p>
                  </div>
                </div>

                <button
                  onClick={handleResetSettings}
                  disabled={isResetting}
                  className="flex w-[246px] h-[53px] justify-center items-center gap-2.5 shadow-[0_7px_2px_0_#000] bg-[#CBC895] px-[13px] py-3.5 rounded-lg hover:bg-[#b8b582] transition-colors disabled:opacity-50 max-sm:w-full"
                >
                  <svg width="19.914" height="19.914" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.995 15.6077C12.4995 15.6077 13.9703 15.1616 15.2212 14.3257C16.4722 13.4898 17.4472 12.3018 18.023 10.9117C18.5988 9.52173 18.7494 7.9922 18.4559 6.51657C18.1624 5.04094 17.4379 3.68549 16.374 2.62162C15.3101 1.55775 13.9547 0.833247 12.479 0.539726C11.0034 0.246205 9.47387 0.396851 8.08386 0.972613C6.69385 1.54838 5.50578 2.52339 4.6699 3.77437C3.83403 5.02535 3.38788 6.4961 3.38788 8.00064V11.931L1.10575 9.64884L0.218262 10.5363L4.0218 14.3399L7.82535 10.5363L6.93785 9.64884L4.65573 11.931V8.00064C4.65573 6.74686 5.02752 5.52123 5.72408 4.47875C6.42065 3.43627 7.4107 2.62375 8.56904 2.14395C9.72739 1.66415 11.002 1.53861 12.2317 1.78321C13.4614 2.02781 14.5909 2.63157 15.4775 3.51812C16.364 4.40468 16.9678 5.53423 17.2124 6.76392C17.457 7.99361 17.3315 9.26822 16.8517 10.4266C16.3719 11.5849 15.5593 12.575 14.5169 13.2715C13.4744 13.9681 12.2487 14.3399 10.995 14.3399V15.6077Z" fill="#191A22"/>
                  </svg>
                  <span className="text-[#191A22] text-lg font-semibold leading-7">
                    {isResetting ? 'Resetting...' : 'Reset Setting'}
                  </span>
                </button>
              </div>
            </div>
          </section>
        </div>

      </div>
    </main>
  );
};

export default Settings;


