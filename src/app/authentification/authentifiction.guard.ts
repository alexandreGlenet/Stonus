import { Injectable } from "@angular/core";
import {
	CanActivate,
	CanLoad,
	Route,
	UrlSegment,
	ActivatedRouteSnapshot,
	RouterStateSnapshot,
	UrlTree,
	Router,
} from "@angular/router";
import { Observable } from "rxjs";
import { ApiService } from "../services/api.service";

@Injectable({
	providedIn: "root",
})
export class AuthentifictionGuard implements CanActivate, CanLoad {
	constructor(private api: ApiService, private router: Router) {}
	canActivate(
		next: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	):
		| Observable<boolean | UrlTree>
		| Promise<boolean | UrlTree>
		| boolean
		| UrlTree {
		return true;
	}
	canLoad(
		route: Route,
		segments: UrlSegment[]
	): Observable<boolean> | Promise<boolean> | boolean {
		if (!this.api.userIsAuthenticated) {
			this.router.navigateByUrl("/authentification");
		}
		return this.api.userIsAuthenticated;
	}
}
