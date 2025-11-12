var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  "
},
{
  "id": "frontmatter-4",
  "level": "1",
  "url": "frontmatter-4.html",
  "type": "Preface",
  "number": "",
  "title": "Preface",
  "body": " It seems everyone finds a way to cover linear algebra differently, and my institution is no exception. We have two separate semester-long 1-credit courses that students typically take in their first year alongside calculus I and II. The courses are aimed at introducing the calculations of linear algebra without much theory or abstraction. As I understand the department historical lore, the reason for this is so that computer science and engineering students learn the topics they need without having to get the more theoretical (and proof-heavy) treatment involving abstract vector spaces that math majors will encounter in a later course.  Before this book, we were happily using a combination of existing resources. The first among these is Fundamentals of Matrix Algebra by Gregory Hartman. His work is similarly light on theory and abstraction and covers topics in a similar order, but it does too much of some things and omits other things we want to include. Still, I have made use of his Creative Commons license and borrowed much of his work as the foundation for mine, some of it not changed much or at all. The second is Understanding Linear Algebra by David Austin. I have also borrowed heavily from his work, particularly the material on LU Decomposition and Markov Chains. I am deeply indebted to both of them for writing and sharing their work so freely.  This book is written so that each section corresponds to one day of class. As an instructor, I have often thought of student learning taking place before class , during class , and after class , and so each section of this book (except the first) contains Prepare , Participate , and Practice material. The Prepare material is meant to be accessible for students to read and complete on their own without an instructor. I have written and included at least 2 interactive questions plus a set of reading questions to be completed so that students can assess their understanding and identify any gaps. I had the principle in mind that every student should be able to get or be shown the right answer eventually, with explanations provided for common mistakes. The Participate material is structured much differently, with answers and feedback not as readily visible, and it's intended to be suitable for students to work on during class in groups under the supervision of an instructor.  The Practice exercises are interactive and autograded so that students do have feedback as to correctness, but they most often do not include explanations. The Additional Practice exercises are what you might find in a typical paper textbook, with answers provided but not solutions. Most of these came directly from the books of Hartman or Austin. Exercises from either set should be suitable to assign for after class or review before an exam.  If the html version of this book is hosted on Runestone, then student work on the interactive elements can be saved and grades assigned.  I welcome feedback and corrections. As I tried to make clear above, many of the good ideas contained herein are not mine and credit is due to Gregory Hartman and David Austin. I have rearranged the structure, added interactive elements, and done some amount of editing and revising. The blame for any errors belongs entirely to me.  "
},
{
  "id": "frontmatter-5",
  "level": "1",
  "url": "frontmatter-5.html",
  "type": "Acknowledgements",
  "number": "",
  "title": "Acknowledgements",
  "body": " This book wouldn't exist without the open source and Creative Commons licensed work of Gregory Hartman and David Austin.  I have learned much about what to include and how to teach the material for our audience from my colleagues David Burton, John Coleman, Justin Greenly, and Rachel Perrier. In addition, Valerie Plaus suggested the subtitle, and was brave enough to use this text with students, even before it was really finished.  I am indebted to Rob Beezer and David Farmer for PreTeXt, Alex Jordan for WeBWorK integration and help, and Brad Miller for Runestone. The platform affects what you write, and while I was writing I had in my mind the student and instructor experience of the html book being hosted on Runestone.  Finally, I am grateful for the encouragement, ideas, and technical help provided by David Austin, Matt Boelkins, Tien Chih, Steven Clontz, and Oscar Levin, and for Franciscan University of Steubenville granting me a sabbatical.  "
},
{
  "id": "sec-lin-eqn-substitution",
  "level": "1",
  "url": "sec-lin-eqn-substitution.html",
  "type": "Section",
  "number": "1.1",
  "title": "Linear Equations and Substitution",
  "body": " Linear Equations and Substitution   Normally, there will be some Prepare material before you are asked to Participate, but this is the first section. Let's begin, not prepare to begin.  We start by examining a very common and useful type of equation and see one way of solving a collection of such equations.    Participate  Perhaps you've seen images like the ones shown below.    a collage of different math problems using pictures of food   A collage of different math problems using pictures of food   Images like the ones above have been frequently shared on social media, prompting this mathematician to reflect that algebra seems more palatable when it's disguised as puzzles involving food.    girl making a bad face at math with variables x, y, z, and an interested face at doing math with food   Disguising math as food puzzles seems more palatable   Most of the images in the collage above also contain an element of competitiveness of being able to figure out something that other people have a hard time with. Many of the puzzles in the collage say something like Only 1 in 7 can solve this! or 95% of people will fail to answer.  Many of them also contain a visual trick which causes extra confusion or controversy. For example, consider the puzzle in this image.   Solve a fruit puzzle     an algebra puzzle involving food, claiming most people can't solve it    The image above says that three apples total 18, while an apple plus two bunches of bananas total 14, and a bunch of bananas minus cherries equals 2.  Then it asks a question: how much does cherries plus an apple plus a bunch of bananas equal? The answer is         Each apple is worth 6, each bunch of 4 bananas is worth 4, so each banana is worth 1, and each group of cherries is worth 2. There are only 3 bananas in the question to answer, so 2+6+3=11.       You did the algebra correctly! However, this puzzle also contains a visual trick, designed to make people get the question wrong. Earlier on, there are 4 bananas in each bunch of bananas, so each banana is worth 1. But in the question you are asked to answer, the bunch of bananas picture has changed and contains 3 bananas, not 4.       The food puzzle above was really setting up a number of algebraic equations. Let's see how we can translate the puzzle into mathematical equations, with letters standing in for the images or words. We could choose any letters we like, but we'll use to represent apples , to mean bunch of bananas , and to stand for cherries.     Three apples add up to 18.     Apple plus 2 bunches of bananas equals 14.     Bunch of bananas minus cherries equals 2.     Solving the puzzle meant finding values for each of the foods that made all the equations true, that is, finding the values of , , and . And then also realizing that the picture of bunch of bananas changed so that we really needed to find the value of each banana.   Almost all the food puzzles are these same kinds of equations, called linear equations . Before defining what that means in general, let's explore another example from both graphical and algebraic perspectives.     Consider the equation . When and , the equation is true, so I've plotted the point . Think of at least more values of and that satisfy the equation, and plot them as points. Typing the point in a row below in the format will plot the point.   Solutions to the equation    What do you notice about the visual relationship between the points on the graph, that is, points that satisfy the equation ?    Scroll down to the lower rows of the graph interactive, activate and animate the point found there.       Now consider the equation . When and , the equation is true, so I've plotted the point . Think of at least more values of and that satisfy the equation (your answers don't have to be whole numbers!), and plot them as points by typing each one in format in a row below.   Solutions to the equation    What does the graph of look like?       The graphs of and are shown in the image below.   Graph of two lines and their point of intersection    a=1\/3  f(x) = 2-x  g(x) = (15-15*x)\/6               What does the point of intersection mean, and what are its coordinates?      Sony and The Interview   Below is an image of part of a New York Times article about a movie The Interview    Snapshot of part of an article from a major news source   The article is about the release of the movie, which generated controversy and so was released direct to streaming. Sony reported that   the movie made about 15 million dollars total, split between sales which cost $15 and rentals which cost $6, and    there were about 2 million transactions in total.     Then the author of the article claimed that Sony did not release how many of the transactions were rentals and how many were sales. Can you do better than the author of the article and figure out how many of the transactions were sales and how many were rentals?    Try using for the number of sales and for the number of rentals. What equations do you get from the information about the total number of transactions, and total dollar amount earned? Perhaps refer to .    If is the number of millions of sales and is the number of millions of rentals, then million transactions. Also, million dollars of revenue, since each sale cost $15 and each rental cost $6.  We can solve this set of two equations by substitution : solving for one of the variables in one equation and substituting the resulting expression into the other equation. The strategy is to use one equation to reduce the number of variables in the second equation, so that we obtain an equation with just one variable that we can solve in our usual ways.  Rearranging the first equation we get that , and then plugging that in for in the second equation gives .  Multiplying out gives , and combining like terms results in . Subtracting the 12 from both sides gives , and dividing both sides by 9 yields .  So one-third of a million, or roughly transactions were sales. To find the number of rentals, we can substitute this value back into either equation, but seems easier. Then , which means that , and of a million is roughly transactions.     Jar of multicolored marbles   Suppose a jar contains red, blue and green marbles. You are told that there are a total of marbles in the jar; there are twice as many red marbles as green ones; the number of blue marbles is the same as the sum of the red and green marbles. How many marbles of each color are there?    Let's let represent the number of red marbles, and let and denote the number of blue and green marbles, respectively. We can use the given statements about the marbles in the jar to create some equations.  Since we know there are marbles in the jar, we know that .  Also, we are told that there are twice as many red marbles as green ones, so we know that .  Finally, we know that the number of blue marbles is the same as the sum of the red and green marbles, so we have .  Collecting these equations together and giving them numbers to make it easier to refer to them, we have   There are many ways to use this information to find the solution. One way is to combine ideas from equations and ; in replace with . This gives us .  We can then combine equations , and by replacing in with as we did before, and replacing with to get   We can now use equation to find and ; we know from that and then since , we find that .    All of the examples we've seen so far, such as or , have involved linear equations . It turns out that linear equations are at the heart of many modern applications: data science, sports analytics, graphics, machine learning, artificial intelligence, and so on. Let's define what linear equations are.  Linear Equation   linear equation  coefficients  constant  A linear equation is an equation that can be written in the form where the are variables (the unknowns), the are coefficients (numbers), and is a constant (also a number).    Let's look at some examples of equations and see if we can tell what makes an equation linear or not.  Multiple-Choice, Linear or Nonlinear   For each of the following equations, use to decide whether the equation is linear or not.            Linear    The equation has the correct form: it is a sum of variables multiplied by numbers (that happen to be 1), which add up to equal a constant.      Not linear    The equation does have the form , because it is a sum of variables multiplied by numbers (that happen to be 1), which add up to equal a constant.               Linear    The equation does not have the correct form because the variables and are multiplied together, not multiplied by numbers and added.      Not linear    The variables can't be multiplied together in a linear equation.               Linear    It doesn't matter for being linear or not that we have to rearrange the equation to see the correct form appear.      Not linear    It doesn't matter for being linear or not that we have to rearrange the equation to see the correct form appear. This is the same as , which is a sum of variables multiplied by numbers (that happen to be 1), which add up to equal a constant.               Linear    The equation does not have the correct form; the variables in a linear equation cannot be raised to exponents other than 1.      Not linear    The variables in a linear equation cannot be raised to exponents other than 1.               Linear    The equation does not have the correct form; the variables in a linear equation can't be arguments of functions like sine or natural log.      Not linear    The variables in a linear equation can't be arguments of functions like sine or natural log.               Linear    The variables are being multiplied by numbers and added up to equal a number.      Not linear    The variables are , , and we can assume . They are being multiplied by numbers, since since , , and 0 are numbers, and are being added up to equal a number, since is a number.       In all of our examples, we didn't have just one linear equation but rather a collection of linear equations we used together. A set of linear equations has a name we will define now.  System of Linear Equations   system of linear equations definition  system of linear equations solution  solution  A system of linear equations is a set of linear equations that involves the same set of variables.  A solution to a system of linear equations is a set of values for the variables such that each equation in the system is satisfied.    For example, in Example , when we answered how many marbles of each color are there?, we were also answering find a solution to a system of linear equations, where the linear system in the problem was   Another example of a system of linear equations is   It is important to notice that not all equations used all of the variables (it is more accurate to say that the coefficients can be , so the last equation could have been written as ). Also, just because we have four unknowns does not mean we have to have four equations. We could have had fewer, even just one, and we could have had more.  At this stage, we have yet to discuss how to efficiently find a solution to a system of linear equations. That is a goal for the upcoming sections. Right now we focus on identifying linear equations and solving some smaller systems of equations using substitution.    Summary      Linear equations are equations which can be written in the form , where the are variables, the are coefficients, and is a constant.    A system of linear equations is a set of linear equations referring to the same variables. Solving a system of linear equations means finding values for the variables such that all the equations are true with those values.    Systems of linear equations are behind many important applications in physics, engineering, and computer science, and solving linear systems will be a significant part of this course. For now though, we use substitution and wait for a better way.       Practice   Find the point of intersection    Find the point of intersection of the lines and    a graph with axes depicting two intersecting lines   The point of intersection is where and .                  Two variable substitution    The solution of the linear system   is  and                  Marbles in a Jar    Suppose a jar contains red, blue and green marbles. You are told that there are a total of marbles in the jar; there are twice as many red marbles as green ones; the number of blue marbles is the same as the sum of the red and green marbles. How many marbles of each color are there?                          Substitution in a 3-variable system    Solve the system:    , ,                        Another 3-variable system    Solve the system:    , ,                         Additional Practice  Linear equation: yes or no   In the following exercises, state whether or not the given equation is linear.          y           n           y           y           n           n           y           n           y           n     Solve the System   In the following exercises, solve the system of linear equations.                                                       A farmer looks out his window at his chickens and pigs. He tells his daughter that he sees heads and legs. How many chickens and pigs does the farmer have?     chickens and pigs      A lady buys trinkets at a yard sale. The cost of each trinket is either or . If she spends , how many of each type of trinket does she buy?     of the trinkets, of the trinkets     "
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
  "type": "Activity",
  "number": "1.1.3",
  "title": "Solve a fruit puzzle.",
  "body": " Solve a fruit puzzle     an algebra puzzle involving food, claiming most people can't solve it    The image above says that three apples total 18, while an apple plus two bunches of bananas total 14, and a bunch of bananas minus cherries equals 2.  Then it asks a question: how much does cherries plus an apple plus a bunch of bananas equal? The answer is         Each apple is worth 6, each bunch of 4 bananas is worth 4, so each banana is worth 1, and each group of cherries is worth 2. There are only 3 bananas in the question to answer, so 2+6+3=11.       You did the algebra correctly! However, this puzzle also contains a visual trick, designed to make people get the question wrong. Earlier on, there are 4 bananas in each bunch of bananas, so each banana is worth 1. But in the question you are asked to answer, the bunch of bananas picture has changed and contains 3 bananas, not 4.      "
},
{
  "id": "graphing-eqns-sony",
  "level": "2",
  "url": "sec-lin-eqn-substitution.html#graphing-eqns-sony",
  "type": "Activity",
  "number": "1.1.4",
  "title": "",
  "body": "   Consider the equation . When and , the equation is true, so I've plotted the point . Think of at least more values of and that satisfy the equation, and plot them as points. Typing the point in a row below in the format will plot the point.   Solutions to the equation    What do you notice about the visual relationship between the points on the graph, that is, points that satisfy the equation ?    Scroll down to the lower rows of the graph interactive, activate and animate the point found there.       Now consider the equation . When and , the equation is true, so I've plotted the point . Think of at least more values of and that satisfy the equation (your answers don't have to be whole numbers!), and plot them as points by typing each one in format in a row below.   Solutions to the equation    What does the graph of look like?       The graphs of and are shown in the image below.   Graph of two lines and their point of intersection    a=1\/3  f(x) = 2-x  g(x) = (15-15*x)\/6               What does the point of intersection mean, and what are its coordinates?     "
},
{
  "id": "ex_sony_interview",
  "level": "2",
  "url": "sec-lin-eqn-substitution.html#ex_sony_interview",
  "type": "Example",
  "number": "1.1.7",
  "title": "Sony and The Interview.",
  "body": "Sony and The Interview   Below is an image of part of a New York Times article about a movie The Interview    Snapshot of part of an article from a major news source   The article is about the release of the movie, which generated controversy and so was released direct to streaming. Sony reported that   the movie made about 15 million dollars total, split between sales which cost $15 and rentals which cost $6, and    there were about 2 million transactions in total.     Then the author of the article claimed that Sony did not release how many of the transactions were rentals and how many were sales. Can you do better than the author of the article and figure out how many of the transactions were sales and how many were rentals?    Try using for the number of sales and for the number of rentals. What equations do you get from the information about the total number of transactions, and total dollar amount earned? Perhaps refer to .    If is the number of millions of sales and is the number of millions of rentals, then million transactions. Also, million dollars of revenue, since each sale cost $15 and each rental cost $6.  We can solve this set of two equations by substitution : solving for one of the variables in one equation and substituting the resulting expression into the other equation. The strategy is to use one equation to reduce the number of variables in the second equation, so that we obtain an equation with just one variable that we can solve in our usual ways.  Rearranging the first equation we get that , and then plugging that in for in the second equation gives .  Multiplying out gives , and combining like terms results in . Subtracting the 12 from both sides gives , and dividing both sides by 9 yields .  So one-third of a million, or roughly transactions were sales. To find the number of rentals, we can substitute this value back into either equation, but seems easier. Then , which means that , and of a million is roughly transactions.   "
},
{
  "id": "ex_by_hand",
  "level": "2",
  "url": "sec-lin-eqn-substitution.html#ex_by_hand",
  "type": "Example",
  "number": "1.1.8",
  "title": "Jar of multicolored marbles.",
  "body": " Jar of multicolored marbles   Suppose a jar contains red, blue and green marbles. You are told that there are a total of marbles in the jar; there are twice as many red marbles as green ones; the number of blue marbles is the same as the sum of the red and green marbles. How many marbles of each color are there?    Let's let represent the number of red marbles, and let and denote the number of blue and green marbles, respectively. We can use the given statements about the marbles in the jar to create some equations.  Since we know there are marbles in the jar, we know that .  Also, we are told that there are twice as many red marbles as green ones, so we know that .  Finally, we know that the number of blue marbles is the same as the sum of the red and green marbles, so we have .  Collecting these equations together and giving them numbers to make it easier to refer to them, we have   There are many ways to use this information to find the solution. One way is to combine ideas from equations and ; in replace with . This gives us .  We can then combine equations , and by replacing in with as we did before, and replacing with to get   We can now use equation to find and ; we know from that and then since , we find that .   "
},
{
  "id": "def_lin_eq",
  "level": "2",
  "url": "sec-lin-eqn-substitution.html#def_lin_eq",
  "type": "Definition",
  "number": "1.1.9",
  "title": "Linear Equation.",
  "body": "Linear Equation   linear equation  coefficients  constant  A linear equation is an equation that can be written in the form where the are variables (the unknowns), the are coefficients (numbers), and is a constant (also a number).   "
},
{
  "id": "mc-linear-or-not",
  "level": "2",
  "url": "sec-lin-eqn-substitution.html#mc-linear-or-not",
  "type": "Activity",
  "number": "1.1.10",
  "title": "Multiple-Choice, Linear or Nonlinear.",
  "body": "Multiple-Choice, Linear or Nonlinear   For each of the following equations, use to decide whether the equation is linear or not.            Linear    The equation has the correct form: it is a sum of variables multiplied by numbers (that happen to be 1), which add up to equal a constant.      Not linear    The equation does have the form , because it is a sum of variables multiplied by numbers (that happen to be 1), which add up to equal a constant.               Linear    The equation does not have the correct form because the variables and are multiplied together, not multiplied by numbers and added.      Not linear    The variables can't be multiplied together in a linear equation.               Linear    It doesn't matter for being linear or not that we have to rearrange the equation to see the correct form appear.      Not linear    It doesn't matter for being linear or not that we have to rearrange the equation to see the correct form appear. This is the same as , which is a sum of variables multiplied by numbers (that happen to be 1), which add up to equal a constant.               Linear    The equation does not have the correct form; the variables in a linear equation cannot be raised to exponents other than 1.      Not linear    The variables in a linear equation cannot be raised to exponents other than 1.               Linear    The equation does not have the correct form; the variables in a linear equation can't be arguments of functions like sine or natural log.      Not linear    The variables in a linear equation can't be arguments of functions like sine or natural log.               Linear    The variables are being multiplied by numbers and added up to equal a number.      Not linear    The variables are , , and we can assume . They are being multiplied by numbers, since since , , and 0 are numbers, and are being added up to equal a number, since is a number.      "
},
{
  "id": "def_lin_sys",
  "level": "2",
  "url": "sec-lin-eqn-substitution.html#def_lin_sys",
  "type": "Definition",
  "number": "1.1.11",
  "title": "System of Linear Equations.",
  "body": "System of Linear Equations   system of linear equations definition  system of linear equations solution  solution  A system of linear equations is a set of linear equations that involves the same set of variables.  A solution to a system of linear equations is a set of values for the variables such that each equation in the system is satisfied.   "
},
{
  "id": "ww-2-var-subs-from-graph",
  "level": "2",
  "url": "sec-lin-eqn-substitution.html#ww-2-var-subs-from-graph",
  "type": "Exercise",
  "number": "1.1.1",
  "title": "Find the point of intersection.",
  "body": "Find the point of intersection    Find the point of intersection of the lines and    a graph with axes depicting two intersecting lines   The point of intersection is where and .                 "
},
{
  "id": "ww-2-var-subs",
  "level": "2",
  "url": "sec-lin-eqn-substitution.html#ww-2-var-subs",
  "type": "Exercise",
  "number": "1.1.2",
  "title": "Two variable substitution.",
  "body": "Two variable substitution    The solution of the linear system   is  and                 "
},
{
  "id": "ww-marble-jar",
  "level": "2",
  "url": "sec-lin-eqn-substitution.html#ww-marble-jar",
  "type": "Exercise",
  "number": "1.1.3",
  "title": "Marbles in a Jar.",
  "body": "Marbles in a Jar    Suppose a jar contains red, blue and green marbles. You are told that there are a total of marbles in the jar; there are twice as many red marbles as green ones; the number of blue marbles is the same as the sum of the red and green marbles. How many marbles of each color are there?                         "
},
{
  "id": "ww-subs-3var-triangular",
  "level": "2",
  "url": "sec-lin-eqn-substitution.html#ww-subs-3var-triangular",
  "type": "Exercise",
  "number": "1.1.4",
  "title": "Substitution in a 3-variable system.",
  "body": "Substitution in a 3-variable system    Solve the system:    , ,                       "
},
{
  "id": "ww-subs-3var",
  "level": "2",
  "url": "sec-lin-eqn-substitution.html#ww-subs-3var",
  "type": "Exercise",
  "number": "1.1.5",
  "title": "Another 3-variable system.",
  "body": "Another 3-variable system    Solve the system:    , ,                       "
},
{
  "id": "exer-lin-eqn-subs-2-3",
  "level": "2",
  "url": "sec-lin-eqn-substitution.html#exer-lin-eqn-subs-2-3",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": "       y   "
},
{
  "id": "exer-lin-eqn-subs-2-4",
  "level": "2",
  "url": "sec-lin-eqn-substitution.html#exer-lin-eqn-subs-2-4",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": "       n   "
},
{
  "id": "exer-lin-eqn-subs-2-5",
  "level": "2",
  "url": "sec-lin-eqn-substitution.html#exer-lin-eqn-subs-2-5",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": "       y   "
},
{
  "id": "exer-lin-eqn-subs-2-6",
  "level": "2",
  "url": "sec-lin-eqn-substitution.html#exer-lin-eqn-subs-2-6",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": "       y   "
},
{
  "id": "exer-lin-eqn-subs-2-7",
  "level": "2",
  "url": "sec-lin-eqn-substitution.html#exer-lin-eqn-subs-2-7",
  "type": "Exercise",
  "number": "5",
  "title": "",
  "body": "       n   "
},
{
  "id": "exer-lin-eqn-subs-2-8",
  "level": "2",
  "url": "sec-lin-eqn-substitution.html#exer-lin-eqn-subs-2-8",
  "type": "Exercise",
  "number": "6",
  "title": "",
  "body": "       n   "
},
{
  "id": "exer-lin-eqn-subs-2-9",
  "level": "2",
  "url": "sec-lin-eqn-substitution.html#exer-lin-eqn-subs-2-9",
  "type": "Exercise",
  "number": "7",
  "title": "",
  "body": "       y   "
},
{
  "id": "exer-lin-eqn-subs-2-10",
  "level": "2",
  "url": "sec-lin-eqn-substitution.html#exer-lin-eqn-subs-2-10",
  "type": "Exercise",
  "number": "8",
  "title": "",
  "body": "       n   "
},
{
  "id": "exer-lin-eqn-subs-2-11",
  "level": "2",
  "url": "sec-lin-eqn-substitution.html#exer-lin-eqn-subs-2-11",
  "type": "Exercise",
  "number": "9",
  "title": "",
  "body": "       y   "
},
{
  "id": "exer-lin-eqn-subs-2-12",
  "level": "2",
  "url": "sec-lin-eqn-substitution.html#exer-lin-eqn-subs-2-12",
  "type": "Exercise",
  "number": "10",
  "title": "",
  "body": "       n   "
},
{
  "id": "exer-lin-eqn-subs-3-3",
  "level": "2",
  "url": "sec-lin-eqn-substitution.html#exer-lin-eqn-subs-3-3",
  "type": "Exercise",
  "number": "11",
  "title": "",
  "body": "            "
},
{
  "id": "exer-lin-eqn-subs-3-4",
  "level": "2",
  "url": "sec-lin-eqn-substitution.html#exer-lin-eqn-subs-3-4",
  "type": "Exercise",
  "number": "12",
  "title": "",
  "body": "           "
},
{
  "id": "exer-lin-eqn-subs-3-5",
  "level": "2",
  "url": "sec-lin-eqn-substitution.html#exer-lin-eqn-subs-3-5",
  "type": "Exercise",
  "number": "13",
  "title": "",
  "body": "           "
},
{
  "id": "exer-lin-eqn-subs-3-6",
  "level": "2",
  "url": "sec-lin-eqn-substitution.html#exer-lin-eqn-subs-3-6",
  "type": "Exercise",
  "number": "14",
  "title": "",
  "body": "           "
},
{
  "id": "exer-lin-eqn-subs-4",
  "level": "2",
  "url": "sec-lin-eqn-substitution.html#exer-lin-eqn-subs-4",
  "type": "Exercise",
  "number": "15",
  "title": "",
  "body": "  A farmer looks out his window at his chickens and pigs. He tells his daughter that he sees heads and legs. How many chickens and pigs does the farmer have?     chickens and pigs   "
},
{
  "id": "exer-lin-eqn-subs-5",
  "level": "2",
  "url": "sec-lin-eqn-substitution.html#exer-lin-eqn-subs-5",
  "type": "Exercise",
  "number": "16",
  "title": "",
  "body": "  A lady buys trinkets at a yard sale. The cost of each trinket is either or . If she spends , how many of each type of trinket does she buy?     of the trinkets, of the trinkets   "
},
{
  "id": "sec-matrices-elimination",
  "level": "1",
  "url": "sec-matrices-elimination.html",
  "type": "Section",
  "number": "1.2",
  "title": "Matrices and Elimination",
  "body": " Matrices and Elimination   We saw that substitution is one way of solving systems of linear equations, but the method of substituion is not very practical when there are more than 2 or 3 varibables. In this section, we start learning a more generalizable and easy-to-automate way of solving systems of linear equations.    Prepare   Mathematicians often see solutions to given problems and ask What if ? What are the right kinds of what if questions to ask? It's impossible to know at first, and so mathematicians very often ask wrong questions. That is, they often ask questions and find that the answer isn't particularly interesting. However, asking enough questions often will result in some good right questions. The answers to right questions help us see a bigger picture more clearly and usually lead to something applicable beyond the initial problem. The moral of the story is: don't be afraid of doing something wrong because mathematicians do it all the time!   Recall that in the previous section, we worked through a few examples of solving linear equations using substitution; that is, we solved for one variable in one equation and substituted the resulting expression into another equation. What is a good question to ask after seeing Example ? Here are two possibilities (though not the only two):   Did we really have to call the red balls ? Could we call them ?    What if we had balls at the start instead of ?     Let's look at the first question. Would the solution to our problem change if we called the red balls ? No, we picked the letter r because it made us think of red , but we could have picked , , or any other letter instead. The process of solving would have been exactly the same if we used q for the number of red balls, and at the end we'd find that , and we would know that this meant that we had red balls.  Now let's look at the second question. Suppose we had balls, but the other relationships stayed the same. How would the situation and solution change? Let's compare the original equations to the new equations.    Original  New                The process of solving would stay exactly the same, substituting for in the third equation to get that , and then substituting for both and in the first equation to get that . The only difference is that total is instead of , so the value of is twice as much, and thus also the values of and are twice what they had been.  Two conclusions from answering these two questions are:   it doesn't matter what we call our variables, and    while changing the constants in the equations changes the solution, they don't really change the method of how we solve these equations.     In fact, it is a great discovery to realize that all that matters about a linear system are the constants and the coefficients of the equations. By systematically handling these, we can solve any set of linear equations in a way that saves on processing power, whether the processing is being done by a human or by a computer.   Clickable Areas, Coefficients   Identify (by clicking, or by circling) all of the coefficients in this linear equation.                 The coefficients are the numbers that are multiplied by the variables.     Clickable Areas, Constants   Identify (by clicking, or by circling) all of the constants in this linear equation.                   The constants are the numbers that aren't multiplied by any variables.      Method of Elimination (of Variables)  Let's return to Example . As we mentioned before, there isn't just one right way of finding the solution to this system of equations. Here is another way to do it.  First, we rewrite the equations so that all variables are on the left of the equal sign and all constants are on the right. Also, for a bit more consistency, let's list the variables in alphabetical order in each equation. Therefore we can write the equations as   Now, let's add the first and last equations together, and write the result as a new third equation. This gives us: . A nice feature of this is that the only equation with a in it is the first equation. One could say that we eliminated the from the third equation.  Next let's multiply the second equation by . This gives   Use equations to eliminate variables    Consider the equations We want to use the second equation to eliminate the variable from the first equation. What step should we take?      Multiply the second equation by and add to the first equation.    This would make the first equation , which didn't eliminate the .      Multiply the second equation by and add to the first equation.    This gives , which eliminates the .      Multiply the second equation by and add to the first equation.    This makes the first equation , which eliminates the in the first equation, not the .        Consider the equations We want to use the top equation to eliminate the variable from the bottom equation. What step should we take?      Multiply the top equation by and add to the bottom equation.    This would make the bottom equation , which didn't eliminate the .      Multiply the top equation by and subtract from the bottom equation.    This would eliminate the , but to use this method systematically, we're always going to want to multiply and add , not subtract. Subtracting is the same as adding though!      Multiply the top equation by and add to the bottom equation.    This makes the bottom equation , which eliminates the from the bottom equation.       Let's now do both of those steps in a row to eliminate the from the first and third equations; multiply the second equation by and add that to the first equation, replacing the first equation with that sum, and multiply the second equation by and add that to the third equation, replacing the third equation. Our new system of equations now becomes   We can now multiply the third equation by and find that ; let's make this our new third equation, giving   Now let's eliminate the 's in the first and second equation. To remove the in the first equation, let's multiply the third equation by and add the result to the first equation, replacing the first equation with that sum. To remove the in the second equation, we can multiply the third equation by and add that to the second equation, replacing the second equation with that sum. This gives us: . We have arrived at the same result as when we solved this problem in Example , even though our steps were different.    Why did we need to learn another method (elimination) when our old method (substitution) worked and got the same answer?  Everyone thinks of a different way to solve a system using substitution Mary might choose a different variable to solve for than John chose, and Alicia might start with a different equation, and Steven might substitute into a different equation. When there are more than 2 or 3 variables, substituting gets really laborious, and it's not always clear what steps should come next in order to make progress in solving. Elimination can be made into an algorithm, a set of steps to follow in a particular order that will always result in an answer. Even if sometimes the answer is that there is no solution, or that there are infinitely many solutions. This is both comforting and practical; if you have to work a problem by hand, it's nice to know you'll be able to complete it as long as you remember the steps, and if you don't have to work the problem by hand, an algorithm means it's possible to program a computer to do the steps for you.    Parsons Problem, Elimination vs Substitution   Solve the linear system using the method of elimination.      Multiply the first equation by and add the result to the second equation, yielding     Add to the other side of the first equation, getting , and divide both sides by , resulting in .      Substitute the expression for from the first equation into the second equation, yielding , which simplifies to .    Multiply both sides of the second equation by , yielding       Substitute the value of from the second equation into the first equation, resulting in , so , which means that .    Multiply the second equation by and add the result to the first equation, resulting in , and multiplying both sides by yields .       Matrices  We noticed earlier that there is nothing special about the letters , and ; we could have used , and , or , and . Our work demonstrating the method of elimination suggests that we don't actually need to write the variable names at all, as long as we carefully line them up in the system of equations so that we can keep track of what's being eliminated.  Let's look again at our system of equations in and write the coefficients and the constants in a rectangular array. If any variables are missing from any equations, we write that the coefficient is .   Notice how even the equal signs are gone; we don't need them, for we know that the last entry in each row is the constant of the corresponding equation.  We call this array we have just created a matrix .   Matrix  matrix augmented matrix   A matrix is a rectangular array of numbers.  The horizontal lines of numbers form rows and the vertical lines of numbers form columns . A matrix with rows and columns is said to be an matrix (said out loud as an by matrix ).  If a matrix corresponds to a linear system of equations such that the last column corresponds to the constants of the system, we call the matrix an augmented matrix .  We tend to use capital letters for matrices (the plural of matrix), such as , , and , and we use lowercase letters with subscripts for the entries within a matrix. That is, means the number in the third row and second column of matrix .  All the entries of an matrix would appear like this:     Since matrices contain all the important information from a linear system, we are working our way up to solving systems using only augmented matrices. Using matrices saves us from having to write out the variables over and over again, and matrices are also easy for a computer to understand and manipulate. Matrices are important objects in their own right, and in future sections, we will be able to compute with matrices even when we don't think of them as corresponding to a system of linear equations.      How a matrix is indexed   In the matrix what is ?        The entry in the second row and third column is 6.      The row number comes first, then the column number.      Incorrect. If you're stuck, try reviewing the definition of matrix .        Elimination vs. substitution   Consider the method of substitution used in and the method of elimination described in this section.   State at least one thing the two methods have in common.    State at least one thing that's different between the two methods.        Reflection   Reflect on your confidence level.    How confident do you feel with the material you just read about?     Not at all confident or didn't do the reading.    Not very confident.    Somewhat confident.    Mostly confident.    Confident so far and ready to engage more deeply.        Ask a question about the material. What additional information do you think someone would need to become more confident in their understanding?        Participate     Solve systems of linear equations using the method of elimination    Become more familiar with the terminology and parts of a matrix    Go back and forth between a linear system and an augmented matrix       Elimination   Solve the linear systems below using the method of elimination.                              Parts of a Matrix   For the matrix , identify the     entry .    The entry in the third row and second column is       third column.    The third column is       second row.    The second row is        If is a matrix, how many columns does have?    A matrix has 5 columns.      Using variables , write the linear system corresponding to the above matrix .           Give the augmented matrix corresponding to the linear system in .           Create your own augmented matrix, of any size you choose.      Create your own linear system, with however many variables and equations you choose.       Summary     The method of elimination is a way of solving systems of linear equations that can be made systematic and algorithmic.     Matrices are arrays of numbers. Right now, we are most interested in augmented matrices , whose entries correspond to the coefficients and constants of a system of linear equations.    Elimination works better than substitution when there are more than 2 or 3 variables, and it is the foundation of future sections of material.       Practice  Two variable elimination    Use the method of elimination to solve the linear system:   The solution is and .                  Three variable elimination    Use the method of elimination to solve the linear system:   The solution is , and .                       Augmented matrix from 2-variable system    Write the augmented matrix of the system                                                                                    Augmented matrix from 3-variable system    Write the augmented matrix of the system                                                                                                          About matrices and augmented matrices      Consider the matrix.   Which of the following correctly describes the matrix above?    The matrix is , with 3 rows and 5 columns.    The matrix is , with 5 rows and 3 columns.    The matrix is , with 5 columns and 3 rows.    The matrix is , with 3 columns and 5 rows.      Now consider an matrix If is an augmented matrix, the corresponding linear system has how many variables?                    Linear system from augmented matrix    Convert the augmented matrix below to the associated linear system.   Use  and for the variables.  The associated linear system is:        Expression containing the variables   Constants                                                              Additional Practice  Method of Elimination   In the following exercises, solve the systems of linear equations using the method of elimination.                            Linear System to Augmented Matrix   In the following exercises, convert the given system of linear equations into an augmented matrix.                                                    Augmented Matrix to Linear System   In the following exercises, convert the given augmented matrix into a system of linear equations. Use the variables , , etc.                                                                  "
},
{
  "id": "subsec-matrices-elim-bc-2",
  "level": "2",
  "url": "sec-matrices-elimination.html#subsec-matrices-elim-bc-2",
  "type": "Remark",
  "number": "1.2.1",
  "title": "",
  "body": " Mathematicians often see solutions to given problems and ask What if ? What are the right kinds of what if questions to ask? It's impossible to know at first, and so mathematicians very often ask wrong questions. That is, they often ask questions and find that the answer isn't particularly interesting. However, asking enough questions often will result in some good right questions. The answers to right questions help us see a bigger picture more clearly and usually lead to something applicable beyond the initial problem. The moral of the story is: don't be afraid of doing something wrong because mathematicians do it all the time!  "
},
{
  "id": "clickable-coefficients",
  "level": "2",
  "url": "sec-matrices-elimination.html#clickable-coefficients",
  "type": "Activity",
  "number": "1.2.2",
  "title": "Clickable Areas, Coefficients.",
  "body": " Clickable Areas, Coefficients   Identify (by clicking, or by circling) all of the coefficients in this linear equation.                 The coefficients are the numbers that are multiplied by the variables.   "
},
{
  "id": "clickable-constants",
  "level": "2",
  "url": "sec-matrices-elimination.html#clickable-constants",
  "type": "Activity",
  "number": "1.2.3",
  "title": "Clickable Areas, Constants.",
  "body": " Clickable Areas, Constants   Identify (by clicking, or by circling) all of the constants in this linear equation.                   The constants are the numbers that aren't multiplied by any variables.   "
},
{
  "id": "mc-elimination-check",
  "level": "2",
  "url": "sec-matrices-elimination.html#mc-elimination-check",
  "type": "Activity",
  "number": "1.2.4",
  "title": "Use equations to eliminate variables.",
  "body": "Use equations to eliminate variables    Consider the equations We want to use the second equation to eliminate the variable from the first equation. What step should we take?      Multiply the second equation by and add to the first equation.    This would make the first equation , which didn't eliminate the .      Multiply the second equation by and add to the first equation.    This gives , which eliminates the .      Multiply the second equation by and add to the first equation.    This makes the first equation , which eliminates the in the first equation, not the .        Consider the equations We want to use the top equation to eliminate the variable from the bottom equation. What step should we take?      Multiply the top equation by and add to the bottom equation.    This would make the bottom equation , which didn't eliminate the .      Multiply the top equation by and subtract from the bottom equation.    This would eliminate the , but to use this method systematically, we're always going to want to multiply and add , not subtract. Subtracting is the same as adding though!      Multiply the top equation by and add to the bottom equation.    This makes the bottom equation , which eliminates the from the bottom equation.      "
},
{
  "id": "parsons-elim-vs-sub",
  "level": "2",
  "url": "sec-matrices-elimination.html#parsons-elim-vs-sub",
  "type": "Activity",
  "number": "1.2.5",
  "title": "Parsons Problem, Elimination vs Substitution.",
  "body": " Parsons Problem, Elimination vs Substitution   Solve the linear system using the method of elimination.      Multiply the first equation by and add the result to the second equation, yielding     Add to the other side of the first equation, getting , and divide both sides by , resulting in .      Substitute the expression for from the first equation into the second equation, yielding , which simplifies to .    Multiply both sides of the second equation by , yielding       Substitute the value of from the second equation into the first equation, resulting in , so , which means that .    Multiply the second equation by and add the result to the first equation, resulting in , and multiplying both sides by yields .     "
},
{
  "id": "def_matrix",
  "level": "2",
  "url": "sec-matrices-elimination.html#def_matrix",
  "type": "Definition",
  "number": "1.2.6",
  "title": "Matrix.",
  "body": " Matrix  matrix augmented matrix   A matrix is a rectangular array of numbers.  The horizontal lines of numbers form rows and the vertical lines of numbers form columns . A matrix with rows and columns is said to be an matrix (said out loud as an by matrix ).  If a matrix corresponds to a linear system of equations such that the last column corresponds to the constants of the system, we call the matrix an augmented matrix .  We tend to use capital letters for matrices (the plural of matrix), such as , , and , and we use lowercase letters with subscripts for the entries within a matrix. That is, means the number in the third row and second column of matrix .  All the entries of an matrix would appear like this:    "
},
{
  "id": "matrix-indices",
  "level": "2",
  "url": "sec-matrices-elimination.html#matrix-indices",
  "type": "Reading Question",
  "number": "1",
  "title": "How a matrix is indexed.",
  "body": " How a matrix is indexed   In the matrix what is ?        The entry in the second row and third column is 6.      The row number comes first, then the column number.      Incorrect. If you're stuck, try reviewing the definition of matrix .      "
},
{
  "id": "rq-matrices-sub-vs-elim",
  "level": "2",
  "url": "sec-matrices-elimination.html#rq-matrices-sub-vs-elim",
  "type": "Reading Question",
  "number": "2",
  "title": "Elimination vs. substitution.",
  "body": "Elimination vs. substitution   Consider the method of substitution used in and the method of elimination described in this section.   State at least one thing the two methods have in common.    State at least one thing that's different between the two methods.       "
},
{
  "id": "rq-matrices-elim-questions-poll",
  "level": "2",
  "url": "sec-matrices-elimination.html#rq-matrices-elim-questions-poll",
  "type": "Reading Question",
  "number": "3",
  "title": "Reflection.",
  "body": "Reflection   Reflect on your confidence level.    How confident do you feel with the material you just read about?     Not at all confident or didn't do the reading.    Not very confident.    Somewhat confident.    Mostly confident.    Confident so far and ready to engage more deeply.        Ask a question about the material. What additional information do you think someone would need to become more confident in their understanding?     "
},
{
  "id": "ws-matrices-elim-2",
  "level": "2",
  "url": "sec-matrices-elimination.html#ws-matrices-elim-2",
  "type": "Objectives",
  "number": "",
  "title": "",
  "body": "   Solve systems of linear equations using the method of elimination    Become more familiar with the terminology and parts of a matrix    Go back and forth between a linear system and an augmented matrix    "
},
{
  "id": "ws-matrices-elim-3-1-3",
  "level": "2",
  "url": "sec-matrices-elimination.html#ws-matrices-elim-3-1-3",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "",
  "body": "           "
},
{
  "id": "dc-linsystem4var",
  "level": "2",
  "url": "sec-matrices-elimination.html#dc-linsystem4var",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "",
  "body": "           "
},
{
  "id": "ws-matrices-elim-4-1-3",
  "level": "2",
  "url": "sec-matrices-elimination.html#ws-matrices-elim-4-1-3",
  "type": "Worksheet Exercise",
  "number": "3",
  "title": "",
  "body": "  entry .    The entry in the third row and second column is    "
},
{
  "id": "ws-matrices-elim-4-1-4",
  "level": "2",
  "url": "sec-matrices-elimination.html#ws-matrices-elim-4-1-4",
  "type": "Worksheet Exercise",
  "number": "4",
  "title": "",
  "body": "  third column.    The third column is    "
},
{
  "id": "ws-matrices-elim-4-1-5",
  "level": "2",
  "url": "sec-matrices-elimination.html#ws-matrices-elim-4-1-5",
  "type": "Worksheet Exercise",
  "number": "5",
  "title": "",
  "body": "  second row.    The second row is    "
},
{
  "id": "ws-matrices-elim-4-2",
  "level": "2",
  "url": "sec-matrices-elimination.html#ws-matrices-elim-4-2",
  "type": "Worksheet Exercise",
  "number": "6",
  "title": "",
  "body": "  If is a matrix, how many columns does have?    A matrix has 5 columns.   "
},
{
  "id": "ws-matrices-elim-4-3",
  "level": "2",
  "url": "sec-matrices-elimination.html#ws-matrices-elim-4-3",
  "type": "Worksheet Exercise",
  "number": "7",
  "title": "",
  "body": "  Using variables , write the linear system corresponding to the above matrix .        "
},
{
  "id": "ws-matrices-elim-4-4",
  "level": "2",
  "url": "sec-matrices-elimination.html#ws-matrices-elim-4-4",
  "type": "Worksheet Exercise",
  "number": "8",
  "title": "",
  "body": "  Give the augmented matrix corresponding to the linear system in .        "
},
{
  "id": "ws-matrices-elim-4-5",
  "level": "2",
  "url": "sec-matrices-elimination.html#ws-matrices-elim-4-5",
  "type": "Worksheet Exercise",
  "number": "9",
  "title": "",
  "body": "  Create your own augmented matrix, of any size you choose.   "
},
{
  "id": "ws-matrices-elim-4-6",
  "level": "2",
  "url": "sec-matrices-elimination.html#ws-matrices-elim-4-6",
  "type": "Worksheet Exercise",
  "number": "10",
  "title": "",
  "body": "  Create your own linear system, with however many variables and equations you choose.   "
},
{
  "id": "ww-2-var-elimination",
  "level": "2",
  "url": "sec-matrices-elimination.html#ww-2-var-elimination",
  "type": "Exercise",
  "number": "1.2.1",
  "title": "Two variable elimination.",
  "body": "Two variable elimination    Use the method of elimination to solve the linear system:   The solution is and .                 "
},
{
  "id": "ww-3var-elimination",
  "level": "2",
  "url": "sec-matrices-elimination.html#ww-3var-elimination",
  "type": "Exercise",
  "number": "1.2.2",
  "title": "Three variable elimination.",
  "body": "Three variable elimination    Use the method of elimination to solve the linear system:   The solution is , and .                      "
},
{
  "id": "ww-aug-from-2var",
  "level": "2",
  "url": "sec-matrices-elimination.html#ww-aug-from-2var",
  "type": "Exercise",
  "number": "1.2.3",
  "title": "Augmented matrix from 2-variable system.",
  "body": "Augmented matrix from 2-variable system    Write the augmented matrix of the system                                                                                   "
},
{
  "id": "ww-aug-from-3var",
  "level": "2",
  "url": "sec-matrices-elimination.html#ww-aug-from-3var",
  "type": "Exercise",
  "number": "1.2.4",
  "title": "Augmented matrix from 3-variable system.",
  "body": "Augmented matrix from 3-variable system    Write the augmented matrix of the system                                                                                                         "
},
{
  "id": "ww-matrix-properties",
  "level": "2",
  "url": "sec-matrices-elimination.html#ww-matrix-properties",
  "type": "Exercise",
  "number": "1.2.5",
  "title": "About matrices and augmented matrices.",
  "body": "About matrices and augmented matrices      Consider the matrix.   Which of the following correctly describes the matrix above?    The matrix is , with 3 rows and 5 columns.    The matrix is , with 5 rows and 3 columns.    The matrix is , with 5 columns and 3 rows.    The matrix is , with 3 columns and 5 rows.      Now consider an matrix If is an augmented matrix, the corresponding linear system has how many variables?                   "
},
{
  "id": "ww-3var-system-from-aug",
  "level": "2",
  "url": "sec-matrices-elimination.html#ww-3var-system-from-aug",
  "type": "Exercise",
  "number": "1.2.6",
  "title": "Linear system from augmented matrix.",
  "body": "Linear system from augmented matrix    Convert the augmented matrix below to the associated linear system.   Use  and for the variables.  The associated linear system is:        Expression containing the variables   Constants                                                            "
},
{
  "id": "exer-matrices-elim-2-3",
  "level": "2",
  "url": "sec-matrices-elimination.html#exer-matrices-elim-2-3",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": "           "
},
{
  "id": "exer-matrices-elim-2-4",
  "level": "2",
  "url": "sec-matrices-elimination.html#exer-matrices-elim-2-4",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": "           "
},
{
  "id": "exer-matrices-elim-3-3",
  "level": "2",
  "url": "sec-matrices-elimination.html#exer-matrices-elim-3-3",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": "           "
},
{
  "id": "exer-matrices-elim-3-4",
  "level": "2",
  "url": "sec-matrices-elimination.html#exer-matrices-elim-3-4",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": "           "
},
{
  "id": "exer-matrices-elim-3-5",
  "level": "2",
  "url": "sec-matrices-elimination.html#exer-matrices-elim-3-5",
  "type": "Exercise",
  "number": "5",
  "title": "",
  "body": "           "
},
{
  "id": "exer-matrices-elim-3-6",
  "level": "2",
  "url": "sec-matrices-elimination.html#exer-matrices-elim-3-6",
  "type": "Exercise",
  "number": "6",
  "title": "",
  "body": "           "
},
{
  "id": "exer-matrices-elim-4-3",
  "level": "2",
  "url": "sec-matrices-elimination.html#exer-matrices-elim-4-3",
  "type": "Exercise",
  "number": "7",
  "title": "",
  "body": "           "
},
{
  "id": "exer-matrices-elim-4-4",
  "level": "2",
  "url": "sec-matrices-elimination.html#exer-matrices-elim-4-4",
  "type": "Exercise",
  "number": "8",
  "title": "",
  "body": "           "
},
{
  "id": "exer-matrices-elim-4-5",
  "level": "2",
  "url": "sec-matrices-elimination.html#exer-matrices-elim-4-5",
  "type": "Exercise",
  "number": "9",
  "title": "",
  "body": "           "
},
{
  "id": "exer-matrices-elim-4-6",
  "level": "2",
  "url": "sec-matrices-elimination.html#exer-matrices-elim-4-6",
  "type": "Exercise",
  "number": "10",
  "title": "",
  "body": "           "
},
{
  "id": "exer-matrices-elim-4-7",
  "level": "2",
  "url": "sec-matrices-elimination.html#exer-matrices-elim-4-7",
  "type": "Exercise",
  "number": "11",
  "title": "",
  "body": "           "
},
{
  "id": "sec-row-ops",
  "level": "1",
  "url": "sec-row-ops.html",
  "type": "Section",
  "number": "1.3",
  "title": "Row Operations",
  "body": " Row Operations   We've now seen how to solve linear systems using substitution and elimination, and how to create an augmented matrix representing a linear system. In this section, we see how to perform the variable elimination steps directly on the matrix and interpret the results to give the solution to the corresponding linear system.    Prepare  We use the method of elimination again, but directly on the augmented matrix containing only the coefficients and constants. The steps are essentially the same, except that every time we used the word equation before, we substitute the word row instead.  Solve a system with equations and matrices side by side  Let's redo the work we did last section in our marbles example , this time side by side with the augmented matrix representing the system. Our first step was to write the equations with all the variables on the left side of the equal sign and in alphabetical order, as we did in Equation .  The words explain how we get from the current set of equations (or matrix) to the one on the next line.            Replace equation 3 with the sum of equations 1 and 3.  Replace row 3 with the sum of rows 1 and 3.             Multiply equation 2 by .  Multiply row 2 by .             Replace equation 1 with the sum of times equation 2 plus equation 1. Replace equation 3 with the sum of times equation 2 plus equation 3.  Replace row 1 with the sum of times row 2 plus row 1. Replace row 3 with the sum of times row 2 plus row 3.             Multiply equation 3 by .  Multiply row 3 by .             Replace equation 2 with the sum of times equation 3 plus equation 2. Replace equation 1 with the sum of times equation 3 plus equation 1.  Replace row 2 with the sum of times row 3 plus row 2. Replace row 1 with the sum of times row 3 plus row 1.             The final matrix contains the same solution information as we have on the left. Recall that the first column of our matrices held the coefficients of the variable; the second column held the coefficients of the variable, and the third column held the coefficients of the variable. Therefore, the first row of the matrix can be interpreted as or more concisely,    This is powerful stuff! We write an augmented matrix so that we don't have to keep writing variables over and over again, and now we can solve a linear system by performing operations on the rows of the matrix, without thinking about the linear equations at all, until we can read off the solution to the linear system at the end of the process.    Row operations   In the following tasks, perform the row operations described on the given matrix.     Consider the matrix . Which matrix is the result of multiplying Row 1 by and adding to Row 3?           This multiplied Row 1 by and replaced Row 1. It didn't do anything to Row 3.           Correct!           In the multiply and add row operation, you don't change the row you multiplied by a number; you only change the row you added to.           We have to do the operation to the entire row, not just the first entry.        Consider the matrix . Which matrix is the result of multiplying Row 1 by ?           Correct!           This multiplied both Row 1 and Row 3 by .           This multiplied Row 2 by .        Consider the matrix . Which matrix is the result of interchanging Row 2 and Row 3?           Correct!           This interchanged Row 1 and Row 2.           This replaced Row 2 with a copy of Row 3, but didn't replace Row 3 with a copy of Row 2.       We can save ourselves even more writing by using a shorthand to describe the operations we do to the matrix rows. We use , to represent Row 1 and Row 2, respectively. We can write add Row 1 to Row 3, and replace Row 3 with that sum as . We also replaced Row 2 with of Row 2; we write this in shorthand as .  There is one more operation we can do to rows of a matrix without changing the corresponding system of linear equations; the solutions don't change if we write the equations down in a different order. Thus we can swap the positions of two rows, and the expression means interchange Row 1 and Row 2.    Elementary Row Operations  Let , be two arbitrary rows of a matrix, say Row and Row , and let be a nonzero number. The three elementary row operations are:   Add the result of multiplying a row by a nonzero number to another row, and replace the latter row with that sum, denoted .    Multiply one row by a nonzero number, denoted .    Swap the positions of two rows, denoted .        Row operations notation   In the following tasks, say which elementary row operation was performed on matrix to obtain matrix .     Consider the matrices        Which row operation was done to to obtain ?           Multiply Row 1 by and add to Row 2, replacing Row 2.           This says to multiply Row 1 by , add to Row 2, and replace Row 1 . Row 1 was not changed. This is also not one of the three elementary row operations: we replace the row we added to, not the row we multiplied by a number.           This would make the second row . This is also not one of the elementary row operations - we multiply and add, never multiply and subtract.        Consider the matrices        Which row operation was done to to obtain ?           Correct!           This says Row 1 and Row 2 were swapped.           This says Row 1 replaces Row 3, but we need the arrow to go both ways to say that Row 3 also replaces Row 1. This is also not one of the three elementary row operations.        Consider the matrices        Which row operation was done to to obtain ?           Correct!           This says Row 3 was multiplied by . Check again.           This says Row 3 was multiplied by and the result replaced Row 2 . This is not one of the three elementary row operations.       Let's see one more example of solving a linear system with the equations and the augmented matrices side by side.   Equations and Matrices Side by Side   Find a solution to the following system of linear equations by simultaneously manipulating the equations and the corresponding augmented matrices.     We turn the given system into its corresponding augmented matrix.    System of equations  Corresponding matrix        First, we use the first equation to eliminate the from the second and third equations.    Replace equation 2 with the sum of times equation 1 plus equation 2. Replace equation 3 with the sum of equation 1 and equation 3.           Notice that the second equation no longer contains . We'll exchange the order of the equations so that we can follow the convention of solving for the second variable in the second equation.    Interchange equations 2 and 3.         Multiply equation 2 by .         Multiply equation 3 by .         Notice that the last row tells us that . If we wanted to combine the methods of substitution and elimination, we could substitute in for the in the first two equations, and that would make a lot of sense! However, we choose to demonstrate how continuing with the method of elimination arrives at the same result.    Replace equation 2 with the sum of times equation 3 plus equation 2. Replace equation 1 with the sum of times equation 3 plus equation 1.           Notice how the second equation shows that . All that remains to do is to solve for .    Replace equation 1 with the sum of times equation 2 plus equation 1.         The equations on the left tell us that , and , and the matrix on the right tells us the same information.       Row operation, yes or no?   Let be a matrix. Which of the following notations represent elementary row operations we can perform on ?           We can't multiply a row by , only by a nonzero number. If we multiply both sides of an equation by 0, we get 0=0, which is true but rarely helpful.           Replace Row 4 with the result of multiplying Row 2 by the number 5 and adding that to Row 4.           Two times Row 1 replaces Row 1.           In the row operation involving multiplying and adding, we don't replace the same row that we multiplied by a number.           Swap Row 3 and Row 4.           We can't just replace Row 4 with Row 3 without losing information about the linear system.       Parsons Problem, Sequence of Row Operations   Start with matrix and perform these row operations one after another. Give the matrix that results from doing each operation in order.                                      Reflection   Reflect on your confidence level.    How confident do you feel with the material you just read about?      Not at all confident or didn't do the reading.      Not very confident.      Somewhat confident.      Mostly confident.      Confident so far and ready to engage more deeply.         Ask a question about the material. What additional information do you think someone would need to become more confident in their understanding?         Participate     Solve linear systems using row operations on augmented matrices    Recognize and use the elementary row operations and their notations        Row Operations Notation   For the matrix , give the matrix that results from performing each of the row operations below.      .            .            .          Side-by-side Elimination and Matrices   Solve the linear system below using the method of elimination side-by-side with row operations.                   What row operation was done?   Write down the row operation that transforms into the matrix given in each exercise.                                          Two truths and a lie?   Using shorthand row operation notation, write down two elementary row operations and one thing that looks like but isn't an elementary row operation.    Exploring non-elementary row operations     Do something to the matrix in Problem that is not an elementary row operation, and write down the matrix that you get.      Solve the linear system corresponding to your new matrix. Does the linear system corresponding to your new matrix have the same solution as the linear system in Problem ?      If the linear system has the same solution, can you write down a sequence of elementary row operations that results in your new matrix?        Summary     Row operations are actions we do to the rows of a matrix that correspond to the elimination steps that we perform on the equations in a linear system.    Solving a linear system by performing row operations on an augmented matrix involves the same steps as elimination but with less writing.    There are three elementary row operations and shorthand notations for each of the three.       Practice  Some row operations    Given the matrix   perform the row operation on and enter the result.  Perform the row operation on and enter the result.        A sequence of row operations    Given the matrix   perform the row operations below in the order given and enter the final result.         Identify the row operation performed    The matrix on the right results after performing a single row operation on the matrix on the left.   Identify the row operation. Use R1 , R2 , and R3 to represent the rows  and  Answer:   select   ->   <-->                         Identify the row operation performed    The matrix on the right results after performing a single row operation on the matrix on the left.   Identify the row operation. Use R1 , R2 , and R3 to represent the rows  and  Answer:   select   ->   <-->                         Identify the row operation performed    The matrix on the right results after performing a single row operation on the matrix on the left.   Identify the row operation. Use R1 , R2 , and R3 to represent the rows  and  Answer:   select   ->   <-->                     Additional Practice  Perform row operations   In the following exercises, perform the given row operations on , where                                                                             Which row operation was done?   A matrix is given below. In the following exercises, a matrix is given. Give the row operation that transforms into .                                                                 Equations and matrices together   In the following exercises, rewrite the system of equations in matrix form. Find the solution to the linear system by simultaneously manipulating the equations and the matrix.                                                                             "
},
{
  "id": "subsec-row-ops-bc-3",
  "level": "2",
  "url": "sec-row-ops.html#subsec-row-ops-bc-3",
  "type": "Example",
  "number": "1.3.1",
  "title": "Solve a system with equations and matrices side by side.",
  "body": "Solve a system with equations and matrices side by side  Let's redo the work we did last section in our marbles example , this time side by side with the augmented matrix representing the system. Our first step was to write the equations with all the variables on the left side of the equal sign and in alphabetical order, as we did in Equation .  The words explain how we get from the current set of equations (or matrix) to the one on the next line.            Replace equation 3 with the sum of equations 1 and 3.  Replace row 3 with the sum of rows 1 and 3.             Multiply equation 2 by .  Multiply row 2 by .             Replace equation 1 with the sum of times equation 2 plus equation 1. Replace equation 3 with the sum of times equation 2 plus equation 3.  Replace row 1 with the sum of times row 2 plus row 1. Replace row 3 with the sum of times row 2 plus row 3.             Multiply equation 3 by .  Multiply row 3 by .             Replace equation 2 with the sum of times equation 3 plus equation 2. Replace equation 1 with the sum of times equation 3 plus equation 1.  Replace row 2 with the sum of times row 3 plus row 2. Replace row 1 with the sum of times row 3 plus row 1.             The final matrix contains the same solution information as we have on the left. Recall that the first column of our matrices held the coefficients of the variable; the second column held the coefficients of the variable, and the third column held the coefficients of the variable. Therefore, the first row of the matrix can be interpreted as or more concisely,   "
},
{
  "id": "row-ops-practice",
  "level": "2",
  "url": "sec-row-ops.html#row-ops-practice",
  "type": "Activity",
  "number": "1.3.2",
  "title": "Row operations.",
  "body": " Row operations   In the following tasks, perform the row operations described on the given matrix.     Consider the matrix . Which matrix is the result of multiplying Row 1 by and adding to Row 3?           This multiplied Row 1 by and replaced Row 1. It didn't do anything to Row 3.           Correct!           In the multiply and add row operation, you don't change the row you multiplied by a number; you only change the row you added to.           We have to do the operation to the entire row, not just the first entry.        Consider the matrix . Which matrix is the result of multiplying Row 1 by ?           Correct!           This multiplied both Row 1 and Row 3 by .           This multiplied Row 2 by .        Consider the matrix . Which matrix is the result of interchanging Row 2 and Row 3?           Correct!           This interchanged Row 1 and Row 2.           This replaced Row 2 with a copy of Row 3, but didn't replace Row 3 with a copy of Row 2.      "
},
{
  "id": "def_elementary_row_operations",
  "level": "2",
  "url": "sec-row-ops.html#def_elementary_row_operations",
  "type": "Definition",
  "number": "1.3.3",
  "title": "Elementary Row Operations.",
  "body": " Elementary Row Operations  Let , be two arbitrary rows of a matrix, say Row and Row , and let be a nonzero number. The three elementary row operations are:   Add the result of multiplying a row by a nonzero number to another row, and replace the latter row with that sum, denoted .    Multiply one row by a nonzero number, denoted .    Swap the positions of two rows, denoted .     "
},
{
  "id": "row-ops-notation-practice",
  "level": "2",
  "url": "sec-row-ops.html#row-ops-notation-practice",
  "type": "Activity",
  "number": "1.3.4",
  "title": "Row operations notation.",
  "body": " Row operations notation   In the following tasks, say which elementary row operation was performed on matrix to obtain matrix .     Consider the matrices        Which row operation was done to to obtain ?           Multiply Row 1 by and add to Row 2, replacing Row 2.           This says to multiply Row 1 by , add to Row 2, and replace Row 1 . Row 1 was not changed. This is also not one of the three elementary row operations: we replace the row we added to, not the row we multiplied by a number.           This would make the second row . This is also not one of the elementary row operations - we multiply and add, never multiply and subtract.        Consider the matrices        Which row operation was done to to obtain ?           Correct!           This says Row 1 and Row 2 were swapped.           This says Row 1 replaces Row 3, but we need the arrow to go both ways to say that Row 3 also replaces Row 1. This is also not one of the three elementary row operations.        Consider the matrices        Which row operation was done to to obtain ?           Correct!           This says Row 3 was multiplied by . Check again.           This says Row 3 was multiplied by and the result replaced Row 2 . This is not one of the three elementary row operations.      "
},
{
  "id": "ex_eq_mat",
  "level": "2",
  "url": "sec-row-ops.html#ex_eq_mat",
  "type": "Example",
  "number": "1.3.5",
  "title": "Equations and Matrices Side by Side.",
  "body": " Equations and Matrices Side by Side   Find a solution to the following system of linear equations by simultaneously manipulating the equations and the corresponding augmented matrices.     We turn the given system into its corresponding augmented matrix.    System of equations  Corresponding matrix        First, we use the first equation to eliminate the from the second and third equations.    Replace equation 2 with the sum of times equation 1 plus equation 2. Replace equation 3 with the sum of equation 1 and equation 3.           Notice that the second equation no longer contains . We'll exchange the order of the equations so that we can follow the convention of solving for the second variable in the second equation.    Interchange equations 2 and 3.         Multiply equation 2 by .         Multiply equation 3 by .         Notice that the last row tells us that . If we wanted to combine the methods of substitution and elimination, we could substitute in for the in the first two equations, and that would make a lot of sense! However, we choose to demonstrate how continuing with the method of elimination arrives at the same result.    Replace equation 2 with the sum of times equation 3 plus equation 2. Replace equation 1 with the sum of times equation 3 plus equation 1.           Notice how the second equation shows that . All that remains to do is to solve for .    Replace equation 1 with the sum of times equation 2 plus equation 1.         The equations on the left tell us that , and , and the matrix on the right tells us the same information.   "
},
{
  "id": "select-row-ops",
  "level": "2",
  "url": "sec-row-ops.html#select-row-ops",
  "type": "Reading Question",
  "number": "1",
  "title": "Row operation, yes or no?",
  "body": " Row operation, yes or no?   Let be a matrix. Which of the following notations represent elementary row operations we can perform on ?           We can't multiply a row by , only by a nonzero number. If we multiply both sides of an equation by 0, we get 0=0, which is true but rarely helpful.           Replace Row 4 with the result of multiplying Row 2 by the number 5 and adding that to Row 4.           Two times Row 1 replaces Row 1.           In the row operation involving multiplying and adding, we don't replace the same row that we multiplied by a number.           Swap Row 3 and Row 4.           We can't just replace Row 4 with Row 3 without losing information about the linear system.     "
},
{
  "id": "parsons-row-ops-sequence",
  "level": "2",
  "url": "sec-row-ops.html#parsons-row-ops-sequence",
  "type": "Reading Question",
  "number": "2",
  "title": "Parsons Problem, Sequence of Row Operations.",
  "body": " Parsons Problem, Sequence of Row Operations   Start with matrix and perform these row operations one after another. Give the matrix that results from doing each operation in order.                                     "
},
{
  "id": "rq-row-ops-questions-poll",
  "level": "2",
  "url": "sec-row-ops.html#rq-row-ops-questions-poll",
  "type": "Reading Question",
  "number": "3",
  "title": "Reflection.",
  "body": "Reflection   Reflect on your confidence level.    How confident do you feel with the material you just read about?      Not at all confident or didn't do the reading.      Not very confident.      Somewhat confident.      Mostly confident.      Confident so far and ready to engage more deeply.         Ask a question about the material. What additional information do you think someone would need to become more confident in their understanding?     "
},
{
  "id": "ws-row-ops-2",
  "level": "2",
  "url": "sec-row-ops.html#ws-row-ops-2",
  "type": "Objectives",
  "number": "",
  "title": "",
  "body": "   Solve linear systems using row operations on augmented matrices    Recognize and use the elementary row operations and their notations    "
},
{
  "id": "ws-row-ops-3-1",
  "level": "2",
  "url": "sec-row-ops.html#ws-row-ops-3-1",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "Row Operations Notation.",
  "body": "Row Operations Notation   For the matrix , give the matrix that results from performing each of the row operations below.      .            .            .         "
},
{
  "id": "row-op-ws-matrix-sys",
  "level": "2",
  "url": "sec-row-ops.html#row-op-ws-matrix-sys",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "Side-by-side Elimination and Matrices.",
  "body": "Side-by-side Elimination and Matrices   Solve the linear system below using the method of elimination side-by-side with row operations.                "
},
{
  "id": "ws-row-ops-4-1-3",
  "level": "2",
  "url": "sec-row-ops.html#ws-row-ops-4-1-3",
  "type": "Worksheet Exercise",
  "number": "3",
  "title": "",
  "body": "           "
},
{
  "id": "ws-row-ops-4-1-4",
  "level": "2",
  "url": "sec-row-ops.html#ws-row-ops-4-1-4",
  "type": "Worksheet Exercise",
  "number": "4",
  "title": "",
  "body": "           "
},
{
  "id": "ws-row-ops-4-1-5",
  "level": "2",
  "url": "sec-row-ops.html#ws-row-ops-4-1-5",
  "type": "Worksheet Exercise",
  "number": "5",
  "title": "",
  "body": "           "
},
{
  "id": "ws-row-ops-4-2",
  "level": "2",
  "url": "sec-row-ops.html#ws-row-ops-4-2",
  "type": "Worksheet Exercise",
  "number": "6",
  "title": "Two truths and a lie?",
  "body": "Two truths and a lie?   Using shorthand row operation notation, write down two elementary row operations and one thing that looks like but isn't an elementary row operation.   "
},
{
  "id": "ws-row-ops-4-3",
  "level": "2",
  "url": "sec-row-ops.html#ws-row-ops-4-3",
  "type": "Worksheet Exercise",
  "number": "7",
  "title": "Exploring non-elementary row operations.",
  "body": "Exploring non-elementary row operations     Do something to the matrix in Problem that is not an elementary row operation, and write down the matrix that you get.      Solve the linear system corresponding to your new matrix. Does the linear system corresponding to your new matrix have the same solution as the linear system in Problem ?      If the linear system has the same solution, can you write down a sequence of elementary row operations that results in your new matrix?    "
},
{
  "id": "ww-row-op-enter-matrix",
  "level": "2",
  "url": "sec-row-ops.html#ww-row-op-enter-matrix",
  "type": "Exercise",
  "number": "1.3.1",
  "title": "Some row operations.",
  "body": "Some row operations    Given the matrix   perform the row operation on and enter the result.  Perform the row operation on and enter the result.       "
},
{
  "id": "ww-row-op-enter-matrix2",
  "level": "2",
  "url": "sec-row-ops.html#ww-row-op-enter-matrix2",
  "type": "Exercise",
  "number": "1.3.2",
  "title": "A sequence of row operations.",
  "body": "A sequence of row operations    Given the matrix   perform the row operations below in the order given and enter the final result.        "
},
{
  "id": "ww-identify-row-op",
  "level": "2",
  "url": "sec-row-ops.html#ww-identify-row-op",
  "type": "Exercise",
  "number": "1.3.3",
  "title": "Identify the row operation performed.",
  "body": "Identify the row operation performed    The matrix on the right results after performing a single row operation on the matrix on the left.   Identify the row operation. Use R1 , R2 , and R3 to represent the rows  and  Answer:   select   ->   <-->                        "
},
{
  "id": "ww-identify-row-op2",
  "level": "2",
  "url": "sec-row-ops.html#ww-identify-row-op2",
  "type": "Exercise",
  "number": "1.3.4",
  "title": "Identify the row operation performed.",
  "body": "Identify the row operation performed    The matrix on the right results after performing a single row operation on the matrix on the left.   Identify the row operation. Use R1 , R2 , and R3 to represent the rows  and  Answer:   select   ->   <-->                        "
},
{
  "id": "ww-identify-row-op3",
  "level": "2",
  "url": "sec-row-ops.html#ww-identify-row-op3",
  "type": "Exercise",
  "number": "1.3.5",
  "title": "Identify the row operation performed.",
  "body": "Identify the row operation performed    The matrix on the right results after performing a single row operation on the matrix on the left.   Identify the row operation. Use R1 , R2 , and R3 to represent the rows  and  Answer:   select   ->   <-->                   "
},
{
  "id": "exer-row-ops-2-3",
  "level": "2",
  "url": "sec-row-ops.html#exer-row-ops-2-3",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": "           "
},
{
  "id": "exer-row-ops-2-4",
  "level": "2",
  "url": "sec-row-ops.html#exer-row-ops-2-4",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": "           "
},
{
  "id": "exer-row-ops-2-5",
  "level": "2",
  "url": "sec-row-ops.html#exer-row-ops-2-5",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": "           "
},
{
  "id": "exer-row-ops-2-6",
  "level": "2",
  "url": "sec-row-ops.html#exer-row-ops-2-6",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": "           "
},
{
  "id": "exer-row-ops-2-7",
  "level": "2",
  "url": "sec-row-ops.html#exer-row-ops-2-7",
  "type": "Exercise",
  "number": "5",
  "title": "",
  "body": "           "
},
{
  "id": "exer-row-ops-2-8",
  "level": "2",
  "url": "sec-row-ops.html#exer-row-ops-2-8",
  "type": "Exercise",
  "number": "6",
  "title": "",
  "body": "           "
},
{
  "id": "exer-row-ops-3-3",
  "level": "2",
  "url": "sec-row-ops.html#exer-row-ops-3-3",
  "type": "Exercise",
  "number": "7",
  "title": "",
  "body": "           "
},
{
  "id": "exer-row-ops-3-4",
  "level": "2",
  "url": "sec-row-ops.html#exer-row-ops-3-4",
  "type": "Exercise",
  "number": "8",
  "title": "",
  "body": "           "
},
{
  "id": "exer-row-ops-3-5",
  "level": "2",
  "url": "sec-row-ops.html#exer-row-ops-3-5",
  "type": "Exercise",
  "number": "9",
  "title": "",
  "body": "           "
},
{
  "id": "exer-row-ops-3-6",
  "level": "2",
  "url": "sec-row-ops.html#exer-row-ops-3-6",
  "type": "Exercise",
  "number": "10",
  "title": "",
  "body": "           "
},
{
  "id": "exer-row-ops-3-7",
  "level": "2",
  "url": "sec-row-ops.html#exer-row-ops-3-7",
  "type": "Exercise",
  "number": "11",
  "title": "",
  "body": "           "
},
{
  "id": "exer-row-ops-4-3",
  "level": "2",
  "url": "sec-row-ops.html#exer-row-ops-4-3",
  "type": "Exercise",
  "number": "12",
  "title": "",
  "body": "           "
},
{
  "id": "exer-row-ops-4-4",
  "level": "2",
  "url": "sec-row-ops.html#exer-row-ops-4-4",
  "type": "Exercise",
  "number": "13",
  "title": "",
  "body": "           "
},
{
  "id": "exer-row-ops-4-5",
  "level": "2",
  "url": "sec-row-ops.html#exer-row-ops-4-5",
  "type": "Exercise",
  "number": "14",
  "title": "",
  "body": "           "
},
{
  "id": "exer-row-ops-4-6",
  "level": "2",
  "url": "sec-row-ops.html#exer-row-ops-4-6",
  "type": "Exercise",
  "number": "15",
  "title": "",
  "body": "           "
},
{
  "id": "exer-row-ops-4-7",
  "level": "2",
  "url": "sec-row-ops.html#exer-row-ops-4-7",
  "type": "Exercise",
  "number": "16",
  "title": "",
  "body": "           "
},
{
  "id": "exer-row-ops-4-8",
  "level": "2",
  "url": "sec-row-ops.html#exer-row-ops-4-8",
  "type": "Exercise",
  "number": "17",
  "title": "",
  "body": "           "
},
{
  "id": "sec-rref",
  "level": "1",
  "url": "sec-rref.html",
  "type": "Section",
  "number": "1.4",
  "title": "Reduced Row Echelon Form",
  "body": " Reduced Row Echelon Form   We have learned about the method of elimination of variables and about row operations on matrices; in this section, we learn Gauss-Jordan elimination to put matrices into reduced row echelon form .    Prepare  Performing elementary row operations on an augmented matrix resulted in a new linear system whose solution was the same as the original linear system. This brings to mind two good questions:   What is the goal of using elementary row operations?    How do we achieve that goal the fastest?     We'll answer the first question first. In , when we manipulated matrices to find solutions, we were in fact putting the matrix into reduced row echelon form .   Reduced Row Echelon Form  reduced row echelon form  row echelon form   A matrix is in reduced row echelon form if its entries satisfy all four of the following conditions.   The first nonzero entry in each row is a (called a leading ). leading one     Each leading comes in a column to the right of the leading 's in rows above it.    All rows of all 's come at the bottom of the matrix.    If a column contains a leading , then all other entries in that column are .     A matrix that satisfies the first three conditions is said to be in row echelon form .     RREF or not?   For each of the following matrices, say whether they are in reduced row echelon form or not.            Reduced row echelon form    Correct!      Not in reduced row echelon form    The first nonzero entry in each row is a , each leading 1 appears down and to the right from the previous leading 1, and all the entries in the same column as a leading 1 are .               Reduced row echelon form    Correct!      Not in reduced row echelon form    The first nonzero entry in each row is a , each leading 1 appears down and to the right from the previous leading 1, and all the entries in the same column as a leading 1 are .  The third column does not have a leading 1 in it, but that's okay; the conditions for rref don't say that every column has to contain a leading 1.               Reduced row echelon form    Correct!      Not in reduced row echelon form    The rref conditions don't say that leading 1's have to exist; the conditions say that if nonzero entries are present, then leading 1's have to be in certain relative positions.               Reduced row echelon form    Correct!      Not in reduced row echelon form    The second column does not have a leading 1 in it, but that's okay; the conditions for rref don't say that every column has to contain a leading 1.                Reduced row echelon form    The third condition in says that any rows of all zeroes must be at the bottom.      Not in reduced row echelon form    Correct!               Reduced row echelon form    The first nonzero entry of the second row is , and it needs to be to be in rref. (The third row fails this condition also).      Not in reduced row echelon form    Correct!               Reduced row echelon form    Correct!      Not in reduced row echelon form    The first, third, fourth, and sixth columns do not have a leading 1 in them, and that means that the other entries in those columns don't have to be .               Reduced row echelon form    The second column has a leading in it (from the second row), and that means all the other entries in that column have to be .      Not in reduced row echelon form    Correct!       We began this section with two questions, Where do we go? and How do we get there quickly? We've just answered the first question: most of the time we are going to reduced row echelon form. We now address the second question.  There are many ways to use elementary row operations to transform a matrix into reduced row echelon form, but there is a general technique that is efficient and doesn't waste time on unnecessary steps. This technique is called Gauss-Jordan elimination , named in honor of the mathematicians Karl Friedrich Gauss and Wilhelm Jordan.   Gauss-Jordan Elimination  Gauss-Jordan elimination   Gauss-Jordan elimination is the technique for finding the reduced row echelon form of a matrix using the procedure summarized below:   Create a leading .    Use this leading to put zeros underneath it.    Repeat the above steps until all possible rows have leading 's.    Put zeros above these leading 's.      This is roughly what we were already doing in previous sections when we used elimination and row operations, but let's see an example.   Gauss-Jordan Elimination Demonstrated  Put the augmented matrix of the following system of linear equations into reduced row echelon form.   We start by converting the linear system into an augmented matrix.   Our first step is to make the first entry in the first row a . We do this by multiplying Row 1 by . (This row operation is also called scaling. )          Our next step is to put zeros under this . To create a for the first entry in the second row, we'll use the multiply and add elementary row operation.          The first entry in the third row is already , so our first column looks good for reduced row echelon form. We now shift our focus from the leading down and to the right, to the position that is boxed.  We want to put a in this position, but we need to restrict ourselves to using only the second row and any rows below it , as using the first row would put nonzero entries back into the first column and undo the work we just did. Let's first swap Row 2 and Row 3, and then scale the new second row (multiply it by a number) so that there is a in the desired position.                  We have now created another leading , this time in the second row. Our next desire is to put 's underneath it, but that's already done! Therefore we again shift our attention down and to the right to the next position in a box. We want that to be a , and so we multiply the row by .          This ends what we will refer to as the forward steps . Our next task is to use the \"multiply and add\" row operation to put zeros above the leading 's. This is referred to as the backward steps .                  This matrix is now in reduced row echelon form, and we can read off the solution to the original linear system as , and .   We now summarize and try to formalize the steps we performed.   Forward Steps Gaussian elimination forward steps    Start at the top left corner.    If the entry in the row and column that we are considering is , swap rows with a row below the current row so that the entry is nonzero. If this entry is and all entries below are , we are done with this column; move to the right and do this step again.    Since the entry we are considering is nonzero, multiply the current row by a number ( scale the row ) to make its first entry a .    Repeatedly use the multiply and add row operation to put 's underneath the leading .    Move down and to the right. Go back to step 2 and work on the new rows and columns until you run out of either rows or columns.     The above steps accomplish the following things:   The first nonzero entry in each row is a .    Each leading is in a column to the right of the leading 's above it.    All rows of all 's come at the bottom of the matrix.     Note that this means we have just put a matrix into row echelon form . The next steps finish the conversion into reduced row echelon form.   Backward Steps Gaussian elimination backward steps    Starting from the bottom rightmost leading , use the multiply and add row operation repeatedly to put zeros above the leading .    Continue this process by moving up and to the left to the next leading , repeatedly use multiply and add to put zeros above the leading . Repeat this step until every leading has zeros above in all the rows.     By following these Forward and Backward Steps , we make use of the presence of zeros to make the computations easier and more efficient.  Many authors call the forward steps Gaussian elimination , which puts a matrix into row echelon form, and the forward-and-backward steps together Gauss-Jordan elimination , which puts a matrix into reduced row echelon form. We will almost always want to obtain reduced row echelon form and will not make a big deal about the distinction between the names Gaussian and Gauss-Jordan.     Gauss-Jordan Steps   Answer the following questions about using Gauss-Jordan elimination, which entries to work on next and what row operations to perform.     Given the matrix the Gauss-Jordan algorithm starts by turning the that is entry , into a . Which row operation do we use?      Scaling (multiplying a row by a nonzero number)    Correct!      Swapping rows    Swapping Row 1 and Row 2 would actually work for this matrix, and we'd end up in the same rref eventually. But part of the beauty of the Gauss-Jordan procedure is that following the prescribed steps of the algorithm always works, and swapping two rows won't always work to turn a into a .      Multiply and add    We use the multiply and add row operation when we are trying to get 's, not when our goal is to get a .        Given the matrix which entry do we focus on turning into a or next?            This entry is already a as required by the Gauss-Jordan method.            Correct! We need to turn the entries below the leading in Row 1 into 's.            No, we finish putting 's below the leading in the first column before moving to the right.        To turn the boxed entry below into a , which row operation do we perform?       Scaling a row    No, scaling a row means multiplying by a nonzero number which won't result in a if we didn't start with a .      Swapping rows    In this case, swapping Row 2 and Row 3 would put a into position , but that won't always work, and it just moves the problem down a row.      Multiply and add    Correct! Multiplying Row 1 by and adding to Row 2 will create a in position .        To continue the Gauss-Jordan algorithm on the matrix below, which entry do we next try to turn into a or ?            No, entry is the entry boxed below. The Gauss-Jordan algorithm says that after finishing a column, we move down and to the right from the leading .            No, entry is the entry boxed below. It's already a below a leading .            Correct! The next step in the Gauss-Jordan algorithm is to turn entry , which is boxed below, into a .         Given the matrix which row operation do we use next in the Gauss-Jordan algorithm?      Scaling a row    Correct!      Swapping rows    No, swapping rows is only used when there is a with nonzero entries below it.      Multiply and add    We use the multiply and add row operation when we are trying to get 's, not when our goal is to get a .       Let's practice the Gauss-Jordan algorithm some more.   Another Gauss-Jordan Elimination   Use Gauss-Jordan elimination to put the matrix into reduced row echelon form, where     We start by wanting to make the entry in the first column and first row a . To do this we'll scale the first row by a factor of .          Next we need to put zeros in the column below this newly formed leading .          Our attention now shifts to the right one column and down one row to the position indicated by the box. We want to put a in that position. Our only options are to either scale the current row or to interchange rows with a row below it. However, neither of those options will change the into a in this case. Therefore, we shift our attention to the right one more column, to the .     We want to create a leading for this row, so we multiply by a nonzero number.          Next we use multiply and add to put a underneath this leading .          We would continue moving down and to the right, but since the third row is all 's, and there aren't any more rows, we are done with the forward steps.  Our next goal is to put a above each of the leading 's.          This final matrix is in reduced row echelon form.     Gauss-Jordan Elimination Again, this time with fewer words   Put the matrix into reduced row echelon form.    Here we will show all steps without explaining each one.                                                    We were inspired by solving systems of linear equations to put matrices into reduced row echelon form, in order to make the solution easy to see. Every time we've started with a linear system, there was exactly one solution, and the reduced row echelon form always had one particular form. However, we've also practiced putting matrices in reduced row echelon form without referring back to their corresponding system of linear equations, and we have seen various different ways that the reduced row echelon form of a matrix can look. Connecting different reduced row echelon forms with solutions to the corresponding linear system is the topic for next section.   Gauss-Jordan Elimination   Describe how to perform Gauss-Jordan elimination in your own words.  If it helps you to describe the process, you can make up a specific matrix to use, or use an arbitrary one like .      Parsons Problem, Reduced Row Echelon Form   Perform Gauss-Jordan elimination on matrix .                                               Reflection   Reflect on your confidence level.    How confident do you feel with the material you just read about?      Not at all confident or didn't do the reading.      Not very confident.      Somewhat confident.      Mostly confident.      Confident so far and ready to engage more deeply.         Ask a question about the material. What additional information do you think someone would need to become more confident in their understanding?         Participate     Identify matrices in reduced row echelon form and row echelon form    Use Gauss-Jordan elimination to put matrices into reduced row echelon form       Why rref?   Write the associated system of linear equations for each of the matrices below.          Which system of equations would you prefer to be asked to solve on an exam?                Gauss-Jordan algorithm   Use Gauss-Jordan elimination to put each of the matrices below into reduced row echelon form.                                              Form of matrices   For each of the following matrices, say if it is in reduced row echelon form. If it isn't, say whether it is in row echelon form or if it's in neither form.                                                   rref    rref    ref    neither    neither    neither    rref    rref         Write down the associated linear system of equations for , and . What observations and questions do you have about these systems?                     Summary     A matrix could either be in reduced row echelon form or not. There are four conditions, concerning the locations of zero and nonzero entries, that must all be true for a matrix to be in reduced row echelon form.     Gauss-Jordan elimination is an algorithm that uses elementary row operations to efficiently transform a matrix into reduced row echelon form.    Matrices in reduced row echelon form are useful for finding the solution to a system of linear equations.      Practice      Determine whether the following matrices are in echelon form, reduced echelon form or not in echelon form.  a.  Choose   Echelon Form   Reduced Echelon Form   Not in Echelon Form    b.  Choose   Echelon Form   Reduced Echelon Form   Not in Echelon Form    c.  Choose   Echelon Form   Reduced Echelon Form   Not in Echelon Form    d.  Choose   Echelon Form   Reduced Echelon Form   Not in Echelon Form                                  Determine whether the following matrices are in echelon form, reduced echelon form or not in echelon form.  a.  Choose   Echelon Form   Reduced Echelon Form   Not in Echelon Form    b.  Choose   Echelon Form   Reduced Echelon Form   Not in Echelon Form    c.  Choose   Echelon Form   Reduced Echelon Form   Not in Echelon Form    d.  Choose   Echelon Form   Reduced Echelon Form   Not in Echelon Form                                  Solve the following system using augmented matrix methods:  (a) The initial matrix is:              (b) First, perform the Row Operation . The resulting matrix is:              (c) Next, perform the operation . The resulting matrix is:              (d) Finish simplifying the augmented matrix. The reduced matrix is:              (e) What are the solutions to the system?                                                                                                                                                  Reduce the matrix to reduced row-echelon form.   First, do , resulting in  Then, do , resulting in Next, do , resulting in  Now we can multiply by a constant to create the leading 1, and then do the backwards steps.           Reduce the matrix to reduced row-echelon form.           Additional Practice  RREF: yes or no?   In the following exercises, state whether or not the given matrix is in reduced row echelon form. If it is not, state why.          rref             No, the leading in the second row doesn't appear to the right of the leading in the row above.           No, the leading in the second row doesn't appear to the right of the leading in the row above, and not every entry in the same column as a leading is .           Yes           Yes           Yes           No, any rows of all zeros have to be at the bottom.           Yes           No, there are nonzero entries in the same column as leading 's.           Yes           Yes           Yes           No, the first nonzero entry in each row must be a .           Yes           Yes           Yes     Gauss-Jordan Elimination   In the following exercises, use Gauss-Jordan Elimination to put the given matrix into reduced row echelon form.                                                                                                                                                                                                                             "
},
{
  "id": "def_rref",
  "level": "2",
  "url": "sec-rref.html#def_rref",
  "type": "Definition",
  "number": "1.4.1",
  "title": "Reduced Row Echelon Form.",
  "body": " Reduced Row Echelon Form  reduced row echelon form  row echelon form   A matrix is in reduced row echelon form if its entries satisfy all four of the following conditions.   The first nonzero entry in each row is a (called a leading ). leading one     Each leading comes in a column to the right of the leading 's in rows above it.    All rows of all 's come at the bottom of the matrix.    If a column contains a leading , then all other entries in that column are .     A matrix that satisfies the first three conditions is said to be in row echelon form .   "
},
{
  "id": "rref-or-not-examples",
  "level": "2",
  "url": "sec-rref.html#rref-or-not-examples",
  "type": "Activity",
  "number": "1.4.2",
  "title": "RREF or not?",
  "body": " RREF or not?   For each of the following matrices, say whether they are in reduced row echelon form or not.            Reduced row echelon form    Correct!      Not in reduced row echelon form    The first nonzero entry in each row is a , each leading 1 appears down and to the right from the previous leading 1, and all the entries in the same column as a leading 1 are .               Reduced row echelon form    Correct!      Not in reduced row echelon form    The first nonzero entry in each row is a , each leading 1 appears down and to the right from the previous leading 1, and all the entries in the same column as a leading 1 are .  The third column does not have a leading 1 in it, but that's okay; the conditions for rref don't say that every column has to contain a leading 1.               Reduced row echelon form    Correct!      Not in reduced row echelon form    The rref conditions don't say that leading 1's have to exist; the conditions say that if nonzero entries are present, then leading 1's have to be in certain relative positions.               Reduced row echelon form    Correct!      Not in reduced row echelon form    The second column does not have a leading 1 in it, but that's okay; the conditions for rref don't say that every column has to contain a leading 1.                Reduced row echelon form    The third condition in says that any rows of all zeroes must be at the bottom.      Not in reduced row echelon form    Correct!               Reduced row echelon form    The first nonzero entry of the second row is , and it needs to be to be in rref. (The third row fails this condition also).      Not in reduced row echelon form    Correct!               Reduced row echelon form    Correct!      Not in reduced row echelon form    The first, third, fourth, and sixth columns do not have a leading 1 in them, and that means that the other entries in those columns don't have to be .               Reduced row echelon form    The second column has a leading in it (from the second row), and that means all the other entries in that column have to be .      Not in reduced row echelon form    Correct!      "
},
{
  "id": "def_gaussian_elimination-3",
  "level": "2",
  "url": "sec-rref.html#def_gaussian_elimination-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Gauss-Jordan elimination "
},
{
  "id": "ex_gaussian_elimination",
  "level": "2",
  "url": "sec-rref.html#ex_gaussian_elimination",
  "type": "Example",
  "number": "1.4.3",
  "title": "Gauss-Jordan Elimination Demonstrated.",
  "body": " Gauss-Jordan Elimination Demonstrated  Put the augmented matrix of the following system of linear equations into reduced row echelon form.   We start by converting the linear system into an augmented matrix.   Our first step is to make the first entry in the first row a . We do this by multiplying Row 1 by . (This row operation is also called scaling. )          Our next step is to put zeros under this . To create a for the first entry in the second row, we'll use the multiply and add elementary row operation.          The first entry in the third row is already , so our first column looks good for reduced row echelon form. We now shift our focus from the leading down and to the right, to the position that is boxed.  We want to put a in this position, but we need to restrict ourselves to using only the second row and any rows below it , as using the first row would put nonzero entries back into the first column and undo the work we just did. Let's first swap Row 2 and Row 3, and then scale the new second row (multiply it by a number) so that there is a in the desired position.                  We have now created another leading , this time in the second row. Our next desire is to put 's underneath it, but that's already done! Therefore we again shift our attention down and to the right to the next position in a box. We want that to be a , and so we multiply the row by .          This ends what we will refer to as the forward steps . Our next task is to use the \"multiply and add\" row operation to put zeros above the leading 's. This is referred to as the backward steps .                  This matrix is now in reduced row echelon form, and we can read off the solution to the original linear system as , and .  "
},
{
  "id": "rref-steps",
  "level": "2",
  "url": "sec-rref.html#rref-steps",
  "type": "Activity",
  "number": "1.4.4",
  "title": "Gauss-Jordan Steps.",
  "body": " Gauss-Jordan Steps   Answer the following questions about using Gauss-Jordan elimination, which entries to work on next and what row operations to perform.     Given the matrix the Gauss-Jordan algorithm starts by turning the that is entry , into a . Which row operation do we use?      Scaling (multiplying a row by a nonzero number)    Correct!      Swapping rows    Swapping Row 1 and Row 2 would actually work for this matrix, and we'd end up in the same rref eventually. But part of the beauty of the Gauss-Jordan procedure is that following the prescribed steps of the algorithm always works, and swapping two rows won't always work to turn a into a .      Multiply and add    We use the multiply and add row operation when we are trying to get 's, not when our goal is to get a .        Given the matrix which entry do we focus on turning into a or next?            This entry is already a as required by the Gauss-Jordan method.            Correct! We need to turn the entries below the leading in Row 1 into 's.            No, we finish putting 's below the leading in the first column before moving to the right.        To turn the boxed entry below into a , which row operation do we perform?       Scaling a row    No, scaling a row means multiplying by a nonzero number which won't result in a if we didn't start with a .      Swapping rows    In this case, swapping Row 2 and Row 3 would put a into position , but that won't always work, and it just moves the problem down a row.      Multiply and add    Correct! Multiplying Row 1 by and adding to Row 2 will create a in position .        To continue the Gauss-Jordan algorithm on the matrix below, which entry do we next try to turn into a or ?            No, entry is the entry boxed below. The Gauss-Jordan algorithm says that after finishing a column, we move down and to the right from the leading .            No, entry is the entry boxed below. It's already a below a leading .            Correct! The next step in the Gauss-Jordan algorithm is to turn entry , which is boxed below, into a .         Given the matrix which row operation do we use next in the Gauss-Jordan algorithm?      Scaling a row    Correct!      Swapping rows    No, swapping rows is only used when there is a with nonzero entries below it.      Multiply and add    We use the multiply and add row operation when we are trying to get 's, not when our goal is to get a .      "
},
{
  "id": "ex_rref_2",
  "level": "2",
  "url": "sec-rref.html#ex_rref_2",
  "type": "Example",
  "number": "1.4.5",
  "title": "Another Gauss-Jordan Elimination.",
  "body": " Another Gauss-Jordan Elimination   Use Gauss-Jordan elimination to put the matrix into reduced row echelon form, where     We start by wanting to make the entry in the first column and first row a . To do this we'll scale the first row by a factor of .          Next we need to put zeros in the column below this newly formed leading .          Our attention now shifts to the right one column and down one row to the position indicated by the box. We want to put a in that position. Our only options are to either scale the current row or to interchange rows with a row below it. However, neither of those options will change the into a in this case. Therefore, we shift our attention to the right one more column, to the .     We want to create a leading for this row, so we multiply by a nonzero number.          Next we use multiply and add to put a underneath this leading .          We would continue moving down and to the right, but since the third row is all 's, and there aren't any more rows, we are done with the forward steps.  Our next goal is to put a above each of the leading 's.          This final matrix is in reduced row echelon form.   "
},
{
  "id": "ex_rref_3",
  "level": "2",
  "url": "sec-rref.html#ex_rref_3",
  "type": "Example",
  "number": "1.4.6",
  "title": "Gauss-Jordan Elimination Again, this time with fewer words.",
  "body": " Gauss-Jordan Elimination Again, this time with fewer words   Put the matrix into reduced row echelon form.    Here we will show all steps without explaining each one.                                                   "
},
{
  "id": "rq-gauss-jordan-summary",
  "level": "2",
  "url": "sec-rref.html#rq-gauss-jordan-summary",
  "type": "Reading Question",
  "number": "1",
  "title": "Gauss-Jordan Elimination.",
  "body": "Gauss-Jordan Elimination   Describe how to perform Gauss-Jordan elimination in your own words.  If it helps you to describe the process, you can make up a specific matrix to use, or use an arbitrary one like .    "
},
{
  "id": "parsons-perform-gauss-jordan",
  "level": "2",
  "url": "sec-rref.html#parsons-perform-gauss-jordan",
  "type": "Reading Question",
  "number": "2",
  "title": "Parsons Problem, Reduced Row Echelon Form.",
  "body": " Parsons Problem, Reduced Row Echelon Form   Perform Gauss-Jordan elimination on matrix .                                              "
},
{
  "id": "rq-rref-questions-poll",
  "level": "2",
  "url": "sec-rref.html#rq-rref-questions-poll",
  "type": "Reading Question",
  "number": "3",
  "title": "Reflection.",
  "body": "Reflection   Reflect on your confidence level.    How confident do you feel with the material you just read about?      Not at all confident or didn't do the reading.      Not very confident.      Somewhat confident.      Mostly confident.      Confident so far and ready to engage more deeply.         Ask a question about the material. What additional information do you think someone would need to become more confident in their understanding?     "
},
{
  "id": "ws-rref-2",
  "level": "2",
  "url": "sec-rref.html#ws-rref-2",
  "type": "Objectives",
  "number": "",
  "title": "",
  "body": "   Identify matrices in reduced row echelon form and row echelon form    Use Gauss-Jordan elimination to put matrices into reduced row echelon form    "
},
{
  "id": "ws-rref-3-1",
  "level": "2",
  "url": "sec-rref.html#ws-rref-3-1",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "Why rref?",
  "body": "Why rref?   Write the associated system of linear equations for each of the matrices below.          Which system of equations would you prefer to be asked to solve on an exam?               "
},
{
  "id": "ws-rref-3-2",
  "level": "2",
  "url": "sec-rref.html#ws-rref-3-2",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "Gauss-Jordan algorithm.",
  "body": "Gauss-Jordan algorithm   Use Gauss-Jordan elimination to put each of the matrices below into reduced row echelon form.                                           "
},
{
  "id": "ws-rref-4-1",
  "level": "2",
  "url": "sec-rref.html#ws-rref-4-1",
  "type": "Worksheet Exercise",
  "number": "3",
  "title": "Form of matrices.",
  "body": "Form of matrices   For each of the following matrices, say if it is in reduced row echelon form. If it isn't, say whether it is in row echelon form or if it's in neither form.                                                   rref    rref    ref    neither    neither    neither    rref    rref      "
},
{
  "id": "ws-rref-4-2",
  "level": "2",
  "url": "sec-rref.html#ws-rref-4-2",
  "type": "Worksheet Exercise",
  "number": "4",
  "title": "",
  "body": "  Write down the associated linear system of equations for , and . What observations and questions do you have about these systems?                "
},
{
  "id": "rref_matrixforms_prob1",
  "level": "2",
  "url": "sec-rref.html#rref_matrixforms_prob1",
  "type": "Exercise",
  "number": "1.4.1",
  "title": "",
  "body": "    Determine whether the following matrices are in echelon form, reduced echelon form or not in echelon form.  a.  Choose   Echelon Form   Reduced Echelon Form   Not in Echelon Form    b.  Choose   Echelon Form   Reduced Echelon Form   Not in Echelon Form    c.  Choose   Echelon Form   Reduced Echelon Form   Not in Echelon Form    d.  Choose   Echelon Form   Reduced Echelon Form   Not in Echelon Form                             "
},
{
  "id": "rref_matrixforms_prob2",
  "level": "2",
  "url": "sec-rref.html#rref_matrixforms_prob2",
  "type": "Exercise",
  "number": "1.4.2",
  "title": "",
  "body": "    Determine whether the following matrices are in echelon form, reduced echelon form or not in echelon form.  a.  Choose   Echelon Form   Reduced Echelon Form   Not in Echelon Form    b.  Choose   Echelon Form   Reduced Echelon Form   Not in Echelon Form    c.  Choose   Echelon Form   Reduced Echelon Form   Not in Echelon Form    d.  Choose   Echelon Form   Reduced Echelon Form   Not in Echelon Form                             "
},
{
  "id": "rref_performgauss1",
  "level": "2",
  "url": "sec-rref.html#rref_performgauss1",
  "type": "Exercise",
  "number": "1.4.3",
  "title": "",
  "body": "    Solve the following system using augmented matrix methods:  (a) The initial matrix is:              (b) First, perform the Row Operation . The resulting matrix is:              (c) Next, perform the operation . The resulting matrix is:              (d) Finish simplifying the augmented matrix. The reduced matrix is:              (e) What are the solutions to the system?                                                                                                                                             "
},
{
  "id": "rref_performgauss2",
  "level": "2",
  "url": "sec-rref.html#rref_performgauss2",
  "type": "Exercise",
  "number": "1.4.4",
  "title": "",
  "body": "    Reduce the matrix to reduced row-echelon form.   First, do , resulting in  Then, do , resulting in Next, do , resulting in  Now we can multiply by a constant to create the leading 1, and then do the backwards steps.       "
},
{
  "id": "rref_performgauss3",
  "level": "2",
  "url": "sec-rref.html#rref_performgauss3",
  "type": "Exercise",
  "number": "1.4.5",
  "title": "",
  "body": "   Reduce the matrix to reduced row-echelon form.       "
},
{
  "id": "exer-rref-2-3",
  "level": "2",
  "url": "sec-rref.html#exer-rref-2-3",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": "       rref   "
},
{
  "id": "exer-rref-2-4",
  "level": "2",
  "url": "sec-rref.html#exer-rref-2-4",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": "         No, the leading in the second row doesn't appear to the right of the leading in the row above.   "
},
{
  "id": "exer-rref-2-5",
  "level": "2",
  "url": "sec-rref.html#exer-rref-2-5",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": "       No, the leading in the second row doesn't appear to the right of the leading in the row above, and not every entry in the same column as a leading is .   "
},
{
  "id": "exer-rref-2-6",
  "level": "2",
  "url": "sec-rref.html#exer-rref-2-6",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": "       Yes   "
},
{
  "id": "exer-rref-2-7",
  "level": "2",
  "url": "sec-rref.html#exer-rref-2-7",
  "type": "Exercise",
  "number": "5",
  "title": "",
  "body": "       Yes   "
},
{
  "id": "exer-rref-2-8",
  "level": "2",
  "url": "sec-rref.html#exer-rref-2-8",
  "type": "Exercise",
  "number": "6",
  "title": "",
  "body": "       Yes   "
},
{
  "id": "exer-rref-2-9",
  "level": "2",
  "url": "sec-rref.html#exer-rref-2-9",
  "type": "Exercise",
  "number": "7",
  "title": "",
  "body": "       No, any rows of all zeros have to be at the bottom.   "
},
{
  "id": "exer-rref-2-10",
  "level": "2",
  "url": "sec-rref.html#exer-rref-2-10",
  "type": "Exercise",
  "number": "8",
  "title": "",
  "body": "       Yes   "
},
{
  "id": "exer-rref-2-11",
  "level": "2",
  "url": "sec-rref.html#exer-rref-2-11",
  "type": "Exercise",
  "number": "9",
  "title": "",
  "body": "       No, there are nonzero entries in the same column as leading 's.   "
},
{
  "id": "exer-rref-2-12",
  "level": "2",
  "url": "sec-rref.html#exer-rref-2-12",
  "type": "Exercise",
  "number": "10",
  "title": "",
  "body": "       Yes   "
},
{
  "id": "exer-rref-2-13",
  "level": "2",
  "url": "sec-rref.html#exer-rref-2-13",
  "type": "Exercise",
  "number": "11",
  "title": "",
  "body": "       Yes   "
},
{
  "id": "exer-rref-2-14",
  "level": "2",
  "url": "sec-rref.html#exer-rref-2-14",
  "type": "Exercise",
  "number": "12",
  "title": "",
  "body": "       Yes   "
},
{
  "id": "exer-rref-2-15",
  "level": "2",
  "url": "sec-rref.html#exer-rref-2-15",
  "type": "Exercise",
  "number": "13",
  "title": "",
  "body": "       No, the first nonzero entry in each row must be a .   "
},
{
  "id": "exer-rref-2-16",
  "level": "2",
  "url": "sec-rref.html#exer-rref-2-16",
  "type": "Exercise",
  "number": "14",
  "title": "",
  "body": "       Yes   "
},
{
  "id": "exer-rref-2-17",
  "level": "2",
  "url": "sec-rref.html#exer-rref-2-17",
  "type": "Exercise",
  "number": "15",
  "title": "",
  "body": "       Yes   "
},
{
  "id": "exer-rref-2-18",
  "level": "2",
  "url": "sec-rref.html#exer-rref-2-18",
  "type": "Exercise",
  "number": "16",
  "title": "",
  "body": "       Yes   "
},
{
  "id": "exer-rref-3-3",
  "level": "2",
  "url": "sec-rref.html#exer-rref-3-3",
  "type": "Exercise",
  "number": "17",
  "title": "",
  "body": "           "
},
{
  "id": "exer-rref-3-4",
  "level": "2",
  "url": "sec-rref.html#exer-rref-3-4",
  "type": "Exercise",
  "number": "18",
  "title": "",
  "body": "           "
},
{
  "id": "exer-rref-3-5",
  "level": "2",
  "url": "sec-rref.html#exer-rref-3-5",
  "type": "Exercise",
  "number": "19",
  "title": "",
  "body": "           "
},
{
  "id": "exer-rref-3-6",
  "level": "2",
  "url": "sec-rref.html#exer-rref-3-6",
  "type": "Exercise",
  "number": "20",
  "title": "",
  "body": "           "
},
{
  "id": "exer-rref-3-7",
  "level": "2",
  "url": "sec-rref.html#exer-rref-3-7",
  "type": "Exercise",
  "number": "21",
  "title": "",
  "body": "           "
},
{
  "id": "exer-rref-3-8",
  "level": "2",
  "url": "sec-rref.html#exer-rref-3-8",
  "type": "Exercise",
  "number": "22",
  "title": "",
  "body": "           "
},
{
  "id": "exer-rref-3-9",
  "level": "2",
  "url": "sec-rref.html#exer-rref-3-9",
  "type": "Exercise",
  "number": "23",
  "title": "",
  "body": "           "
},
{
  "id": "exer-rref-3-10",
  "level": "2",
  "url": "sec-rref.html#exer-rref-3-10",
  "type": "Exercise",
  "number": "24",
  "title": "",
  "body": "           "
},
{
  "id": "exer-rref-3-11",
  "level": "2",
  "url": "sec-rref.html#exer-rref-3-11",
  "type": "Exercise",
  "number": "25",
  "title": "",
  "body": "           "
},
{
  "id": "exer-rref-3-12",
  "level": "2",
  "url": "sec-rref.html#exer-rref-3-12",
  "type": "Exercise",
  "number": "26",
  "title": "",
  "body": "           "
},
{
  "id": "exer-rref-3-13",
  "level": "2",
  "url": "sec-rref.html#exer-rref-3-13",
  "type": "Exercise",
  "number": "27",
  "title": "",
  "body": "           "
},
{
  "id": "exer-rref-3-14",
  "level": "2",
  "url": "sec-rref.html#exer-rref-3-14",
  "type": "Exercise",
  "number": "28",
  "title": "",
  "body": "           "
},
{
  "id": "exer-rref-3-15",
  "level": "2",
  "url": "sec-rref.html#exer-rref-3-15",
  "type": "Exercise",
  "number": "29",
  "title": "",
  "body": "           "
},
{
  "id": "exer-rref-3-16",
  "level": "2",
  "url": "sec-rref.html#exer-rref-3-16",
  "type": "Exercise",
  "number": "30",
  "title": "",
  "body": "           "
},
{
  "id": "exer-rref-3-17",
  "level": "2",
  "url": "sec-rref.html#exer-rref-3-17",
  "type": "Exercise",
  "number": "31",
  "title": "",
  "body": "           "
},
{
  "id": "exer-rref-3-18",
  "level": "2",
  "url": "sec-rref.html#exer-rref-3-18",
  "type": "Exercise",
  "number": "32",
  "title": "",
  "body": "           "
},
{
  "id": "exer-rref-3-19",
  "level": "2",
  "url": "sec-rref.html#exer-rref-3-19",
  "type": "Exercise",
  "number": "33",
  "title": "",
  "body": "           "
},
{
  "id": "exer-rref-3-20",
  "level": "2",
  "url": "sec-rref.html#exer-rref-3-20",
  "type": "Exercise",
  "number": "34",
  "title": "",
  "body": "           "
},
{
  "id": "sec-consistency",
  "level": "1",
  "url": "sec-consistency.html",
  "type": "Section",
  "number": "1.5",
  "title": "Consistent and Inconsistent Systems",
  "body": " Consistent and Inconsistent Systems   We've learned how to take a linear system, turn it into an augmented matrix, and use Gauss-Jordan elimination to put the matrix into reduced row echelon form. We used the reduced row echelon form to see what the solution was to the original linear system, and in all the examples we've seen so far, there was exactly one solution.  In this section, we consider different possibilities for what the solutions to a linear system can be and see how we can identify those different possibilities from the reduced row echelon form that results after performing Gauss-Jordan elimination.    Prepare   Types of solutions  In , , , , and all of our other examples of linear systems, there was exactly one solution, that is, one possible assignment of values to the variables which made all of the equations in the system true at the same time. We now consider if that is always the case or not.   First, consider the following linear system with one equation: . This equation is true whenever . We can picture all of the possible solutions by thinking of the graph of the equation .   Graph of the line y=x and three points on the line    f(x) = x      (1,1)  (\\pi,\\pi)  (-5,-5)         Each single equation with two variables can be viewed in this way, as a line in the plane. Let's now consider systems of linear equations with two equations and two variables, so that there are two lines in the plane.   Consider the linear system . Since each equation can be viewed as a line and since the slopes of the lines are different, we know the lines will intersect somewhere, and that point of intersection is the only solution to the system.     f(x) = x  g(x) = -x+2              Now consider the linear system . While this system has two equations, the second is a multiple of the first. The thicker line is used to represent that we've drawn the same line twice. In this case, we have an infinite solution set, just as if we only had the one equation .     f(x) = x           Finally, consider the linear system . If the difference between and is , it can't also be . This linear system has no solution. We observe that the two lines are parallel and never intersect.     f(x) = x  g(x) = x-2             It becomes harder to visualize when we add variables, but no matter how many equations and variables we have, solutions to linear equations always come in one of three forms: exactly one solution, infinite solutions, or no solution. This is a fact that we will not prove here, but it deserves to be stated.   Solution Forms of Linear Systems  solution types  solution unique  solution infinite  solution none   Every linear system of equations has exactly one solution, infinite solutions, or no solution.    Visually, we think of the three options below, even though linear systems often have more than two equations and more than two variables.   The three possibilities for all linear systems; the systems pictured have two equations and two variables    One solution   Two intersecting lines    f(x) = x  g(x) = -x+2              Infinitely many solutions   Two lines that are the same line    f(x) = x           No solutions   Two parallel lines    f(x) = x  g(x) = x-2                 Determining Consistency  How can we tell whether a given system of linear equations has , , or infinitely many solutions? The answer to this question lies with the reduced row echelon form of its corresponding augmented matrix.  A note on using technology  When we are learning a new technique or procedure, it's good to go through all the steps ourselves because understanding the process has benefits. That's why we typically learn how to add numbers using manipulatives like blocks or fingers, with the goal of eventually being able to add faster without any aids; in fact, we eventually add numbers we never could have represented with physical manipulatives. The focus shifted from the ability to add for its own sake to solving a problem which required addition as a step.  In a similar way, once we are able to perform Gauss-Jordan elimination by hand for small systems, we move to using technology to quickly obtain the reduced row echelon form of a matrix. The focus is no longer on our ability to row reduce for its own sake but on answering a question which requires interpreting the result of row reducing a matrix.  There are many apps, websites, etc., which can produce the reduced row echelon form of a matrix very quickly. This book will use SageMath, a language which is built on Python and free. Hit the Evaluate (Sage) button below to see both the matrix and its reduced row echelon form.   The QQ in the Sage cell above is present for a technical reason, and the rest of syntax means that is being defined as a matrix, whose first row is and whose second row is .  Try modifying the contents of the above Sage cell to calculate the reduced row echelon form of a different matrix. Don't worry about messing anything up beyond repair; refreshing the page will reset the Sage cell back to its initial state.  From now on, we will give the reduced row echelon form of the matrix without showing work.   We begin by distinguishing between systems which have a solution (either one or infinitely many) and those which have no solution.   Consistency of Linear Systems  system of linear equations consistent  system of linear equations inconsistent  consistent  inconsistent   A system of linear equations is consistent if it has at least one solution. A linear system is inconsistent if it does not have a solution.    What happens in the reduced row echelon form if a linear system has no solutions?   A system with no solutions  Find the solution to the linear system    Answer: We put the corresponding augmented matrix into reduced row echelon form.   Now let us take the reduced matrix and write out the corresponding equations. The first two rows give us the equations .  So far, so good. However the last row gives us the equation . There are no values of and which can make . Therefore, no solution exists, and this system is inconsistent.   The key takeaway from is: if any row has a leading in the last column after row reducing the augmented matrix of a linear system, the system is inconsistent. Otherwise, the system is consistent, which means it has at least 1 solution.   Consistent or inconsistent?   For each of the following linear systems, say whether it is consistent or inconsistent.     The linear system whose augmented matrix in reduced row echelon form is .      Consistent    Correct!      Inconsistent    There is no row with a leading in the last column. The first row says that and the second row says that . If a linear system has a solution, it is consistent.        The linear system whose augmented matrix in reduced row echelon form is .      Consistent    Correct!      Inconsistent    There is no row with a leading in the last column. The first row says that and the second row says that , which is true.        The linear system whose augmented matrix has been row reduced to .      Consistent    There is a row with a leading in the last column. The third row says that , which is not true for any possible values of and . A system with no solutions is inconsistent.      Inconsistent    Correct!        The linear system pictured below.  Three lines with no common point of intersection    f(x) = x  g(x) = -x+2  h(x) = 1\/4*x-3                  Consistent    There is no common point of intersection. Each line is an equation, and there is no point which satisfies all three equations. The linear system pictured has no solution, which means it's inconsistent.      Inconsistent    Correct!       We've now seen a system which has no solution and systems which have exactly one solution such as , so let's look next at a system which has infinitely many solutions.   A system with infinitely many solutions  Find the solution to the linear system    Answer: To find the solution, put the corresponding matrix into reduced row echelon form.   Now convert this reduced matrix back into equations. We have . We solve for and in terms of and get   These two equations tell us that the values of and depend on what is. There is no restriction on what must be; it is free to take on the value of any real number. Since we have infinite choices for the value of , we have infinitely many solutions.    In the previous example we used the word free to describe a certain variable. What exactly is a free variable? How do we recognize which variables are free and which are not?   Dependent and Independent Variables   Consider the reduced row echelon form of an augmented matrix of a consistent system of linear equations. Then:    a variable that corresponds to a leading is a dependent , or determined , or basic variable, and variable dependent  variable basic  basic variable     a variable that does not correspond to a leading is a free , or independent variable. variable independent  variable free  free variable         applies only to consistent systems. If a system is inconsistent , then it's meaningless to talk about being free (or not) to pick values for the variables because there are no values which satisfy all the equations in the system.    helps us understand when a consistent system of linear equations will have infinitely many solutions. If a consistent system has no free variables, then there is exactly one solution; inversely, if there are any free variables, then there are infinitely many solutions.  Analyzing the solutions of a linear system  Consider the reduced row echelon form of the augmented matrix of a system of linear equations.   If there is a leading in the last column, the system has no solution.    Otherwise, if there is a leading for each variable, then there is exactly one solution.    Otherwise, there are infinite solutions because there are variables which are free to take on any value.      Number of solutions, free and basic variables   For each augmented matrix in reduced row echelon form, select all that is true about the corresponding linear system.            The variable is free.    There is a leading 1 in the first column, so is basic, or dependent.      The variable is free.    Correct!      The variable is free.    There is a leading 1 in the third column, so is basic, or dependent.      The variable is free.    Correct!      The variable is free.    This system doesn't have an . The last column in an augmented matrix corresponds to the constants of the equations, so there are only 4 columns corresponding to variables.               The system has no solutions.    There is no row with a leading 1 in the last column, so there is at least one solution.      The system has exactly 1 solution.    This consistent system doesn't have a leading 1 in every column corresponding to variables, and so there is more than 1 solution.      There are infinitely many solutions.    Correct!               The variable is free.    There is a leading 1 in the first column, so is basic, or dependent.      The variable is free.    There is a leading 1 in the second column, so is basic, or dependent.      The variable is free.    This system doesn't have an . The last column in an augmented matrix corresponds to the constants of the equations, so there are only 2 columns corresponding to variables.      There are no free variables.    Correct!               The system has no solutions.    There is no row with a leading 1 in the last column, so there is at least one solution.      The system has exactly 1 solution.    Correct!      There are infinitely many solutions.    Every variable has a leading 1 in its column, so there are no free variables.         More on Infinite Solutions  Systems with exactly one solution or no solution are the easiest to deal with; systems with infinite solutions are a bit harder, and we will often want to give one or two of the infinite possibilities.   Particular Solution  particular solution  solution particular   Consider a linear system of equations with infinite solutions. A particular solution is one solution.    The easiest way to find a particular solution is to pick specific values for the free variables which then determines the values of the dependent variables.   Infinite Solutions; Particular Solutions   Give the solution to a linear system whose augmented matrix in reduced row echelon form is and give two particular solutions.    Answer: We can ignore the third row as it does not give us any information about the solution. The first and second rows can be rewritten as the following equations: .  Notice how the variables and correspond to the leading 's of the given matrix. Therefore and are dependent variables; all other variables, in this case and , are free variables.  We generally write our solution with the dependent variables on the left and independent variables and constants on the right. It is also a good practice to acknowledge the fact that our free variables are, in fact, free. So all the solutions to the system would look something like .  To find particular solutions, choose any values you wish for the free variables.  For example, by setting , we get: . By setting and , we have the solution: .    The constants and coefficients of an augmented matrix work together to determine whether a given system of linear equations has one, infinite, or no solution. The coefficients determine whether a matrix will have exactly one solution or not. In the or not case, the constants determine whether the system has infinite solutions or no solution.     Matching Problem, Solution Types  matching solution types of linear systems   The matrices below are each the augmented matrix of a linear system. Sort the matrices by how many solutions the system has.     No solutions      One solution     Infinitely many solutions       Exactly 3 Solutions?   Can there be a linear system which has exactly 3 solutions? Why or why not?     Reflection   Reflect on your confidence level.    How confident do you feel with the material you just read about?      Not at all confident or didn't do the reading.      Not very confident.      Somewhat confident.      Mostly confident.      Confident so far and ready to engage more deeply.         Ask a question about the material. What additional information do you think someone would need to become more confident in their understanding?        Participate     Use the reduced row echelon form of an augmented matrix to analyze the consistency and existence of solution(s) to a linear system.    Identify and use properties of free and basic variables to describe solutions to linear systems.         Consider a linear system whose augmented matrix in reduced row echelon form is .     Is the system consistent, inconsistent, or is there not enough information to tell?    Consistent.      Which variables are free and which are basic?     and are free, while and are basic.      Solve the system. If there are infinitely many solutions, give two particular solutions.     Two particular solutions might be when , resulting in , or when and , resulting in .       Consider a linear system whose augmented matrix in reduced row echelon form is .     Is the system consistent, inconsistent, or is there not enough information to tell?    Consistent.      Which variables are free and which are basic?     is free, while and are basic. Note that doesn't depend on .      Solve the system. If there are infinitely many solutions, give two particular solutions.     Two particular solutions might be when , resulting in , or when , resulting in .         Construct two different inconsistent linear systems with 3 variables. Use Sage or another tool to calculate the reduced row echelon form of the augmented matrix of your linear systems.    Prompt students to create two conflicting equations, with the same coefficients but different constants, or perhaps to try a system with 4 or 5 equations and only 3 variables.      Construct a linear system with 5 variables that has infinitely many solutions. Use Sage or another tool to calculate the reduced row echelon form of the augmented matrix of your linear system.    Prompt students to try using fewer than 5 equations. See if any come up with an inconsistent system instead.    Analyzing the Effect of Different Coefficient and Constant Values   For what values of will the given system have exactly one solution, infinite solutions, or no solution?          If , there is exactly one solution; if , there are infinite solutions. It is not possible for this system to have no solutions.           If , there is exactly one solution; if , there are no solutions. It is not possible for this system to have infinite solutions.           If , there are infinitely many solutions; if , there is no solution. It is not possible for this system to have exactly 1 solution.           There is exactly one solution for all possible values of .        Summary     Every linear system has either no solutions, one solution, or infinitely many solutions. We call a linear system which has at least one solution consistent , and we call a linear system with no solutions inconsistent.     To analyze how many solutions a given linear system has, we examine the reduced row echelon form of the system's augmented matrix. We look for number and location of leading 's to see whether the system is inconsistent, or in the case that it is consistent, to see which variables are free or independent and which variables are basic or dependent .    If a linear system has infinitely many solutions, we can describe all the possible solutions by solving for the dependent variables in terms of the free variables, and we can also give particular solutions by choosing specific values for the free variables.      Practice     The reduced row-echelon forms of the augmented matrices of four systems are given below. How many solutions does each system have?        No solutions    Infinitely many solutions    Unique solution    None of the above         Infinitely many solutions    No solutions    Unique solution    None of the above         Unique solution    No solutions    Infinitely many solutions    None of the above         Infinitely many solutions    No solutions    Unique solution    None of the above              How many free variables does each augmented matrix have?     Choose   None   One   Two   Three       Choose   None   One   Two   Three       Choose   None   One   Two   Three       Choose   None   One   Two   Three                                  How many determined (basic) variables does each augmented matrix have?     Choose   Zero   One   Two   Three   Four       Choose   Zero   One   Two   Three   Four       Choose   Zero   One   Two   Three   Four       Choose   Zero   One   Two   Three   Four                                   Convert the system   to an augmented matrix. Then reduce the system to echelon form and determine if the system is consistent.  Augmented matrix:  Echelon form:  Is the system consistent?  select   yes   no         SOLUTION:   Row 2 . Row 1 .           Solve the system by finding the reduced row-echelon form of the augmented matrix.  reduced row-echelon form:                      How many solutions are there to this system?    None    Exactly 1    Exactly 2    Exactly 3    Infinitely many    None of the above    If there is one solution, give its coordinates in the answer spaces below.  If there are infinitely many solutions, enter z in the answer blank for , enter a formula for in terms of in the answer blank for and enter a formula for in terms of in the answer blank for .  If there are no solutions, leave the answer blanks for , and empty.                                                                      E                    Additional Practice    In the following exercises, find the solution to the given linear system. If the system has infinite solutions, give particular solutions.           ; is free. Two possible particular solutions: , or , .            ; is free. Two possible particular solutions: , or ,             ;             ;            No solution; the system is inconsistent.           No solution; the system is inconsistent.            ; ; is free. Two possible particular solutions: , , or , and .            ; ; is free. Two possible particular solutions: , , and , ,             ; is free; ; is free. Two possible solutions: , , , or , , ,             ; ; is free; is free. Two possible solutions: , , , or , , ,            No solution; the system is inconsistent.           No solution; the system is inconsistent.            ; ; is free. Two possible solutions: , , or , ,             ; is free; is free. Two possible solutions: , , or , ,        In the following exercises, state for which values of the given system will have exactly solution, infinite solutions, or no solution.          Never exactly solution; infinite solutions if ; no solution if .           Exactly solution if ; infinite solutions if ; never no solution.           Exactly solution if ; no solution if ; never infinite solutions.           Exactly solution for all .      "
},
{
  "id": "thm_existence_uniqueness",
  "level": "2",
  "url": "sec-consistency.html#thm_existence_uniqueness",
  "type": "Theorem",
  "number": "1.5.1",
  "title": "Solution Forms of Linear Systems.",
  "body": " Solution Forms of Linear Systems  solution types  solution unique  solution infinite  solution none   Every linear system of equations has exactly one solution, infinite solutions, or no solution.   "
},
{
  "id": "fig_visual_solution",
  "level": "2",
  "url": "sec-consistency.html#fig_visual_solution",
  "type": "Figure",
  "number": "1.5.2",
  "title": "",
  "body": " The three possibilities for all linear systems; the systems pictured have two equations and two variables    One solution   Two intersecting lines    f(x) = x  g(x) = -x+2              Infinitely many solutions   Two lines that are the same line    f(x) = x           No solutions   Two parallel lines    f(x) = x  g(x) = x-2              "
},
{
  "id": "subsubsec-consistent-or-inconsistent-3",
  "level": "2",
  "url": "sec-consistency.html#subsubsec-consistent-or-inconsistent-3",
  "type": "Remark",
  "number": "1.5.3",
  "title": "A note on using technology.",
  "body": "A note on using technology  When we are learning a new technique or procedure, it's good to go through all the steps ourselves because understanding the process has benefits. That's why we typically learn how to add numbers using manipulatives like blocks or fingers, with the goal of eventually being able to add faster without any aids; in fact, we eventually add numbers we never could have represented with physical manipulatives. The focus shifted from the ability to add for its own sake to solving a problem which required addition as a step.  In a similar way, once we are able to perform Gauss-Jordan elimination by hand for small systems, we move to using technology to quickly obtain the reduced row echelon form of a matrix. The focus is no longer on our ability to row reduce for its own sake but on answering a question which requires interpreting the result of row reducing a matrix.  There are many apps, websites, etc., which can produce the reduced row echelon form of a matrix very quickly. This book will use SageMath, a language which is built on Python and free. Hit the Evaluate (Sage) button below to see both the matrix and its reduced row echelon form.   The QQ in the Sage cell above is present for a technical reason, and the rest of syntax means that is being defined as a matrix, whose first row is and whose second row is .  Try modifying the contents of the above Sage cell to calculate the reduced row echelon form of a different matrix. Don't worry about messing anything up beyond repair; refreshing the page will reset the Sage cell back to its initial state.  From now on, we will give the reduced row echelon form of the matrix without showing work.  "
},
{
  "id": "def_consistent",
  "level": "2",
  "url": "sec-consistency.html#def_consistent",
  "type": "Definition",
  "number": "1.5.4",
  "title": "Consistency of Linear Systems.",
  "body": " Consistency of Linear Systems  system of linear equations consistent  system of linear equations inconsistent  consistent  inconsistent   A system of linear equations is consistent if it has at least one solution. A linear system is inconsistent if it does not have a solution.   "
},
{
  "id": "ex_ex_un_2",
  "level": "2",
  "url": "sec-consistency.html#ex_ex_un_2",
  "type": "Example",
  "number": "1.5.5",
  "title": "A system with no solutions.",
  "body": " A system with no solutions  Find the solution to the linear system    Answer: We put the corresponding augmented matrix into reduced row echelon form.   Now let us take the reduced matrix and write out the corresponding equations. The first two rows give us the equations .  So far, so good. However the last row gives us the equation . There are no values of and which can make . Therefore, no solution exists, and this system is inconsistent.  "
},
{
  "id": "consistent-or-not-examples",
  "level": "2",
  "url": "sec-consistency.html#consistent-or-not-examples",
  "type": "Activity",
  "number": "1.5.6",
  "title": "Consistent or inconsistent?",
  "body": " Consistent or inconsistent?   For each of the following linear systems, say whether it is consistent or inconsistent.     The linear system whose augmented matrix in reduced row echelon form is .      Consistent    Correct!      Inconsistent    There is no row with a leading in the last column. The first row says that and the second row says that . If a linear system has a solution, it is consistent.        The linear system whose augmented matrix in reduced row echelon form is .      Consistent    Correct!      Inconsistent    There is no row with a leading in the last column. The first row says that and the second row says that , which is true.        The linear system whose augmented matrix has been row reduced to .      Consistent    There is a row with a leading in the last column. The third row says that , which is not true for any possible values of and . A system with no solutions is inconsistent.      Inconsistent    Correct!        The linear system pictured below.  Three lines with no common point of intersection    f(x) = x  g(x) = -x+2  h(x) = 1\/4*x-3                  Consistent    There is no common point of intersection. Each line is an equation, and there is no point which satisfies all three equations. The linear system pictured has no solution, which means it's inconsistent.      Inconsistent    Correct!      "
},
{
  "id": "ex_ex_un_1",
  "level": "2",
  "url": "sec-consistency.html#ex_ex_un_1",
  "type": "Example",
  "number": "1.5.7",
  "title": "A system with infinitely many solutions.",
  "body": " A system with infinitely many solutions  Find the solution to the linear system    Answer: To find the solution, put the corresponding matrix into reduced row echelon form.   Now convert this reduced matrix back into equations. We have . We solve for and in terms of and get   These two equations tell us that the values of and depend on what is. There is no restriction on what must be; it is free to take on the value of any real number. Since we have infinite choices for the value of , we have infinitely many solutions.  "
},
{
  "id": "def_free",
  "level": "2",
  "url": "sec-consistency.html#def_free",
  "type": "Definition",
  "number": "1.5.8",
  "title": "Dependent and Independent Variables.",
  "body": " Dependent and Independent Variables   Consider the reduced row echelon form of an augmented matrix of a consistent system of linear equations. Then:    a variable that corresponds to a leading is a dependent , or determined , or basic variable, and variable dependent  variable basic  basic variable     a variable that does not correspond to a leading is a free , or independent variable. variable independent  variable free  free variable      "
},
{
  "id": "subsubsec-consistent-or-inconsistent-14",
  "level": "2",
  "url": "sec-consistency.html#subsubsec-consistent-or-inconsistent-14",
  "type": "Remark",
  "number": "1.5.9",
  "title": "",
  "body": "  applies only to consistent systems. If a system is inconsistent , then it's meaningless to talk about being free (or not) to pick values for the variables because there are no values which satisfy all the equations in the system.  "
},
{
  "id": "properties-of-linear-systems",
  "level": "2",
  "url": "sec-consistency.html#properties-of-linear-systems",
  "type": "Activity",
  "number": "1.5.10",
  "title": "Number of solutions, free and basic variables.",
  "body": "Number of solutions, free and basic variables   For each augmented matrix in reduced row echelon form, select all that is true about the corresponding linear system.            The variable is free.    There is a leading 1 in the first column, so is basic, or dependent.      The variable is free.    Correct!      The variable is free.    There is a leading 1 in the third column, so is basic, or dependent.      The variable is free.    Correct!      The variable is free.    This system doesn't have an . The last column in an augmented matrix corresponds to the constants of the equations, so there are only 4 columns corresponding to variables.               The system has no solutions.    There is no row with a leading 1 in the last column, so there is at least one solution.      The system has exactly 1 solution.    This consistent system doesn't have a leading 1 in every column corresponding to variables, and so there is more than 1 solution.      There are infinitely many solutions.    Correct!               The variable is free.    There is a leading 1 in the first column, so is basic, or dependent.      The variable is free.    There is a leading 1 in the second column, so is basic, or dependent.      The variable is free.    This system doesn't have an . The last column in an augmented matrix corresponds to the constants of the equations, so there are only 2 columns corresponding to variables.      There are no free variables.    Correct!               The system has no solutions.    There is no row with a leading 1 in the last column, so there is at least one solution.      The system has exactly 1 solution.    Correct!      There are infinitely many solutions.    Every variable has a leading 1 in its column, so there are no free variables.      "
},
{
  "id": "def_particular",
  "level": "2",
  "url": "sec-consistency.html#def_particular",
  "type": "Definition",
  "number": "1.5.11",
  "title": "Particular Solution.",
  "body": " Particular Solution  particular solution  solution particular   Consider a linear system of equations with infinite solutions. A particular solution is one solution.   "
},
{
  "id": "ex_ex_un_4",
  "level": "2",
  "url": "sec-consistency.html#ex_ex_un_4",
  "type": "Example",
  "number": "1.5.12",
  "title": "Infinite Solutions; Particular Solutions.",
  "body": " Infinite Solutions; Particular Solutions   Give the solution to a linear system whose augmented matrix in reduced row echelon form is and give two particular solutions.    Answer: We can ignore the third row as it does not give us any information about the solution. The first and second rows can be rewritten as the following equations: .  Notice how the variables and correspond to the leading 's of the given matrix. Therefore and are dependent variables; all other variables, in this case and , are free variables.  We generally write our solution with the dependent variables on the left and independent variables and constants on the right. It is also a good practice to acknowledge the fact that our free variables are, in fact, free. So all the solutions to the system would look something like .  To find particular solutions, choose any values you wish for the free variables.  For example, by setting , we get: . By setting and , we have the solution: .   "
},
{
  "id": "systems-solution-types",
  "level": "2",
  "url": "sec-consistency.html#systems-solution-types",
  "type": "Reading Question",
  "number": "1",
  "title": "Matching Problem, Solution Types.",
  "body": " Matching Problem, Solution Types  matching solution types of linear systems   The matrices below are each the augmented matrix of a linear system. Sort the matrices by how many solutions the system has.     No solutions      One solution     Infinitely many solutions      "
},
{
  "id": "rq-systems-3-solns",
  "level": "2",
  "url": "sec-consistency.html#rq-systems-3-solns",
  "type": "Reading Question",
  "number": "2",
  "title": "Exactly 3 Solutions?",
  "body": "Exactly 3 Solutions?   Can there be a linear system which has exactly 3 solutions? Why or why not?    "
},
{
  "id": "rq-consistency-questions-poll",
  "level": "2",
  "url": "sec-consistency.html#rq-consistency-questions-poll",
  "type": "Reading Question",
  "number": "3",
  "title": "Reflection.",
  "body": "Reflection   Reflect on your confidence level.    How confident do you feel with the material you just read about?      Not at all confident or didn't do the reading.      Not very confident.      Somewhat confident.      Mostly confident.      Confident so far and ready to engage more deeply.         Ask a question about the material. What additional information do you think someone would need to become more confident in their understanding?     "
},
{
  "id": "ws-consistency-2",
  "level": "2",
  "url": "sec-consistency.html#ws-consistency-2",
  "type": "Objectives",
  "number": "",
  "title": "",
  "body": "   Use the reduced row echelon form of an augmented matrix to analyze the consistency and existence of solution(s) to a linear system.    Identify and use properties of free and basic variables to describe solutions to linear systems.    "
},
{
  "id": "ws-consistency-3-1",
  "level": "2",
  "url": "sec-consistency.html#ws-consistency-3-1",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "",
  "body": "  Consider a linear system whose augmented matrix in reduced row echelon form is .     Is the system consistent, inconsistent, or is there not enough information to tell?    Consistent.      Which variables are free and which are basic?     and are free, while and are basic.      Solve the system. If there are infinitely many solutions, give two particular solutions.     Two particular solutions might be when , resulting in , or when and , resulting in .    "
},
{
  "id": "ws-consistency-3-2",
  "level": "2",
  "url": "sec-consistency.html#ws-consistency-3-2",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "",
  "body": "  Consider a linear system whose augmented matrix in reduced row echelon form is .     Is the system consistent, inconsistent, or is there not enough information to tell?    Consistent.      Which variables are free and which are basic?     is free, while and are basic. Note that doesn't depend on .      Solve the system. If there are infinitely many solutions, give two particular solutions.     Two particular solutions might be when , resulting in , or when , resulting in .    "
},
{
  "id": "ws-consistency-4-1",
  "level": "2",
  "url": "sec-consistency.html#ws-consistency-4-1",
  "type": "Worksheet Exercise",
  "number": "3",
  "title": "",
  "body": "  Construct two different inconsistent linear systems with 3 variables. Use Sage or another tool to calculate the reduced row echelon form of the augmented matrix of your linear systems.    Prompt students to create two conflicting equations, with the same coefficients but different constants, or perhaps to try a system with 4 or 5 equations and only 3 variables.   "
},
{
  "id": "ws-consistency-4-2",
  "level": "2",
  "url": "sec-consistency.html#ws-consistency-4-2",
  "type": "Worksheet Exercise",
  "number": "4",
  "title": "",
  "body": "  Construct a linear system with 5 variables that has infinitely many solutions. Use Sage or another tool to calculate the reduced row echelon form of the augmented matrix of your linear system.    Prompt students to try using fewer than 5 equations. See if any come up with an inconsistent system instead.   "
},
{
  "id": "ws-consistency-4-3-3",
  "level": "2",
  "url": "sec-consistency.html#ws-consistency-4-3-3",
  "type": "Worksheet Exercise",
  "number": "5",
  "title": "",
  "body": "       If , there is exactly one solution; if , there are infinite solutions. It is not possible for this system to have no solutions.   "
},
{
  "id": "ws-consistency-4-3-4",
  "level": "2",
  "url": "sec-consistency.html#ws-consistency-4-3-4",
  "type": "Worksheet Exercise",
  "number": "6",
  "title": "",
  "body": "       If , there is exactly one solution; if , there are no solutions. It is not possible for this system to have infinite solutions.   "
},
{
  "id": "ws-consistency-4-3-5",
  "level": "2",
  "url": "sec-consistency.html#ws-consistency-4-3-5",
  "type": "Worksheet Exercise",
  "number": "7",
  "title": "",
  "body": "       If , there are infinitely many solutions; if , there is no solution. It is not possible for this system to have exactly 1 solution.   "
},
{
  "id": "ws-consistency-4-3-6",
  "level": "2",
  "url": "sec-consistency.html#ws-consistency-4-3-6",
  "type": "Worksheet Exercise",
  "number": "8",
  "title": "",
  "body": "       There is exactly one solution for all possible values of .   "
},
{
  "id": "consistency_numofsolutions_prob1",
  "level": "2",
  "url": "sec-consistency.html#consistency_numofsolutions_prob1",
  "type": "Exercise",
  "number": "1.5.1",
  "title": "",
  "body": "   The reduced row-echelon forms of the augmented matrices of four systems are given below. How many solutions does each system have?        No solutions    Infinitely many solutions    Unique solution    None of the above         Infinitely many solutions    No solutions    Unique solution    None of the above         Unique solution    No solutions    Infinitely many solutions    None of the above         Infinitely many solutions    No solutions    Unique solution    None of the above          "
},
{
  "id": "consistency_numoffreevars_prob1",
  "level": "2",
  "url": "sec-consistency.html#consistency_numoffreevars_prob1",
  "type": "Exercise",
  "number": "1.5.2",
  "title": "",
  "body": "   How many free variables does each augmented matrix have?     Choose   None   One   Two   Three       Choose   None   One   Two   Three       Choose   None   One   Two   Three       Choose   None   One   Two   Three                              "
},
{
  "id": "consistency_numofbasicvars_prob1",
  "level": "2",
  "url": "sec-consistency.html#consistency_numofbasicvars_prob1",
  "type": "Exercise",
  "number": "1.5.3",
  "title": "",
  "body": "   How many determined (basic) variables does each augmented matrix have?     Choose   Zero   One   Two   Three   Four       Choose   Zero   One   Two   Three   Four       Choose   Zero   One   Two   Three   Four       Choose   Zero   One   Two   Three   Four                              "
},
{
  "id": "consistency_solve_consistentornot_prob1",
  "level": "2",
  "url": "sec-consistency.html#consistency_solve_consistentornot_prob1",
  "type": "Exercise",
  "number": "1.5.4",
  "title": "",
  "body": "    Convert the system   to an augmented matrix. Then reduce the system to echelon form and determine if the system is consistent.  Augmented matrix:  Echelon form:  Is the system consistent?  select   yes   no         SOLUTION:   Row 2 . Row 1 .       "
},
{
  "id": "consistency_solvesystem_prob1",
  "level": "2",
  "url": "sec-consistency.html#consistency_solvesystem_prob1",
  "type": "Exercise",
  "number": "1.5.5",
  "title": "",
  "body": "   Solve the system by finding the reduced row-echelon form of the augmented matrix.  reduced row-echelon form:                      How many solutions are there to this system?    None    Exactly 1    Exactly 2    Exactly 3    Infinitely many    None of the above    If there is one solution, give its coordinates in the answer spaces below.  If there are infinitely many solutions, enter z in the answer blank for , enter a formula for in terms of in the answer blank for and enter a formula for in terms of in the answer blank for .  If there are no solutions, leave the answer blanks for , and empty.                                                                      E                 "
},
{
  "id": "exer-consistency-2-2",
  "level": "2",
  "url": "sec-consistency.html#exer-consistency-2-2",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": "        ; is free. Two possible particular solutions: , or , .   "
},
{
  "id": "exer-consistency-2-3",
  "level": "2",
  "url": "sec-consistency.html#exer-consistency-2-3",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": "        ; is free. Two possible particular solutions: , or ,    "
},
{
  "id": "exer-consistency-2-4",
  "level": "2",
  "url": "sec-consistency.html#exer-consistency-2-4",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": "        ;    "
},
{
  "id": "exer-consistency-2-5",
  "level": "2",
  "url": "sec-consistency.html#exer-consistency-2-5",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": "        ;    "
},
{
  "id": "exer-consistency-2-6",
  "level": "2",
  "url": "sec-consistency.html#exer-consistency-2-6",
  "type": "Exercise",
  "number": "5",
  "title": "",
  "body": "       No solution; the system is inconsistent.   "
},
{
  "id": "exer-consistency-2-7",
  "level": "2",
  "url": "sec-consistency.html#exer-consistency-2-7",
  "type": "Exercise",
  "number": "6",
  "title": "",
  "body": "       No solution; the system is inconsistent.   "
},
{
  "id": "exer-consistency-2-8",
  "level": "2",
  "url": "sec-consistency.html#exer-consistency-2-8",
  "type": "Exercise",
  "number": "7",
  "title": "",
  "body": "        ; ; is free. Two possible particular solutions: , , or , and .   "
},
{
  "id": "exer-consistency-2-9",
  "level": "2",
  "url": "sec-consistency.html#exer-consistency-2-9",
  "type": "Exercise",
  "number": "8",
  "title": "",
  "body": "        ; ; is free. Two possible particular solutions: , , and , ,    "
},
{
  "id": "exer-consistency-2-10",
  "level": "2",
  "url": "sec-consistency.html#exer-consistency-2-10",
  "type": "Exercise",
  "number": "9",
  "title": "",
  "body": "        ; is free; ; is free. Two possible solutions: , , , or , , ,    "
},
{
  "id": "exer-consistency-2-11",
  "level": "2",
  "url": "sec-consistency.html#exer-consistency-2-11",
  "type": "Exercise",
  "number": "10",
  "title": "",
  "body": "        ; ; is free; is free. Two possible solutions: , , , or , , ,    "
},
{
  "id": "exer-consistency-2-12",
  "level": "2",
  "url": "sec-consistency.html#exer-consistency-2-12",
  "type": "Exercise",
  "number": "11",
  "title": "",
  "body": "       No solution; the system is inconsistent.   "
},
{
  "id": "exer-consistency-2-13",
  "level": "2",
  "url": "sec-consistency.html#exer-consistency-2-13",
  "type": "Exercise",
  "number": "12",
  "title": "",
  "body": "       No solution; the system is inconsistent.   "
},
{
  "id": "exer-consistency-2-14",
  "level": "2",
  "url": "sec-consistency.html#exer-consistency-2-14",
  "type": "Exercise",
  "number": "13",
  "title": "",
  "body": "        ; ; is free. Two possible solutions: , , or , ,    "
},
{
  "id": "exer-consistency-2-15",
  "level": "2",
  "url": "sec-consistency.html#exer-consistency-2-15",
  "type": "Exercise",
  "number": "14",
  "title": "",
  "body": "        ; is free; is free. Two possible solutions: , , or , ,    "
},
{
  "id": "exer-consistency-3-2",
  "level": "2",
  "url": "sec-consistency.html#exer-consistency-3-2",
  "type": "Exercise",
  "number": "15",
  "title": "",
  "body": "       Never exactly solution; infinite solutions if ; no solution if .   "
},
{
  "id": "exer-consistency-3-3",
  "level": "2",
  "url": "sec-consistency.html#exer-consistency-3-3",
  "type": "Exercise",
  "number": "16",
  "title": "",
  "body": "       Exactly solution if ; infinite solutions if ; never no solution.   "
},
{
  "id": "exer-consistency-3-4",
  "level": "2",
  "url": "sec-consistency.html#exer-consistency-3-4",
  "type": "Exercise",
  "number": "17",
  "title": "",
  "body": "       Exactly solution if ; no solution if ; never infinite solutions.   "
},
{
  "id": "exer-consistency-3-5",
  "level": "2",
  "url": "sec-consistency.html#exer-consistency-3-5",
  "type": "Exercise",
  "number": "18",
  "title": "",
  "body": "       Exactly solution for all .   "
},
{
  "id": "sec-problem-solving",
  "level": "1",
  "url": "sec-problem-solving.html",
  "type": "Section",
  "number": "1.6",
  "title": "Problem Solving with Linear Systems",
  "body": " Problem Solving with Linear Systems   Most of the problems we've seen so far have started with a given linear system, and we learned how to find the solution(s) to the system by performing Gauss-Jordan elimination and interpreting the resulting reduced row echelon form.  In this section, we will consider problems where the linear system is hidden , that is, not stated in the problem. We will create a linear system to solve the problem, and we will also need to interpret the possible solution(s) in terms of the context of the question, where it's possible that not all values of the variables make sense.    Prepare  Let's start with an example.  Seats in a Baseball Stadium  A baseball stadium has seating arranged in three sections. As part of a special promotion, guests will receive two of three prizes. Guests seated in Sections A and B will receive a hat, guests seated in Sections B and C will receive a shirt, and guests seated in Sections A and C will receive a hot dog. The promoters told the stadium managers of their plans, and asked how many seats were in each section. The managers, thinking they were being helpful, told the promoters they would need hats, shirts, and hot dogs, and they have since been unavailable for further help. How many seats are in each section?  In order to answer this question, we need to make we know what is being asked. The final sentence of the question asks: How many seats are in each section?   Since we are trying to solve for the number of seats in each section, those should be our variables. Let be the number of seats in Section A, be the number of seats in Section B, and be the number of seats in Section C.  Now we use the information given to create linear equations. We were told that hats go to guests in Sections A and B and that we'll need hats, which means that Guests in Sections B and C get shirts, which means that . Lastly, guests in Sections A and C get hot dogs, which means that . Putting these three equations into a linear system results in , and the corresponding augmented matrix is .  To solve our system, we put the augmented matrix into reduced row echelon form and get .  Since , this means that Section A has seats. Similarly, we see that Section B has seats, and Section C has seats. This is a reasonable solution because the number of seats in each section is nonnegative and a whole number.   Let's recap and generalize our steps.   We made sure we knew what the problem was asking. ( How many seats in each section? )    We gave variable names to the unknown number of seats in each section. (Section A had number of seats, Section B had , and Section C had many seats.)    We used the information given in the problem to write down linear equations involving those variables.    We constructed an augmented matrix from the system of linear equations and put the matrix into reduced row echelon form.    We made sure the solution obtained from the reduced row echelon form made sense in the context of the problem. (The number of seats in a section couldn't have been a negative or fractional number like , for example.)     This set of problem-solving steps is important enough to say again.   Steps for Problem Solving with Linear Systems     Identify what is being asked.    Identify and give variable names to the unknown quantities whose values we need to find.    Use the information in the problem to write down linear equations involving the variables.    Form an augmented matrix from the system of linear equations and put the matrix into reduced row echelon form.    Check that any solution(s) found from the reduced row echelon form make sense in the context of the problem.       An example with points scoring in football  The most common ways to score points in an American football game are by touchdowns, extra points, 2-point conversions, and field goals. Touchdowns are worth points and are immediately followed by either an extra point worth point or by a 2-point conversion worth points. Field goals are worth points.  Suppose that in one game a team had scoring plays and scored a total of points. Each touchdown was followed by a successful extra point or 2-point conversion. How did the team score their points?  Let's go through our problem-solving steps.   Identify what is being asked  We are asked to find how the team scored their points.    Identify unknowns and name variables  We need to focus on the unknowns that answer the question: how many touchdowns, extra points, 2-point conversions, and field goals the team had.     Which quantities should be variables?   An American football team can score points via touchdowns, extra points, 2-point conversions, and field goals. We were given the total points scored and some other information and were asked to find how the team scored its points. What should the variables in this problem be?    The variables should be the things we are solving for, the ways to score points. Other information in the problem will get used as part of the linear equations which involve the variables.     Variables in this problem  The number of touchdowns,  The number of field goals,  The number of extra points,  The number of 2-point conversions,    Not variables in this problem  The number of points,  Points earned through touchdowns,  Extra points and 2-point conversions only come after touchdowns,        Form linear equations involving the variables  We are told that there were scoring plays, so . We were also told that the total number of points is , and that each touchdown is worth points, each field goal is worth , each extra point is worth and each 2-point conversion is worth points. This means that .  There is one more given piece of information: that every touchdown is followed by either an extra point or a 2-point conversion. This means that , or     Form augmented matrix and row reduce  Putting the three equations above into an augmented matrix and row reducing gives us .    Interpret solutions which make sense  The reduced row echelon form has a free variable in the fourth column. Turning each row of the matrix back into an equation results in .  Mathematically, the value of can be any real number, which means there are infinitely many solutions. However, in this problem stood for the number of field goals, and there can't be a negative or fractional number of field goals in a football game. The solution only makes sense if is .  Looking at the second equation , we see a further restriction on the value of . If then the value of is negative, and it doesn't make sense to have a negative number of extra points. Thus must be one of . Can we eliminate still more solutions?  Looking at the first equation , if then , but the number of touchdowns must be a whole number. We also get a fractional number of touchdowns if or if . The only remaining possibilities are or .  If , then and touchdowns each followed by an extra point plus a field goal adds up to points in scoring plays.  If , then and touchdowns, one followed by an extra point and one by a 2-point conversion, plus field goals also adds up to points in scoring plays.      We see that sometimes there's a lot of work involved in interpreting the solutions which make sense. In the case of points in a football game, there were infinitely many solutions which made mathematical sense, but only two solutions which made sense as actual ways to score points meeting the necessary conditions.   Which solutions make sense?     Consider a linear system whose augmented matrix and reduced row echelon form are shown below. Note that this translates back to equations as Which of the following values is a possible solution for , , and ?       , ,     Correct!       , ,     Correct!       , ,     Correct!       , ,     Correct!        A woman has total bills in her purse, consisting of , and bills, giving her a total of . How many bills of each denomination does she have?  Let , and be the number of ones, fives and tens, respectively, and suppose that the problem has been solved as far as Which of the following values is a possible solution for , , and ?       , ,     She can't have one-dollar bills, or five-dollar bills.       , ,     She can't have a negative amount of ten-dollar bills.       , ,     Correct! This is a total of bills, and ones plus fives add up to .  If you had to pick one solution only, this one is likely not the best choice because the wording consisting of might imply that she has at least one of each type of bill.       , ,     Correct! This is a total of bills, and ones, fives, and tens add up to .       Let's do another example, one which involves balancing a chemical equation. All chemical reaction problems found in this text are thanks to Gregory Bard and Gergely Sirokman.   Balancing a chemical equation  When chemicals react, no elements are created or destroyed; instead they recombine into different substances. For example, a blow torch works by burning acetylene in the presence of oxygen . The result is carbon dioxide and water . If there were atoms of carbon (as part of the acetylene) before the reaction, then there have to be atoms of carbon (in the form of carbon dioxide) after the reaction also.  In chemistry, balancing a chemical equation means finding the smallest numbers of the different molecules involved in the reaction. Most students of chemistry balance equations by guessing and checking, but there's actually a system of linear equations involved, which means there's an algorithm which always leads to a solution.  Let's balance the blow torch reaction, using our problem solving steps.   We need to find the coefficients of each of the molecules, so those are the unknowns we should give names to. Let's say there are many molecules of , and many molecules of , and many molecules of , and many molecules of .   Now we consider each element and the number of atoms there are before and after the reaction.  For carbon, which is denoted by , there are molecules of , and there are carbon atoms in each of the molecules, which means there are carbon atoms before the reaction takes place. After the reaction (or after the arrow), there are molecules of and carbon atom in each molecule, which means there are many atoms of carbon after the reaction occurs. Because the number of carbon atoms must be the same before and after the reaction, we get the equation , or restated in the form which has the constant after the equal sign as .  Next, we examine hydrogen, which is denoted by . Before the reaction there were hydrogen atoms in each of the molecules of , for a total of hydrogen atoms. After the reaction, there are hydrogen atoms in each of the molecules of , for a total of hydrogen atoms. This gives the equation , or moving the variables to the left side of the equal sign, .  Finally, we look at oxygen, denoted by . Note that there is oxygen in both of the molecules that appear after the reaction. There were oxygen atoms before the reaction took place, and after the reaction there are oxygen atoms in each of the molecules of and oxygen atom in each of the molecules of , which means there is a total of oxygen atoms after the reaction. This gives us the equation , or .  We put these equations into an augmented matrix and then find the reduced row echelon form .  Note that the variable is free, which means that mathematically, can take on any value. What happens if we let ? The third row says that , which means that . The second row says that , which means that , and the first row says that , which means that .  However, it is impossible to have a fractional number of molecules. To clear the denominator, let's multiply by and let instead of . Then the particular solution becomes and the balanced equation is . Note that it makes sense to have infinitely many solutions to the linear system, since multiplying the whole thing by or or any whole positive number will keep the reaction balanced with equal numbers of each element's atoms before and after the arrow.      Parsons Problem, Equation of a Quadratic Through 3 Points   Select the correct steps to find the equation of the quadratic function that goes through the points , and .      A quadratic function has equation .     , , , , and are all unknowns which need to be solved for.     and refer to points in the plane, so the unknowns to solve for are the coefficients , , and .    Passing through the point means the equation holds when and , so we get the equation .    The two remaining points gives us the equations and .    Rewriting the set of linear equations gives us .    Putting the equations into an augmented matrix and then row reducing gives .    The solution is , and , which is the quadratic function .      Parsons Problem, Balancing a Chemical Equation   Select the steps to balance the chemical equation below.       We are looking for the values of such that     Looking at the element calcium , we have atoms before the reaction and atoms of calcium after the reaction takes place, so .    Similarly, looking at the number of atoms of oxygen before and after the reaction gives us the equation , while examining hydrogen gives the equation , and considering phosphorus results in .    Putting these equations into an augmented matrix and then row reducing gives     Turning the reduced row echelon form back into equations results in     Letting yields a final answer of .    Letting yields a final answer of .      Reflection   Reflect on your confidence level.    How confident do you feel with the material you just read about?      Not at all confident or didn't do the reading.      Not very confident.      Somewhat confident.      Mostly confident.      Confident so far and ready to engage more deeply.         Ask a question about the material. What additional information do you think someone would need to become more confident in their understanding?        Participate     Be able to use linear systems and reduced row echelon form to solve problems in different contexts where the linear system is not immediately apparent.    Be able to identify unknowns and constraints , or in other words, variables and equations involving those variables.    Build on our past work interpreting solutions to a linear system from the reduced row echelon form by further restricting to solutions which make sense in the context of a given problem.         Suppose we know that in a football game there were points scored from scoring occasions and also that the number of successful extra point kicks was equal to the number of successful two point conversions. Find all ways in which the points may have been scored in this game. (Recall that points can be scored via 6-point touchdowns, 3-point field goals, 2-point conversions, and 1-point extra point kicks.)    The only way which meets all the conditions and makes sense is by scoring field goals.    The augmented matrix from this system is . From this we find the solution .  The only time each of these variables are nonnegative integers is when or . If , then we have touchdowns, extra points and two point conversions (and field goals); this doesn't make sense since the extra points and two point conversions follow touchdowns. If , then we have no touchdowns, extra points or two point conversions (just field goals). This is the only solution; all points were scored from field goals.      Pure elemental phosphorous and hypochlorous acid react in water to make phosphoric acid and hydrochloric acid . Balance the chemical equation .    The balanced equation is .    We are looking for . Consider the number of atoms of each element before and after the reaction. Turning this system into an augmented matrix and row reducing results in We want the smallest possible numbers such that no value is negative or fractional, so let . Then and the balanced equation is .        You might know that two points determine a line. That's because in a line there are two unknowns: the coefficient of the term and the constant term. Note that in we needed three points to determine a specific quadratic function because there were three unknowns: the coefficient of the term, the coefficient of the term and the coefficient of the constant term.     Find the smallest degree polynomial which goes through the points , , and .           Go through the same steps to attempt to find a quadratic function through the points , , and . What do you get, and why does the answer make sense?    The coefficient of the term is , giving the linear function . The three given points all lie on a line.       In a basketball game, where points are scored either by a point shot, a point shot or a point free throw, there were points scored from successful shots. Find all ways in which the points may have been scored in this game.    There are possible solutions:    free throws, two-point shots, three-point shots     free throws, two-point shots, three-point shots     free throws, two-point shots, three-point shots     free throws, two-point shots, three-point shots     free throws, two-point shots, three-point shots     free throws, two-point shots, three-point shots       Let , and represent the number of free throws, 2 point and 3 point shots taken. The augmented matrix from this system is . From this we find the solution .  In order for and to be nonnegative, we need . Thus there are different scenarios: the first is where three point shots are taken, no free throws, and two point shots; the last is where three point shots are taken, free throws, and no two point shots.       Summary     Many problems in different areas of sports, science, computer science, artificial intelligence and machine learning, and other areas can be solved using linear systems.    These problems often don't appear already phrased in terms of variables and linear equations, but there are problem solving steps we can use to frame the problem in terms of linear systems and an augmented matrix we can put into reduced row echelon form.    Interpreting the possible solutions in terms of which ones make sense in the context of the problem is necessary and often quite involved.      Practice  Quadratic through 3 points    Find the quadratic polynomial whose graph goes through the points  and .   .             Quartic through 5 points    Find the polynomial of degree 4 whose graph goes through the points    and   .             Balancing a chemical reaction    Consider the chemical reaction where   and are unknown positive integers. The reaction mush be balanced; that is, the number of atoms of each element must be the same before and after the reaction. For example, because the number of oxygen atoms must remain the same, While there are many possible choices for   and that balance the reaction, it is customary to use the smallest possible integers. Balance this reaction.                                Balancing another chemical reaction    Balance the chemical equation   and give your answer in lowest terms. That is, the coefficients should all be integers that do not all share a common factor.                             SOLUTION: We consider , which implies which has augmented matrix Notice that entries of the augmented matrix share a common factor of , so that it is row equivalent to the matrix Now row reduce this matrix to get We set as a free variable. From row 4, From row 3, From row 2 From row 1, We set to obtain , , , , and , and the balanced equation is        Weighted ranking from a table    A new LAI (for Linear Algebra Index) formula has been used to rank the eight college football teams shown below. Determine the formula for the LAI.   LAI = (USA) + (Harris) + (Computer)  Help: The use of a computer algebra system is advised. Be sure to use all 8 digits of the LAI in your computations, or else suffer huge rounding errors!                  SOLUTION: With the new LAI values, we obtain the three equations using the top three schools Using a computer algebra system we solve this system and obtain , , and .           Additional Practice    In the following exercises, find the solution of the given problem by:   creating an appropriate system of linear equations    forming the augmented matrix that corresponds to this system    putting the augmented matrix into reduced row echelon form    interpreting the reduced row echelon form of the matrix as a solution        A farmer looks out his window at his chickens and pigs. He tells his daughter that he sees heads and legs. How many chickens and pigs does the farmer have?     chickens and pigs      A lady buys trinkets at a yard sale. The cost of each trinket is either or . If she spends , how many of each type of trinket does she buy?     of the trinkets, of the trinkets      A carpenter can make two sizes of table, grande and venti. The grande table requires table legs and table top; the venti requires table legs and table tops. After doing work, he counts up spare parts in his warehouse and realizes that he has table tops left over, and legs. How many tables of each kind can he build and use up exactly all of his materials?     grande tables, venti tables      A jar contains marbles. We know there are twice as many green marbles as red; that the number of blue and yellow marbles together is the same as the number of green; and that three times the number of yellow marbles together with the red marbles gives the same numbers as the blue marbles. How many of each color of marble are in the jar?     blue, green, red, yellow      A rescue mission has sandwiches, bags of chips and cookies. They know from experience that men will eat sandwiches, bag of chips and cookies; women will eat one sandwich, a bag of chips and two cookies; kids will eat half a sandwhich, a bag of chips and cookies. If they want to use all their food up, how many men, women and kids can they feed?     men, women, kids       In the following exercises, find the polynomial with the smallest degree that goes through the given points.      and             and            Find the smallest degree polynomial which goes through the points , and .            , and             , and             , and             , , and             , , and             , , and             The general exponential function has the form , where and are constants and is Euler's constant ( 2.718). We want to find the equation of the exponential function that goes through the points and .   Show why we cannot simply substitute in values for and in the equation and solve using the techniques we used for polynomials.    Show how the equality leads us to the equation , which is linear in .    Use the techniques we developed to solve for the unknowns and .    Knowing , find ; find the exponential function that goes through the points and .              Substitution yields the equations and ; these are not linear equations.     implies that .    Plugging in the points for and in the equation , we have equations . To solve, . Therefore and .    Since , we know that . Thus our exponential function is .        In a football game, points are scored from scoring occasions. There are more successful extra point kicks than successful two point conversions. Find all ways in which the points may have been scored in this game.    The augmented matrix from this system is . From this we find the solution .  The only time each of these variables are nonnegative integers is when or . If , then we have touchdowns, extra points and two point conversion (no field goals). If , then we have touchdowns, extra points and no two point conversions (and field goals).      In a basketball game, where points are scored either by a point shot, a point shot or a point free throw, there were points scored from successful shots. Find all ways in which the points may have been scored in this game.    Let , and represent the number of free throws, 2 point and 3 point shots taken. The augmented matrix from this system is . From this we find the solution .  In order for to be nonnegative, we need . Thus there are different scenerios: the first is where three point shots are taken ( , free throws and two point shots; the last is where three point shots are taken, free throws, and no two point shots.      Describe the equations of the linear functions that go through the point . Give examples.    Let ; all linear functions through come in the form . Two possible examples could be: setting yields ; and setting yields .      Describe the equations of the linear functions that go through the point . Give examples.    Let ; all linear functions through come in the form . Two possible examples could be: setting yields ; and setting yields .      Describe the equations of the quadratic functions that go through the points and . Give examples.    Let ; we find that and . Two possible examples could be: setting yields ; and setting yields .      Describe the equations of the quadratic functions that go through the points and . Give examples.    Let ; we find that and . Two possible examples could be: setting yields ; and setting yields .     "
},
{
  "id": "ex_application_1",
  "level": "2",
  "url": "sec-problem-solving.html#ex_application_1",
  "type": "Example",
  "number": "1.6.1",
  "title": "Seats in a Baseball Stadium.",
  "body": "Seats in a Baseball Stadium  A baseball stadium has seating arranged in three sections. As part of a special promotion, guests will receive two of three prizes. Guests seated in Sections A and B will receive a hat, guests seated in Sections B and C will receive a shirt, and guests seated in Sections A and C will receive a hot dog. The promoters told the stadium managers of their plans, and asked how many seats were in each section. The managers, thinking they were being helpful, told the promoters they would need hats, shirts, and hot dogs, and they have since been unavailable for further help. How many seats are in each section?  In order to answer this question, we need to make we know what is being asked. The final sentence of the question asks: How many seats are in each section?   Since we are trying to solve for the number of seats in each section, those should be our variables. Let be the number of seats in Section A, be the number of seats in Section B, and be the number of seats in Section C.  Now we use the information given to create linear equations. We were told that hats go to guests in Sections A and B and that we'll need hats, which means that Guests in Sections B and C get shirts, which means that . Lastly, guests in Sections A and C get hot dogs, which means that . Putting these three equations into a linear system results in , and the corresponding augmented matrix is .  To solve our system, we put the augmented matrix into reduced row echelon form and get .  Since , this means that Section A has seats. Similarly, we see that Section B has seats, and Section C has seats. This is a reasonable solution because the number of seats in each section is nonnegative and a whole number.  "
},
{
  "id": "cardsort-what-variables",
  "level": "2",
  "url": "sec-problem-solving.html#cardsort-what-variables",
  "type": "Activity",
  "number": "1.6.2",
  "title": "Which quantities should be variables?",
  "body": "Which quantities should be variables?   An American football team can score points via touchdowns, extra points, 2-point conversions, and field goals. We were given the total points scored and some other information and were asked to find how the team scored its points. What should the variables in this problem be?    The variables should be the things we are solving for, the ways to score points. Other information in the problem will get used as part of the linear equations which involve the variables.     Variables in this problem  The number of touchdowns,  The number of field goals,  The number of extra points,  The number of 2-point conversions,    Not variables in this problem  The number of points,  Points earned through touchdowns,  Extra points and 2-point conversions only come after touchdowns,    "
},
{
  "id": "valid-solutions",
  "level": "2",
  "url": "sec-problem-solving.html#valid-solutions",
  "type": "Activity",
  "number": "1.6.3",
  "title": "Which solutions make sense?",
  "body": " Which solutions make sense?     Consider a linear system whose augmented matrix and reduced row echelon form are shown below. Note that this translates back to equations as Which of the following values is a possible solution for , , and ?       , ,     Correct!       , ,     Correct!       , ,     Correct!       , ,     Correct!        A woman has total bills in her purse, consisting of , and bills, giving her a total of . How many bills of each denomination does she have?  Let , and be the number of ones, fives and tens, respectively, and suppose that the problem has been solved as far as Which of the following values is a possible solution for , , and ?       , ,     She can't have one-dollar bills, or five-dollar bills.       , ,     She can't have a negative amount of ten-dollar bills.       , ,     Correct! This is a total of bills, and ones plus fives add up to .  If you had to pick one solution only, this one is likely not the best choice because the wording consisting of might imply that she has at least one of each type of bill.       , ,     Correct! This is a total of bills, and ones, fives, and tens add up to .      "
},
{
  "id": "ex_balance_chem_eqn",
  "level": "2",
  "url": "sec-problem-solving.html#ex_balance_chem_eqn",
  "type": "Example",
  "number": "1.6.4",
  "title": "Balancing a chemical equation.",
  "body": "Balancing a chemical equation  When chemicals react, no elements are created or destroyed; instead they recombine into different substances. For example, a blow torch works by burning acetylene in the presence of oxygen . The result is carbon dioxide and water . If there were atoms of carbon (as part of the acetylene) before the reaction, then there have to be atoms of carbon (in the form of carbon dioxide) after the reaction also.  In chemistry, balancing a chemical equation means finding the smallest numbers of the different molecules involved in the reaction. Most students of chemistry balance equations by guessing and checking, but there's actually a system of linear equations involved, which means there's an algorithm which always leads to a solution.  Let's balance the blow torch reaction, using our problem solving steps.   We need to find the coefficients of each of the molecules, so those are the unknowns we should give names to. Let's say there are many molecules of , and many molecules of , and many molecules of , and many molecules of .   Now we consider each element and the number of atoms there are before and after the reaction.  For carbon, which is denoted by , there are molecules of , and there are carbon atoms in each of the molecules, which means there are carbon atoms before the reaction takes place. After the reaction (or after the arrow), there are molecules of and carbon atom in each molecule, which means there are many atoms of carbon after the reaction occurs. Because the number of carbon atoms must be the same before and after the reaction, we get the equation , or restated in the form which has the constant after the equal sign as .  Next, we examine hydrogen, which is denoted by . Before the reaction there were hydrogen atoms in each of the molecules of , for a total of hydrogen atoms. After the reaction, there are hydrogen atoms in each of the molecules of , for a total of hydrogen atoms. This gives the equation , or moving the variables to the left side of the equal sign, .  Finally, we look at oxygen, denoted by . Note that there is oxygen in both of the molecules that appear after the reaction. There were oxygen atoms before the reaction took place, and after the reaction there are oxygen atoms in each of the molecules of and oxygen atom in each of the molecules of , which means there is a total of oxygen atoms after the reaction. This gives us the equation , or .  We put these equations into an augmented matrix and then find the reduced row echelon form .  Note that the variable is free, which means that mathematically, can take on any value. What happens if we let ? The third row says that , which means that . The second row says that , which means that , and the first row says that , which means that .  However, it is impossible to have a fractional number of molecules. To clear the denominator, let's multiply by and let instead of . Then the particular solution becomes and the balanced equation is . Note that it makes sense to have infinitely many solutions to the linear system, since multiplying the whole thing by or or any whole positive number will keep the reaction balanced with equal numbers of each element's atoms before and after the arrow.  "
},
{
  "id": "parsons-quadratic-through-3-pts",
  "level": "2",
  "url": "sec-problem-solving.html#parsons-quadratic-through-3-pts",
  "type": "Reading Question",
  "number": "1",
  "title": "Parsons Problem, Equation of a Quadratic Through 3 Points.",
  "body": " Parsons Problem, Equation of a Quadratic Through 3 Points   Select the correct steps to find the equation of the quadratic function that goes through the points , and .      A quadratic function has equation .     , , , , and are all unknowns which need to be solved for.     and refer to points in the plane, so the unknowns to solve for are the coefficients , , and .    Passing through the point means the equation holds when and , so we get the equation .    The two remaining points gives us the equations and .    Rewriting the set of linear equations gives us .    Putting the equations into an augmented matrix and then row reducing gives .    The solution is , and , which is the quadratic function .    "
},
{
  "id": "parsons-balance-equation-1",
  "level": "2",
  "url": "sec-problem-solving.html#parsons-balance-equation-1",
  "type": "Reading Question",
  "number": "2",
  "title": "Parsons Problem, Balancing a Chemical Equation.",
  "body": " Parsons Problem, Balancing a Chemical Equation   Select the steps to balance the chemical equation below.       We are looking for the values of such that     Looking at the element calcium , we have atoms before the reaction and atoms of calcium after the reaction takes place, so .    Similarly, looking at the number of atoms of oxygen before and after the reaction gives us the equation , while examining hydrogen gives the equation , and considering phosphorus results in .    Putting these equations into an augmented matrix and then row reducing gives     Turning the reduced row echelon form back into equations results in     Letting yields a final answer of .    Letting yields a final answer of .    "
},
{
  "id": "rq-probsolv-questions-poll",
  "level": "2",
  "url": "sec-problem-solving.html#rq-probsolv-questions-poll",
  "type": "Reading Question",
  "number": "3",
  "title": "Reflection.",
  "body": "Reflection   Reflect on your confidence level.    How confident do you feel with the material you just read about?      Not at all confident or didn't do the reading.      Not very confident.      Somewhat confident.      Mostly confident.      Confident so far and ready to engage more deeply.         Ask a question about the material. What additional information do you think someone would need to become more confident in their understanding?     "
},
{
  "id": "ws-problem-solving-2",
  "level": "2",
  "url": "sec-problem-solving.html#ws-problem-solving-2",
  "type": "Objectives",
  "number": "",
  "title": "",
  "body": "   Be able to use linear systems and reduced row echelon form to solve problems in different contexts where the linear system is not immediately apparent.    Be able to identify unknowns and constraints , or in other words, variables and equations involving those variables.    Build on our past work interpreting solutions to a linear system from the reduced row echelon form by further restricting to solutions which make sense in the context of a given problem.    "
},
{
  "id": "ws-problem-solving-3-1",
  "level": "2",
  "url": "sec-problem-solving.html#ws-problem-solving-3-1",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "",
  "body": "  Suppose we know that in a football game there were points scored from scoring occasions and also that the number of successful extra point kicks was equal to the number of successful two point conversions. Find all ways in which the points may have been scored in this game. (Recall that points can be scored via 6-point touchdowns, 3-point field goals, 2-point conversions, and 1-point extra point kicks.)    The only way which meets all the conditions and makes sense is by scoring field goals.    The augmented matrix from this system is . From this we find the solution .  The only time each of these variables are nonnegative integers is when or . If , then we have touchdowns, extra points and two point conversions (and field goals); this doesn't make sense since the extra points and two point conversions follow touchdowns. If , then we have no touchdowns, extra points or two point conversions (just field goals). This is the only solution; all points were scored from field goals.   "
},
{
  "id": "ws-problem-solving-3-2",
  "level": "2",
  "url": "sec-problem-solving.html#ws-problem-solving-3-2",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "",
  "body": "  Pure elemental phosphorous and hypochlorous acid react in water to make phosphoric acid and hydrochloric acid . Balance the chemical equation .    The balanced equation is .    We are looking for . Consider the number of atoms of each element before and after the reaction. Turning this system into an augmented matrix and row reducing results in We want the smallest possible numbers such that no value is negative or fractional, so let . Then and the balanced equation is .   "
},
{
  "id": "ws-problem-solving-4-1",
  "level": "2",
  "url": "sec-problem-solving.html#ws-problem-solving-4-1",
  "type": "Worksheet Exercise",
  "number": "3",
  "title": "",
  "body": "  You might know that two points determine a line. That's because in a line there are two unknowns: the coefficient of the term and the constant term. Note that in we needed three points to determine a specific quadratic function because there were three unknowns: the coefficient of the term, the coefficient of the term and the coefficient of the constant term.     Find the smallest degree polynomial which goes through the points , , and .           Go through the same steps to attempt to find a quadratic function through the points , , and . What do you get, and why does the answer make sense?    The coefficient of the term is , giving the linear function . The three given points all lie on a line.    "
},
{
  "id": "ws-problem-solving-4-2",
  "level": "2",
  "url": "sec-problem-solving.html#ws-problem-solving-4-2",
  "type": "Worksheet Exercise",
  "number": "4",
  "title": "",
  "body": "  In a basketball game, where points are scored either by a point shot, a point shot or a point free throw, there were points scored from successful shots. Find all ways in which the points may have been scored in this game.    There are possible solutions:    free throws, two-point shots, three-point shots     free throws, two-point shots, three-point shots     free throws, two-point shots, three-point shots     free throws, two-point shots, three-point shots     free throws, two-point shots, three-point shots     free throws, two-point shots, three-point shots       Let , and represent the number of free throws, 2 point and 3 point shots taken. The augmented matrix from this system is . From this we find the solution .  In order for and to be nonnegative, we need . Thus there are different scenarios: the first is where three point shots are taken, no free throws, and two point shots; the last is where three point shots are taken, free throws, and no two point shots.   "
},
{
  "id": "ww-problemsolving1",
  "level": "2",
  "url": "sec-problem-solving.html#ww-problemsolving1",
  "type": "Exercise",
  "number": "1.6.1",
  "title": "Quadratic through 3 points.",
  "body": "Quadratic through 3 points    Find the quadratic polynomial whose graph goes through the points  and .   .            "
},
{
  "id": "ww-problemsolving2",
  "level": "2",
  "url": "sec-problem-solving.html#ww-problemsolving2",
  "type": "Exercise",
  "number": "1.6.2",
  "title": "Quartic through 5 points.",
  "body": "Quartic through 5 points    Find the polynomial of degree 4 whose graph goes through the points    and   .            "
},
{
  "id": "ww-problemsolving3",
  "level": "2",
  "url": "sec-problem-solving.html#ww-problemsolving3",
  "type": "Exercise",
  "number": "1.6.3",
  "title": "Balancing a chemical reaction.",
  "body": "Balancing a chemical reaction    Consider the chemical reaction where   and are unknown positive integers. The reaction mush be balanced; that is, the number of atoms of each element must be the same before and after the reaction. For example, because the number of oxygen atoms must remain the same, While there are many possible choices for   and that balance the reaction, it is customary to use the smallest possible integers. Balance this reaction.                               "
},
{
  "id": "ww-problemsolving4",
  "level": "2",
  "url": "sec-problem-solving.html#ww-problemsolving4",
  "type": "Exercise",
  "number": "1.6.4",
  "title": "Balancing another chemical reaction.",
  "body": "Balancing another chemical reaction    Balance the chemical equation   and give your answer in lowest terms. That is, the coefficients should all be integers that do not all share a common factor.                             SOLUTION: We consider , which implies which has augmented matrix Notice that entries of the augmented matrix share a common factor of , so that it is row equivalent to the matrix Now row reduce this matrix to get We set as a free variable. From row 4, From row 3, From row 2 From row 1, We set to obtain , , , , and , and the balanced equation is       "
},
{
  "id": "ww-problemsolving5",
  "level": "2",
  "url": "sec-problem-solving.html#ww-problemsolving5",
  "type": "Exercise",
  "number": "1.6.5",
  "title": "Weighted ranking from a table.",
  "body": "Weighted ranking from a table    A new LAI (for Linear Algebra Index) formula has been used to rank the eight college football teams shown below. Determine the formula for the LAI.   LAI = (USA) + (Harris) + (Computer)  Help: The use of a computer algebra system is advised. Be sure to use all 8 digits of the LAI in your computations, or else suffer huge rounding errors!                  SOLUTION: With the new LAI values, we obtain the three equations using the top three schools Using a computer algebra system we solve this system and obtain , , and .       "
},
{
  "id": "exer-problem-solving-2-2",
  "level": "2",
  "url": "sec-problem-solving.html#exer-problem-solving-2-2",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": "  A farmer looks out his window at his chickens and pigs. He tells his daughter that he sees heads and legs. How many chickens and pigs does the farmer have?     chickens and pigs   "
},
{
  "id": "exer-problem-solving-2-3",
  "level": "2",
  "url": "sec-problem-solving.html#exer-problem-solving-2-3",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": "  A lady buys trinkets at a yard sale. The cost of each trinket is either or . If she spends , how many of each type of trinket does she buy?     of the trinkets, of the trinkets   "
},
{
  "id": "exer-problem-solving-2-4",
  "level": "2",
  "url": "sec-problem-solving.html#exer-problem-solving-2-4",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": "  A carpenter can make two sizes of table, grande and venti. The grande table requires table legs and table top; the venti requires table legs and table tops. After doing work, he counts up spare parts in his warehouse and realizes that he has table tops left over, and legs. How many tables of each kind can he build and use up exactly all of his materials?     grande tables, venti tables   "
},
{
  "id": "exer-problem-solving-2-5",
  "level": "2",
  "url": "sec-problem-solving.html#exer-problem-solving-2-5",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": "  A jar contains marbles. We know there are twice as many green marbles as red; that the number of blue and yellow marbles together is the same as the number of green; and that three times the number of yellow marbles together with the red marbles gives the same numbers as the blue marbles. How many of each color of marble are in the jar?     blue, green, red, yellow   "
},
{
  "id": "exer-problem-solving-2-6",
  "level": "2",
  "url": "sec-problem-solving.html#exer-problem-solving-2-6",
  "type": "Exercise",
  "number": "5",
  "title": "",
  "body": "  A rescue mission has sandwiches, bags of chips and cookies. They know from experience that men will eat sandwiches, bag of chips and cookies; women will eat one sandwich, a bag of chips and two cookies; kids will eat half a sandwhich, a bag of chips and cookies. If they want to use all their food up, how many men, women and kids can they feed?     men, women, kids   "
},
{
  "id": "exer-problem-solving-3-2",
  "level": "2",
  "url": "sec-problem-solving.html#exer-problem-solving-3-2",
  "type": "Exercise",
  "number": "6",
  "title": "",
  "body": "   and         "
},
{
  "id": "exer-problem-solving-3-3",
  "level": "2",
  "url": "sec-problem-solving.html#exer-problem-solving-3-3",
  "type": "Exercise",
  "number": "7",
  "title": "",
  "body": "   and         "
},
{
  "id": "exer-problem-solving-3-4",
  "level": "2",
  "url": "sec-problem-solving.html#exer-problem-solving-3-4",
  "type": "Exercise",
  "number": "8",
  "title": "",
  "body": "  Find the smallest degree polynomial which goes through the points , and .        "
},
{
  "id": "exer-problem-solving-3-5",
  "level": "2",
  "url": "sec-problem-solving.html#exer-problem-solving-3-5",
  "type": "Exercise",
  "number": "9",
  "title": "",
  "body": "   , and         "
},
{
  "id": "exer-problem-solving-3-6",
  "level": "2",
  "url": "sec-problem-solving.html#exer-problem-solving-3-6",
  "type": "Exercise",
  "number": "10",
  "title": "",
  "body": "   , and         "
},
{
  "id": "exer-problem-solving-3-7",
  "level": "2",
  "url": "sec-problem-solving.html#exer-problem-solving-3-7",
  "type": "Exercise",
  "number": "11",
  "title": "",
  "body": "   , and         "
},
{
  "id": "exer-problem-solving-3-8",
  "level": "2",
  "url": "sec-problem-solving.html#exer-problem-solving-3-8",
  "type": "Exercise",
  "number": "12",
  "title": "",
  "body": "   , , and         "
},
{
  "id": "exer-problem-solving-3-9",
  "level": "2",
  "url": "sec-problem-solving.html#exer-problem-solving-3-9",
  "type": "Exercise",
  "number": "13",
  "title": "",
  "body": "   , , and         "
},
{
  "id": "exer-problem-solving-3-10",
  "level": "2",
  "url": "sec-problem-solving.html#exer-problem-solving-3-10",
  "type": "Exercise",
  "number": "14",
  "title": "",
  "body": "   , , and         "
},
{
  "id": "exer-problem-solving-4",
  "level": "2",
  "url": "sec-problem-solving.html#exer-problem-solving-4",
  "type": "Exercise",
  "number": "15",
  "title": "",
  "body": "  The general exponential function has the form , where and are constants and is Euler's constant ( 2.718). We want to find the equation of the exponential function that goes through the points and .   Show why we cannot simply substitute in values for and in the equation and solve using the techniques we used for polynomials.    Show how the equality leads us to the equation , which is linear in .    Use the techniques we developed to solve for the unknowns and .    Knowing , find ; find the exponential function that goes through the points and .              Substitution yields the equations and ; these are not linear equations.     implies that .    Plugging in the points for and in the equation , we have equations . To solve, . Therefore and .    Since , we know that . Thus our exponential function is .     "
},
{
  "id": "exer-problem-solving-5",
  "level": "2",
  "url": "sec-problem-solving.html#exer-problem-solving-5",
  "type": "Exercise",
  "number": "16",
  "title": "",
  "body": "  In a football game, points are scored from scoring occasions. There are more successful extra point kicks than successful two point conversions. Find all ways in which the points may have been scored in this game.    The augmented matrix from this system is . From this we find the solution .  The only time each of these variables are nonnegative integers is when or . If , then we have touchdowns, extra points and two point conversion (no field goals). If , then we have touchdowns, extra points and no two point conversions (and field goals).   "
},
{
  "id": "exer-problem-solving-6",
  "level": "2",
  "url": "sec-problem-solving.html#exer-problem-solving-6",
  "type": "Exercise",
  "number": "17",
  "title": "",
  "body": "  In a basketball game, where points are scored either by a point shot, a point shot or a point free throw, there were points scored from successful shots. Find all ways in which the points may have been scored in this game.    Let , and represent the number of free throws, 2 point and 3 point shots taken. The augmented matrix from this system is . From this we find the solution .  In order for to be nonnegative, we need . Thus there are different scenerios: the first is where three point shots are taken ( , free throws and two point shots; the last is where three point shots are taken, free throws, and no two point shots.   "
},
{
  "id": "exer-problem-solving-7",
  "level": "2",
  "url": "sec-problem-solving.html#exer-problem-solving-7",
  "type": "Exercise",
  "number": "18",
  "title": "",
  "body": "  Describe the equations of the linear functions that go through the point . Give examples.    Let ; all linear functions through come in the form . Two possible examples could be: setting yields ; and setting yields .   "
},
{
  "id": "exer-problem-solving-8",
  "level": "2",
  "url": "sec-problem-solving.html#exer-problem-solving-8",
  "type": "Exercise",
  "number": "19",
  "title": "",
  "body": "  Describe the equations of the linear functions that go through the point . Give examples.    Let ; all linear functions through come in the form . Two possible examples could be: setting yields ; and setting yields .   "
},
{
  "id": "exer-problem-solving-9",
  "level": "2",
  "url": "sec-problem-solving.html#exer-problem-solving-9",
  "type": "Exercise",
  "number": "20",
  "title": "",
  "body": "  Describe the equations of the quadratic functions that go through the points and . Give examples.    Let ; we find that and . Two possible examples could be: setting yields ; and setting yields .   "
},
{
  "id": "exer-problem-solving-10",
  "level": "2",
  "url": "sec-problem-solving.html#exer-problem-solving-10",
  "type": "Exercise",
  "number": "21",
  "title": "",
  "body": "  Describe the equations of the quadratic functions that go through the points and . Give examples.    Let ; we find that and . Two possible examples could be: setting yields ; and setting yields .   "
},
{
  "id": "sec-matrixarithmetic",
  "level": "1",
  "url": "sec-matrixarithmetic.html",
  "type": "Section",
  "number": "2.1",
  "title": "Introduction to Matrix Arithmetic",
  "body": " Introduction to Matrix Arithmetic   We will stop thinking about matrices as representing linear systems, and instead think of matrices as being kind of like numbers.  When we were children, we learned about numbers and their names and numerals, then how to count, how to add, subtract, and multiply, and various properties of those operations that led us to be able to solve equations containing unknown numbers. All of this took years to became second nature, but we will build on the knowledge and familiarity with how numbers work to understand how matrices work.    Prepare  We defined a matrix in , and included defining rows, columns, and notation for the size of a matrix and for the entries within a matrix. An augmented matrix, whose entries represent the coefficients and constants in a linear system, is a type of matrix or a way of interpreting a matrix, but when we look at a matrix we don't have to think of a linear system at all. A matrix is an array of numbers; both the size of the array and the contents are important to the essence of a matrix.   Adding matrices  Matrix addition We add two matrices by adding the numbers in their corresponding positions. For example, Because numbers can be added in either order and the answer is the same, for example , it follows that adding matrices in either order results in the same matrix also.   Subtraction and multiplying by numbers can be related back to addition, for example and , so it makes sense that subtracting two matrices and multiplying a matrix by a number also work by doing the operation to each entry in the matrix.  We know that numbers can sometimes appear in different forms but really be the same number: for example, , , are all different ways to write the number two . Two matrices are equal if each corresponding position contains the same number, regardless of the form of the number.  Let's try some examples.  Matrix Operations   Define matrices , , and by      Select all answers which are equal to            Correct!           Correct!           Correct!        Select all answers which are equal to            Correct!           This is , subtracted in the other order.           Correct!        Select all answers which are equal to            This is .           Correct!           Correct!           This is .        Select all answers which are equal to .           Correct!           Correct!               is a matrix containing all zeros, while the given matrix was a matrix containing all zeros.        Select all answers which are equal to            Matrix and matrix have different sizes, so there are positions without corresponding entries to add. For example, the third column of has nothing corresponding in .      Trick question! is not defined    Correct! and have different sizes so there are positions which don't have corresponding entries to add.       We never had to worry about whether two numbers could be added or subtracted, so that is a difference between numbers and matrices. The size of a matrix is key to being able to perform calculations; only matrices of the same size can be added and subtracted, and if two matrices have different sizes, then they cannot be equal.  Matrices containing all zeros come up enough that we should define them.   The Zero Matrix    zero matrix  matrix the zero matrix The matrix containing in every entry, denoted , is the zero matrix of size  .  When the dimensions are clear from the context, we just write in bold font and call it the zero matrix , even though there is a different zero matrix for each size.    Note the difference between and : the first is a number and the second is a matrix in which every entry is the number .  Lots of things we've known are true about adding and subtracting numbers are true for matrices also, and we'll collect them here.   Properties of Adding Matrices and of Multiplying a Matrix by a Number   matrix arithmetic properties  If , and are matrices, and is a number, then the following equalities are all true.  Commutative Property      Associative Property      Number Multiplication Distributive Property      Number Multiplication Commutative Property      Additive Identity      Multiplying by the Number Equals the Zero Matrix          Matrix Property Names   Match each property to its correct name.  Let , and be matrices and let be a number.    Distributive  Commutativity of Addition  Associativity of Addition          You might have noticed that there are a couple of operations we do with numbers that we have not discussed how to do with matrices, namely, multiplication and division. There's a very good reason for this: multiplication and division in the realm of matrices are very different from multiplication and division of numbers, and we leave them for future sections.     In your own words, explain how to add two matrices together. Be sure to discuss if addition is always possible or if not, what conditions need to be satisfied.     True or False?    There is exactly one Zero Matrix.    There is one matrix of all zeros for each size. However, , for example.      Multiplying a matrix by means multiplying each entry in the matrix by .    True, this is how we define multiplying a matrix by a number.     Reflection   Reflect on your confidence level.    How confident do you feel with the material you just read about?      Not at all confident or didn't do the reading.      Not very confident.      Somewhat confident.      Mostly confident.      Confident so far and ready to engage more deeply.         Ask a question about the material. What additional information do you think someone would need to become more confident in their understanding?        Participate     Begin to view matrices as objects similar to numbers, which can be added, subtracted, and multiplied by a number.    Be able to perform matrix addition and multiplication by a number and use properties of these operations.      We have discussed multiplying a matrix by a number. Most texts will use the term scalar instead of number . There are good reasons for this, but they are outside the scope of this material. Still, it is good to recognize both words could be used.      Consider the matrices and . Say why and are not equal as matrix objects. Does this make sense to you, or do you think they should be the same thing?    They are not the same size, so they can't be equal as matrices. However, they contain the exact same information and the only difference is the orientation of the writing.      What do you think a square matrix is? What about a row matrix or column matrix ?    A square matrix is , same number of rows as columns. A row matrix is , written as one row, while a column matrix is , written as one column.      Let , , and .  Calculate each of the items below. What do you notice about your answers?      , and      ,        and      , ,            ,       , , and      , , and .         For each of the proposed properties below, say whether it is True, False, or Insufficient Information and give a sentence or two of explanation\/reasoning. Note that these are all statements you might be used to using with numbers, and the goal is to think about how matrices and numbers are similar in some ways and different in some ways.  Let , , and be matrices of the same size, and let and be numbers.          True. Discuss subtracting versus multiplying by and adding, possibly additive inverses.           True, another distributive property.      If then .    False, subtracting from both sides gives .      If then .    True, multiplying both sides by the number .      If then .    Insufficient Information. We don't yet know what multiplying by a matrix means, and certainly not what dividing by a matrix might mean.           True. Multiplying a matrix by a number in either order comes down to multiplying the number entries together in either order, and number multiplication is commutative.           Insufficient information. We don't yet know what multiplying by a matrix means. This is true for numbers, however.      For each matrix , there is a matrix such that . (The matrix acts like the number does for numbers.)    True, the zero matrix of the appropriate size. But there are different zero matrices and only one number .      For each matrix , there is a matrix such that . (The matrix acts like the number does for numbers.)    Insufficient Information.         Summary     Matrices are mathematical objects like numbers are. We don't need to think of matrices as coming from a linear system.    Matrices can be multiplied by numbers (also called scalars). If two matrices are the same size, they can be added and subtracted.    Many of the properties we're used to still hold for matrix addition and multiplication by a number, such as associativity and commutativity of addition and the distributive property.      Practice  Adding and Multiplying by a Number    Let and be the following matrices.   Perform the following operations:              Matrix Addition Application    During the month of January, ABC Appliances sold microwaves, refrigerators, and stoves, while XYZ Appliances sold microwaves, refrigerators and stoves.  During the month of February, ABC Appliances sold microwaves, refrigerators, and stoves, while XYZ Appliances sold microwaves, refrigerators and stoves.  Write a matrix summarizing the sales for the month of January. (Keep the order of information).  Write a matrix summarizing the sales for the month of February. (Keep the order of information).  Using matrix addition, write a matrix summarizing the total sales for the months of January and February.        Solving a Matrix Equation    Solve for .           Adding Matrices, List of Lists Notation   Many programming languages, including Python and Sage, use a list of lists to enter matrices. We use that notation in this problem instead of the usual array answer box notation to avoid giving away information about the size of the matrix or whether such a matrix exists at all.      Let   If possible, compute the following. If an answer does not exist, enter DNE .                      True\/False Matrix Properties     Enter T or F depending on whether the statement is true or false. (You must enter T or F -- True and False will not work.)    An matrix has columns and rows.    For any matrix , .    For any matrix , there exists a matrix so that .           Additional Practice    Matrices and are given below. In the following exercises, simplify the given expression.                                                                               Matrices and are given below. In the following exercises, simplify the given expression.                                                       Matrices and are given below. In the following exercises, find a matrix that satisfies the equation.                                                       "
},
{
  "id": "matrix-addsubscalarmult",
  "level": "2",
  "url": "sec-matrixarithmetic.html#matrix-addsubscalarmult",
  "type": "Activity",
  "number": "2.1.1",
  "title": "Matrix Operations.",
  "body": "Matrix Operations   Define matrices , , and by      Select all answers which are equal to            Correct!           Correct!           Correct!        Select all answers which are equal to            Correct!           This is , subtracted in the other order.           Correct!        Select all answers which are equal to            This is .           Correct!           Correct!           This is .        Select all answers which are equal to .           Correct!           Correct!               is a matrix containing all zeros, while the given matrix was a matrix containing all zeros.        Select all answers which are equal to            Matrix and matrix have different sizes, so there are positions without corresponding entries to add. For example, the third column of has nothing corresponding in .      Trick question! is not defined    Correct! and have different sizes so there are positions which don't have corresponding entries to add.      "
},
{
  "id": "def_zero_matrix",
  "level": "2",
  "url": "sec-matrixarithmetic.html#def_zero_matrix",
  "type": "Definition",
  "number": "2.1.2",
  "title": "The Zero Matrix.",
  "body": " The Zero Matrix    zero matrix  matrix the zero matrix The matrix containing in every entry, denoted , is the zero matrix of size  .  When the dimensions are clear from the context, we just write in bold font and call it the zero matrix , even though there is a different zero matrix for each size.   "
},
{
  "id": "thm_addition_properties",
  "level": "2",
  "url": "sec-matrixarithmetic.html#thm_addition_properties",
  "type": "Theorem",
  "number": "2.1.3",
  "title": "Properties of Adding Matrices and of Multiplying a Matrix by a Number.",
  "body": " Properties of Adding Matrices and of Multiplying a Matrix by a Number   matrix arithmetic properties  If , and are matrices, and is a number, then the following equalities are all true.  Commutative Property      Associative Property      Number Multiplication Distributive Property      Number Multiplication Commutative Property      Additive Identity      Multiplying by the Number Equals the Zero Matrix         "
},
{
  "id": "matching-matrixpropertynames",
  "level": "2",
  "url": "sec-matrixarithmetic.html#matching-matrixpropertynames",
  "type": "Activity",
  "number": "2.1.4",
  "title": "Matrix Property Names.",
  "body": "Matrix Property Names   Match each property to its correct name.  Let , and be matrices and let be a number.    Distributive  Commutativity of Addition  Associativity of Addition         "
},
{
  "id": "rq-matrixarithmetic-explainaddition",
  "level": "2",
  "url": "sec-matrixarithmetic.html#rq-matrixarithmetic-explainaddition",
  "type": "Reading Question",
  "number": "1",
  "title": "",
  "body": "  In your own words, explain how to add two matrices together. Be sure to discuss if addition is always possible or if not, what conditions need to be satisfied.    "
},
{
  "id": "rq-matrixarithmetic-truefalse",
  "level": "2",
  "url": "sec-matrixarithmetic.html#rq-matrixarithmetic-truefalse",
  "type": "Reading Question",
  "number": "2",
  "title": "True or False?",
  "body": "True or False?    There is exactly one Zero Matrix.    There is one matrix of all zeros for each size. However, , for example.      Multiplying a matrix by means multiplying each entry in the matrix by .    True, this is how we define multiplying a matrix by a number.    "
},
{
  "id": "rq-matrixarith-questions-poll",
  "level": "2",
  "url": "sec-matrixarithmetic.html#rq-matrixarith-questions-poll",
  "type": "Reading Question",
  "number": "3",
  "title": "Reflection.",
  "body": "Reflection   Reflect on your confidence level.    How confident do you feel with the material you just read about?      Not at all confident or didn't do the reading.      Not very confident.      Somewhat confident.      Mostly confident.      Confident so far and ready to engage more deeply.         Ask a question about the material. What additional information do you think someone would need to become more confident in their understanding?     "
},
{
  "id": "ws-matrixarithmetic-2",
  "level": "2",
  "url": "sec-matrixarithmetic.html#ws-matrixarithmetic-2",
  "type": "Objectives",
  "number": "",
  "title": "",
  "body": "   Begin to view matrices as objects similar to numbers, which can be added, subtracted, and multiplied by a number.    Be able to perform matrix addition and multiplication by a number and use properties of these operations.    "
},
{
  "id": "ws-matrixarithmetic-3-1",
  "level": "2",
  "url": "sec-matrixarithmetic.html#ws-matrixarithmetic-3-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "scalar "
},
{
  "id": "ws-matrixarithmetic-4-1",
  "level": "2",
  "url": "sec-matrixarithmetic.html#ws-matrixarithmetic-4-1",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "",
  "body": "  Consider the matrices and . Say why and are not equal as matrix objects. Does this make sense to you, or do you think they should be the same thing?    They are not the same size, so they can't be equal as matrices. However, they contain the exact same information and the only difference is the orientation of the writing.   "
},
{
  "id": "ws-matrixarithmetic-4-2",
  "level": "2",
  "url": "sec-matrixarithmetic.html#ws-matrixarithmetic-4-2",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "",
  "body": "  What do you think a square matrix is? What about a row matrix or column matrix ?    A square matrix is , same number of rows as columns. A row matrix is , written as one row, while a column matrix is , written as one column.   "
},
{
  "id": "ws-matrixarithmetic-4-3",
  "level": "2",
  "url": "sec-matrixarithmetic.html#ws-matrixarithmetic-4-3",
  "type": "Worksheet Exercise",
  "number": "3",
  "title": "",
  "body": "  Let , , and .  Calculate each of the items below. What do you notice about your answers?      , and      ,        and      , ,            ,       , , and      , , and .    "
},
{
  "id": "ws-matrixarithmetic-5-1",
  "level": "2",
  "url": "sec-matrixarithmetic.html#ws-matrixarithmetic-5-1",
  "type": "Worksheet Exercise",
  "number": "4",
  "title": "",
  "body": "  For each of the proposed properties below, say whether it is True, False, or Insufficient Information and give a sentence or two of explanation\/reasoning. Note that these are all statements you might be used to using with numbers, and the goal is to think about how matrices and numbers are similar in some ways and different in some ways.  Let , , and be matrices of the same size, and let and be numbers.          True. Discuss subtracting versus multiplying by and adding, possibly additive inverses.           True, another distributive property.      If then .    False, subtracting from both sides gives .      If then .    True, multiplying both sides by the number .      If then .    Insufficient Information. We don't yet know what multiplying by a matrix means, and certainly not what dividing by a matrix might mean.           True. Multiplying a matrix by a number in either order comes down to multiplying the number entries together in either order, and number multiplication is commutative.           Insufficient information. We don't yet know what multiplying by a matrix means. This is true for numbers, however.      For each matrix , there is a matrix such that . (The matrix acts like the number does for numbers.)    True, the zero matrix of the appropriate size. But there are different zero matrices and only one number .      For each matrix , there is a matrix such that . (The matrix acts like the number does for numbers.)    Insufficient Information.    "
},
{
  "id": "ww-matrixarithmetic1",
  "level": "2",
  "url": "sec-matrixarithmetic.html#ww-matrixarithmetic1",
  "type": "Exercise",
  "number": "2.1.1",
  "title": "Adding and Multiplying by a Number.",
  "body": "Adding and Multiplying by a Number    Let and be the following matrices.   Perform the following operations:             "
},
{
  "id": "ww-matrixarithmetic2",
  "level": "2",
  "url": "sec-matrixarithmetic.html#ww-matrixarithmetic2",
  "type": "Exercise",
  "number": "2.1.2",
  "title": "Matrix Addition Application.",
  "body": "Matrix Addition Application    During the month of January, ABC Appliances sold microwaves, refrigerators, and stoves, while XYZ Appliances sold microwaves, refrigerators and stoves.  During the month of February, ABC Appliances sold microwaves, refrigerators, and stoves, while XYZ Appliances sold microwaves, refrigerators and stoves.  Write a matrix summarizing the sales for the month of January. (Keep the order of information).  Write a matrix summarizing the sales for the month of February. (Keep the order of information).  Using matrix addition, write a matrix summarizing the total sales for the months of January and February.       "
},
{
  "id": "wwmatrixarithmetic3",
  "level": "2",
  "url": "sec-matrixarithmetic.html#wwmatrixarithmetic3",
  "type": "Exercise",
  "number": "2.1.3",
  "title": "Solving a Matrix Equation.",
  "body": "Solving a Matrix Equation    Solve for .          "
},
{
  "id": "ww-matrixarithmetic4",
  "level": "2",
  "url": "sec-matrixarithmetic.html#ww-matrixarithmetic4",
  "type": "Exercise",
  "number": "2.1.4",
  "title": "Adding Matrices, List of Lists Notation.",
  "body": "Adding Matrices, List of Lists Notation   Many programming languages, including Python and Sage, use a list of lists to enter matrices. We use that notation in this problem instead of the usual array answer box notation to avoid giving away information about the size of the matrix or whether such a matrix exists at all.      Let   If possible, compute the following. If an answer does not exist, enter DNE .                     "
},
{
  "id": "ww-matrixarithmetic5",
  "level": "2",
  "url": "sec-matrixarithmetic.html#ww-matrixarithmetic5",
  "type": "Exercise",
  "number": "2.1.5",
  "title": "True\/False Matrix Properties.",
  "body": "True\/False Matrix Properties     Enter T or F depending on whether the statement is true or false. (You must enter T or F -- True and False will not work.)    An matrix has columns and rows.    For any matrix , .    For any matrix , there exists a matrix so that .         "
},
{
  "id": "exer-matrixarithmetic-2-2",
  "level": "2",
  "url": "sec-matrixarithmetic.html#exer-matrixarithmetic-2-2",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": "           "
},
{
  "id": "exer-matrixarithmetic-2-3",
  "level": "2",
  "url": "sec-matrixarithmetic.html#exer-matrixarithmetic-2-3",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": "           "
},
{
  "id": "exer-matrixarithmetic-2-4",
  "level": "2",
  "url": "sec-matrixarithmetic.html#exer-matrixarithmetic-2-4",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": "           "
},
{
  "id": "exer-matrixarithmetic-2-5",
  "level": "2",
  "url": "sec-matrixarithmetic.html#exer-matrixarithmetic-2-5",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": "           "
},
{
  "id": "exer-matrixarithmetic-2-6",
  "level": "2",
  "url": "sec-matrixarithmetic.html#exer-matrixarithmetic-2-6",
  "type": "Exercise",
  "number": "5",
  "title": "",
  "body": "           "
},
{
  "id": "exer-matrixarithmetic-2-7",
  "level": "2",
  "url": "sec-matrixarithmetic.html#exer-matrixarithmetic-2-7",
  "type": "Exercise",
  "number": "6",
  "title": "",
  "body": "           "
},
{
  "id": "exer-matrixarithmetic-3-2",
  "level": "2",
  "url": "sec-matrixarithmetic.html#exer-matrixarithmetic-3-2",
  "type": "Exercise",
  "number": "7",
  "title": "",
  "body": "           "
},
{
  "id": "exer-matrixarithmetic-3-3",
  "level": "2",
  "url": "sec-matrixarithmetic.html#exer-matrixarithmetic-3-3",
  "type": "Exercise",
  "number": "8",
  "title": "",
  "body": "           "
},
{
  "id": "exer-matrixarithmetic-3-4",
  "level": "2",
  "url": "sec-matrixarithmetic.html#exer-matrixarithmetic-3-4",
  "type": "Exercise",
  "number": "9",
  "title": "",
  "body": "           "
},
{
  "id": "exer-matrixarithmetic-3-5",
  "level": "2",
  "url": "sec-matrixarithmetic.html#exer-matrixarithmetic-3-5",
  "type": "Exercise",
  "number": "10",
  "title": "",
  "body": "           "
},
{
  "id": "exer-matrixarithmetic-4-2",
  "level": "2",
  "url": "sec-matrixarithmetic.html#exer-matrixarithmetic-4-2",
  "type": "Exercise",
  "number": "11",
  "title": "",
  "body": "           "
},
{
  "id": "exer-matrixarithmetic-4-3",
  "level": "2",
  "url": "sec-matrixarithmetic.html#exer-matrixarithmetic-4-3",
  "type": "Exercise",
  "number": "12",
  "title": "",
  "body": "           "
},
{
  "id": "exer-matrixarithmetic-4-4",
  "level": "2",
  "url": "sec-matrixarithmetic.html#exer-matrixarithmetic-4-4",
  "type": "Exercise",
  "number": "13",
  "title": "",
  "body": "           "
},
{
  "id": "exer-matrixarithmetic-4-5",
  "level": "2",
  "url": "sec-matrixarithmetic.html#exer-matrixarithmetic-4-5",
  "type": "Exercise",
  "number": "14",
  "title": "",
  "body": "           "
},
{
  "id": "sec-matrixmult",
  "level": "1",
  "url": "sec-matrixmult.html",
  "type": "Section",
  "number": "2.2",
  "title": "Matrix Multiplication",
  "body": " Matrix Multiplication   Last section, we learned how to add and subtract matrices of the same size and how to multiply a matrix of any size by a number. In this section, we learn how to multiply two matrices together when their sizes allow for multiplication.   Prepare  Matrices of the same size are added by adding corresponding entries together, but we do not multiply matrices by multiplying corresponding entries together. There are very good reasons for defining matrix multiplication differently. Unfortunately, most of those reasons do not become understandable until much later, but matrix multiplication can be viewed as performing a function on objects in space. Rotations, dilations, reflections, and many other operations can be accomplished by matrix multiplication, which is very useful for computer graphics, physics, aerospace navigation, machine learning, and more.  To start, two matrices can be multiplied together only if the number of columns in the first matrix equals the number of rows in the second matrix . This means that a matrix can be multiplied by a matrix, or a matrix, or a or etc. matrix, but a matrix cannot be multiplied by another matrix.  That's already pretty surprising, so let's check our understanding.    Define matrices , , and by      Can matrix be multiplied by matrix ? In other words, is defined?      Yes    No, because the first matrix, , has columns, but the second matrix, , does not have rows.      No    Correct! The first matrix, , has columns, but the second matrix, , has rows.        Can matrix be multiplied by matrix ? In other words, is defined?      Yes    Correct! The first matrix, , has columns, and the second matrix, , has rows.      No    The first matrix, , has columns, and the second matrix, , has rows. These are equal.        Can matrix be multiplied by matrix ? In other words, is defined?      Yes    No, because the first matrix, , has columns, but the second matrix, , does not have rows.      No    Correct! The first matrix, , has columns, but the second matrix, , has rows.        Consider the two statements below.    is defined.     is defined.   Which of the following choices is correct?      Both statements are true.     is the same as . The first matrix, , has columns, but the second matrix, , does not have rows.      1. is true but 2. is false     is the same as . The first matrix, , has columns, but the second matrix, , does not have rows.      1. is false and 2. is true    Correct! Any square matrix can be multiplied by itself, since the number of columns equals the number of rows.      Both statements are false.    Any square matrix can be multiplied by itself, since the number of columns equals the number of rows.       To begin to understand why the number of columns of the first matrix must equal the number of rows of the second matrix, we demonstrate how to multiply a matrix by a matrix.   Multiplying on the right by a column matrix   Suppose we have the matrices and below: . Their product is defined by multiplying the first column of by the first number in , and multiplying the second column of by the second number in , and adding the results.   If we look at the first entry, we see it came from , and we note that the first row of is . Looking at the second entry of we have , and the second row of is . The third entry of is , and the third row of is .  This means that we can view matrix multiplication entry-wise as multiplying the numbers in a row of the first matrix by the numbers in a column of the second matrix and adding them up.    Note that in the matrix has two columns and so we needed to contain two numbers in its column, which means has two rows. On the other hand, since has three rows, the result of multiplying a column of by a number still has three rows, and adding matrices keeps the size the same, which is why the product has three rows.  This generalizes to when the second matrix of the product has more columns than . The product is defined when is an matrix and is an matrix, and the matrix will have size . Let's see this in action in an example.  Matrix Multiplication, More than One Column   Let's calculate .   Since the first matrix has columns and the second matrix has rows, this multiplication can be performed. The product will be a matrix because the first matrix has rows and the second matrix has columns.  We form a matrix , and we will now calculate the value of each of the entries.  The entry is in the first row and first column, so we use the first row of the first matrix and the first column of the second matrix , multiply corresponding number entries and add them up. Thus . We now know that the product looks like .  Moving to the next entry to the right , we still use the first row of the first matrix , now with the second column of the second matrix , giving us . Finishing the first row with , we use the first row of the first matrix and the third column of the second matrix and obtain . So far we have .  To compute the second row, we use the second row of the first matrix with the first, then second, and finally third columns of the second matrix. We calculate . Putting it all together, we have .    Let's check to see that we understand how to compute the entries of a product of two matrices.   Entries in Matrix Multiplication   Match each entry of a matrix product to which things need to be multiplied together and added up, if applicable.       first row of  second row of  third row of  first column of  second column of  third column of  first entry of  first entry of      Another Matrix Multiplication   Calculate .    Since the first matrix has columns and the second matrix has rows, this multiplication can be performed. The product will be a matrix because the first matrix has rows and the second matrix has columns.  We form a matrix , and we will now calculate the value of each of the entries.  The entry is in the first row and first column, so we use the first row of the first matrix and the first column of the second matrix , multiply corresponding number entries and add them up. Thus . We now know that the product looks like .  Moving to the next entry to the right , we still use the first row of the first matrix , now with the second column of the second matrix , giving us . So far we have .  To compute , we use the second row of the first matrix with the first column of the second matrix , and calculate . To compute , we use the second row of the first matrix with the second column of the second matrix , and calculate .  Putting it all together, we have .     Matrix multiplication is a lot more complicated than addition or multiplication by a number, but it turns out to be very useful and connected to solving linear systems.    Sizes of Matrix Products   Define matrices , , and by Matrix the matrix products to their correct sizes.        Product is not defined       Addition versus Multiplication   Match the correct statements and methods.     Add corresponding entries              Matrices can't be added because the number of rows of the first does not equal the number of columns of the second.  Matrices can't be multiplied because they aren't the same size.  Multiply corresponding entries      Reflection   Reflect on your confidence level.    How confident do you feel with the material you just read about?      Not at all confident or didn't do the reading.      Not very confident.      Somewhat confident.      Mostly confident.      Confident so far and ready to engage more deeply.         Ask a question about the material. What additional information do you think someone would need to become more confident in their understanding?         Participate     Be able to perform matrix multiplication when it is possible.    Explore ways in which matrix multiplication acts like multiplication of numbers, and ways in which matrix multiplication is different.      Is Matrix Multiplication Commutative in General?   Consider the matrices .     Is defined, and if so, what size is it?           Is defined, and if so, what size is it?           We are used to multiplication of numbers being commutative , that is, that the order in which we multiply numbers together does not matter, for all numbers and . What do your answers above mean for the commutativity of matrix multiplication in general?    In general, matrix multiplication is not commutative, that is, it is not usually true that .     Diagonal Matrices and the Identity Matrix   Consider the matrices .     Calculate and .     ,       Examine the rows of and the rows of . What do you notice about the diagonal entries of and the effect of multiplying by on the left?    The corresponding row is multiplied by the number on the diagonal.      Examine the columns of and the columns of . What do you notice about the diagonal entries of and the effect of multiplying by on the right?    The corresponding column is multiplied by the number on the diagonal.      The number is called the multiplicative identity because multiplying any number by equals the same number you started with, . Given an matrix , what is the identity matrix , that is, the matrix such that multiplying on both the left and the right leaves unchanged, ?    A diagonal matrix of size with every diagonal entry equal to .       Properties of Zero and Cancellation   Define      With numbers, we know that if , then either or .  Compute . With matrices, if , is it necessarily true that either or ?     while neither nor equalled the zero matrix.      When we are dealing with numbers, we know that if and , then .  Compute both and . With matrices, if and , is it necessarily true that ?     Is Matrix Multiplication Associative? Distributive?   Consider the matrices . Here is a sage cell to help you perform (or check) the required computations.      Compute and then , and record your answers.      Compute and then and record your answers.      What does this suggest about the associativity of matrix multiplication?    Matrix multiplication is associative (when matrices are of the appropriate sizes).      Compute and then and record your answers.      Compute , and then (recall you computed in Part ).      What does this suggest about the distributive property of matrix multiplication?    Matrix multiplication is distributive (when matrices are of the appropriate sizes).          Summary     Matrix multiplication can be performed only when the number of columns in the first matrix equals the number of rows in the second matrix.    If matrix multiplication can be performed, the entries come from multiplying rows of the first matrix by columns of the second matrix. We multiply the corresponding numbers and add them up to get one entry of the product.    Some properties of multiplication of numbers also hold for multiplication of matrices, and some don't. Perhaps the most surprising or important of these properties is that matrix multiplication is not commutative in general.      Practice  Properties of Matrix Multiplication     Enter T or F depending on whether the statement is true or false. (You must enter T or F -- True and False will not work.)    If AB has size , then the number of rows of A is p.    If A has size and B has size , then the 3rd row, 2nd column entry of AB is obtained by multiplying the 3rd column of A by the 2nd row of B.    If AB is defined, then BA is also defined.          Matrix Multiplication Commutativity    Give an example of two matrices and such that .            More Commutativity    Give an example of two matrices and , neither of which is the zero matrix or the identity matrix, such that .            Multiplying Matrices   Many programming languages, including Python and Sage, use a list of lists to enter matrices. We use that notation in this problem instead of the usual array answer box notation to avoid giving away information about the size of the matrix or whether such a matrix exists at all.      Let   If possible, compute the following. If an answer does not exist, enter DNE .                      More Multiplying Matrices    Determine the value(s) of such that   =  Note: If there is more than one value separate them by commas.              Additional Practice    We explore whether or not .     Let and let . Compute .           Find by using your answer from the first part.           Compute .           Are the results from the second and third parts the same?    No.      Carefully expand the expression and show why this is not equal to .     .       In the following exercises, matrices and are defined. Give the dimensions of and . If the dimensions properly match, give the dimensions of and . Find the products and , if possible.                                            is not possible.               is not possible.            is not possible.                                                                              is not possible.               is not possible.                                                                   In the following exercises, a diagonal matrix and a matrix are given. Find the products and , where possible.                                                                                                        \\        Let . Find and .     ;       Let . Find and .     ;       Let . Find and .     ;       Let . Find and .     ;       Let . Find and .     ;      "
},
{
  "id": "canmatricesbemultiplied",
  "level": "2",
  "url": "sec-matrixmult.html#canmatricesbemultiplied",
  "type": "Activity",
  "number": "2.2.1",
  "title": "",
  "body": "  Define matrices , , and by      Can matrix be multiplied by matrix ? In other words, is defined?      Yes    No, because the first matrix, , has columns, but the second matrix, , does not have rows.      No    Correct! The first matrix, , has columns, but the second matrix, , has rows.        Can matrix be multiplied by matrix ? In other words, is defined?      Yes    Correct! The first matrix, , has columns, and the second matrix, , has rows.      No    The first matrix, , has columns, and the second matrix, , has rows. These are equal.        Can matrix be multiplied by matrix ? In other words, is defined?      Yes    No, because the first matrix, , has columns, but the second matrix, , does not have rows.      No    Correct! The first matrix, , has columns, but the second matrix, , has rows.        Consider the two statements below.    is defined.     is defined.   Which of the following choices is correct?      Both statements are true.     is the same as . The first matrix, , has columns, but the second matrix, , does not have rows.      1. is true but 2. is false     is the same as . The first matrix, , has columns, but the second matrix, , does not have rows.      1. is false and 2. is true    Correct! Any square matrix can be multiplied by itself, since the number of columns equals the number of rows.      Both statements are false.    Any square matrix can be multiplied by itself, since the number of columns equals the number of rows.      "
},
{
  "id": "ex_matrixbycolumn",
  "level": "2",
  "url": "sec-matrixmult.html#ex_matrixbycolumn",
  "type": "Example",
  "number": "2.2.2",
  "title": "Multiplying on the right by a column matrix.",
  "body": "Multiplying on the right by a column matrix   Suppose we have the matrices and below: . Their product is defined by multiplying the first column of by the first number in , and multiplying the second column of by the second number in , and adding the results.   If we look at the first entry, we see it came from , and we note that the first row of is . Looking at the second entry of we have , and the second row of is . The third entry of is , and the third row of is .  This means that we can view matrix multiplication entry-wise as multiplying the numbers in a row of the first matrix by the numbers in a column of the second matrix and adding them up.   "
},
{
  "id": "ex_matrix_multiply_1",
  "level": "2",
  "url": "sec-matrixmult.html#ex_matrix_multiply_1",
  "type": "Example",
  "number": "2.2.3",
  "title": "Matrix Multiplication, More than One Column.",
  "body": "Matrix Multiplication, More than One Column   Let's calculate .   Since the first matrix has columns and the second matrix has rows, this multiplication can be performed. The product will be a matrix because the first matrix has rows and the second matrix has columns.  We form a matrix , and we will now calculate the value of each of the entries.  The entry is in the first row and first column, so we use the first row of the first matrix and the first column of the second matrix , multiply corresponding number entries and add them up. Thus . We now know that the product looks like .  Moving to the next entry to the right , we still use the first row of the first matrix , now with the second column of the second matrix , giving us . Finishing the first row with , we use the first row of the first matrix and the third column of the second matrix and obtain . So far we have .  To compute the second row, we use the second row of the first matrix with the first, then second, and finally third columns of the second matrix. We calculate . Putting it all together, we have .   "
},
{
  "id": "matching-matrixmultiplication",
  "level": "2",
  "url": "sec-matrixmult.html#matching-matrixmultiplication",
  "type": "Activity",
  "number": "2.2.4",
  "title": "Entries in Matrix Multiplication.",
  "body": "Entries in Matrix Multiplication   Match each entry of a matrix product to which things need to be multiplied together and added up, if applicable.       first row of  second row of  third row of  first column of  second column of  third column of  first entry of  first entry of   "
},
{
  "id": "ex_matrix_multiply_2",
  "level": "2",
  "url": "sec-matrixmult.html#ex_matrix_multiply_2",
  "type": "Example",
  "number": "2.2.5",
  "title": "Another Matrix Multiplication.",
  "body": "Another Matrix Multiplication   Calculate .    Since the first matrix has columns and the second matrix has rows, this multiplication can be performed. The product will be a matrix because the first matrix has rows and the second matrix has columns.  We form a matrix , and we will now calculate the value of each of the entries.  The entry is in the first row and first column, so we use the first row of the first matrix and the first column of the second matrix , multiply corresponding number entries and add them up. Thus . We now know that the product looks like .  Moving to the next entry to the right , we still use the first row of the first matrix , now with the second column of the second matrix , giving us . So far we have .  To compute , we use the second row of the first matrix with the first column of the second matrix , and calculate . To compute , we use the second row of the first matrix with the second column of the second matrix , and calculate .  Putting it all together, we have .   "
},
{
  "id": "rq-matrixmult-sizes",
  "level": "2",
  "url": "sec-matrixmult.html#rq-matrixmult-sizes",
  "type": "Reading Question",
  "number": "1",
  "title": "Sizes of Matrix Products.",
  "body": "Sizes of Matrix Products   Define matrices , , and by Matrix the matrix products to their correct sizes.        Product is not defined      "
},
{
  "id": "rq-matrixmult-multandadd",
  "level": "2",
  "url": "sec-matrixmult.html#rq-matrixmult-multandadd",
  "type": "Reading Question",
  "number": "2",
  "title": "Addition versus Multiplication.",
  "body": "Addition versus Multiplication   Match the correct statements and methods.     Add corresponding entries              Matrices can't be added because the number of rows of the first does not equal the number of columns of the second.  Matrices can't be multiplied because they aren't the same size.  Multiply corresponding entries     "
},
{
  "id": "rq-matrixmult-questions-poll",
  "level": "2",
  "url": "sec-matrixmult.html#rq-matrixmult-questions-poll",
  "type": "Reading Question",
  "number": "3",
  "title": "Reflection.",
  "body": "Reflection   Reflect on your confidence level.    How confident do you feel with the material you just read about?      Not at all confident or didn't do the reading.      Not very confident.      Somewhat confident.      Mostly confident.      Confident so far and ready to engage more deeply.         Ask a question about the material. What additional information do you think someone would need to become more confident in their understanding?     "
},
{
  "id": "ws-matrixmultiplication-2",
  "level": "2",
  "url": "sec-matrixmult.html#ws-matrixmultiplication-2",
  "type": "Objectives",
  "number": "",
  "title": "",
  "body": "   Be able to perform matrix multiplication when it is possible.    Explore ways in which matrix multiplication acts like multiplication of numbers, and ways in which matrix multiplication is different.    "
},
{
  "id": "ws-matrixmultiplication-3-1",
  "level": "2",
  "url": "sec-matrixmult.html#ws-matrixmultiplication-3-1",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "Is Matrix Multiplication Commutative in General?",
  "body": "Is Matrix Multiplication Commutative in General?   Consider the matrices .     Is defined, and if so, what size is it?           Is defined, and if so, what size is it?           We are used to multiplication of numbers being commutative , that is, that the order in which we multiply numbers together does not matter, for all numbers and . What do your answers above mean for the commutativity of matrix multiplication in general?    In general, matrix multiplication is not commutative, that is, it is not usually true that .    "
},
{
  "id": "identityexercise",
  "level": "2",
  "url": "sec-matrixmult.html#identityexercise",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "Diagonal Matrices and the Identity Matrix.",
  "body": "Diagonal Matrices and the Identity Matrix   Consider the matrices .     Calculate and .     ,       Examine the rows of and the rows of . What do you notice about the diagonal entries of and the effect of multiplying by on the left?    The corresponding row is multiplied by the number on the diagonal.      Examine the columns of and the columns of . What do you notice about the diagonal entries of and the effect of multiplying by on the right?    The corresponding column is multiplied by the number on the diagonal.      The number is called the multiplicative identity because multiplying any number by equals the same number you started with, . Given an matrix , what is the identity matrix , that is, the matrix such that multiplying on both the left and the right leaves unchanged, ?    A diagonal matrix of size with every diagonal entry equal to .    "
},
{
  "id": "exercisenoninvertibleA",
  "level": "2",
  "url": "sec-matrixmult.html#exercisenoninvertibleA",
  "type": "Worksheet Exercise",
  "number": "3",
  "title": "Properties of Zero and Cancellation.",
  "body": "Properties of Zero and Cancellation   Define      With numbers, we know that if , then either or .  Compute . With matrices, if , is it necessarily true that either or ?     while neither nor equalled the zero matrix.      When we are dealing with numbers, we know that if and , then .  Compute both and . With matrices, if and , is it necessarily true that ?    "
},
{
  "id": "ws-matrixmultiplication-4-2",
  "level": "2",
  "url": "sec-matrixmult.html#ws-matrixmultiplication-4-2",
  "type": "Worksheet Exercise",
  "number": "4",
  "title": "Is Matrix Multiplication Associative? Distributive?",
  "body": "Is Matrix Multiplication Associative? Distributive?   Consider the matrices . Here is a sage cell to help you perform (or check) the required computations.      Compute and then , and record your answers.      Compute and then and record your answers.      What does this suggest about the associativity of matrix multiplication?    Matrix multiplication is associative (when matrices are of the appropriate sizes).      Compute and then and record your answers.      Compute , and then (recall you computed in Part ).      What does this suggest about the distributive property of matrix multiplication?    Matrix multiplication is distributive (when matrices are of the appropriate sizes).    "
},
{
  "id": "ww-matrixmult1",
  "level": "2",
  "url": "sec-matrixmult.html#ww-matrixmult1",
  "type": "Exercise",
  "number": "2.2.1",
  "title": "Properties of Matrix Multiplication.",
  "body": "Properties of Matrix Multiplication     Enter T or F depending on whether the statement is true or false. (You must enter T or F -- True and False will not work.)    If AB has size , then the number of rows of A is p.    If A has size and B has size , then the 3rd row, 2nd column entry of AB is obtained by multiplying the 3rd column of A by the 2nd row of B.    If AB is defined, then BA is also defined.         "
},
{
  "id": "ww-matrixmult2",
  "level": "2",
  "url": "sec-matrixmult.html#ww-matrixmult2",
  "type": "Exercise",
  "number": "2.2.2",
  "title": "Matrix Multiplication Commutativity.",
  "body": "Matrix Multiplication Commutativity    Give an example of two matrices and such that .           "
},
{
  "id": "wwmatrixmult3",
  "level": "2",
  "url": "sec-matrixmult.html#wwmatrixmult3",
  "type": "Exercise",
  "number": "2.2.3",
  "title": "More Commutativity.",
  "body": "More Commutativity    Give an example of two matrices and , neither of which is the zero matrix or the identity matrix, such that .           "
},
{
  "id": "ww-matrixmult4",
  "level": "2",
  "url": "sec-matrixmult.html#ww-matrixmult4",
  "type": "Exercise",
  "number": "2.2.4",
  "title": "Multiplying Matrices.",
  "body": "Multiplying Matrices   Many programming languages, including Python and Sage, use a list of lists to enter matrices. We use that notation in this problem instead of the usual array answer box notation to avoid giving away information about the size of the matrix or whether such a matrix exists at all.      Let   If possible, compute the following. If an answer does not exist, enter DNE .                     "
},
{
  "id": "ww-matrixmult5",
  "level": "2",
  "url": "sec-matrixmult.html#ww-matrixmult5",
  "type": "Exercise",
  "number": "2.2.5",
  "title": "More Multiplying Matrices.",
  "body": "More Multiplying Matrices    Determine the value(s) of such that   =  Note: If there is more than one value separate them by commas.            "
},
{
  "id": "exer--2",
  "level": "2",
  "url": "sec-matrixmult.html#exer--2",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": "  We explore whether or not .     Let and let . Compute .           Find by using your answer from the first part.           Compute .           Are the results from the second and third parts the same?    No.      Carefully expand the expression and show why this is not equal to .     .    "
},
{
  "id": "exer--3-2",
  "level": "2",
  "url": "sec-matrixmult.html#exer--3-2",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": "              "
},
{
  "id": "exer--3-3",
  "level": "2",
  "url": "sec-matrixmult.html#exer--3-3",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": "              "
},
{
  "id": "exer--3-4",
  "level": "2",
  "url": "sec-matrixmult.html#exer--3-4",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": "           is not possible.   "
},
{
  "id": "exer--3-5",
  "level": "2",
  "url": "sec-matrixmult.html#exer--3-5",
  "type": "Exercise",
  "number": "5",
  "title": "",
  "body": "           is not possible.   "
},
{
  "id": "exer--3-6",
  "level": "2",
  "url": "sec-matrixmult.html#exer--3-6",
  "type": "Exercise",
  "number": "6",
  "title": "",
  "body": "        is not possible.      "
},
{
  "id": "exer--3-7",
  "level": "2",
  "url": "sec-matrixmult.html#exer--3-7",
  "type": "Exercise",
  "number": "7",
  "title": "",
  "body": "              "
},
{
  "id": "exer--3-8",
  "level": "2",
  "url": "sec-matrixmult.html#exer--3-8",
  "type": "Exercise",
  "number": "8",
  "title": "",
  "body": "              "
},
{
  "id": "exer--3-9",
  "level": "2",
  "url": "sec-matrixmult.html#exer--3-9",
  "type": "Exercise",
  "number": "9",
  "title": "",
  "body": "              "
},
{
  "id": "exer--3-10",
  "level": "2",
  "url": "sec-matrixmult.html#exer--3-10",
  "type": "Exercise",
  "number": "10",
  "title": "",
  "body": "              "
},
{
  "id": "exer--3-11",
  "level": "2",
  "url": "sec-matrixmult.html#exer--3-11",
  "type": "Exercise",
  "number": "11",
  "title": "",
  "body": "           is not possible.   "
},
{
  "id": "exer--3-12",
  "level": "2",
  "url": "sec-matrixmult.html#exer--3-12",
  "type": "Exercise",
  "number": "12",
  "title": "",
  "body": "           is not possible.   "
},
{
  "id": "exer--3-13",
  "level": "2",
  "url": "sec-matrixmult.html#exer--3-13",
  "type": "Exercise",
  "number": "13",
  "title": "",
  "body": "              "
},
{
  "id": "exer--3-14",
  "level": "2",
  "url": "sec-matrixmult.html#exer--3-14",
  "type": "Exercise",
  "number": "14",
  "title": "",
  "body": "              "
},
{
  "id": "exer--3-15",
  "level": "2",
  "url": "sec-matrixmult.html#exer--3-15",
  "type": "Exercise",
  "number": "15",
  "title": "",
  "body": "              "
},
{
  "id": "exer--3-16",
  "level": "2",
  "url": "sec-matrixmult.html#exer--3-16",
  "type": "Exercise",
  "number": "16",
  "title": "",
  "body": "              "
},
{
  "id": "exer--4-2",
  "level": "2",
  "url": "sec-matrixmult.html#exer--4-2",
  "type": "Exercise",
  "number": "17",
  "title": "",
  "body": "                 "
},
{
  "id": "exer--4-3",
  "level": "2",
  "url": "sec-matrixmult.html#exer--4-3",
  "type": "Exercise",
  "number": "18",
  "title": "",
  "body": "                 "
},
{
  "id": "exer--4-4",
  "level": "2",
  "url": "sec-matrixmult.html#exer--4-4",
  "type": "Exercise",
  "number": "19",
  "title": "",
  "body": "                 "
},
{
  "id": "exer--4-5",
  "level": "2",
  "url": "sec-matrixmult.html#exer--4-5",
  "type": "Exercise",
  "number": "20",
  "title": "",
  "body": "                 "
},
{
  "id": "exer--4-6",
  "level": "2",
  "url": "sec-matrixmult.html#exer--4-6",
  "type": "Exercise",
  "number": "21",
  "title": "",
  "body": "                 "
},
{
  "id": "exer--4-7",
  "level": "2",
  "url": "sec-matrixmult.html#exer--4-7",
  "type": "Exercise",
  "number": "22",
  "title": "",
  "body": "           \\    "
},
{
  "id": "exer--5",
  "level": "2",
  "url": "sec-matrixmult.html#exer--5",
  "type": "Exercise",
  "number": "23",
  "title": "",
  "body": "  Let . Find and .     ;    "
},
{
  "id": "exer--6",
  "level": "2",
  "url": "sec-matrixmult.html#exer--6",
  "type": "Exercise",
  "number": "24",
  "title": "",
  "body": "  Let . Find and .     ;    "
},
{
  "id": "exer--7",
  "level": "2",
  "url": "sec-matrixmult.html#exer--7",
  "type": "Exercise",
  "number": "25",
  "title": "",
  "body": "  Let . Find and .     ;    "
},
{
  "id": "exer--8",
  "level": "2",
  "url": "sec-matrixmult.html#exer--8",
  "type": "Exercise",
  "number": "26",
  "title": "",
  "body": "  Let . Find and .     ;    "
},
{
  "id": "exer--9",
  "level": "2",
  "url": "sec-matrixmult.html#exer--9",
  "type": "Exercise",
  "number": "27",
  "title": "",
  "body": "  Let . Find and .     ;    "
},
{
  "id": "sec-matrixinverse2vars",
  "level": "1",
  "url": "sec-matrixinverse2vars.html",
  "type": "Section",
  "number": "2.3",
  "title": "Matrix Inverses and Two Variable Systems",
  "body": " Matrix Inverses and Two Variable Systems   We have been learning how to perform arithmetic with matrices, including matrix multiplication. Now we learn how matrix multiplication connects to linear systems and how to solve two variable linear systems using the inverse of a matrix.    Prepare  Let's start by seeing how a two-variable linear system can viewed in terms of matrix multiplication.  Consider the linear system . Previously, we would have solved this system by forming an augmented matrix with the coefficients and constants, row reduce, and interpret the solutions from the reduced row echelon form.  However, now that we know about matrix multiplication, let's try something different. Form a matrix from the coefficients, , a column matrix from the variables, , and a column matrix from the constants, .  Notice what we get when we multiply : . Recall that two matrices are equal exactly when they are the same size and their corresponding entries are equal. So the matrix equation is , and setting the first entries equal to each other and the second entries equal to each other gives . But this is precisely the linear system we started with! This result is not an coincidence: we can always rewrite linear systems using matrix multiplication. Let's practice.   Viewing Linear Systems as Matrix Multiplication   Consider the linear systems on the left, and write them in terms of matrix multiplication as for the correct choices of , , and .               Writing linear systems in terms of matrix multiplication raises a new question: how can we solve a linear system that is written in the form ?  We take our inspiration from the usual algebra of numbers. If and are numbers and , then we solve the equation by dividing both sides by and get . We do this precisely because , so writing out more details would give us . The key feature is that is the thing we multiply by to get ; to solve a linear system , we'll want to do something analogous for matrices. We sometimes call the multiplicative inverse of , and we know that if written as an exponent. We will use this same language and notation for matrices as well.  In , we learned about the identity matrix that acts like the number for square matrices. For example, the identity matrix of size is , and then if is any matrix, then . Similarly for the identity matrix of size , which is and any matrix.  If we had a matrix such that , then by analogy to our algebra example above it seems like we might be able to solve the linear system for by multiplying both sides of the equation by . That is, . It seems that we might be able to solve linear systems using matrix multiplication and inverses instead of row reducing.  Of course, there are some differences between matrix multiplication and number multiplication, as we explored throughout Matrix Multiplication Participate , and one consequence is that we aren't guaranteed that a matrix acting like exists for every square matrix . For the matrices that arise from two-variable linear systems, it is straightforward to tell when exists.  Invertible Matrices and the Inverse of A matrix inverse  inverse definition   Let be an matrix. If there exists an matrix such that , then    is invertible .     is the multiplicative inverse , or just inverse , of , denoted by .    Furthermore, if is a matrix , the matrix exists precisely when and then .   Note that there are many matrices where there is no matrix that can be multiplied by to get the identity matrix; in this case, we say that is not invertible.     We can't divide by , so if , we don't have an inverse.  A Matrix Without An Inverse   Recall , where . Here, and so doesn't have an inverse.  This is why multiplying by in that exercise didn't act like multiplying by a number does; every nonzero number has an inverse .     Identifying Key Parts for an Inverse   The formula for the inverse of any matrix depends on viewing the matrix in the form . Let .   >  Identify the values of and for the matrix .       and     For a matrix described by , the entry is the entry in the top left and is the entry in the bottom right.       and     Correct!       and     For a matrix described by , the entry is the entry in the top left and is the entry in the bottom right.       and     For a matrix described by , the entry is the entry in the top left and is the entry in the bottom right.      >  Identify the values of and for the matrix .       and     For a matrix described by , the entry is the entry in the top right and is the entry in the bottom left.       and     For a matrix described by , the entry is the entry in the top right and is the entry in the bottom left.       and     Correct!       and     Don't multiply them by like in the inverse, just identify what and are to start with.      >  What is the value of for the matrix ?           Correct! , , , and , so             , , , and , so             , , , and , so             , , , and , so       >  Which matrix below is for the matrix ?           To calculate , you swap entries and and multiply entries and by negative 1.           To calculate , you swap entries and and multiply entries and by negative 1.           Correct!           To calculate , you swap entries and and multiply entries and by negative 1.      >  Which of the matrices below is ?           Correct!           Don't forget to multiply by .           Correct!           Multiply by , not .       Let's see another example.  Using the formula for inverses   Calculate the inverse, if it exists, of . If exists, use it to solve the linear system     Since , we know exists and we calculate   We can leave our answer in this form, or we could multiply it out and get .  To solve the system , we write . We check that and see that , is indeed a solution to the given linear system.     Invertible or Not?   Match the correct matrices and properties.       Invertible      A matrix such that when  Not Invertible     Can't Tell (Yet)     What Are Inverses, Anyway?   In your own words, explain what you understand about the relationship between the identity matrix, the inverse of a square matrix if the inverse exists, and the solution to a linear system of equations.      Reflection   Reflect on your confidence level.    How confident do you feel with the material you just read about?      Not at all confident or didn't do the reading.      Not very confident.      Somewhat confident.      Mostly confident.      Confident so far and ready to engage more deeply.         Ask a question about the material. What additional information do you think someone would need to become more confident in their understanding?        Participate     Calculate the inverse of a matrix or say why an inverse doesn't exist.    Use the inverse and matrix multiplication to solve a 2-variable system of linear equations.        Let .     Calculate .           Calculate both and using matrix multiplication. What matrix do you get?    The identity matrix.      What's the size of the matrix product ? Is the matrix product defined? Why or why not?    The size of is ; you can't multiply a matrix by a .      Use to solve the system            Use to solve the system               Let and .     Calculate .           Say why we can't calculate .           Use matrix multiplication and the matrix defined in Exercise to calculate both and .     ;       Use matrix multiplication and the matrix defined in Exercise to calculate both and . What do you notice?     ;        Recall that the inverse of (if it exists) is the matrix such that .     Without doing any calculations, what is the inverse of ? Explain.     times equals , so is its own inverse.      Without doing any calculations, explain why the inverse of can't exist.    The zero matrix multiplied by anything equals the zero matrix, so there is nothing that could be multiplied by to equal .        Summary     Linear systems can be rewritten in terms of matrix multiplication, .    Some square matrices have multiplicative inverses , denoted , and there is a formula for calculating when is .    We can solve linear systems when is invertible by calculating .      Practice  Is a Matrix Invertible?    Given the matrix  (a) does the inverse of the matrix exist?  Choose   Yes   No   (b) if your answer is yes, write the inverse here.             Multiply to Obtain Identity    Find a matrix such that    .        Condition for Invertibility    The matrix is invertible if and only if  .             Solve Two Systems with the Inverse    Consider the following two systems.  (a)  (b)  (i) Find the inverse of the (common) coefficient matrix of the two systems.              (ii) Find the solutions to the two systems by using the inverse, i.e. by evaluating where represents the right hand side (i.e. for system (a) and for system (b)).  Solution to system (a):  , =  Solution to system (b):  , =                                                Solve a System with the Inverse    Solve the system of equations by converting to a matrix equation and using the inverse of the coefficient matrix.                       Additional Practice    In the following exercises, a matrix is given. Calculate , if it exists.                                                           does not exist.                                            In the following exercises, a coefficient matrix and column matrix are given. Solve the equation .      ,             ,             ,             ,             "
},
{
  "id": "linsys-as-matrixmult",
  "level": "2",
  "url": "sec-matrixinverse2vars.html#linsys-as-matrixmult",
  "type": "Activity",
  "number": "2.3.1",
  "title": "Viewing Linear Systems as Matrix Multiplication.",
  "body": "Viewing Linear Systems as Matrix Multiplication   Consider the linear systems on the left, and write them in terms of matrix multiplication as for the correct choices of , , and .              "
},
{
  "id": "def_inverse",
  "level": "2",
  "url": "sec-matrixinverse2vars.html#def_inverse",
  "type": "Definition",
  "number": "2.3.2",
  "title": "Invertible Matrices and the Inverse of A.",
  "body": "Invertible Matrices and the Inverse of A matrix inverse  inverse definition   Let be an matrix. If there exists an matrix such that , then    is invertible .     is the multiplicative inverse , or just inverse , of , denoted by .    Furthermore, if is a matrix , the matrix exists precisely when and then .   Note that there are many matrices where there is no matrix that can be multiplied by to get the identity matrix; in this case, we say that is not invertible.    "
},
{
  "id": "subsec-matrixinverse2vars-bc-14",
  "level": "2",
  "url": "sec-matrixinverse2vars.html#subsec-matrixinverse2vars-bc-14",
  "type": "Example",
  "number": "2.3.3",
  "title": "A Matrix Without An Inverse.",
  "body": "A Matrix Without An Inverse   Recall , where . Here, and so doesn't have an inverse.  This is why multiplying by in that exercise didn't act like multiplying by a number does; every nonzero number has an inverse .   "
},
{
  "id": "partsof2by2matrix",
  "level": "2",
  "url": "sec-matrixinverse2vars.html#partsof2by2matrix",
  "type": "Activity",
  "number": "2.3.4",
  "title": "Identifying Key Parts for an Inverse.",
  "body": "Identifying Key Parts for an Inverse   The formula for the inverse of any matrix depends on viewing the matrix in the form . Let .   >  Identify the values of and for the matrix .       and     For a matrix described by , the entry is the entry in the top left and is the entry in the bottom right.       and     Correct!       and     For a matrix described by , the entry is the entry in the top left and is the entry in the bottom right.       and     For a matrix described by , the entry is the entry in the top left and is the entry in the bottom right.      >  Identify the values of and for the matrix .       and     For a matrix described by , the entry is the entry in the top right and is the entry in the bottom left.       and     For a matrix described by , the entry is the entry in the top right and is the entry in the bottom left.       and     Correct!       and     Don't multiply them by like in the inverse, just identify what and are to start with.      >  What is the value of for the matrix ?           Correct! , , , and , so             , , , and , so             , , , and , so             , , , and , so       >  Which matrix below is for the matrix ?           To calculate , you swap entries and and multiply entries and by negative 1.           To calculate , you swap entries and and multiply entries and by negative 1.           Correct!           To calculate , you swap entries and and multiply entries and by negative 1.      >  Which of the matrices below is ?           Correct!           Don't forget to multiply by .           Correct!           Multiply by , not .      "
},
{
  "id": "ex_inverse_4",
  "level": "2",
  "url": "sec-matrixinverse2vars.html#ex_inverse_4",
  "type": "Example",
  "number": "2.3.5",
  "title": "Using the formula for <span class=\"process-math\">\\(2\\times 2\\)<\/span> inverses.",
  "body": "Using the formula for inverses   Calculate the inverse, if it exists, of . If exists, use it to solve the linear system     Since , we know exists and we calculate   We can leave our answer in this form, or we could multiply it out and get .  To solve the system , we write . We check that and see that , is indeed a solution to the given linear system.   "
},
{
  "id": "rq-matrixinv2-invertornot",
  "level": "2",
  "url": "sec-matrixinverse2vars.html#rq-matrixinv2-invertornot",
  "type": "Reading Question",
  "number": "1",
  "title": "Invertible or Not?",
  "body": "Invertible or Not?   Match the correct matrices and properties.       Invertible      A matrix such that when  Not Invertible     Can't Tell (Yet)    "
},
{
  "id": "rq-matrixinv2-explain",
  "level": "2",
  "url": "sec-matrixinverse2vars.html#rq-matrixinv2-explain",
  "type": "Reading Question",
  "number": "2",
  "title": "What Are Inverses, Anyway?",
  "body": "What Are Inverses, Anyway?   In your own words, explain what you understand about the relationship between the identity matrix, the inverse of a square matrix if the inverse exists, and the solution to a linear system of equations.    "
},
{
  "id": "rq-matrixinv2-questions-poll",
  "level": "2",
  "url": "sec-matrixinverse2vars.html#rq-matrixinv2-questions-poll",
  "type": "Reading Question",
  "number": "3",
  "title": "Reflection.",
  "body": "Reflection   Reflect on your confidence level.    How confident do you feel with the material you just read about?      Not at all confident or didn't do the reading.      Not very confident.      Somewhat confident.      Mostly confident.      Confident so far and ready to engage more deeply.         Ask a question about the material. What additional information do you think someone would need to become more confident in their understanding?     "
},
{
  "id": "ws-matrixinverse2vars-2",
  "level": "2",
  "url": "sec-matrixinverse2vars.html#ws-matrixinverse2vars-2",
  "type": "Objectives",
  "number": "",
  "title": "",
  "body": "   Calculate the inverse of a matrix or say why an inverse doesn't exist.    Use the inverse and matrix multiplication to solve a 2-variable system of linear equations.    "
},
{
  "id": "exer_defmatrixA",
  "level": "2",
  "url": "sec-matrixinverse2vars.html#exer_defmatrixA",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "",
  "body": "  Let .     Calculate .           Calculate both and using matrix multiplication. What matrix do you get?    The identity matrix.      What's the size of the matrix product ? Is the matrix product defined? Why or why not?    The size of is ; you can't multiply a matrix by a .      Use to solve the system            Use to solve the system          "
},
{
  "id": "ws-matrixinverse2vars-4-1",
  "level": "2",
  "url": "sec-matrixinverse2vars.html#ws-matrixinverse2vars-4-1",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "",
  "body": "  Let and .     Calculate .           Say why we can't calculate .           Use matrix multiplication and the matrix defined in Exercise to calculate both and .     ;       Use matrix multiplication and the matrix defined in Exercise to calculate both and . What do you notice?     ;     "
},
{
  "id": "ws-matrixinverse2vars-4-2",
  "level": "2",
  "url": "sec-matrixinverse2vars.html#ws-matrixinverse2vars-4-2",
  "type": "Worksheet Exercise",
  "number": "3",
  "title": "",
  "body": "  Recall that the inverse of (if it exists) is the matrix such that .     Without doing any calculations, what is the inverse of ? Explain.     times equals , so is its own inverse.      Without doing any calculations, explain why the inverse of can't exist.    The zero matrix multiplied by anything equals the zero matrix, so there is nothing that could be multiplied by to equal .    "
},
{
  "id": "ww-matrixinv2by2-1",
  "level": "2",
  "url": "sec-matrixinverse2vars.html#ww-matrixinv2by2-1",
  "type": "Exercise",
  "number": "2.3.1",
  "title": "Is a Matrix Invertible?",
  "body": "Is a Matrix Invertible?    Given the matrix  (a) does the inverse of the matrix exist?  Choose   Yes   No   (b) if your answer is yes, write the inverse here.            "
},
{
  "id": "ww-matrixinv2by2-2",
  "level": "2",
  "url": "sec-matrixinverse2vars.html#ww-matrixinv2by2-2",
  "type": "Exercise",
  "number": "2.3.2",
  "title": "Multiply to Obtain Identity.",
  "body": "Multiply to Obtain Identity    Find a matrix such that    .       "
},
{
  "id": "ww-matrixinv2by2-3",
  "level": "2",
  "url": "sec-matrixinverse2vars.html#ww-matrixinv2by2-3",
  "type": "Exercise",
  "number": "2.3.3",
  "title": "Condition for Invertibility.",
  "body": "Condition for Invertibility    The matrix is invertible if and only if  .            "
},
{
  "id": "ww-matrixinv2by2-4",
  "level": "2",
  "url": "sec-matrixinverse2vars.html#ww-matrixinv2by2-4",
  "type": "Exercise",
  "number": "2.3.4",
  "title": "Solve Two Systems with the Inverse.",
  "body": "Solve Two Systems with the Inverse    Consider the following two systems.  (a)  (b)  (i) Find the inverse of the (common) coefficient matrix of the two systems.              (ii) Find the solutions to the two systems by using the inverse, i.e. by evaluating where represents the right hand side (i.e. for system (a) and for system (b)).  Solution to system (a):  , =  Solution to system (b):  , =                                               "
},
{
  "id": "ww-matrixinv2by2-5",
  "level": "2",
  "url": "sec-matrixinverse2vars.html#ww-matrixinv2by2-5",
  "type": "Exercise",
  "number": "2.3.5",
  "title": "Solve a System with the Inverse.",
  "body": "Solve a System with the Inverse    Solve the system of equations by converting to a matrix equation and using the inverse of the coefficient matrix.                     "
},
{
  "id": "exer-matrixinvers2vars-2-2",
  "level": "2",
  "url": "sec-matrixinverse2vars.html#exer-matrixinvers2vars-2-2",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": "           "
},
{
  "id": "exer-matrixinvers2vars-2-3",
  "level": "2",
  "url": "sec-matrixinverse2vars.html#exer-matrixinvers2vars-2-3",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": "           "
},
{
  "id": "exer-matrixinvers2vars-2-4",
  "level": "2",
  "url": "sec-matrixinverse2vars.html#exer-matrixinvers2vars-2-4",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": "           "
},
{
  "id": "exer-matrixinvers2vars-2-5",
  "level": "2",
  "url": "sec-matrixinverse2vars.html#exer-matrixinvers2vars-2-5",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": "           "
},
{
  "id": "exer-matrixinvers2vars-2-6",
  "level": "2",
  "url": "sec-matrixinverse2vars.html#exer-matrixinvers2vars-2-6",
  "type": "Exercise",
  "number": "5",
  "title": "",
  "body": "        does not exist.   "
},
{
  "id": "exer-matrixinvers2vars-2-7",
  "level": "2",
  "url": "sec-matrixinverse2vars.html#exer-matrixinvers2vars-2-7",
  "type": "Exercise",
  "number": "6",
  "title": "",
  "body": "           "
},
{
  "id": "exer-matrixinvers2vars-2-8",
  "level": "2",
  "url": "sec-matrixinverse2vars.html#exer-matrixinvers2vars-2-8",
  "type": "Exercise",
  "number": "7",
  "title": "",
  "body": "           "
},
{
  "id": "exer-matrixinvers2vars-2-9",
  "level": "2",
  "url": "sec-matrixinverse2vars.html#exer-matrixinvers2vars-2-9",
  "type": "Exercise",
  "number": "8",
  "title": "",
  "body": "           "
},
{
  "id": "exer-matrixinvers2vars-3-2",
  "level": "2",
  "url": "sec-matrixinverse2vars.html#exer-matrixinvers2vars-3-2",
  "type": "Exercise",
  "number": "9",
  "title": "",
  "body": "   ,         "
},
{
  "id": "exer-matrixinvers2vars-3-3",
  "level": "2",
  "url": "sec-matrixinverse2vars.html#exer-matrixinvers2vars-3-3",
  "type": "Exercise",
  "number": "10",
  "title": "",
  "body": "   ,         "
},
{
  "id": "exer-matrixinvers2vars-3-4",
  "level": "2",
  "url": "sec-matrixinverse2vars.html#exer-matrixinvers2vars-3-4",
  "type": "Exercise",
  "number": "11",
  "title": "",
  "body": "   ,         "
},
{
  "id": "exer-matrixinvers2vars-3-5",
  "level": "2",
  "url": "sec-matrixinverse2vars.html#exer-matrixinvers2vars-3-5",
  "type": "Exercise",
  "number": "12",
  "title": "",
  "body": "   ,         "
},
{
  "id": "sec-largerinverses",
  "level": "1",
  "url": "sec-largerinverses.html",
  "type": "Section",
  "number": "2.4",
  "title": "Calculating Larger Inverses",
  "body": " Calculating Larger Inverses   We learned in the previous section what the inverse of a square matrix is and how to calculate the inverse of a matrix. Then we used the matrix inverse to solve a linear system with 2 variables.  In this section we see another connection between calculating the inverse of a matrix and solving a certain linear system of equations, and in doing so, we learn how to calculate the inverse of square matrices larger than .    Prepare  Consider the matrix . We know how to find the inverse of using the formula in , . Let's now find in another way, using a method that will also work on larger matrices. Let . Calculating means we need to solve for the values of . We know that , which means that , and using matrix multiplication on the two matrices above means that .  Two matrices are equal only when each of their corresponding entries is equal, so this means that .  This looks like two linear systems of equations, one with variables and another one with variables . We know how to solve a system of linear equations: use an augmented matrix and row reduce. Let's solve the first system first.   This means that and .  Now let's solve the second system. . This means that and .  Putting those values we calculated together results in , and this is indeed the same matrix we had calculated using the formula for inverses.  What do you notice?   We solved for the inverse of by setting up , and multiplying out and setting corresponding entries equal led to 2 systems of equations to solve: . What do you notice about these 2 systems and the process of solving them?      The two systems have the same coefficients.      The two systems have the different coefficients.      The two systems have the same constants.      The two systems have the different constants.      We used the same sequence of row operations on the augmented matrices to solve the system.      We used a different sequence of row operations on the augmented matrices to solve the system.      The two systems have the same solutions.      The two systems have different solutions.      The way it worked out in this example is not a coincidence, and the same things are true for larger matrices:   Calculating , where is a known matrix and is a matrix of unknowns, leads to multiple linear systems that all have coefficient matrix .    In each system, the column matrix corresponding to the constants will be a column of the identity matrix.    Since the coefficient matrices are all the same, we will need the exact same row operations to solve each of the systems.     Since we did the exact same row operations and put the answers into the columns of , we could have been more efficient and solved both systems at the same time. Note that we started with on the left and the identity matrix on the right. After row reducing, the left side turned into the identity matrix, and the right side turned into .  In math notation, .  Let's see if that happens again with another example, using Sage to help with the calculations.  Calculating the inverse of a larger matrix  We calculate for .  We're trying to find an unknown matrix such that . So we set up three augmented systems of equations to solve at the same time, resulting in . Let's let Sage row reduce this for us.  Then let's check that the matrix in the last 3 columns really is the inverse of , by extracting the last three columns of the reduced echelon form, and then multiplying that matrix by to make sure we get the identity matrix.  Be sure you've already hit Evaluate(Sage) above.    What happens if we row reduce and don't get the identity matrix appearing on the left?  When an inverse doesn't exist  We attempt to calculate for .  We're trying to find an unknown matrix such that . So we set up three augmented systems of equations to solve at the same time, resulting in . Let's let Sage row reduce this for us.  We don't see in the first 3 columns. Let's check that the matrix in the last 3 columns is not the inverse of , by extracting the last three columns of the reduced echelon form, and then multiplying that matrix by to see if we get the identity matrix.  Be sure you've already hit Evaluate(Sage) above. We did not get the identity matrix.  In fact, there is no possible inverse of . We can see this is true by observing that If exists, then we could multiply both sides on the left by and get and since , this would mean that , which is not true. Thus, there is no possible matrix which is the inverse of .   Let's summarize what we've learned about calculating larger inverses.  Calculating inverses of any size  inverse computing  matrix inverse  Let be an matrix. To calculate , augment the matrix by the identity matrix  and put the resulting matrix into reduced row echelon form.   If the reduced row echelon form is of the form , then .    If the first columns of the reduced row echelon form are not , then is not invertible.       Interpreting the rref of   Interpret the given information to answer the following questions about inverses.     Suppose that and . Which of the following is true?      The matrix doesn't have an inverse.    After row reducing we see the identity matrix appear on the left.      The inverse of is .    The inverse of a matrix is the matrix we multiply by in order to get .  But , not .      The inverse of is     Correct!        Suppose that and . Which of the following is true?      The matrix doesn't have an inverse.    After row reducing we don't see the identity matrix appear on the left.      The inverse of is .    We don't see the identity matrix appear on the left.      The inverse of is .    We don't see the identity matrix appear on the left.        Suppose that is a matrix such that . Which of the following is true?      The matrix doesn't have an inverse.    After row reducing the identity would appear on the left, using the same row operations used to row reduce by itself.      The matrix has an inverse.    After row reducing the identity would appear on the left, using the same row operations used to row reduce by itself.      Without knowing what is, we can't tell whether or not has an inverse.    We don't know what the inverse is without knowing what is, but the same sequence of row operations that turns into would turn into , and would be the inverse of .        Parsons Problem, Calculate inverse   Put the correct steps in the correct order to calculate the inverse of a square matrix of any size.     Make sure .    Augment the matrix by the same size identity matrix on right.    Perform Gauss-Jordan elimination on     Row reduce .    The inverse of will appear on the right.    If the identity matrix appears on the left, the inverse of is on the right.    If the identity matrix does not appear on the left, the inverse of does not exist.     How many inverses?   For a square matrix , we know it's possible that doesn't have an inverse, or that we can calculate using the method in this section. Is it possible that could have more than one inverse? That is, that there could be two different matrices and such that and ? Explain why or why not.     Reflection   Reflect on your confidence level.    How confident do you feel with the material you just read about?      Not at all confident or didn't do the reading.      Not very confident.      Somewhat confident.      Mostly confident.      Confident so far and ready to engage more deeply.         Ask a question about the material. What additional information do you think someone would need to become more confident in their understanding?        Participate     Practice the method of row reducing a certain related matrix in order to calculate the inverse of a given matrix.    Discover some properties of inverses and row operations.      Inverse and row operations, diagonal matrix    Use row reducing to calculating the inverses of the following two matrices. What do you notice about the matrices and ? What about and ?      Inverse and row operations, lower triangular matrix     Use row reducing to calculate the inverse of the matrix below. Be sure to write down which row operations you did.        , which was accomplished by performing the row operations .        Even though this is not our usual Gauss-Jordan algorithm, perform the following row operations in order on the matrix . What does the result tell you about ? What do you notice about the row operations compared to the row operations done on ?              , and , . The inverse of is .  The row operations are the inverse operations, done in reverse order. The inverse of scaling is scaling by the reciprocal. The inverse of multiply Row 1 by and add to Row 2 is multiply Row 1 by and add to Row 2. Prompt students to think about the inverse of swapping two rows (perform the same swap again to swap them back).        Investigating properties of the inverse   For this problem, use Sage or another matrix inverse calculator. Note that once you've defined the matrix in Sage, Sage can find the inverse without needing to augment and row reduce using A.inverse() or A^-1 .   Consider the square matrices      Calculate and .    Show that is invertible by finding a matrix such that .    Use Sage to calculate , , , and . What do you notice?     Consider the product and use associativity to regroup the products so that the middle two terms are multiplied first. Do the same for . What do you get?      What is the inverse of in terms of ? What about the inverse of ? Use Sage to verify your conjectures.      Calculate , and . What do you observe?         Summary     Solving for the inverse of a matrix requires setting up several systems of equations whose coefficient matrix are all the same.    We can find the inverse of any size square matrix (or show that an inverse doesn't exist) by augmenting the matrix by the identity matrix and putting the result into reduced row echelon form.    The formula given in gives the inverse of a matrix, and enables us to calculate the inverse (or show its nonexistence) of any size square matrix.      Practice  Inverse of a matrix    Let . Augment by the identity matrix.  Perform the row operation .  Perform both the row operations and .  Continue the process and enter the final answer for the inverse of .   .        Inverse of an upper triangular matrix    If , then   .        Solving a linear system with an inverse    If then   .  Given , solve .   .         Not invertible?    Find a real number for which the matrix is not invertible.  :             True\/False Inverses    Determine which of the following statements are true and which are false.    If and are square matrices such that and is invertible, then .    The identity matrix is invertible.    If then is invertible.    If and are invertible matrices, then so is .              Additional Practice    In the following exercises, a matrix is given. Use , to either find the inverse or show that no inverse exists.                       does not exist.                        does not exist.                                    does not exist.                                                                                                                                           In the following exercises, a coefficient matrix and column matrix are given. Solve the equation .      ,               ,               ,               ,              "
},
{
  "id": "mc-inverseobervations",
  "level": "2",
  "url": "sec-largerinverses.html#mc-inverseobervations",
  "type": "Activity",
  "number": "2.4.1",
  "title": "What do you notice?",
  "body": "What do you notice?   We solved for the inverse of by setting up , and multiplying out and setting corresponding entries equal led to 2 systems of equations to solve: . What do you notice about these 2 systems and the process of solving them?      The two systems have the same coefficients.      The two systems have the different coefficients.      The two systems have the same constants.      The two systems have the different constants.      We used the same sequence of row operations on the augmented matrices to solve the system.      We used a different sequence of row operations on the augmented matrices to solve the system.      The two systems have the same solutions.      The two systems have different solutions.     "
},
{
  "id": "subsec-largerinverses-bc-12",
  "level": "2",
  "url": "sec-largerinverses.html#subsec-largerinverses-bc-12",
  "type": "Example",
  "number": "2.4.2",
  "title": "Calculating the inverse of a larger matrix.",
  "body": "Calculating the inverse of a larger matrix  We calculate for .  We're trying to find an unknown matrix such that . So we set up three augmented systems of equations to solve at the same time, resulting in . Let's let Sage row reduce this for us.  Then let's check that the matrix in the last 3 columns really is the inverse of , by extracting the last three columns of the reduced echelon form, and then multiplying that matrix by to make sure we get the identity matrix.  Be sure you've already hit Evaluate(Sage) above.   "
},
{
  "id": "subsec-largerinverses-bc-14",
  "level": "2",
  "url": "sec-largerinverses.html#subsec-largerinverses-bc-14",
  "type": "Example",
  "number": "2.4.3",
  "title": "When an inverse doesn’t exist.",
  "body": "When an inverse doesn't exist  We attempt to calculate for .  We're trying to find an unknown matrix such that . So we set up three augmented systems of equations to solve at the same time, resulting in . Let's let Sage row reduce this for us.  We don't see in the first 3 columns. Let's check that the matrix in the last 3 columns is not the inverse of , by extracting the last three columns of the reduced echelon form, and then multiplying that matrix by to see if we get the identity matrix.  Be sure you've already hit Evaluate(Sage) above. We did not get the identity matrix.  In fact, there is no possible inverse of . We can see this is true by observing that If exists, then we could multiply both sides on the left by and get and since , this would mean that , which is not true. Thus, there is no possible matrix which is the inverse of .  "
},
{
  "id": "interpret-inverse",
  "level": "2",
  "url": "sec-largerinverses.html#interpret-inverse",
  "type": "Activity",
  "number": "2.4.4",
  "title": "Interpreting the rref of <span class=\"process-math\">\\(\\big[\\begin{array}{c|c}   A \\amp  I \\end{array} \\big]\\)<\/span>.",
  "body": " Interpreting the rref of   Interpret the given information to answer the following questions about inverses.     Suppose that and . Which of the following is true?      The matrix doesn't have an inverse.    After row reducing we see the identity matrix appear on the left.      The inverse of is .    The inverse of a matrix is the matrix we multiply by in order to get .  But , not .      The inverse of is     Correct!        Suppose that and . Which of the following is true?      The matrix doesn't have an inverse.    After row reducing we don't see the identity matrix appear on the left.      The inverse of is .    We don't see the identity matrix appear on the left.      The inverse of is .    We don't see the identity matrix appear on the left.        Suppose that is a matrix such that . Which of the following is true?      The matrix doesn't have an inverse.    After row reducing the identity would appear on the left, using the same row operations used to row reduce by itself.      The matrix has an inverse.    After row reducing the identity would appear on the left, using the same row operations used to row reduce by itself.      Without knowing what is, we can't tell whether or not has an inverse.    We don't know what the inverse is without knowing what is, but the same sequence of row operations that turns into would turn into , and would be the inverse of .      "
},
{
  "id": "parsons-calculate-inverse",
  "level": "2",
  "url": "sec-largerinverses.html#parsons-calculate-inverse",
  "type": "Reading Question",
  "number": "1",
  "title": "Parsons Problem, Calculate inverse.",
  "body": "Parsons Problem, Calculate inverse   Put the correct steps in the correct order to calculate the inverse of a square matrix of any size.     Make sure .    Augment the matrix by the same size identity matrix on right.    Perform Gauss-Jordan elimination on     Row reduce .    The inverse of will appear on the right.    If the identity matrix appears on the left, the inverse of is on the right.    If the identity matrix does not appear on the left, the inverse of does not exist.    "
},
{
  "id": "rq-inverses-unique",
  "level": "2",
  "url": "sec-largerinverses.html#rq-inverses-unique",
  "type": "Reading Question",
  "number": "2",
  "title": "How many inverses?",
  "body": "How many inverses?   For a square matrix , we know it's possible that doesn't have an inverse, or that we can calculate using the method in this section. Is it possible that could have more than one inverse? That is, that there could be two different matrices and such that and ? Explain why or why not.    "
},
{
  "id": "rq-largerinverses-questions-poll",
  "level": "2",
  "url": "sec-largerinverses.html#rq-largerinverses-questions-poll",
  "type": "Reading Question",
  "number": "3",
  "title": "Reflection.",
  "body": "Reflection   Reflect on your confidence level.    How confident do you feel with the material you just read about?      Not at all confident or didn't do the reading.      Not very confident.      Somewhat confident.      Mostly confident.      Confident so far and ready to engage more deeply.         Ask a question about the material. What additional information do you think someone would need to become more confident in their understanding?     "
},
{
  "id": "ws-largerinverses-2",
  "level": "2",
  "url": "sec-largerinverses.html#ws-largerinverses-2",
  "type": "Objectives",
  "number": "",
  "title": "",
  "body": "   Practice the method of row reducing a certain related matrix in order to calculate the inverse of a given matrix.    Discover some properties of inverses and row operations.    "
},
{
  "id": "ws-largerinverses-3-1",
  "level": "2",
  "url": "sec-largerinverses.html#ws-largerinverses-3-1",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "Inverse and row operations, diagonal matrix.",
  "body": "Inverse and row operations, diagonal matrix    Use row reducing to calculating the inverses of the following two matrices. What do you notice about the matrices and ? What about and ?     "
},
{
  "id": "ws-largerinverses-3-2",
  "level": "2",
  "url": "sec-largerinverses.html#ws-largerinverses-3-2",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "Inverse and row operations, lower triangular matrix.",
  "body": "Inverse and row operations, lower triangular matrix     Use row reducing to calculate the inverse of the matrix below. Be sure to write down which row operations you did.        , which was accomplished by performing the row operations .        Even though this is not our usual Gauss-Jordan algorithm, perform the following row operations in order on the matrix . What does the result tell you about ? What do you notice about the row operations compared to the row operations done on ?              , and , . The inverse of is .  The row operations are the inverse operations, done in reverse order. The inverse of scaling is scaling by the reciprocal. The inverse of multiply Row 1 by and add to Row 2 is multiply Row 1 by and add to Row 2. Prompt students to think about the inverse of swapping two rows (perform the same swap again to swap them back).     "
},
{
  "id": "ws-largerinverses-4-1",
  "level": "2",
  "url": "sec-largerinverses.html#ws-largerinverses-4-1",
  "type": "Worksheet Exercise",
  "number": "3",
  "title": "Investigating properties of the inverse.",
  "body": "Investigating properties of the inverse   For this problem, use Sage or another matrix inverse calculator. Note that once you've defined the matrix in Sage, Sage can find the inverse without needing to augment and row reduce using A.inverse() or A^-1 .   Consider the square matrices      Calculate and .    Show that is invertible by finding a matrix such that .    Use Sage to calculate , , , and . What do you notice?     Consider the product and use associativity to regroup the products so that the middle two terms are multiplied first. Do the same for . What do you get?      What is the inverse of in terms of ? What about the inverse of ? Use Sage to verify your conjectures.      Calculate , and . What do you observe?    "
},
{
  "id": "ww-matrixinv3by3-1",
  "level": "2",
  "url": "sec-largerinverses.html#ww-matrixinv3by3-1",
  "type": "Exercise",
  "number": "2.4.1",
  "title": "Inverse of a matrix.",
  "body": "Inverse of a matrix    Let . Augment by the identity matrix.  Perform the row operation .  Perform both the row operations and .  Continue the process and enter the final answer for the inverse of .   .       "
},
{
  "id": "ww-matrixinv3by3-2",
  "level": "2",
  "url": "sec-largerinverses.html#ww-matrixinv3by3-2",
  "type": "Exercise",
  "number": "2.4.2",
  "title": "Inverse of an upper triangular matrix.",
  "body": "Inverse of an upper triangular matrix    If , then   .       "
},
{
  "id": "ww-matrixinv3by3-3",
  "level": "2",
  "url": "sec-largerinverses.html#ww-matrixinv3by3-3",
  "type": "Exercise",
  "number": "2.4.3",
  "title": "Solving a linear system with an inverse.",
  "body": "Solving a linear system with an inverse    If then   .  Given , solve .   .       "
},
{
  "id": "ww-largerinverses-notinv",
  "level": "2",
  "url": "sec-largerinverses.html#ww-largerinverses-notinv",
  "type": "Exercise",
  "number": "2.4.4",
  "title": "Not invertible?",
  "body": "Not invertible?    Find a real number for which the matrix is not invertible.  :            "
},
{
  "id": "ww-largerinversesTF",
  "level": "2",
  "url": "sec-largerinverses.html#ww-largerinversesTF",
  "type": "Exercise",
  "number": "2.4.5",
  "title": "True\/False Inverses.",
  "body": "True\/False Inverses    Determine which of the following statements are true and which are false.    If and are square matrices such that and is invertible, then .    The identity matrix is invertible.    If then is invertible.    If and are invertible matrices, then so is .         "
},
{
  "id": "exer-largerinverses-2-2",
  "level": "2",
  "url": "sec-largerinverses.html#exer-largerinverses-2-2",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": "           "
},
{
  "id": "exer-largerinverses-2-3",
  "level": "2",
  "url": "sec-largerinverses.html#exer-largerinverses-2-3",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": "        does not exist.   "
},
{
  "id": "exer-largerinverses-2-4",
  "level": "2",
  "url": "sec-largerinverses.html#exer-largerinverses-2-4",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": "           "
},
{
  "id": "exer-largerinverses-2-5",
  "level": "2",
  "url": "sec-largerinverses.html#exer-largerinverses-2-5",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": "        does not exist.   "
},
{
  "id": "exer-largerinverses-2-6",
  "level": "2",
  "url": "sec-largerinverses.html#exer-largerinverses-2-6",
  "type": "Exercise",
  "number": "5",
  "title": "",
  "body": "           "
},
{
  "id": "exer-largerinverses-2-7",
  "level": "2",
  "url": "sec-largerinverses.html#exer-largerinverses-2-7",
  "type": "Exercise",
  "number": "6",
  "title": "",
  "body": "           "
},
{
  "id": "exer-largerinverses-2-8",
  "level": "2",
  "url": "sec-largerinverses.html#exer-largerinverses-2-8",
  "type": "Exercise",
  "number": "7",
  "title": "",
  "body": "        does not exist.   "
},
{
  "id": "exer-largerinverses-2-9",
  "level": "2",
  "url": "sec-largerinverses.html#exer-largerinverses-2-9",
  "type": "Exercise",
  "number": "8",
  "title": "",
  "body": "           "
},
{
  "id": "exer-largerinverses-2-10",
  "level": "2",
  "url": "sec-largerinverses.html#exer-largerinverses-2-10",
  "type": "Exercise",
  "number": "9",
  "title": "",
  "body": "           "
},
{
  "id": "exer-largerinverses-2-11",
  "level": "2",
  "url": "sec-largerinverses.html#exer-largerinverses-2-11",
  "type": "Exercise",
  "number": "10",
  "title": "",
  "body": "           "
},
{
  "id": "exer-largerinverses-2-12",
  "level": "2",
  "url": "sec-largerinverses.html#exer-largerinverses-2-12",
  "type": "Exercise",
  "number": "11",
  "title": "",
  "body": "           "
},
{
  "id": "exer-largerinverses-2-13",
  "level": "2",
  "url": "sec-largerinverses.html#exer-largerinverses-2-13",
  "type": "Exercise",
  "number": "12",
  "title": "",
  "body": "           "
},
{
  "id": "exer-largerinverses-2-14",
  "level": "2",
  "url": "sec-largerinverses.html#exer-largerinverses-2-14",
  "type": "Exercise",
  "number": "13",
  "title": "",
  "body": "           "
},
{
  "id": "exer-largerinverses-2-15",
  "level": "2",
  "url": "sec-largerinverses.html#exer-largerinverses-2-15",
  "type": "Exercise",
  "number": "14",
  "title": "",
  "body": "           "
},
{
  "id": "exer-largerinverses-2-16",
  "level": "2",
  "url": "sec-largerinverses.html#exer-largerinverses-2-16",
  "type": "Exercise",
  "number": "15",
  "title": "",
  "body": "           "
},
{
  "id": "exer-largerinverses-2-17",
  "level": "2",
  "url": "sec-largerinverses.html#exer-largerinverses-2-17",
  "type": "Exercise",
  "number": "16",
  "title": "",
  "body": "           "
},
{
  "id": "exer-largerinverses-2-18",
  "level": "2",
  "url": "sec-largerinverses.html#exer-largerinverses-2-18",
  "type": "Exercise",
  "number": "17",
  "title": "",
  "body": "           "
},
{
  "id": "exer-largerinverses-2-19",
  "level": "2",
  "url": "sec-largerinverses.html#exer-largerinverses-2-19",
  "type": "Exercise",
  "number": "18",
  "title": "",
  "body": "           "
},
{
  "id": "exer-largerinverses-3-2",
  "level": "2",
  "url": "sec-largerinverses.html#exer-largerinverses-3-2",
  "type": "Exercise",
  "number": "19",
  "title": "",
  "body": "   ,           "
},
{
  "id": "exer-largerinverses-3-3",
  "level": "2",
  "url": "sec-largerinverses.html#exer-largerinverses-3-3",
  "type": "Exercise",
  "number": "20",
  "title": "",
  "body": "   ,           "
},
{
  "id": "exer-largerinverses-3-4",
  "level": "2",
  "url": "sec-largerinverses.html#exer-largerinverses-3-4",
  "type": "Exercise",
  "number": "21",
  "title": "",
  "body": "   ,           "
},
{
  "id": "exer-largerinverses-3-5",
  "level": "2",
  "url": "sec-largerinverses.html#exer-largerinverses-3-5",
  "type": "Exercise",
  "number": "22",
  "title": "",
  "body": "   ,           "
},
{
  "id": "sec-elementarymatrices",
  "level": "1",
  "url": "sec-elementarymatrices.html",
  "type": "Section",
  "number": "2.5",
  "title": "Elementary matrices and invertibility",
  "body": " Elementary matrices and invertibility   We have seen how the matrix inverse can be used to solve systems of equations and how systems of equations can arise in many different scenarios and contexts. The examples we've used had only a few unknowns, at most 4 or 5.  However, many of the most useful linear systems, in areas like machine learning and data analysis, have tens or hundreds of variables. It becomes very important to maximize efficiency, and the material we are learning now lays a foundation for that which will continue to the next section also.    Prepare  We'll start by seeing how performing an elementary row operation can be done via matrix multiplication.  Row operation and matrix multiplication   Consider the matrix .  The first step in Gauss-Jordan elimination is , .  However, we want to perform this row operation by finding a matrix to multiply by . If we instead perform that same row operation on the identity matrix, we get . Call this matrix, , so .  Now check that multiplying by gives us , which is the exact same effect as performing on directly.    We just turned an operation on rows of a matrix into a matrix multiplication. You might be wondering, Does this work for other elementary row operations? The answer is, Yes! We can turn row operations into matrix multiplication by performing the row operation on the appropriately sized identity matrix.  Row operations and matrix multiplication   Consider the elementary row operations on the left and match them to the matrix on the right which performs the operation via matrix multiplication.                 There is a name for the kinds of matrices we have been considering.  Elementary Matrices   Matrices which are obtained by performing one elementary row operation to the identity matrix are called elementary matrices .    Continuing Gauss-Jordan with matrix multiplication   Let's return to the matrix in and continue our row reducing process. We already defined and calculated The next step in Gauss-Jordan elimination is . Doing this operation to the identity matrix yields . If we let , and multiply by the matrix we already had after multiplying by , we get .  There's one more row operation we need to do to finish row reducing . Let's create by performing on the identity matrix , and multiplying by the matrix we had gives us .    To recap what we just did: we row reduced the matrix by multiplying on the left by three matrices in turn. In this case, the reduced row echelon form was the identity matrix, so we also found matrices whose product is the identity. Associativity means that , which means that is invertible and .  This is kind of a big deal. We said in that in order to calculate inverses we augment by the identity matrix and then row reduce. If a matrix row reduces to on the left then the inverse appears on the right. Now we see another connection between inverses and row reducing: if a matrix row reduces to the identity, the inverse is the product of the elementary matrices which perform the row reduction.  It is possible to show that since the product is invertible (and it is since its inverse is ) it is the case that , , and are all invertible, too. Instead, let's try to see why that has to be the case based on properties of elementary matrices.  Inverses of elementary matrices   There are 3 kinds of elementary row operations and so there are 3 kinds of elementary matrices: ones which result from 1) scaling a row, 2) from interchanging two rows, and 3) from adding a multiple of a row to another row.   Scaling operation inverses   Drag each matrix below to its inverse. You can do this by multiplying and seeing which pairs have as their product, or by using an inverse solver, but pay attention to the patterns. What is true about the inverse of a matrix which scales a row by a number ?                       Scaling inverse generally   Say in your own words what the inverse (or opposite) is of scaling a row by a number .     Interchanging operation inverses   Drag each matrix below to its inverse. You can do this by multiplying and seeing which pairs have as their product, or by using an inverse solver, but pay attention to the patterns. What is true about the inverse of a matrix which swaps two rows?                      Interchanging inverse generally   Say in your own words what the inverse is of interchanging two rows.     Multiply-and-add operation inverses   Drag each matrix below to its inverse. You can do this by multiplying and seeing which pairs have as their product, or by using an inverse solver, but pay attention to the patterns. What is true about the inverse of a matrix which multiplies a row by a number and adds the result to another row?                     Multiply-and-add inverse generally   Say in your own words what the inverse is of multiplying a row by and adding to another row.      Let's return to our running example of this section. We started with and through row reducing by multiplying by elementary matrices we found that . We've seen that elementary row operations can be undone by another elementary row operation, which means that every elementary matrix is invertible, and the inverse is another elementary matrix. Thus we can multiply both sides of the above equation by and get that . Next we undo by multiplying both sides by to get . Finally, we undo in the same way and get .  Since the inverse of an elementary matrix is also an elementary matrix, we just wrote as a product of elementary matrices. Moreover, there wasn't anything special about this example; the fact that the reduced row echelon form of is meant that we could multiply by elementary matrices to get , which meant that is invertible and also that can be expressed as the product of elementary matrices.  We have now seen a lot of different things that are equivalent to a matrix having an inverse (and there will be still more in the future). Let's collect what we know so far.   Equivalent to being invertible  Let be an matrix. The following are equivalent:    is invertible.    The reduced row echelon form of is .    There is exactly one solution (not 0 and not infinitely many) to any linear system that has as its coefficient matrix.    For any column matrix with rows, if , then .     is the product of elementary matrices.      A theorem in math is a statement which has a proof that it's true. We don't get into full proofs, but we can still explore and understand some of the reasons for each of the above equivalences. We did a little of that just above the theorem, when we were seeing how row reducing to the identity led to invertibility and being able to be written as a product of elementary matrices, and we'll explore more during the Participate activities.   Order of multiplication   If you have found elementary matrices and which perform row operations, and you want to perform first on a matrix and then to the result perform , which product do you calculate?           Just like with functions , the comes second as we read left-to-right, but that means perform first and plug the result into .  So too with matrix multiplication. By associativity, is the same as , which means multiply and then multiply by the result.           Correct!      Elementary matrices and invertibility   Every elementary matrix is invertible, and the inverse of an elementary matrix is also an elementary matrix.    The inverse of scaling is scaling by the reciprocal; the inverse of swapping two rows is swapping the same two rows again; the inverse of multiplying a row by and adding to another row is multiplying the row by and adding.    Reflection   Reflect on your confidence level.    How confident do you feel with the material you just read about?      Not at all confident or didn't do the reading.      Not very confident.      Somewhat confident.      Mostly confident.      Confident so far and ready to engage more deeply.         Ask a question about the material. What additional information do you think someone would need to become more confident in their understanding?        Participate     Practice calculating with elementary matrices , including multiplication and inverses.    Observe and deepen understanding of connections between solutions of linear systems, invertibility, and elementary matrices.         Consider the matrix . Note that performing Gauss-Jordan elimination requires performing in order    .        Calculate , , , and without using technology. What is the inverse of each matrix you found?      Use the sage cell below and modify it to use what you got for and verify that performs on .       Now similarly modify the sage cell below with what you found for , , and and verify that .       What do the calculations in the cell below tell us about and elementary matrices?       Use sage to verify your calculations of the inverses in the first part, and to verify that .         The theorem containing various things equivalent to the property of being invertible is sometimes called The Invertible Matrix Theorem . But the star of the show is really the property of the reduced row echelon form of being . Let's explore a bit how some of the various properties are related.     Suppose you know that is an matrix whose reduced row echelon form is . Set up the augmented matrix . What happens after you row reduce this matrix? What does mean for the invertibility of ?      Suppose you know that is an matrix whose reduced row echelon form is . Now we know that performing a row operation is the same as multiplying by an elementary matrix. Performing a row operation on has the same result as . The reduced row echelon form of being means that there is a sequence of elementary matrices such that . What does this mean about ?      Suppose you know that is an invertible matrix and you have a linear system with as its coefficient matrix. Then you can write where is a column matrix of variables and is your column matrix of constants. How many solutions are there for ? How do you know?      Suppose you know that is an invertible matrix and that is a matrix with rows such that . What does have to equal? How do you know?      Suppose that is an matrix and is a column matrix with rows. Now suppose that the only solution to is that . (Why isn't it possible that there are no solutions?) Set up . After row reducing to solve the system, how many free variables can there be? What does the reduced row echelon form have to look like?        Summary      Elementary matrices are the result of performing one elementary row operation on the identity matrix. Multiplying a matrix on the left by an elementary matrix has the same result as performing that row operation on the matrix.    We have a list of conditions that are all equivalent to a square matrix being invertible, including row reducing to the identity matrix and having exactly one solution to a linear system (not 0, not infinitely many solutions).    This material is setting us up to learn more about how computers are programmed to calculate with matrices, to be efficient and fast when there are hundreds, or even thousands, of numbers to add and multiply.      Practice  Scaling row operation with inverse    Assume that A is a matrix with four rows. Find the elementary matrix E such that E A gives the matrix resulting from A after the given row operation is performed. Then find and give the elementary row operation corresponding to .       The elementary row operation corresponding to is:                         Interchanging row operation with inverse    Assume that A is a matrix with four rows. Find the elementary matrix E such that E A gives the matrix resulting from A after the given row operation is performed. Then find and give the elementary row operation corresponding to .       The elementary row operation corresponding to is:                   Lots of row operation with inverses    a. Suppose that . Find and .   ,  .  b. Suppose that . Find and .   ,  .  c. Suppose that . Find and .   ,  .  d. Suppose that .  Find and .   ,   .  e. Suppose that .  Find and .   ,   .  f. Suppose that .  Find and .   ,   .        Product of elementary matrices    Consider the following Gauss-Jordan reduction:   Find   ,   ,   .   .  Write as a product of elementary matrices:             True\/False invertibility     Determine which of the following statements are true and which are false.    Every invertible matrix can be written as a product of elementary matrices.    The reduced row echelon form of a square matrix is the identity matrix.    The inverse of an elementary matrix is an elementary matrix.    If is an invertible matrix and then              Additional Practice     Calculate for .           Calculate for .           Calculate for .           True or False?     False. , which means       Calculate .             Consider the matrix .     Calculate the elementary matrix which performs .           Calculate the elementary matrix which performs .           Calculate the elementary matrix which performs .           Calculate the elementary matrix which performs .           Calculate the elementary matrix which performs .           Calculate the elementary matrix which performs .           Calculate the elementary matrix which performs .           Calculate the elementary matrix which performs .            Suppose you know that where each is an elementary matrix.     What is ?     is the matrix you multiply by to get .     .      Write as a product of elementary matrices.    Start with the equation above and multiply both sides on the left by . What do you get?           "
},
{
  "id": "ex-rowops-matrixmult",
  "level": "2",
  "url": "sec-elementarymatrices.html#ex-rowops-matrixmult",
  "type": "Example",
  "number": "2.5.1",
  "title": "Row operation and matrix multiplication.",
  "body": "Row operation and matrix multiplication   Consider the matrix .  The first step in Gauss-Jordan elimination is , .  However, we want to perform this row operation by finding a matrix to multiply by . If we instead perform that same row operation on the identity matrix, we get . Call this matrix, , so .  Now check that multiplying by gives us , which is the exact same effect as performing on directly.   "
},
{
  "id": "elem-matrices-matching",
  "level": "2",
  "url": "sec-elementarymatrices.html#elem-matrices-matching",
  "type": "Activity",
  "number": "2.5.2",
  "title": "Row operations and matrix multiplication.",
  "body": "Row operations and matrix multiplication   Consider the elementary row operations on the left and match them to the matrix on the right which performs the operation via matrix multiplication.                "
},
{
  "id": "def-elem-matrices",
  "level": "2",
  "url": "sec-elementarymatrices.html#def-elem-matrices",
  "type": "Definition",
  "number": "2.5.3",
  "title": "Elementary Matrices.",
  "body": "Elementary Matrices   Matrices which are obtained by performing one elementary row operation to the identity matrix are called elementary matrices .   "
},
{
  "id": "ex-rowops-matrixmult-cont",
  "level": "2",
  "url": "sec-elementarymatrices.html#ex-rowops-matrixmult-cont",
  "type": "Example",
  "number": "2.5.4",
  "title": "Continuing Gauss-Jordan with matrix multiplication.",
  "body": "Continuing Gauss-Jordan with matrix multiplication   Let's return to the matrix in and continue our row reducing process. We already defined and calculated The next step in Gauss-Jordan elimination is . Doing this operation to the identity matrix yields . If we let , and multiply by the matrix we already had after multiplying by , we get .  There's one more row operation we need to do to finish row reducing . Let's create by performing on the identity matrix , and multiplying by the matrix we had gives us .   "
},
{
  "id": "ex-elem-inverses",
  "level": "2",
  "url": "sec-elementarymatrices.html#ex-elem-inverses",
  "type": "Activity",
  "number": "2.5.5",
  "title": "Inverses of elementary matrices.",
  "body": "Inverses of elementary matrices   There are 3 kinds of elementary row operations and so there are 3 kinds of elementary matrices: ones which result from 1) scaling a row, 2) from interchanging two rows, and 3) from adding a multiple of a row to another row.   Scaling operation inverses   Drag each matrix below to its inverse. You can do this by multiplying and seeing which pairs have as their product, or by using an inverse solver, but pay attention to the patterns. What is true about the inverse of a matrix which scales a row by a number ?                       Scaling inverse generally   Say in your own words what the inverse (or opposite) is of scaling a row by a number .     Interchanging operation inverses   Drag each matrix below to its inverse. You can do this by multiplying and seeing which pairs have as their product, or by using an inverse solver, but pay attention to the patterns. What is true about the inverse of a matrix which swaps two rows?                      Interchanging inverse generally   Say in your own words what the inverse is of interchanging two rows.     Multiply-and-add operation inverses   Drag each matrix below to its inverse. You can do this by multiplying and seeing which pairs have as their product, or by using an inverse solver, but pay attention to the patterns. What is true about the inverse of a matrix which multiplies a row by a number and adds the result to another row?                     Multiply-and-add inverse generally   Say in your own words what the inverse is of multiplying a row by and adding to another row.     "
},
{
  "id": "theorem-invertible-matrix-theorem",
  "level": "2",
  "url": "sec-elementarymatrices.html#theorem-invertible-matrix-theorem",
  "type": "Theorem",
  "number": "2.5.6",
  "title": "Equivalent to being invertible.",
  "body": " Equivalent to being invertible  Let be an matrix. The following are equivalent:    is invertible.    The reduced row echelon form of is .    There is exactly one solution (not 0 and not infinitely many) to any linear system that has as its coefficient matrix.    For any column matrix with rows, if , then .     is the product of elementary matrices.     "
},
{
  "id": "rq-elementarymatrices-orderofmult",
  "level": "2",
  "url": "sec-elementarymatrices.html#rq-elementarymatrices-orderofmult",
  "type": "Reading Question",
  "number": "1",
  "title": "Order of multiplication.",
  "body": "Order of multiplication   If you have found elementary matrices and which perform row operations, and you want to perform first on a matrix and then to the result perform , which product do you calculate?           Just like with functions , the comes second as we read left-to-right, but that means perform first and plug the result into .  So too with matrix multiplication. By associativity, is the same as , which means multiply and then multiply by the result.           Correct!     "
},
{
  "id": "rq-elementarymatrices-eleminvert",
  "level": "2",
  "url": "sec-elementarymatrices.html#rq-elementarymatrices-eleminvert",
  "type": "Reading Question",
  "number": "2",
  "title": "Elementary matrices and invertibility.",
  "body": "Elementary matrices and invertibility   Every elementary matrix is invertible, and the inverse of an elementary matrix is also an elementary matrix.    The inverse of scaling is scaling by the reciprocal; the inverse of swapping two rows is swapping the same two rows again; the inverse of multiplying a row by and adding to another row is multiplying the row by and adding.   "
},
{
  "id": "rq-elementarymatrices-questions-poll",
  "level": "2",
  "url": "sec-elementarymatrices.html#rq-elementarymatrices-questions-poll",
  "type": "Reading Question",
  "number": "3",
  "title": "Reflection.",
  "body": "Reflection   Reflect on your confidence level.    How confident do you feel with the material you just read about?      Not at all confident or didn't do the reading.      Not very confident.      Somewhat confident.      Mostly confident.      Confident so far and ready to engage more deeply.         Ask a question about the material. What additional information do you think someone would need to become more confident in their understanding?     "
},
{
  "id": "ws-elementarymatrices-2",
  "level": "2",
  "url": "sec-elementarymatrices.html#ws-elementarymatrices-2",
  "type": "Objectives",
  "number": "",
  "title": "",
  "body": "   Practice calculating with elementary matrices , including multiplication and inverses.    Observe and deepen understanding of connections between solutions of linear systems, invertibility, and elementary matrices.    "
},
{
  "id": "ws-elementarymatrices-3-1",
  "level": "2",
  "url": "sec-elementarymatrices.html#ws-elementarymatrices-3-1",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "",
  "body": "  Consider the matrix . Note that performing Gauss-Jordan elimination requires performing in order    .        Calculate , , , and without using technology. What is the inverse of each matrix you found?      Use the sage cell below and modify it to use what you got for and verify that performs on .       Now similarly modify the sage cell below with what you found for , , and and verify that .       What do the calculations in the cell below tell us about and elementary matrices?       Use sage to verify your calculations of the inverses in the first part, and to verify that .    "
},
{
  "id": "ws-elementarymatrices-4-1",
  "level": "2",
  "url": "sec-elementarymatrices.html#ws-elementarymatrices-4-1",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "",
  "body": "  The theorem containing various things equivalent to the property of being invertible is sometimes called The Invertible Matrix Theorem . But the star of the show is really the property of the reduced row echelon form of being . Let's explore a bit how some of the various properties are related.     Suppose you know that is an matrix whose reduced row echelon form is . Set up the augmented matrix . What happens after you row reduce this matrix? What does mean for the invertibility of ?      Suppose you know that is an matrix whose reduced row echelon form is . Now we know that performing a row operation is the same as multiplying by an elementary matrix. Performing a row operation on has the same result as . The reduced row echelon form of being means that there is a sequence of elementary matrices such that . What does this mean about ?      Suppose you know that is an invertible matrix and you have a linear system with as its coefficient matrix. Then you can write where is a column matrix of variables and is your column matrix of constants. How many solutions are there for ? How do you know?      Suppose you know that is an invertible matrix and that is a matrix with rows such that . What does have to equal? How do you know?      Suppose that is an matrix and is a column matrix with rows. Now suppose that the only solution to is that . (Why isn't it possible that there are no solutions?) Set up . After row reducing to solve the system, how many free variables can there be? What does the reduced row echelon form have to look like?    "
},
{
  "id": "ww-elemmatrix1opinv1",
  "level": "2",
  "url": "sec-elementarymatrices.html#ww-elemmatrix1opinv1",
  "type": "Exercise",
  "number": "2.5.1",
  "title": "Scaling row operation with inverse.",
  "body": "Scaling row operation with inverse    Assume that A is a matrix with four rows. Find the elementary matrix E such that E A gives the matrix resulting from A after the given row operation is performed. Then find and give the elementary row operation corresponding to .       The elementary row operation corresponding to is:                        "
},
{
  "id": "ww-elemmatrix1opinv2",
  "level": "2",
  "url": "sec-elementarymatrices.html#ww-elemmatrix1opinv2",
  "type": "Exercise",
  "number": "2.5.2",
  "title": "Interchanging row operation with inverse.",
  "body": "Interchanging row operation with inverse    Assume that A is a matrix with four rows. Find the elementary matrix E such that E A gives the matrix resulting from A after the given row operation is performed. Then find and give the elementary row operation corresponding to .       The elementary row operation corresponding to is:                  "
},
{
  "id": "ww-elemmatrixmanyrowops",
  "level": "2",
  "url": "sec-elementarymatrices.html#ww-elemmatrixmanyrowops",
  "type": "Exercise",
  "number": "2.5.3",
  "title": "Lots of row operation with inverses.",
  "body": "Lots of row operation with inverses    a. Suppose that . Find and .   ,  .  b. Suppose that . Find and .   ,  .  c. Suppose that . Find and .   ,  .  d. Suppose that .  Find and .   ,   .  e. Suppose that .  Find and .   ,   .  f. Suppose that .  Find and .   ,   .       "
},
{
  "id": "ww-elementarymatrixproduct",
  "level": "2",
  "url": "sec-elementarymatrices.html#ww-elementarymatrixproduct",
  "type": "Exercise",
  "number": "2.5.4",
  "title": "Product of elementary matrices.",
  "body": "Product of elementary matrices    Consider the following Gauss-Jordan reduction:   Find   ,   ,   .   .  Write as a product of elementary matrices:            "
},
{
  "id": "ww-elemmatrices-TF",
  "level": "2",
  "url": "sec-elementarymatrices.html#ww-elemmatrices-TF",
  "type": "Exercise",
  "number": "2.5.5",
  "title": "True\/False invertibility.",
  "body": "True\/False invertibility     Determine which of the following statements are true and which are false.    Every invertible matrix can be written as a product of elementary matrices.    The reduced row echelon form of a square matrix is the identity matrix.    The inverse of an elementary matrix is an elementary matrix.    If is an invertible matrix and then         "
},
{
  "id": "exer-elementarymatrices-2",
  "level": "2",
  "url": "sec-elementarymatrices.html#exer-elementarymatrices-2",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": "   Calculate for .           Calculate for .           Calculate for .           True or False?     False. , which means       Calculate .          "
},
{
  "id": "exer-elementarymatrices-3",
  "level": "2",
  "url": "sec-elementarymatrices.html#exer-elementarymatrices-3",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": "  Consider the matrix .     Calculate the elementary matrix which performs .           Calculate the elementary matrix which performs .           Calculate the elementary matrix which performs .           Calculate the elementary matrix which performs .           Calculate the elementary matrix which performs .           Calculate the elementary matrix which performs .           Calculate the elementary matrix which performs .           Calculate the elementary matrix which performs .         "
},
{
  "id": "exer-elementarymatrices-4",
  "level": "2",
  "url": "sec-elementarymatrices.html#exer-elementarymatrices-4",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": "  Suppose you know that where each is an elementary matrix.     What is ?     is the matrix you multiply by to get .     .      Write as a product of elementary matrices.    Start with the equation above and multiply both sides on the left by . What do you get?         "
},
{
  "id": "sec-LUdecomposition",
  "level": "1",
  "url": "sec-LUdecomposition.html",
  "type": "Section",
  "number": "2.6",
  "title": "LU-decomposition",
  "body": " LU-decomposition   In this section, we see some issues that can arise when computers use the algorithm, and we learn some of what computers do to compute solutions more efficiently, especially when we want to solve equations for several different column matrices .    Prepare  Computers are very fast at performing computations, but sometimes our brains are still better. For instance, we know that , but execute the code below to see what Python says.   Adding two decimals   print(0.1+0.2 == 0.3) print(f\"The value of 0.1+0.2 to 25 decimal places is: {0.1+0.2:.25f}\")    Running the code above shows that when using Python, the computer does not have the same answer for 0.1 + 0.2 and 0.3 . Computers perform arithmetic using base 2 numbers, which means that numbers we enter in decimal form, such as , must be converted to base 2. Even though 0.1 has a simple decimal (base 10) form, its representation in base 2 is the repeating decimal , To accurately represent this number inside a computer would require infinitely many digits, but a computer can only hold a finite number of digits. Thus, computers are necessarily using an approximation when internally storing most numbers.  To see this phenomenon in another way, modify and run the code above to display 0.3 itself to 15 decimal places, and then to 25 decimal places.  Because computers use a finite number of digits to approximate numbers, they are also prone to round off errors . Gauss-Jordan elimination, when applied to an matrix, requires approximately operations of multiplying and adding numbers. The examples we have seen are small enough to do by hand, but applications in computer graphics, machine learning, and many others can easily have hundreds or thousands of variables. If we have a matrix, performing the Gauss-Jordan algorithm would take roughly a billion operations, and any errors introduced in an operation early on could accumulate and compound as we use that erroneous number in the next operation, and the next, and the next.  There are a few things computers do to mitigate the issue of numerical errors. You may have noticed that when we perform Gauss-Jordan elimination by hand, we primarily use only two of the three row operations: scaling and multiply-and-add . We swap rows only during the forward steps and only if there was a in a position we needed to use to eliminate nonzero numbers still appearing in the same column.  However, when computers perform the forward steps, they swap rows so that they are using the number with the largest absolute value to eliminate the other entries in the same column. This is called partial pivoting , and it helps to reduce the number and magnitude of round off errors.  Another thing computers do to mitigate operational errors is rewrite the coefficient matrix as a product of matrices which are easier to work with, not unlike in algebra when we solve a quadratic equation by factoring it. We are going to use triangular matrices in this section, but there are many other ways to factor, or decompose , a matrix and each factorization is useful in various different applications and objectives.  Since we are talking about triangular matrices, let's make sure we know what those are.  What are triangular matrices?    Choose the best description of the matrix .      Lower triangular    A lower triangular matrix must have 0's in the entries above the main diagonal. It can have any number, zero or nonzero, in the other positions.  Lower triangular matrices have the form .      Upper triangular    An upper triangular matrix must have 0's in the entries below the main diagonal. It can have any number, zero or nonzero, in the other positions.  Upper triangular matrices have the form .      Both upper and lower triangular.    A matrix which is both lower triangular and upper triangular matrix must have 0's in the entries below and above the main diagonal. It can have any number, zero or nonzero, in the other positions.  Matrices that are both upper and lower triangular have the form .      Neither upper nor lower triangular.    There are 0's below the main diagonal so this is some kind of triangular.        Choose the best description of the matrix .      Lower triangular    A lower triangular matrix must have 0's in the entries above the main diagonal. It can have any number, zero or nonzero, in the other positions.  Lower triangular matrices have the form .      Upper triangular    An upper triangular matrix must have 0's in the entries below the main diagonal. It can have any number, zero or nonzero, in the other positions.  Upper triangular matrices have the form .      Both upper and lower triangular.    A matrix which is both lower triangular and upper triangular matrix must have 0's in the entries below and above the main diagonal. It can have any number, zero or nonzero, in the other positions.  Matrices that are both upper and lower triangular have the form .      Neither upper nor lower triangular.    There is a nonzero entry above the main diagonal, in the first row and third column, and also below the main diagonal in the second row and first column. This matrix is not triangular.        Choose the best description of the matrix .      Lower triangular    There are zeros above the main diagonal, but there's a better choice.      Upper triangular    There are zeros below the main diagonal, but there's a better choice.      Both upper and lower triangular.    There are zeros both above and below the main diagonal. We also call such a matrix diagonal .      Neither upper nor lower triangular.    There are 0's below (and above) the main diagonal, so this is some kind of triangular.        Choose the best description of the matrix .      Lower triangular    A lower triangular matrix must have 0's in the entries above the main diagonal. It can have any number, zero or nonzero, in the other positions.      Upper triangular    There is a nonzero entry below the main diagonal, in the second row and first column, for example.      Both upper and lower triangular.    There is a nonzero entry below the main diagonal, in the second row and first column, for example.      Neither upper nor lower triangular.    There are 0's above the main diagonal so this is some kind of triangular. The entries on the main diagonal can be zero or nonzero.           Recall and where we used elementary matrices to row reduce a matrix. In LU-decomposition, we are going to stop after the forward steps and not continue to full reduced row echelon form.  Solving a system with an LU factorization   Suppose we are trying to solve the system , which we can view as , for , , and .  We know we could do this by augmenting and row reducing, or by calculating the inverse of the coefficient matrix. Let's see yet another way to solve this system.  Take the coefficient matrix and use an elementary matrix to perform the first step in Gauss-Jordan elimination, which is . Then and is . Notice that is lower-triangular and is upper-triangular. Define .  In our work in as a whole and in in particular, we saw that every elementary matrix is invertible. In fact, , which is also lower-triangular. Define .  Then , a lower-triangular matrix multiplied by an upper-triangular matrix.  How has this helped us? A linear system with a triangular coefficient matrix does not need to be row reduced any further. It is more efficient to solve such a system with substitution, coming full-circle to what we did back in before we ever learned about elimination and row operations.  We are trying to solve the linear system , and we have seen how to rewrite as , so we are now trying to solve . We know that is a matrix and is a matrix. That means that is also a matrix. For the moment, let's define that , so that the system we're trying to solve is To see how this is easier to solve, look at the first row of . We see that , which means that . The equation from the second row is , and we can substitute the value of we just found and thus .  We are trying to solve for and we now know what equals, but remember that we defined , which means that . Looking at the second row, we can see that , and then substituting into the equation from the first row gives us , so , which means that . Then the solution to is .    Why would we want to do this when we already have multiple other ways to solve a linear system? For small systems, we wouldn't. However, computers tend to use LU-decomposition when you ask them to solve matrix systems for the following reason. Suppose we had an matrix and needed to solve two systems and . Solving the first system would take about a billion operations, no matter whether we used Gauss-Jordan elimination or LU-decomposition. But if we used LU-decomposition and already had , then solving the second system would only take about a million more operations, instead of another billion to perform all of Gauss-Jordan elimination again on the second system. That is a significant time and memory savings, and also there's orders of magnitude fewer opportunities for numerical errors to propagate.  Let's see another example for a larger matrix.    Find an -decomposition for .    The row operations we need to perform are                          We could perform one more row operation to scale the third row and put a 1 in the last position, but this is already an upper triangular matrix so we can just stop here and then . Then using elementary matrices to perform the row operations would result in , where , and are the elementary matrices . This means that . We can use Sage to verify our computations.     Let's put it all together and summarize the process.   Solving systems with LU-decomposition  If a square matrix doesn't require any interchanging of rows to put it into reduced row echelon form, then   Use elementary matrices to perform the forward steps of Gauss-Jordan elimination. This means you'll have something of the form , where is upper triangular.    Elementary matrices which perform the forward steps of Gauss-Jordan elimination (scale or multiply-and-add) are all lower-triangular, and so are their inverses. The product of lower triangular matrices is still lower triangular.    Multiply by the inverses in reverse order to obtain , where is a lower triangular matrix.    To solve , we replace with and then with . We can then solve the simpler systems and with substitution.      We will practice the method more and explore what happens if we do need to swap rows during the Participate material.   Triangular forms   Match each matrix below to all the descriptions that apply to it.         Upper triangular  Lower triangular  Not triangular    Parsons Problem, LU-decomposition   Put the correct steps in the correct order to find an LU-decomposition of .     The forward steps of Gauss-Jordan elimination are , then , then .     Using elementary matrices to perform the row operations means that .    Using elementary matrices to perform the row operations means that .      Solving for gives , and the product of lower triangular matrices is still lower triangular, so .    Solving for gives , and the product of lower triangular matrices is still lower triangular, so .       Reflection   Reflect on your confidence level.    How confident do you feel with the material you just read about?      Not at all confident or didn't do the reading.      Not very confident.      Somewhat confident.      Mostly confident.      Confident so far and ready to engage more deeply.         Ask a question about the material. What additional information do you think someone would need to become more confident in their understanding?          Summary     Computers are fast and can store lots of information, but they are prone to numerical errors due to binary representations and the use of finitely many digits. We can mitigate the effect of numerical errors using partial pivoting and by reducing the number of operations needed where errors could spread.    Every square matrix which doesn't need any row swap operations to perform Gauss-Jordan elimination can be expressed as the product of a lower triangular matrix with an upper triangular matrix.    Computers tend to solve linear systems using LU decomposition for both computational efficiency and the reduction of numerical errors.         "
},
{
  "id": "active-code-python-add",
  "level": "2",
  "url": "sec-LUdecomposition.html#active-code-python-add",
  "type": "Listing",
  "number": "2.6.1",
  "title": "Adding two decimals",
  "body": " Adding two decimals   print(0.1+0.2 == 0.3) print(f\"The value of 0.1+0.2 to 25 decimal places is: {0.1+0.2:.25f}\")   "
},
{
  "id": "triangularmatrices",
  "level": "2",
  "url": "sec-LUdecomposition.html#triangularmatrices",
  "type": "Activity",
  "number": "2.6.2",
  "title": "What are triangular matrices?",
  "body": "What are triangular matrices?    Choose the best description of the matrix .      Lower triangular    A lower triangular matrix must have 0's in the entries above the main diagonal. It can have any number, zero or nonzero, in the other positions.  Lower triangular matrices have the form .      Upper triangular    An upper triangular matrix must have 0's in the entries below the main diagonal. It can have any number, zero or nonzero, in the other positions.  Upper triangular matrices have the form .      Both upper and lower triangular.    A matrix which is both lower triangular and upper triangular matrix must have 0's in the entries below and above the main diagonal. It can have any number, zero or nonzero, in the other positions.  Matrices that are both upper and lower triangular have the form .      Neither upper nor lower triangular.    There are 0's below the main diagonal so this is some kind of triangular.        Choose the best description of the matrix .      Lower triangular    A lower triangular matrix must have 0's in the entries above the main diagonal. It can have any number, zero or nonzero, in the other positions.  Lower triangular matrices have the form .      Upper triangular    An upper triangular matrix must have 0's in the entries below the main diagonal. It can have any number, zero or nonzero, in the other positions.  Upper triangular matrices have the form .      Both upper and lower triangular.    A matrix which is both lower triangular and upper triangular matrix must have 0's in the entries below and above the main diagonal. It can have any number, zero or nonzero, in the other positions.  Matrices that are both upper and lower triangular have the form .      Neither upper nor lower triangular.    There is a nonzero entry above the main diagonal, in the first row and third column, and also below the main diagonal in the second row and first column. This matrix is not triangular.        Choose the best description of the matrix .      Lower triangular    There are zeros above the main diagonal, but there's a better choice.      Upper triangular    There are zeros below the main diagonal, but there's a better choice.      Both upper and lower triangular.    There are zeros both above and below the main diagonal. We also call such a matrix diagonal .      Neither upper nor lower triangular.    There are 0's below (and above) the main diagonal, so this is some kind of triangular.        Choose the best description of the matrix .      Lower triangular    A lower triangular matrix must have 0's in the entries above the main diagonal. It can have any number, zero or nonzero, in the other positions.      Upper triangular    There is a nonzero entry below the main diagonal, in the second row and first column, for example.      Both upper and lower triangular.    There is a nonzero entry below the main diagonal, in the second row and first column, for example.      Neither upper nor lower triangular.    There are 0's above the main diagonal so this is some kind of triangular. The entries on the main diagonal can be zero or nonzero.         "
},
{
  "id": "ex-LU-decomp1",
  "level": "2",
  "url": "sec-LUdecomposition.html#ex-LU-decomp1",
  "type": "Example",
  "number": "2.6.3",
  "title": "Solving a system with an LU factorization.",
  "body": "Solving a system with an LU factorization   Suppose we are trying to solve the system , which we can view as , for , , and .  We know we could do this by augmenting and row reducing, or by calculating the inverse of the coefficient matrix. Let's see yet another way to solve this system.  Take the coefficient matrix and use an elementary matrix to perform the first step in Gauss-Jordan elimination, which is . Then and is . Notice that is lower-triangular and is upper-triangular. Define .  In our work in as a whole and in in particular, we saw that every elementary matrix is invertible. In fact, , which is also lower-triangular. Define .  Then , a lower-triangular matrix multiplied by an upper-triangular matrix.  How has this helped us? A linear system with a triangular coefficient matrix does not need to be row reduced any further. It is more efficient to solve such a system with substitution, coming full-circle to what we did back in before we ever learned about elimination and row operations.  We are trying to solve the linear system , and we have seen how to rewrite as , so we are now trying to solve . We know that is a matrix and is a matrix. That means that is also a matrix. For the moment, let's define that , so that the system we're trying to solve is To see how this is easier to solve, look at the first row of . We see that , which means that . The equation from the second row is , and we can substitute the value of we just found and thus .  We are trying to solve for and we now know what equals, but remember that we defined , which means that . Looking at the second row, we can see that , and then substituting into the equation from the first row gives us , so , which means that . Then the solution to is .   "
},
{
  "id": "subsec-LUdecomposition-bc-16",
  "level": "2",
  "url": "sec-LUdecomposition.html#subsec-LUdecomposition-bc-16",
  "type": "Example",
  "number": "2.6.4",
  "title": "",
  "body": "  Find an -decomposition for .    The row operations we need to perform are                          We could perform one more row operation to scale the third row and put a 1 in the last position, but this is already an upper triangular matrix so we can just stop here and then . Then using elementary matrices to perform the row operations would result in , where , and are the elementary matrices . This means that . We can use Sage to verify our computations.    "
},
{
  "id": "rq-LU-triangularforms",
  "level": "2",
  "url": "sec-LUdecomposition.html#rq-LU-triangularforms",
  "type": "Reading Question",
  "number": "1",
  "title": "Triangular forms.",
  "body": "Triangular forms   Match each matrix below to all the descriptions that apply to it.         Upper triangular  Lower triangular  Not triangular   "
},
{
  "id": "parsons-LU-decomp2",
  "level": "2",
  "url": "sec-LUdecomposition.html#parsons-LU-decomp2",
  "type": "Reading Question",
  "number": "2",
  "title": "Parsons Problem, LU-decomposition.",
  "body": "Parsons Problem, LU-decomposition   Put the correct steps in the correct order to find an LU-decomposition of .     The forward steps of Gauss-Jordan elimination are , then , then .     Using elementary matrices to perform the row operations means that .    Using elementary matrices to perform the row operations means that .      Solving for gives , and the product of lower triangular matrices is still lower triangular, so .    Solving for gives , and the product of lower triangular matrices is still lower triangular, so .     "
},
{
  "id": "rq-LUdecomposition-questions-poll",
  "level": "2",
  "url": "sec-LUdecomposition.html#rq-LUdecomposition-questions-poll",
  "type": "Reading Question",
  "number": "3",
  "title": "Reflection.",
  "body": "Reflection   Reflect on your confidence level.    How confident do you feel with the material you just read about?      Not at all confident or didn't do the reading.      Not very confident.      Somewhat confident.      Mostly confident.      Confident so far and ready to engage more deeply.         Ask a question about the material. What additional information do you think someone would need to become more confident in their understanding?     "
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
