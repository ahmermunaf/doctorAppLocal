export default class Main_Action {
    static dataFromStorage = 'dataFromStorage'
    static mainData(value){
        return { 
            type : 'dataFromStorage',
            data: value
        }
    }
}