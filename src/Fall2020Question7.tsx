import './App.css'
import "highlight.js/styles/default.css";
import hljs from "highlight.js";
import { useEffect, useRef } from 'react'



function Fall2020Question2() {

    useEffect(() => {
        hljs.highlightAll();
    }, [])

    return (

        <main>

            <h2>fall 2020 question 7 🥞</h2>

            <hr/>

            <pre>
                <code className="language-java">
                {
                `import java.util.Scanner;
import java.io.IOException;
import java.io.PrintWriter;
import java.io.File;

public class Fall2020Question7 {

    public static void main(String[] args) throws IOException {

        String[] names = new String[100];
        double[] averageTripLength = new double[100];

        int numSalesRep = readData(names, averageTripLength);

        PrintWriter writer = new PrintWriter("fall_2020_output.txt");

        computeTripLength(averageTripLength, writer, numSalesRep);

        sortArray(names, averageTripLength, numSalesRep);

        writer.println();

        for (int i = 0; i < numSalesRep; i++) {
            writer.printf("%10s %10.2f\\n", names[i], averageTripLength[i]);
        }

        writer.close();

    }

    /**
     * This method has two parameters: a String array for names and a
     * double array for the average trip length per individual sales
     * rep. It returns an integer.
     * <p>
     * 
     * It declars the input file, reads in the records in the file and
     * stores each first name in an array (assume there are no
     * duplicate names) and the average number of miles travelled
     * for that sales rep in another array.
     * 
     * @param names             The {@code String} array representing our list of
     *                          names.
     * @param averageTripLength The {@code double} array representing our average
     *                          trip lengths.
     * @return An {@code int} representing the number of records read
     * @throws IOException If the file is not found in the system.
     */
    public static int readData(String[] names, double[] averageTripLength) throws IOException {
        File file = new File("fall_2020_input.txt");
        Scanner sc = new Scanner(file);

        int numSalesRep = 0;

        while (sc.hasNext()) {
            names[numSalesRep] = sc.next();
            averageTripLength[numSalesRep] = (sc.nextDouble() + sc.nextDouble()) / 2.0;
            numSalesRep++;
        }

        sc.close();

        return numSalesRep;
    }

    /**
     * This method has three parameters – the output file, double array
     * of individual average trip length and an integer representing the
     * total number of records read in.
     * <p>
     * 
     * It computes the overall average trip length among all sales reps.
     * 
     * Afterward, it computes and prints to the output file how many sales reps
     * individual average trip length were above the overall
     * average trip length, below the overall average trip length
     * and equal to the overall average trip length.
     * 
     * @param averageTripLength The {@code double} array representing our average
     *                          trip lengths.
     * @param pw                A {@code PrintWriter} object used to print to the
     *                          output file.
     * @param numRecords        A {@code int} representing how many records exist.
     */
    public static void computeTripLength(double[] averageTripLength, PrintWriter pw, int numRecords) {
        double sum = 0;

        for (int i = 0; i < numRecords; i++) {
            sum += averageTripLength[i];
        }

        double average = (sum / numRecords);

        int aboveAverage = 0;
        int belowAverage = 0;
        int equalAverage = 0;

        for (int i = 0; i < numRecords; i++) {
            if (averageTripLength[i] == average)
                equalAverage++;
            else if (averageTripLength[i] > average)
                aboveAverage++;
            else if (averageTripLength[i] < average)
                belowAverage++;
        }

        pw.println("Above Average: " + aboveAverage);
        pw.println("Below Average: " + belowAverage);
        pw.println("Equal to the Average: " + equalAverage);
    }

    /**
     * 3. This method has three parameters – String array of names, double
     * array of individual average trip length and an integer
     * representing the total number of records read in by the first
     * method.
     * 
     * It sort the sales rep names in descending (reverse)
     * alphabetical order, synchronizing the individual sales rep’s
     * average trip length in the parallel array.
     * 
     * @param names             The {@code String} array representing our list of
     *                          names.
     * @param averageTripLength The {@code double} array representing our average
     *                          trip lengths.
     * @param numRecords        A {@code int} representing how many records exist.
     */
    public static void sortArray(String[] names, double[] averageTripLength, int numRecords) {

        for (int i = 0; i < numRecords; i++) {
            for (int j = 0; j < numRecords - i - 1; j++) {
                if (names[j].compareTo(names[j+1]) < 0) {
                    String temp = names[j + 1];
                    names[j + 1] = names[j];
                    names[j] = temp;

                    double temp2 = averageTripLength[j + 1];
                    averageTripLength[j + 1] = averageTripLength[j];
                    averageTripLength[j] = temp2;
                }
            }
        }
    }
}`}
                </code>
            </pre>

        </main>
    )
}

export default Fall2020Question2