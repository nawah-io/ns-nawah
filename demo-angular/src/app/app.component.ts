import { NawahService } from 'ns-nawah';
import { Component } from "@angular/core";

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html"
})
export class AppComponent {

    serverIp: string = 'wss://limp-sample-app.azurewebsites.net/ws';
    token: string = '__ANON_TOKEN_f00000000000000000000012';
    conn_status: 'connected' | 'connecting' | 'not connected' = 'not connected';

    userType: 'username' | 'email' | 'phone' = 'email';
    userName: string = "ADMIN@LIMP.MASAAR.COM";
    password: string = "__ADMINx0";

    endPoint: string = '';
    query: string;
    doc: string;

    isDestory: boolean = false;

    results: Array<any> = [];

    layout: 'log' | 'query' = 'query';


    constructor(private nawah: NawahService) {
        this.nawah.init({
            api: this.serverIp,
            anonToken: this.token,
            appId: '__public',
            authAttrs: ['email', 'username', 'phone'],
            debug: true
        });
    }
}
