# -*- coding: utf-8 -*-
"""
Created on Sun Aug 27 18:16:47 2023

@author: Kaushik
"""
import streamlit as st

# Define quiz questions and answers
quiz_data = [
    {
        'question': 'What is the capital of France?',
        'options': ['Select', 'Berlin', 'Madrid', 'Paris', 'Rome'],
        'correct_answer': 'Paris'
    },
    {
        'question': 'Which planet is known as the Red Planet?',
        'options': ['Select', 'Mars', 'Earth', 'Venus', 'Jupiter'],
        'correct_answer': 'Mars'
    },
    {
        'question': 'What is the largest mammal?',
        'options': ['Select', 'Giraffe', 'Elephant', 'Whale', 'Kangaroo'],
        'correct_answer': 'Whale'
    }
]

# Initialize score
score = 0

# Streamlit app title and welcome message
st.title("Quiz Game")
st.write("Welcome to the Quiz Game! Test your knowledge.")

# Initialize form
with st.form("quiz_form"):
    for i, question_data in enumerate(quiz_data, start=1):
        st.header(f"Question {i}")
        st.write(question_data['question'])
        user_answer = st.selectbox(f"Select an answer for Question {i}:", question_data['options'], key=f'question_{i}')

        if user_answer != 'Select':
            if user_answer == question_data['correct_answer']:
                st.success("Correct!")
                score += 1
            else:
                st.error("Incorrect!")
                st.info(f"The correct answer is: {question_data['correct_answer']}")
        else:
            st.warning("Please select an answer before submitting.")

    submit_button = st.form_submit_button("Submit")

# Display final results
if submit_button:
    st.header("Quiz Complete")
    st.write(f"Your Final Score: {score}/{len(quiz_data)}")
    st.write("Well done!")

st.sidebar.write("Made with Streamlit")
