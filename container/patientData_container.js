import React, { Component } from 'react';
import PatientData_Component from './../components/patientData_component.js'
import PatientData_Action from './../store/actions/patientData_action.js'
import CounterMiddleware from './../store/middlewares/dataToStorage.js'
import { connect } from 'react-redux';
function mapStateToProps(state) {
    return {
        date : state.DateObj
    };
}
  function mapDispatchToProps(dispatch) {
    return {
        patientData : function (value){
          return dispatch(CounterMiddleware.asyncPatientData(value));
        }
    };
}
class PatientData_Container extends Component {
  getData(value){
    this.props.patientData(value);
  }
  render() {
    return (
      <PatientData_Component newDate={this.props.date} dataSent={this.getData.bind(this)}/>
    );
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(PatientData_Container)