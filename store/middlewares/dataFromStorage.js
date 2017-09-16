import Main_Action from "./../actions/main_action.js";
import { AsyncStorage } from 'react-native'
import Reactotron from 'reactotron-react-native'
export default class MainMiddleware {
    static asyncMain() {
        return (dispatch) => {
            var StorageValue = []
            AsyncStorage.getItem('list').then((value)=>{
                StorageValue = JSON.parse(value)
                dispatch(Main_Action.mainData(StorageValue))
            })
        }
    } 
    static remove(index){
        return(dispatch) => {
            var StorageValue = []
            AsyncStorage.getItem('list').then((value)=>{
                StorageValue = JSON.parse(value)
                StorageValue.splice(index,1)
                AsyncStorage.setItem('list',JSON.stringify(StorageValue))
                dispatch(Main_Action.mainData(StorageValue))
            })
        }
    }
}