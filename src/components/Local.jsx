import React from 'react';
import './styles/Local.css';
import {ItemListContainer} from './ItemListContainer.jsx'

const Local = () => {
    return (
        <section className="local local-slide-1">
            <div className="local-container">
                <article className="local-container__text-box">
                    <h1>Sofía Spertino</h1>
                    <p><strong>ESPACIO DE BELLEZA</strong></p>
                </article>
            </div>
            {/* <ItemListContainer greeting= "Lista de Productos"/>  */}
        </section>
    );
};

export default Local;
