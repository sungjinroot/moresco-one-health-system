import './Personal.css';

function Personal(){

    return (
        <>

            <div className="personal-container">  

                <div className="patient-names-fields">
                    <div className="patient-names-forms">
                        <div className="patient-names-input">
                            <label> First Name </label>

                            <input/>
                        </div>

                        <div className="patient-names-input">
                            <label> Middle Name </label>
                            <input/>
                        </div>

                        <div className="patient-names-input">
                            <label> Family Name </label>
                            <input/>
                        </div>
                    </div>  
                </div>

                <div className="patient-demographic-fields">
                
                    <div className="patient-age-fields">
                        age
                    </div>


                </div>

            
            </div>

            <div className="address-container">
                address
            </div>

        

        </>
    )
}

export default Personal;