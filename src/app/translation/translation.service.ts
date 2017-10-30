import {Injectable, Inject} from '@angular/core';
import {TRANSLATIONS} from './translation';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import {environment} from '../../environments/environment';

@Injectable()
export class TranslationService {

	private _langChanged = new Subject<any>();
	private _currentLang: any;
	private _placeholder = '%';
	private _supportedLangs = [
		{ name: 'Română', code: 'ro', country_code: 'ro' },
		{ name: 'English', code: 'en', country_code: 'gb' }
	];

	constructor(@Inject(TRANSLATIONS) private _translations: any) {	}

	get supportedLangs() {
		return this._supportedLangs;
	}

	getCurrentLang(): Observable<any> {
		return this._langChanged.asObservable();
	}

	setCurrentLang(newLang: string): void {
		this._supportedLangs.filter(lang => {
			if (lang.code === newLang) {
				this._currentLang = lang;
				localStorage.setItem('gst__lang', newLang);

				this._langChanged.next(lang);
			}
		});
		return this._currentLang;
	}

	get currentLangFromLocal() {
		return localStorage.getItem('gst__lang') || environment.DEFAULT_LANG;
	}

	instant(key: string, words?: string | string[]) {
		const translation: string = this.translate(key);

		if (!words) {
			return translation;
		}
		return this._replace(translation, words);
	}

	isCurrentLang(lang: string) {
		return lang === this._currentLang.code;
	}

	private _replace(word: string = '', words: string | string[] = '') {
		let translation: string = word;
		const values: string[] = [].concat(words);

		values.forEach((e, i) => {
			translation = translation.replace(this._placeholder.concat(<any>i), e);
		});

		return translation;
	}

	private translate(key: string): string {
		const translation = key;

		if (this._currentLang && this._translations[this._currentLang.code] && this._translations[this._currentLang.code][key]) {
			return this._translations[this._currentLang.code][key];
		}

		return translation;
	}
}
