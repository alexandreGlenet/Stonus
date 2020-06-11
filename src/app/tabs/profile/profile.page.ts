import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import * as L from "leaflet";
//import { antPath } from "leaflet-ant-path";
import "leaflet/dist/images/marker-shadow.png";
import "leaflet/dist/images/marker-icon-2x.png";

import { Plugins } from "@capacitor/core";
import { AlertController } from "@ionic/angular";
import { ApiService } from "src/app/services/api.service";
const { Share } = Plugins;

@Component({
	selector: "app-stone-details",
	templateUrl: "./profile.page.html",
	styleUrls: ["./profile.page.scss"],
})
export class ProfilePage implements OnInit {
	user = null;
	currentUser = this.api.getUserValue();
	currentUserId = this.api.getUserId();

	constructor(
		private route: ActivatedRoute,
		private api: ApiService,
		private alertCtrl: AlertController
	) {}

	ngOnInit() {
		// let id = this.route.snapshot.paramMap.get("id");
		// this.api.getUserContent(id).subscribe((res) => {
		// 	console.log("user: ", res);
		// 	this.user = res;
		// });
		// if (this.api.getCurrentUser() && this.api.getUserToken()) {
		// 	this.api.getCurrentUser;
		// }
		let id = this.api.getUserId();
		this.api.getUserContent(id).subscribe((res) => {
			console.log("User: ", res);
			this.user = res;
		});
	}

	ionViewDidEnter() {
		console.log("didEnter-profile.page");
	}

	ionViewWillLeave() {
		console.log("willleave-profile.page");
	}
}
