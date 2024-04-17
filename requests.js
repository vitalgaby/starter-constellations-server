const axios = require("axios");
const url = "http://localhost:5001/constellations/grpRupe";
axios
  .delete(url, {
    name: "Ara",
    meaning: "Altar",
    starsWithPlanets: 7,
    quadrant: "SQ3",
    "id": "grpRupe"
  })
  .then((response) => {
    console.log(response.data);
  });