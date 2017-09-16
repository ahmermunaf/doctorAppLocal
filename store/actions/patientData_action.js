export default class PatientData_Action {
    static dataToStorage = 'dataToStorage'
    static patientData(value){
        return { 
            type : 'dataToStorage',
            data: value
        }
    }
}