import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import * as moment from 'moment'
declare const $: any;

import { MainService } from '@services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

	public videos:any [] = [];
	public people:any [] = [];
	public documents:any [] = [];
	public activity:any [] = [];
	public chanells:any [] = [];

	public moment = moment;
    public isBrowser: boolean = false;
	
    constructor(
		private mainService: MainService,
		@Inject(PLATFORM_ID) private _platformId: Object
	) { 
		this.isBrowser = isPlatformBrowser(_platformId);
	}

    ngOnInit(): void {
		this.getPosts()
    }

	ngAfterViewInit(){
	}

	/**
	 * * GET POST *
	 * Todo: to getting all posts
	 */
	getPosts(){
		this.mainService.getPosts().subscribe((res:any)=>{
			const data = res.data;
			this.videos = data.videos;
			this.people = data.people;
			this.documents = data.documents;
			this.activity = data.activity;
			this.chanells = data.chanells;

			if(this.isBrowser){
				this.initMasonry([
					"#masonryVideos",
					"#masonryPeople",
					"#masonryDocs"
				])
			}
		})
	}

	/**
	 * * INIT MASONRY *
	 * Todo: to initialized masonry
	 * @param selectors: String[] => ['#selector1','#selector2']
	 */
	initMasonry(selectors:any[]){
		setTimeout(()=>{
			selectors.map(selector=>{
				const self = $(selector);
				self.masonry({
					itemSelector: ".grid",
					columnWidth: '.grid-sizer'
				});
			})
		}, 1000);
	}

}
