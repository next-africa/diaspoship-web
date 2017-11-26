import PropTypes from 'proptypes';

export default PropTypes.shape({
  from: PropTypes.string,
  to: PropTypes.string,
  availableKg: PropTypes.string,
  currencyUnit: PropTypes.string,
  pricePerKg: PropTypes.string,
  departureDate: PropTypes.string,
  arrivalDate: PropTypes.string,
  type: PropTypes.arrayOf(PropTypes.string)
});
