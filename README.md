# Emergency Service Project
Q1. Difference between getElementById, getElementsByClassName, querySelector, querySelectorAll?
1.getElementById = This is used when you want to select an element using its id. it will always return one element.
2.getElementsByClassName = This is for selecting elements by their class name. It enbles you to list of all elements with that class, so if there are multiple, you need to loop through them.
3.querySelector = This one is more flexible because you can use any CSS selector such as, id, class, tag, attribute. But it only returns the first match.
4.querySelectorAll = Works like querySelector but instead of just the first element, it returns all matching elements as a NodeList.

Q2. How to create and insert a new element into the DOM?
ans- Im js, we can create new element document.createElement() and then put it inside the page with methods like appendChild(). 
like,
let newDiv = document.createElement("div");
newDiv.textContent = "Hello World";
document.body.appendChild(newDiv);

Q3. What is Event Bubbling and how does it work?
ans- Event bubbling means when an event happens on an element, it doesn’t just stay there. It also “bubbles up” to its parent elements, all the way up to the root.

Q4. What is Event Delegation? Why is it useful?
Event Delegation uses event bubbling to handle events on a parent element instead of adding listeners to many child elements.
It is useful when having many items, such as list items or buttons.

Q5. What is the difference between preventDefault() and stopPropagation() methods?
ans- the key difference is,
preventDefault()- stops the browser’s default behavior (form submit, link open, etc.).
stopPropagation()- block the event from reaching parent elements.
