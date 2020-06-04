import { Component, OnInit } from "@angular/core";
import { ApiService } from "../services/api.service";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
	selector: "app-authentification",
	templateUrl: "./authentification.page.html",
	styleUrls: ["./authentification.page.scss"],
})
export class AuthentificationPage implements OnInit {
	userForm: FormGroup;

	constructor(private api: ApiService, private fb: FormBuilder) {}

	ngOnInit() {}
}
