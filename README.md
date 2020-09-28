
## Front-end Coding Challenge

The task is to implement a small webapp that will list the most starred Github repos that were created in the last 30 days. You'll be fetching the sorted JSON data directly from the Github API

## Usage

`git clone https://github.com/mostafazouhair/Gemography_Challenge_React.git`
`cd challenge-react`
After clonning this repository to your local machine, run `npm install` to pull all app dependencies inside the root folder then run `npm start` to see the result.


## Libraries used

create-react-app
bootstrap
dayjs: used in order to manipulate dates in the repositories cards.
waypoint: used to create the infinite scroll

## Implemented features

o As a User I should be able to list the most starred Github repos that were created in the last 30 days.
o As a User I should see the results as a list. One repository per row.
o As a User I should be able to see for each repo/row the following details :
  - Repository name
  - Repository description
  - Number of stars for the repo.
  - Number of issues for the repo.
  - Username and avatar of the owner.
o As a User I should be able to keep scrolling and new results should appear (pagination).

## Other

Check my ohter project Covid19 Data Fetching From API ReactJS:

  - GithubUrl: https://github.com/mostafazouhair/covidDataWithReact
  - DeployUrlr: https://coviddatawithreact.herokuapp.com/
