import getNearbyMarkers from "./../api/getNearbyMarkers";

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

describe("getNearbyMarkers", () => {
  it("Calls fetch and returns markers", () => {
    fetch.mockResponse(JSON.stringify(data.markers));
    return getNearbyMarkers({
      lat: "something",
      long: "something"
    }).then(markers => {
      expect(markers).toEqual(data.markers);
    });
  });

  afterAll(() => {
    fetch.mockReset();
  });
});
