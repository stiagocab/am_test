export const charactersTypes = {
  ADD_FAVORITE: "ADD_FAVORITE",
  REMOVE_FAVORITE: "REMOVE_FAVORITE",
  SELECT_FILTER: "SELECT_FILTER",
};

const initialState = {
  favorites: [],
  characters: [],
};

const charactersReducer = (state = initialState, action) => {
  switch (action.type) {
    case charactersTypes.ADD_FAVORITE: {
      if (state.favorites.length < 5) {
        return { ...state, favorites: [...state.favorites, action.payload] };
      }
      return { ...state };
    }
    case charactersTypes.REMOVE_FAVORITE: {
      return {
        ...state,
        favorites: state.favorites.filter(
          (item) => item.name !== action.payload
        ),
      };
    }
    default:
      return { ...state };
  }
};

export default charactersReducer;
