import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor() {}

  Log(msg: string){
    console.log(msg);
  }

}
