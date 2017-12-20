import rootReducer from "./../../redux/reducers/rootReducer";

let markers = [
  {
    id: 1,
    name: "something",
    message: "something",
    coordinates: "something",
    user_id: 2
  }
];

let initialState = rootReducer(undefined, {});

describe("test reducer", () => {
  it("should return the initial state", () => {
    expect(initialState).toEqual(rootReducer(undefined, {}));
  });
  it("should handle SET_MARKERS", () => {
    expect(
      rootReducer(initialState, { type: "SET_MARKERS", markers })
    ).toEqual({
      id: null,
      markers: markers,
      latitude: null,
      longitude: null,
      selectedPinId: null
    });
  });
});
