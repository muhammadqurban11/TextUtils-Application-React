import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpclick = () => {
        // console.log("Uppcase was clicked:" + text)
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Converted into UpperCase", "success")
    }
    const handletoclick = () => {
        // console.log("Uppcase was clicked:" + text)
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted into LowerCase", "success")

    }

    const handletoclear = () => {
        // console.log("Uppcase was clicked:" + text)
        let newText = "";
        setText(newText);
        props.showAlert("Text Clear", "success")

    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Spaces Removed ", "success")

    }


    const handleOnchange = (event) => {
        // console.log("On change");
        setText(event.target.value);
    }




    const [text, setText] = useState('')
    return (
        <>
            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : 'black' }} >
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnchange} style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white ', color: props.mode === 'dark' ? 'white' : 'black' }} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpclick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-1" onClick={handletoclick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-1" onClick={handletoclear}>Clear Text</button>
                <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>





            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>Your Text Summary</h2>
                <p>{text.split(" ").length} words {text.length} characters</p>
                <p>{0.008 * text.split(" ").length}Minutes Read</p>
                <h3>Preview</h3>
                <p>{text.length > 0 ? text : "Enter Your Text in above box to preview it here"}</p>

            </div>
        </>

    )
}
