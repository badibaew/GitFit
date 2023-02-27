import React,{useState} from 'react';
import '../../pages/MainPage/header/header.modules.css';
import logo from './logo.svg';
import iconPortfolio from './ic_round-home.svg';
import Modal from "../reg/Register";


function Navbar() {

    const [open, setOpen] = useState(false);

    const handleConfirm = (result) => {
        if (result) {
        }
        setOpen(false);
    };

    return (
        <>
            <div className='containerWrapp'>
                <div className="headerItem">
                    <div className="head">
                        <a href="#">
                            <img src={logo} alt=""/>
                        </a>
                        <div className="headerBtn">
                            <button className="headerButton Neon">Тренировки</button>
                            <button onClick={() => setOpen(true)} className="headerButton2 neon">Войти</button>
                            <Modal open={open} handleConfirm={handleConfirm}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;