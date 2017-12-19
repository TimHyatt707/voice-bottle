import updateMessage from "./../api/updateMessage";

let message = {
  name: "something",
  message: "something"
};

let returnedMessage = {
  id: 1,
  name: "something",
  message: "something",
  coordinates: "something",
  user_id: 2
};

const id = 1;
const token = "213fdfe31242314";

describe("update a message", () => {
  it("Calls fetch and updates a message", () => {
    fetch.mockResponse(JSON.stringify(returnedMessage));
    return updateMessage(id, message, token).then(record => {
      expect(record).toEqual(returnedMessage);
    });
  });

  afterAll(() => {
    fetch.mockReset();
  });
});
