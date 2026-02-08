function Place(location, landmarks, timeOfYear, notes) {
  this.location = location;
  this.landmarks = landmarks;
  this.timeOfYear = timeOfYear;
  this.notes = notes;

  console.log("New Place created:", this.location);
}

Place.prototype.getSummary = function () {
  const summary = this.location + " (" + this.timeOfYear + ")";
  console.log("Summary generated:", summary);
  return summary;
};

Place.prototype.getLandmarks = function () {
  const landmarkList = this.landmarks.join(", ");
  console.log("Landmarks retrieved:", landmarkList);
  return landmarkList;
};

// -------
// Output
// -------

console.log("Running Place object tests...");

const testPlace = new Place(
  "London",
  ["London Eye", "London Bridge"],
  "Summer",
  "Great environment"
);

testPlace.getSummary();
testPlace.getLandmarks();

console.log("Place tests completed");
