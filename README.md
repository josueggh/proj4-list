# proj4-list
This list is a helper to use [pro4js](https://github.com/proj4js/proj4js), is really useful when you are new using the [pro4js](https://github.com/proj4js/proj4js) library or if is your first time trying
to do some coordinate system transformations of values. 

## Usage

You only need to import the list.min.js inside the code where you are using **proj4js**

```javascript
    const proj4 = require("proj4")
    const proj4list = require("../../list.min");   
```
After that, in the proj4.defs method you need to add the element that you're going to use inside an array.

```javascript
    proj4.defs([
        proj4list["EPSG:3035"],
        proj4list["EPSG:4326"]
    );
``` 
Now you can do the coordinate transformation in the typical way.
```javascript
proj4("EPSG:3035", "EPSG:4326", [ 4305500, 2674500 ])
```
