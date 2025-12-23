import './App.css'
import "highlight.js/styles/default.css";
import hljs from "highlight.js";
import { useEffect } from 'react'

function Fall2020Question5() {

    useEffect(() => {
        hljs.highlightAll();
    })

    return (

        <main>

            <h2>fall 2020 question 5a 🥞</h2>

            <hr/>
     
        <p>Assume the six integers <code>i, j, k, m, n</code> exist and are all initialized.</p>

        <p>Assume there exists a method <code>max3()</code>, which accepts 3 integers as input and returns the largest integer.</p>

        <p>
           Write one Java statement to find the maximum of the six integers 
           using any combination of <code>Math.max()</code> and <code>max3().</code>
        </p>

            <pre>
                <code className="language-java">
                {
                `int max = Math.max(Math.max( Math.max(i, j), Math.max(k, l)), Math.max(m, n));`}
                </code>
            </pre>

        </main>
    )
}

export default Fall2020Question5