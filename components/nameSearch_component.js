import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title , Footer, FooterTab , Content , Item , Input ,Text , Segment , Card , CardItem } from 'native-base';
import { Actions } from 'react-native-router-flux';
import Reactotron from 'reactotron-react-native'
export default class NameSearch_Component extends Component {
  constructor(){
    super()
    this.state = {
      dataSearch : '',
      data : [],
      indexCheck : []
    }
    this.dataChange = this.dataChange.bind(this)
  }
  dataChange(value){
    this.props.data(value);
     this.setState({data : this.props.result()})
  }
  render() {
    return (
      <Container>
        <Header searchBar rounded>
          <Item>
            <Button transparent onPress={()=>{
              this.props.data('')
              Actions.main_container()
              }}>
              <Icon style={{color : 'black'}} name="arrow-back" />
            </Button>
            <Input placeholder="Search By Name" keyboardType="web-search" onChangeText={(searchData)=>{
              this.dataChange(searchData)
              }} />
            <Icon name="ios-search" />
          </Item>
          <Button transparent>
            <Text>Search By Name</Text>
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
        </Content>
        <Footer>
          <FooterTab>
            <Body>
              <Segment transparent>
                <Button first active onPress={()=>{Actions.nameSearch()}}><Text>By Name</Text></Button>
                <Button last onPress={()=>{Actions.calenderSearch()}}><Text>By Calender</Text></Button>
              </Segment>
            </Body>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}