import { useNavigate } from "react-router-dom";
import '../BackButton/BackButton.scss'


export function BackButton() {
    const navigate = useNavigate();

    return(
        <button className="back-button" onClick={()=> navigate(-1)}>← Back</button>
    )
}