import React, { Component } from 'react';
import Main_Component from './../components/main_component.js'
import Main_Action from './../store/actions/main_action.js'
import MainMiddleware from './../store/middlewares/dataFromStorage.js'
import Reactotron from 'reactotron-react-native'
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
function mapStateToProps(state) {
    return {
        patientData : state.mainData
    };
}
  function mapDispatchToProps(dispatch) { 
        return {
          asyncMain: dispatch(MainMiddleware.asyncMain()),
          remove : function(value){
            dispatch(MainMiddleware.remove(value))
          }, 
        };
    };
class Main_Container extends Component {
  getIndex(value){
    this.props.remove(value)
  }
  render() {
    return (
      <Main_Component UserData={this.props.patientData} index={this.getIndex.bind(this)} />
    );
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Main_Container)