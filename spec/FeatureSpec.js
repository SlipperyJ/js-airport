'use strict';

describe("Airport", function(){
  var airport
  var plane

  beforeEach(function(){
    airport = new Airport
    plane   = new Plane
  });

  it("can instruct a plane to land at an airport", function(){
    plane.land(airport)
    expect(airport.planes()).toContain(plane);
  });

});
