export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  //   REMOVE after finished developing
  token:
    "BQBc8FKKAm6Od5ygyMpZJavMXOWIic8YcyfR9uMrHUWuXd5JbZ2EDK8cQ6obcLG6Pa0kcNYFHar6Vzu5-IuY_xxfxpPTMSBpaYPZdAxeB9b1Z6bcbXbaTl8PNaX5DZfkBhaXF9043f4JBslpt5N2i2VlSu58wTp9WHaiyae4KFi-XRps",
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
    default:
      return state;
  }
};

export default reducer;
