import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import './AccordionRecord.css';
import { Box } from '@mui/material';

function AccordionRecord(){

    return (
        <Accordion sx={{ backgroundColor: '#00006F', color: 'white', '&:before': { backgroundColor: 'rgba(255,255,255,0.3)' } }}>
            <AccordionSummary>
                
                <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
                    <b> January 16 2026 </b>

                    {/* Can be used to add reason */}

                    <div className="accordion-icons">
                        <img src="/src/assets/pencil.png"/>
                        <img src="/src/assets/delete.png"/>
                    </div>
                </Box>
                
                
            </AccordionSummary>

            <AccordionDetails>
                <p> test </p>
            </AccordionDetails>
        </Accordion>
    )
}

export default AccordionRecord;