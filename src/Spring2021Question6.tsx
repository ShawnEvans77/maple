import './App.css'
import Solution from './Solution'


function Spring2021Question6() {


    return (

        <Solution

        name="spring 2021 question 6 🥞"

        question=
        
        {
     
        <>
        Write Java code to do the following: Read from the keyboard an unknown number of
        values each of which is between 1 and 100. If a number entered is not between 1 and 100 
        (except for -1 which ends the input) print an error message. 
        When a -1 is read in, stop the loop and print which of the numbers between 1 and 100 were not read in.
        </>

        }

        code={
`import java.util.Scanner;
public class Spring2021Question6 {

    public static void main(String[] args) {

        int[] histogram = new int[101];

        Scanner sc = new Scanner(System.in);

        int number = sc.nextInt();

        System.out.println("Enter some numbers between 1 and 100. Enter -1 to terminate the program: ");

        while (number != -1) {

            if (number < 1 || number > 100) {
                System.out.println("ERROR: Number must be between 1 and 100.");
            } else {
                histogram[number]++;
            }

            number = sc.nextInt();
        }

        System.out.println("The following numbers were not read in: ");

        for (int i = 1; i < histogram.length; i++) {
            if (histogram[i] == 0) {
                System.out.print(i + " ");
            }
        }

        sc.close();
    }

}`}

    />
             
    )
}

export default Spring2021Question6