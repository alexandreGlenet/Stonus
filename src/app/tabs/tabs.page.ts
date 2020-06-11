import { Component, OnInit } from "@angular/core";
import { ApiService } from "../services/api.service";
import { ActivatedRoute } from "@angular/router";

@Component({
	selector: "app-tabs",
	templateUrl: "./tabs.page.html",
	styleUrls: ["./tabs.page.scss"],
})
export class TabsPage implements OnInit {
	constructor(private route: ActivatedRoute, private api: ApiService) {}

	ngOnInit() {
		// let id = this.api.getUsers(this.id).id;
		// this.api.getUserContent(id);
	}
}
