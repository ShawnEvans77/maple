import './App.css'
import "highlight.js/styles/default.css";
import hljs from "highlight.js";
import { useEffect } from 'react'


function BubbleSort() {

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
                `public class BubbleSort {
    /**
     * Bubble sort: Given [10, 9, -1, -2]
     * On the first iteration, 10 "bubbles to the end". On the second iteration, 9 "bubbles to the end". And so on.
     * @param nums
     */
    public static void bubbleSort(int[] nums) {
        for (int i = 0; i < nums.length; i++) {
            boolean swapped = false;
            for (int j = 0; j < nums.length - i - 1; j++) {
                if (nums[j] > nums[j+1]) {
                    int temp = nums[j+1];
                    nums[j+1] = nums[j];
                    nums[j] = temp;
                    swapped = true;
                }
            }
            if (swapped == false)
                break;
        }
    }
}`}
                </code>
            </pre>

        </main>
    )
}

export default BubbleSort