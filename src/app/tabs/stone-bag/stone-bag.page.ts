import { Component, OnInit } from "@angular/core";
import { SegmentChangeEventDetail } from "@ionic/core";
import { ApiService } from "src/app/services/api.service";
import { LoadingController } from "@ionic/angular";
import { Plugins, CameraResultType } from "@capacitor/core";
const { Camera } = Plugins;

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
	//PHOTO
	image = null;

	//Map
	map: L.Map;
	newMarker: any;
	address: string[];

	user = null;

	constructor(
		private api: ApiService,
		private loadingCtrl: LoadingController
	) {}

	ngOnInit() {
		let id = this.api.getUserId();
		this.api.getUserContent(id).subscribe((res) => {
			console.log("user: ", res);
			this.user = res;
			if (this.user.photo == null) {
				this.user.photo = "../assets/img/no-image.png";
			} else {
				//this.user.photo = this.user.photo.sizes.medium;
			}
		});
	}

	ionViewWillEnter() {
		//console.log("willEnter");
	}

	ionViewDidEnter() {
		//console.log("didEnter");
		//console.log(this.map);
	}

	ionViewWillLeave() {
		//console.log("willleave");
		//console.log(this.map);
	}

	// ionViewDidLeave() {
	// 	this.map.remove();
	// }

	async takePicture() {
		const image = await Camera.getPhoto({
			quality: 50,
			allowEditing: true,
			resultType: CameraResultType.Uri,
		});
		console.log("image: ", image);
		// image.webPath will contain a path that can be set as an image src.
		// You can access the original file using image.path, which can be
		// passed to the Filesystem API to read the raw data of the image,
		// if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
		this.image = image.webPath;
		// Can be set to the src of an image now
		// imageElement.src = imageUrl;
	}
}
