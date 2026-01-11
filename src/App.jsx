import Greetings from "./Greetings";
import Welcome from "./welcome";
import Messages from "./Messages";
import Image from "./image";
import Rating from "./Rating";
import { useState } from "react";
import "./App.css"

function App() {
  const [count, setcount] = useState(0);
  const [likes, setlikes] = useState(0);
  const [show, setshow] = useState(true);
  const [Message, setMessage] = useState("GOOD MORNING!🌞");
  const [task, setTask] = useState(""); //store input box text
  const [todos, setTodos] = useState([]); //store list of tasks

  return (
    <>
      <Greetings />
      <Welcome name="😎Harsh" />
      <br />
      <Welcome name="🤓Falak" />
      <br />
      <h1 className="headline">FIRST REACT EXPERIENCE</h1>
      <p>This is my first React app</p>
      <h2>Hi, my name is Harsh!</h2>
      <Greetings />
      <hr />
      <br />
      <Messages name="Harsh" unread={5} />
      <br />
      <hr />
      <Messages name="Falak" unread={2} />
      <br />
      <hr />
      <Image src="image.png" alt="WindowsXP" name="WindowsXP" />
      <br />
      <hr />
      <Rating product="Laptop" stars={4} />
      <br />
      <Rating product="Washing machine" stars={5} />
      <br />
      <hr />
      <h3 className="Count">count = {count}</h3>
      <br />
      <button className="plusone" onClick={() => setcount(count + 1)}>PLUS ONE</button>
      
      <button className="reset" onClick={() => setcount(0)}>RESET</button>
      
      <button className="minusone" onClick={() => { if (count > 0) setcount(count - 1) }}>MINUS ONE</button>
      
      <button className="twice" onClick={() => setcount(count * 2)}>TWICE</button>
      <br />
      <br />
      <hr />
      <b>❤️ {likes}</b>
      <br />
      <button onClick={() => setlikes(likes + 1)}>❤️</button>
      <br />
      <hr />
      {show && <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque delectus earum, voluptas deserunt dignissimos quidem. Odio repudiandae vero modi rem. Nihil, ea deserunt. Quod aliquam quisquam doloribus, at excepturi aspernatur!</p>}
      <br />
      <button style={(show?{color:"blue"}:{})} onClick={() => setshow(!show)}>
        {show ? "HIDE TEXT" : "SHOW TEXT"}
      </button>
      <hr />
      <h3 style={Message === "GOOD MORNING!🌞" ? { color: "blue" } : {}}>{Message}</h3>
      <button onClick={() => setMessage(Message == "GOOD MORNING!🌞" ? "GOOD NIGHT!🌙" : "GOOD MORNING!🌞")}>
        Change Message!
      </button>
      <hr />
      <div style={{ padding: "0px" }}>
        <h1 style={{ color: "green", backgroundColor: "yellow", textAlign: "center" }}> TO DO APP </h1>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a task"
          style={{}}
        />
        <button style={{ backgroundColor: "lightgreen" }} onClick={() => {
          if (task.trim() === "") return;
          setTodos([...todos, task]);
          setTask("");
        }}>
          Add Task
        </button>
        <button style={{ backgroundColor: "lightcoral" }} onClick={() => setTodos([])}>Clear All</button>
        <ul>
          {todos.map((item, index) => (
            <li key={index}>{item}
              <button style={{ backgroundColor: "black" }} onClick={() => {
                const newTodos = todos.filter((_, i) => i !== index);
                setTodos(newTodos);
              }}>🗑️</button>
            </li>
          ))}
        </ul>
        <hr />
      </div>
    </>
  );
}

export default App;
