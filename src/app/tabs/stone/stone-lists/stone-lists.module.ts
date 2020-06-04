import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { StoneListsPageRoutingModule } from "./stone-lists-routing.module";

import { StoneListsPage } from "./stone-lists.page";

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		StoneListsPageRoutingModule,
	],
	declarations: [StoneListsPage],
})
export class StoneListsPageModule {}
