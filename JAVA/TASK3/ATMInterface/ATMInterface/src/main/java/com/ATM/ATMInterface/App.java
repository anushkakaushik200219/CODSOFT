package com.ATM.ATMInterface;

import java.util.*;

class BankAccount {
    private String accountNumber;
    private double balance;
    private List<String> transactionHistory;

    public BankAccount(String accountNumber, double initialBalance) {
        this.accountNumber = accountNumber;
        this.balance = initialBalance;
        this.transactionHistory = new ArrayList<>();
    }

    public String getAccountNumber() {
        return accountNumber;
    }

    public double getBalance() {
        return balance;
    }

    public List<String> getTransactionHistory() {
        return transactionHistory;
    }

    public void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
            String transaction = "Deposited $" + amount;
            transactionHistory.add(transaction);
            System.out.println(transaction);
        } else {
            System.out.println("Invalid deposit amount.");
        }
    }

    public boolean withdraw(double amount) {
        if (amount > 0 && amount <= balance) {
            balance -= amount;
            String transaction = "Withdrawn $" + amount;
            transactionHistory.add(transaction);
            System.out.println(transaction);
            return true;
        } else {
            System.out.println("Invalid withdrawal amount or insufficient balance.");
            return false;
        }
    }
}

public class App {
    private Map<String, BankAccount> accounts;
    private BankAccount currentAccount;
    private Scanner scanner;

    public App() {
        this.accounts = new HashMap<>();
        this.scanner = new Scanner(System.in);
    }

    public void createAccount(String accountNumber, double initialBalance) {
        if (!accounts.containsKey(accountNumber)) {
            BankAccount account = new BankAccount(accountNumber, initialBalance);
            accounts.put(accountNumber, account);
            System.out.println("Account created successfully.");
        } else {
            System.out.println("Account already exists with the same account number.");
        }
    }

    public void login(String accountNumber) {
        if (accounts.containsKey(accountNumber)) {
            currentAccount = accounts.get(accountNumber);
            System.out.println("Logged in successfully.");
            displayMenu();
        } else {
            System.out.println("Account not found.");
        }
    }

    public void displayMenu() {
        while (true) {
            System.out.println("\nATM Menu:");
            System.out.println("1. Check Balance");
            System.out.println("2. Deposit");
            System.out.println("3. Withdraw");
            System.out.println("4. View Transaction History");
            System.out.println("5. Logout");

            System.out.print("Select an option: ");
            int choice = scanner.nextInt();

            switch (choice) {
                case 1:
                    checkBalance();
                    break;
                case 2:
                    deposit();
                    break;
                case 3:
                    withdraw();
                    break;
                case 4:
                    viewTransactionHistory();
                    break;
                case 5:
                    logout();
                    return;
                default:
                    System.out.println("Invalid option. Please select a valid option.");
            }
        }
    }

    private void checkBalance() {
        System.out.println("Current Balance: $" + currentAccount.getBalance());
    }

    private void deposit() {
        System.out.print("Enter deposit amount: $");
        double depositAmount = scanner.nextDouble();
        currentAccount.deposit(depositAmount);
    }

    private void withdraw() {
        System.out.print("Enter withdrawal amount: $");
        double withdrawalAmount = scanner.nextDouble();
        currentAccount.withdraw(withdrawalAmount);
    }

    private void viewTransactionHistory() {
        List<String> transactions = currentAccount.getTransactionHistory();
        if (!transactions.isEmpty()) {
            System.out.println("\nTransaction History:");
            for (String transaction : transactions) {
                System.out.println(transaction);
            }
        } else {
            System.out.println("No transactions to display.");
        }
    }

    private void logout() {
        currentAccount = null;
        System.out.println("Logged out successfully.");
    }

    public static void main(String[] args) {
        App atm = new App();
        atm.createAccount("12345", 1000.0);
        atm.createAccount("67890", 500.0);

        Scanner scanner = new Scanner(System.in);

        while (true) {
            System.out.print("Enter account number to log in (or type 'exit' to quit): ");
            String input = scanner.nextLine();

            if (input.equalsIgnoreCase("exit")) {
                break;
            } else {
                atm.login(input);
            }
        }

        System.out.println("Thank you for using the ATM!");
        scanner.close();
    }
}

