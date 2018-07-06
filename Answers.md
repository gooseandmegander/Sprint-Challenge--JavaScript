# Describe some of the differences between `.forEach` & `.map`.

    The definition of the forEach function states it executes a callback function for each item in a given array. This method doesn't mutate the given array directly, but the callback function may. It also returns undefined. Since it returns undefined and is not mutated, the resultant items are usually stored in another array or used elsewhere. Typically, forEach can be used when we don't want to mutate data.

    Alternatively, the map function does return something. It returns a new array in memory but does not mutate the given array, similar to forEach. ForEach only 'mutates' if the callback function mutates. Map will not mutate the original array. The new transformed data is stored in a new memory location.

# Name five different Types in JavaScript. A Type is something that can represent data. What is so special about Arrays?

    1. Array
    2. Object
    3. Function
    4. Boolean
    5. String

    Arrays are commonly used because they are indexed and ordered, which makes them easy to iterate through; items in an array are adjacent to each other in memory. Data in an array is easy to access if its index is known. Even if the index is not known, iterating through an array is easier than iterating through, for instance, an object. Also, many data structures build upon arrays because of their efficiency.

# 3. What is closure? Can you code out a quick example of a closure?

    The basic explanation of closure is the relationship between functions and scope. The main takeaway of closure is what a function has or doesn't have access to.

    ```
    myName = 'Megan';

    function greeting() {
        yourName = 'Anon';

        function sayHello(name) {
            console.log(`Hello, ${name}!, my name is ${yourName}`);
        }

        sayHello(myName)
    }
    greeting();
    ```

    In this example, the function greeting has access to myName even though it is not explicitly passed to greeting as an argument. This is because of greeting's scope. In this case, greeting and myName are at the same scope level, so greeting can access or 'see' myName. The function sayHello also has access to myName since it's scope is nested within greeting. It also has access to yourName as well, similarly to myName and greeting's relationship. Taking out the name parameter to sayHello doesn't change the result as long as the console.log is refactored:

    ```
    myName = 'Megan';

    function greeting() {
        yourName = 'Anon';

        function sayHello() {
            console.log(`Hello, ${myName}!, my name is ${yourName}`);
        }

        sayHello()
    }
    greeting();
    ```

    This process doesn't work the other way around, though. If yourName were console logged from the outermost scope, an error message will result. This is because functions can 'look out'  beyond their scope to find resources they need, but cannot look inside of a function they are not nested within.

# Describe the four rules of the 'this' keyword. No need to provide examples about it this time :)

    1. Window/Global Object Binding

        Functions in the global scope (not nested) are equivalent to window.[functionName] or the node equivalent. In this context, a 'this' reference inside of the function will refer to the window, which is to the left of the '.'.

    2. Implicit Binding

        Similar to above, implicit binding states whatever object is to the left of the '.' is what 'this' is referring to. The difference is implicit binding refers to an object inside of the window/global object.

    3. New Binding

        When the 'new' keyword is used to create a new instance of an object, 'this' refers to that new object.

    4. Explicit Binding

        When apply or call are used on an object, 'this' is explicitly defined to refer to the arguments those methods are passed. The 'this' will refer to the argument object passed to call or apply, not the object to the left of the '.'.
