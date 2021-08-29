import logo from './logo.svg';
import React  ,{useState} from 'react'; 
import './App.css';
import  BussinessInfo from './components/bussiness-info/bussiness-info.component';
import CONTENT from './components/assets/content';

function App() {
  const [lang,setLang] = useState('en');
  return (
    <div className="App">
          <BussinessInfo lang={lang}  setLang={setLang} content={CONTENT}/>
    </div>
  );
}

export default App;
