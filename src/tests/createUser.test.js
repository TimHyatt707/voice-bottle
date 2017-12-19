import createUser from "./../api/createUser";

let data = {
  id: 1,
  username: "someone",
  email: "someone@somewhere.com"
};

describe("create a user", () => {
  it("Calls fetch and creates a user", () => {
    fetch.mockResponse(JSON.stringify(data));
    return createUser({
      username: "someone",
      email: "someone@somewhere.com",
      password: "catdog"
    }).then(record => {
      expect(record).toEqual(data);
    });
  });

  afterAll(() => {
    fetch.mockReset();
  });
});
