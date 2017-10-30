import {Injectable} from '@angular/core';
import {TranslationService} from '../translation/translation.service';

@Injectable()
export class HelperService {

	constructor(private _translate: TranslationService) { }

	capitalize(value: string) {
		if (value) {
			return value.charAt(0).toUpperCase() + value.slice(1);
		}
		return value;
	}

	translateAndCapitalize(value: string) {
		const val = this._translate.instant(value);

		return this.capitalize(val);
	}

	translateAndSetTitle(value: string) {
		const val = this._translate.instant(value);

		return this.capitalize(val) + ' | Rezapartments';
	}

	errorsToHtml(err) {
		const errors = JSON.parse(err._body),
			length = Object.keys(errors).length;
		let html = '';

		if (errors.message) {
			return `<h3>${errors.message}</h3>`;
		} else if (length > 4) {
			return `<h3>${this.translateAndCapitalize('please fill all the required fields')}</h3>`;
		} else {
			for (const key in errors) {
				if (errors.hasOwnProperty(key)) {
					html += `<li>${errors[key][0]}</li>`;
				}
			}

			return `<h3>${this.translateAndCapitalize('some errors occurred')}:</h3><ul>${html}</ul>`;
		}
	}
}
