import { useDispatch, useSelector } from "react-redux";

import Form from "./components/form";
import User from "./components/user";

function App() {
  const count = useSelector((state) => state.todos);
  console.log(count);
  
  return (
    
    <div>
      <Form />
      {
        count.map((item,index)=>{
          return <User key={item.id} id={index+1} title={item.title} discription={item.discription}/>
        })
      }
    </div>
  );
}

export default App;
