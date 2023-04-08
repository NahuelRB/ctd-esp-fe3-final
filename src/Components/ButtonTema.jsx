import React from 'react';
import { useAppContext } from '../Components/utils/useAppContext';

export const ButtonTema = () => {
  const {
    changeTheme,
    state: {temaFondo},
  } = useAppContext();

  return (
    <button
      className="menu_tema"
      onClick={changeTheme}
    >
    </button>
  );
};
