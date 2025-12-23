import './App.css'
import "highlight.js/styles/default.css";
import hljs from "highlight.js";
import { useEffect } from 'react'

function Spring2021Question1() {

    useEffect(() => {
        hljs.highlightAll();
    })

    return (

        <main>

            <h2>spring 2021 question 1 🥞</h2>

            <hr/>
     
        <p>Write Java code to repeatedly print each single digit between 1 and 9 the number of times based upon its numeric value. 
           Thus, you would get a triangle of the shape below where 1 prints once, 2 twice … and 9 prints 9 times.
        </p>

            <pre>
                <code className="language-java">
                {
                `public class Spring2021Question1 {

    public static void main(String[] args) {

        for (int i = 1; i <= 9; i++) {
            for (int j = 0; j < i; j++) {
                System.out.print(i);
            }

            System.out.println();
        }

    }
    
}`}
                </code>
            </pre>

        </main>
    )
}

export default Spring2021Question1