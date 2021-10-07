import { useState } from 'react';
import * as Comps from './App.styles';
import {Item} from './types/Item';
import { ListItem } from './components/ListItem';
import { AddArea } from './components/AddArea';




const App = () => {
  const [list, setList] = useState<Item[]>([
    {id:1, name: 'ToDo do Claw', done: false},
    {id:2 , name: 'Aproveite', done: true},
  ]);

  const handleAddTask = (taskName : string) =>{
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false
    })
  
    setList(newList);
  }

  return (
    <Comps.Container>
      <Comps.Area>
        <Comps.Header>ToDo Claw</Comps.Header>
          {/* Area nova tarefa*/}
            <AddArea onEnter = {handleAddTask} />



          {/* Area lista tarefa*/}
          {list.map((item, index)=>(
            <ListItem key={index} item={item} />
          ))}


      </Comps.Area>
    </Comps.Container>

  );
}

export default App;