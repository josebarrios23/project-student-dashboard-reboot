# Student Dashboard Project

The instructors in your school need a dashboard in order to track the data of each student from their many cohorts.

For this project, you will work with one or more other developers to create a product that makes use of the
- [react-student-dashboard-reboot-server](https://github.com/10-3-pursuit/project-student-dashboard-reboot-server) API. This server will serve locally as your backend. 
- `fork` and `clone` this repo to act as your frontend.
- create an `Instructions.md` file in the root folder.
- copy these instructions in the `README.md` into the `Instructions.md` file.
- place the instructions for Your Group's specific application in the `README.md` file.

Your group will collaboratively build a dashboard based on specifications given below, plus add any additional features chosen by your group 

### Completion

To complete this project, you will need to build a React application that meets the following specifications.

#### Overall requirements

1. Your front-end repository should have a `readme.md` file with setup instructions for both the front and back ends of the application.

#### Front-end feature specifications

To complete the front-end application, you will need to build a React application that demonstrates the following features.

### Part 1 STATIC

1. A Header should show the title of Student Dashboard in an `h1` tag.

1. An `About` link should be on the application. This will lead you to a view that displays each team member's name, Github, and a fun fact

### Part 2 INDEX

1. A **Student list count** should be included either in the `Aside` or the `Main` portion of the application. It displays the number of students in the displayed cohort

1. It is optional how you choose to layout your app, but your page should always show a `Header`, an `Aside` that will display a list of seasonal dates, and a `Main` section.

1. **Student list.** The `Home` page should show a list of all students. Each student should be shown with the following details listed:
   - Full Name:
      - Each first letter of the student's name should be uppercase.
      - All of the following letters in the name should be lowercase.
   - Username
   - Email address, 
   user readable birthday, showing month name, day, year, (e.g. November 7, 2022), and profile photo.
   - **On-track status.** Each student should also be marked as either "On Track" or "Off Track." A student is "On Track" if **ALL** of the following is true about them:
      1.  The student has a resume certification (e.g. `certifications.resume` is `true`).
      1.  The student has a LinkedIn certification (e.g. `certifications.linkedin` is `true`).
      1.  The student has a GitHub certification (e.g. `certifications.github` is `true`).
      1.  The student has a mock interview certification (e.g. `certifications.mockInterview` is `true`).
      1.  The student has a current CodeWars score that is over 600.

### Part 3 SHOW

**Additional Student Details Section.** A User can click on a student card and they will be routed to a detailed view of the single student. This feature should include the following detailed information which you will pull and manipulate from the data:

   1. A user still sees all of the original information that was displayed in the Index Card for the student. Details listed above.
   
   1. **Codewars Stats Heading**
      - A user can see the current total
      - A user can see last week's total
      - A user can see the goal total
      - A user can see the `Percent of Goal Achieved` using properly formatted percentages

   1. **Scores Heading** 
      - A user can see properly formatted percentages for assignments
      - A user can see properly formatted percentages for projects
      - A user can see properly formatted percentages for assignments

   1. **Certifications Heading**
   - Includes whether or not the student has received certain certifications. Instead of showing "true" or "false" for certifications, show an emoji or icon depending on the certification status.

### PART 4 1-on-1 NOTES
   **1-on-1 section.** Create a section on the single student details view that contains information about a student's 1-on-1 with an instructor. To complete this feature, the following should be true:
   - The section should include a title. (e.g. "1-on-1 Notes".)
   - The section should include a form :
      - input for instructor's name
      - input for instructor's note
      - a label for each input for accessibility
      - a submit button
   -  The form can be filled out and submitted. 
   - On submit, the inputs are cleared.
   - The section should show a list of all notes that have been added.
   - While the notes will not persist if the page is loaded, the new notes _should_ be found if you interact with a new cohort (i.e. Winter 2025 cohort) in the cohort list and then find the student.

### PART 5 ASIDE LIST
1. The `Aside` List should continuously be shown in the page view
1. **Unique list of cohorts.** The Aside should include a unique list of cohorts on the page. This list of cohorts should be human-readable (e.g. "Winter 2026" instead of "Winter2026") and ordered by both year and season combined.
1. **Clickable cohorts.** When one of the cohorts is clicked from the cohort list, the students shown on the page should change so that only those students in the cohort are displayed.
1. **Cohort title change.** When one of the cohorts is clicked from the cohort list, a heading on the page should change to display what cohort is being shown. (i.e. 'All Students' title should change to 'Winter 2025' title when that title is clicked)
1. The **Student list count** should also update to reflect the number of students in the chosen cohort.

### PART 6 STRETCH GOALS

This section of the project measures your group's ability to go above and beyond in creating your project. To score points in this section, you should incorporate a feature, technology, or skill not explicitly required by the project instructions.

When you submit your pull request, _make sure to include a description of any stretch goals you implemented._ You may choose from the list below or come up with features or tasks that are more relevant to your specific implementation of the project.

- Create a button in the single student details view where you can `Unenroll` a student ('Delete'). Add functionality to delete that student from your backend server.
- Create a form that allows you to update a student's details. Make sure all of your calculations coordinate with that update.
- Use `PUT` to update the notes key in the data when adding a note for the student. In the server data, each note has a `comment` key and a  `commenter` key.
- Create a search bar to search for students based on your chosen criteria.
- Include a count for the number of notes added to each student, which is updated when a new note is added.
- Allow for the user to click a button and the view of students changes to be just a list of names, or just a grid of profile images.
- Implement a "dark mode" version of the website, which changes the CSS on click.
- Add color-coding or segmentation to the cohort list, so that each year is visually distinct from one another.

Points will be allocated in this section at the discretion of the instructor.

## Existing code

This project includes some existing code that will help you complete the features below.

- [`Data Shape`](./dataView.md): This file contains the shape of each object. The data you will be working with is an array of objects. Your data will consist of as many as 90 students. Some important key's include:
  - `id`: A unique ID associated with each student.
  - `profilePhoto`: A randomly generated photo from [Random users](https://xsgames.co/randomusers/).
  - `cohort`: An object represents which "cohort" the student is in.

## Advice

When building a project, there are additional skills to be gained alongside the tech you are learning. In this project, your ability to do the following will be tested:

- To plan out your approach with your team before coding
- To break large features into small, testable tasks that you can build
- To synthesize multiple skills you've learned at once
- To learn new skills and syntax on your own
- To manage your time and stay focused on the important tasks
- To check in consistantly with your time to make sure you are building the same application together
- To ask for help

**Without a good strategy, programming can be very difficult**

### Suggested process

## PROCESS

Use all of the tools you have been given to create a plan of action for your team. Trello, Github, Ideation Board, etc.

Continue to slowly iterate, making small changes to complete each feature. Commit often, so that you can always undo your changes if you break something big.

## Example

The following is an example of the application. These images show the application completed at different stages of the project and highlights different parts of the project to make it clear what is being discussed.

### Landing page

![landing page](./instruction-assets/landing.png)

### Cohort list

![cohort list](./instruction-assets/cohort-list.png)

### Cohort list on click

![interactive cohort list](./instruction-assets/interactive-cohort-list.png)

### Student list with "On-track"

![on-track designation](./instruction-assets/improved-student-list.png)

### Student details section

![closed](./instruction-assets/student-details-closed.png)

![opened](./instruction-assets/student-details-opened.png)

### 1-on-1 section

![one-on-one section](./instruction-assets/one-on-one-section.png)
