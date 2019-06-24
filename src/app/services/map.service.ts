import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  public lat: number;
  public lng: number;

  constructor() { }

  getPosition(): Promise<any> {
    return new Promise<any>(
      (resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
          (resp) => {
            resolve({ lat: resp.coords.latitude, lng: resp.coords.longitude});
            /*resolve(resp);
            this.lat = resp.coords.latitude;
            this.lng = resp.coords.longitude;*/
          },
          (error) => {
            reject(error);
          }
        );
      }
    );
  }
}
