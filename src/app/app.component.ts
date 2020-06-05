import { Component } from "@angular/core";

import { Platform } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { ApiService } from "./services/api.service";
import { Router } from "@angular/router";

@Component({
	selector: "app-root",
	templateUrl: "app.component.html",
	styleUrls: ["app.component.scss"],
})
export class AppComponent {
	public appPages = [
		{
			title: "Stones",
			url: "/stones",
			icon: "newspaper",
		},
		{
			title: "Account",
			url: "/account",
			icon: "person-circle",
		},
	];

	constructor(
		private platform: Platform,
		private splashScreen: SplashScreen,
		private statusBar: StatusBar,
		private api: ApiService,
		private router: Router
	) {
		this.initializeApp();
	}

	initializeApp() {
		this.platform.ready().then(() => {
			this.statusBar.styleDefault();
			this.splashScreen.hide();
		});
	}

	onLogout() {
		this.api.logout();
		console.log(this.api.userIsAuthenticated);
		this.router.navigateByUrl("/authentification");
	}
}
