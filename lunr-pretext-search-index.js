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
  "body": " This book wouldn't exist without the open source and Creative Commons licensed work of Gregory Hartman and David Austin.  I have learned much about what to include and how to teach the material for our audience from my colleagues David Burton, John Coleman, Justin Greenly, and Rachel Perrier.  I am indebted to Rob Beezer and David Farmer for PreTeXt, Alex Jordan for WeBWorK integration and help, and Brad Miller for Runestone. The platform affects what you write, and while I was writing I had in my mind the student and instructor experience of the html book being hosted on Runestone.  Finally, I am grateful for the encouragement, ideas, and technical help provided by David Austin, Matt Boelkins, Steven Clontz, and Oscar Levin, and for Franciscan University of Steubenville granting me a sabbatical.  "
},
{
  "id": "sec-lin-eqn-substitution",
  "level": "1",
  "url": "sec-lin-eqn-substitution.html",
  "type": "Section",
  "number": "1.1",
  "title": "Linear Equations and Substitution",
  "body": " Linear Equations and Substitution   Normally, there will be some Prepare material before you are asked to Participate, but this is the first section. Let's begin, not prepare to begin.  We start by examining a very common and useful type of equation and see one way of solving a collection of such equations.    Participate  Perhaps you've seen images like the ones shown below.    a collage of different math problems using pictures of food   A collage of different math problems using pictures of food   Images like the ones above have been frequently shared on social media, prompting this mathematician to reflect that algebra seems more palatable when it's disguised as puzzles involving food.    girl making a bad face at math with variables x, y, z, and an interested face at doing math with food   Disguising math as food puzzles seems more palatable   Most of the images in the collage above also contain an element of competitiveness of being able to figure out something that other people have a hard time with. Many of the puzzles in the collage say something like Only 1 in 7 can solve this! or 95% of people will fail to answer.  Many of them also contain a visual trick which causes extra confusion or controversy. For example, consider the puzzle in this image.  Solve a fruit puzzle    an algebra puzzle involving food, claiming most people can't solve it    The image above says that three apples total 18, while an apple plus two bunches of bananas total 14, and a bunch of bananas minus cherries equals 2.  Then it asks a question: how much does cherries plus an apple plus a bunch of bananas equal? The answer is        Each apple is worth 6, each bunch of 4 bananas is worth 4, so each banana is worth 1, and each group of cherries is worth 2. There are only 3 bananas in the question to answer, so 2+6+3=11.       You did the algebra correctly! However, this puzzle also contains a visual trick, designed to make people get the question wrong. Earlier on, there are 4 bananas in each bunch of bananas, so each banana is worth 1. But in the question you are asked to answer, the bunch of bananas picture has changed and contains 3 bananas, not 4.      The food puzzle above was really setting up a number of algebraic equations. Let's see how we can translate the puzzle into mathematical equations, with letters standing in for the images or words. We could choose any letters we like, but we'll use to represent apples , to mean bunch of bananas , and to stand for cherries.     Three apples add up to 18.     Apple plus 2 bunches of bananas equals 14.     Bunch of bananas minus cherries equals 2.     Solving the puzzle meant finding values for each of the foods that made all the equations true, that is, finding the values of , , and . And then also realizing that the picture of bunch of bananas changed so that we really needed to find the value of each banana.   Almost all the food puzzles are these same kinds of equations, called linear equations . Before defining what that means in general, let's explore another example from both graphical and algebraic perspectives.   Consider the equation . When and , the equation is true, so I've plotted the point . Think of at least more values of and that satisfy the equation, and plot them as points. Typing the point in a row below in the format will plot the point.   Solutions to the equation    What do you notice about the visual relationship between the points on the graph, that is, points that satisfy the equation ?   Scroll down to the lower rows of the graph interactive, activate and animate the point found there.   Now consider the equation . When and , the equation is true, so I've plotted the point . Think of at least more values of and that satisfy the equation (your answers don't have to be whole numbers!), and plot them as points by typing each one in format in a row below.   Solutions to the equation    What does the graph of look like?   The graphs of and are shown in the image below.   Graph of two lines and their point of intersection    a=1\/3  f(x) = 2-x  g(x) = (15-15*x)\/6               What does the point of intersection mean, and what are its coordinates?   Sony and The Interview   Below is an image of part of a New York Times article about a movie The Interview    Snapshot of part of an article from a major news source   The article is about the release of the movie, which generated controversy and so was released direct to streaming. Sony reported that   the movie made about 15 million dollars total, split between sales which cost $15 and rentals which cost $6, and    there were about 2 million transactions in total.     Then the author of the article claimed that Sony did not release how many of the transactions were rentals and how many were sales. Can you do better than the author of the article and figure out how many of the transactions were sales and how many were rentals?    Try using for the number of sales and for the number of rentals. What equations do you get from the information about the total number of transactions, and total dollar amount earned? Perhaps refer to .    If is the number of millions of sales and is the number of millions of rentals, then million transactions. Also, million dollars of revenue, since each sale cost $15 and each rental cost $6.  We can solve this set of two equations by substitution : solving for one of the variables in one equation and substituting the resulting expression into the other equation. The strategy is to use one equation to reduce the number of variables in the second equation, so that we obtain an equation with just one variable that we can solve in our usual ways.  Rearranging the first equation we get that , and then plugging that in for in the second equation gives .  Multiplying out gives , and combining like terms results in . Subtracting the 12 from both sides gives , and dividing both sides by 9 yields .  So one-third of a million, or roughly transactions were sales. To find the number of rentals, we can substitute this value back into either equation, but seems easier. Then , which means that , and of a million is roughly transactions.     Jar of multicolored marbles   Suppose a jar contains red, blue and green marbles. You are told that there are a total of marbles in the jar; there are twice as many red marbles as green ones; the number of blue marbles is the same as the sum of the red and green marbles. How many marbles of each color are there?    Let's let represent the number of red marbles, and let and denote the number of blue and green marbles, respectively. We can use the given statements about the marbles in the jar to create some equations.  Since we know there are marbles in the jar, we know that .  Also, we are told that there are twice as many red marbles as green ones, so we know that .  Finally, we know that the number of blue marbles is the same as the sum of the red and green marbles, so we have .  Collecting these equations together and giving them numbers to make it easier to refer to them, we have   There are many ways to use this information to find the solution. One way is to combine ideas from equations and ; in replace with . This gives us .  We can then combine equations , and by replacing in with as we did before, and replacing with to get   We can now use equation to find and ; we know from that and then since , we easily find that .    All of the examples we've seen so far, such as or , have involved linear equations . It turns out that linear equations are at the heart of many modern applications: data science, sports analytics, graphics, machine learning, artificial intelligence, and so on. Let's define what linear equations are.  Linear Equation   linear equation  coefficients  constant  A linear equation is an equation that can be written in the form where the are variables (the unknowns), the are coefficients (numbers), and is a constant (also a number).    Let's look at some examples of equations and see if we can tell what makes an equation linear or not.  Multiple-Choice, Linear or Nonlinear  For each of the following equations, use to decide whether the equation is linear or not.         Linear    The equation has the correct form: it is a sum of variables multiplied by numbers (that happen to be 1), which add up to equal a constant.      Not linear    The equation does have the form , because it is a sum of variables multiplied by numbers (that happen to be 1), which add up to equal a constant.           Linear    The equation does not have the correct form because the variables and are multiplied together, not multiplied by numbers and added.      Not linear    The variables can't be multiplied together in a linear equation.           Linear    It doesn't matter for being linear or not that we have to rearrange the equation to see the correct form appear.      Not linear    It doesn't matter for being linear or not that we have to rearrange the equation to see the correct form appear. This is the same as , which is a sum of variables multiplied by numbers (that happen to be 1), which add up to equal a constant.           Linear    The equation does not have the correct form; the variables in a linear equation cannot be raised to exponents other than 1.      Not linear    The variables in a linear equation cannot be raised to exponents other than 1.           Linear    The equation does not have the correct form; the variables in a linear equation can't be arguments of functions like sine or natural log.      Not linear    The variables in a linear equation can't be arguments of functions like sine or natural log.           Linear    The variables are being multiplied by numbers and added up to equal a number.      Not linear    The variables are , , and we can assume . They are being multiplied by numbers, since since , , and 0 are numbers, and are being added up to equal a number, since is a number.     In all of our examples, we didn't have just one linear equation but rather a collection of linear equations we used together. A set of linear equations has a name we will define now.  System of Linear Equations   system of linear equations definition  system of linear equations solution  solution  A system of linear equations is a set of linear equations that involves the same set of variables.  A solution to a system of linear equations is a set of values for the variables such that each equation in the system is satisfied.    For example, in Example , when we answered how many marbles of each color are there?, we were also answering find a solution to a system of linear equations, where the linear system in the problem was    Anotherp example of a system of linear equations is   It is important to notice that not all equations used all of the variables (it is more accurate to say that the coefficients can be , so the last equation could have been written as ). Also, just because we have four unknowns does not mean we have to have four equations. We could have had fewer, even just one, and we could have had more.   At this stage, we have yet to discuss how to efficiently find a solution to a system of linear equations. That is a goal for the upcoming sections. Right now we focus on identifying linear equations and solving some smaller systems of equations using substitution.    Summary      Linear equations are equations which can be written in the form , where the are variables, the are coefficients, and is a constant.    A system of linear equations is a set of linear equations referring to the same variables. Solving a system of linear equations means finding values for the variables such that all the equations are true with those values.    Systems of linear equations are behind many important applications in physics, engineering, and computer science, and solving linear systems will be a significant part of this course. For now though, we use substitution and wait for a better way.       Practice   Find the point of intersection    Find the point of intersection of the lines and   a graph with axes depicting two intersecting lines  The point of intersection is where and .                  Two variable substitution    The solution of the linear system   is  and                  Marbles in a Jar    Suppose a jar contains red, blue and green marbles. You are told that there are a total of marbles in the jar; there are twice as many red marbles as green ones; the number of blue marbles is the same as the sum of the red and green marbles. How many marbles of each color are there?                          Substitution in a 3-variable system    Solve the system:    , ,                        Another 3-variable system    Solve the system:    , ,                         Additional Practice  Linear equation: yes or no   In the following exercises, state whether or not the given equation is linear.        y        n        y        y        n        n        y        n        y        n    Solve the System   In the following exercises, solve the system of linear equations.                                          A farmer looks out his window at his chickens and pigs. He tells his daughter that he sees heads and legs. How many chickens and pigs does the farmer have?    chickens and pigs    A lady buys trinkets at a yard sale. The cost of each trinket is either or . If she spends , how many of each type of trinket does she buy?    of the trinkets, of the trinkets    "
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
  "body": "Solve a fruit puzzle    an algebra puzzle involving food, claiming most people can't solve it    The image above says that three apples total 18, while an apple plus two bunches of bananas total 14, and a bunch of bananas minus cherries equals 2.  Then it asks a question: how much does cherries plus an apple plus a bunch of bananas equal? The answer is        Each apple is worth 6, each bunch of 4 bananas is worth 4, so each banana is worth 1, and each group of cherries is worth 2. There are only 3 bananas in the question to answer, so 2+6+3=11.       You did the algebra correctly! However, this puzzle also contains a visual trick, designed to make people get the question wrong. Earlier on, there are 4 bananas in each bunch of bananas, so each banana is worth 1. But in the question you are asked to answer, the bunch of bananas picture has changed and contains 3 bananas, not 4.     "
},
{
  "id": "graphing-eqns-sony",
  "level": "2",
  "url": "sec-lin-eqn-substitution.html#graphing-eqns-sony",
  "type": "Activity",
  "number": "1.1.4",
  "title": "",
  "body": " Consider the equation . When and , the equation is true, so I've plotted the point . Think of at least more values of and that satisfy the equation, and plot them as points. Typing the point in a row below in the format will plot the point.   Solutions to the equation    What do you notice about the visual relationship between the points on the graph, that is, points that satisfy the equation ?   Scroll down to the lower rows of the graph interactive, activate and animate the point found there.   Now consider the equation . When and , the equation is true, so I've plotted the point . Think of at least more values of and that satisfy the equation (your answers don't have to be whole numbers!), and plot them as points by typing each one in format in a row below.   Solutions to the equation    What does the graph of look like?   The graphs of and are shown in the image below.   Graph of two lines and their point of intersection    a=1\/3  f(x) = 2-x  g(x) = (15-15*x)\/6               What does the point of intersection mean, and what are its coordinates?  "
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
  "body": " Jar of multicolored marbles   Suppose a jar contains red, blue and green marbles. You are told that there are a total of marbles in the jar; there are twice as many red marbles as green ones; the number of blue marbles is the same as the sum of the red and green marbles. How many marbles of each color are there?    Let's let represent the number of red marbles, and let and denote the number of blue and green marbles, respectively. We can use the given statements about the marbles in the jar to create some equations.  Since we know there are marbles in the jar, we know that .  Also, we are told that there are twice as many red marbles as green ones, so we know that .  Finally, we know that the number of blue marbles is the same as the sum of the red and green marbles, so we have .  Collecting these equations together and giving them numbers to make it easier to refer to them, we have   There are many ways to use this information to find the solution. One way is to combine ideas from equations and ; in replace with . This gives us .  We can then combine equations , and by replacing in with as we did before, and replacing with to get   We can now use equation to find and ; we know from that and then since , we easily find that .   "
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
  "body": "Multiple-Choice, Linear or Nonlinear  For each of the following equations, use to decide whether the equation is linear or not.         Linear    The equation has the correct form: it is a sum of variables multiplied by numbers (that happen to be 1), which add up to equal a constant.      Not linear    The equation does have the form , because it is a sum of variables multiplied by numbers (that happen to be 1), which add up to equal a constant.           Linear    The equation does not have the correct form because the variables and are multiplied together, not multiplied by numbers and added.      Not linear    The variables can't be multiplied together in a linear equation.           Linear    It doesn't matter for being linear or not that we have to rearrange the equation to see the correct form appear.      Not linear    It doesn't matter for being linear or not that we have to rearrange the equation to see the correct form appear. This is the same as , which is a sum of variables multiplied by numbers (that happen to be 1), which add up to equal a constant.           Linear    The equation does not have the correct form; the variables in a linear equation cannot be raised to exponents other than 1.      Not linear    The variables in a linear equation cannot be raised to exponents other than 1.           Linear    The equation does not have the correct form; the variables in a linear equation can't be arguments of functions like sine or natural log.      Not linear    The variables in a linear equation can't be arguments of functions like sine or natural log.           Linear    The variables are being multiplied by numbers and added up to equal a number.      Not linear    The variables are , , and we can assume . They are being multiplied by numbers, since since , , and 0 are numbers, and are being added up to equal a number, since is a number.    "
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
  "body": "Find the point of intersection    Find the point of intersection of the lines and   a graph with axes depicting two intersecting lines  The point of intersection is where and .                 "
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
  "body": "     y  "
},
{
  "id": "exer-lin-eqn-subs-2-4",
  "level": "2",
  "url": "sec-lin-eqn-substitution.html#exer-lin-eqn-subs-2-4",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": "     n  "
},
{
  "id": "exer-lin-eqn-subs-2-5",
  "level": "2",
  "url": "sec-lin-eqn-substitution.html#exer-lin-eqn-subs-2-5",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": "     y  "
},
{
  "id": "exer-lin-eqn-subs-2-6",
  "level": "2",
  "url": "sec-lin-eqn-substitution.html#exer-lin-eqn-subs-2-6",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": "     y  "
},
{
  "id": "exer-lin-eqn-subs-2-7",
  "level": "2",
  "url": "sec-lin-eqn-substitution.html#exer-lin-eqn-subs-2-7",
  "type": "Exercise",
  "number": "5",
  "title": "",
  "body": "     n  "
},
{
  "id": "exer-lin-eqn-subs-2-8",
  "level": "2",
  "url": "sec-lin-eqn-substitution.html#exer-lin-eqn-subs-2-8",
  "type": "Exercise",
  "number": "6",
  "title": "",
  "body": "     n  "
},
{
  "id": "exer-lin-eqn-subs-2-9",
  "level": "2",
  "url": "sec-lin-eqn-substitution.html#exer-lin-eqn-subs-2-9",
  "type": "Exercise",
  "number": "7",
  "title": "",
  "body": "     y  "
},
{
  "id": "exer-lin-eqn-subs-2-10",
  "level": "2",
  "url": "sec-lin-eqn-substitution.html#exer-lin-eqn-subs-2-10",
  "type": "Exercise",
  "number": "8",
  "title": "",
  "body": "     n  "
},
{
  "id": "exer-lin-eqn-subs-2-11",
  "level": "2",
  "url": "sec-lin-eqn-substitution.html#exer-lin-eqn-subs-2-11",
  "type": "Exercise",
  "number": "9",
  "title": "",
  "body": "     y  "
},
{
  "id": "exer-lin-eqn-subs-2-12",
  "level": "2",
  "url": "sec-lin-eqn-substitution.html#exer-lin-eqn-subs-2-12",
  "type": "Exercise",
  "number": "10",
  "title": "",
  "body": "     n  "
},
{
  "id": "exer-lin-eqn-subs-3-3",
  "level": "2",
  "url": "sec-lin-eqn-substitution.html#exer-lin-eqn-subs-3-3",
  "type": "Exercise",
  "number": "11",
  "title": "",
  "body": "         "
},
{
  "id": "exer-lin-eqn-subs-3-4",
  "level": "2",
  "url": "sec-lin-eqn-substitution.html#exer-lin-eqn-subs-3-4",
  "type": "Exercise",
  "number": "12",
  "title": "",
  "body": "        "
},
{
  "id": "exer-lin-eqn-subs-3-5",
  "level": "2",
  "url": "sec-lin-eqn-substitution.html#exer-lin-eqn-subs-3-5",
  "type": "Exercise",
  "number": "13",
  "title": "",
  "body": "        "
},
{
  "id": "exer-lin-eqn-subs-3-6",
  "level": "2",
  "url": "sec-lin-eqn-substitution.html#exer-lin-eqn-subs-3-6",
  "type": "Exercise",
  "number": "14",
  "title": "",
  "body": "        "
},
{
  "id": "exer-lin-eqn-subs-4",
  "level": "2",
  "url": "sec-lin-eqn-substitution.html#exer-lin-eqn-subs-4",
  "type": "Exercise",
  "number": "15",
  "title": "",
  "body": " A farmer looks out his window at his chickens and pigs. He tells his daughter that he sees heads and legs. How many chickens and pigs does the farmer have?    chickens and pigs  "
},
{
  "id": "exer-lin-eqn-subs-5",
  "level": "2",
  "url": "sec-lin-eqn-substitution.html#exer-lin-eqn-subs-5",
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
  "body": " Matrices and Elimination   We saw that substitution is one way of solving systems of linear equations, but the method of substituion is not very practical when there are more than 2 or 3 varibables. In this section, we start learning a more generalizable and easy to automate way of solving systems of linear equations.    Prepare   Mathematicians often see solutions to given problems and ask What if ? What are the right kinds of what if questions to ask? It's impossible to know at first, and so mathematicians very often ask wrong questions. That is, they often ask questions and find that the answer isn't particularly interesting. However, asking enough questions often will result in some good right questions. The answers to right questions help us see a bigger picture more clearly and usually lead to something applicable beyond the initial problem. The moral of the story is: don't be afraid of doing something wrong because mathematicians do it all the time!   Recall that in the previous section, we worked through a few examples of solving linear equations using substitution; that is, we solved for one variable in one equation and substituted the resulting expression into another equation. What is a good question to ask after seeing Example ? Here are two possibilities (though not the only two):   Did we really have to call the red balls ? Could we call them ?    What if we had balls at the start instead of ?     Let's look at the first question. Would the solution to our problem change if we called the red balls ? No, we picked the letter r because it made us think of red , but we could have picked , , or any other letter instead. The process of solving would have been exactly the same if we used q for the number of red balls, and at the end we'd find that , and we would know that this meant that we had red balls.  Now let's look at the second question. Suppose we had balls, but the other relationships stayed the same. How would the situation and solution change? Let's compare the original equations to the new equations.    Original  New                The process of solving would stay exactly the same, substituting for in the third equation to get that , and then substituting for both and in the first equation to get that . The only difference is that total is instead of , so the value of is twice as much, and thus also the values of and are twice what they had been.  Two conclusions from answering these two questions are:   it doesn't matter what we call our variables, and    while changing the constants in the equations changes the solution, they don't really change the method of how we solve these equations.     In fact, it is a great discovery to realize that all that matters about a linear system are the constants and the coefficients of the equations. By systematically handling these, we can solve any set of linear equations in a way that saves on processing power, whether the processing is being done by a human or by a computer.  Clickable Areas, Coefficients  Identify (by clicking, or by circling) all of the coefficients in this linear equation.               The coefficients are the numbers that are multiplied by the variables.   Clickable Areas, Constants  Identify (by clicking, or by circling) all of the constants in this linear equation.                 The constants are the numbers that aren't multiplied by any variables.     Method of Elimination (of Variables)  Let's return to Example . As we mentioned before, there isn't just one right way of finding the solution to this system of equations. Here is another way to do it.  First, we rewrite the equations so that all variables are on the left of the equal sign and all constants are on the right. Also, for a bit more consistency, let's list the variables in alphabetical order in each equation. Therefore we can write the equations as   Now, let's add the first and last equations together, and write the result as a new third equation. This gives us: . A nice feature of this is that the only equation with a in it is the first equation. One could say that we eliminated the from the third equation.  Next let's multiply the second equation by . This gives   Use equations to eliminate variables  Consider the equations We want to use the second equation to eliminate the variable from the first equation. What step should we take?     Multiply the second equation by and add to the first equation.    This would make the first equation , which didn't eliminate the .      Multiply the second equation by and add to the first equation.    This gives , which eliminates the .      Multiply the second equation by and add to the first equation.    This makes the first equation , which eliminates the in the first equation, not the .     Consider the equations We want to use the top equation to eliminate the variable from the bottom equation. What step should we take?     Multiply the top equation by and add to the bottom equation.    This would make the bottom equation , which didn't eliminate the .      Multiply the top equation by and subtract from the bottom equation.    This would eliminate the , but to use this method systematically, we're always going to want to multiply and add , not subtract. Subtracting is the same as adding though!      Multiply the top equation by and add to the bottom equation.    This makes the bottom equation , which eliminates the from the bottom equation.     Let's now do both of those steps in a row to eliminate the from the first and third equations; multiply the second equation by and add that to the first equation, replacing the first equation with that sum, and multiply the second equation by and add that to the third equation, replacing the third equation. Our new system of equations now becomes   We can now multiply the third equation by and find that ; let's make this our new third equation, giving   Now let's eliminate the 's in the first and second equation. To remove the in the first equation, let's multiply the third equation by and add the result to the first equation, replacing the first equation with that sum. To remove the in the second equation, we can multiply the third equation by and add that to the second equation, replacing the second equation with that sum. This gives us: . We have arrived at the same result as when we solved this problem in Example , even though our steps were different.    Why did we need to learn another method (elimination) when our old method (substitution) worked and got the same answer?  Everyone thinks of a different way to solve a system using substitution Mary might choose a different variable to solve for than John chose, and Alicia might start with a different equation, and Steven might substitute into a different equation. When there are more than 2 or 3 variables, substituting gets really laborious, and it's not always clear what steps should come next in order to make progress in solving. Elimination can be made into an algorithm, a set of steps to follow in a particular order that will always result in an answer. Even if sometimes the answer is that there is no solution, or that there are infinitely many solutions. This is both comforting and practical; if you have to work a problem by hand, it's nice to know you'll be able to complete it as long as you remember the steps, and if you don't have to work the problem by hand, an algorithm means it's possible to program a computer to do the steps for you.   Parsons Problem, Elimination vs Substitution  Solve the linear system using the method of elimination.     Multiply the first equation by and add the result to the second equation, yielding     Add to the other side of the first equation, getting , and divide both sides by , resulting in .      Substitute the expression for from the first equation into the second equation, yielding , which simplifies to .    Multiply both sides of the second equation by , yielding       Substitute the value of from the second equation into the first equation, resulting in , so , which means that .    Multiply the second equation by and add the result to the first equation, resulting in , and multiplying both sides by yields .      Matrices  We noticed earlier that there is nothing special about the letters , and ; we could have used , and , or , and . Our work demonstrating the method of elimination suggests that we don't actually need to write the variable names at all, as long as we carefully line them up in the system of equations so that we can keep track of what's being eliminated.  Let's look again at our system of equations in and write the coefficients and the constants in a rectangular array. If any variables are missing from any equations, we write that the coefficient is .   Notice how even the equal signs are gone; we don't need them, for we know that the last entry in each row is the constant of the corresponding equation.  We call this array we have just created a matrix .   Matrix  matrix augmented matrix   A matrix is a rectangular array of numbers.  The horizontal lines of numbers form rows and the vertical lines of numbers form columns . A matrix with rows and columns is said to be an matrix (said out loud as an by matrix ).  If a matrix corresponds to a linear system of equations such that the last column corresponds to the constants of the system, we call the matrix an augmented matrix .  We tend to use capital letters for matrices (the plural of matrix), such as , , and , and we use lowercase letters with subscripts for the entries within a matrix. That is, means the number in the third row and second column of matrix .  All the entries of an matrix would appear like this:     Since matrices contain all the important information from a linear system, we are working our way up to solving systems using only augmented matrices. Using matrices saves us from having to write out the variables over and over again, and matrices are also easy for a computer to understand and manipulate. Matrices are important objects in their own right, and in future sections, we will be able to compute with matrices even when we don't think of them as corresponding to a system of linear equations.     How a matrix is indexed  In the matrix what is ?       The entry in the second row and third column is 6.      The row number comes first, then the column number.      Incorrect. If you're stuck, try reviewing the definition of matrix .       Elimination vs. substitution  Consider the method of substitution used in and the method of elimination described in this section.   State at least one thing the two methods have in common.    State at least one thing that's different between the two methods.      Reflection  Enter a response to both of the following tasks:   Ask a question about the material, either about something you're not sure you fully understand, or a what if question.    Give a percentage from 0 to 100 that reflects how confident you are with the material you just read about, and give one sentence as to why you feel that way. 0 means you didn't actually do the reading and 100 means that everything makes sense so far and you think you are completely ready to engage with the material more deeply.         Participate     Solve systems of linear equations using the method of elimination    Become more familiar with the terminology and parts of a matrix    Go back and forth between a linear system and an augmented matrix       Elimination   Solve the linear systems below using the method of elimination.                        Parts of a Matrix   For the matrix , identify the    entry .   The entry in the third row and second column is     third column.   The third column is     second row.   The second row is      If is a matrix, how many columns does have?   A matrix has 5 columns.    Using variables , write the linear system corresponding to the above matrix .        Give the augmented matrix corresponding to the linear system in .        Create your own augmented matrix, of any size you choose.    Create your own linear system, with however many variables and equations you choose.      Summary     The method of elimination is a way of solving systems of linear equations that can be made systematic and algorithmic.     Matrices are arrays of numbers. Right now, we are most interested in augmented matrices , whose entries correspond to the coefficients and constants of a system of linear equations.    Elimination works better than substitution when there are more than 2 or 3 variables, and it is the foundation of future sections of material.       Practice  Two variable elimination    Use the method of elimination to solve the linear system:   The solution is and .                  Three variable elimination    Use the method of elimination to solve the linear system:   The solution is , and .                       Augmented matrix from 2-variable system    Write the augmented matrix of the system                                                                                    Augmented matrix from 3-variable system    Write the augmented matrix of the system                                                                                                          About matrices and augmented matrices      Consider the matrix.   Which of the following correctly describes the matrix above?    The matrix is , with 3 rows and 5 columns.    The matrix is , with 5 rows and 3 columns.    The matrix is , with 5 columns and 3 rows.    The matrix is , with 3 columns and 5 rows.      Now consider an matrix If is an augmented matrix, the corresponding linear system has how many variables?                    Linear system from augmented matrix    Convert the augmented matrix below to the associated linear system.   Use  and for the variables.  The associated linear system is:        Expression containing the variables   Constants                                                              Additional Practice  Method of Elimination   In the following exercises, solve the systems of linear equations using the method of elimination.                      Linear System to Augmented Matrix   In the following exercises, convert the given system of linear equations into an augmented matrix.                                        Augmented Matrix to Linear System   In the following exercises, convert the given augmented matrix into a system of linear equations. Use the variables , , etc.                                                   "
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
  "body": "Clickable Areas, Coefficients  Identify (by clicking, or by circling) all of the coefficients in this linear equation.               The coefficients are the numbers that are multiplied by the variables.  "
},
{
  "id": "clickable-constants",
  "level": "2",
  "url": "sec-matrices-elimination.html#clickable-constants",
  "type": "Activity",
  "number": "1.2.3",
  "title": "Clickable Areas, Constants.",
  "body": "Clickable Areas, Constants  Identify (by clicking, or by circling) all of the constants in this linear equation.                 The constants are the numbers that aren't multiplied by any variables.  "
},
{
  "id": "mc-elimination-check",
  "level": "2",
  "url": "sec-matrices-elimination.html#mc-elimination-check",
  "type": "Activity",
  "number": "1.2.4",
  "title": "Use equations to eliminate variables.",
  "body": "Use equations to eliminate variables  Consider the equations We want to use the second equation to eliminate the variable from the first equation. What step should we take?     Multiply the second equation by and add to the first equation.    This would make the first equation , which didn't eliminate the .      Multiply the second equation by and add to the first equation.    This gives , which eliminates the .      Multiply the second equation by and add to the first equation.    This makes the first equation , which eliminates the in the first equation, not the .     Consider the equations We want to use the top equation to eliminate the variable from the bottom equation. What step should we take?     Multiply the top equation by and add to the bottom equation.    This would make the bottom equation , which didn't eliminate the .      Multiply the top equation by and subtract from the bottom equation.    This would eliminate the , but to use this method systematically, we're always going to want to multiply and add , not subtract. Subtracting is the same as adding though!      Multiply the top equation by and add to the bottom equation.    This makes the bottom equation , which eliminates the from the bottom equation.    "
},
{
  "id": "parsons-elim-vs-sub",
  "level": "2",
  "url": "sec-matrices-elimination.html#parsons-elim-vs-sub",
  "type": "Activity",
  "number": "1.2.5",
  "title": "Parsons Problem, Elimination vs Substitution.",
  "body": "Parsons Problem, Elimination vs Substitution  Solve the linear system using the method of elimination.     Multiply the first equation by and add the result to the second equation, yielding     Add to the other side of the first equation, getting , and divide both sides by , resulting in .      Substitute the expression for from the first equation into the second equation, yielding , which simplifies to .    Multiply both sides of the second equation by , yielding       Substitute the value of from the second equation into the first equation, resulting in , so , which means that .    Multiply the second equation by and add the result to the first equation, resulting in , and multiplying both sides by yields .    "
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
  "body": "How a matrix is indexed  In the matrix what is ?       The entry in the second row and third column is 6.      The row number comes first, then the column number.      Incorrect. If you're stuck, try reviewing the definition of matrix .     "
},
{
  "id": "rq-matrices-sub-vs-elim",
  "level": "2",
  "url": "sec-matrices-elimination.html#rq-matrices-sub-vs-elim",
  "type": "Reading Question",
  "number": "2",
  "title": "Elimination vs. substitution.",
  "body": "Elimination vs. substitution  Consider the method of substitution used in and the method of elimination described in this section.   State at least one thing the two methods have in common.    State at least one thing that's different between the two methods.     "
},
{
  "id": "rq-matrices-questions",
  "level": "2",
  "url": "sec-matrices-elimination.html#rq-matrices-questions",
  "type": "Reading Question",
  "number": "3",
  "title": "Reflection.",
  "body": "Reflection  Enter a response to both of the following tasks:   Ask a question about the material, either about something you're not sure you fully understand, or a what if question.    Give a percentage from 0 to 100 that reflects how confident you are with the material you just read about, and give one sentence as to why you feel that way. 0 means you didn't actually do the reading and 100 means that everything makes sense so far and you think you are completely ready to engage with the material more deeply.     "
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
  "body": "        "
},
{
  "id": "dc-linsystem4var",
  "level": "2",
  "url": "sec-matrices-elimination.html#dc-linsystem4var",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "",
  "body": "        "
},
{
  "id": "ws-matrices-elim-4-1-3",
  "level": "2",
  "url": "sec-matrices-elimination.html#ws-matrices-elim-4-1-3",
  "type": "Worksheet Exercise",
  "number": "3",
  "title": "",
  "body": " entry .   The entry in the third row and second column is   "
},
{
  "id": "ws-matrices-elim-4-1-4",
  "level": "2",
  "url": "sec-matrices-elimination.html#ws-matrices-elim-4-1-4",
  "type": "Worksheet Exercise",
  "number": "4",
  "title": "",
  "body": " third column.   The third column is   "
},
{
  "id": "ws-matrices-elim-4-1-5",
  "level": "2",
  "url": "sec-matrices-elimination.html#ws-matrices-elim-4-1-5",
  "type": "Worksheet Exercise",
  "number": "5",
  "title": "",
  "body": " second row.   The second row is   "
},
{
  "id": "ws-matrices-elim-4-2",
  "level": "2",
  "url": "sec-matrices-elimination.html#ws-matrices-elim-4-2",
  "type": "Worksheet Exercise",
  "number": "6",
  "title": "",
  "body": " If is a matrix, how many columns does have?   A matrix has 5 columns.  "
},
{
  "id": "ws-matrices-elim-4-3",
  "level": "2",
  "url": "sec-matrices-elimination.html#ws-matrices-elim-4-3",
  "type": "Worksheet Exercise",
  "number": "7",
  "title": "",
  "body": " Using variables , write the linear system corresponding to the above matrix .      "
},
{
  "id": "ws-matrices-elim-4-4",
  "level": "2",
  "url": "sec-matrices-elimination.html#ws-matrices-elim-4-4",
  "type": "Worksheet Exercise",
  "number": "8",
  "title": "",
  "body": " Give the augmented matrix corresponding to the linear system in .      "
},
{
  "id": "ws-matrices-elim-4-5",
  "level": "2",
  "url": "sec-matrices-elimination.html#ws-matrices-elim-4-5",
  "type": "Worksheet Exercise",
  "number": "9",
  "title": "",
  "body": " Create your own augmented matrix, of any size you choose.  "
},
{
  "id": "ws-matrices-elim-4-6",
  "level": "2",
  "url": "sec-matrices-elimination.html#ws-matrices-elim-4-6",
  "type": "Worksheet Exercise",
  "number": "10",
  "title": "",
  "body": " Create your own linear system, with however many variables and equations you choose.  "
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
  "body": "        "
},
{
  "id": "exer-matrices-elim-2-4",
  "level": "2",
  "url": "sec-matrices-elimination.html#exer-matrices-elim-2-4",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": "        "
},
{
  "id": "exer-matrices-elim-3-3",
  "level": "2",
  "url": "sec-matrices-elimination.html#exer-matrices-elim-3-3",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": "        "
},
{
  "id": "exer-matrices-elim-3-4",
  "level": "2",
  "url": "sec-matrices-elimination.html#exer-matrices-elim-3-4",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": "        "
},
{
  "id": "exer-matrices-elim-3-5",
  "level": "2",
  "url": "sec-matrices-elimination.html#exer-matrices-elim-3-5",
  "type": "Exercise",
  "number": "5",
  "title": "",
  "body": "        "
},
{
  "id": "exer-matrices-elim-3-6",
  "level": "2",
  "url": "sec-matrices-elimination.html#exer-matrices-elim-3-6",
  "type": "Exercise",
  "number": "6",
  "title": "",
  "body": "        "
},
{
  "id": "exer-matrices-elim-4-3",
  "level": "2",
  "url": "sec-matrices-elimination.html#exer-matrices-elim-4-3",
  "type": "Exercise",
  "number": "7",
  "title": "",
  "body": "        "
},
{
  "id": "exer-matrices-elim-4-4",
  "level": "2",
  "url": "sec-matrices-elimination.html#exer-matrices-elim-4-4",
  "type": "Exercise",
  "number": "8",
  "title": "",
  "body": "        "
},
{
  "id": "exer-matrices-elim-4-5",
  "level": "2",
  "url": "sec-matrices-elimination.html#exer-matrices-elim-4-5",
  "type": "Exercise",
  "number": "9",
  "title": "",
  "body": "        "
},
{
  "id": "exer-matrices-elim-4-6",
  "level": "2",
  "url": "sec-matrices-elimination.html#exer-matrices-elim-4-6",
  "type": "Exercise",
  "number": "10",
  "title": "",
  "body": "        "
},
{
  "id": "exer-matrices-elim-4-7",
  "level": "2",
  "url": "sec-matrices-elimination.html#exer-matrices-elim-4-7",
  "type": "Exercise",
  "number": "11",
  "title": "",
  "body": "        "
},
{
  "id": "sec-row-ops",
  "level": "1",
  "url": "sec-row-ops.html",
  "type": "Section",
  "number": "1.3",
  "title": "Row Operations",
  "body": " Row Operations   We've now seen how to solve linear systems using substitution and elimination, and how to create an augmented matrix representing a linear system. In this section, we see how to perform the variable elimination steps directly on the matrix and interpret the results to give the solution to the corresponding linear system.    Prepare  We use the method of elimination again, but directly on the augmented matrix containing only the coefficients and constants. The steps are essentially the same, except that every time we used the word equation before, we substitute the word row instead.  Solve a system with equations and matrices side by side  Let's redo the work we did last section in our marbles example , this time side by side with the augmented matrix representing the system. Our first step was to write the equations with all the variables on the left side of the equal sign and in alphabetical order, as we did in Equation .  The words explain how we get from the current set of equations (or matrix) to the one on the next line.            Replace equation 3 with the sum of equations 1 and 3.  Replace row 3 with the sum of rows 1 and 3.             Multiply equation 2 by .  Multiply row 2 by .             Replace equation 1 with the sum of times equation 2 plus equation 1. Replace equation 3 with the sum of times equation 2 plus equation 3.  Replace row 1 with the sum of times row 2 plus row 1. Replace row 3 with the sum of times row 2 plus row 3.             Multiply equation 3 by .  Multiply row 3 by .             Replace equation 2 with the sum of times equation 3 plus equation 2. Replace equation 1 with the sum of times equation 3 plus equation 1.  Replace row 2 with the sum of times row 3 plus row 2. Replace row 1 with the sum of times row 3 plus row 1.             The final matrix contains the same solution information as we have on the left. Recall that the first column of our matrices held the coefficients of the variable; the second column held the coefficients of the variable, and the third column held the coefficients of the variable. Therefore, the first row of the matrix can be interpreted as or more concisely,    This is powerful stuff! We write an augmented matrix so that we don't have to keep writing variables over and over again, and now we can solve a linear system by performing operations on the rows of the matrix, without thinking about the linear equations at all, until we can read off the solution to the linear system at the end of the process.   Row operations  In the following tasks, perform the row operations described on the given matrix.   Consider the matrix . Which matrix is the result of multiplying Row 1 by and adding to Row 3?          This multiplied Row 1 by and replaced Row 1. It didn't do anything to Row 3.           Correct!           In the multiply and add row operation, you don't change the row you multiplied by a number; you only change the row you added to.           We have to do the operation to the entire row, not just the first entry.     Consider the matrix . Which matrix is the result of multiplying Row 1 by ?          Correct!           This multiplied both Row 1 and Row 3 by .           This multiplied Row 2 by .     Consider the matrix . Which matrix is the result of interchanging Row 2 and Row 3?          Correct!           This interchanged Row 1 and Row 2.           This replaced Row 2 with a copy of Row 3, but didn't replace Row 3 with a copy of Row 2.     We can save ourselves even more writing by using a shorthand to describe the operations we do to the matrix rows. We use , to represent Row 1 and Row 2, respectively. We can write add Row 1 to Row 3, and replace Row 3 with that sum as . We also replaced Row 2 with of Row 2; we write this in shorthand as .  There is one more operation we can do to rows of a matrix without changing the corresponding system of linear equations; the solutions don't change if we write the equations down in a different order. Thus we can swap the positions of two rows, and the expression means interchange Row 1 and Row 2.    Elementary Row Operations  Let , be two arbitrary rows of a matrix, say Row and Row , and let be a nonzero number. The three elementary row operations are:   Add the result of multiplying a row by a nonzero number to another row, and replace the latter row with that sum, denoted .    Multiply one row by a nonzero number, denoted .    Swap the positions of two rows, denoted .       Row operations notation  In the following tasks, say which elementary row operation was performed on matrix to obtain matrix .   Consider the matrices        Which row operation was done to to obtain ?          Multiply Row 1 by and add to Row 2, replacing Row 2.           This says to multiply Row 1 by , add to Row 2, and replace Row 1 . Row 1 was not changed. This is also not one of the three elementary row operations: we replace the row we added to, not the row we multiplied by a number.           This would make the second row . This is also not one of the elementary row operations - we multiply and add, never multiply and subtract.     Consider the matrices        Which row operation was done to to obtain ?          Correct!           This says Row 1 and Row 2 were swapped.           This says Row 1 replaces Row 3, but we need the arrow to go both ways to say that Row 3 also replaces Row 1. This is also not one of the three elementary row operations.     Consider the matrices        Which row operation was done to to obtain ?          Correct!           This says Row 3 was multiplied by . Check again.           This says Row 3 was multiplied by and the result replaced Row 2 . This is not one of the three elementary row operations.     Let's see one more example of solving a linear system with the equations and the augmented matrices side by side.   Equations and Matrices Side by Side   Find a solution to the following system of linear equations by simultaneously manipulating the equations and the corresponding augmented matrices.     We turn the given system into its corresponding augmented matrix.    System of equations  Corresponding matrix        First, we use the first equation to eliminate the from the second and third equations.    Replace equation 2 with the sum of times equation 1 plus equation 2. Replace equation 3 with the sum of equation 1 and equation 3.           Notice that the second equation no longer contains . We'll exchange the order of the equations so that we can follow the convention of solving for the second variable in the second equation.    Interchange equations 2 and 3.         Multiply equation 2 by .         Multiply equation 3 by .         Notice that the last row tells us that . If we wanted to combine the methods of substitution and elimination, we could substitute in for the in the first two equations, and that would make a lot of sense! However, we choose to demonstrate how continuing with the method of elimination arrives at the same result.    Replace equation 2 with the sum of times equation 3 plus equation 2. Replace equation 1 with the sum of times equation 3 plus equation 1.           Notice how the second equation shows that . All that remains to do is to solve for .    Replace equation 1 with the sum of times equation 2 plus equation 1.         The equations on the left tell us that , and , and the matrix on the right tells us the same information.      Row operation, yes or no?  Let be a matrix. Which of the following notations represent elementary operations we can perform on ?          We can't multiply a row by , only by a nonzero number. If we multiply both sides of an equation by 0, we get 0=0, which is true but rarely helpful.           Replace Row 4 with the result of multiplying Row 2 by the number 5 and adding that to Row 4.           Two times Row 1 replaces Row 1.           In the row operation involving multiplying and adding, we don't replace the same row that we multiplied by a number.           Swap Row 3 and Row 4.           We can't just replace Row 4 with Row 3 without losing information about the linear system.     Parsons Problem, Sequence of Row Operations  Start with matrix and perform these row operations one after another. Give the matrix that results from doing each operation in order.                                    Reflection  Enter a response to both of the following tasks:   Ask a question about the material, either about something you're not sure you fully understand, or a what if question.    Give a percentage from 0 to 100 that reflects how confident you are with the material you just read about, and give one sentence as to why you feel that way. 0 means you didn't actually do the reading and 100 means that everything makes sense so far and you think you are completely ready to engage with the material more deeply.         Participate     Solve linear systems using row operations on augmented matrices    Recognize and use the elementary row operations and their notations        Row Operations Notation  For the matrix , give the matrix that results from performing each of the row operations below.    .        .        .       Side-by-side Elimination and Matrices  Solve the linear system below using the method of elimination side-by-side with row operations.                 What row operation was done?   Write down the row operation that transforms into the matrix given in each exercise.                                 Two truths and a lie?  Using shorthand row operation notation, write down two elementary row operations and one thing that looks like but isn't an elementary row operation.   Exploring non-elementary row operations  Do something to the matrix in Problem that is not an elementary row operation, and write down the matrix that you get.   Solve the linear system corresponding to your new matrix. Does the linear system corresponding to your new matrix have the same solution as the linear system in Problem ?   If the linear system has the same solution, can you write down a sequence of elementary row operations that results in your new matrix?      Summary     Row operations are actions we do to the rows of a matrix that correspond to the elimination steps that we perform on the equations in a linear system.    Solving a linear system by performing row operations on an augmented matrix involves the same steps as elimination but with less writing.    There are three elementary row operations and shorthand notations for each of the three.       Practice  Some row operations    Given the matrix   perform the row operation on and enter the result.                                       Perform the row operation on and enter the result.                                                                                                                                                                     A sequence of row operations    Given the matrix   perform the row operations below in the order given and enter the final result.                                                                                                          Identify the row operation performed    The matrix on the right results after performing a single row operation on the matrix on the left.   Identify the row operation. Use R1 , R2 , and R3 to represent the rows  and  Answer:    select    ->    <-->                          Identify the row operation performed    The matrix on the right results after performing a single row operation on the matrix on the left.   Identify the row operation. Use R1 , R2 , and R3 to represent the rows  and  Answer:    select    ->    <-->                          Identify the row operation performed    The matrix on the right results after performing a single row operation on the matrix on the left.   Identify the row operation. Use R1 , R2 , and R3 to represent the rows  and  Answer:    select    ->    <-->                           Additional Practice  Perform row operations   In the following exercises, perform the given row operations on , where                                                           Which row operation was done?   A matrix is given below. In the following exercises, a matrix is given. Give the row operation that transforms into .                                                  Equations and matrices together   In the following exercises, rewrite the system of equations in matrix form. Find the solution to the linear system by simultaneously manipulating the equations and the matrix.                                                           "
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
  "body": "Row operations  In the following tasks, perform the row operations described on the given matrix.   Consider the matrix . Which matrix is the result of multiplying Row 1 by and adding to Row 3?          This multiplied Row 1 by and replaced Row 1. It didn't do anything to Row 3.           Correct!           In the multiply and add row operation, you don't change the row you multiplied by a number; you only change the row you added to.           We have to do the operation to the entire row, not just the first entry.     Consider the matrix . Which matrix is the result of multiplying Row 1 by ?          Correct!           This multiplied both Row 1 and Row 3 by .           This multiplied Row 2 by .     Consider the matrix . Which matrix is the result of interchanging Row 2 and Row 3?          Correct!           This interchanged Row 1 and Row 2.           This replaced Row 2 with a copy of Row 3, but didn't replace Row 3 with a copy of Row 2.    "
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
  "body": "Row operations notation  In the following tasks, say which elementary row operation was performed on matrix to obtain matrix .   Consider the matrices        Which row operation was done to to obtain ?          Multiply Row 1 by and add to Row 2, replacing Row 2.           This says to multiply Row 1 by , add to Row 2, and replace Row 1 . Row 1 was not changed. This is also not one of the three elementary row operations: we replace the row we added to, not the row we multiplied by a number.           This would make the second row . This is also not one of the elementary row operations - we multiply and add, never multiply and subtract.     Consider the matrices        Which row operation was done to to obtain ?          Correct!           This says Row 1 and Row 2 were swapped.           This says Row 1 replaces Row 3, but we need the arrow to go both ways to say that Row 3 also replaces Row 1. This is also not one of the three elementary row operations.     Consider the matrices        Which row operation was done to to obtain ?          Correct!           This says Row 3 was multiplied by . Check again.           This says Row 3 was multiplied by and the result replaced Row 2 . This is not one of the three elementary row operations.    "
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
  "body": "Row operation, yes or no?  Let be a matrix. Which of the following notations represent elementary operations we can perform on ?          We can't multiply a row by , only by a nonzero number. If we multiply both sides of an equation by 0, we get 0=0, which is true but rarely helpful.           Replace Row 4 with the result of multiplying Row 2 by the number 5 and adding that to Row 4.           Two times Row 1 replaces Row 1.           In the row operation involving multiplying and adding, we don't replace the same row that we multiplied by a number.           Swap Row 3 and Row 4.           We can't just replace Row 4 with Row 3 without losing information about the linear system.    "
},
{
  "id": "parsons-row-ops-sequence",
  "level": "2",
  "url": "sec-row-ops.html#parsons-row-ops-sequence",
  "type": "Reading Question",
  "number": "2",
  "title": "Parsons Problem, Sequence of Row Operations.",
  "body": "Parsons Problem, Sequence of Row Operations  Start with matrix and perform these row operations one after another. Give the matrix that results from doing each operation in order.                                   "
},
{
  "id": "rq-row-ops-questions",
  "level": "2",
  "url": "sec-row-ops.html#rq-row-ops-questions",
  "type": "Reading Question",
  "number": "3",
  "title": "Reflection.",
  "body": "Reflection  Enter a response to both of the following tasks:   Ask a question about the material, either about something you're not sure you fully understand, or a what if question.    Give a percentage from 0 to 100 that reflects how confident you are with the material you just read about, and give one sentence as to why you feel that way. 0 means you didn't actually do the reading and 100 means that everything makes sense so far and you think you are completely ready to engage with the material more deeply.     "
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
  "body": "Row Operations Notation  For the matrix , give the matrix that results from performing each of the row operations below.    .        .        .      "
},
{
  "id": "row-op-ws-matrix-sys",
  "level": "2",
  "url": "sec-row-ops.html#row-op-ws-matrix-sys",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "Side-by-side Elimination and Matrices.",
  "body": "Side-by-side Elimination and Matrices  Solve the linear system below using the method of elimination side-by-side with row operations.              "
},
{
  "id": "ws-row-ops-4-1-3",
  "level": "2",
  "url": "sec-row-ops.html#ws-row-ops-4-1-3",
  "type": "Worksheet Exercise",
  "number": "3",
  "title": "",
  "body": "        "
},
{
  "id": "ws-row-ops-4-1-4",
  "level": "2",
  "url": "sec-row-ops.html#ws-row-ops-4-1-4",
  "type": "Worksheet Exercise",
  "number": "4",
  "title": "",
  "body": "        "
},
{
  "id": "ws-row-ops-4-1-5",
  "level": "2",
  "url": "sec-row-ops.html#ws-row-ops-4-1-5",
  "type": "Worksheet Exercise",
  "number": "5",
  "title": "",
  "body": "        "
},
{
  "id": "ws-row-ops-4-2",
  "level": "2",
  "url": "sec-row-ops.html#ws-row-ops-4-2",
  "type": "Worksheet Exercise",
  "number": "6",
  "title": "Two truths and a lie?",
  "body": "Two truths and a lie?  Using shorthand row operation notation, write down two elementary row operations and one thing that looks like but isn't an elementary row operation.  "
},
{
  "id": "ws-row-ops-4-3",
  "level": "2",
  "url": "sec-row-ops.html#ws-row-ops-4-3",
  "type": "Worksheet Exercise",
  "number": "7",
  "title": "Exploring non-elementary row operations.",
  "body": "Exploring non-elementary row operations  Do something to the matrix in Problem that is not an elementary row operation, and write down the matrix that you get.   Solve the linear system corresponding to your new matrix. Does the linear system corresponding to your new matrix have the same solution as the linear system in Problem ?   If the linear system has the same solution, can you write down a sequence of elementary row operations that results in your new matrix?  "
},
{
  "id": "ww-row-op-enter-matrix",
  "level": "2",
  "url": "sec-row-ops.html#ww-row-op-enter-matrix",
  "type": "Exercise",
  "number": "1.3.1",
  "title": "Some row operations.",
  "body": "Some row operations    Given the matrix   perform the row operation on and enter the result.                                       Perform the row operation on and enter the result.                                                                                                                                                                    "
},
{
  "id": "ww-row-op-enter-matrix2",
  "level": "2",
  "url": "sec-row-ops.html#ww-row-op-enter-matrix2",
  "type": "Exercise",
  "number": "1.3.2",
  "title": "A sequence of row operations.",
  "body": "A sequence of row operations    Given the matrix   perform the row operations below in the order given and enter the final result.                                                                                                         "
},
{
  "id": "ww-identify-row-op",
  "level": "2",
  "url": "sec-row-ops.html#ww-identify-row-op",
  "type": "Exercise",
  "number": "1.3.3",
  "title": "Identify the row operation performed.",
  "body": "Identify the row operation performed    The matrix on the right results after performing a single row operation on the matrix on the left.   Identify the row operation. Use R1 , R2 , and R3 to represent the rows  and  Answer:    select    ->    <-->                         "
},
{
  "id": "ww-identify-row-op2",
  "level": "2",
  "url": "sec-row-ops.html#ww-identify-row-op2",
  "type": "Exercise",
  "number": "1.3.4",
  "title": "Identify the row operation performed.",
  "body": "Identify the row operation performed    The matrix on the right results after performing a single row operation on the matrix on the left.   Identify the row operation. Use R1 , R2 , and R3 to represent the rows  and  Answer:    select    ->    <-->                         "
},
{
  "id": "ww-identify-row-op3",
  "level": "2",
  "url": "sec-row-ops.html#ww-identify-row-op3",
  "type": "Exercise",
  "number": "1.3.5",
  "title": "Identify the row operation performed.",
  "body": "Identify the row operation performed    The matrix on the right results after performing a single row operation on the matrix on the left.   Identify the row operation. Use R1 , R2 , and R3 to represent the rows  and  Answer:    select    ->    <-->                         "
},
{
  "id": "exer-row-ops-2-3",
  "level": "2",
  "url": "sec-row-ops.html#exer-row-ops-2-3",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": "        "
},
{
  "id": "exer-row-ops-2-4",
  "level": "2",
  "url": "sec-row-ops.html#exer-row-ops-2-4",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": "        "
},
{
  "id": "exer-row-ops-2-5",
  "level": "2",
  "url": "sec-row-ops.html#exer-row-ops-2-5",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": "        "
},
{
  "id": "exer-row-ops-2-6",
  "level": "2",
  "url": "sec-row-ops.html#exer-row-ops-2-6",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": "        "
},
{
  "id": "exer-row-ops-2-7",
  "level": "2",
  "url": "sec-row-ops.html#exer-row-ops-2-7",
  "type": "Exercise",
  "number": "5",
  "title": "",
  "body": "        "
},
{
  "id": "exer-row-ops-2-8",
  "level": "2",
  "url": "sec-row-ops.html#exer-row-ops-2-8",
  "type": "Exercise",
  "number": "6",
  "title": "",
  "body": "        "
},
{
  "id": "exer-row-ops-3-3",
  "level": "2",
  "url": "sec-row-ops.html#exer-row-ops-3-3",
  "type": "Exercise",
  "number": "7",
  "title": "",
  "body": "        "
},
{
  "id": "exer-row-ops-3-4",
  "level": "2",
  "url": "sec-row-ops.html#exer-row-ops-3-4",
  "type": "Exercise",
  "number": "8",
  "title": "",
  "body": "        "
},
{
  "id": "exer-row-ops-3-5",
  "level": "2",
  "url": "sec-row-ops.html#exer-row-ops-3-5",
  "type": "Exercise",
  "number": "9",
  "title": "",
  "body": "        "
},
{
  "id": "exer-row-ops-3-6",
  "level": "2",
  "url": "sec-row-ops.html#exer-row-ops-3-6",
  "type": "Exercise",
  "number": "10",
  "title": "",
  "body": "        "
},
{
  "id": "exer-row-ops-3-7",
  "level": "2",
  "url": "sec-row-ops.html#exer-row-ops-3-7",
  "type": "Exercise",
  "number": "11",
  "title": "",
  "body": "        "
},
{
  "id": "exer-row-ops-4-3",
  "level": "2",
  "url": "sec-row-ops.html#exer-row-ops-4-3",
  "type": "Exercise",
  "number": "12",
  "title": "",
  "body": "        "
},
{
  "id": "exer-row-ops-4-4",
  "level": "2",
  "url": "sec-row-ops.html#exer-row-ops-4-4",
  "type": "Exercise",
  "number": "13",
  "title": "",
  "body": "        "
},
{
  "id": "exer-row-ops-4-5",
  "level": "2",
  "url": "sec-row-ops.html#exer-row-ops-4-5",
  "type": "Exercise",
  "number": "14",
  "title": "",
  "body": "        "
},
{
  "id": "exer-row-ops-4-6",
  "level": "2",
  "url": "sec-row-ops.html#exer-row-ops-4-6",
  "type": "Exercise",
  "number": "15",
  "title": "",
  "body": "        "
},
{
  "id": "exer-row-ops-4-7",
  "level": "2",
  "url": "sec-row-ops.html#exer-row-ops-4-7",
  "type": "Exercise",
  "number": "16",
  "title": "",
  "body": "        "
},
{
  "id": "exer-row-ops-4-8",
  "level": "2",
  "url": "sec-row-ops.html#exer-row-ops-4-8",
  "type": "Exercise",
  "number": "17",
  "title": "",
  "body": "        "
},
{
  "id": "sec-rref",
  "level": "1",
  "url": "sec-rref.html",
  "type": "Section",
  "number": "1.4",
  "title": "Reduced Row Echelon Form",
  "body": " Reduced Row Echelon Form   We have learned about the method of elimination of variables and about row operations on matrices; in this section, we learn Gauss-Jordan elimination to put matrices into reduced row echelon form .    Prepare  Performing elementary row operations on an augmented matrix resulted in a new linear system whose solution was the same as the original linear system. This brings to mind two good questions:   What is the goal of using elementary row operations?    How do we achieve that goal the fastest?     We'll answer the first question first. In , when we manipulated matrices to find solutions, we were in fact putting the matrix into reduced row echelon form .   Reduced Row Echelon Form  reduced row echelon form  row echelon form   A matrix is in reduced row echelon form if its entries satisfy all four of the following conditions.   The first nonzero entry in each row is a (called a leading ). leading one     Each leading comes in a column to the right of the leading 's in rows above it.    All rows of all 's come at the bottom of the matrix.    If a column contains a leading , then all other entries in that column are .     A matrix that satisfies the first three conditions is said to be in row echelon form .    RREF or not?  For each of the following matrices, say whether they are in reduced row echelon form or not.         Reduced row echelon form    Correct!      Not in reduced row echelon form    The first nonzero entry in each row is a , each leading 1 appears down and to the right from the previous leading 1, and all the entries in the same column as a leading 1 are .           Reduced row echelon form    Correct!      Not in reduced row echelon form    The first nonzero entry in each row is a , each leading 1 appears down and to the right from the previous leading 1, and all the entries in the same column as a leading 1 are .  The third column does not have a leading 1 in it, but that's okay; the conditions for rref don't say that every column has to contain a leading 1.           Reduced row echelon form    Correct!      Not in reduced row echelon form    The rref conditions don't say that leading 1's have to exist; the conditions say that if nonzero entries are present, then leading 1's have to be in certain relative positions.           Reduced row echelon form    Correct!      Not in reduced row echelon form    The second column does not have a leading 1 in it, but that's okay; the conditions for rref don't say that every column has to contain a leading 1.            Reduced row echelon form    The third condition in says that any rows of all zeroes must be at the bottom.      Not in reduced row echelon form    Correct!           Reduced row echelon form    The first nonzero entry of the second row is , and it needs to be to be in rref. (The third row fails this condition also).      Not in reduced row echelon form    Correct!           Reduced row echelon form    Correct!      Not in reduced row echelon form    The first, third, fourth, and sixth columns do not have a leading 1 in them, and that means that the other entries in those columns don't have to be .           Reduced row echelon form    The second column has a leading in it (from the second row), and that means all the other entries in that column have to be .      Not in reduced row echelon form    Correct!     We began this section with two questions, Where do we go? and How do we get there quickly? We've just answered the first question: most of the time we are going to reduced row echelon form. We now address the second question.  There are many ways to use elementary row operations to transform a matrix into reduced row echelon form, but there is a general technique that is efficient and doesn't waste time on unnecessary steps. This technique is called Gauss-Jordan elimination , named in honor of the mathematicians Karl Friedrich Gauss and Wilhelm Jordan.   Gauss-Jordan Elimination  Gauss-Jordan elimination   Gauss-Jordan elimination is the technique for finding the reduced row echelon form of a matrix using the procedure summarized below:   Create a leading .    Use this leading to put zeros underneath it.    Repeat the above steps until all possible rows have leading 's.    Put zeros above these leading 's.      This is roughly what we were already doing in previous sections when we used elimination and row operations, but let's see an example.   Gauss-Jordan Elimination Demonstrated  Put the augmented matrix of the following system of linear equations into reduced row echelon form.   We start by converting the linear system into an augmented matrix.   Our first step is to make the first entry in the first row a . We do this by multiplying Row 1 by . (This row operation is also called scaling. )          Our next step is to put zeros under this . To create a for the first entry in the second row, we'll use the multiply and add elementary row operation.          The first entry in the third row is already , so our first column looks good for reduced row echelon form. We now shift our focus from the leading down and to the right, to the position that is boxed.  We want to put a in this position, but we need to restrict ourselves to using only the second row and any rows below it , as using the first row would put nonzero entries back into the first column and undo the work we just did. Let's first swap Row 2 and Row 3, and then scale the new second row (multiply it by a number) so that there is a in the desired position.                  We have now created another leading , this time in the second row. Our next desire is to put 's underneath it, but that's already done! Therefore we again shift our attention down and to the right to the next position in a box. We want that to be a , and so we multiply the row by .          This ends what we will refer to as the forward steps . Our next task is to use the \"multiply and add\" row operation to put zeros above the leading 's. This is referred to as the backward steps .                  This matrix is now in reduced row echelon form, and we can read off the solution to the original linear system as , and .   We now summarize and try to formalize the steps we performed.   Forward Steps Gaussian elimination forward steps    Start at the top left corner.    If the entry in the row and column that we are considering is , swap rows with a row below the current row so that the entry is nonzero. If this entry is and all entries below are , we are done with this column; move to the right and do this step again.    Since the entry we are considering is nonzero, multiply the current row by a number ( scale the row ) to make its first entry a .    Repeatedly use the multiply and add row operation to put 's underneath the leading .    Move down and to the right. Go back to step 2 and work on the new rows and columns until you run out of either rows or columns.     The above steps accomplish the following things:   The first nonzero entry in each row is a .    Each leading is in a column to the right of the leading 's above it.    All rows of all 's come at the bottom of the matrix.     Note that this means we have just put a matrix into row echelon form . The next steps finish the conversion into reduced row echelon form.   Backward Steps Gaussian elimination backward steps    Starting from the bottom rightmost leading , use the multiply and add row operation repeatedly to put zeros above the leading .    Continue this process by moving up and to the left to the next leading , repeatedly use multiply and add to put zeros above the leading . Repeat this step until every leading has zeros above in all the rows.     By following these Forward and Backward Steps , we make use of the presence of zeros to make the computations easier and more efficient.  Many authors call the forward steps Gaussian elimination , which puts a matrix into row echelon form, and the forward-and-backward steps together Gauss-Jordan elimination , which puts a matrix into reduced row echelon form. We will almost always want to obtain reduced row echelon form and will not make a big deal about the distinction between the names Gaussian and Gauss-Jordan.    Gauss-Jordan Steps  Answer the following questions about using Gauss-Jordan elimination, which entries to work on next and what row operations to perform.   Given the matrix the Gauss-Jordan algorithm starts by turning the that is entry , into a . Which row operation do we use?     Scaling (multiplying a row by a nonzero number)    Correct!      Swapping rows    Swapping Row 1 and Row 2 would actually work for this matrix, and we'd end up in the same rref eventually. But part of the beauty of the Gauss-Jordan procedure is that following the prescribed steps of the algorithm always works, and swapping two rows won't always work to turn a into a .      Multiply and add    We use the multiply and add row operation when we are trying to get 's, not when our goal is to get a .     Given the matrix which entry do we focus on turning into a or next?           This entry is already a as required by the Gauss-Jordan method.            Correct! We need to turn the entries below the leading in Row 1 into 's.            No, we finish putting 's below the leading in the first column before moving to the right.     To turn the boxed entry below into a , which row operation do we perform?      Scaling a row    No, scaling a row means multiplying by a nonzero number which won't result in a if we didn't start with a .      Swapping rows    In this case, swapping Row 2 and Row 3 would put a into position , but that won't always work, and it just moves the problem down a row.      Multiply and add    Correct! Multiplying Row 1 by and adding to Row 2 will create a in position .     To continue the Gauss-Jordan algorithm on the matrix below, which entry do we next try to turn into a or ?           No, entry is the entry boxed below. The Gauss-Jordan algorithm says that after finishing a column, we move down and to the right from the leading .            No, entry is the entry boxed below. It's already a below a leading .            Correct! The next step in the Gauss-Jordan algorithm is to turn entry , which is boxed below, into a .      Given the matrix which row operation do we use next in the Gauss-Jordan algorithm?     Scaling a row    Correct!      Swapping rows    No, swapping rows is only used when there is a with nonzero entries below it.      Multiply and add    We use the multiply and add row operation when we are trying to get 's, not when our goal is to get a .     Let's practice the Gauss-Jordan algorithm some more.   Another Gauss-Jordan Elimination   Use Gauss-Jordan elimination to put the matrix into reduced row echelon form, where     We start by wanting to make the entry in the first column and first row a . To do this we'll scale the first row by a factor of .          Next we need to put zeros in the column below this newly formed leading .          Our attention now shifts to the right one column and down one row to the position indicated by the box. We want to put a in that position. Our only options are to either scale the current row or to interchange rows with a row below it. However, neither of those options will change the into a in this case. Therefore, we shift our attention to the right one more column, to the .     We want to create a leading for this row, so we multiply by a nonzero number.          Next we use multiply and add to put a underneath this leading .          We would continue moving down and to the right, but since the third row is all 's, and there aren't any more rows, we are done with the forward steps.  Our next goal is to put a above each of the leading 's.          This final matrix is in reduced row echelon form.     Gauss-Jordan Elimination Again, this time with fewer words   Put the matrix into reduced row echelon form.    Here we will show all steps without explaining each one.                                                    We were inspired by solving systems of linear equations to put matrices into reduced row echelon form, in order to make the solution easy to see. Every time we've started with a linear system, there was exactly one solution, and the reduced row echelon form always had one particular form. However, we've also practiced putting matrices in reduced row echelon form without referring back to their corresponding system of linear equations, and we have seen various different ways that rref can look. Connecting different reduced row echelon forms with solutions to the corresponding linear system is the topic for next section.   Reflection  Enter a response to both of the following tasks:   Ask a question about the material, either about something you're not sure you fully understand, or a what if question.    Give a percentage from 0 to 100 that reflects how confident you are with the material you just read about, and give one sentence as to why you feel that way. 0 means you didn't actually do the reading and 100 means that everything makes sense so far and you think you are completely ready to engage with the material more deeply.        Participate     Identify matrices in reduced row echelon form and row echelon form    Use Gauss-Jordan elimination to put matrices into reduced row echelon form       Why rref?  Write the associated system of linear equations for each of the matrices below.          Which system of equations would you prefer to be asked to solve on an exam?              Gauss-Jordan algorithm  Use Gauss-Jordan elimination to put each of the matrices below into reduced row echelon form.                                            Form of matrices  For each of the following matrices, say if it is in reduced row echelon form. If it isn't, say whether it is in row echelon form or if it's in neither form.                                                  rref    rref    ref    neither    neither    neither    rref    rref       Write down the associated linear system of equations for , and . What observations and questions do you have about these systems?                   Summary     A matrix could either be in reduced row echelon form or not. There are four conditions, concerning the locations of zero and nonzero entries, that must all be true for a matrix to be in reduced row echelon form.     Gauss-Jordan elimination is an algorithm that uses elementary row operations to efficiently transform a matrix into reduced row echelon form.    Matrices in reduced row echelon form are useful for finding the solution to a system of linear equations.      Practice     Determine whether the following matrices are in echelon form, reduced echelon form or not in echelon form.  a.   Choose    Echelon Form    Reduced Echelon Form    Not in Echelon Form     b.   Choose    Echelon Form    Reduced Echelon Form    Not in Echelon Form     c.   Choose    Echelon Form    Reduced Echelon Form    Not in Echelon Form     d.   Choose    Echelon Form    Reduced Echelon Form    Not in Echelon Form                                  Determine whether the following matrices are in echelon form, reduced echelon form or not in echelon form.  a.   Choose    Echelon Form    Reduced Echelon Form    Not in Echelon Form     b.   Choose    Echelon Form    Reduced Echelon Form    Not in Echelon Form     c.   Choose    Echelon Form    Reduced Echelon Form    Not in Echelon Form     d.   Choose    Echelon Form    Reduced Echelon Form    Not in Echelon Form                                  Solve the following system using augmented matrix methods:  (a) The initial matrix is:              (b) First, perform the Row Operation . The resulting matrix is:              (c) Next, perform the operation . The resulting matrix is:              (d) Finish simplifying the augmented matrix. The reduced matrix is:              (e) What are the solutions to the system?                                                                                                                                                 Reduce the matrix to reduced row-echelon form.   First, do , resulting in  Then, do , resulting in Next, do , resulting in  Now we can multiply by a constant to create the leading 1, and then do the backwards steps.           Reduce the matrix to reduced row-echelon form.           Additional Practice  RREF: yes or no?   In the following exercises, state whether or not the given matrix is in reduced row echelon form. If it is not, state why.        rref          No, the leading in the second row doesn't appear to the right of the leading in the row above.        No, the leading in the second row doesn't appear to the right of the leading in the row above, and not every entry in the same column as a leading is .        Yes        Yes        Yes        No, any rows of all zeros have to be at the bottom.        Yes        No, there are nonzero entries in the same column as leading 's.        Yes        Yes        Yes        No, the first nonzero entry in each row must be a .        Yes        Yes        Yes    Gauss-Jordan Elimination   In the following exercises, use Gauss-Jordan Elimination to put the given matrix into reduced row echelon form.                                                                                                                                                                       "
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
  "body": "RREF or not?  For each of the following matrices, say whether they are in reduced row echelon form or not.         Reduced row echelon form    Correct!      Not in reduced row echelon form    The first nonzero entry in each row is a , each leading 1 appears down and to the right from the previous leading 1, and all the entries in the same column as a leading 1 are .           Reduced row echelon form    Correct!      Not in reduced row echelon form    The first nonzero entry in each row is a , each leading 1 appears down and to the right from the previous leading 1, and all the entries in the same column as a leading 1 are .  The third column does not have a leading 1 in it, but that's okay; the conditions for rref don't say that every column has to contain a leading 1.           Reduced row echelon form    Correct!      Not in reduced row echelon form    The rref conditions don't say that leading 1's have to exist; the conditions say that if nonzero entries are present, then leading 1's have to be in certain relative positions.           Reduced row echelon form    Correct!      Not in reduced row echelon form    The second column does not have a leading 1 in it, but that's okay; the conditions for rref don't say that every column has to contain a leading 1.            Reduced row echelon form    The third condition in says that any rows of all zeroes must be at the bottom.      Not in reduced row echelon form    Correct!           Reduced row echelon form    The first nonzero entry of the second row is , and it needs to be to be in rref. (The third row fails this condition also).      Not in reduced row echelon form    Correct!           Reduced row echelon form    Correct!      Not in reduced row echelon form    The first, third, fourth, and sixth columns do not have a leading 1 in them, and that means that the other entries in those columns don't have to be .           Reduced row echelon form    The second column has a leading in it (from the second row), and that means all the other entries in that column have to be .      Not in reduced row echelon form    Correct!    "
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
  "body": "Gauss-Jordan Steps  Answer the following questions about using Gauss-Jordan elimination, which entries to work on next and what row operations to perform.   Given the matrix the Gauss-Jordan algorithm starts by turning the that is entry , into a . Which row operation do we use?     Scaling (multiplying a row by a nonzero number)    Correct!      Swapping rows    Swapping Row 1 and Row 2 would actually work for this matrix, and we'd end up in the same rref eventually. But part of the beauty of the Gauss-Jordan procedure is that following the prescribed steps of the algorithm always works, and swapping two rows won't always work to turn a into a .      Multiply and add    We use the multiply and add row operation when we are trying to get 's, not when our goal is to get a .     Given the matrix which entry do we focus on turning into a or next?           This entry is already a as required by the Gauss-Jordan method.            Correct! We need to turn the entries below the leading in Row 1 into 's.            No, we finish putting 's below the leading in the first column before moving to the right.     To turn the boxed entry below into a , which row operation do we perform?      Scaling a row    No, scaling a row means multiplying by a nonzero number which won't result in a if we didn't start with a .      Swapping rows    In this case, swapping Row 2 and Row 3 would put a into position , but that won't always work, and it just moves the problem down a row.      Multiply and add    Correct! Multiplying Row 1 by and adding to Row 2 will create a in position .     To continue the Gauss-Jordan algorithm on the matrix below, which entry do we next try to turn into a or ?           No, entry is the entry boxed below. The Gauss-Jordan algorithm says that after finishing a column, we move down and to the right from the leading .            No, entry is the entry boxed below. It's already a below a leading .            Correct! The next step in the Gauss-Jordan algorithm is to turn entry , which is boxed below, into a .      Given the matrix which row operation do we use next in the Gauss-Jordan algorithm?     Scaling a row    Correct!      Swapping rows    No, swapping rows is only used when there is a with nonzero entries below it.      Multiply and add    We use the multiply and add row operation when we are trying to get 's, not when our goal is to get a .    "
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
  "id": "rq-rref-questions",
  "level": "2",
  "url": "sec-rref.html#rq-rref-questions",
  "type": "Reading Question",
  "number": "1",
  "title": "Reflection.",
  "body": "Reflection  Enter a response to both of the following tasks:   Ask a question about the material, either about something you're not sure you fully understand, or a what if question.    Give a percentage from 0 to 100 that reflects how confident you are with the material you just read about, and give one sentence as to why you feel that way. 0 means you didn't actually do the reading and 100 means that everything makes sense so far and you think you are completely ready to engage with the material more deeply.     "
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
  "body": "Why rref?  Write the associated system of linear equations for each of the matrices below.          Which system of equations would you prefer to be asked to solve on an exam?             "
},
{
  "id": "ws-rref-3-2",
  "level": "2",
  "url": "sec-rref.html#ws-rref-3-2",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "Gauss-Jordan algorithm.",
  "body": "Gauss-Jordan algorithm  Use Gauss-Jordan elimination to put each of the matrices below into reduced row echelon form.                                         "
},
{
  "id": "ws-rref-4-1",
  "level": "2",
  "url": "sec-rref.html#ws-rref-4-1",
  "type": "Worksheet Exercise",
  "number": "3",
  "title": "Form of matrices.",
  "body": "Form of matrices  For each of the following matrices, say if it is in reduced row echelon form. If it isn't, say whether it is in row echelon form or if it's in neither form.                                                  rref    rref    ref    neither    neither    neither    rref    rref     "
},
{
  "id": "ws-rref-4-2",
  "level": "2",
  "url": "sec-rref.html#ws-rref-4-2",
  "type": "Worksheet Exercise",
  "number": "4",
  "title": "",
  "body": " Write down the associated linear system of equations for , and . What observations and questions do you have about these systems?              "
},
{
  "id": "rref_matrixforms_prob1",
  "level": "2",
  "url": "sec-rref.html#rref_matrixforms_prob1",
  "type": "Exercise",
  "number": "1.4.1",
  "title": "",
  "body": "   Determine whether the following matrices are in echelon form, reduced echelon form or not in echelon form.  a.   Choose    Echelon Form    Reduced Echelon Form    Not in Echelon Form     b.   Choose    Echelon Form    Reduced Echelon Form    Not in Echelon Form     c.   Choose    Echelon Form    Reduced Echelon Form    Not in Echelon Form     d.   Choose    Echelon Form    Reduced Echelon Form    Not in Echelon Form                              "
},
{
  "id": "rref_matrixforms_prob2",
  "level": "2",
  "url": "sec-rref.html#rref_matrixforms_prob2",
  "type": "Exercise",
  "number": "1.4.2",
  "title": "",
  "body": "   Determine whether the following matrices are in echelon form, reduced echelon form or not in echelon form.  a.   Choose    Echelon Form    Reduced Echelon Form    Not in Echelon Form     b.   Choose    Echelon Form    Reduced Echelon Form    Not in Echelon Form     c.   Choose    Echelon Form    Reduced Echelon Form    Not in Echelon Form     d.   Choose    Echelon Form    Reduced Echelon Form    Not in Echelon Form                              "
},
{
  "id": "rref_performgauss1",
  "level": "2",
  "url": "sec-rref.html#rref_performgauss1",
  "type": "Exercise",
  "number": "1.4.3",
  "title": "",
  "body": "   Solve the following system using augmented matrix methods:  (a) The initial matrix is:              (b) First, perform the Row Operation . The resulting matrix is:              (c) Next, perform the operation . The resulting matrix is:              (d) Finish simplifying the augmented matrix. The reduced matrix is:              (e) What are the solutions to the system?                                                                                                                                             "
},
{
  "id": "rref_performgauss2",
  "level": "2",
  "url": "sec-rref.html#rref_performgauss2",
  "type": "Exercise",
  "number": "1.4.4",
  "title": "",
  "body": "   Reduce the matrix to reduced row-echelon form.   First, do , resulting in  Then, do , resulting in Next, do , resulting in  Now we can multiply by a constant to create the leading 1, and then do the backwards steps.       "
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
  "body": "     rref  "
},
{
  "id": "exer-rref-2-4",
  "level": "2",
  "url": "sec-rref.html#exer-rref-2-4",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": "       No, the leading in the second row doesn't appear to the right of the leading in the row above.  "
},
{
  "id": "exer-rref-2-5",
  "level": "2",
  "url": "sec-rref.html#exer-rref-2-5",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": "     No, the leading in the second row doesn't appear to the right of the leading in the row above, and not every entry in the same column as a leading is .  "
},
{
  "id": "exer-rref-2-6",
  "level": "2",
  "url": "sec-rref.html#exer-rref-2-6",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": "     Yes  "
},
{
  "id": "exer-rref-2-7",
  "level": "2",
  "url": "sec-rref.html#exer-rref-2-7",
  "type": "Exercise",
  "number": "5",
  "title": "",
  "body": "     Yes  "
},
{
  "id": "exer-rref-2-8",
  "level": "2",
  "url": "sec-rref.html#exer-rref-2-8",
  "type": "Exercise",
  "number": "6",
  "title": "",
  "body": "     Yes  "
},
{
  "id": "exer-rref-2-9",
  "level": "2",
  "url": "sec-rref.html#exer-rref-2-9",
  "type": "Exercise",
  "number": "7",
  "title": "",
  "body": "     No, any rows of all zeros have to be at the bottom.  "
},
{
  "id": "exer-rref-2-10",
  "level": "2",
  "url": "sec-rref.html#exer-rref-2-10",
  "type": "Exercise",
  "number": "8",
  "title": "",
  "body": "     Yes  "
},
{
  "id": "exer-rref-2-11",
  "level": "2",
  "url": "sec-rref.html#exer-rref-2-11",
  "type": "Exercise",
  "number": "9",
  "title": "",
  "body": "     No, there are nonzero entries in the same column as leading 's.  "
},
{
  "id": "exer-rref-2-12",
  "level": "2",
  "url": "sec-rref.html#exer-rref-2-12",
  "type": "Exercise",
  "number": "10",
  "title": "",
  "body": "     Yes  "
},
{
  "id": "exer-rref-2-13",
  "level": "2",
  "url": "sec-rref.html#exer-rref-2-13",
  "type": "Exercise",
  "number": "11",
  "title": "",
  "body": "     Yes  "
},
{
  "id": "exer-rref-2-14",
  "level": "2",
  "url": "sec-rref.html#exer-rref-2-14",
  "type": "Exercise",
  "number": "12",
  "title": "",
  "body": "     Yes  "
},
{
  "id": "exer-rref-2-15",
  "level": "2",
  "url": "sec-rref.html#exer-rref-2-15",
  "type": "Exercise",
  "number": "13",
  "title": "",
  "body": "     No, the first nonzero entry in each row must be a .  "
},
{
  "id": "exer-rref-2-16",
  "level": "2",
  "url": "sec-rref.html#exer-rref-2-16",
  "type": "Exercise",
  "number": "14",
  "title": "",
  "body": "     Yes  "
},
{
  "id": "exer-rref-2-17",
  "level": "2",
  "url": "sec-rref.html#exer-rref-2-17",
  "type": "Exercise",
  "number": "15",
  "title": "",
  "body": "     Yes  "
},
{
  "id": "exer-rref-2-18",
  "level": "2",
  "url": "sec-rref.html#exer-rref-2-18",
  "type": "Exercise",
  "number": "16",
  "title": "",
  "body": "     Yes  "
},
{
  "id": "exer-rref-3-3",
  "level": "2",
  "url": "sec-rref.html#exer-rref-3-3",
  "type": "Exercise",
  "number": "17",
  "title": "",
  "body": "        "
},
{
  "id": "exer-rref-3-4",
  "level": "2",
  "url": "sec-rref.html#exer-rref-3-4",
  "type": "Exercise",
  "number": "18",
  "title": "",
  "body": "        "
},
{
  "id": "exer-rref-3-5",
  "level": "2",
  "url": "sec-rref.html#exer-rref-3-5",
  "type": "Exercise",
  "number": "19",
  "title": "",
  "body": "        "
},
{
  "id": "exer-rref-3-6",
  "level": "2",
  "url": "sec-rref.html#exer-rref-3-6",
  "type": "Exercise",
  "number": "20",
  "title": "",
  "body": "        "
},
{
  "id": "exer-rref-3-7",
  "level": "2",
  "url": "sec-rref.html#exer-rref-3-7",
  "type": "Exercise",
  "number": "21",
  "title": "",
  "body": "        "
},
{
  "id": "exer-rref-3-8",
  "level": "2",
  "url": "sec-rref.html#exer-rref-3-8",
  "type": "Exercise",
  "number": "22",
  "title": "",
  "body": "        "
},
{
  "id": "exer-rref-3-9",
  "level": "2",
  "url": "sec-rref.html#exer-rref-3-9",
  "type": "Exercise",
  "number": "23",
  "title": "",
  "body": "        "
},
{
  "id": "exer-rref-3-10",
  "level": "2",
  "url": "sec-rref.html#exer-rref-3-10",
  "type": "Exercise",
  "number": "24",
  "title": "",
  "body": "        "
},
{
  "id": "exer-rref-3-11",
  "level": "2",
  "url": "sec-rref.html#exer-rref-3-11",
  "type": "Exercise",
  "number": "25",
  "title": "",
  "body": "        "
},
{
  "id": "exer-rref-3-12",
  "level": "2",
  "url": "sec-rref.html#exer-rref-3-12",
  "type": "Exercise",
  "number": "26",
  "title": "",
  "body": "        "
},
{
  "id": "exer-rref-3-13",
  "level": "2",
  "url": "sec-rref.html#exer-rref-3-13",
  "type": "Exercise",
  "number": "27",
  "title": "",
  "body": "        "
},
{
  "id": "exer-rref-3-14",
  "level": "2",
  "url": "sec-rref.html#exer-rref-3-14",
  "type": "Exercise",
  "number": "28",
  "title": "",
  "body": "        "
},
{
  "id": "exer-rref-3-15",
  "level": "2",
  "url": "sec-rref.html#exer-rref-3-15",
  "type": "Exercise",
  "number": "29",
  "title": "",
  "body": "        "
},
{
  "id": "exer-rref-3-16",
  "level": "2",
  "url": "sec-rref.html#exer-rref-3-16",
  "type": "Exercise",
  "number": "30",
  "title": "",
  "body": "        "
},
{
  "id": "exer-rref-3-17",
  "level": "2",
  "url": "sec-rref.html#exer-rref-3-17",
  "type": "Exercise",
  "number": "31",
  "title": "",
  "body": "        "
},
{
  "id": "exer-rref-3-18",
  "level": "2",
  "url": "sec-rref.html#exer-rref-3-18",
  "type": "Exercise",
  "number": "32",
  "title": "",
  "body": "        "
},
{
  "id": "exer-rref-3-19",
  "level": "2",
  "url": "sec-rref.html#exer-rref-3-19",
  "type": "Exercise",
  "number": "33",
  "title": "",
  "body": "        "
},
{
  "id": "exer-rref-3-20",
  "level": "2",
  "url": "sec-rref.html#exer-rref-3-20",
  "type": "Exercise",
  "number": "34",
  "title": "",
  "body": "        "
},
{
  "id": "sec-testing-things",
  "level": "1",
  "url": "sec-testing-things.html",
  "type": "Section",
  "number": "2.1",
  "title": "Testing things",
  "body": " Testing things   a number line     labels=['0','1','2','3','4','5','6','7','8','9','10']      ${labels[k]}          Testing Interactive and Response together  Some text.   Solutions to the equation     Testing tabs and prefigure  testing the intro   With annotations   Graph of two lines and their point of intersection    a=1\/3  f(x) = 2-x  g(x) = (15-15*x)\/6                      With annotations and dimensions changed to (200,200).   Graph of two lines and their point of intersection    a=1\/3  f(x) = 2-x  g(x) = (15-15*x)\/6                      Without annotations   Graph of two lines and their point of intersection    a=1\/3  f(x) = 2-x  g(x) = (15-15*x)\/6                Participate     Identify matrices in reduced row echelon form and row echelon form    Use Gauss-Jordan elimination to put matrices into reduced row echelon form       Why rref?  Write the associated system of linear equations for each of the matrices below.          Which system of equations would you prefer to be asked to solve on an exam?              2. Gauss-Jordan algorithm   Use Gauss-Jordan elimination to put each of the matrices below into reduced row echelon form.                                 3. Form of matrices   For each of the following matrices, say if it is in reduced row echelon form. If it isn't, say whether it is in row echelon form or if it's in neither form.        rref        rref        ref        neither        neither        neither        rref        rref     Write down the associated linear system of equations for part , part and part . What observations and questions do you have about these systems?                 Non 1-1 Matching Problem, Function Types matching function types  Sort the following functions into their correct categories.   Review Active Prelude to Calculus url.    Linear       Quadratic       Exponential     Power      How a matrix is indexed, old markup  In the matrix what is ?       The entry in the second row and third column is 6.      The row number comes first, then the column number.      Incorrect. If you're stuck, try reviewing the definition of matrix .      How a matrix is indexed, new markup  In the matrix what is ?        The number in the second row and third column is .       You gave the entry in the third row and second column, but is the number in the second row and third column.      Incorrect. If you're stuck, try reviewing the definition of matrix .       Solve a fruit puzzle, image child of paragraph    an algebra puzzle involving food, claiming most people can't solve it    The image above says that three apples total 18, while an apple plus two bunches of bananas total 14, and a bunch of bananas minus cherries equals 2.  Then it asks a question: how much does cherries plus an apple plus a bunch of bananas equal? The answer is        Each apple is worth 6, each bunch of 4 bananas is worth 4, so each banana is worth 1, and each group of cherries is worth 2. There are only 3 bananas in the question to answer, so 2+6+3=11.       You did the algebra correctly! But this puzzle also contains a visual trick, designed to make people get the question wrong. Earlier on, there are 4 bananas in each bunch of bananas, so each banana is worth 1. But in the question you are asked to answer, the bunch of bananas picture has changed and contains 3 bananas, not 4.      Solve a fruit puzzle, image child of figure    an algebra puzzle involving food, claiming most people can't solve it    The image above says that three apples total 18, while an apple plus two bunches of bananas total 14, and a bunch of bananas minus cherries equals 2.  Then it asks a question: how much does cherries plus an apple plus a bunch of bananas equal? The answer is        Each apple is worth 6, each bunch of 4 bananas is worth 4, so each banana is worth 1, and each group of cherries is worth 2. There are only 3 bananas in the question to answer, so 2+6+3=11.       You did the algebra correctly! But this puzzle also contains a visual trick, designed to make people get the question wrong. Earlier on, there are 4 bananas in each bunch of bananas, so each banana is worth 1. But in the question you are asked to answer, the bunch of bananas picture has changed and contains 3 bananas, not 4.      Solve a fruit puzzle, image child of statement   an algebra puzzle involving food, claiming most people can't solve it   The image above says that three apples total 18, while an apple plus two bunches of bananas total 14, and a bunch of bananas minus cherries equals 2.  Then it asks a question: how much does cherries plus an apple plus a bunch of bananas equal? The answer is        Each apple is worth 6, each bunch of 4 bananas is worth 4, so each banana is worth 1, and each group of cherries is worth 2. There are only 3 bananas in the question to answer, so 2+6+3=11.       You did the algebra correctly! But this puzzle also contains a visual trick, designed to make people get the question wrong. Earlier on, there are 4 bananas in each bunch of bananas, so each banana is worth 1. But in the question you are asked to answer, the bunch of bananas picture has changed and contains 3 bananas, not 4.      MultiAnswer, and the logical and  This problem uses a MultiAnswer, where multiple blanks are needed for the right answer. Since the checking of these problems often involves logic, we also demonstrate how to replace the perl and in the pretext source, since ampersands are reserved characters.    Enter two numbers that are equal, and the first one must be a 2:                   "
},
{
  "id": "test-response",
  "level": "2",
  "url": "sec-testing-things.html#test-response",
  "type": "Activity",
  "number": "2.1.1",
  "title": "Testing Interactive and Response together.",
  "body": "Testing Interactive and Response together  Some text.   Solutions to the equation    "
},
{
  "id": "sec-testing-things-4",
  "level": "2",
  "url": "sec-testing-things.html#sec-testing-things-4",
  "type": "Activity",
  "number": "2.1.3",
  "title": "Testing tabs and prefigure.",
  "body": "Testing tabs and prefigure  testing the intro   With annotations   Graph of two lines and their point of intersection    a=1\/3  f(x) = 2-x  g(x) = (15-15*x)\/6                      With annotations and dimensions changed to (200,200).   Graph of two lines and their point of intersection    a=1\/3  f(x) = 2-x  g(x) = (15-15*x)\/6                      Without annotations   Graph of two lines and their point of intersection    a=1\/3  f(x) = 2-x  g(x) = (15-15*x)\/6               "
},
{
  "id": "ws-rrefa-2",
  "level": "2",
  "url": "sec-testing-things.html#ws-rrefa-2",
  "type": "Objectives",
  "number": "2.1",
  "title": "",
  "body": "   Identify matrices in reduced row echelon form and row echelon form    Use Gauss-Jordan elimination to put matrices into reduced row echelon form    "
},
{
  "id": "ws-rrefa-3-1",
  "level": "2",
  "url": "sec-testing-things.html#ws-rrefa-3-1",
  "type": "Worksheet Exercise",
  "number": "2.1.1",
  "title": "Why rref?",
  "body": "Why rref?  Write the associated system of linear equations for each of the matrices below.          Which system of equations would you prefer to be asked to solve on an exam?             "
},
{
  "id": "ws-rrefa-3-2-3",
  "level": "2",
  "url": "sec-testing-things.html#ws-rrefa-3-2-3",
  "type": "Worksheet Exercise",
  "number": "2.1.a",
  "title": "",
  "body": "        "
},
{
  "id": "ws-rrefa-3-2-4",
  "level": "2",
  "url": "sec-testing-things.html#ws-rrefa-3-2-4",
  "type": "Worksheet Exercise",
  "number": "2.1.b",
  "title": "",
  "body": "        "
},
{
  "id": "ws-rrefa-3-2-5",
  "level": "2",
  "url": "sec-testing-things.html#ws-rrefa-3-2-5",
  "type": "Worksheet Exercise",
  "number": "2.1.c",
  "title": "",
  "body": "        "
},
{
  "id": "ws-rrefa-4-1-3",
  "level": "2",
  "url": "sec-testing-things.html#ws-rrefa-4-1-3",
  "type": "Worksheet Exercise",
  "number": "2.1.a",
  "title": "",
  "body": "     rref  "
},
{
  "id": "ws-rrefa-4-1-4",
  "level": "2",
  "url": "sec-testing-things.html#ws-rrefa-4-1-4",
  "type": "Worksheet Exercise",
  "number": "2.1.b",
  "title": "",
  "body": "     rref  "
},
{
  "id": "rrefsys1a",
  "level": "2",
  "url": "sec-testing-things.html#rrefsys1a",
  "type": "Worksheet Exercise",
  "number": "2.1.c",
  "title": "",
  "body": "     ref  "
},
{
  "id": "ws-rrefa-4-1-6",
  "level": "2",
  "url": "sec-testing-things.html#ws-rrefa-4-1-6",
  "type": "Worksheet Exercise",
  "number": "2.1.d",
  "title": "",
  "body": "     neither  "
},
{
  "id": "ws-rrefa-4-1-7",
  "level": "2",
  "url": "sec-testing-things.html#ws-rrefa-4-1-7",
  "type": "Worksheet Exercise",
  "number": "2.1.e",
  "title": "",
  "body": "     neither  "
},
{
  "id": "ws-rrefa-4-1-8",
  "level": "2",
  "url": "sec-testing-things.html#ws-rrefa-4-1-8",
  "type": "Worksheet Exercise",
  "number": "2.1.f",
  "title": "",
  "body": "     neither  "
},
{
  "id": "rrefsys2a",
  "level": "2",
  "url": "sec-testing-things.html#rrefsys2a",
  "type": "Worksheet Exercise",
  "number": "2.1.g",
  "title": "",
  "body": "     rref  "
},
{
  "id": "rrefsys3a",
  "level": "2",
  "url": "sec-testing-things.html#rrefsys3a",
  "type": "Worksheet Exercise",
  "number": "2.1.h",
  "title": "",
  "body": "     rref  "
},
{
  "id": "ws-rrefa-4-2",
  "level": "2",
  "url": "sec-testing-things.html#ws-rrefa-4-2",
  "type": "Worksheet Exercise",
  "number": "2.1.4",
  "title": "",
  "body": " Write down the associated linear system of equations for part , part and part . What observations and questions do you have about these systems?              "
},
{
  "id": "matching-function-types",
  "level": "2",
  "url": "sec-testing-things.html#matching-function-types",
  "type": "Activity",
  "number": "2.1.4",
  "title": "Non 1-1 Matching Problem, Function Types.",
  "body": "Non 1-1 Matching Problem, Function Types matching function types  Sort the following functions into their correct categories.   Review Active Prelude to Calculus url.    Linear       Quadratic       Exponential     Power     "
},
{
  "id": "matrix-indices1",
  "level": "2",
  "url": "sec-testing-things.html#matrix-indices1",
  "type": "Activity",
  "number": "2.1.5",
  "title": "How a matrix is indexed, old markup.",
  "body": "How a matrix is indexed, old markup  In the matrix what is ?       The entry in the second row and third column is 6.      The row number comes first, then the column number.      Incorrect. If you're stuck, try reviewing the definition of matrix .     "
},
{
  "id": "matrix-indices2",
  "level": "2",
  "url": "sec-testing-things.html#matrix-indices2",
  "type": "Activity",
  "number": "2.1.6",
  "title": "How a matrix is indexed, new markup.",
  "body": "How a matrix is indexed, new markup  In the matrix what is ?        The number in the second row and third column is .       You gave the entry in the third row and second column, but is the number in the second row and third column.      Incorrect. If you're stuck, try reviewing the definition of matrix .      "
},
{
  "id": "fruit-puzzle1",
  "level": "2",
  "url": "sec-testing-things.html#fruit-puzzle1",
  "type": "Activity",
  "number": "2.1.7",
  "title": "Solve a fruit puzzle, image child of paragraph.",
  "body": "Solve a fruit puzzle, image child of paragraph    an algebra puzzle involving food, claiming most people can't solve it    The image above says that three apples total 18, while an apple plus two bunches of bananas total 14, and a bunch of bananas minus cherries equals 2.  Then it asks a question: how much does cherries plus an apple plus a bunch of bananas equal? The answer is        Each apple is worth 6, each bunch of 4 bananas is worth 4, so each banana is worth 1, and each group of cherries is worth 2. There are only 3 bananas in the question to answer, so 2+6+3=11.       You did the algebra correctly! But this puzzle also contains a visual trick, designed to make people get the question wrong. Earlier on, there are 4 bananas in each bunch of bananas, so each banana is worth 1. But in the question you are asked to answer, the bunch of bananas picture has changed and contains 3 bananas, not 4.     "
},
{
  "id": "fruit-puzzle2",
  "level": "2",
  "url": "sec-testing-things.html#fruit-puzzle2",
  "type": "Activity",
  "number": "2.1.8",
  "title": "Solve a fruit puzzle, image child of figure.",
  "body": "Solve a fruit puzzle, image child of figure    an algebra puzzle involving food, claiming most people can't solve it    The image above says that three apples total 18, while an apple plus two bunches of bananas total 14, and a bunch of bananas minus cherries equals 2.  Then it asks a question: how much does cherries plus an apple plus a bunch of bananas equal? The answer is        Each apple is worth 6, each bunch of 4 bananas is worth 4, so each banana is worth 1, and each group of cherries is worth 2. There are only 3 bananas in the question to answer, so 2+6+3=11.       You did the algebra correctly! But this puzzle also contains a visual trick, designed to make people get the question wrong. Earlier on, there are 4 bananas in each bunch of bananas, so each banana is worth 1. But in the question you are asked to answer, the bunch of bananas picture has changed and contains 3 bananas, not 4.     "
},
{
  "id": "fruit-puzzle3",
  "level": "2",
  "url": "sec-testing-things.html#fruit-puzzle3",
  "type": "Activity",
  "number": "2.1.10",
  "title": "Solve a fruit puzzle, image child of statement.",
  "body": "Solve a fruit puzzle, image child of statement   an algebra puzzle involving food, claiming most people can't solve it   The image above says that three apples total 18, while an apple plus two bunches of bananas total 14, and a bunch of bananas minus cherries equals 2.  Then it asks a question: how much does cherries plus an apple plus a bunch of bananas equal? The answer is        Each apple is worth 6, each bunch of 4 bananas is worth 4, so each banana is worth 1, and each group of cherries is worth 2. There are only 3 bananas in the question to answer, so 2+6+3=11.       You did the algebra correctly! But this puzzle also contains a visual trick, designed to make people get the question wrong. Earlier on, there are 4 bananas in each bunch of bananas, so each banana is worth 1. But in the question you are asked to answer, the bunch of bananas picture has changed and contains 3 bananas, not 4.     "
},
{
  "id": "testmultianswer",
  "level": "2",
  "url": "sec-testing-things.html#testmultianswer",
  "type": "Activity",
  "number": "2.1.11",
  "title": "MultiAnswer, and the logical “and”.",
  "body": "MultiAnswer, and the logical and  This problem uses a MultiAnswer, where multiple blanks are needed for the right answer. Since the checking of these problems often involves logic, we also demonstrate how to replace the perl and in the pretext source, since ampersands are reserved characters.    Enter two numbers that are equal, and the first one must be a 2:                  "
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
