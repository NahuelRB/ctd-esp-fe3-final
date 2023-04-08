import { useContext } from 'react';
import {ContextGlobal} from '../utils/global.context';
//import odontoApi from '../utils/odontoApi';

export const useAppContext = () => {
  const context = useContext(ContextGlobal);

  const [state, dispatch] = context;

  /*const changeTheme = () => {
    dispatch({ type: 'CHANGE_THEME' });
  };*/

  
  /*const fetchData = async () => {
    try {      
      dispatch({type: 'START_FETCH'});
      const { data } = await odontoApi.get();
      dispatch({ type: 'ADD_DATA', payload: data });      
    } catch (error) {      
      console.log(error)
      throw new Error('No pudimos cargar la información. Intenta luego nuevamente.')
    }finally {      
      dispatch({type: 'FINISH_FETCH'})      
    }   
  };*/

  return {
    //changeTheme,
    dispatch,
    state,
  };
};
