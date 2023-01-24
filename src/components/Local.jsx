import React from 'react';

import './styles/Local.css';

const Local = ({ title }) => {
    return (
        <section className="local local-slide-1">
            <div className="local-container">
                <article className="local-container__text-box">
                    <h1>{title}</h1>
                    <p><strong>ESPACIO DE BELLEZA</strong></p>
                </article>
            </div>
        </section>
    );
};

export default Local;
