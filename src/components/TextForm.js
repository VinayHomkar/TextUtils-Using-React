import React, {useState} from 'react'
import propTypes from 'prop-types'
export default function Textform(props) {
  const handleUPClick = ()=>{
    //console.log("UpperCase Was Clicked", text)
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert('Converted To UpperCase','success');
  }
  const handleLOClick = ()=>{
      //console.log("LowerCase Was Clicked", text)
      let newText = text.toLowerCase();
      setText(newText)
      props.showAlert('Converted To LowerCase','success');
  }
  const handleClear = ()=>{
    //console.log("Cleared Text", text)
    let newText = "";
    setText(newText)
    props.showAlert('TeaxtArea Cleared','success');
  }
  const handleExtraSpace =()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert('Removed Extraa Spaces','success');
  }
  function countWords() {
    var matches = text.match(/[\w\d'-]+/gi);
    return matches ? matches.length : 0;
  }
  
  
  
  //Handle o chnage is not necessary but for clearing console and to count changes of existing string we used and 
  // if we didnt use handle on chnage function it will not allow to enter text in text area box
  const handleOnChange = ()=>{
    console.log("On Change")
    // eslint-disable-next-line no-restricted-globals
    setText(event.target.value);
  }

  const [text, setText] = useState('Enter Your Text Here');
    //text = "New Text" //Wrong Way To Chnage The Text
    //setText("New Text"); //Correct Way To Chnage The Text
  return (
    <>
    <div className="container" style={{color: props.mode === 'dark'?'white':'black'}}>
      <h2>{props.heading}</h2>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'?'grey':'white', color: props.mode === 'dark'?'white':'black'}} id="myBox" rows="10"></textarea>
      </div>
      <button className="btn btn-primary mx-2 my-2" onClick={handleUPClick}>Convert To UppeCase</button>
      <button className="btn btn-primary mx-2 my-2" onClick={handleLOClick}>Covert To LowerCase</button>
      <button className="btn btn-primary mx-2 my-2" onClick={handleClear}>Clear</button>
      <button className="btn btn-primary mx-2 my-2" onClick={handleExtraSpace}>Clear Spaces</button>
      
    </div>

    <div className='container my-3' style={{color: props.mode === 'dark'?'white':'black'}}>
      <h2>Your Text Summary</h2>
      <p>{countWords('text')} Words And {text.length} Characters</p>
      <p>Minutes To Read, SLOW :{0.008 * text.split(" ").length}Minutes, AVERAGE :{0.003333 * text.split(" ").length}Minutes</p>
      <p>Sentences :{text.split(".").length}</p>
    </div>
    </>
  )
}
Textform.propTypes = {heading: propTypes.string}

