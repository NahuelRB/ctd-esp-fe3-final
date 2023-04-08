export const globalReducer = (state, action) => {
  switch (action.type) {
    case 'CAMBIAR_TEMA': {
      return {
        ...state,
        isDarkMode: !state.isDarkMode,
      };
    }

    default: {
      throw new Error(`La accion de tipo ${action.type} no existe.`);
    }
  }
};
