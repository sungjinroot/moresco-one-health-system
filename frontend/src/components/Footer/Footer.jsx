import './Footer.css'
import Pagination from '@mui/material/Pagination';


function Footer(){

    return (
        <div className="footer">
            <div className="footer-pagination">
                <Pagination count={20} shape="rounded" sx={{color:'white','& .MuiPaginationItem-root':{color:'white',borderColor:'white'},'& .Mui-selected':{backgroundColor:'white',color:'#000'}}} /> 
            </div>
        </div>
    )
}

export default Footer;