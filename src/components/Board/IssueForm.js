import { useState } from "react";
import { Link } from "react-router-dom";
import {GrAttachment} from 'react-icons/gr';
import {ImTree} from 'react-icons/im';
import {FiLink} from 'react-icons/fi';
import './IssueForm.css';
const IssueForm = (props) => {
     console.log(props.n1);
    console.log(props.n2);
    //handling text area
    const [textAreaValue, setTextAreaValue] = useState('');
    const handleChangeText = (e) => {
        setTextAreaValue(e.target.value);
    };
    //handling file
    const [attachImg, setAttachImg] = useState(null);
    const [fileName, setFileName] = useState("No selected file");
    const [file,setFile] =useState();
    const handleFile=(e)=>{
        setFile(e.target.files[0])
    }
    const handleUpload =()=>{
        const formData=new FormData()
        formData.append('file',file)
        fetch(
            'url',
            {
                method: "POST",
                body: formData
            }
        ).then((response)=>response.json()).then(
            (result)=>{
                console.log('success',result)
            }
        )
        .catch(error=>{
            console.error("Error: ",error)
        })
    }
    //description button
    const [isButtDescription, setButtDescription] = useState(false);
    const handleButtDescription=()=>{
    setButtDescription(!isButtDescription);
    };
    //comment button
    const [isButtComment, setButtComment] = useState(false);
    const handleButtComment = () =>{
        setButtComment(!isButtComment);
    }
    //child issue
    const [childIssue, setChilsIssue] = useState(false);
    const handleChildIssue = () =>{
        setChilsIssue(!childIssue);
    }
    //link issue
    const [linkIssue, setLinkIssue] = useState(false);
    const handleLinkIssue = () =>{
        setLinkIssue(!linkIssue);
    }
    return (
    <div className="add-issue">
        <div className="grid1">
        <div className="form-issue">
            <ul className="board-nav">
                <li className="board-item"> <Link to="/projects" className='board-link'>Projects / </Link> </li>
                <li className="board-item"> <Link to="/projects" className='board-link'>basic_first </Link> </li>
            </ul>
            <div className="attachment">
                <form onSubmit={handleUpload} onClick={()=>document.querySelector(".input-field").click()} >
                    <label htmlFor="">Attach</label>
                    <input type="file" className="input-field" onChange={handleFile} hidden/>
                    {attachImg ? <img src={attachImg} alt={fileName}/> : <GrAttachment className="attach-icon" />}
                </form>
                <div className="child-issue">
                    <ImTree onClick={handleChildIssue} className="tree-icon" />
                     <p onClick={handleChildIssue}>Add child issue</p>
                </div>
                <div className="link-issue">
                    <FiLink onClick={handleLinkIssue} className="link-icon" />
                     <p onClick={handleLinkIssue}>Link issue</p>
                </div>
            </div>
            <div className="issue-name-dropdown">
                <h3>Issue-name</h3>
            </div>
        </div>
        <form>
            <label>Description</label>
            <textarea placeholder="Write the description..." value={textAreaValue} onChange={handleChangeText} onClick={handleButtDescription}>
            </textarea>
            {isButtDescription &&
                <div className="childissue-button">
                <button className="childcreate-button">Save</button>
                <button className="childcancel-button">Cancel</button>
                </div> }
                {/* {child issue } */}
                {childIssue && <div className="childissue-input">
                <label>Child issues</label>
                <input type="text" placeholder="What needs to be done" />
                <div className="childissue-button">
                <button className="childcreate-button">Create</button>
                <button className="childcancel-button">Cancel</button>
                </div>
                </div>}
                {/* {link issues } */}
                {linkIssue && <div className="linkissue">
                <label>Link issues</label>
                <div className="linkissue-boxes">
                <div className="linkissue-dropdown">
                <select name="" id="">
                    <option value="">is blocked by</option>
                    <option value="blocks">blocks</option>
                    <option value="isclonedby">is cloned by</option>
                    <option value="clones">clones</option>
                    <option value="createdby">created by</option>
                    <option value="created">created</option>
                    <option value="isduplicatedby">is duplicated by</option>
                    <option value="duplicates">duplicates</option>
                    <option value="relatesto">relates to</option>
                    <option value="istestedby">is tested by</option>
                    <option value="tests">tests</option>
                </select>
                </div>
                <div className="linkissue-input">
                    <input
                            type="search"
                            placeholder="search..."
                    />
                </div>
                </div>
                <div className="linkissue-button">
                <button className="linkcreate-button" onClick={()=>{setLinkIssue()}}>Create</button>
                <button className="linkcancel-button" onClick={()=>{setLinkIssue()}}>Cancel</button>
                </div>
                </div> }
            <div className="comment">
             <label>Comment</label>
                <input
                type="text"
                placeholder="Type @ to mention and notify someone"
                onClick={handleButtComment}
            />
            {isButtComment &&
                <div className="childissue-button">
                <button className="childcreate-button">Save</button>
                <button className="childcancel-button">Cancel</button>
                </div> }
            </div>
        </form>
        </div>
        <div className="grid2">
            <div className="cancel-button">
                    <button className="X-button">X</button>
            </div>
            <div className='issueform-dropdown'>
                    <select id="" className=''>
                    <option value="">{props.n2}</option>
                    {(props.n1).map((data)=>{
                    return <option value="">{data}</option>
                    })}
                    </select>
            </div>
        <div className="details">
           <p>Details : </p>
        </div>
            <div className="assignee">
                <label>Assignee</label>
                <select name="" id="">
                    <option value="">Unassigned</option>
                    <option value="automatic">Automatic</option>
                    <option value="custom">vaishnavi Kammara</option>
                </select>
            </div>
            <div className="sprint">
                <label>sprint</label>
                <select name="" id="">
                    <option value="">Sprint 1</option>
                    <option value="automatic">Sprint 2</option>
                </select>
            </div>
            <div className="storypoint">
                <label>Story point estimate</label>
                <input
                     type="number"
                     name=""
                     placeholder='None'
                 />
            </div>
            <div className="reporter">
                <label>Reporter</label>
                <input
                     type="search"
                     name=""
                     placeholder='search...'
                 />
            </div>
        </div>
    </div>
    );
}
export default IssueForm