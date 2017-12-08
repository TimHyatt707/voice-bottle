import createUser from "../../api/createUser";

export default function createUserProcess(user) {
  return async (dispatch, getState) => {
    try {
      const createdUser = await createUser(user);
      return createdUser;
    } catch (error) {
      return error;
    }
  };
}
