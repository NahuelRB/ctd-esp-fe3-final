import React from 'react';
import { useAppContext } from './utils/useAppContext';

export const ButtonTheme = () => {
  const {
    changeTheme,
    state: {temaFondo},
  } = useAppContext();

  return (
    <button
      style={{ width: '100px', height: '40px' }}
      className="menu_tema"
      onClick={changeTheme}
    >
      Change Theme
    </button>
  );
};
