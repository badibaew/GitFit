import './App.css';
import {RegistrationForm} from "./components/reg/Register2";
import {BrowserRouter, Routes,Route} from "react-router-dom";
import Context from "./components/content/Context";
import React, {useState} from "react";
import MainPage from "./pages/MainPage/MainPage";
import Payment from "./pages/Payment/PayMent/payment";
import PortfolioPage from "./pages/Profile/pages/portfolioPage/PortfolioPage";
import Modal from "./components/reg/Register";


function App() {
    const [renderEl,setRender] = useState(false)
    function Rend(){
        if(renderEl == false){
            return <Modal/>
        }
        else{
            return <RegistrationForm/>
        }
    }

    const objRend = {
        'renderEl':renderEl,
        'setRender':setRender,
    }

    return(
        <Context.Provider value={objRend}>
            <div className="App">
                {/*<Rend/>*/}
                {/*<MainPage/>*/}
                {/*<Payment/>*/}
                <PortfolioPage/>
            </div>
        </Context.Provider>
  );
}

export default App;
