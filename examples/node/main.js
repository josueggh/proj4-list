const proj4 = require("proj4")
const proj4list = require("../../list.min");

/*
Inside the pro4js definition meethod you need to specify an array with EPSG elements that you  are going to use
* */
proj4.defs([
  proj4list["EPSG:3035"],
  proj4list["EPSG:4326"],
  proj4list["EPSG:2104"],
  proj4list["EPSG:4326"],
  proj4list["EPSG:5940"],
]);

let examples = {
  "EPSG: 3035 to EPSG:4326 ": proj4("EPSG:3035", "EPSG:4326", [ 4305500, 2674500 ]),
  "EPSG: 4326 to EPSG:3035 ": proj4("EPSG:4326", "EPSG:3035", [ 9.795661737586798, 47.1838761745174 ]),
  "EPSG: 3035 to EPSG:2104 ": proj4("EPSG:3035", "EPSG:2104", [ 4305500, 2674500 ]),
  "EPSG: 2104 to EPSG:4326 ": proj4("EPSG:2104", "EPSG:4326", [ 7710002.445381781, 5384787.963886759 ]),
  "EPSG: 3035 to EPSG:5940 ": proj4("EPSG:3035", "EPSG:5940", [  4305500, 2674500 ]),
};

console.log(examples);