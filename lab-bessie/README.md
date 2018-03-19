# Lab 26: Frontend Tooling

##### Minimum Requirements
Create the following component:

##### `<App />`
* should contain the entire application's view and state
* should have a property on the state called `content`
* should create a view with the following display
  * a heading with the title "Generate Cowsay Lorem"
  * a Button that displays "click me"
    * `onClick` of the button should generate new content on the app state using `cowsay` and `faker`
  * a `<pre>` tag that displays the application state