import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSadTear } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";


function ErrorPage() {
    return <div style={{textAlign:'center'}}>
            <p style={{fontSize: '24px', color: 'white', marginBottom:'10px'}}>
                We couldn`t find the page you`re looking for 
                <FontAwesomeIcon style={{marginLeft:'10px'}} icon={faSadTear} />
            </p>
            <Link style={{color: '#C3E789', fontSize:'22px'}} to='/habits-list'>Back to HabitsList</Link>
        </div>
}

export default ErrorPage