import React from 'react'
import css from './Main.module.css'
import mainPic from '../../images/bg.png'
import { Helpcard } from '../HelpCard'
import pic from '../../images/klub.png'

export const MainPage = () => {
    const data = [
        {
            title: "Weight Lifting",
            bg: "#FFE2DE",
            id: 1
        },
        {
            title: "Running  & Spinning",
            bg: "#C4E769",
            id: 2
        },
        {
            title: "Pumping Iron",
            image: pic,
            id: 3,


        },
        {
            title: "Pumping Iron",
            bg: "#0052C1",
            id: 4
        }
    ];
    return (

        <div className={css.mainPage}>
            <div className={css.container}>

                <nav>
                    <span>Thrivetale</span>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Services</li>
                        <li>Blog</li>
                    </ul>
                    <button>CONTACT US</button>
                </nav>
                <div className={css.mainBlocks}>
                    <div>
                        <p>Thrivetale</p>
                        <h1>HELPING YOU THRIVE IN ALL AREAS OF LIFE</h1>
                        <p>Our highly talented therapists can help you with a range of issues
                        including relationships, sex, PTSD, depression, social anxiety,
                    or even just caring for yourself more.</p>
                        <div>
                            <button>WHO AM I</button>
                            <button>WHAT DO I DO</button>
                        </div>
                    </div>
                    <div>
                        <img src={mainPic} alt="" />
                    </div>
                </div>


            </div>
            <div>
                <h5>WE CAN HELP YOU WITH</h5>
                <div className={css.cards}>
                    {
                        // data.map((el, id) => {
                        //     return <Helpcard 
                        //     bg={el.bg} 
                        //     title={el.title}
                        //     image={el.image}
                        //     key={id} />
                        // })
                        data.map((el, id) => {
                            return <Helpcard
                                data={el}
                                key={id} />
                        }) 
                    }
                </div>

                {/* <div>
                    
                    <Helpcard bg="#C4E769" title="Running  & Spinning" />
                    <Helpcard bg="#62D0DF" title="Pumping Iron" />
                    <Helpcard bg="#0052C1" title="Pumping Iron" />
                </div> */}
            </div>
        </div>
    )
}