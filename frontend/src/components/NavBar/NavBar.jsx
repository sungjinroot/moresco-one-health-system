import './NavBar.css';

function NavBar() {
   
    return (
        <nav className="nav-container">
            <div className="nav-left">
                <img src="src/assets/logo.png" className="nav-logo-one"/>
                <div className="nav-system-name">
                    <h1> Moresco-One</h1>
                    <p> Employee Health Tracking System </p>
                </div>
            </div>

            <div className="nav-center">
                <div className="nav-center-box">
                    Patients
                </div>
            </div>

            <div className="nav-end">
                <div className="nav-profile">
                    <h3> Andrei Valdez </h3>
                    <h5> CEO of Nursing </h5>
                </div>

                <img src="src/assets/profile.png"/>
            </div>
        </nav>
    );
}

export default NavBar;