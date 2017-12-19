import getPinsProcess from "./../../redux/thunks/getPinsProcess";
import getPins from "./../../api/getPins";
jest.mock("./../../api/getPins");

let data = [
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
];

describe("getPinsProcess should call the API, get correct data, and dispatch", () => {
  it("calls API,return data, dispatch", () => {
    const thunk = getPinsProcess(2, "21123232");
    expect(typeof thunk).toBe("function");

    const dispatch = jest.fn();
    const getState = () => ({});
    getPins.mockReturnValueOnce(Promise.resolve([...data]));
    return thunk(dispatch, getState).then(pins => {
      expect(getPins).toBeCalled();
      expect(pins).toEqual([...data]);
    });
  });
});
