import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import Cookies from 'universal-cookie';
import { selectLanguage, setLanguage } from '../translation';

const mockStore = configureMockStore([thunk]);

describe('translation actions', () => {
  let store;

  beforeEach(() => {
    store = mockStore();
  });

  describe('select language', () => {
    let navigatorLocale;
    let cookies;

    beforeEach(() => {
      cookies = new Cookies();
      cookies.remove('locale');
      navigatorLocale = window.navigator.language.split('-')[0];
    });

    describe('Given called without argument', () => {
      describe('Given a locale is not available in cookies', () => {
        beforeEach(() => {
          cookies.remove('locale');
        });

        it('should set the language from the navigator', () => {
          store.dispatch(selectLanguage());

          expect(store.getActions()).toEqual([setLanguage(navigatorLocale)]);
        });

        it('should update the locale cookie with the language from the navigator', () => {
          store.dispatch(selectLanguage());
          expect(cookies.get('locale')).toEqual(navigatorLocale);
        });
      });

      describe('Given a locale is available in the cookie', () => {
        const localeInCookies = 'fr';

        beforeEach(() => {
          cookies.set('locale', localeInCookies);
        });

        it('should set the language from the cookie', () => {
          store.dispatch(selectLanguage());

          expect(store.getActions()).toEqual([setLanguage(localeInCookies)]);
        });
      });
    });

    describe('Given called with a locale', () => {
      let locale = 'fr';

      beforeEach(() => {
        cookies.set('locale', 'en');
      });

      it('should set the provided language', () => {
        store.dispatch(selectLanguage(locale));

        expect(store.getActions()).toEqual([setLanguage(locale)]);
      });

      it('should update the locale cookie with the provided language', () => {
        store.dispatch(selectLanguage(locale));
        expect(cookies.get('locale')).toEqual(locale);
      });

      describe('Given the given locale is not supported', () => {});
    });
  });
});
