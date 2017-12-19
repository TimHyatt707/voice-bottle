import getPins from "./../api/getPins";

let data = {
  markers: [
    {
      id: 1,
      lat: "something",
      long: "something",
      user_id: "2"
    }
  ]
};

describe("getPins", () => {
  it("Calls fetch and returns pins", () => {
    fetch.mockResponse(JSON.stringify(data.markers));
    return getPins(2, "23213213dfdf3e4132fdf").then(markers => {
      expect(markers).toEqual(data.markers);
    });
  });

  afterAll(() => {
    fetch.mockReset();
  });
});
