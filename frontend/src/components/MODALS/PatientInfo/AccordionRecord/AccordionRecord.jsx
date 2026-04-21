import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

function AccordionRecord(){

    return (
        <Accordion sx={{ backgroundColor: '#00006F', color: 'white', '&:before': { backgroundColor: 'rgba(255,255,255,0.3)' } }}>
            <AccordionSummary>
                <Typography>January 6 2025</Typography>
            </AccordionSummary>

            <AccordionDetails>
                <Typography>This is the content inside</Typography>
            </AccordionDetails>
        </Accordion>
    )
}

export default AccordionRecord;