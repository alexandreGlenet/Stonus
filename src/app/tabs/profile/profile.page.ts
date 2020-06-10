import { Component, OnInit } from "@angular/core";
import { ApiService } from "src/app/services/api.service";
import { LoadingController } from "@ionic/angular";

@Component({
	selector: "app-profile",
	templateUrl: "./profile.page.html",
	styleUrls: ["./profile.page.scss"],
})
export class ProfilePage implements OnInit {
	page = 1;
	users = [];
	totalPages = 0;
	totalUsers = 0;

	constructor(
		private api: ApiService,
		private loadingCtrl: LoadingController
	) {}

	ngOnInit() {
		this.loadUsers();
	}

	async loadUsers() {
		let loading = await this.loadingCtrl.create({
			//message: "Loading Users",
		});

		await loading.present();

		this.api.getUsers(this.page).subscribe(
			(res) => {
				console.log("res: ", res);

				this.users = res.users;
				this.totalPages = res.totalPages;
				this.totalUsers = res.totalUsers;
			},
			(err) => {
				console.log("errors :", err);
			},
			() => {
				loading.dismiss();
			}
		);
	}
}
