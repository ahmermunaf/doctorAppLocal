import PatientData_Action from "./../actions/patientData_action.js";
import { AsyncStorage } from 'react-native'
import Reactotron from 'reactotron-react-native'
export default class CounterMiddleware {
    static asyncPatientData(data) {
        return (dispatch) => {
            var storageValue = []
            var emptyArr = JSON.stringify([])
            var userData = data
            AsyncStorage.getItem('list').then((value)=>{
            if(value === null || value === undefined){
                AsyncStorage.setItem('list',emptyArr)
            }
            })
            AsyncStorage.getItem('list').then((value)=>{
                storageValue = JSON.parse(value)
                storageValue.push(userData)
                storageValue = JSON.stringify(storageValue)
                AsyncStorage.setItem('list',storageValue)
            })
            dispatch(PatientData_Action.patientData(data))
        }
    } 
}