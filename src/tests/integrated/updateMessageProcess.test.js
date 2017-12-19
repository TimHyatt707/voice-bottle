import updateMessage from "./../../api/updateMessage";
import updateMessageProcess from "./../../redux/thunks/updateMessageProcess";
jest.mock("./../../api/updateMessage");

const message = { name: "something", message: "something" };
let returnedMessage = {
  id: 1,
  name: "something",
  message: "something",
  user_id: 1
};

describe("updateMessageProcess should call the API, change data, and dispatch", () => {
  it("calls API", () => {
    const thunk = updateMessageProcess(1, message, "2e22323232");
    expect(typeof thunk).toBe("function");

    const dispatch = jest.fn();
    const getState = () => ({});
    updateMessage.mockReturnValueOnce(Promise.resolve(returnedMessage));
    return thunk(dispatch, getState).then(pin => {
      expect(updateMessage).toBeCalled();
      expect(returnedMessage).toEqual(pin);
      expect(dispatch).toBeCalledWith({
        type: "UPDATE_PIN",
        updatedMessage: pin
      });
    });
  });
});
