import React,{useState} from 'react';
import But from './but';
function App () {
    const[num,setNum]=useState(null);
    const[visible,setVisible]=useState(true);
const onSubmit = () => { 
    setVisible(false);
};
    return (
		<div>
			{visible?(
        <div>
        
<input type="text" placeholder="num" 
onChange={(event)=>setNum(event.target.value)}
 value={num}/>
<button onClick={onSubmit} >SUBMIT</button>
</div>
	 ):(
  <But props={num}/>
	 )}
  </div>
  
    );
}
export default App;