import { Component, OnInit } from "@angular/core";
import { SegmentChangeEventDetail } from "@ionic/core";
import { ApiService } from "src/app/services/api.service";
import { LoadingController } from "@ionic/angular";

@Component({
	selector: "app-stone-lists",
	templateUrl: "./stone-lists.page.html",
	styleUrls: ["./stone-lists.page.scss"],
})
export class StoneListsPage implements OnInit {
	page = 1;
	stones = [];
	totalPages = 0;
	totalStones = 0;

	constructor(
		private api: ApiService,
		private loadingCtrl: LoadingController
	) {}

	ngOnInit() {
		this.loadStones();
	}

	async loadStones() {
		let loading = await this.loadingCtrl.create({
			message: "Loading Stones",
		});

		await loading.present();

		this.api.getStones(this.page).subscribe(
			(res) => {
				console.log("res: ", res);

				this.stones = res.stones;
				this.totalPages = res.totalPages;
				this.totalStones = res.totalStones;
			},
			(err) => {
				console.log("errors :", err);
			},
			() => {
				loading.dismiss();
			}
		);
	}

	onFilterUpdate(event: CustomEvent<SegmentChangeEventDetail>) {
		// if (event.detail.value === "map") {
		// 	event.detail.value = "stones-list";
		// } else {
		// 	event.detail.value = "map";
		// }
	}
}
