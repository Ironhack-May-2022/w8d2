# CORS Problem

One way to fix this would be to use the cors package as added in config/index.js.

More info about CORS can be found [here](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)

```js
  app.set("trust proxy", 1);

  // controls a very specific header to pass headers from the frontend
  app.use(
    cors({
      credentials: true,
      origin: process.env.ORIGIN || "http://localhost:3000",
    })
  );
```

Then a request from the React client to the server would look like this:
```js
axios.get('http://localhost:5005/api/projects)
```

An alternative that is recommended is to use the proxy by 'Create React App'
```js
// client/package.json
{
  "name": "client",
  "version": "0.1.0",
  "proxy": "http://localhost:5005",
  // 
}
```

Then a request from the React client to the server would look like this:
```js
axios.get('/api/projects)
```

The advantage here is that you don't need to change the url when the app is deployed.