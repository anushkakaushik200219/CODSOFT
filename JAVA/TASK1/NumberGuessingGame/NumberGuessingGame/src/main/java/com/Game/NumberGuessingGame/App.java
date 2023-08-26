package com.Game.NumberGuessingGame; // Update this line to match your package structure

import java.util.Random;
import java.util.Scanner;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;

// Define a class to represent high scores
class HighScore {
    private String playerName;
    private int score; // Score can be based on rounds won or fewest attempts

    public HighScore(String playerName, int score) {
        this.playerName = playerName;
        this.score = score;
    }

    public String getPlayerName() {
        return playerName;
    }

    public int getScore() {
        return score;
    }
}

// Enum for difficulty levels
enum Difficulty {
    EASY(1, 10, 5),    // Range: 1-10, Max Attempts: 5
    MEDIUM(1, 50, 10), // Range: 1-50, Max Attempts: 10
    HARD(1, 100, 15);  // Range: 1-100, Max Attempts: 15

    private final int minRange;
    private final int maxRange;
    private final int maxAttempts;

    Difficulty(int minRange, int maxRange, int maxAttempts) {
        this.minRange = minRange;
        this.maxRange = maxRange;
        this.maxAttempts = maxAttempts;
    }

    public int getMinRange() {
        return minRange;
    }

    public int getMaxRange() {
        return maxRange;
    }

    public int getMaxAttempts() {
        return maxAttempts;
    }
}

public class App {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        Random random = new Random();

        List<HighScore> highScores = new ArrayList<>();

        System.out.println("Welcome to the Number Guessing Game!");
        System.out.println("Select a difficulty level:");
        System.out.println("1. Easy");
        System.out.println("2. Medium");
        System.out.println("3. Hard");

        int choice = 0; // Initialize the choice variable

        // Use a try-catch block to handle InputMismatchException
        try {
            choice = scanner.nextInt();
        } catch (java.util.InputMismatchException e) {
            System.out.println("Invalid input. Please enter a valid choice (1, 2, or 3).");
            scanner.close();
            return; // Exit the program
        }

        Difficulty difficulty;

        switch (choice) {
            case 1:
                difficulty = Difficulty.EASY;
                break;
            case 2:
                difficulty = Difficulty.MEDIUM;
                break;
            case 3:
                difficulty = Difficulty.HARD;
                break;
            default:
                System.out.println("Invalid choice. Exiting the game.");
                scanner.close();
                return; // Exit the program
        }

        int min = difficulty.getMinRange();
        int max = difficulty.getMaxRange();
        int maxAttempts = difficulty.getMaxAttempts();
        int rounds = 0;

        System.out.println("You selected " + difficulty.name() + " difficulty.");

        boolean playAgain = true;

        while (playAgain) {
            int randomNumber = random.nextInt(max - min + 1) + min;
            int attempts = 0;

            System.out.println("I've selected a random number between " + min + " and " + max + ". Try to guess it!");

            while (attempts < maxAttempts) {
                System.out.print("Enter your guess (attempt " + (attempts + 1) + "): ");
                int userGuess = scanner.nextInt();
                attempts++;

                if (userGuess == randomNumber) {
                    System.out.println("Congratulations! You've guessed the number " + randomNumber + " correctly in " + attempts + " attempts.");
                    rounds++;
                    break; // Exit the loop if the guess is correct
                } else if (userGuess < randomNumber) {
                    System.out.println("Too low. Try again.");
                } else {
                    System.out.println("Too high. Try again.");
                }
            }

            if (attempts >= maxAttempts) {
                System.out.println("Sorry, you've reached the maximum number of attempts. The correct number was " + randomNumber);
            }

            System.out.print("Do you want to play again? (yes/no): ");
            String playChoice = scanner.next().toLowerCase();
            playAgain = playChoice.equals("yes") || playChoice.equals("y");
        }

        System.out.println("Game over! You won " + rounds + " round(s).");

        // Rest of your code for updating high scores, displaying high scores, etc.

        scanner.close();
    }
}
