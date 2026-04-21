import Modal from 'react-bootstrap/Modal';
import AccordionRecord from './AccordionRecord/AccordionRecord.jsx';
import { Tabs, Tab } from "@mui/material";
import './PatientInfoHeight.css'
import './PatientInfoWidth.css';
import './PatientInfo.css'

function PatientInfo(props){

    return (
        <Modal show={props.showPatient} onHide={() => props.setShowPatient(false)} aria-labelledby="example-custom-modal-styling-title" contentClassName="patientInfoHeight" dialogClassName="patientInfoWidth">
            <Modal.Header closeButton style={{ backgroundColor: '#00006F' }} className="d-flex align-items-center">
                <img src="src/assets/logo.png" className="header-logo"/>            
            </Modal.Header>
            
            <Modal.Body> 
               <div className="patient-info-container">
                    <div className="patient-info-details-left">
                        <div className="patient-profile">
                            <img src="/src/assets/profile.png"/>
                            <div className="patient-profile-names">
                                <h2> John Moresco </h2>
                                <h3> Systems Engineer </h3>
                            </div>
                        </div>

                        <div className="profile-tabs-options">
                            MUI TABS Go here
                        </div>

                    </div>

                    <div className="patient-info-details-right">
                        <h1> Health Records </h1>
                        <div className="patient-info-details-navigation">
                            
                            <button> New Record </button>
                            

                            <div className="patient-info-details-navigation-filter">
                                <select>
                                    <option> Year </option>
                                </select>

                                <select>
                                    <option> Month </option>
                                </select>
                            </div>
                        </div>

                        <div className="patient-records-accordion-container">
                            <AccordionRecord/>
                            <AccordionRecord/>
                            <AccordionRecord/>
                            <AccordionRecord/>
                            <AccordionRecord/>
                            <AccordionRecord/>
                            <AccordionRecord/>
                            <AccordionRecord/>
                            <AccordionRecord/>
                            <AccordionRecord/>
                            <AccordionRecord/>
                                                        <AccordionRecord/>
                            <AccordionRecord/>
                            <AccordionRecord/>
                            <AccordionRecord/>
                            <AccordionRecord/>
                            <AccordionRecord/>
                            <AccordionRecord/>

                           
                            


                        </div>
                    </div>
               </div>


            </Modal.Body>
        </Modal>
    )
}

export default PatientInfo;