# -*- coding: utf-8 -*-
"""
Created on Sun Aug 27 17:15:39 2023

@author: Kaushik
"""
import streamlit as st
import random

# Function to determine the winner
def determine_winner(user_choice, computer_choice):
    if user_choice == computer_choice:
        return "It's a tie!"
    elif (
        (user_choice == 1 and computer_choice == 3) or
        (user_choice == 2 and computer_choice == 1) or
        (user_choice == 3 and computer_choice == 2)
    ):
        return "You win!"
    else:
        return "Computer wins!"

# Streamlit app title
st.title("Rock-Paper-Scissors Game")

# Input: Number of rounds
num_rounds = st.number_input("Number of Rounds", min_value=1, step=1, value=1)

user_score = 0
computer_score = 0

# Play the specified number of rounds
for round_number in range(num_rounds):
    st.header(f"Round {round_number + 1} of {num_rounds}")
    
    # User selects their move
    user_choice = st.selectbox(f"Select Your Move (Round {round_number + 1})", ("Select", "Rock", "Paper", "Scissors"))
    
    # Ensure the user makes an active selection
    if user_choice == "Select":
        st.warning("Please select a move before submitting.")
        continue
    
    # Convert the user's choice to an integer (1 for Rock, 2 for Paper, 3 for Scissors)
    if user_choice == "Rock":
        user_choice = 1
    elif user_choice == "Paper":
        user_choice = 2
    else:
        user_choice = 3
    
    # Computer makes a random choice
    computer_choice = random.randint(1, 3)

    st.write(f"Your choice: {user_choice} ({'Rock' if user_choice == 1 else ('Paper' if user_choice == 2 else 'Scissors')})")
    st.write(f"Computer's choice: {computer_choice} ({'Rock' if computer_choice == 1 else ('Paper' if computer_choice == 2 else 'Scissors')})")

    result = determine_winner(user_choice, computer_choice)
    st.write(result)

    if result == "You win!":
        user_score += 1
    elif result == "Computer wins!":
        computer_score += 1

# Game summary
st.header("Game Summary")
st.write(f"Your Final Score: {user_score}")
st.write(f"Computer's Final Score: {computer_score}")
