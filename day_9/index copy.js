<<<<<<< HEAD
d=32;
function f(){
    var a =81;
    f2();
    function f2(){
        console.log(a);
        let b=82;
        f3();
        function f3(){
            console.log(b);
            let c = 21;
            f4();
            function f4(){
                console.log(a);
                console.log(b);
                console.log(c);
                console.log(d);
            }
        }
    }
}
f();
var d;
=======
// const div = document.createElement('root');
// const h1 = document.createElement('h1');
// h1.innerText = "WELCOME TO FSD CLASS";
// div.appendChild(h1);


// Create React root
const root = ReactDOM.createRoot(document.getElementById('root'));

// Create nested elements using React.createElement
const h1 = React.createElement(
  'div',
  {},
  React.createElement(
    'div',
    {},
    React.createElement('div', {}, '1')
  )
);

// Render to DOM
root.render(h1);
>>>>>>> 003f32fb4a37ed79274eb1e7ee6f8c969b0c6837
