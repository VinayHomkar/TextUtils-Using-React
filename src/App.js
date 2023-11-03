/*import logo from './logo.svg';*/
import './App.css';
import AboutUs from './components/AboutUs';
import Navbar from './components/Navbar';
import Alert from './components/Alert'
import Textform from './components/TextForm';
import { useState } from 'react';


function App() {
  // eslint-disable-next-line no-unused-vars
  const [mode, setMode]= useState('light'); //Whether Darkmode Is Enabled Or Not
  const [alert, setAlert]= useState(null);

  //const [useTheme, setTheme]= useState('');
  const showAlert =(message, type)=>{
    setAlert({

      msg :message,
      type :type
    })
    setTimeout(()=>{
      setAlert(null);

    }, 3000);
  }
  /*const radioBtn = ()=>{
    if (useTheme === 'light'){
      setTheme('green')
      document.body.style.backgroundColor =  '#0bf589';
    }
  }*/
  const toggleMode = ()=>{
  if (mode === 'light'){
    setMode ('dark')
    document.body.style.backgroundColor = '#171934'
    showAlert("Dark Mode Has Been Enabled", "success");
  }
  else{
    setMode ('light')
    document.body.style.backgroundColor = 'white'
    showAlert("Light Mode Has Been Enabled", "success");
  }
}
  return (
    <>
    
      {<Navbar title = "TextUtils" about = "AboutUs" mode={mode} toggleMode={toggleMode} /*useTheme={useTheme} radioBtn={radioBtn} *//>}
      {/*<Navbar/>  - Without passing any props */}
      <Alert alert={alert}/>
      <div className="container">
        <Textform heading = " Try TextUtils - Word Counter, Character Counter, Remove Extra Spaces" mode={mode} showAlert={showAlert}/>
        <AboutUs  mode={mode}/>
          
       

      </div>
    
    </>
    );
}

export default App;
