import './App.css'
import "highlight.js/styles/default.css";
import hljs from "highlight.js";
import { useEffect } from 'react'

function Spring2021Question5() {

    useEffect(() => {
        hljs.highlightAll();
    }, [])

    return (

        <main>

            <h2>spring 2021 question 5 🥞</h2>

            <hr/>
     
        <p>You are playing a game that has two dice – one die has 6 sides numbered 1 through 6 and the 
            second die has 8 sides numbered 1 through 8. A turn involves rolling both die together.
             Write Java code to play 1,000 turns and keep track of the sum of the two dice in each roll i.e, 
            (2 through 14). When all 1,000 turns have been completed, 
            print a formatted table showing the value of the sum of the two dice (2 through 14) and 
            the number of times that value occurred.</p>

            <pre>
                <code className="language-java">
                {
                `public class Spring2021Question5 {
    public static void main(String[] args) {
        final int NUM_ROLLS = 1000;
        final int MAX_ROLL = 14;

        int[] histogram = new int[MAX_ROLL + 1];

        for (int i = 0; i < NUM_ROLLS; i++) {
            int dieOneRoll = (int) (Math.random() * (6 - 1 + 1) + 1);
            int dieTwoRoll = (int) (Math.random() * (8 - 1 + 1) + 1);

            int roll = dieOneRoll + dieTwoRoll;

            histogram[roll]++;
        }

        System.out.printf("%8s%8s\\n", "Dice Sum", "Count");

        for (int i = 2; i < histogram.length; i++) {
            System.out.printf("%8d%8d\\n", i, histogram[i]);
        }
    }
}`}
                </code>
            </pre>

        </main>
    )
}

export default Spring2021Question5