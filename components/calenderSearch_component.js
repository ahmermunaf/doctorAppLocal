import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title , Footer, FooterTab , Content ,Item , Input,Text , Segment , Card, CardItem } from 'native-base';
import DatePicker from 'react-native-datepicker'
import { Actions } from 'react-native-router-flux';
export default class CalenderSearch_Component extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
      newDate : this.props.newDate.getFullYear()+'-'+(this.props.newDate.getMonth() + 1)+'-'+this.props.newDate.getDate(),
      searchItem : '',
      data : [],
      indexCheck : []
  };
    this.dataChange = this.dataChange.bind(this)
  }
    dataChange(value){
    this.props.data(value);
    this.setState({searchItem:value,data:this.props.result()})
  }
  render() {
    return (
      <Container>
        <Header searchBar rounded>
          <Item>
            <Button transparent onPress={()=>{
              this.props.data('')
              Actions.main_container()}}>
                <Icon style={{color : 'black'}} name="arrow-back" />
            </Button>
            <Input placeholder="Search By Calender" onFocus={()=>{this.refs.datepicker.onPressDate()}} value={this.state.searchItem}  />
            <Icon name="ios-search" />
          </Item>
          <Button transparent>
            <Text>Search By Calender</Text>
          </Button>
        </Header>
        <Content>
          <Card>              
          {
            this.state.data.map((value,ind)=>{
              if(this.state.data[0] !== 'No Match Found' && this.state.data[0] !== 'Please Search'){
              return(
                <Card key={ind}>
                  <CardItem>
                    <Left>
                      <Body>
                        <Text>Name : {value.name}</Text>
                        <Text note>Date : {value.date}</Text>
                      </Body>
                    </Left>
                  </CardItem>
                  <CardItem>
                    <Body>
                      <Text>Disease : {value.disease}</Text>
                      <Text>Medication : {value.medication}</Text>
                      <Text>Cost : {value.cost}</Text>
                    </Body>
                  </CardItem>
                </Card>
              )
              }else{
                return(
                  <Text note key={ind}>{value}</Text>
                )
              }
            })
          }
          </Card>
          <DatePicker
          style={{width: 0, height: 0}}
          showIcon={false}
          ref="datepicker"
          maxDate={this.state.newDate}
          onDateChange={(date) => {
            this.dataChange(date)
            }}/>
      </Content>
        <Footer>
          <FooterTab>
            <Body>
                <Segment>
                    <Button first onPress={()=>{Actions.nameSearch()}}><Text>By Name</Text></Button>
                    <Button last active onPress={()=>{Actions.calenderSearch()}}><Text>By Calender</Text></Button>
                </Segment>
            </Body>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}