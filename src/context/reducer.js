export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  //   REMOVE after finished developing
  token:
    "BQDTSnrisxmg4PkxU-ule15m6kaDbDw19wubffa5CnHcel-hbWBxFNpCxsOSkgrC7DGbB2GPuuN3Po1R78MStxoW4ocutJgY5BnPQrzYQjTwXJHIb8kyVTD93O0RSiRgD54YxMLWXtEXri84IvbTXiCJ1XGP1PBk5j7e1AeXa6pm4X-P",
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    default:
      return state;
  }
};

export default reducer;
