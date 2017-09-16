import React, { Component } from 'react';
import View from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title , Footer, FooterTab , Content ,Text ,List,ListItem,Card,CardItem } from 'native-base';
import { Actions } from 'react-native-router-flux';
import Reactotron from 'reactotron-react-native'
export default class Main_Component extends Component {
  render() {
    let data = Array.isArray(this.props.UserData) ? this.props.UserData : []
    return (
      <Container>
        <Header>
          <Body>
            <Title>Patient List</Title>
          </Body>
          <Right>
            <Button transparent onPress={()=>{Actions.nameSearch()}}>
              <Icon name='ios-search' />
            </Button>
          </Right>
        </Header>
        <Content>
          <Card>              
          {
            data.map((value,ind)=>{  
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
                  <CardItem>
                    <Left>
                      <Button transparent onPress={this.props.index}>
                        <Icon style={{color : '#ff1a1a'}} name="trash" />
                      </Button>
                    </Left>
                  </CardItem>
                </Card>
            )
            })
          }
          </Card>
        </Content>
        <Footer>
          <FooterTab>
            <Button onPress={()=>{Actions.patientData()}}>
              <Icon name="add" />
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}