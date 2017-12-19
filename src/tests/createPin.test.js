import createPin from "./../api/createPin";

let data = {
  id: 1,
  coordinates: "somewhere",
  name: "something",
  message: "something",
  user_id: "2"
};

describe("create a pin", () => {
  it("Calls fetch and creates a pin", () => {
    fetch.mockResponse(JSON.stringify(data));
    return createPin(
      2,
      { token: "sdasdsfe221ef" },
      { coordinates: "somewhere", name: "something", message: "something" }
    ).then(record => {
      expect(record).toEqual(data);
    });
  });

  afterAll(() => {
    fetch.mockReset();
  });
});
