import React, { useState } from 'react';


import Modal from 'react-bootstrap/Modal';
import ModalBody from 'react-bootstrap/ModalBody';
import Button from 'react-bootstrap/Button';


import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepButton from '@mui/material/StepButton';


import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';


import './AddPatient.css';


function AddPatient({ show, setShow }) {
  const [step, setStep] = useState(0); // for the stepper and buttons

  const [value, setValue] = React.useState('1'); // for tabs

  const handleChange = (event, newValue) => {
  setValue(newValue);
  };

  const steps = [
    "ADD PATIENT INFO",
    "ADD ADDRESS",
    "PICTURE",
  ];

  const handleClose = () => {
    setStep(0);
    setShow(false);
  };

 const nextStep = () => setStep(step + 1);
 const prevStep = () => setStep(step - 1);

  return (
    <Modal show={show} onHide={handleClose} dialogClassName="addpatient-width" contentClassName="addpatient-height"centered >
      <Modal.Header closeButton closeVariant="white" style={{height: "60px", backgroundColor: "#00006F",color: "#fff",position: "relative",display: "flex",justifyContent: "center",}}>
        <Modal.Title style={{position: "absolute",left: "50%",transform: "translateX(-50%)",}}>
          Create Patient
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        {step === 0 && (
          <form style={{display: "flex",flexDirection: "column",gap: "20px",padding: "20px" }}>
            <div className="row">
              <div className="field">
                <label>First Name</label>
                <input type="text" className="input" />
              </div>

              <div className="field">
                <label>Middle Name</label>
                <input type="text" className="input" />
              </div>

              <div className="field">
                <label>Last Name</label>
                <input type="text" className="input" />
              </div>
            </div>

            <div className="row">
              <div className="field">
                <label>Birth Date</label>
                <input type="date" className="input" />
              </div>

              <div className="field">
                <label>Position</label>
                <input type="text" className="input" />
              </div>

              <div className="field">
                <label>Status</label>
                <input type="text" className="input" />
              </div>
            </div>

            <div className="row">
              <div className="field">
                <label>Height</label>
                <input type="text" className="input" />
              </div>

              <div className="field">
                <label>Weight</label>
                <input type="text" className="input" />
              </div>

              <div className="field">
                <label>Sex</label>
                <div className="radio-group">
                  <label>
                    <input type="radio" name="sex" /> Male
                  </label>
                  <label>
                    <input type="radio" name="sex" /> Female
                  </label>
                </div>
              </div>
              
            </div>

             <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '50px' }} >
              <Button variant="primary" onClick={nextStep}>
                    Next
               </Button>
               </div>
           

          </form>
        )}

         {step === 1 && (
          <div >
           <TabContext value={value}>
    
           <div style={{ borderBottom: '1px solid #e0e0e0', display: 'flex', justifyContent: 'center' }}>
             <TabList onChange={handleChange}>
             <Tab label="Permanent Address" value="1" />
             <Tab label="Present Address" value="2" />
            </TabList>
           </div>

         <TabPanel value="1">
          <form style={{ display: "flex", flexDirection: "column",  padding: "5px", gap: "5px" }}> 
             <label> Address Line 1</label>
              <input type="text" className="input" />
              <label> Address Line 2</label>
              <input type="text" className="input" />
            
              <div className='row'>
                <div className="field">
                  <label>City</label>
                  <input type="text" className="input" />
                 </div>

                <div className="field">
                  <label>Barangay</label>
                  <input type="text" className="input" />
                </div>

                 <div className="field">
                  <label>Province</label>
                  <input type="text" className="input" />
                </div>

              </div>
              
             
            
          </form>

         </TabPanel>
         <TabPanel value="2">
           <form style={{ display: "flex", flexDirection: "column",  padding: "5px", gap: "5px" }}> 
             <label> Address Line 1</label>
              <input type="text" className="input" />
              <label> Address Line 2</label>
              <input type="text" className="input" />
            
              <div className='row'>
                <div className="field">
                  <label>City</label>
                  <input type="text" className="input" />
                 </div>

                <div className="field">
                  <label>Barangay</label>
                  <input type="text" className="input" />
                </div>

                 <div className="field">
                  <label>Province</label>
                  <input type="text" className="input" />
                </div>

              </div>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }} >
                <Button variant="secondary" onClick={prevStep}>Back</Button>
                <Button variant="primary" onClick={nextStep}>Next</Button>
              </div>
            
          </form>
         </TabPanel>
            

          </TabContext>
          </div>
  
        )}

        {step === 2 && (
          <div>
            <h1>Picture Step</h1>
          </div>
        )}
      </Modal.Body>

      <Modal.Footer>
        <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
          <Stepper activeStep={step} alternativeLabel nonLinear>
            {steps.map((label, index) => (
            <Step key={label} disabled={false}>
           <StepButton onClick={() => setStep(index)}>
            {label}
            </StepButton>
            </Step>
            ))}
          </Stepper>
        </div>
      </Modal.Footer>
    </Modal>
  );
}

export default AddPatient;

