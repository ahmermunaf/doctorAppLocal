import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title , Footer, FooterTab , Content , Form , Item , Label , Input } from 'native-base';
import { Actions } from 'react-native-router-flux';
import DatePicker from 'react-native-datepicker'
export default class PatientData_Component extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date : '',
      name : '',
      disease : '',
      medication : '',
      cost : '',
      newDate : this.props.newDate.getFullYear()+'-'+(this.props.newDate.getMonth() + 1)+'-'+this.props.newDate.getDate()
  };
  }
  settingData(){
    this.props.dataSent(
      {
      date : this.state.date,
      name : this.state.name,
      disease : this.state.disease,
      medication : this.state.medication,
      cost : this.state.cost,
      }
    );
    this.setState({
      date : '',
      name : '',
      disease : '',
      medication : '',
      cost : '',
    })
  }
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={()=>{Actions.main_container()}}>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>Add Data</Title>
          </Body>
        </Header>
        <Content>
            <Form>
            <Item floatingLabel>
              <Label>Appointment Date</Label>
              <Input onFocus={()=>{this.refs.datepicker.onPressDate()}} value={this.state.date}  />
              </Item>
              <DatePicker
          style={{width: 0, height: 0}}
          showIcon={false}
          ref="datepicker"
          onDateChange={(date) => {this.setState({
            date: date
            })}}
          />
            <Item floatingLabel>
              <Label>Patient's Name</Label>
              <Input value={this.state.name} onChangeText={(name)=>{this.setState({name : name})}} />
            </Item>
            <Item floatingLabel>
              <Label>Patient's Disease</Label>
              <Input value={this.state.disease} onChangeText={(disease)=>{this.setState({disease : disease})}}/>
            </Item>
            <Item floatingLabel>
              <Label>Medication Provided</Label>
              <Input value={this.state.medication} onChangeText={(medication)=>{this.setState({medication : medication})}} />
            </Item>
            <Item floatingLabel last>
              <Label>Fees Charged</Label>
              <Input keyboardType="numeric" value={this.state.cost} onChangeText={(cost)=>{this.setState({cost : cost})}}/>
            </Item>
          </Form>
        </Content>
        <Footer>
          <FooterTab>
            <Button onPress={
              this.settingData.bind(this)
              }>
              <Icon name="add" />
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}