import { InjectionToken } from '@angular/core';
import { LANG_EN_NAME, LANG_EN_TRANS } from './lang-en';
import { LANG_RO_NAME, LANG_RO_TRANS } from './lang-ro';

export const TRANSLATIONS = new InjectionToken('translations');

export const dictionary = {
	[LANG_EN_NAME]: LANG_EN_TRANS,
	[LANG_RO_NAME]: LANG_RO_TRANS,
};

export const TRANSLATION_PROVIDERS = [
	{ provide: TRANSLATIONS, useValue: dictionary }
];
