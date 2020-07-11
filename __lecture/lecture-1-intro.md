# 4.1.1 Intro to React

---

### What is React?

"A JavaScript library for building user interfaces"

---

An _open-source project_ built and maintained by **facebook**.

---

### Super popular!

<img src="./assets/npm-trends.png" />
*
-most popular
-most in demand in compagnie
-a JS library
*
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
- Dynamic (can update the UI based on changes, change overtime) (not like a template)

---

```jsx live=true clickToReveal=true
function GoButton(props) {
  return (
    <button className="btn" onClick={props.onClick}>
      Go!
    </button>
  );
}
//calling the function, param html syntaxe
render(<GoButton onClick={() => alert("hi")} />);
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

_
className because could have abigue cases with JS
_

---

# Squigglies { }

A _slot_ in which we can write JavaScript expressions.

---

```jsx
let index = 0;

<div id={"item-" + index} />;
*{can put any JS expression}*
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

code to HTML
*
<div class="wrapper">
  <img src="/images/cake.jpg" alt= "Photo of fancy birthday cake" />
  <p>Happy 10th birthday!</p>
</div>;

*
```

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

code to HTML
*
<div>
  <label for="terms-of-service">
    <input type="checkbox" id="terms-of-service" />I agree to the terms
  </label>
</div>;
*

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
      <h2>{pets[0].name}</h2>
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
            <td>{pets[0].age}</td>
            <td>{pets[0].species}</td>
            <td>{pets[0].breed}</td>
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

to HTML \*

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
  <h1 class="title">My pets:</h1>
  <ul>
    <li>
      <h2>Bark Obama</h2>
      <table>
        <thead>
          <tr>
            <th>3</th>
            <th>dog</th>
            <th>Labradoodle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>3</td>
            <td>dog</td>
            <td>Labradoodle</td>
          </tr>
        </tbody>
      </table>
    </li>

    <li>
      <h2>Chairman Meow</h2>
      <table>
        <thead>
          <tr>
            <th>8</th>
            <th>cat</th>
            <th>ragdoll</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>8</td>
            <td>cat</td>
            <td>ragdoll</td>
          </tr>
        </tbody>
      </table>
    </li>

  </ul>
</div>;
*

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
- ReactDOM is all the code specific for web (as opposed to, for example, React Native). = only one of this in application

---

#### Most React apps have very sparse HTML documents:

```html
<html>
  <head>
    <title>My kewl homepage</title>
  </head>
  <body>
    <noscript>This page requires Javascript</noscript>
    <!-- no script disable JS, it show the user a message in case theirs no JS -->
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
