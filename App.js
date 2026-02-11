/** Creating Hello World program using React */
// const heading1 = React.createElement("h1", {id : "heading1"}, "Hello World! from React"); // first argument is tag name, second argument is attributes and third argument is content
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading1);
// console.log(heading1);


// Creating nested elements structure in React
/* <div id = "paernt">
        <div id = "child">
            <h1> I'm H1 Tag</h1>
            <h2> I'm H2 Tag</h2>
        </div>
</div> */
// const parent = React.createElement("div", {id : "parent"}, // ReactElement is an object which is created by React.createElement() method that browser can understand and render on the screen
//     React.createElement("div", {id : "child"},
//         [React.createElement("h1", {}, "I'm H1 Tag") , React.createElement("h2", {}, "I'm H2 Tag")]));

// console.log(parent);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);



/* <div id = "parent">
        <div id = "child1">
                <h1> I'm an H1 Tag </h1>
                <h2> I'm an H2 Tag </h2>
        </div>
        <div id = "child2">
                <h1> I'm an H1 Tag </h1>
                <h2> I'm an H2 Tag </h2>
        </div>
</div> */
const parent1 = React.createElement("div", {id : "parent"}, 
    [React.createElement("div", {id : "child1"},
        [React.createElement("h1", {}, "I'm an H1 Tag") , React.createElement("h2", {}, "I'm an H2 Tag")]),
    React.createElement("div", {id : "child2"},
        [React.createElement("h1", {}, "I'm an H1 Tag") , React.createElement("h2", {}, "I'm an H2 Tag")])]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent1);