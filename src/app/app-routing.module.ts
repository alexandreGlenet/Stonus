import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
	{
		path: "",
		redirectTo: "tabs/stone/stone-lists",
		pathMatch: "full",
	},
	{
		path: "stones",
		loadChildren: () =>
			import("./pages/stones/stones.module").then((m) => m.StonesPageModule),
	},
	{
		path: "account",
		loadChildren: () =>
			import("./pages/account/account.module").then((m) => m.AccountPageModule),
	},
	{
		path: "stones-details",
		loadChildren: () =>
			import("./pages/stones-details/stones-details.module").then(
				(m) => m.StonesDetailsPageModule
			),
	},
	{
		path: "",
		loadChildren: () =>
			import("./tabs/tabs.module").then((m) => m.TabsPageModule),
	},
	{
		path: "authentification",
		loadChildren: () =>
			import("./authentification/authentification.module").then(
				(m) => m.AuthentificationPageModule
			),
	},
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
	],
	exports: [RouterModule],
})
export class AppRoutingModule {}
