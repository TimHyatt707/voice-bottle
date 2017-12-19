import deletePin from "./../../api/deletePin";
import deletePinProcess from "./../../redux/thunks/deletePinProcess";
jest.mock("./../../api/deletePin");

describe("DeletePinProcess should call the API, delete a Pin, and dispatch", () => {
  it("calls API,deletes Pin, dispatch", () => {
    const thunk = deletePinProcess(3, "3434343433");
    expect(typeof thunk).toBe("function");

    const dispatch = jest.fn();
    const getState = () => ({});
    deletePin.mockReturnValueOnce(Promise.resolve(3));
    return thunk(dispatch, getState).then(pin => {
      expect(deletePin).toBeCalled();
      expect(dispatch).toBeCalledWith({
        type: "DELETE_PIN",
        deletedPin: 3
      });
    });
  });
});
