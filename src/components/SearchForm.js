import React from 'react';
import {
  Form,
  FormGroup,
  InputGroup,
  FormControl,
  Button,
  Grid,
  Row,
  Col,
  ControlLabel,
  Well
} from 'react-bootstrap';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container text-center">
        <Grid>
          <Form horizontal>
            <FormGroup controlId="formHorizontalEmail">
              <Col componentClass={ControlLabel} sm={3}>
                Je cherche un trajet de
              </Col>
              <Col sm={3}>
                <FormControl
                  type="email"
                  placeholder="Indiquez ville ou pays "
                />
              </Col>
              <Col componentClass={ControlLabel} sm={1}>
                à
              </Col>
              <Col sm={3}>
                <FormControl
                  type="email"
                  placeholder="Indiquez ville ou pays"
                />
              </Col>
              <Col sm={2}>
                <Button>C'EST PARTI!</Button>
              </Col>
            </FormGroup>
          </Form>
        </Grid>
      </div>
    );
  }
}
export default SearchForm;
