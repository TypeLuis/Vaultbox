// import React from 'react';
import { useAuth } from '../context/authcontext';

type SettingsPageProps = {
  
}

const SettingsPage = ({  }: SettingsPageProps) => {
    const {logout} = useAuth()

    const buttonStyle = {
        "height": "40px",
        "width": "90px",
        "border": "none",
        "transition": "transform 0.2s ease",
        "cursor": "pointer",
       "&:hover": {
            "opacity": "0.7",
        },
    
        "&:active" : {
            "transform": "scale(0.9)",
        }
    }

    const divStyle ={
        "height" : "100vh",
        "width" : "calc(100vw - 220px)",
        "display": "flex",
        "justify-content": "center",
        "align-items": "center"
    }
  return (
    <div style={divStyle}>
    <button style={buttonStyle} onClick={()=>{logout()}}>logout</button>
    </div>
  );
};

export default SettingsPage;