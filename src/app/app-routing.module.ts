import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { AuthentifictionGuard } from "./authentification/authentifiction.guard";

const routes: Routes = [
	{
		path: "",
		redirectTo: "tabs/stone",
		pathMatch: "full",
	},
	{
		path: "",
		loadChildren: () =>
			import("./tabs/tabs.module").then((m) => m.TabsPageModule),
		//canLoad: [AuthentifictionGuard],
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
