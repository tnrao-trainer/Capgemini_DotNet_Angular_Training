import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelloService {

  public greeting(uname:string) : string{
    let str  = "";
    str =`Hi ${uname}, Good afternoon. How are you?`;
    return str;
  }

}
