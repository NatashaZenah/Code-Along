document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM fully loaded and parsed");

  let places = [];

  function displayPlaces() {
    const ul = document.getElementById("places-list");
    ul.innerHTML = "";

    console.log("displayPlaces called. Number of places:", places.length);

    places.forEach(function (place) {
      const li = document.createElement("li");
      li.textContent = place.location;

      li.addEventListener("click", function () {
        console.log("Place clicked:", place.location);
        showPlaceDetails(place);
      });

      ul.appendChild(li);
    });
  }

  function showPlaceDetails(place) {
    console.log("Showing details for:", place.location);

    const div = document.getElementById("place-details");
    div.innerHTML = `
      <h3>${place.location}</h3>
      <p><strong>Time of Year:</strong> ${place.timeOfYear}</p>
      <p><strong>Landmarks:</strong> ${place.getLandmarks()}</p>
      <p><strong>Notes:</strong> ${place.notes}</p>
    `;
  }

  document.getElementById("place-form").addEventListener("submit", function (event) {
    event.preventDefault();

    console.log("Form submitted");

    const location = document.getElementById("location").value;
    const landmarksInput = document.getElementById("landmarks").value;
    const timeOfYear = document.getElementById("timeOfYear").value;
    const notes = document.getElementById("notes").value;

    const landmarks = landmarksInput.split(",").map(function (landmark) {
      return landmark.trim();
    });

    const newPlace = new Place(location, landmarks, timeOfYear, notes);
    places.push(newPlace);

    console.log("New place added:", newPlace.location);

    displayPlaces();
    event.target.reset();
  });

  console.log("scripts.js ready");
});
