import getNearbyMarkersProcess from "./../../redux/thunks/getNearbyMarkersProcess";
import getNearbyMarkers from "./../../api/getNearbyMarkers";
jest.mock("./../../api/getNearbyMarkers");

let data = {
  records: [
    {
      id: 1,
      coordinates: "somewhere",
      name: "something",
      message: "something",
      user_id: 2
    },
    {
      id: 2,
      coordinates: "somewhere",
      name: "something",
      message: "something",
      user_id: 2
    }
  ]
};

describe("getNearbyMarkersProcess should call the API, get correct data, and dispatch", () => {
  it("calls API,return data, dispatch", () => {
    const thunk = getNearbyMarkersProcess("somewhere");
    expect(typeof thunk).toBe("function");

    const dispatch = jest.fn();
    const getState = () => ({});
    getNearbyMarkers.mockReturnValueOnce(Promise.resolve([...data]));
    return thunk(dispatch, getState).then(markers => {
      expect(getNearbyMarkers).toBeCalled();
      expect(markers).toEqual([...data]);
      expect(dispatch).toBeCalledWith({
        type: "SET_MARKERS",
        markers: markers
      });
    });
  });
});
