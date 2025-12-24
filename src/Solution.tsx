import './App.css'
import "highlight.js/styles/default.css";
import hljs from "highlight.js";
import { useEffect } from 'react'

interface props {

    name: string,
    question: React.ReactNode,
    code: React.ReactNode,
}

function Solution(props: props) {

    useEffect(() => {
        hljs.highlightAll();
    }, [props.code])

    return (

    <main>
        <h2>{props.name}</h2>
        <hr/>
        <p>{props.question}</p>

        <pre>
            <code className="language-java">
                {props.code}
            </code>
        </pre>
    </main>

    )  

}

export default Solution