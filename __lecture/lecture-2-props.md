# 4.1.2 Props

- The same component can work with **different data**
- Similar to attributes on HTML elements (consider `<img>`)

---

### Designing props

Here's part of the Spotify desktop app:

<img src="./assets/spotify-artists.png" />

---

Our "output" HTML might look like this:

```html
<div>
  <img src="skrillex.jpg" />
  <h3>Skrillex</h3>
  <p>9 SONGS</p>
</div>
```

What are the pieces of dynamic data?

---

Our component might look like this:

```jsx
function RecommendedArtist(props) {
  return (
    <div>
      <img src={props.imageUrl} />
      <h3>{props.artistName}</h3>
      <p>{props.numOfSongs} SONGS</p>
    </div>
  );
}
```

---

We can use it like this:

```jsx
<RecommendedArtist
  imageUrl="skrillex.jpg"
  artistName="Skrillex"
  numOfSongs={9}
/>
<RecommendedArtist
  imageUrl="helmet-thing.jpg"
  artistName="Disciple Round Table"
  numOfSongs={1}
/>
<RecommendedArtist
  imageUrl="geoxor.jpg"
  artistName="Geoxor"
  numOfSongs={1}
/>

```

---

### Deconstructed props

A common paradigm:

```jsx
const UserProfile = ({ username, email, bio }) => {
  return (
    <div>
      Username: {username}
      Email: {email}
      Biography: {bio}
    </div>
  );
};
```

---

# Exercise

Make the components reusable by using props.

```jsx
function VideoPlayer(props) {
  return (
    <div>
      <video
        src={videoSource}
        width={width}
        height={heigth}
      />
      <p>Cat playing the piano!!</p>
    </div>
  );
}

// SOLUTION

<VideoPlayer 
videoSource="http://www.youtube.com/qwerty" 
width={400} 
height={500}
/>
```

---

```jsx
function Tweet(props) {
  return (
    <div>
      <Avatar src="{src}" />
      <div>
        <p>
          <span className="user-name">{username}</span>
          <span className="handle">@{handle}</span>
          <span className="date">{date}</span>
        </p>
        <p>{content}</p>
        <div>
          <button>Reply</button>
          <button>Retweet</button>
          <button>Like</button>
          <button>Share</button>
        </div>
      </div>
    </div>
  );
}

// SOLUTION

// <Tweet
//   src="/images/bunny.jpg"
//   content="Alfalfa is the best food don't @ me"
//   username="Mr. Bunny"
//   handle="mr-bunny"
//   date="Oct 29th"
// />
```

---

```jsx
function Header(props) {
  return (
    <header>
      <h1>My great website</h1>
      <nav>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </nav>
    </header>
  );
}

// SOLUTION
// It would have to change if the header changes for each page
// we visit
```

---

### Mapping over items

Say we have some data:

```js
const storeItems = [
  { id: 'a', price: 19.99, name: 'Monocle' },
  { id: 'b', price: 209.99, name: 'Cane' },
  { id: 'c', price: 44.99, name: 'Top Hat' },
];
```

---

We want to turn it into this HTML:

```html
<ul>
  <li class="item">
    <h3>Monocle</h3>
    <p>Price: $19.99</p>
    <button>Add to cart</button>
  </li>

  <li class="item">
    <h3>Cane</h3>
    <p>Price: $209.99</p>
    <button>Add to cart</button>
  </li>

  <li class="item">
    <h3>Top Hat</h3>
    <p>Price: $44.99</p>
    <button>Add to cart</button>
  </li>
</ul>
```

---

First, create a component:

```jsx
function StoreItem(props) {
  return (
    <li className="item">
      <h3>{props.name}</h3>
      <p>Price: ${props.price}</p>
      <button>Add to cart</button>
    </li>
  );
}
```

---

Next, **map over our data**, using the component once per item:

```jsx
const storeItems = [
  { id: 'a', price: 19.99, name: 'Monocle' },
  { id: 'b', price: 209.99, name: 'Cane' },
  { id: 'c', price: 44.99, name: 'Top Hat' },
];

function App(props) {
  return (
    <li>
      {storeItems.map((item) => (
        <StoreItem name={item.name} price={item.price} />
      ))}
    </li>
  );
}
```

---

# Exercises

Use `map` in the following snippets.

---

```jsx
const pets = [
  /* omitted */
];

<div>
  <h1 className="title">My pets:</h1>
  <ul>
    <PetInfo
      name={pets[0].name}
      age={pets[0].age}
      species={pets[0].species}
      breed={pets[0].breed}
    />
    <PetInfo
      name={pets[1].name}
      age={pets[1].age}
      species={pets[1].species}
      breed={pets[1].breed}
    />
  </ul>
</div>;
```

---

```jsx
const forecasts = [4, -3, 1, 9, 4, 2, -6];

<div>
  <h1>Weather forecast for the week ahead:</h1>

  <Day>4 degrees</Day>
  <Day>-3 degrees</Day>
  <Day>1 degrees</Day>
  <Day>9 degrees</Day>
  <Day>4 degrees</Day>
  <Day>2 degrees</Day>
  <Day>-6 degrees</Day>
</div>;
```

---

```jsx
const pizzaToppings = [
  { name: 'pepperoni', isVegetarian: false },
  { name: 'green pepper', isVegetarian: true },
  { name: 'broccoli', isVegetarian: true },
  { name: 'sausage', isVegetarian: false },
]

<Pizza>
  <Topping name="green pepper" />
  <Topping name="broccoli" />
</Pizza>
```

Hint: You'll need `filter` as well as `map`
