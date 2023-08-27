# -*- coding: utf-8 -*-
"""
Created on Sun Aug 27 17:09:41 2023

@author: Kaushik
"""

import streamlit as st
import random
import string

# Function to generate a random password
def generate_password(length, use_lowercase, use_uppercase, use_digits, use_special_chars):
    charset = ""
    if use_lowercase:
        charset += string.ascii_lowercase
    if use_uppercase:
        charset += string.ascii_uppercase
    if use_digits:
        charset += string.digits
    if use_special_chars:
        charset += string.punctuation

    if len(charset) == 0:
        return "Please select at least one character type."

    password = ''.join(random.choice(charset) for _ in range(length))
    return password

# Streamlit sidebar with options
st.sidebar.title("Password Generator")
length = st.sidebar.slider("Password Length", 4, 50, 12)
use_lowercase = st.sidebar.checkbox("Use Lowercase Letters")
use_uppercase = st.sidebar.checkbox("Use Uppercase Letters")
use_digits = st.sidebar.checkbox("Use Digits")
use_special_chars = st.sidebar.checkbox("Use Special Characters")

if st.sidebar.button("Generate Password"):
    password = generate_password(length, use_lowercase, use_uppercase, use_digits, use_special_chars)
    st.write(f"Generated Password: {password}")
