# -*- coding: utf-8 -*-
"""
Created on Sun Aug 27 16:27:26 2023

@author: Kaushik
"""

import streamlit as st

# Initialize the task list if it doesn't exist in the session state
if 'tasks' not in st.session_state:
    st.session_state.tasks = []

# Function to add a task to the list
def add_task(task):
    st.session_state.tasks.append(task)
    st.success("Task added successfully!")

# Function to mark a task as completed
def complete_task(task_index):
    if task_index < len(st.session_state.tasks):
        completed_task = st.session_state.tasks.pop(task_index)
        st.success(f"Task '{completed_task}' marked as completed!")
    else:
        st.warning("Invalid task index.")

# Streamlit UI
st.title("To-Do List App")
menu = st.sidebar.selectbox("Menu", ["Add Task", "Show Tasks", "Mark as Completed"])

if menu == "Add Task":
    new_task = st.text_input("Enter a new task:")
    if st.button("Add Task", key="add_task") and new_task:
        add_task(new_task)

elif menu == "Show Tasks":
    st.subheader("Tasks:")
    if not st.session_state.tasks:
        st.info("No tasks in the list.")
    else:
        for i, task in enumerate(st.session_state.tasks, start=1):
            st.write(f"{i}. {task}")

elif menu == "Mark as Completed":
    st.subheader("Tasks:")
    if not st.session_state.tasks:
        st.info("No tasks in the list.")
    else:
        for i, task in enumerate(st.session_state.tasks, start=1):
            if st.button(f"Complete Task {i}", key=f"complete_{i}"):
                complete_task(i - 1)
