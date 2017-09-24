import React from 'react';
import { Form, FormGroup, Col, ControlLabel } from 'react-bootstrap';
import Styles from './Styles';

class SearchForm extends React.Component {
  render() {
    return (
      <Styles.SearFormWrapper>
        <Form horizontal>
          <FormGroup controlId="formHorizontalText">
            <Col componentClass={ControlLabel} sm={2}>
              <div>Je cherche un trajet de</div>
            </Col>
            <Col sm={3}>
              <Styles.InputStyle
                type="text"
                placeholder="Indiquez ville ou pays"
              />
            </Col>
            <Col componentClass={ControlLabel} sm={1}>
              à
            </Col>
            <Col sm={3}>
              <Styles.InputStyle
                type="text"
                placeholder="Indiquez ville ou pays"
              />
            </Col>
            <Col sm={3}>
              <Styles.SearchButton>C'EST PARTI!</Styles.SearchButton>
            </Col>
          </FormGroup>
        </Form>
      </Styles.SearFormWrapper>
    );
  }
}
export default SearchForm;
