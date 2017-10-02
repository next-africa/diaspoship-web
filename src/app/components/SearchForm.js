// React
import React from 'react';
import { intlShape } from 'react-intl';

//Material-ui
import Paper from 'material-ui/Paper';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import Grid from 'material-ui/Grid';

//Styled-components
import styled from 'styled-components';

const styles = theme => ({
  root: {
    flexGrow: 0,
    marginTop: 0
  },
  paper: {
    marginTop: 0,
    padding: 4,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    borderRadius: 10,
    boxShadow:
      '0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px -2px rgba(0, 0, 0, 0.12)'
  },
  TextField: {
    marginTop: 0
  }
});

let SearFormWrapper = styled.div`
  background-color: white;
  margin: 0;
  padding: 0;
  border-radius: 10px;
  margin: 0 0 0px;
  height: 64px;
  display: block;
`;
let SearchButton = styled.button`
  background-color: #4051b4;
  color: #0f233a;
  font-size: 18px;
  font-family: 'Roboto-Medium';
  width: 100%;
  text-transform: uppercase;
  border: 2px solid #4051b4;
  border-radius: 0 10px 10px 0;
  cursor: pointer;
  height: 54px;
`;

class SearchForm extends React.Component {
  render() {
    const classes = this.props.classes;

    return (
      <div className={classes.root}>
        <SearFormWrapper>
          <form className={classes.container} noValidate autoComplete="off">
            <Grid container spacing={0}>
              <Grid item xs={5}>
                <Paper className={classes.paper}>
                  <TextField
                    id="full-width"
                    label={this.context.intl.formatMessage({
                      id: 'components.search-form.from.label'
                    })}
                    InputProps={{
                      placeholder: this.context.intl.formatMessage({
                        id: 'components.search-form.from.placeholder'
                      })
                    }}
                    fullWidth
                    className={classes.TextField}
                    margin="normal"
                  />
                </Paper>
              </Grid>
              <Grid item xs={5}>
                <Paper className={classes.paper}>
                  <TextField
                    id="full-width"
                    label={this.context.intl.formatMessage({
                      id: 'components.search-form.to.label'
                    })}
                    InputProps={{
                      placeholder: this.context.intl.formatMessage({
                        id: 'components.search-form.to.placeholder'
                      })
                    }}
                    fullWidth
                    className={classes.TextField}
                    margin="normal"
                  />
                </Paper>
              </Grid>
              <Grid item xs={2}>
                <Paper className={classes.paper}>
                  <SearchButton>
                    {this.context.intl.formatMessage({
                      id: 'components.search-form.buttons.submit'
                    })}
                  </SearchButton>
                </Paper>
              </Grid>
            </Grid>
          </form>
        </SearFormWrapper>
      </div>
    );
  }
}

SearchForm.contextTypes = {
  intl: intlShape.isRequired
};

export default withStyles(styles)(SearchForm);
