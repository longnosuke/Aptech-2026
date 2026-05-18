function Greeting() {
  let name = "Cun";
  let country = "Vietnam";
  return (
    <h3>
      Hello, I'm {name} from {country}!
    </h3>
  );
}

function Hello(props) {
  let myStyle = {
    border: "2px solid black",
    borderRadius: "15px",
    padding: "10px",
    color: "green",
    backgroundColor: "#E0E0E0",
  };

  return (
    <div style={myStyle}>
      <h3>
        Hello, I'm {props.name} from {props.country}!
      </h3>
      <p>Nice to meet you!</p>
      <p>I'm {props.age} years old.</p>
    </div>
  );
}

function Welcome() {
  return <h3>Welcome to My App</h3>;
}

export default Welcome;
export { Greeting, Hello };
