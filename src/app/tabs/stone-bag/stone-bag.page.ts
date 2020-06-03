import { Component, OnInit } from "@angular/core";
import { SegmentChangeEventDetail } from "@ionic/core";
import { ApiService } from "src/app/services/api.service";
import { LoadingController } from "@ionic/angular";

import * as L from "leaflet";
//import { antPath } from "leaflet-ant-path";
import "leaflet/dist/images/marker-shadow.png";
import "leaflet/dist/images/marker-icon-2x.png";

@Component({
	selector: "app-stone-bag",
	templateUrl: "./stone-bag.page.html",
	styleUrls: ["./stone-bag.page.scss"],
})
export class StoneBagPage implements OnInit {
	//Map
	map: L.Map;
	newMarker: any;
	address: string[];

	constructor(
		private api: ApiService,
		private loadingCtrl: LoadingController
	) {}

	ngOnInit() {}

	ionViewWillEnter() {
		console.log("willEnter");
	}

	ionViewDidEnter() {
		console.log("didEnter");
		console.log(this.map);
	}

	ionViewWillLeave() {
		console.log("willleave");
		//console.log(this.map);
	}

	// ionViewDidLeave() {
	// 	this.map.remove();
	// }
}
