import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ImageCarousel from './ImageCarousel/ImageCarousel.jsx';
import './AccordionRecord.css';
import { Box } from '@mui/material';

function AccordionRecord(){

    return (
        <Accordion sx={{ backgroundColor: '#00006F', color: 'white', '&:before': { backgroundColor: 'rgba(255,255,255,0.3)' } }}>
            <AccordionSummary>
                
                <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
                    <b> 1/1/2025 </b>

                    <b> Patient contracted stage 5 Ligma </b>

                    <div className="accordion-icons">
                        <img src="/src/assets/pencil.png"/>
                        <img src="/src/assets/delete.png"/>
                    </div>
                </Box>
                
                
            </AccordionSummary>

            <AccordionDetails>
                <div className="record-headers">
                    <div className="record-left">
                        <ImageCarousel/>
                    </div>

                    <div className="record-right">
                        <div className="record-complains-form">

                            <div className="record-complains-input">
                                <label> Blood Pressure </label>
                                <input type="text"/>
                            </div>
                        </div>

                        <div className="record-complains-form">

                            <div className="record-complains-input">
                                <label> Oxygen Saturation </label>
                                <input type="text"/>
                            </div>
                        </div>

                        <div className="record-complains-form">

                            <div className="record-complains-input">
                                <label> Heart Rate </label>
                                <input type="text"/>
                            </div>
                        </div>

                        <div className="record-complains-form">
                            <div className="record-complains-input">
                                <label> Temperature </label>
                                <input type="text"/>
                            </div>
                        </div>

                        
                        
                    </div>
                </div>

                <p> test </p>
                <p> test </p>
                <p> test </p>
                <p> test </p>
                <p> test </p>
               


            </AccordionDetails>
        </Accordion>
    )
}

export default AccordionRecord;