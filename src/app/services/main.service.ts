import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments';

@Injectable({
  providedIn: 'root'
})
export class MainService {

	constructor(private http: HttpClient) { }

	getPosts(){
		return this.http.get(environment.baseUrl + "/check-health");
	}
}
