import React , {useState} from "react";
  
export default function Textform(props) {
    let style = {
        btn:{
            margin:"8px",
            padding:"2px",
            color:props.mode==='Dark'?'White':'Black',
            backgroundColor:props.mode=='Dark'?'Black':'rgba(138, 124, 124, 0.555)'
        },
        text_area:{
            backgroundColor:props.mode==='Light'?'White':'rgb(51, 43, 43)',
            color:props.mode==="Dark"?"white":"Black"
        },
        contents:{
            color:props.mode==="Dark"?"white":"Black"
        }
    }


    const [recovery_btn , do_recovery] = useState({
        margin:"8px",
        padding:"2px",
        backgroundColor:props.mode=='Dark'?'Black':'rgba(138, 124, 124, 0.555)',
        color:props.mode==='Dark'?'White':'Black',
        opacity:"0.8"
    })

    const [dark_mode_css,change_mode_css] = useState({
        backgroundColor:"White"
    })

    // Function to convert all text in Uppercase.
    const uppercase = () => {
        // console.log("Uppercase function is called");
        setText(text.toUpperCase());
        props.toggle_alert_window("Text Coverted into Uppercase");
    }
    //---Alternative way to converting in uppercase---
    // function uppercase(){
    //     console.log("Uppercase function is called");
    //     setText("Change the value of box");
    // }
    // ----------------------------------------------

    // Function to convert all text in Lowercase.
    const lowercase = () => {
        setText(text.toLowerCase());
        props.toggle_alert_window("Text Coverted into Lowercase");
    }

    // Function to covert the text into camelcase.
    const camelcase = () => {
        var words = text.split(" ")
        // Logic to convert into CamelCase.
        for(var i=0 ; i<words.length ; ++i) {
            for(var j=0 ; j<words[i].length ; ++j) {
                if(j===0) {
                    words[i] = words[i][j].toUpperCase()+words[i].slice(1,words[i].length);
                }
                else {
                    words[i] = words[i].slice(0,j)+words[i][j].toLowerCase()+words[i].slice(j+1,words[i].length);
                }
            }
        }
        // joining and assigning to the text variable.
        setText(words.join(" "));
        props.toggle_alert_window("Text Coverted into CamelCase");
    }

    // Function to clear the text area
    const clear_text = () => {
        recovery_text(text);
        do_recovery(
            {
                margin:"8px",
                padding:"2px",
                opacity:"1",
                backgroundColor:props.mode=='Dark'?'Black':'rgba(138, 124, 124, 0.555)',
                color:props.mode==='Dark'?'White':'Black',
            }
        )
        setText('');
        props.toggle_alert_window("Text Cleared");
    }

    // Function for enabling the typing feature in the text area.
    const onchangefun = (event) => {
        // console.log("On Change");
        setText(event.target.value);
        count_length();
    }

    // Function use to Recover the cleared text
    const recovery_button_fnc = () => {
        if(mistake==="") return ;
        do_recovery(
            {
                margin:"8px",
                padding:"2px",
                opacity:"0.6",
            }
        )
        setText(mistake);
        recovery_text("");
        props.toggle_alert_window("Text Recovered");
    }

    // Function to change the visibility mode
    // const change_visibility = () => {
    //     console.log("change visiblity");
    //     if(props.mode=="Dark") {
    //         change_mode_css({
    //             backgroundColor:"rgb(31, 25, 25)",
    //             color:"white"
    //         })
    //         // change_mode("Enable Light Mode");
    //     }
    //     else {
    //         // change_mode("Enable Dark Mode");
    //         change_mode_css({
    //             backgroundColor:"white",
    //             color:"black"
    //         })
    //     }
    // }

    // Function to copy the text area
    const copy_text_area = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.toggle_alert_window("Text Copied");
    }

    // Count the length of the Text
    function count_length() {
        var t = text.split(" ");
        var count=0;
        for(var i=0 ; i<t.length ; ++i) {
            if(t[i]==""){
                continue;
            }
            count+=1;
        }
        change_word(count);
    }

    // Text Vairable
    const [text,setText] = useState("");
    const [mistake,recovery_text] = useState("");
    const [word,change_word] = useState(0);
    // const [dark_mode , change_mode] = useState("Enable Dark Mode");
    // const [user_coloing,user_change_coloring] = useState("black");

    return (
        <>
            <div className="container">
                <div className="container1">
                    {/* Heading of Applicaiton. */}
                    <h1 style={style.contents}>{props.heading}</h1>
                    <strong style={style.contents}>{props.strong}</strong>
                    <div className="mb-3">
                        {/* Text Area of the Application. */}
                        <label htmlFor="myBox" style={style.contents} className="form-label">*Text Area*</label> <br></br>
                        {/* {console.log(props.mode)} */}
                        <textarea className="form-control" value={text} onChange={onchangefun} style={style.text_area}  id="myBox" rows="8" cols="100" placeholder="Enter your text here"></textarea>
                    </div>
                    {/* Button for uppercase. */}
                    <button className="bnt" style={style.btn} onClick={uppercase}> Convert to Uppercase</button> 
                    {/* Button for lowercase. */}
                    <button className="bnt" style={style.btn} onClick={lowercase}> Convert to Lowercase</button>
                    {/* Button to Convert into CamelCase. */}
                    <button className="bnt" style={style.btn} onClick={camelcase}>CamelCase</button>
                    {/* Button to clear text area. */}
                    <button className="bnt" style={style.btn} onClick={clear_text}>Clear text</button>
                    {/* Button to recover last text. */}
                    <button className="btn" style={recovery_btn} onClick={recovery_button_fnc}>Recovery text</button>
                    {/* Button to enable/disable dark mode */}
                    {/* <button className="bnt_change_visiblity" style={style.btn} onClick={change_visibility}>{dark_mode}</button> */}
                    {/* Button to copy text */}
                    <button className="bnt" style={style.btn} onClick={copy_text_area}>Copy Text</button>
                </div>
                <div className="container2" style={style.contents}>
                    <h1>Details of text area</h1>
                    <p><strong>{text.length} charaters are used</strong></p>
                    <p><strong>{word} words are used</strong></p>
                    <p>{0.008*(text.split(" ").length-1)} minute requied to read</p>
                    <h3>Preview</h3>    
                    <span className="preview_box">{text===""?"Type to Preview":text}</span>
                </div>
            </div>
        </>
    )
}
