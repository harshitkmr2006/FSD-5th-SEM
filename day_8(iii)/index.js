function Child(props) {
    return <h1>Hello {props.name}</h1>;
}

function Parent() {
    return <Child name="Harshit Pratap ,, Bhai chits bna le 14th se exams hai 😭😭" />;
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Parent />);