import { Component, OnInit } from "@angular/core";
import { ApiService } from "../services/api.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AlertController, ToastController } from "@ionic/angular";
import { Router } from "@angular/router";

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
		private alertCtrl: AlertController,
		private toastCtrl: ToastController,
		private router: Router
	) {}

	ngOnInit() {
		this.userForm = this.fb.group({
			username: ["", Validators.required],
			email: "",
			password: ["", Validators.required],
		});
	}

	onLogin() {
		this.api
			.login(this.userForm.value.username, this.userForm.value.password)
			.subscribe(
				(res) => {
					console.log("login finished");
					this.api.ActivateUserIsAuthenticated();
					console.log(this.api.userIsAuthenticated);
					this.router.navigateByUrl("/tabs/stone");
				},
				async (err) => {
					const alert = await this.alertCtrl.create({
						header: err.error.code,
						subHeader: err.error.data.status,
						message: err.error.message,
						buttons: ["OK"],
					});
					await alert.present();
					console.log(this.api.userIsAuthenticated);
				}
			);

		//console.log(this.api.userIsAuthenticated);
	}

	signUp() {
		this.api
			.signUp(
				this.userForm.value.username,
				this.userForm.value.email,
				this.userForm.value.password
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

	async openPwReset() {
		const alert = await this.alertCtrl.create({
			header: "Forgot password?",
			message: "Enter your email or username to retrieve a new password",
			inputs: [
				{
					type: "text",
					name: "usernameOrEmail",
				},
			],
			buttons: [
				{
					role: "cancel",
					text: "Back",
				},
				{
					text: "Reset Password",
					handler: (data) => {
						this.resetPw(data["usernameOrEmail"]);
					},
				},
			],
		});

		await alert.present();
	}

	resetPw(usernameOrEmail) {
		this.api.resetPassword(usernameOrEmail).subscribe(
			async (res) => {
				const toast = await this.toastCtrl.create({
					message: res["message"],
					duration: 2000,
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
