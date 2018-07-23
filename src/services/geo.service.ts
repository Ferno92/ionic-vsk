// import { HttpClientModule } from '@angular/common/http';  // replaces previous Http service
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class GeoService {
  API_KEY = "AIzaSyCLlprHC9Qr1JD6d2o2znoqi-XURMA9S3U";

  constructor(public http: HttpClient) {
    console.log(http);
  }

  getLocation() {
    var startPos;
    var geoError = function(error) {
      console.log("Error occurred. Error code: " + error.code);
      // error.code can be:
      //   0: unknown error
      //   1: permission denied
      //   2: position unavailable (error response from location provider)
      //   3: timed out
    };
    navigator.geolocation.getCurrentPosition(
      this.geoSuccess.bind(this),
      geoError
    );
  }
  geoSuccess(position: any) {
    var location = {
      longitude: position.coords.longitude,
      latitude: position.coords.latitude
    };
    console.log(location);
    this.checkNearbyPlaces(location.latitude, location.longitude);
    //   document.getElementById("startLat").innerHTML = startPos.coords.latitude;
    //   document.getElementById("startLon").innerHTML = startPos.coords.longitude;
  }

  checkNearbyPlaces(latitude: String, longitude: String) {
    var places = this.http.get(
      "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" +
        latitude +
        "," +
        longitude +
        "&radius=1500&key=" +
        this.API_KEY +
        ""
    );
    places.subscribe(
      data => {
        console.log(data);
      },
      err => console.error(err),
      () => console.log("done loading places")
    );
  }
}
