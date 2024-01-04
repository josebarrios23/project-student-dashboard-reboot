# Student Dashboard Project

## Overview

Create a dashboard for instructors to track student data across various cohorts using the provided API and repository.

## Project Setup

- **Backend API**: Use [react-student-dashboard-reboot-server](https://github.com/10-3-pursuit/project-student-dashboard-reboot-server).
- **Frontend Repository**: Fork and clone `project-student-dashboard-reboot`.
- **Documentation**: 
  - Create `Instructions.md` in the root folder.
  - Copy these instructions to `Instructions.md`.
  - Place group-specific application instructions in `README.md`.

## Completion Requirements

### Overall Requirements

1. **Documentation**: Include `readme.md` with setup instructions for front and back ends.

### Front-end Feature Specifications

#### Part 1: Static

1. **Header**: Display "Student Dashboard" in an `h1` tag.
2. **About Link**: Include link for team member details (name, GitHub, fun fact).

#### Part 2: Index

1. **Student List Count**: Display count of students in the current cohort.
2. **Layout Requirements**: Always show `Header`, `Aside` (list of seasonal dates), and `Main` section.
3. **Student List**:
   - Display all students with:
     - Full Name (First letter uppercase, rest lowercase).
     - Username.
     - Email address.
     - Formatted birthday (e.g., November 7, 2022).
     - Profile photo.
   - **On-track Status**: Mark as "On Track" if all conditions met:
     - Resume certification (`certifications.resume` is `true`).
     - LinkedIn certification (`certifications.linkedin` is `true`).
     - GitHub certification (`certifications.github` is `true`).
     - Mock interview certification (`certifications.mockInterview` is `true`).
     - CodeWars score over 600.

#### Part 3: Show

1. **Additional Student Details**:
   - All Index Card information.
   - Codewars Stats: Current total, last week's total, goal total, and percent of goal achieved.
   - Scores: Formatted percentages for assignments, projects, and assessments.
   - Certifications: Display with icons or emojis instead of true/false.

#### Part 4: 1-on-1 Notes

1. **1-on-1 Section**:
   - Title (e.g., "1-on-1 Notes").
   - Form with inputs for instructor's name and note, labels for accessibility, and submit button.
   - Clear inputs on submit.
   - Display list of added notes.

#### Part 5: Aside List

1. **Cohort Navigation**:
   - Display unique, human-readable list of cohorts (e.g., "Winter 2026").
   - Clickable cohorts to filter students displayed.
   - Heading changes to show selected cohort.
   - Update Student list count for selected cohort.

#### Part 6: Stretch Goals

1. **Additional Features**: Implement optional features (e.g., unenroll student, update student details, search bar, dark mode).

## Existing Code

- **Data Shape**: Refer to [`DataShape.md`](./dataView.md) for object structure.

## Advice and Suggested Process

- **Strategy**: Plan with team, divide tasks, learn new skills, manage time, communicate consistently.
- **Data Handling**: Study and manipulate data carefully.
- **Development Approach**: Use planning tools, build features iteratively, commit often.

