import './App.css'
import { Link } from 'react-router-dom'


function Sorting() {

    return (

        <main>
        <h1>sorting</h1>

        <hr/>

        <div className="question_list">
        <ol>

            <li><Link to="bubble">bubble sort</Link></li>
            <li><Link to="selection">selection sort</Link></li>
            <li><Link to="insertion">insertion sort</Link></li>
            <li><Link to="quick">quick sort</Link></li>

        </ol>
        </div>
        </main>
        
    )

}

export default Sorting