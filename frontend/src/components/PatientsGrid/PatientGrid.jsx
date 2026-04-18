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
                <div className="test-card">
                    test
                </div>

                <div className="test-card">
                    test
                </div>

                <div className="test-card">
                    test
                </div>

                <div className="test-card">
                    test
                </div>

                <div className="test-card">
                    test
                </div>

                <div className="test-card">
                    test
                </div>

                <div className="test-card">
                    test
                </div>

                <div className="test-card">
                    test
                </div>

                <div className="test-card">
                    test
                </div>

                <div className="test-card">
                    test
                </div>
            </div>
        </div>
    )
}

export default PatientGrid;