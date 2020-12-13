import React, { useEffect, useState } from 'react';

const DarkModeToggler = () => {
  const [isDark, setIsDark] = useState(true);

  const changeThemeMode = (e) => {
    setIsDark(!isDark);
  };

  useEffect(() => {
    const body = document.querySelector('body');
    body.classList.toggle('dark');
  }, [isDark]);

  return (
    <div id='darkmode-toggler'>
      <span
        className={isDark ? 'darkmode-switch darkmode-switch--active' : 'darkmode-switch'}
        onClick={changeThemeMode}
      ></span>
    </div>
  );
};

export default DarkModeToggler;
