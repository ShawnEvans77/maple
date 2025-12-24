import './App.css'
import Solution from './Solution'

function Spring2021Question7() {

    return (

        <Solution
        
        name="spring 2021 question 2 🥞"

        question={
        <>
        Write Java code to read strings of lower-case letters from the keyboard and count the
        number of vowels in each word. (vowels are a,e,i,o and u). When all strings have been read in,
        print the string that has the largest number of vowels (duplicates included) and how many vowels
        were in the string. When more than one string has the greatest number of vowels, print the first
        string found with that number. For example, with input of she groceries yourselves here
        radio, the correct answer would be: groceries – 4 vowels.
        </>
        }

        code = {
`import java.util.Scanner;
public class Spring2021Question2 {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);
        String mostVowelsString = "";
        int highestVowelCount = 0;

        System.out.println("Enter some words: ");

        while (sc.hasNext()) {

            String word = sc.next();
            int numVowels = 0;

            for (int i = 0; i < word.length(); i++) {
                char letter = word.charAt(i);

                if (letter == 'a' || letter == 'e' || letter == 'i' || letter == 'o' || letter == 'u') {
                    numVowels++;
                }
            }

            if (highestVowelCount < numVowels) {
                highestVowelCount = numVowels;
                mostVowelsString = word;
            }

        }

        System.out.println();
        System.out.printf("%s - %d vowels\\n", mostVowelsString, highestVowelCount);

        sc.close();
    }

}`}

    />
        
    )
}

export default Spring2021Question7