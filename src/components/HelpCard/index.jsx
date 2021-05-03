import React from 'react'
import css from '../HelpCard/HelpCard.module.css'


export const Helpcard = ({ title, bg }) => {
    return (
        <div style={{background: bg}} className={css.helpCard}>
            <hr />
            <h3>{title}</h3>
        </div>
    )
}