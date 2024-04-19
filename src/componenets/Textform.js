
import { useState } from "react"
import './style.css'

export default function Textform(props){
    const handleExtraspace = ()=>{
        let newTT = text.split(/[ ]+/);
        setText(newTT.join(" "));
        props.showAlert("Remove Extra Space","success")

    }
    const copy = () => {
        let textt =document.querySelector("#mybox");
        textt.select();
        navigator.clipboard.writeText(text)
        props.showAlert("Text copy to clipboard","success")
    }

    
    const handleClearclick= ()=>{
        let newText =""
        
        setText(newText);
       props.showAlert("Text clear","success")
    }
    const handleLoclick = ()=>{
        console.log("clicked");
        let newText =text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase!","success")

    }
    const handleUpclick = ()=>{
        console.log("clicked");
        let newText =text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase!","success")
    }
    const handleonchange = (event)=> {
        console.log("on change");

        setText(event.target.value)
    }
   
    const [text, setText] =useState("");
    
    return (
        <>
        <div className="container"  >
            <h1>{props.heading}</h1>
            <div className="mb-3">
  <label htmlFor="myBox" className="form-label">Enter the text below</label>
  <textarea style={{backgroundColor:props.mode==="light"?"white":"grey"}} value={text} onChange={handleonchange} className="form-control" id="mybox" rows="8"></textarea>

</div>
<button id="sn-1" onClick={handleUpclick} className="btn  btn-primary  mx-1">Convert to UpperCase</button>
<button  id="sn-2" onClick={handleLoclick} className="btn btn-primary   mx-1">Convert to LowerCase</button>
<button id="sn-3" onClick={handleClearclick} className="btn btn-primary   mx-1">Clear</button>
<button id="sn-4" onClick={copy} className="btn   btn-primary mx-1">Copy clipboard</button>
<button id="sn-5" onClick={handleExtraspace} className="btn btn-primary   mx-1">Remove Extra Space</button>




        </div>
        <div className = "container my-4">
            <h1>Summary</h1>
            <p>{text.split(" ").length-1} word and  {text.length} characters</p>
            <p>{0.008 * text.split(" ").length } Minutes Reads</p>
            <h2>Preview</h2>
            <p>
                {text.length>0?text:"Enter something in the above to preview it here -"}
            </p>
        </div>
        </>
    )

}
