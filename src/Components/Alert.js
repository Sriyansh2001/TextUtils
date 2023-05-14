import React from "react";

export default function Alert(props) {
    return (
        <>
            <div style={{backgroundColor:"rgb(144, 238, 144)", padding:"10px"}} className={props.active?"open":"close"}>
                Successfully : {props.alert_detail}
                <button style={{backgroundColor:"rgb(173,300,230)",float:"right"}} className="Close_btn" type="button" onClick={props.close_alert_window}><span>&times;</span></button>
            </div>
        </>
    )
}