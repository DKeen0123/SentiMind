# SentiMind

[Daniel Keen](https://github.com/DKeen0123) || [Marcus Gardiner](https://github.com/marcusfgardiner) || [Carlos Trapet](https://github.com/CarlosTrapet) || [Stephen Tilley](https://github.com/stilley85)

A twitter sentiment analysis web app based on a hashtag (using machine learning to assess sentiment)

You can find out what the world thinks about a topic of your choice on [sentimind.co.uk](http://sentimind.co.uk/).
Or just check the world's general sentiment on kittens and rainbows.

# Warning

### Local host currently hardcoded in /hello route
### Deployment: can we deploy in one server and remove CORS from production enviornment?

## Tech Stack

#### Backend/Frontend
* Python/Flask
* React

#### Testing
* Jest/Enzyme
* Pytest

#### Deployment
* Docker
* AWS

#### Libraries
* Tweepy -- to make calls to the Twitter API
* NLTK -- a toolkit used for Natural Language Processing

## How to run locally

In order to run the server, you will need to [download python](https://www.python.org/downloads/) and then run: `pip3 install pipenv`

In the terminal:

1. clone the repository
2. From the root folder of the directory `pipenv install requests` to download the python dependencies
3. `pipenv shell`
4. `cd frontend`
5. `npm install` to download the react/npm dependencies

To run the backend server:

1. `cd backend`
2. `python3 server.py`

To run the frontend server:

1. `cd frontend`
2. `npm start`

## Tests

for Testing our ReactJS front end we used Jest with enzyme. To run the tests:

1. `cd fullstack_template/static`
2. `npm run test`
To run python tests:
1. Ensure you have run 'pipenv install requests' and 'npm install' as above to download dependencies
2. 'pipenv shell' to set up the python environment
3. 'nosetests' to run tests

## Process

### Planning

> Give me six hours to chop down a tree and I will spend the first four sharpening the axe.

-Abraham Lincoln

At the start of the week, a good while was spent planning our approach to the task at hand. Part of this was deciding on exactly what the task was.

We knew we would approach this task in an agile way, building an MVP and iterating on it, and discussing regularly which new features were important to us. But in order to prioritise and understand the core benefits of what we were building, we discussed our individual goals and found we all aligned on the following:

1.  Learning - We wanted a project that would allow us to explore new techs - particularly machine learning. The number one goal of this 2 week project was to learn.

2.  A product - We wanted something useable, something that would really add value to a user, and be a meaningful or enjoyable experience.

With these in mind, we decided that the best idea was to create a product first - using a pre-trained bot - and then replace this with our own bot once we had the finished product.

This decision set the tone for the project. It allowed us space to relax, be creative, and really focus on building a great product first, and worrying about the potentially un-scalable hurdles (training our own bot) later.

#### Daily Structure

We felt that giving the day a bit of structure was important, but would also allow us to regularly check in with each other and understand exactly where each pair was in their development task.

the structure was as follows:

* 9:30am: Stand up. We begin with a morale check for each member of the team, to ensure we know and understand everyones energy and motivation levels for the day. It's also chance to discuss what needs to be done for the day and pair up accordingly.

* 2:00pm: Check in. Check where the other pair is at in their task allocation, and see if there is need for a knowledge share, or a switch up/ re-prioritisation of tasks.

* 5:00pm: Retro. A discussion on what went well, what didn't go so well, how everyone is feeling about the project, the team and their general situation. We tended to have a chat about XP values here, and pick one per retro that we think we particularly did well in that day and why.

This basic structure meant that each member of the team knew exactly where each other person was both mentally and in project task / development terms. This focus on mental wellbeing and 'soft skills' was a huge reason why we were a successful, cohesive team.

The morale check in the morning was a quick go-around where each person said a number out of 10 relating to their overall wellbeing, and a quick note on how they feel. We found this incredibly useful as a tool to quickly see what everyones levels were, and could adjust how we pair with them if needs be.

#### The MVP

We wanted to make our MVP in 2 days, and continue these mini-sprints for the full 10 days of the project. In order to get the application up and running as soon as possible, we split the tasks into frontend and back end, assigning a pair to each part of the stack.

We often stayed in these pairs for the full 2 days, to ensure maximum productivity during the mini sprint, as often it took the majority of a day to become comfortable with the new tasks and technologies, so it made sense to keep the pairs together working on the same task.

#### TDD and SOLID

At the start of the project we made sure we would hold each other accountable when it came to sticking to best practices, in order to build the best possible product we could in the 10 days, and to learn as much as we could too.

For us, this meant sticking to TDD throughout the project, and ensuring that our code was built using the SOLID object oriented design principles we had been taught and honing throughout Makers Academy.
