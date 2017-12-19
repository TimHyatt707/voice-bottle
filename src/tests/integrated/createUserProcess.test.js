import createUser from "./../../api/createUser";
import createUserProcess from "./../../redux/thunks/createUserProcess";
jest.mock("./../../api/createUser");

let databaseId = "123213";
let token = "12213";
let object = {
  id: 0,
  username: "name",
  email: "coolperson@gmail.com",
  password: "pass"
};

describe("createUserProcess should call the API, get correct data", () => {
  it("calls API and returns data", () => {
    const thunk = createUserProcess(object);
    expect(typeof thunk).toBe("function");

    const dispatch = jest.fn();
    const getState = () => ({});
    createUser.mockReturnValueOnce(Promise.resolve(object));
    return thunk(dispatch, getState).then(user => {
      expect(createUser).toBeCalled();
      expect(user).toEqual(object);
    });
  });
});
