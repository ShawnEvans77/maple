import './App.css'
import "highlight.js/styles/default.css";
import hljs from "highlight.js";
import { useEffect } from 'react'

function Fall2020Question2() {

    useEffect(() => {
        hljs.highlightAll();
    })

    return (

        <main>

            <h2>fall 2020 question 1 🥞</h2>
            <hr/>

            <p>
                Assume the existence of an <code>int</code> variable called inches.
                 Compute and print how many miles, yards, feet and inches that number represents.
            </p>
            
            
            <p>The rules are: 1 foot equal 12 inches, 36 inches equal 1 yard, and 5280 feet equals 1 mile. </p>
                
            <p>For example, if <code>int inches = 245897</code>, then the output is as follows:</p>

            <code>245897 inches equals 3 miles 1550 yards 1 foot and 5 inches</code>
    
            <pre>
                <code className="language-java">
                {
                `    public class Fall2020Question2 {
        public static void main(String[] args) {
            int inches = 245897;
            int miles = inches / (5280*12);

            int remainingYards = inches % (5280*12);
            int yards = remainingYards / 36;

            int remainingFeet = inches % 36;
            int feet = remainingFeet / 12;
            
            int remainingInches = inches % 12;

            System.out.printf("%d inches equals %d miles %d yards %d foot and %d inches\\n", 
            inches, miles, yards, feet, remainingInches);
        }
    }`}
                </code>
            </pre>

        </main>
    )
}

export default Fall2020Question2