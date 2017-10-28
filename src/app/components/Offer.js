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
import ArrowForwardIcon from 'material-ui-icons/ArrowForward';
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
        <Grid container spacing={24} justify="space-between">
          <Grid item xs={4} className={classes.noDisplayInMobile}>
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
                  <Typography className={classes.left}>
                    <AvailableKilo kilo={this.props.offer.kilo} />
                  </Typography>
                </Grid>
                <Grid item xs={4} className={classes.grid}>
                  <Typography className={classes.left}>
                    <DepartureDate date={this.props.offer.date} />
                  </Typography>
                </Grid>
                <Grid item xs={1} className={classes.grid}>
                  <Typography className={classes.left}>
                    <FlightTakeOff />
                  </Typography>
                </Grid>
                <Grid item xs className={classes.grid}>
                  <Typography className={classes.left}>
                    <span> {this.props.offer.locationFrom} </span>
                  </Typography>
                  <Typography className={classes.left}>
                    <ArrowForwardIcon />
                  </Typography>
                  <Typography className={classes.left}>
                    <span>{this.props.offer.locationTo}</span>
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
