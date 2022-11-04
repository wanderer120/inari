import Styles from "../Styles";
import Rating from '@mui/material/Rating';

export default function Landing(){
    return(
        <Styles>
            <br/>
            <div>
                <Rating name="customized-10" size="large" readOnly defaultValue={1} max={1} 
                sx={{
                    fontSize: "4rem"
                }}
                />
            </div>
            <h2>Feedback Submitted!</h2>
            {/* <div>We’re so happy to hear from you!</div> */}
            <div>It is our pleasure to hear your valuable feedback.</div>
        </Styles>
        
    );
}