import createUser from "../../api/createUser";

export default function createUserProcess(user) {
  return async (dispatch, getState) => {
    try {
      const user = await createUser(user);
      return user;
    } catch (error) {
      throw new Error(error);
    }
  };
}
