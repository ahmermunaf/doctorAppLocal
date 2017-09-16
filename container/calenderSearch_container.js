import React, { Component } from 'react';
import CalenderSearch_Component from './../components/calenderSearch_component.js'
import { connect } from 'react-redux';
import MainMiddleware from './../store/middlewares/dataFromStorage.js'
import Reactotron from 'reactotron-react-native'
function mapStateToProps(state) {
    return {
        patientData : state.mainData,
        date : state.DateObj
    };
}
function mapDispatchToProps(dispatch) { 
        return {
          remove : function(value){
          dispatch(MainMiddleware.remove(value))
          }, 
        };
    };
    var indexNo = ''
    var searchItem = ''
    var searchArr = ['Please Search']
    var searchArrIndex = []
class CalenderSearch_Container extends Component {
  constructor(props){
    super(props)
    this.state = {
      patientData : this.props.patientData
    }
  }
  nameSearchData(value){
    searchItem = value
  }
  result(){
    searchArr = []
    for(var i = 0;i<this.state.patientData.length;i++){
      if(searchItem === this.state.patientData[i].date){
        searchArr.push(this.state.patientData[i])
      }
    }
    return searchArr
  }
  render() {
    return (
      <CalenderSearch_Component newDate={this.props.date} data={this.nameSearchData.bind(this)} result={this.result.bind(this)} />
    );
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(CalenderSearch_Container)