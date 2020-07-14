# 4.1.1 Intro to React

---

### What is React?

"A JavaScript library for building user interfaces"

---

An _open-source project_ built and maintained by **facebook**.

---

### Super popular!

<img src="./assets/npm-trends.png" />

---

### Why is this needed?

- Dynamic apps have lots of **front-end state**
- Without the right tools, it's very easy to wind up with **spaghetti code**
- Build apps faster ⚡️
- Better **user experience**

---

# Components

- Small bits of code representing a portion of the UI
- Reusable
- Dynamic (can update the UI based on changes)

---

```jsx live=true clickToReveal=true
function GoButton(props) {
  return (
    <button className="btn" onClick={props.onClick}>
      Go!
    </button>
  );
}

render(<GoButton onClick={() => alert("hi")} />);
//props is a parameter. So props.onClick creates a key called onClick. So in the render, we declare what the value for that key needs to be and it is stored in the props object.
```

---

# JSX: HTML-in-JS

- JSX is syntax that _compiles to JS_.

---

# Compiling

<img src="./assets/compiled.png" />

---

## Runtime vs. Buildtime

- JS is typically compiled _just-in-time_: in the browser, right before it's run.
- Mobile apps, on the other hand, need to be compiled ahead of time.

---

### Compiling JSX to JS

```js
// Before
function GoButton(props) {
  return (
    <button className="btn" onClick={props.handleClick}>
      Go!
    </button>
  );
}

// After
function GoButton(props) {
  return React.createElement(
    "button",
    {
      className: "btn",
      onClick: props.handleClick,
    },
    "Go!"
  );
}
```

---

# Build Systems

- Compile JSX to JS
- Combine many JS files into a single "bundle"
- Running a development server
- Checking your code for problems

---

### JSX ≠ HTML

HTML:

```html
<h1 class="title">Hello</h1>
<label for="name-selector">Select your name</label>
```

JSX:

```jsx
<h1 className="title">Hello</h1>
<label htmlFor="name-selector">Select your name</label>
```

---

# Squigglies { }

A _slot_ in which we can write JavaScript expressions.

---

```jsx
let index = 0;

<div id={"item-" + index} />;
```

---

```jsx live=true
const awakeStudents = 10;
const asleepStudents = 0;

render(
  <div>There are {awakeStudents + asleepStudents} students in the class.</div>
);
```

---

```jsx
<li className={isOnline && "green"}>{user.username}</li>
//if the person isOnline, it'll use the classname green. Otherwise, isOnline will be evaluted to false, className will be passed the boolean value of false and the li won't have a className.
// ⚠️ New notation! another way to use of &&.
```

---

# Exercise

Convert the following JSX snippets into HTML.

The goal is to learn how to read JSX / predict what HTML it will produce.

---

```jsx
let birthdayCakeImage = '/images/cake.jpg';
let altText = 'Photo of fancy birthday cake';
let age = 10;

<div className="wrapper">
  <img src="./assets/lego.png"dayCakeImage} alt={altText} />
  <p>Happy {age}th birthday!</p>
</div>;
```

<div class= 'wrapper'>
  <img src="/images/cake.jpg" alt="Photo of fancy birthday cake">
  <p></p>
---

Convert this one too:

```jsx
let agreeToTerms = false;

<div>
  <label htmlFor="terms-of-service">
    <input type="checkbox" id="terms-of-service" />I agree to the terms
  </label>

  {agreeToTerms && <div>YOUR SOUL BELONGS TO ME MWAHAHAHAHAAAAAAHHHHHH!!!</div>}
</div>;
```

```html
<div>
  <label for="terms-of-service">
    <input type="checkbox" id="teroms-of-service" />I agree to terms
  </label>
  <!-- since agreetoTerms is false, the div with "YOUR SOUL etc" will not be rendered -->
</div>
```

---

Convert:

```jsx
const pets = [
  {
    name: "Bark Obama",
    age: 3,
    species: "dog",
    breed: "Labradoodle",
  },
  {
    name: "Chairman Meow",
    age: 8,
    species: "cat",
    breed: "ragdoll",
  },
];

<div>
  <h1 className="title">My pets:</h1>
  <ul>
    <li>
      <h2>{pets[0].name}</h2> //Bark Obama
      <table>
        <thead>
          <tr>
            <th>Age</th>
            <th>Species</th>
            <th>Breed</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{pets[0].age}</td> //3
            <td>{pets[0].species}</td> //dog
            <td>{pets[0].breed}</td> //labradoodle
          </tr>
        </tbody>
      </table>
    </li>

    <li>
      <h2>{pets[1].name}</h2>
      <table>
        <thead>
          <tr>
            <th>Age</th>
            <th>Species</th>
            <th>Breed</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{pets[1].age}</td>
            <td>{pets[1].species}</td>
            <td>{pets[1].breed}</td>
          </tr>
        </tbody>
      </table>
    </li>
  </ul>
</div>;
```

---

# Rendering

```html
<html>
  <body>
    <div id="root"></div>
    <script src="./app.js"></script>
  </body>
</html>
```

```jsx
// app.js
ReactDOM.render(<div>Hello world</div>, document.querySelector("#root"));
```

---

# React vs ReactDOM

- React is platform-independent
- ReactDOM is all the code specific for web (as opposed to, for example, React Native).

---

#### Most React apps have very sparse HTML documents:

```html
<html>
  <head>
    <title>My kewl homepage</title>
  </head>
  <body>
    <noscript>This page requires Javascript</noscript>
    <div id="root"></div>
  <body>
</html>
```

**Everything** else gets created by React.

---

# React Components

- A bundle of reusable JSX that can be passed different data.
- Think of it like a "supercharged" HTML element.

---

### Components, all the way down

- Can be really tiny: `<Button>`, `<Heading>`, `<Input>`
- Can be an entire application: `<App>`
- Lots of stuff in-between

---

<img src="./assets/lego.png" />

---

<img src="./assets/intro-hierarchy.png" />

---

### Exercise: Break an image into components

_to draw along with me, open the images with [JS Paint](https://jspaint.app)_

---

<img src="./assets/todomvc.png" />

---

<img src="./assets/blog.png" />

---

<img src="./assets/bank-app.png" />
