package com.SMS.StudentManagementSystem;

import java.io.*;
import java.util.*;

class Student {
    private String name;
    private int numSubjects;
    private List<Integer> marksList;

    public Student(String name, int numSubjects) {
        this.name = name;
        this.numSubjects = numSubjects;
        marksList = new ArrayList<>();
    }

    public void addMarks(int marks) {
        marksList.add(marks);
    }

    public String getName() {
        return name;
    }

    public int getNumSubjects() {
        return numSubjects;
    }

    public List<Integer> getMarksList() {
        return marksList;
    }
}

public class App {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        List<Student> students = new ArrayList<>();
        Map<String, Double> gradeBoundaries = new HashMap<>();
        String fileName = "student_results.txt";

        // Initialize default grade boundaries
        gradeBoundaries.put("A+", 90.0);
        gradeBoundaries.put("A", 80.0);
        gradeBoundaries.put("B", 70.0);
        gradeBoundaries.put("C", 60.0);
        gradeBoundaries.put("D", 50.0);
        gradeBoundaries.put("F", 0.0);

        // Load previous results from a file if available
        loadPreviousResults(fileName, students);

        while (true) {
            System.out.print("Enter student's name (or type 'exit' to finish): ");
            String studentName = scanner.nextLine();

            if (studentName.equalsIgnoreCase("exit")) {
                break; // Exit input loop
            }

            System.out.println("Enter the number of subjects for " + studentName + ":");
            int numSubjects = scanner.nextInt();
            scanner.nextLine(); // Consume the newline character

            Student student = new Student(studentName, numSubjects);

            for (int i = 1; i <= numSubjects; i++) {
                while (true) {
                    System.out.print("Enter marks for Subject " + i + ": ");
                    int marks = scanner.nextInt();

                    if (marks >= 0 && marks <= 100) {
                        student.addMarks(marks);
                        break; // Exit the loop if valid marks are entered
                    } else {
                        System.out.println("Invalid marks. Marks should be between 0 and 100. Please re-enter.");
                    }
                }
            }

            students.add(student);
            scanner.nextLine(); // Consume the newline character
        }

        // Calculate and display results for each student
        for (Student student : students) {
            System.out.println("\nStudent Name: " + student.getName());
            System.out.println("Number of Subjects: " + student.getNumSubjects());

            int totalMarks = student.getMarksList().stream().mapToInt(Integer::intValue).sum();
            System.out.println("Total Marks: " + totalMarks);

            double averagePercentage = (double) totalMarks / (student.getNumSubjects() * 100) * 100;
            System.out.println("Average Percentage: " + averagePercentage + "%");

            // Grade Calculation
            String grade = calculateGrade(averagePercentage, gradeBoundaries);
            System.out.println("Grade: " + grade);
        }

        // Display additional statistics
        if (!students.isEmpty()) {
            displayStatistics(students);
            // Save results to a file
            saveResultsToFile(fileName, students);
        }

        scanner.close();
    }

    // Calculate grade based on grade boundaries
    private static String calculateGrade(double averagePercentage, Map<String, Double> gradeBoundaries) {
        for (Map.Entry<String, Double> entry : gradeBoundaries.entrySet()) {
            if (averagePercentage >= entry.getValue()) {
                return entry.getKey();
            }
        }
        return "F"; // Default grade if no boundaries match
    }

    // Display statistics: Highest, Lowest, and Average Marks
    private static void displayStatistics(List<Student> students) {
        int highestMarks = Integer.MIN_VALUE;
        int lowestMarks = Integer.MAX_VALUE;
        int totalMarks = 0;

        for (Student student : students) {
            int studentTotalMarks = student.getMarksList().stream().mapToInt(Integer::intValue).sum();
            totalMarks += studentTotalMarks;

            highestMarks = Math.max(highestMarks, studentTotalMarks);
            lowestMarks = Math.min(lowestMarks, studentTotalMarks);
        }

        double averageMarks = (double) totalMarks / students.size();

        System.out.println("\nStatistics:");
        System.out.println("Highest Marks: " + highestMarks);
        System.out.println("Lowest Marks: " + lowestMarks);
        System.out.println("Average Marks: " + averageMarks);
    }

    // Save student results to a file
    private static void saveResultsToFile(String fileName, List<Student> students) {
        try (PrintWriter writer = new PrintWriter(new FileWriter(fileName))) {
            for (Student student : students) {
                writer.println("Name: " + student.getName());
                writer.println("Number of Subjects: " + student.getNumSubjects());
                writer.print("Marks: ");
                for (int marks : student.getMarksList()) {
                    writer.print(marks + " ");
                }
                writer.println();
                writer.println();
            }
            System.out.println("Results saved to " + fileName);
        } catch (IOException e) {
            System.err.println("Error saving results to " + fileName);
        }
    }

    // Load previous results from a file if available
    private static void loadPreviousResults(String fileName, List<Student> students) {
        try (BufferedReader reader = new BufferedReader(new FileReader(fileName))) {
            String line;
            Student currentStudent = null;

            while ((line = reader.readLine()) != null) {
                if (line.startsWith("Name: ")) {
                    String name = line.substring("Name: ".length());
                    int numSubjects = Integer.parseInt(reader.readLine().substring("Number of Subjects: ".length()));
                    currentStudent = new Student(name, numSubjects);
                    students.add(currentStudent);
                } else if (line.startsWith("Marks: ")) {
                    if (currentStudent != null) {
                        String[] marksArray = line.substring("Marks: ".length()).split(" ");
                        for (String marksStr : marksArray) {
                            currentStudent.addMarks(Integer.parseInt(marksStr));
                        }
                    }
                }
            }
        } catch (IOException e) {
            // Ignore if the file does not exist or cannot be read
        }
    }
}
