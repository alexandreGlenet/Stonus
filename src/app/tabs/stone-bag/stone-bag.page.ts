import { Component, OnInit, Sanitizer } from "@angular/core";
import { SegmentChangeEventDetail } from "@ionic/core";
import { ApiService } from "src/app/services/api.service";
import {
	LoadingController,
	ToastController,
	AlertController,
} from "@ionic/angular";
import { Plugins, CameraResultType, CameraSource } from "@capacitor/core";
const { Camera } = Plugins;

import * as L from "leaflet";
//import { antPath } from "leaflet-ant-path";
import "leaflet/dist/images/marker-shadow.png";
import "leaflet/dist/images/marker-icon-2x.png";
import { DomSanitizer } from "@angular/platform-browser";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
	selector: "app-stone-bag",
	templateUrl: "./stone-bag.page.html",
	styleUrls: ["./stone-bag.page.scss"],
})
export class StoneBagPage implements OnInit {
	//Formulaire création Stone
	stoneForm: FormGroup;
	onCreate = false;
	//PHOTO
	photoStone = null;

	//Map
	map: L.Map;
	newMarker: any;
	address: string[];

	user = null;

	constructor(
		private api: ApiService,
		private loadingCtrl: LoadingController,
		private sanitizer: DomSanitizer,
		private fb: FormBuilder,
		private toastCtrl: ToastController,
		private alertCtrl: AlertController
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
			source: CameraSource.Camera,
		});
		console.log("image: ", image);

		this.photoStone = this.sanitizer.bypassSecurityTrustResourceUrl(
			image && image.webPath
		);
	}

	createStone() {
		this.onCreate = true;
		this.stoneForm = this.fb.group({
			title: ["", Validators.required],
			description: "",
			photoStone: "",
		});
	}

	validateCreateStone() {
		this.onCreate = false;

		this.api
			.validateCreateStone(
				this.stoneForm.value.title,
				this.stoneForm.value.description,
				this.photoStone
			)
			.subscribe(
				async (res) => {
					const toast = await this.toastCtrl.create({
						message: res["message"],
						duration: 3000,
					});
					toast.present();
				},
				(err) => {
					this.showError(err);
				}
			);
	}

	async showError(err) {
		const alert = await this.alertCtrl.create({
			header: err.error.code,
			subHeader: err.error.data.status,
			message: err.error.message,
			buttons: ["OK"],
		});
		await alert.present();
	}
}
