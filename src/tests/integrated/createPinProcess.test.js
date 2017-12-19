import createPin from "./../../api/createPin";
import createPinProcess from "./../../redux/thunks/createPinProcess";
jest.mock("./../../api/createPin");

let databaseId = "123213";
let token = "12213";
let object = {
  id: 0,
  name: "something",
  message: "something",
  coordinates: "something",
  user_id: 1
};

describe("createPinProcess should call the API, get correct data, and dispatch", () => {
  it("calls API,return data, dispatch", () => {
    const thunk = createPinProcess(1, object, "sdsdasf2fdfdf");
    expect(typeof thunk).toBe("function");

    const dispatch = jest.fn();
    const getState = () => ({});
    createPin.mockReturnValueOnce(Promise.resolve(object));
    return thunk(dispatch, getState).then(pin => {
      expect(createPin).toBeCalled();
      expect(pin).toEqual(object);
      expect(dispatch).toBeCalledWith({
        type: "ADD_PIN",
        createdPin: pin
      });
    });
  });
});
