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
      .get<any[]>(`${environment.authUrl}/stonus/v1/stones`, options)
      .pipe(
        map((res) => {
          let data = res["body"];

          for (let stone of data) {
            if (stone.photo) {
              stone.photo =
                stone.photo.sizes[
                  "medium"
                ];
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
    return this.http.get<any>(`${environment.authUrl}/stonus/v1/stones/${id}`).pipe(
      map(stone => {
        if (stone.photo) {
          stone.photo =
            stone.photo.sizes[
            "medium"
            ];
        }
        return stone;
      })
    );
  }
}
