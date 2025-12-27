import './App.css'
import { Link } from 'react-router-dom'

function Searching() {

    return (

        <main>
        <h1>searching</h1>

        <hr/>

        <div className="question_list">
        <ol>

            <li><Link to="binary">binary search</Link></li>

        </ol>
        </div>
        </main>
        
    )

}

export default Searching