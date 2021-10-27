import { Component, OnInit } from '@angular/core';
import { MainService } from '@services';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	public data: any[] = [];

	constructor(private mainService: MainService){}

	ngOnInit(){
	}
}
