import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {Http, HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AppRoutingModule} from './app-routing.model';

import {TRANSLATION_PROVIDERS} from './translation/translation';
import {TranslationPipe} from './translation/translation.pipe';
import {CapitalizePipe} from './pipes/capitalize.pipe';

import {TranslationService} from './translation/translation.service';
import {HelperService} from './services/helper.service';

import {AboutUsComponent} from './pages/about-us/about-us.component';
import {HomeComponent} from './pages/home/home.component';
import {AppComponent} from './app.component';

export {AppComponent};

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		AboutUsComponent,
		TranslationPipe,
		CapitalizePipe
	],
	imports: [
		BrowserModule.withServerTransition({appId: 'rez-http'}),
		NgbModule.forRoot(),
		AppRoutingModule,
		FormsModule,
		HttpModule
	],
	exports: [AppComponent],
	providers: [
		HelperService,
		TranslationService,
		TRANSLATION_PROVIDERS
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
