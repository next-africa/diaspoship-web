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

var InputStyle = styled.input`
  color: #bfbfbf;
  font-size: 18px;
  border: 0;
  border-bottom: 1px dashed #4a4a4a;
  width: 100%;
  padding: 5px;
  border-radius: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
`;
var SearFormWrapper = styled.div`
  background-color: white;
  margin: 0;
  padding: 0;
  border-radius: 10px;
  margin: 0 0 20px;
  height: 42px;
  display: block;
`;
const SearchButton = styled.button`
  background-color: #ffc800;
  color: #0f233a;
  font-size: 18px;
  font-family: 'Roboto-Medium';
  width: 100%;
  text-transform: uppercase;
  border: 2px solid #ffc800;
  border-radius: 0 10px 10px 0;
  cursor: pointer;
  height: 42px;
`;
class SearchForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SearFormWrapper>
        <Form horizontal>
          <FormGroup controlId="formHorizontalText">
            <Col componentClass={ControlLabel} sm={2}>
              <div>Je cherche un trajet de</div>
            </Col>
            <Col sm={3}>
              <InputStyle type="text" placeholder="Indiquez ville ou pays" />
            </Col>
            <Col componentClass={ControlLabel} sm={1}>
              à
            </Col>
            <Col sm={3}>
              <InputStyle type="text" placeholder="Indiquez ville ou pays" />
            </Col>
            <Col sm={3}>
              <SearchButton>C'EST PARTI!</SearchButton>
            </Col>
          </FormGroup>
        </Form>
      </SearFormWrapper>
    );
  }
}
export default SearchForm;
