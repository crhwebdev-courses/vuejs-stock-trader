# vue-cli

A mock stock trading program created for the udemy course Vuejs 2: The Complete Guide.

## Firebase Setup

This project uses a firebase real-time database instance. You should set this up and then create a 'src/resources/firebase.js' file. The file should include code that looks like the following:

```
export default {
  databaseURL: "https://your-database-url-here",
};
```

## Build Setup

```bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
