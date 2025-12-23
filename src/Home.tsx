import './App.css'
import image from './assets/pancake.png'
import { Link } from 'react-router-dom'

function Home() {

    return (

    <main>
        <header>
            <h1>maple🥞</h1>
            <p>a better way to prepare for your tests.</p>
            <p>[ <Link to="/solutions">solutions</Link> ] [ <Link to="/questions">questions</Link> ] [ <Link to="/contact">contact</Link> ] 
            [ <Link to="/notes">notes</Link> ]</p>
        </header>
        <hr/>

        <h2>abstract</h2>

        <p> 
            maple is a free, open-source platform whose stated goal is to help Brooklyn College computer science students improve their grades. 
            There has been a gap between what students know compared to what they are expected to know. 
            This platform's primary purpose will be to alleviate this problem. 
            maple hosts real problems that improve your fundementals as opposed to contrived toy puzzles. This is just a hobby, 
            it won't be big and professional like Hackerrank.
        </p>

        <h2>content</h2>

        <p>This platform will contain material such as the following:</p>

        <ol>
            <li>Python Problem Sets</li>
            <li>Java Problem Sets</li>
            <li>C++ Problem Sets</li>
            <li>Real Brooklyn College CISC Exam Questions</li>
        </ol>

        <p>maple's resources are useful rather than unecessarily complicated questions that ask you to guess the result of several nested method calls.</p>


        <h2>prepare better</h2>

        <p>
            Use this as one of many resources to become a cracked developer capable of solving the world's hardest problems.
            If you use this website, you should be well equipped to pass all of your programming classes with little to no difficulty. 
        </p>

        <h2>navigation</h2>

        <ol>
            <li><Link to="/solutions">solutions</Link></li>
            <li><Link to="/questions">questions</Link></li>
            <li><Link to="/contact">contact</Link></li>
            <li><Link to="/notes">notes</Link></li>
        </ol>

        <hr/>

        <img src={image}></img>

    </main>
    );
}

export default Home