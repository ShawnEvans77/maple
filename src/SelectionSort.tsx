import './App.css'
import "highlight.js/styles/default.css";
import hljs from "highlight.js";
import { useEffect } from 'react'


function SelectionSort() {

    useEffect(() => {
        hljs.highlightAll();
    }, [])

    return (

        <main>

            <h2>selection sort 🥞</h2>

            <hr/>

            <pre>
                <code className="language-java">
                {
                `public class SelectionSort {
    /**
     * Simply look for the smallest number smaller than nums[i]. Then swap. Repeat until the end of the list.
     * @param nums
     */
    public static void selectionSort(int[] nums) {
        for (int i = 0; i < nums.length; i++) {
            int min = nums[i];
            int minIndex = i;

            for (int j = i + 1; j < nums.length; j++) {
                if (nums[j] < min) {
                    min = nums[j];
                    minIndex = j;
                }
            }

            nums[minIndex] = nums[i];
            nums[i] = min;
        }
    }

}`}
                </code>
            </pre>

        </main>
    )
}

export default SelectionSort