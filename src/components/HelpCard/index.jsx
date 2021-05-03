import React from 'react'
import css from '../HelpCard/HelpCard.module.css'


export const Helpcard = ({ data }) => {
    return (
        <div className={css.help}>
            <div style={{ background: data.bg, backgroundImage: `url(${data.image})` }} className={css.helpCard}>
                <hr />
                <h3>{data.title}</h3>

            </div>
        </div>

    )
}