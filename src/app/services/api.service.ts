import { environment } from "./../../environments/environment";
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, BehaviorSubject, from } from "rxjs";
import { map, switchMap, tap } from "rxjs/operators";
import { Platform } from "@ionic/angular";
import { Storage } from "@ionic/storage";

const JWT_KEY = "my_token";

@Injectable({
	providedIn: "root",
})
export class ApiService {
	private user = new BehaviorSubject(null);
	private _userIsAuthenticated = false;

	get userIsAuthenticated() {
		return this._userIsAuthenticated;
	}

	currentUser = this.getUserValue();
	token: string;

	constructor(
		private http: HttpClient,
		private storage: Storage,
		private plt: Platform
	) {
		this.plt.ready().then(() => {
			this.storage.get(JWT_KEY).then((data) => {
				if (data) {
					console.log("JWT from storage: ", data);
					this.user.next(data);
				}
			});
		});
	}

	getStones(page = 1): Observable<any> {
		let options = {
			observe: "response" as "body",
			params: {
				per_page: "5",
				page: "" + page,
			},
			headers: new HttpHeaders({
				"Content-Type": "application/json; charset=utf-8",
				Authorization: "Bearer " + this.getUserToken(),
			}),
		};

		return this.http
			.get<any[]>(`${environment.authUrl}/stonus/v1/stones`, options)
			.pipe(
				map((res) => {
					let data = res["body"];

					for (let stone of data) {
						if (stone.photo) {
							stone.photo = stone.photo.sizes["medium"];
						}
					}

					return {
						stones: data,
						pages: res["headers"].get("x-wp-totalpages"),
						totalStones: res["headers"].get("x-wp-total"),
					};
				})
			);
	}

	getStoneContent(id) {
		return this.http
			.get<any>(`${environment.authUrl}/stonus/v1/stones/${id}`)
			.pipe(
				map((stone) => {
					if (stone.photo) {
						stone.photo = stone.photo.sizes["medium"];
					}
					return stone;
				})
			);
	}

	// AUTH & USER

	login(username: any, password: any) {
		return this.http
			.post(`${environment.authUrl}/jwt-auth/v1/token`, { username, password })
			.pipe(
				switchMap((data) => {
					console.log("got token: ", data);
					return from(this.storage.set(JWT_KEY, data));
				}),
				tap((data) => {
					this.user.next(data);
				})
			);
		this._userIsAuthenticated = true;
	}

	ActivateUserIsAuthenticated() {
		this._userIsAuthenticated = true;
	}

	getPrivatePosts() {
		return this.http
			.get<any[]>(`${environment.apiUrl}/posts?_embed&status=private`)
			.pipe(
				map((data) => {
					for (let post of data) {
						if (post["_embedded"]["wp:featuredmedia"]) {
							post.media_url =
								post["_embedded"]["wp:featuredmedia"][0]["media_details"].sizes[
									"medium"
								].source_url;
						}
					}
					return data;
				})
			);
	}

	getCurrentUser() {
		return this.user.asObservable();
	}

	getUserValue() {
		return this.user.getValue();
	}

	getUserToken() {
		return this.user.getValue().token;
	}

	logout() {
		this._userIsAuthenticated = false;
		this.storage.remove(JWT_KEY).then(() => {
			this.user.next(null);
		});
	}
}
