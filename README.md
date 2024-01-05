# Word Counter App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm test`

While testing, errors were observed particularly of the below nature:

```sh
TypeError: Cannot destructure property 'basename' of 'React__namespace.useContext(...)' as it is null.
```

And the fix was in the [stackoverflow link](https://stackoverflow.com/questions/76081552/typeerror-cannot-destructure-property-basename-of-react-namespace-usecontex).

---
The problem is with the use of Link. That component needs to appear inside a router, but in your tests it is not.

You can try wrapping the component with a MemoryRouter (which is the lightest one) from react-router-dom to overcome this.

```js
render(<MemoryRouter><Carrinho ... /></MemoryRouter>);
```
---

Launch the test runner in the interactive watch mode.

