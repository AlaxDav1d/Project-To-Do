import { Button, Checkbox, TextField } from "@mui/material";
import "./style.css";
import { useState } from "react";
import ClearIcon from '@mui/icons-material/Clear';
import { CheckBox, Task } from "@mui/icons-material";

function App() {
  const [textTarefa, setTextTarefa] = useState("");
  const [listTarefa, setListTarefa] = useState([]);

  function aparece() {
    if(!textTarefa){
      alert("nome obrigatorio")
    }else{
    setListTarefa((old) => [...old, {id: Date.now(),title: textTarefa , indfinish:false}])
    setTextTarefa("");
    }
  }

  function some(){
    setListTarefa([])
  }

  function deleteTask(idTask){
    setListTarefa(listTarefa.filter(el => el.id !== idTask))
  }

  function handleFinishedTask(idTask){
    setListTarefa(
    listTarefa.map((task) => task.id === idTask ? {...task, indfinish: !task.indfinish} : task));
  }


  return (
  <>    
    <form action="" className="form-container">
      <TextField value={textTarefa} id="standard-basic" label="Tarefa" variant="standard" placeholder="Digite uma tarefa" onChange={({ target }) => setTextTarefa(target.value)}/>
      <Button onClick={aparece} color="primary">add</Button>
      <Button onClick={some} variant="contained" color="secondary">sumir tarefa</Button>
      {console.log(listTarefa)}
    </form>
    <div className="tudo">
      <div className="cinza">
        {
          listTarefa.map((tarefa) =>(
            <div key={tarefa.id} className="sla">
             
                <div className="task">
                  <div className="dois">
                  <Checkbox onClick={() => handleFinishedTask(tarefa.id)}/>
                  <span style={{color: tarefa.indfinish ? " #ce86e6" : ""}}>
                  {tarefa.title}
                  </span>
                  </div> 
                  <ClearIcon onClick={() => deleteTask(tarefa.id)} id="btn1" />
                </div>
 
              <div className="divider"/>
            </div>
          ))
        }
        </div>
    </div>
  </>
  )
}

export default App
