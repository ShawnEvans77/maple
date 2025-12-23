import './App.css'
import "highlight.js/styles/default.css";
import hljs from "highlight.js";
import { useEffect } from 'react'

function Spring2021Question7() {

    useEffect(() => {
        hljs.highlightAll();
    }, [])

    return (

        <main>

        <h2>spring 2021 question 7 🥞</h2>

        <hr/>
     
            <pre>
                <code className="language-java">
                {
                `import java.util.Scanner;
import java.io.File;
import java.io.IOException;
import java.io.PrintWriter;

public class Spring2021Question7 {

    public static void main(String[] args) throws IOException {

        final int MAX_NEIGHBORHOODS = 100;

        String[] neighborhoods = new String[MAX_NEIGHBORHOODS];
        double[] averagePrices = new double[MAX_NEIGHBORHOODS];

        int numRecords = readData(neighborhoods, averagePrices);

        modifyData(neighborhoods, averagePrices, numRecords);
        sortArrays(neighborhoods, averagePrices, numRecords);

        PrintWriter writer = new PrintWriter("spring_2021_output.txt");

        writer.printf("%-15s%s\\n", "Neighborhood", "Avg Price");
        for (int i = 0; i < 3; i++) {
            writer.printf("%-15s%9.2f\\n", neighborhoods[i], averagePrices[i]);
        }

        writer.close();
    }

    /**
     * This method first receives an array of String and array of doubles.
     * Then, it reads the neighborhood name as String and the four prices as integer
     * from a file.
     * It stores the neighborhood name in the array of String and the average of the
     * prices in the array of double.
     * It returns the number of neighborhood records read in as an integer.
     * 
     * @param neighborhoods A {@code String} array representing a list of
     *                      neighborhoods.
     * @param averagePrices A {@code double} array representing a list of
     *                      neighborhood average prices.
     * @return An {@code int} representing how many neighborhoods are in the file.
     * @throws IOException If the file is not found in the system.
     */
    public static int readData(String[] neighborhoods, double[] averagePrices) throws IOException {
        Scanner sc = new Scanner(new File("spring_2021_input.txt"));
        int numNeighborhoods = 0;

        while (sc.hasNext()) {
            neighborhoods[numNeighborhoods] = sc.next();
            averagePrices[numNeighborhoods] = (sc.nextDouble() + sc.nextDouble() + sc.nextDouble() + sc.nextDouble())
                    / 4.0;
            numNeighborhoods++;
        }

        sc.close();
        return numNeighborhoods;
    }

    /**
     * This method receives an array of double as the parameter and an integer
     * representing
     * the number of records read in by readData.
     * 
     * It computes the overall average home price for all homes read in by readData
     * (the average of the averages)
     * 
     * For the number of records read in from the input file, it increases the
     * average price for each neighborhood by 10% if the average home price for that
     * neighborhood is
     * below the overall average home price homes sold.
     * 
     * It decreases the average price for each neighborhood by 15%
     * if the average home price for that neighborhood is above
     * the overall average
     * 
     * @param neighborhoods The {@code String} array representing a list of
     *                      neighborhoods.
     * @param averagePrices A {@code double} array representing a list of
     *                      neighborhood average prices.
     * @param numRecords    An {@code int} representing the number of records that
     *                      were read in.
     */
    public static void modifyData(String[] neighborhoods, double[] averagePrices, int numRecords) {
        double sum = 0;

        for (int i = 0; i < numRecords; i++) {
            sum += averagePrices[i];
        }

        double average = sum / numRecords;

        for (int i = 0; i < numRecords; i++) {
            if (average < averagePrices[i]) {
                averagePrices[i] -= averagePrices[i] * .15;
            } else if (average > averagePrices[i]) {
                averagePrices[i] -= averagePrices[i] * .10;
            }
        }

    }

    /**
     * 
     * Receives the arrays of double and String and an integer representing the
     * number of records read in by readData as parameters.
     * Parallel sorts the arrays, only for the number of records read in by
     * readData, with the primary sort on the array of double in descending order.
     * 
     * @param neighborhoods A {@code String} array representing a list of
     *                      neighborhoods.
     * @param averagePrices A {@code double} array representing a list of
     *                      neighborhood average prices.
     */
    public static void sortArrays(String[] neighborhoods, double[] averagePrices, int numRecords) {

        for (int i = 0; i < numRecords; i++) {
            for (int j = 0; j < numRecords; j++) {
                if (averagePrices[j] < averagePrices[j + 1]) {

                    String tempString = neighborhoods[j + 1];
                    neighborhoods[j + 1] = neighborhoods[j];
                    neighborhoods[j] = tempString;

                    double tempDouble = averagePrices[j + 1];
                    averagePrices[j + 1] = averagePrices[j];
                    averagePrices[j] = tempDouble;

                }
            }
        }
    }

}
 `}
                </code>
            </pre>

        </main>
    )
}

export default Spring2021Question7