import PatientData_Action from '../actions/patientData_action.js'
function data(state = {}, action) {
  switch (action.type) {
  case PatientData_Action.dataToStorage:
    return Object.assign({}, action.data);
  default:
    return state
  }
}

export default data;