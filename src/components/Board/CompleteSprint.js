import './CompleteSprint.css'
const CompleteSprint = (props) => {
    return (  
        <div className="completesprint">
        <div className='sprint-para'>
            <div className="head"> <h3>Complete Sprint 1</h3></div>
        </div>
        <p className='sprint-p'>This sprint contains : </p>
        <ul className="sprint-list">
            <li className=""> 0 completed issues </li>
            <li className=""> 1 open issue </li>
        </ul>
        <form action="">
            <p className='sprint-p'>Move open issues to : </p>
            <div className="sprint-dropdown">
            <select name="" id="" className='sprint-select'>
                <option value="" className='sprint-option'>BF Sprint 2</option>
                <option value="newsprint">New sprint</option>
                <option value="backlog">Backlog</option>
            </select>
            </div>
            <div className="button">
                <div className="completebut">
                <button className="complete-button" onClick={()=>{
                        props.x()
                }}>Complete sprint</button>
                </div>
                <div className="cancelbut" onClick={()=>{
                    props.x()
                }}> <button>Cancel</button></div>
            </div>
        </form>
        </div>
    );
}
 
export default CompleteSprint;