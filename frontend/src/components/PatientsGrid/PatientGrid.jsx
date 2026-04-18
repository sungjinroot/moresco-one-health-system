import Patient from '../Patient/Patient.jsx';
import './PatientGrid.css';

function PatientGrid(){

    return (
        <div className="main-content">
            
            <div className="grid-options">
                <input type="text" placeholder="Search Patient..."/>
                <select>
                    <option>
                        Sort
                    </option>
                </select>
            </div>

            <div className="patient-grid-container">
                <Patient/>
                <Patient/>
                <Patient/>
                <Patient/>
                <Patient/>
                <Patient/>
                <Patient/>
                <Patient/>
                <Patient/>
                <Patient/>


                
            </div>
        </div>
    )
}

export default PatientGrid;