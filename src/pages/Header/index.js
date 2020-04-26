import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';

function App() {
    const onCheck = () => {
        let input = document.getElementById('menu__hamburguer')
        input.attributes.setNamedItem('!checked')
    }

    const onLockScroll = () => {
        let divRoot = document.getElementById('root')
        //input.style.overflow('hidden')
        console.log(divRoot.style.overflow = 'hidden')
    }
    return (
        <header className="cabecalho">
            <div className="cabecalho-menu">
                <h1><NavLink activeClassName='menu__item--active' to="/">Dev Ventura</NavLink></h1>

                <input onClick={() => onLockScroll()} type="checkbox" id="menu__hamburguer" />
                <label htmlFor="menu__hamburguer">
                    <div className="menu">
                        <div className="menu__hamburguer__item">
                            <span className="hamburguer"></span>
                        </div>
                    </div>


                    <div className="menu__itens">
                        <NavLink onClick={() => onCheck()} activeClassName='menu__item--active' className="menu__item" to="/">Home</NavLink>
                        <NavLink onClick={() => onCheck()} activeClassName='menu__item--active' className="menu__item " to="/tcc">TCC</NavLink>
                    </div>
                </label>
            </div>
        </header>
    );
}

export default App;
