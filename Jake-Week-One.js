### Javascript Course Assessment

## Week 1 Assessment

Try your best to answer each question on your own before looking up the answer online. Once you're done writing your first answer, you can google the question and write the best answer you find.

#### 1. Name some of the data types in Javascript.

  // boolean, string, int, null, NaN


  //Googled Answer


#### 2. Describe what "if" does in Javascript.

  //An "if" takes an argument and if that argument is true, the if runs a following piece of code. If the statement is not true, the if can have an else statement that it runs instead.


  //Googled Answer


#### 3. Write a function that takes one number as a parameter and decides if that number is divisble by three or not. If it is, print the number and "is divisible by three". If it is not, print that the number "is not divisble by three".
  //   function myFunction(x){
          if(x % 3 == 0){
            console.log(x + "  is divisible by three")
          }else{
            console.log(x + "  is not divisible by three")
          }
    }
#### 4. What is JSON?

  // what was used before classes were a thing in JS..?


  //JSON (JavaScript Object Notation) is a lightweight data-interchange format. It is easy for humans to read and write. It is easy for machines to parse and generate. It is based on a subset of the JavaScript Programming Language, Standard ECMA-262 3rd Edition - December 1999.

#### 5. Write about yourself in an object, giving at least three properties of you. Then store your object in a variable with your name.
//   var Jake = {
      glasses = true,
      kidney = 1,
      dogs = 2,
      hair = "Light Brown"
  }

#### 6. What is a closure?

  //Your Answer
    Closure is the "this.that" that we use with objects

  //Googled Answer
  The variable add is assigned the return value of a self-invoking function.

  The self-invoking function only runs once. It sets the counter to zero (0), and returns a function expression.

  This way add becomes a function. The "wonderful" part is that it can access the counter in the parent scope.

  This is called a JavaScript closure. It makes it possible for a function to have "private" variables.


#### 7. What's the difference between =, ==, and === in JavaScript?

  //Your Answer
    = assigns a values
    == is if something is the same
    === is exactly the same

  //Googled Answer

#### 8. Create an array with at least 4 items inside it, then access two of the values and console.log() them. Try to access the two values in two different ways.
    var myArray = ["Dog", "Cat", "Bird", "Other Dog"]
    console.log(myArray[2]);
    var myFaveAnimal = myArray[0];
    console.log(myFaveAnimal);
#### 9. Describe the different kinds of loops and why you would use them.

  do/while = do this while this is true

  for = a loop that has 3 parts.

  while = a do/while but upside down

  loops run a block of code until the condition is met

  //Googled Answer

      For for loops
    initialization
      An expression (including assignment expressions) or variable declaration. Typically used to initialize a counter variable. This expression may optionally declare new variables with the var keyword. These variables are not local to the loop, i.e. they are in the same scope the for loop is in. The result of this expression is discarded.
    condition
      An expression to be evaluated before each loop iteration. If this expression evaluates to true, statement is executed. This conditional test is optional. If omitted, the condition always evaluates to true. If the expression evaluates to false, execution skips to the first expression following the for construct.
    final-expression
      An expression to be evaluated at the end of each loop iteration. This occurs before the next evaluation of condition. Generally used to update or increment the counter variable.
    statement
      A statement that is executed as long as the condition evaluates to true. To execute multiple statements within the loop, use a block statement ({ ... }) to group those statements. To execute no statement within the loop, use an empty statement (;).

#### 10. How would you explain "scope" in javascript?

  Scope is like multiple circles inside of each other. The outer most circle is global and can be used anywhere. The inner circles aren't global and can only be used within that circle.. or scope.


  //Googled Answer
