// Final Project Workspace


/***************************************************************
* Name         : passwordCracker
* Author       : Zach Schwab
* Created      : 11/23/2025
* Course       : CIS 125
* Version      : 1.0
* OS           : Windows 11
* IDE          : Visual Studio Code
* Copyright    : This is my own original work based on
*                      specifications issued by our instructor
* Description  : This program cracks a password
*                      Input : password length and password
*                      Output: cracked password
* Academic Honesty: I attest that this is my original work.
* I have not used unauthorized source code, either modified or
* unmodified. I have not given other fellow student(s) access
* to my program.        
***************************************************************/


import java.util.Scanner;

public class Main {
    public static void main(String[] args) {

        Scanner scnr = new Scanner(System.in); // input

        // int[] target = {};
        int[] chars = {0, 1, 2, 3, 4, 5, 6, 7 , 8, 9};
        int[] guess = {};

        // method calls
        information();
        Wellcome(scnr);
        //Guessing(target, chars, guess);

    } // end main method

    public static void information() {
        System.out.println("Greetings young programmer! This program will take a password input from the user... you! And guess it with magic!");

    } // end info

    // method greets the user and gets intial input from user
    public static int[] Wellcome(Scanner scnr) {
        System.out.println("Enter your password length: ");
  
        int inputLength = scnr.nextInt(); // target array length 

        int[] target = new int[inputLength]; // array to store the target password

        String inputPass = scnr.nextLine();
        while (inputPass.length() != inputLength) {
            System.out.println("Enter your password to be cracked; didgets (0-9) & must be the same length: ");
            inputPass = scnr.nextLine();
        } // end while

        for (int i = 0; i < inputPass.length(); i++) { // loop sends the password to the target array 
            target[i] = Character.getNumericValue(inputPass.charAt(i));
            System.out.println(target[i]);
        } // end for 
         

        System.out.println("step 1"); //debugging

        return target;

    } // end Wellcome


    // method cracks the password
    public static void Guessing(int[] target, int[] chars, int[] guess) {
        
        for (int i = 0; i < target.length; i++) {
            for (int j = 0; j < chars.length; j++) {
                if (chars[j] == target[i]) {
                    guess[i] = j;
                    System.out.println(guess[i]);
                }
            }
        }
    } // end Guessing



    public static void output() {

    }


} // end Main class