import React, {useState} from "react";

function TextForm(props) {
    const [text, setText] = useState('');

    const handleUpClick = ()=>{
     let newText = text.toUpperCase();
     setText(newText);
     props.showAlert("Converted to upper case", "success");
    }
    
    const handleLoClick = ()=>{
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert("Converted to lower case", "success");
    }
    
    const handleClearClick = ()=>{
      let newText = '';
      setText(newText);
      props.showAlert("text cleared", "success");
    }

    const handleCopy = ()=>{
      let text = document.getElementById("myBox")
     text.select();
     navigator.clipboard.writeText(text.value)
     document.getSelection().removeAllRanges();
     props.showAlert("Copy to clipboard", "success");

    }

    const handleExtraSpaces = ()=>{
      let newText = text.split(/[ ]+/)
      setText(newText.join(" "))
      props.showAlert("Extra spaces removed", "success");

    }

    const handleOnChange = (e)=>{
        setText(e.target.value)
    }
  return (
    <>
    <div className="container my-10" style={{color: props.mode==='dark'?'white':'black'}}>
    <h1 className="mb-4">{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control" value={text} style={{backgroundColor: props.mode==='dark'?'#5a576e':'white' , color: props.mode==='dark'?'white':'black'}} onChange={handleOnChange} id="myBox"  rows="8"></textarea>
      </div>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to upercase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>Convert to Lovercase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>Clear Text</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy Text</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>Remove extra spaces</button>
      </div>
      <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
        <h2>Your Summary</h2>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} Characters</p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length}  Minutes to Read </p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to preview!"}</p>
      </div>
    </>
  );
}

export default TextForm;
