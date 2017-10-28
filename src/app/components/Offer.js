// React
import React from 'react';
import PropTypes from 'proptypes';
import { intlShape } from 'react-intl';
import Rater from 'react-rater';
import 'react-rater/lib/react-rater.css';
import moment from 'moment';
// Material-uI
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import KeyboardArrowRightIcon from 'material-ui-icons/KeyboardArrowRight';
import FlightTakeOff from 'material-ui-icons/FlightTakeoff';
import Grid from 'material-ui/Grid';
import List, { ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Button from 'material-ui/Button';

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
  left: {
    float: 'left'
  }
});
export const DepartureDate = ({ date }) => {
  return <span>{moment(date).format('MMMM Do YYYY')}</span>;
};
const AvailableKilo = ({ kilo }) => <span> {kilo}</span>;
const MeetingPlace = ({ address, formatMessage }) => {
  const meetingPlace = formatMessage({ id: 'app.offer.detail.meetingPlace' });
  return (
    <span>
      {' '}
      {meetingPlace}: {address}
    </span>
  );
};

class Offer extends React.Component {
  render() {
    const classes = this.props.classes;
    const formatMessage = this.context.intl.formatMessage;
    const translation = {
      details: formatMessage({ id: 'app.offer.detail.title' }),
      FBnbFriends: formatMessage({ id: 'app.offer.FB.numberOfFriends' }),
      btnContact: formatMessage({ id: 'app.offer.detail.button.contact' })
    };
    return (
      <div className={classes.root}>
        <Grid container spacing={24} justify="center">
          <Grid item xs={4} className={classes.demo}>
            <Paper className={classes.paper} elevation={4}>
              <Typography type="headline" component="h3">
                {translation.details}
              </Typography>
              <Divider />
              <List>
                <ListItem>
                  <MeetingPlace
                    formatMessage={formatMessage}
                    address={this.props.offer.address}
                  />
                </ListItem>
                <ListItem />
              </List>
              <Divider />
              <Typography type="headline" component="h3">
                <Button>{translation.btnContact}</Button>
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs>
            <Paper className={classes.paper} elevation={4}>
              <Grid container spacing={24} justify="space-between">
                <Paper className={classes.paper} elevation={0}>
                  <Typography type="headline" component="h3">
                    <Rater total={5} rating={3} />
                  </Typography>
                  <Typography>0 {translation.FBnbFriends}</Typography>
                  <Typography className={classes.left}>
                    <AvailableKilo kilo={this.props.offer.kilo} />
                  </Typography>
                </Paper>
                <Grid item xs={3} className={classes.paper}>
                  <Typography className={classes.left}>
                    <DepartureDate date={this.props.offer.date} />
                  </Typography>
                </Grid>
                <Grid item xs={2} className={classes.demo}>
                  <Typography className={classes.left}>
                    <FlightTakeOff />
                  </Typography>
                </Grid>
                <Grid item xs={3} className={classes.demo}>
                  <Typography className={classes.left}>
                    <span> {this.props.offer.locationFrom} </span>
                  </Typography>
                  <Typography className={classes.left}>
                    <KeyboardArrowRightIcon />
                  </Typography>
                  <Typography className={classes.left}>
                    <span>{this.props.offer.locationTo}</span>
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

Offer.contextTypes = {
  intl: intlShape.isRequired
};
Offer.propTypes = {
  classes: PropTypes.object.isRequired,
  offer: PropTypes.shape({
    locationFrom: PropTypes.string.isRequired,
    locationTo: PropTypes.string.isRequired,
    kilo: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired
  })
};

export default withStyles(styles)(Offer);
