### Javascript Course Assessment

## Week 2 Assessment

Try your best to answer each question on your own before looking up the answer online. Once you're done writing your first answer, you can google the question and write the best answer you find.

#### 1. How do you link a css file to your html page?

 //Your Answer
 <link rel="stylesheet" href="style.css">

 //Googled Answer


 #### 2. What is a css class? How do you use declare one in html? How do you use it in css?


 //Your Answer
 a css class is similar to an id but can be used for several tags instead of just being limited to one tag.

 <h2 class = "header">this is a class<h2>         .header {color: blue}
<h3 id = "head">this is an id</h3>                #head {color: purple}

 //Googled Answer


#### 3. The class "heading-box" exists in our html file - write the css code that would:
##### 1) align this box to the center of its container,
##### 2) give it a black border that is 5px wide,
##### 3) make its text appear in the center of the box
.heading-box{
  text-align: center;
  border: solid black 5px;
  align-self: center;  
}

#### 4. What is Bootstrap? Explain a few reasons that you might choose to use it in a project?


 //Your Answer
 Bootstrap is already made css themes that allow you to use buttons, navs, radios, and is based on columns and rows

 //Googled Answer
 Bootstrap is a free front-end framework for faster and easier web development
Bootstrap includes HTML and CSS based design templates for typography, forms, buttons, tables, navigation, modals, image carousels and many other, as well as optional JavaScript plugins
Bootstrap also gives you the ability to easily create responsive designs

#### 5. Name 4 semantic html tags.
<form> <table> <header> <article>

#### 6. What is block scope that became available in ES6? Include how it differs from local and global scope, and what variables are block scoped.

 //Your Answer
  Bloack scope is the scope within {}. What I'm getting from what I googled is that is essentially the same idea as a local scope

 //Googled Answer

 The block statement is often called compound statement in other languages. It allows you to use multiple statements where JavaScript expects only one statement. Combining statements into blocks is a common practice in JavaScript.

 A block is a sequence of statements, local class declarations, and local variable declaration statements within braces.



 #### 7. What is front end development? Can you identify any tools/skills that are uniquely required of front end developers?

 //Your Answer
 front end development is working on the frame work, or what the people see. bootstrap, html, css are all front end

 //Googled Answer

 Pretend a website is a car. There are a lot of things inside of a car that help it run – make it speed up, slow down, even keep on the lights. All of these things you can’t really see – but are really important – that’s the back-end.

But then there are items that you directly use in the car to make it go: your gas and brake pedals, the steering wheel. And there are also a lot of things on that car that make it fun to drive and cool to look at: a racing stripe, a slick leather interior. All the stuff you can directly touch, see or hear? That’s the front end.


 #### 8. Choose one of the new ES6 concepts we learned about this week (namely: block scope, classes, and string interpolation) and write example code that demonstrates the concept, with comments to explain what is going on.

 class Me{
   constructor(age, eyes, hair{
     this.age = age;
     this.eyes = eyes;
     this.hair = hair;
     this.age = age;
   }
 }

var Jake = new Me(23, blue, brown)

 #### 9. What is the difference between a div and a span?
 //Your Answer
 a div is a container

 //Googled Answer
 The <span> tag is used to group inline-elements in a document.

The <span> tag provides no visual change by itself.

The <span> tag provides a way to add a hook to a part of a text or a part of a document.


#### 10. How would you explain the idea of "inheritance" in object oriented programming?


 //Your Answer
 inheritance is giving a class the same properties of a class previously made, but still allowing you to add more attributes to your new class. Example: you can have an animal class that has the attributes that every living animal has. Then you can create new animal classes that each have their own unique attributes, but still all inherit the attributes from the main animal class.
 //Googled Answer
