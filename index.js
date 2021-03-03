//Intro
var readlineSync = require('readline-sync');
const chalk=require('chalk');

var userName=readlineSync.question(chalk.green('May I know your name please? '));

var message="Hello "+userName+" , Welcome to 'DO YOU KNOW DEEP' quiz!";

console.log(chalk.yellow(message));



//List of Questions and answers

var quizList=[
  {
    question:"What is my full name?",
    answer:"chantati deepkiran"
  },
  {
    question:"What is my birthday month?",
    answer:"october"
  },
  {
    question:"Where do I work at ?",
    answer:"infosys"
  },
  {
    question:"What is my favourite dish?",
    answer:"paneer"
  },
  {
    question:"Which sport do i love the most?",
    answer:"cricket"
  },
   {
    question:"Who would be my favourite actor ?",
    answer:"akshay kumar"
  }
]


var score=0;
var response=readlineSync.question(chalk.yellow(userName+",Are you ready to take the quiz?"))
var expected="yes";
if(response.toUpperCase()===expected.toUpperCase())
{
  console.log("\n");
  var latestScore=gameplay(quizList);
  if(latestScore==6)
  {
    console.log(chalk.green.bold("Wow "+userName+" ! That's a perfect score , it seems you know me better than myself ;) \n"))
    
  }
  else
  {
    console.log(chalk.red.bold("Thank you for playing the quiz "+userName));
   
  }
  
}
else
{
  console.log(chalk.blue.bold("Thanks For Visiting !"));
}




//gameplay function

function gameplay(quizList)
{
  for(let i=0;i<quizList.length;i++)
  {
    var userAnswer=readlineSync.question(chalk.cyanBright((i+1)+"."+quizList[i].question+"\n"));

    if(userAnswer.toUpperCase()===quizList[i].answer.toUpperCase())
    {
      score=score+1;
      console.log(chalk.green('Correct Answer ! Your Current Score : '+score));
      console.log(chalk.black.bgWhite("_____________________________________________________\n"));
    }
    else
    {
      console.log(chalk.red('Incorrect Answer ! Correct Answer is : '+quizList[i].answer+'\n'));
      console.log(chalk.green("Your Current Score : "+score));
      console.log(chalk.black.bgWhite("_____________________________________________________\n"));
    }
  }
  console.log(chalk.green("Your Final Score is :"+score));
  return score;
}
