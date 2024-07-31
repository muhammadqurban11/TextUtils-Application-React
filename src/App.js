
import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';



function App() {
  const [mode, setMode] = useState('light'); // Whether darkmode is on or not
  const [alert, setalert] = useState(null)
  const showAlert = (message, type) => {
    setalert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setalert(null)
    }, 1500);

  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#0F06B9';
      showAlert("Dark Mode has been Enable", "success");
      document.title = ('Textutils - Dark Mode')
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'light';
      showAlert("Light Mode has been Enable", "success");
      document.title = ('Textutils - Light Mode')
    }
  }
  return (
    <>
      <Navbar title="Textutils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">

        <TextForm heading="Enter your text to analyze Below" showAlert={showAlert} mode={mode} />
        {/* <About /> */}
      </div>
    </>

  );
}


export default App;
