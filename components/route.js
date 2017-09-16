import React, { Component } from 'react';
import Main_Container from './../container/main_container.js';
import PatientData_Container from './../container/patientData_container.js';
import NameSearch_Container from './../container/nameSearch_container.js';
import CalenderSearch_Container from './../container/calenderSearch_container.js';
import {Router, Scene } from 'react-native-router-flux';
const Route =() =>{
    return(
        <Router>
            <Scene key="root">
                <Scene 
                key="main_container"
                component={Main_Container}
                hideNavBar={true} 
                initial={true}
                />
                <Scene 
                key="patientData"
                component={PatientData_Container}
                hideNavBar={true} 
                />
                <Scene 
                key="nameSearch"
                component={NameSearch_Container}
                hideNavBar={true} 
                />
                <Scene 
                key="calenderSearch"
                component={CalenderSearch_Container}
                hideNavBar={true} 
                />
            </Scene>
        </Router>
    )
}
export default Route