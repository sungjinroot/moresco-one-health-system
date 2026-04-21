import { useState } from "react";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialAction from "@mui/material/SpeedDialAction";


function Options() {
  const [open, setOpen] = useState(false);

  //This is for modal
  const [show,setShow] = useState(false);


  return (
    <>
      <div className="options-container">
      
        <SpeedDial ariaLabel="Simple SpeedDial" FabProps={{sx: {backgroundColor: "#0D2B77", color: "#fff", "&:hover": {backgroundColor: "0D2B77"}, width: '80px', height: '80px' }}} open={open} onOpen={() => setOpen(true)} onClose={() => setOpen(false)} style={{ position: "absolute", bottom: 75, right: 80, zIndex: 2000,}} icon={<span>+</span>}>
          
          <SpeedDialAction icon={<span>A</span>} slotProps={{tooltip: {title: "New Patient",},}} onClick={() => setShow(true)}/>
        
          <SpeedDialAction icon={<span>B</span>} slotProps={{tooltip: {title: "Statistics",},}} onClick={() => setShow(true)}/>

        
        </SpeedDial>
      </div>

      {/*<NewArtifact show={show} setShow={setShow}/>*/}

    </>
  );
}

export default Options;