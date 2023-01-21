

import Movies from "./Component/Movies";
import './Style/style.css'
import {Footer} from "./Component/Footer";
function App() {
  return (
    <div className="App">
       <h2 style={{color:"grey", textAlign:'center',borderBottom:'2px solid gray', width:'10rem',margin:'auto',paddingBottom:'5px'}}>Movie App</h2> 
    <Movies/>
    <Footer/>
    
    </div>
  );
}

export default App;
