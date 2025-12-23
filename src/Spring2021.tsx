import './App.css'
let path:string = "/solutions/spring-2021/question-"
import { Link } from 'react-router-dom'
import image from './assets/pancake_4.png'

function Fall2020() {

    return (

        <main>
            <h1>spring 2021 🍽️</h1>
            <hr/>

            <div className="question_list">

            <ol>

                <li><Link to={path.concat("1")}>question 1</Link></li>
                <li><Link to={path.concat("2")}>question 2</Link></li>
                <li><Link to={path.concat("5")}>question 5</Link></li>
                <li><Link to={path.concat("6")}>question 6</Link></li>
                <li><Link to={path.concat("7")}>question 7</Link></li>

             
            </ol>

            <hr/>

            </div>

            <img src={image}></img>


        </main>
    )
}

export default Fall2020