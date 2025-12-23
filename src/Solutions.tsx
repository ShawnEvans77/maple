import './App.css'
import { Link } from 'react-router-dom'
import image from './assets/pancake_6.png'

function Solutions() {

    return (

        <main>
        <h1>solutions 🍽️</h1>

        <hr/>

        <div className="question_list">
        <ol>
            <li><Link to="/solutions/fall-2020">fall 2020</Link></li>
            <li><Link to="/solutions/spring-2021">spring 2021</Link></li>
            <li>spring 2025</li>
        </ol>
        </div>

        <hr/>

        <img src={image}></img>

        </main>
    )
}

export default Solutions