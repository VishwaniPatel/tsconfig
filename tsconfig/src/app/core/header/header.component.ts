import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './Header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() {
    // Example for noImplicitOverride

    // class Album {
    //   setup() { }
    // }

    // class MLAlbum extends Album {
    //   override setup() { }
    // }

    // class SharedAlbum extends Album {
    //   override setup() { }

    // }

    // Example for noPropertyAccessFromIndexSignature
    // interface GameSettings {
    //   // Known up-front properties
    //   speed: "fast" | "medium" | "slow";
    //   quality: "high" | "low";

    //   // Assume anything unknown to the interface
    //   // is a string.
    //   [key: string]: string;
    // }
    // const settings = getSettings();
    // settings.speed;
    // settings.quality;
    // // Unknown key accessors are allowed on
    // // this object, and are `string`
    // settings.username;

    // Example for noImplicitReturns
    // function lookupHeadphonesManufacturer(color: "blue" | "black"): string {

    //   if (color === "blue") {
    //     return "beats";
    //   } else {
    //     "bose";
    //   }
    // }

    // Example for noFallthroughCasesInSwitch
    // const a: number = 6;

    // switch (a) {
    //   case 0:
    //     console.log("Zero");
    //   case 1:
    //     console.log("odd");
    //     break;
    // }

    // Eample of noPropertyAccessFromIndexSignature
    // interface MyObject {
    //   [key: string]: number;
    // }

    // const obj: MyObject = { foo: 1, bar: 2 };
    // console.log(obj.foo); // Error: Property 'foo' does not exist on type 'MyObject'.


  }

  ngOnInit(): void {
  }


}
