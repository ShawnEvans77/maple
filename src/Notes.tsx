import './App.css'
import { Link } from 'react-router-dom'
import image from './assets/pancake_5.png'


function Notes() {

    return (

        <main>
        <h1>notes</h1>

        <hr/>

        <div className="question_list">
        <ol>

            <li><Link to="sorting">sorting</Link></li>
            <li><Link to ="searching">searching</Link></li>

        </ol>
        </div>
        <hr/>

        <img src={image}></img>
        </main>
        
    )

}

export default Notes