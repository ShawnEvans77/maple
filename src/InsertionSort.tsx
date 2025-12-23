import './App.css'
import "highlight.js/styles/default.css";
import hljs from "highlight.js";
import { useEffect } from 'react'


function InsertionSort() {

    useEffect(() => {
        hljs.highlightAll();
    }, [])

    return (

        <main>

            <h2>bubble sort 🥞</h2>

            <hr/>

            <pre>
                <code className="language-java">
                {
                `public class InsertionSort {
    /**
     * It's like a deck of cards.... you shift elements rightward to insert things in its proper place.
     * [9,7,4,2,1]
     * we shift 7 behind the 9
     * [7,9,4,2,1]
     * leave the 9 where it is
     * we shift 4 behind the 7 and 9
     * [4,7,9,2,1]
     * we shift the 2. 
     * [2,4,7,9,1]
     * finally shifting the 1
     * [1,2,4,7,9]
     * @param nums
     */
    public static void insertionSort(int[] nums) {
        for (int j = 1; j < nums.length; j++) {
            int key = nums[j];
            int i = j - 1;

            while (i >= 0 && nums[i] > key) {
                nums[i+1] = nums[i];
                i--;
            }

            nums[i+1] = key;
        }

    } 
}`}
                </code>
            </pre>

        </main>
    )
}

export default InsertionSort