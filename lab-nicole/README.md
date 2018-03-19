### Cowsay Browser and React

This application generates a locally hosted webpage which displays 'Generate Cowsay Lorem' and the button 'Click Me'. When the button is clicked, the page refreshes and the state of the DOM element object is updated, changing the phrase the cow says each time.

This application utilizes multiple dependencies, including:
- babel-core
- babel-loader
- babel-preset-env
- babel-preset-react
- css-loader
- extract-text-webpack-plugin
- html-webpack-plugin
- node-sass
- react
- react-dom
- sass-loader
- webpack@3
- webpack-dev-server@2
- eslint
- faker
- cowsay-browser

To start the application, begin by typing ```npm init -y``` to the terminal to install all your dependencies, and once they have finished type ```npm run watch```. This will compile your React components and render them on the page. 

To view what is created, open your browser and visit ```http://localhost:8080```

When the application is originally started, the state on the App element is set to:
```
content: null,
hasClickedButton: false
```

When the button is pressed, the state is updated to:
```
content: cowsay.say({text: faker.lorem.sentence()}),
hasClickedButton: true
```

The state is then rendered by React and updated every time the button is clicked.