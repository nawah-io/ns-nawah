import { Component, OnInit } from "@angular/core";
import { NawahService } from "ns-nawah";

@Component({
    selector: "Home",
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {

    //https://fresh4u-api.azurewebsites.net/

    constructor(private nawah: NawahService) {
        // this.nawah.init({
        //     api: this.serverIp,
        //     anonToken: this.token,
        //     appId: '__public',
        //     authAttrs: ['email', 'username', 'phone'],
        //     debug: true
        // });
    }

    ngOnInit(): void {
        // Init your component properties here.
    }
}
