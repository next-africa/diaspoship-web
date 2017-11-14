// React
import React from 'react';
import PropTypes from 'proptypes';
import { intlShape } from 'react-intl';
import Rater from 'react-rater';
import { withRouter } from 'react-router';
import 'react-rater/lib/react-rater.css';
import moment from 'moment';
import { connect } from 'react-redux';
// Material-uI
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import ArrowForwardIcon from 'material-ui-icons/ArrowForward';
import FlightTakeOff from 'material-ui-icons/FlightTakeoff';
import Grid from 'material-ui/Grid';
import List, { ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Button from 'material-ui/Button';

// App imports
import { getOffer } from '../actions/offers';
const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: 30
  },
  paper: {
    padding: 16,
    textAlign: 'left',
    color: theme.palette.text.secondary
  },
  right: {
    float: 'right'
  },
  left: {
    float: 'left'
  },
  button: {
    margin: theme.spacing.unit
  },
  grid: {
    [theme.breakpoints.down('sm')]: {
      maxWidth: '50%',
      flexBasis: '50%'
    }
  },
  noDisplayInMobile: {
    maxWidth: '30%',
    flexBasis: '30%',
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  displayInMobile: {
    display: 'none',
    [theme.breakpoints.down('sm')]: {
      display: 'inline-flex'
    }
  }
});
export class OfferComponent extends React.Component {
  componentWillMount() {
    let id = parseInt(this.props.match.params.offerID, 10);
    this.props.onGetOffer(id);
  }

  render() {
    const classes = this.props.classes;
    const formatMessage = this.context.intl.formatMessage;
    const translation = {
      details: formatMessage({ id: 'app.offer.detail.title' }),
      FBnbFriends: formatMessage({ id: 'app.offer.FB.numberOfFriends' }),
      btnContact: formatMessage({ id: 'app.offer.detail.button.contact' }),
      meetingPlace: formatMessage({ id: 'app.offer.detail.meetingPlace' })
    };

    if (this.props.selectedOffer != null) {
      this.offer = this.props.selectedOffer;
      return (
        <div className={classes.root}>
          <Grid container spacing={24} justify="space-between">
            <Grid item xs={4} className={classes.noDisplayInMobile}>
              <Paper className={classes.paper} elevation={4}>
                <Typography type="headline" component="h3">
                  {translation.details}
                </Typography>
                <Divider />
                <List>
                  <ListItem>
                    <span>
                      {translation.meetingPlace}: {this.offer.address}
                    </span>
                  </ListItem>
                </List>
                <Divider />
                <Typography type="headline">
                  <Button raised color="primary" className={classes.button}>
                    {translation.btnContact}
                  </Button>
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs>
              <Paper className={classes.paper} elevation={4}>
                <Grid container spacing={24} justify="space-between">
                  <Grid item xs={4} className={classes.grid}>
                    <Typography type="headline" component="h3">
                      <Rater total={5} rating={3} />
                    </Typography>
                    <Typography>0 {translation.FBnbFriends}</Typography>
                    <Typography>{this.offer.kilo}</Typography>
                  </Grid>
                  <Grid item xs={4} className={classes.grid}>
                    <Typography>
                      {moment(this.offer.date).format('MMMM Do YYYY')}
                    </Typography>
                  </Grid>
                  <Grid item xs={1} className={classes.grid}>
                    <Typography>
                      <FlightTakeOff />
                    </Typography>
                  </Grid>
                  <Grid item xs className={classes.grid}>
                    <Typography className={classes.left}>
                      <span> {this.offer.locationFrom} </span>
                    </Typography>
                    <Typography className={classes.left}>
                      <ArrowForwardIcon />
                    </Typography>
                    <Typography className={classes.left}>
                      <span>{this.offer.locationTo}</span>
                    </Typography>
                  </Grid>
                </Grid>
                <Grid
                  container
                  spacing={24}
                  justify="center"
                  className={classes.displayInMobile}
                >
                  <Grid item xs>
                    <Paper elevation={0} className={classes.right}>
                      <Button raised color="primary" className={classes.button}>
                        {translation.btnContact}
                      </Button>
                    </Paper>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </div>
      );
    } else {
      return <span>Offer not Found</span>;
    }
  }
}

OfferComponent.contextTypes = {
  intl: intlShape.isRequired
};
OfferComponent.propTypes = {
  classes: PropTypes.object.isRequired,
  offer: PropTypes.shape({
    locationFrom: PropTypes.string.isRequired,
    locationTo: PropTypes.string.isRequired,
    kilo: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired
  })
};

const mapStateToProps = ({ offers: { selectedOffer } }) => ({
  selectedOffer
});
const mapDispatchToProps = dispatch => {
  return {
    onGetOffer: id => dispatch(getOffer(id))
  };
};

const Offer = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(
    withStyles(styles)(OfferComponent)
  )
);
export default Offer;
