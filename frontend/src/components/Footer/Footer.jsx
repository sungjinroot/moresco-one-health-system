import './Footer.css'
import Options from '/src/components/Options/Options.jsx';
import Pagination from '@mui/material/Pagination';


function Footer(){

    return (
        <div className="footer">
            <div className="footer-pagination">
                <Pagination count={20} shape="rounded" sx={{color:'white','& .MuiPaginationItem-root':{color:'white',borderColor:'white'},'& .Mui-selected':{backgroundColor:'white',color:'#000'}}} /> 
            </div>

            <Options/>
        </div>
    )
}

export default Footer;