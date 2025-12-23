import './App.css'
import { Link } from 'react-router-dom'
let path:string = "/solutions/fall-2020/question-"
import image from './assets/pancake_3.png'

function Fall2020() {

    return (

        <main>
            <h1>fall 2020 🍽️</h1>
            <hr/>

            <div className="question_list">

            <ol>

                <li><Link to={path.concat("2")}>question 2</Link></li>
                <li><Link to={path.concat("5a")}>question 5a</Link></li>
                <li><Link to={path.concat("7")}>question 7</Link></li>

            </ol>

            <hr/>

            <img src={image}></img>

            </div>
        </main>
    )
}

export default Fall2020