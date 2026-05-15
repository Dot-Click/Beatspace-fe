import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { HiChevronDown } from 'react-icons/hi';
import './LanguageSwitcher.css';

const LANGUAGES = [
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'fr', label: 'Français', flag: '🇫🇷' },
];

export function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  
  const currentLanguageCode = i18n.language?.split('-')[0] ?? 'en';
  const currentLanguage = LANGUAGES.find(l => l.code === currentLanguageCode) || LANGUAGES[0];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLanguageChange = (code) => {
    i18n.changeLanguage(code);
    setIsOpen(false);
  };

  return (
    <div className="language-switcher-container" ref={dropdownRef}>
      <button 
        className="language-switcher-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="lang-flag">{currentLanguage.flag}</span>
        <span className="lang-label">{currentLanguage.label}</span>
        <HiChevronDown className={`chevron-icon ${isOpen ? 'open' : ''}`} />
      </button>

      {isOpen && (
        <div className="language-switcher-dropdown">
          {LANGUAGES.map((lang) => (
            <button
              key={lang.code}
              className={`language-option ${currentLanguageCode === lang.code ? 'active' : ''}`}
              onClick={() => handleLanguageChange(lang.code)}
            >
              <span className="lang-flag">{lang.flag}</span>
              <span className="lang-label">{lang.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
