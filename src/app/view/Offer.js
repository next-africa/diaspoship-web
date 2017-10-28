import React from 'react';
import Offer from '../components/Offer';

//Just for test it will get from Offers.
const offer = {
  locationFrom: 'Quebec',
  locationTo: 'Montreal',
  kilo: '5 kg',
  address: '2325 rue de la vie tudiante',
  date: '20171128'
};
const OfferView = () => <Offer offer={offer} />;
export default OfferView;
