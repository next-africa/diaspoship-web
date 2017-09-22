import React from 'react';
import styled from 'styled-components';
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
import Styles from './Styles';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
  }

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
