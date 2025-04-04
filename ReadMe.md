This is the repository for exam-group-K-api.

Activity Quiz 4 SF

Create a New Repository on GitHub :
Name it exam-group-<your_group>-api.
Add a README & app.js file and initialize with a .gitignore for Node.js.
Include a routes/ folder with a placeholder route (e.g., GET /exam-group that returns { "message": "Group <your_group> API" }).
Clone the Repository Locally
Exam Tasks

Task 1: Branching and Feature Implementation

Each member

Creates a branch
Implements a specific feature
Member 1: Add GET /exams endpoint (returns a hardcoded list of users).
Member 2: Add POST /exams endpoint (adds a new exam to an array).
Member 3: Add Update /exams:id (e.g., update an exam).
Commits and pushes changes
git commit -m "feat: add GET /exams endpoint"  
git push origin <branch-name>
 

Task 2: Pull Requests and Conflict Resolution

Create PRs
Members create PRs via GitHub to merge their branches into main.
Leader reviews PRs but delays approval to simulate conflicts.
Simulate a Conflict :
Leader will modify a shared file (e.g., app.js) in the main branch (e.g., add a comment or change a route).
Ask a member to pull the latest main and resolve the conflict
 

Task 3: API Testing and Final Merge

Test the API
Members test all endpoints
Leader Merges PRs
Leader ensures all PRs are merged into main and the API works as expected.
 

Task 4: Documentation and Submission

Update the README.md with:
List of contributors and their features.
API documentation (endpoints, request/response examples).
Submit the GitHub repository link.