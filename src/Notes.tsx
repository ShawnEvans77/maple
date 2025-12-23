import './App.css'
import { Link } from 'react-router-dom'


function Notes() {

    return (

        <main>
        <h1>notes</h1>

        <hr/>

        <div className="question_list">
        <ol>

            <li><Link to="sorting">sorting</Link></li>
            <li>searching</li>

        </ol>
        </div>
        </main>
        
    )

}

export default Notes