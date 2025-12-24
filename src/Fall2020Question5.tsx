import './App.css'
import Solution from './Solution'

function Fall2020Question2() {

    return (

        <Solution
        
        name="fall 2020 question 2 🥞"
        question=

        {
        <>
        
        <p>Assume the six integers <code>i, j, k, m, n</code> exist and are all initialized.</p>

        <p>Assume there exists a method <code>max3()</code>, which accepts 3 integers as input and returns the largest integer.</p>

        <p>
           Write one Java statement to find the maximum of the six integers 
           using any combination of <code>Math.max()</code> and <code>max3().</code>
        </p>

        </>
        }

        code=

        {
        `int max = Math.max(Math.max( Math.max(i, j), Math.max(k, l)), Math.max(m, n))`
        }
    
        />
    )

}

export default Fall2020Question2