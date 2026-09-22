import React from 'react';

export default function ThemeToggle({ theme, setTheme }) {
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <button 
      onClick={toggleTheme}
      style={{ padding: '8px 16px', cursor: 'pointer', borderRadius: '4px' }}
    >
      Переключити тему ({theme === 'light' ? '🌙 Dark' : '☀️ Light'})
    </button>
  );
}