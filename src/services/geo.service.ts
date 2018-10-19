// import { HttpClientModule } from '@angular/common/http';  // replaces previous Http service
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CreateMatchPage } from "../pages/create-match/create-match";

@Injectable()
export class GeoService {
    // API_KEY = "AIzaSyCLlprHC9Qr1JD6d2o2znoqi-XURMA9S3U";
    CLIENT_ID = "U2E0H0RIFQMMXJEFBMQCX3A54AIGIRCEWUWBS4RZ1ZE1AASY";
    CLIENT_SECRET = "Q103KON5LVBHXFI1F002SXX1KHC2PQDDFYB5LCWM2WVOQQTP";
    getPositionCallback:(observer:any, pageRef:CreateMatchPage) => void;
    pageRef:CreateMatchPage;

  constructor(public http: HttpClient) {
    console.log(http);
  }

  getLocation(callBack:(observer:any, pageRef:CreateMatchPage) => void, pageRef:CreateMatchPage) {
      this.getPositionCallback = callBack;
      this.pageRef = pageRef;
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
    // var places = this.http.get(
    //   "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" +
    //     latitude +
    //     "," +
    //     longitude +
    //     "&radius=1500&key=" +
    //     this.API_KEY +
    //     ""
    // );
    var places = this.http.get("https://api.foursquare.com/v2/venues/search?client_id=" + this.CLIENT_ID +
        "&client_secret=" + this.CLIENT_SECRET + "&ll=" + latitude + "," + longitude + "&v=" + "20180723");
        this.getPositionCallback(places, this.pageRef);
    places.subscribe(
      data => {
        console.log(data);
      },
      err => console.error(err),
      () => console.log("done loading places")
    );
  }
}
