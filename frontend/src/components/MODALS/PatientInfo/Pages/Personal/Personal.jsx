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

                    <div className="patient-demographic-forms">
                        <div className="patient-birthdate-input">
                            <div className="patient-birthdate">
                                <label> Birth Date </label>
                                <p> birthday here </p>
                            </div>

                            <div className="patient-age">
                                <label> Age </label>
                                <p> age here </p>
                            </div>
                        </div>

                        <div className="patient-sex-input">
                            <label> Sex </label>
                            <select> 
                                <option> Male </option>
                                <option> Female </option>
                            </select>
                        </div>
                    </div>

                    <div className="patient-measurement-forms">
                        <div className="patient-measurement-input">
                            <label> Height </label>
                        </div>

                        <div className="patient-measurement-input">
                            <label> Weight </label>
                        </div>

                        <div className="patient-measurement-input">
                            <label> BMI </label>
                        </div>
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