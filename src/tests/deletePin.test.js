import deletePin from "./../api/deletePin";

const id = 1;
const token = "213fdfe31242314";
const pin = {
  id: 1,
  name: "something",
  message: "something",
  coordinates: "something",
  user_id: 2
};

describe("delete a pin", () => {
  it("Calls fetch and deletes a pin", () => {
    fetch.mockResponse(JSON.stringify(pin));
    return deletePin(id, token).then(record => {
      expect(record).toEqual(pin);
    });
  });

  afterAll(() => {
    fetch.mockReset();
  });
});
