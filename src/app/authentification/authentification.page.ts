import { Component, OnInit } from "@angular/core";
import { ApiService } from "../services/api.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AlertController } from "@ionic/angular";

@Component({
	selector: "app-authentification",
	templateUrl: "./authentification.page.html",
	styleUrls: ["./authentification.page.scss"],
})
export class AuthentificationPage implements OnInit {
	userForm: FormGroup;

	constructor(
		private api: ApiService,
		private fb: FormBuilder,
		private alertCtrl: AlertController
	) {}

	ngOnInit() {
		this.userForm = this.fb.group({
			username: ["", Validators.required],
			password: ["", Validators.required],
		});
	}

	login() {
		this.api
			.signIn(this.userForm.value.username, this.userForm.value.password)
			.subscribe(
				(res) => {
					console.log("login finished");
				},
				async (err) => {
					const alert = await this.alertCtrl.create({
						header: err.error.code,
						subHeader: err.error.data.status,
						message: err.error.message,
						buttons: ["OK"],
					});
					await alert.present();
				}
			);
	}
}
