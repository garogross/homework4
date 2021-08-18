import Container from "./Container";
import "./App.css"


function App() {
  const addDateHandler = data => {
    console.log("app.js", data)
    
  }
  return (
    <div className="App">
      <Container onAddDate={addDateHandler}/>
    </div>
  );
}

export default App;
