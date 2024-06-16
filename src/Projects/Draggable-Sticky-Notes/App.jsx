import { useState } from 'react';
import Notes from './Components/Notes'

function App() {

  const [notes,setNotes]=useState(
    [
      {
        id:1,
        text:"If you are reading this"
      },
      {
        id:2,
        text:"app is working properly"
      }
    ]
  )

  return (
    <div>
       draggable sticky notes
       <Notes notes={notes} SetNotes={setNotes}/>
    </div>
  );
}

export default App;

