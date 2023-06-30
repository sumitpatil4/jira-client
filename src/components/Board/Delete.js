import {BsFillExclamationDiamondFill} from 'react-icons/bs'
import './Delete.css';
const ToDoDelete = (props) => {
    // console.log(props.n1);
    // console.log(props.n2);
    return ( 
        <div className="tododelete">
        <div className="para">
            <div className='head'>
            <BsFillExclamationDiamondFill className='exclamation'/>
            <h3>Move work from {props.n2} Column</h3>
            </div>
             <p>Select a new home for any work with the {props.n2} status, including work in the backlog.</p>
        </div>
        <form> 
            <div className="todo-status">
                <div className='todo-stat'> 
                    <p>This status will be deleted :</p>
                    <h5 className='todo-h5'><del>{props.n2}</del></h5>
                </div>
                <div className='todo-issue'>
                <p>Move existing issues to :</p>
            <select name="" id="dropdown">
            {(props.n1).map((data)=>{
                return <option value="" className=''>{data}</option>
            })}
            </select>
                </div>
            </div>
            
            <div className="button">
                <div className="deletebut">
                <button className="delete-button">Delete</button>
                </div>
                <div className="cancelbut"> <button>Cancel</button></div>
            </div>
        </form>
        </div>
     );
}
 
export default ToDoDelete;