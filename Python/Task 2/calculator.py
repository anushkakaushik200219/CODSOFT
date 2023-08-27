# -*- coding: utf-8 -*-
"""
Created on Sun Aug 27 17:00:50 2023

@author: Kaushik
"""

import streamlit as st

# Function to perform addition
def add(x, y):
    return x + y

# Function to perform subtraction
def subtract(x, y):
    return x - y

# Function to perform multiplication
def multiply(x, y):
    return x * y

# Function to perform division
def divide(x, y):
    if y == 0:
        return "Division by zero is not allowed."
    return x / y

st.sidebar.title("Calculator Menu")
operation = st.sidebar.radio("Select Operation", ("Addition", "Subtraction", "Multiplication", "Division"))

st.title("Simple Calculator")

num1 = st.number_input("Enter first number")
num2 = st.number_input("Enter second number")

if st.button("Calculate"):
    if operation == "Addition":
        result = add(num1, num2)
    elif operation == "Subtraction":
        result = subtract(num1, num2)
    elif operation == "Multiplication":
        result = multiply(num1, num2)
    elif operation == "Division":
        result = divide(num1, num2)
    
    st.write(f"Result of {operation} = {result}")
