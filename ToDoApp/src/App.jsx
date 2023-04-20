import { Button, TextField } from "@mui/material";
import "./style.css";
import { useState } from "react";

function App() {
  const[textTarefa,setTextTarefa] = useState("");
  function aparece(){
    console.log(textTarefa)
  }


  return (
    <form action="" className="form-container">
  
      <TextField value = {textTarefa} id="standard-basic" label="Tarefa" variant="standard" placeholder="Digite uma tarefa" onChange={({target}) => setTextTarefa(target.value)}/>
      <Button onClick={aparece}>add</Button>
    </form>
  )
}

export default App
