### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?
  Callbacks, promises(then,catch), async,await

- What is a Promise?
  a promise is a object that represents either the completion or failure of an asynchronus operation

- What are the differences between an async function and a regular function?
  an async function can await for promises to be resolved a regular function will continue on and not wait for the promise to resolve

- What is the difference between Node.js and Express.js?
  Node.js is a platform that allows for server side js
  Express.js is a framework for Node.js that simplifies the writing of serverside code.

- What is the error-first callback pattern?
  The error-first callback pattern is a standard in Node.js where the first parameter in a callback function is reserved for error objects

- What is middleware?
  middleware is a function that has access to the request and response objects that can execute code between recieving a request and sending a response

- What does the `next` function do?
  the next function passes control from the current funciton to the next function/middleware/route/error handler that is able to run

- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)

```js
async function getUsers() {
  const elie = await $.getJSON("https://api.github.com/users/elie");
  const joel = await $.getJSON("https://api.github.com/users/joelburton");
  const matt = await $.getJSON("https://api.github.com/users/mmmaaatttttt");

  return [elie, matt, joel];
}
```

main issues:

- the code is awaiting 3 times instead of using Promise.all()
- no error handling

depends on the use case:

- could easily be made to accept an arr of names and return a response based on those instead of hardcoding names

Fixed:

```js
async function getUsers(usernames) {
  try{
  const requests = usernames.map((username)=>{
    return await $.getJSON(`https://api.github.com/users/${username}`)
  })
  return await Promise.all(requests)
  }
  catch(e){
    console.log(e)
  }

}
```
