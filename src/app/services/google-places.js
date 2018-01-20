import loadExternalScript from '../utils/load-external-script';

import { GOOGLE_PLACES_SDK_LINK } from '../../config/environment';

const loadGooglePlacesLibrary = locale => {
  if (window.google && window.google.maps && window.google.maps.places)
    return Promise.resolve();

  return loadExternalScript(GOOGLE_PLACES_SDK_LINK(locale));
};

const initializeAutocompleteField = (field, onFieldUpdated) => {
  let autocomplete = new window.google.maps.places.Autocomplete(field, {
    types: ['(cities)']
  });

  window.google.maps.event.addListener(autocomplete, 'place_changed', () => {
    let place = autocomplete.getPlace();

    onFieldUpdated({
      name: place.name,
      location: {
        latitude: place.geometry.location.lat(),
        longitude: place.geometry.location.lng()
      }
    });
  });
};

export default {
  initializeAutocompleteField,
  loadGooglePlacesLibrary
};
