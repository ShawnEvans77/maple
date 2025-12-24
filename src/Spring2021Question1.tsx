import './App.css'
import Solution from './Solution'


function Spring2021Question1() {

    return (

        <Solution
        name="spring 2021 question 1"
        question=

        {
        <>
        Write Java code to repeatedly print each single digit between 1 and 9 the number of times based upon its numeric value. 
        Thus, you would get a triangle of the shape below where 1 prints once, 2 twice … and 9 prints 9 times.
        </>
        }

        code=
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

    />


    )
}

export default Spring2021Question1