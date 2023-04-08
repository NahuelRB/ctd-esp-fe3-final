import { useContext } from 'react';
import {ContextGlobal} from '../utils/global.context';

export const useAppContext = () => {
  const context = useContext(ContextGlobal);

  const [state, dispatch] = context;

  return {
    //changeTheme,
    dispatch,
    state,
  };
};
