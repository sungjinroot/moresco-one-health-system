import './Patient.css';
import { useState } from 'react';
import PatientInfo from '../MODALS/PatientInfo/PatientInfo.jsx';

function Patient(){

    const [showPatient,setShowPatient] = useState(false);


    return (
        <>
            <div className="patient-card" onClick={() => setShowPatient(true)}>
                <img src="https://i.pinimg.com/736x/3a/82/76/3a827625479cb747df71b409d6b987a4.jpg"/>
            
                <div className="patient-names">
                    <h2> Mine Galve </h2>
                    <h4> Electric Specialist </h4> 
                </div>


                   
            </div>

            <PatientInfo showPatient={showPatient} setShowPatient={setShowPatient}/>

        </>
        
    )
}

export default Patient;