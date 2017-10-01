import translation from '../translation';
import { AVAILABLE_LANGUAGES, DEFAULT_LANGUAGE } from '../../constants';
import { selectLanguage } from '../../actions/translation';

describe('translation reducer', () => {
  beforeAll(() => {
    global.requestAnimationFrame = function(callback) {
      setTimeout(callback, 0);
    };
  });

  it('should return the initial state', () => {
    expect(translation(undefined, {})).toEqual({
      selectedLanguage: DEFAULT_LANGUAGE,
      selectedTranslations: AVAILABLE_LANGUAGES[DEFAULT_LANGUAGE]
    });
  });

  it('should handle select language when given a valid language', () => {
    expect(translation(undefined, selectLanguage('fr'))).toEqual({
      selectedLanguage: 'fr',
      selectedTranslations: AVAILABLE_LANGUAGES['fr']
    });
  });

  it('should not update selected language when given unavailable language', () => {
    expect(
      translation(
        {
          selectedLanguage: 'fr',
          selectedTranslations: AVAILABLE_LANGUAGES['fr']
        },
        selectLanguage('ar')
      )
    ).toEqual({
      selectedLanguage: 'fr',
      selectedTranslations: AVAILABLE_LANGUAGES['fr']
    });
  });
});
