import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MainService } from '@services';
import { HeaderModule, FooterModule } from '@components';
import { HomeModule } from '@pages';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule.withServerTransition({ appId: 'serverApp' }),
		AppRoutingModule,
		TransferHttpCacheModule,
		HttpClientModule,
		HeaderModule,
		FooterModule,
		HomeModule
	],
	providers: [MainService],
	bootstrap: [AppComponent]
})
export class AppModule { }
