var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "frontmatter-2",
  "level": "1",
  "url": "frontmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  My Website   copyright  "
},
{
  "id": "sec-lin-eqn-substitution",
  "level": "1",
  "url": "sec-lin-eqn-substitution.html",
  "type": "Section",
  "number": "1.1",
  "title": "Linear Equations and Substitution",
  "body": " Linear Equations and Substitution   Some of the material in this section comes from Greg Hartman's Fundamentals of Matrix Algebra.  Normally, there will be some Prepare material before you are asked to Participate, but this is the first section. Let's begin, not prepare to begin.    Participate  Perhaps you've seen images like the ones shown below.    a collage of different math problems using pictures of food   A collage of different math problems using pictures of food   Images like the ones above have been frequently shared on social media, prompting this mathematician to reflect that algebra seems more palatable when it's disguised as puzzles involving food.    girl making a bad face at math with variables x, y, z, and an interested face at doing math with food   Disguising math as food puzzles seems more palatable   Most of the images in the collage above also contain an element of competetiveness of being able to figure out something that other people have a hard time with. Many of the puzzles in the collage say something like Only 1 in 7 can solve this! or 95% of people will fail to answer.  Many of them also contain a visual trick which causes extra confusion or controversy. For example, consider the puzzle in this image.   Solve a fruit puzzle   an algebra puzzle involving food, claiming most people can't solve it   The image above says that three apples total 18, while an apple plus two bunches of bananas total 14, and a bunch of bananas minus cherries equals 2.  Then it asks a question: how much does cherries plus an apple plus a bunch of bananas equal? The answer is       Each apple is worth 6, each bunch of 4 bananas is worth 4, so each banana is worth 1, and each group of cherries is worth 2. There are only 3 bananas in the question to answer, so 2+6+3=11.      You did the algebra correctly! But this puzzle also contains a visual trick, designed to make people get the question wrong. Earlier on, there are 4 bananas in each bunch of bananas, so each banana is worth 1. But in the question you are asked to answer, the bunch of bananas picture has changed and contains 3 bananas, not 4.      Incorrect.      The food puzzle above was really setting up a number of algebraic equations.    Three apples add up to 18.     Apple plus 2 bunches of bananas equals 14.     Bunch of bananas minus cherries equals 2.     Solving the puzzle meant finding values for each of the foods that made all the equations true, that is, finding the values of , , and . And then also realizing that the picture of bunch of bananas changed so that we really needed to find the value of each banana.   Almost all the food puzzles are these same kinds of equations, called linear equations . Before defining what that means in general, let's explore another example from both graphical and algebraic perspectives.   Consider the equation . When and , the equation is true, so I've plotted the point . Think of some more values of and that satisfy the equation, and plot them as points.   Solutions to the equation    What do you notice about all the points that satisfy ?   Now consider the equation . When and , the equation is true, so I've plotted the point . Think of some more values of and that satisfy the equation (your answers don't have to be whole numbers!), and plot them as points.   Solutions to the equation    What does the graph of look like?   The graphs of and are shown in the image below.   Graph of two lines and their point of intersection   What does the point of intersection mean, and what are its coordinates?   Sony and The Interview   Below is an image from a New York Times article about a movie The Interview    Snapshot of part of an article from a major news source   The article is about the release of the movie, which generated controversy and so was released direct to streaming. Sony reported that the movie made about 15 million dollars total, split between $15 sales and $6 rentals, and also that there were about 2 million transactions in total  Then the author of the article claimed that Sony did not release how many of the transactions were rentals and how many were sales. Can you do better than the author of the article and figure out how many of the transactions were sales and how many were rentals?    Try using for the number of sales and for the number of rentals. What equations do you get from the information about the total number of transactions, and total dollar amount earned? Perhaps refer to .    If is the number of sales and is the number of rentals, then million transactions. Also, million dollars of revenue, since each sale cost $15 and each rental cost $6.  We can solve this set of two linear equations by substitution : solving for one of the variables and substituting it into the other equation. Rearranging the first equation we get that , and then plugging that in for in the second equation gives .  Multiplying out gives , and combining like terms results in . Subtracting the 12 from both sides gives , and dividing both sides by 9 yields .  So one-third of a million, or roughly transactions were sales. To find the number of rentals, we can substitute this value back into either equation, but seems easier. Then , which means that , and of a million is roughly transactions.      Jar of multicolored marbles   Suppose a jar contains red, blue and green marbles. You are told that there are a total of marbles in the jar; there are twice as many red marbles as green ones; the number of blue marbles is the same as the sum of the red and green marbles. How many marbles of each color are there?    Let's let represent the number of red marbles, and let and denote the number of blue and green marbles, respectively. We can use the given statements about the marbles in the jar to create some equations.  Since we know there are marbles in the jar, we know that .  Also, we are told that there are twice as many red marbles as green ones, so we know that .  Finally, we know that the number of blue marbles is the same as the sum of the red and green marbles, so we have .  There are many ways to use this information to find the solution. One way is to combine ideas from equations and ; in replace with . This gives us .  We can then combine equations , and by replacing in with as we did before, and replacing with to get   We can now use equation to find and ; we know from that and then since , we easily find that .    All of the examples we've seen so far have involved linear equations . It turns out that linear equations are at the heart of many modern applications: data science, sports analytics, graphics, machine learning, artificial intelligence, and so on. Let's define what linear equations are.  Linear Equation   A linear equation is an equation that can be written in the form where the are variables (the unknowns), the are coefficients (numbers), and is a constant.  A system of linear equations is a set of linear equations that involve the same variables.  A solution to a system of linear equations is a set of values for the variables such that each equation in the system is satisfied.     linear equation  system of linear equations definition  system of linear equations solution  solution   So in Example , when we answered how many marbles of each color are there?, we were also answering find a solution to a certain system of linear equations.    Multiple-Choice, Linear or Nonlinear  For each of the following equations, use to decide whether the equation is linear or not.         Linear    The equation does not have the correct form; the variables are multiplied together, not multiplied by numbers and added.      Not linear    The variables can't be multiplied together in a linear equation.           Linear    It doesn't matter for being linear or not that we have to rearrange the equation to see the correct form appear.      Not linear    It doesn't matter for being linear or not that we have to rearrange the equation to see the correct form appear. This is the same as , which is a sum of variables multiplied by numbers (that happen to be 1), which add up to equal a constant.           Linear    The equation does not have the correct form; the variables in a linear equation cannot be raised to exponents other than 1.      Not linear    The variables in a linear equation cannot be raised to exponents other than 1.           Linear    The equation does not have the correct form; the variables are multiplied together, not multiplied by numbers and added.      Not linear    The variables can't be multiplied together in a linear equation.     Testing tabs  testing the intro   bfhda   fhdjak   fhdjak again    The following are examples of linear equations:   Notice that the coefficients and constants can be fractions and irrational numbers (like , and ). The variables only come in the form of ; that is, just one variable multiplied by a coefficient. (Note that , just a variable multiplied by a coefficient.) Also, it doesn't really matter what side of the equation we put the variables and the constants, although most of the time we write them with the variables on the left and the constants on the right.  We would not regard the above collection of equations to constitute a system of equations, since each equation uses differently named variables. An example of a system of linear equations is   It is important to notice that not all equations used all of the variables (it is more accurate to say that the coefficients can be , so the last equation could have been written as ). Also, just because we have four unknowns does not mean we have to have four equations. We could have had fewer, even just one, and we could have had more.  To get a better feel for what a linear equation is, we point out some examples of what are not linear equations.   The first example is not a linear equation since the variables and are multiplied together. The second is not a linear equation because the variables are raised to powers other than 1; that is also a problem in the third equation (remember that and ). Our variables cannot be the argument of function like , or , nor can our variables be raised as an exponent.  At this stage, we have yet to discuss how to efficiently find a solution to a system of linear equations. That is a goal for the upcoming sections. Right now we focus on identifying linear equations and solving some smaller systems of equations using substitution.    Summary      Linear equations are equations which can be written in the form , where the are variables, the are coefficients, and is a constant.    A system of linear equations is a set of linear equations referring to the same variables. Solving a system of linear equations means finding values for the variables such that all the equations are true with those values.    Systems of linear equations are behind many important applications in physics, engineering, and computer science, and solving systems will be the subject of much of this course. For now, we use substitution and wait for a better way.       Practice  Two variable substitution   The solution of the linear system   is  and                 Marbles in a Jar   Suppose a jar contains red, blue and green marbles. You are told that there are a total of marbles in the jar; there are twice as many red marbles as green ones; the number of blue marbles is the same as the sum of the red and green marbles. How many marbles of each color are there?                          Additional Practice  Linear equation: yes or no   In the following exercises, state whether or not the given equation is linear.        y        n        y        y        n        n        y        n        y        n    Solve the System   In the following exercises, solve the system of linear equations.                                          A farmer looks out his window at his chickens and pigs. He tells his daughter that he sees heads and legs. How many chickens and pigs does the farmer have?    chickens and pigs    A lady buys trinkets at a yard sale. The cost of each trinket is either or . If she spends , how many of each type of trinket does she buy?    of the trinkets, of the trinkets    "
},
{
  "id": "fruit-collage",
  "level": "2",
  "url": "sec-lin-eqn-substitution.html#fruit-collage",
  "type": "Figure",
  "number": "1.1.1",
  "title": "",
  "body": "  a collage of different math problems using pictures of food   A collage of different math problems using pictures of food  "
},
{
  "id": "yesnogirl-fruit",
  "level": "2",
  "url": "sec-lin-eqn-substitution.html#yesnogirl-fruit",
  "type": "Figure",
  "number": "1.1.2",
  "title": "",
  "body": "  girl making a bad face at math with variables x, y, z, and an interested face at doing math with food   Disguising math as food puzzles seems more palatable  "
},
{
  "id": "fruit-puzzle",
  "level": "2",
  "url": "sec-lin-eqn-substitution.html#fruit-puzzle",
  "type": "Exercise",
  "number": "1.1.3",
  "title": "Solve a fruit puzzle.",
  "body": "Solve a fruit puzzle   an algebra puzzle involving food, claiming most people can't solve it   The image above says that three apples total 18, while an apple plus two bunches of bananas total 14, and a bunch of bananas minus cherries equals 2.  Then it asks a question: how much does cherries plus an apple plus a bunch of bananas equal? The answer is       Each apple is worth 6, each bunch of 4 bananas is worth 4, so each banana is worth 1, and each group of cherries is worth 2. There are only 3 bananas in the question to answer, so 2+6+3=11.      You did the algebra correctly! But this puzzle also contains a visual trick, designed to make people get the question wrong. Earlier on, there are 4 bananas in each bunch of bananas, so each banana is worth 1. But in the question you are asked to answer, the bunch of bananas picture has changed and contains 3 bananas, not 4.      Incorrect.     "
},
{
  "id": "act_sony-interview",
  "level": "2",
  "url": "sec-lin-eqn-substitution.html#act_sony-interview",
  "type": "Exercise",
  "number": "1.1.4",
  "title": "",
  "body": " Consider the equation . When and , the equation is true, so I've plotted the point . Think of some more values of and that satisfy the equation, and plot them as points.   Solutions to the equation    What do you notice about all the points that satisfy ?   Now consider the equation . When and , the equation is true, so I've plotted the point . Think of some more values of and that satisfy the equation (your answers don't have to be whole numbers!), and plot them as points.   Solutions to the equation    What does the graph of look like?   The graphs of and are shown in the image below.   Graph of two lines and their point of intersection   What does the point of intersection mean, and what are its coordinates?  "
},
{
  "id": "subsec-lin-eqn-dc-13",
  "level": "2",
  "url": "sec-lin-eqn-substitution.html#subsec-lin-eqn-dc-13",
  "type": "Example",
  "number": "1.1.7",
  "title": "Sony and The Interview.",
  "body": "Sony and The Interview   Below is an image from a New York Times article about a movie The Interview    Snapshot of part of an article from a major news source   The article is about the release of the movie, which generated controversy and so was released direct to streaming. Sony reported that the movie made about 15 million dollars total, split between $15 sales and $6 rentals, and also that there were about 2 million transactions in total  Then the author of the article claimed that Sony did not release how many of the transactions were rentals and how many were sales. Can you do better than the author of the article and figure out how many of the transactions were sales and how many were rentals?    Try using for the number of sales and for the number of rentals. What equations do you get from the information about the total number of transactions, and total dollar amount earned? Perhaps refer to .    If is the number of sales and is the number of rentals, then million transactions. Also, million dollars of revenue, since each sale cost $15 and each rental cost $6.  We can solve this set of two linear equations by substitution : solving for one of the variables and substituting it into the other equation. Rearranging the first equation we get that , and then plugging that in for in the second equation gives .  Multiplying out gives , and combining like terms results in . Subtracting the 12 from both sides gives , and dividing both sides by 9 yields .  So one-third of a million, or roughly transactions were sales. To find the number of rentals, we can substitute this value back into either equation, but seems easier. Then , which means that , and of a million is roughly transactions.   "
},
{
  "id": "ex_by_hand",
  "level": "2",
  "url": "sec-lin-eqn-substitution.html#ex_by_hand",
  "type": "Example",
  "number": "1.1.8",
  "title": "Jar of multicolored marbles.",
  "body": " Jar of multicolored marbles   Suppose a jar contains red, blue and green marbles. You are told that there are a total of marbles in the jar; there are twice as many red marbles as green ones; the number of blue marbles is the same as the sum of the red and green marbles. How many marbles of each color are there?    Let's let represent the number of red marbles, and let and denote the number of blue and green marbles, respectively. We can use the given statements about the marbles in the jar to create some equations.  Since we know there are marbles in the jar, we know that .  Also, we are told that there are twice as many red marbles as green ones, so we know that .  Finally, we know that the number of blue marbles is the same as the sum of the red and green marbles, so we have .  There are many ways to use this information to find the solution. One way is to combine ideas from equations and ; in replace with . This gives us .  We can then combine equations , and by replacing in with as we did before, and replacing with to get   We can now use equation to find and ; we know from that and then since , we easily find that .   "
},
{
  "id": "def_lin_eq",
  "level": "2",
  "url": "sec-lin-eqn-substitution.html#def_lin_eq",
  "type": "Definition",
  "number": "1.1.9",
  "title": "Linear Equation.",
  "body": "Linear Equation   A linear equation is an equation that can be written in the form where the are variables (the unknowns), the are coefficients (numbers), and is a constant.  A system of linear equations is a set of linear equations that involve the same variables.  A solution to a system of linear equations is a set of values for the variables such that each equation in the system is satisfied.   "
},
{
  "id": "mc-linear-or-not",
  "level": "2",
  "url": "sec-lin-eqn-substitution.html#mc-linear-or-not",
  "type": "Exercise",
  "number": "1.1.10",
  "title": "Multiple-Choice, Linear or Nonlinear.",
  "body": "Multiple-Choice, Linear or Nonlinear  For each of the following equations, use to decide whether the equation is linear or not.         Linear    The equation does not have the correct form; the variables are multiplied together, not multiplied by numbers and added.      Not linear    The variables can't be multiplied together in a linear equation.           Linear    It doesn't matter for being linear or not that we have to rearrange the equation to see the correct form appear.      Not linear    It doesn't matter for being linear or not that we have to rearrange the equation to see the correct form appear. This is the same as , which is a sum of variables multiplied by numbers (that happen to be 1), which add up to equal a constant.           Linear    The equation does not have the correct form; the variables in a linear equation cannot be raised to exponents other than 1.      Not linear    The variables in a linear equation cannot be raised to exponents other than 1.           Linear    The equation does not have the correct form; the variables are multiplied together, not multiplied by numbers and added.      Not linear    The variables can't be multiplied together in a linear equation.    "
},
{
  "id": "subsec-lin-eqn-dc-20",
  "level": "2",
  "url": "sec-lin-eqn-substitution.html#subsec-lin-eqn-dc-20",
  "type": "Exercise",
  "number": "1.1.11",
  "title": "Testing tabs.",
  "body": "Testing tabs  testing the intro   bfhda   fhdjak   fhdjak again  "
},
{
  "id": "ww-2-var-subs",
  "level": "2",
  "url": "sec-lin-eqn-substitution.html#ww-2-var-subs",
  "type": "Exercise",
  "number": "1.1.12",
  "title": "Two variable substitution.",
  "body": "Two variable substitution   The solution of the linear system   is  and                "
},
{
  "id": "ww-marble-jar",
  "level": "2",
  "url": "sec-lin-eqn-substitution.html#ww-marble-jar",
  "type": "Exercise",
  "number": "1.1.13",
  "title": "Marbles in a Jar.",
  "body": "Marbles in a Jar   Suppose a jar contains red, blue and green marbles. You are told that there are a total of marbles in the jar; there are twice as many red marbles as green ones; the number of blue marbles is the same as the sum of the red and green marbles. How many marbles of each color are there?                        "
},
{
  "id": "sec-lin-eqn-substitution-6-2-3",
  "level": "2",
  "url": "sec-lin-eqn-substitution.html#sec-lin-eqn-substitution-6-2-3",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": "     y  "
},
{
  "id": "sec-lin-eqn-substitution-6-2-4",
  "level": "2",
  "url": "sec-lin-eqn-substitution.html#sec-lin-eqn-substitution-6-2-4",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": "     n  "
},
{
  "id": "sec-lin-eqn-substitution-6-2-5",
  "level": "2",
  "url": "sec-lin-eqn-substitution.html#sec-lin-eqn-substitution-6-2-5",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": "     y  "
},
{
  "id": "sec-lin-eqn-substitution-6-2-6",
  "level": "2",
  "url": "sec-lin-eqn-substitution.html#sec-lin-eqn-substitution-6-2-6",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": "     y  "
},
{
  "id": "sec-lin-eqn-substitution-6-2-7",
  "level": "2",
  "url": "sec-lin-eqn-substitution.html#sec-lin-eqn-substitution-6-2-7",
  "type": "Exercise",
  "number": "5",
  "title": "",
  "body": "     n  "
},
{
  "id": "sec-lin-eqn-substitution-6-2-8",
  "level": "2",
  "url": "sec-lin-eqn-substitution.html#sec-lin-eqn-substitution-6-2-8",
  "type": "Exercise",
  "number": "6",
  "title": "",
  "body": "     n  "
},
{
  "id": "sec-lin-eqn-substitution-6-2-9",
  "level": "2",
  "url": "sec-lin-eqn-substitution.html#sec-lin-eqn-substitution-6-2-9",
  "type": "Exercise",
  "number": "7",
  "title": "",
  "body": "     y  "
},
{
  "id": "sec-lin-eqn-substitution-6-2-10",
  "level": "2",
  "url": "sec-lin-eqn-substitution.html#sec-lin-eqn-substitution-6-2-10",
  "type": "Exercise",
  "number": "8",
  "title": "",
  "body": "     n  "
},
{
  "id": "sec-lin-eqn-substitution-6-2-11",
  "level": "2",
  "url": "sec-lin-eqn-substitution.html#sec-lin-eqn-substitution-6-2-11",
  "type": "Exercise",
  "number": "9",
  "title": "",
  "body": "     y  "
},
{
  "id": "sec-lin-eqn-substitution-6-2-12",
  "level": "2",
  "url": "sec-lin-eqn-substitution.html#sec-lin-eqn-substitution-6-2-12",
  "type": "Exercise",
  "number": "10",
  "title": "",
  "body": "     n  "
},
{
  "id": "sec-lin-eqn-substitution-6-3-3",
  "level": "2",
  "url": "sec-lin-eqn-substitution.html#sec-lin-eqn-substitution-6-3-3",
  "type": "Exercise",
  "number": "11",
  "title": "",
  "body": "         "
},
{
  "id": "sec-lin-eqn-substitution-6-3-4",
  "level": "2",
  "url": "sec-lin-eqn-substitution.html#sec-lin-eqn-substitution-6-3-4",
  "type": "Exercise",
  "number": "12",
  "title": "",
  "body": "        "
},
{
  "id": "sec-lin-eqn-substitution-6-3-5",
  "level": "2",
  "url": "sec-lin-eqn-substitution.html#sec-lin-eqn-substitution-6-3-5",
  "type": "Exercise",
  "number": "13",
  "title": "",
  "body": "        "
},
{
  "id": "sec-lin-eqn-substitution-6-3-6",
  "level": "2",
  "url": "sec-lin-eqn-substitution.html#sec-lin-eqn-substitution-6-3-6",
  "type": "Exercise",
  "number": "14",
  "title": "",
  "body": "        "
},
{
  "id": "sec-lin-eqn-substitution-6-4",
  "level": "2",
  "url": "sec-lin-eqn-substitution.html#sec-lin-eqn-substitution-6-4",
  "type": "Exercise",
  "number": "15",
  "title": "",
  "body": " A farmer looks out his window at his chickens and pigs. He tells his daughter that he sees heads and legs. How many chickens and pigs does the farmer have?    chickens and pigs  "
},
{
  "id": "sec-lin-eqn-substitution-6-5",
  "level": "2",
  "url": "sec-lin-eqn-substitution.html#sec-lin-eqn-substitution-6-5",
  "type": "Exercise",
  "number": "16",
  "title": "",
  "body": " A lady buys trinkets at a yard sale. The cost of each trinket is either or . If she spends , how many of each type of trinket does she buy?    of the trinkets, of the trinkets  "
},
{
  "id": "sec-matrices-elimination",
  "level": "1",
  "url": "sec-matrices-elimination.html",
  "type": "Section",
  "number": "1.2",
  "title": "Matrices and Elimination",
  "body": " Matrices and Elimination   Material in this section comes heavily from Greg Hartman's Fundamentals of Matrix Algebra.    Prepare  Mathematicians often see solutions to given problems and ask What if ? What are the right kinds of what if questions to ask? It's impossible to know at first mathematicians often ask wrong questions. That is, they often ask questions and find that the answer isn't particularly interesting. But asking enough questions often leads to some good right questions. Don't be afraid of doing something wrong; mathematicians do it all the time!  Recall that in the previous section, we worked through a few examples of solving linear equations. What is a good question to ask after seeing Example ? Here are two possibilities (though not the only two):   Did we really have to call the red balls ? Could we call them ?    What if we had balls at the start instead of ?     Let's look at the first question. Would the solution to our problem change if we called the red balls ? Of course not we picked the letter r because it made us think of red , and we could have picked any letter we liked. The process of solving would have been exactly the same if we used q instead, and at the end we'd find that , and we would know that this meant that we had red balls.  Now let's look at the second question. Suppose we had balls, but the other relationships stayed the same. How would the situation and solution change? Let's compare the original equations to the new equations.    Original  New                By examining these equations, we see that nothing has changed except the first equation. It isn't too much of a stretch of the imagination to see that we would solve this new problem exactly the same way that we solved the original one, except that we'd have twice as many of each type of ball so that the total was instead of .  Two conclusions from answering these two questions are:   it doesn't matter what we call our variables, and    while changing constants in the equations changes the solution, they don't really change the method of how we solve these equations.     In fact, it is a great discovery to realize that all we care about are the constants and the coefficients of the equations. By systematically handling these, we can solve any set of linear equations in a very nice way.  Let's return to Example . As we mentioned before, there isn't just one right way of finding the solution to this system of equations. Here is another way to do it.  First, we rewrite the equations so that all variables are on the left of the equal sign and all constants are on the right. Also, for a bit more consistency, let's list the variables in alphabetical order in each equation. Therefore we can write the equations as   Now, let's add the first and last equations together, and write the result as a new third equation. This gives us: . A nice feature of this is that the only equation with a in it is the first equation.  Next let's multiply the second equation by . This gives   Let's now do two steps in a row; our goal is to get rid of the coefficients in the first and third equations. In order to remove the in the first equation, let's multiply the second equation by and add that to the first equation, replacing the first equation with that sum. To remove the in the third equation, let's multiply the second equation by and add that to the third equation, replacing the third equation. Our new system of equations now becomes   Clearly we can multiply the third equation by and find that ; let's make this our new third equation, giving   Now let's get rid of the 's in the first and second equation. To remove the in the first equation, let's multiply the third equation by and add the result to the first equation, replacing the first equation with that sum. To remove the in the second equation, we can multiply the third equation by and add that to the second equation, replacing the second equation with that sum. This gives us: . Clearly we have discovered the same result as when we solved this problem in Example , even though our steps were different.  As we said before, all that really matters for the solution to a problem like this are the coefficients and the constants. There is nothing special about the letters , and ; we could have used , and , or , and . This second method suggests that we don't actually need to write the variable names at all, as long as we carefully line them up in the system of equations.  Let's look again at our system of equations in and write the coefficients and the constants in a rectangular array. This time we won't ignore the zeros, but rather write them out.   Notice how even the equal signs are gone; we don't need them, for we know that the last entry in each row is the constant of the corresponding equation.  We call this array we have just created a matrix .   Matrix  matrix augmented matrix   A matrix is a rectangular array of numbers.  The horizontal lines of numbers form rows and the vertical lines of numbers form columns . A matrix with rows and columns is said to be an matrix (said out loud as an by matrix ).  If a matrix corresponds to a linear system of equations such that the last column corresponds to the constants of the system, we call the matrix an augmented matrix .  We tend to use capital letters for matrices, such as , , and , and we use lowercase letters with subscripts for the entries within a matrix. That is, means the number in the third row and second column of matrix .  All the entries of an matrix would appear like this:      How a matrix is indexed  In the matrix what is ?       The entry in the second row and third column is 6.      The row number comes first, then the column number.      Incorrect. If you're stuck, try reviewing the definition of matrix .       Enter a response to both of the following tasks:   Ask a question about the material, either about something you're not sure you fully understand, or a what if question.    Give a percentage from 0 to 100 that reflects how confident you are with the material you just read about, and give one sentence as to why you feel that way. 0 means you didn't actually do the reading and 100 means that everything makes sense so far and you think you are completely ready to engage with the material more deeply.         Participate    Summary  End with a summary? More examples in knowls? Links to videos? links inside the summary?     Practice    Additional Practice    In the following exercises, state whether or not the given equation is linear.        y        n        y        y        n        n        y        n        y        n      In the following exercises, solve the system of linear equations.                                         A farmer looks out his window at his chickens and pigs. He tells his daughter that he sees heads and legs. How many chickens and pigs does the farmer have?    chickens and pigs    A lady buys trinkets at a yard sale. The cost of each trinket is either or . If she spends , how many of each type of trinket does she buy?    of the trinkets, of the trinkets    "
},
{
  "id": "def_matrix",
  "level": "2",
  "url": "sec-matrices-elimination.html#def_matrix",
  "type": "Definition",
  "number": "1.2.1",
  "title": "Matrix.",
  "body": " Matrix  matrix augmented matrix   A matrix is a rectangular array of numbers.  The horizontal lines of numbers form rows and the vertical lines of numbers form columns . A matrix with rows and columns is said to be an matrix (said out loud as an by matrix ).  If a matrix corresponds to a linear system of equations such that the last column corresponds to the constants of the system, we call the matrix an augmented matrix .  We tend to use capital letters for matrices, such as , , and , and we use lowercase letters with subscripts for the entries within a matrix. That is, means the number in the third row and second column of matrix .  All the entries of an matrix would appear like this:    "
},
{
  "id": "matrix-indices",
  "level": "2",
  "url": "sec-matrices-elimination.html#matrix-indices",
  "type": "Reading Question",
  "number": "1",
  "title": "How a matrix is indexed.",
  "body": "How a matrix is indexed  In the matrix what is ?       The entry in the second row and third column is 6.      The row number comes first, then the column number.      Incorrect. If you're stuck, try reviewing the definition of matrix .     "
},
{
  "id": "rq-matrices-questions",
  "level": "2",
  "url": "sec-matrices-elimination.html#rq-matrices-questions",
  "type": "Reading Question",
  "number": "2",
  "title": "",
  "body": " Enter a response to both of the following tasks:   Ask a question about the material, either about something you're not sure you fully understand, or a what if question.    Give a percentage from 0 to 100 that reflects how confident you are with the material you just read about, and give one sentence as to why you feel that way. 0 means you didn't actually do the reading and 100 means that everything makes sense so far and you think you are completely ready to engage with the material more deeply.     "
},
{
  "id": "sec-matrices-elimination-7-2-2",
  "level": "2",
  "url": "sec-matrices-elimination.html#sec-matrices-elimination-7-2-2",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": "     y  "
},
{
  "id": "sec-matrices-elimination-7-2-3",
  "level": "2",
  "url": "sec-matrices-elimination.html#sec-matrices-elimination-7-2-3",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": "     n  "
},
{
  "id": "sec-matrices-elimination-7-2-4",
  "level": "2",
  "url": "sec-matrices-elimination.html#sec-matrices-elimination-7-2-4",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": "     y  "
},
{
  "id": "sec-matrices-elimination-7-2-5",
  "level": "2",
  "url": "sec-matrices-elimination.html#sec-matrices-elimination-7-2-5",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": "     y  "
},
{
  "id": "sec-matrices-elimination-7-2-6",
  "level": "2",
  "url": "sec-matrices-elimination.html#sec-matrices-elimination-7-2-6",
  "type": "Exercise",
  "number": "5",
  "title": "",
  "body": "     n  "
},
{
  "id": "sec-matrices-elimination-7-2-7",
  "level": "2",
  "url": "sec-matrices-elimination.html#sec-matrices-elimination-7-2-7",
  "type": "Exercise",
  "number": "6",
  "title": "",
  "body": "     n  "
},
{
  "id": "sec-matrices-elimination-7-2-8",
  "level": "2",
  "url": "sec-matrices-elimination.html#sec-matrices-elimination-7-2-8",
  "type": "Exercise",
  "number": "7",
  "title": "",
  "body": "     y  "
},
{
  "id": "sec-matrices-elimination-7-2-9",
  "level": "2",
  "url": "sec-matrices-elimination.html#sec-matrices-elimination-7-2-9",
  "type": "Exercise",
  "number": "8",
  "title": "",
  "body": "     n  "
},
{
  "id": "sec-matrices-elimination-7-2-10",
  "level": "2",
  "url": "sec-matrices-elimination.html#sec-matrices-elimination-7-2-10",
  "type": "Exercise",
  "number": "9",
  "title": "",
  "body": "     y  "
},
{
  "id": "sec-matrices-elimination-7-2-11",
  "level": "2",
  "url": "sec-matrices-elimination.html#sec-matrices-elimination-7-2-11",
  "type": "Exercise",
  "number": "10",
  "title": "",
  "body": "     n  "
},
{
  "id": "sec-matrices-elimination-7-3-2",
  "level": "2",
  "url": "sec-matrices-elimination.html#sec-matrices-elimination-7-3-2",
  "type": "Exercise",
  "number": "11",
  "title": "",
  "body": "        "
},
{
  "id": "sec-matrices-elimination-7-3-3",
  "level": "2",
  "url": "sec-matrices-elimination.html#sec-matrices-elimination-7-3-3",
  "type": "Exercise",
  "number": "12",
  "title": "",
  "body": "        "
},
{
  "id": "sec-matrices-elimination-7-3-4",
  "level": "2",
  "url": "sec-matrices-elimination.html#sec-matrices-elimination-7-3-4",
  "type": "Exercise",
  "number": "13",
  "title": "",
  "body": "        "
},
{
  "id": "sec-matrices-elimination-7-3-5",
  "level": "2",
  "url": "sec-matrices-elimination.html#sec-matrices-elimination-7-3-5",
  "type": "Exercise",
  "number": "14",
  "title": "",
  "body": "        "
},
{
  "id": "sec-matrices-elimination-7-4",
  "level": "2",
  "url": "sec-matrices-elimination.html#sec-matrices-elimination-7-4",
  "type": "Exercise",
  "number": "15",
  "title": "",
  "body": " A farmer looks out his window at his chickens and pigs. He tells his daughter that he sees heads and legs. How many chickens and pigs does the farmer have?    chickens and pigs  "
},
{
  "id": "sec-matrices-elimination-7-5",
  "level": "2",
  "url": "sec-matrices-elimination.html#sec-matrices-elimination-7-5",
  "type": "Exercise",
  "number": "16",
  "title": "",
  "body": " A lady buys trinkets at a yard sale. The cost of each trinket is either or . If she spends , how many of each type of trinket does she buy?    of the trinkets, of the trinkets  "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
