import { environment } from "./../../environments/environment";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getStones(page = 1): Observable<any> {
    let options = {
      observe: "response" as "body",
      params: {
        per_page: "5",
        page: "" + page,
      },
    };

    return this.http
      .get<any[]>(`${environment.apiUrl}stones?_embed`, options)
      .pipe(
        map((res) => {
          let data = res["body"];

          for (let stone of data) {
            if (stone["_embedded"]["wp:featuredmedia"]) {
              stone.media_url =
                stone["_embedded"]["wp:featuredmedia"][0]["media_details"].sizes[
                  "medium"
                ].source_url;
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
}
