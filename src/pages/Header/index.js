import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';

function App() {
    const menuClick = () => {
        let inputChecked = document.getElementById('menu__hamburguer')
        let link = document.getElementsByClassName('menu__item')
        let divRoot = document.getElementById('root')

        divRoot.style.overflow = inputChecked.checked ? 'hidden' : '';

        for (let i = 0; link.length > i; i++) {
            link[i].addEventListener('click', () => {
                inputChecked.checked = false
                divRoot.style.overflow = ''
            })
        }
    }


    return (
        <header className="cabecalho">
            <div className="cabecalho__menu">
                <h1><NavLink to="/">Dev Ventura</NavLink></h1>

                <input type="checkbox" onClick={() => menuClick()} id="menu__hamburguer" />
                <label htmlFor="menu__hamburguer">
                    <div className="menu">
                        <div className="menu__hamburguer__item">
                            <span className="hamburguer"></span>
                        </div>
                    </div>


                    <div className="menu__itens">
                        <NavLink activeClassName='menu__item--active' className="menu__item" to="/">Home</NavLink>
                        <NavLink activeClassName='menu__item--active' className="menu__item " to="/tcc">TCC</NavLink>
                    </div>
                </label>
            </div>
        </header>
    );
}

export default App;
