import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MainService {

	constructor(private http: HttpClient) { }

	getPosts(){
		return this.http.get("https://app.villume.com/check-health");
	}
}
