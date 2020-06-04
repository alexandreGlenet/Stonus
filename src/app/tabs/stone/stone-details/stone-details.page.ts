import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ApiService } from "../../../services/api.service";

import * as L from "leaflet";
//import { antPath } from "leaflet-ant-path";
import "leaflet/dist/images/marker-shadow.png";
import "leaflet/dist/images/marker-icon-2x.png";

import { Plugins } from "@capacitor/core";
import { AlertController } from "@ionic/angular";
const { Share } = Plugins;

@Component({
	selector: "app-stone-details",
	templateUrl: "./stone-details.page.html",
	styleUrls: ["./stone-details.page.scss"],
})
export class StoneDetailsPage implements OnInit {
	stone = null;
	//Map
	map: L.Map;
	newMarker: any;
	address: string[];

	comments = [];
	newComment = "";

	//Segment
	segmentModel = "map";

	constructor(
		private route: ActivatedRoute,
		private api: ApiService,
		private alertCtrl: AlertController
	) {}

	ngOnInit() {
		let id = this.route.snapshot.paramMap.get("id");
		this.api.getStoneContent(id).subscribe((res) => {
			console.log("stone: ", res);
			this.stone = res;
		});

		// this.api.getComments(id).subscribe(res => {
		//   console.log('comments: ', res);
		//   this.comments = res;
		// });
	}

	ionViewDidEnter() {
		console.log("didEnter-stone-detail.page");
		//this.map.remove();
		//console.log(this.map);
	}

	// async sharePost() {
	//   await Share.share({
	//     title: this.post.title.rendered,
	//     text: 'Check out this post!',
	//     url: this.post.link,
	//     dialogTitle: 'Share now'
	//   });
	// }

	ionViewWillLeave() {
		console.log("willleave-stone-detail.page");
	}

	// addComment() {
	//   this.api.addComment(this.post.id, this.newComment).subscribe(res => {
	//     this.newComment = '';
	//   }, async err => {
	//     const alert = await this.alertCtrl.create({
	//       header: err.error.code,
	//       subHeader: err.error.data.status,
	//       message: err.error.message,
	//       buttons: ['OK']
	//     });
	//     await alert.present();
	//   })
	// }
}
