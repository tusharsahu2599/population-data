const initialState = [
  { id: 0, country: "India", city: "Delhi", population: 1234567890 },
  { id: 1, country: "Shrilanka", city: "colombo", population: 4567891230 },
  {id : 2, country: "USA", city: "Chicago", population:50000}
];

export const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_DATA":
      state = [...state, action.payload];
      return state;
    case "DELETE_DATA":
      const dataFilter = state.filter((data) =>
        data.id === action.payload ? null : data
      );
      state = dataFilter;
      return state;
    case "UPDATE_DATA":
      const dataUpdate = state.filter((data) =>
        data.id === action.payload.id
          ? Object.assign(data, action.payload)
          : data
      );
      state = dataUpdate;
      return state;
    case "RESET_DATA":
      state = [{ country: null, city: null, population: null }];
      return state;
    default:
      return state;
  }
};
