import React, {useState } from 'react';
import { Link } from 'react-router-dom';
import './Board.css'
import {AiOutlineSearch} from 'react-icons/ai'
import {BsFillPersonPlusFill} from 'react-icons/bs'
import AddPeople from './AddPeople';
import {BsThreeDots} from 'react-icons/bs'
import CompleteSprint from './CompleteSprint';
import Delete from './Delete'
import { Draggable, Droppable, DragDropContext } from 'react-beautiful-dnd';
import IssueForm from './IssueForm';
import Sidebar from '../common/sidebar/Sidebar';
//data
const DATA = [
  {
    id: "0e2f0db1-5457-46b0-949e-8032d2f9997a",
    issueType: "Todo",
    items: [
      { id: "26fd50b3-3841-496e-8b32-73636f6f4197", issue: "Start the sprint" },
      { id: "b0ee9d50-d0a6-46f8-96e3-7f3f0f9a2525", issue: "Create NavBar" },
    ]
  },
  {
    id: "487f68b4-1746-438c-920e-d67b7df46247",
    issueType: "InProgress",
    items: [
      {
        id: "95ee6a5d-f927-4579-8c15-2b4eb86210ae",
        issue: "Develop Login page",
      },
      { id: "5bee94eb-6bde-4411-b438-1c37fa6af364", issue: "Design Logout" },
    ]
  },
  {
    id: "25daffdc-aae0-4d73-bd31-43f73101e7c0",
    issueType: "Done",
    items: [
      { id: "960cbbcf-89a0-4d79-aa8e-56abbc15eacc", issue: "Complete the sprint" },
      { id: "d3edf796-6449-4931-a777-ff66965a025b", issue: "Debug and Test" },
    ]
  },
];

const Board = () => {
//board section
  const[details,setDetails]=useState(DATA);
// handleDragEnd
const handleDragEnd=(results)=>{
  console.log(results);
  const { source, destination, type } = results;
  if (!destination) return;
  if (
    source.droppableId === destination.droppableId &&
    source.index === destination.index
  )
    return;
  if (type === "group") {
    const reorderedDetails = [...details];
    const detailSourceIndex = source.index;
    const detailDestinatonIndex = destination.index;
    const [removedDetails] = reorderedDetails.splice(detailSourceIndex, 1);
    reorderedDetails.splice(detailDestinatonIndex, 0, removedDetails);
    return setDetails(reorderedDetails)
  }
  const issueSourceIndex = source.index;
  const issueDestinationIndex = destination.index;
  const detailsSourceIndex = details.findIndex(
    (detail) => detail.id === source.droppableId
  );
  const detailsDestinationIndex = details.findIndex(
    (detail) => detail.id === destination.droppableId
  );
  const newSourceItems = [...details[detailsSourceIndex].items];
  const newDestinationItems =
    source.droppableId !== destination.droppableId
      ? [...details[detailsDestinationIndex].items]
      : newSourceItems;
  const [deletedItem] = newSourceItems.splice(issueSourceIndex, 1);
  newDestinationItems.splice(issueDestinationIndex, 0, deletedItem);
  const newDetails = [...details];
  newDetails[detailsSourceIndex] = {
    ...details[detailsSourceIndex],
    items: newSourceItems,
  };
  newDetails[detailsDestinationIndex] = {
    ...details[detailsDestinationIndex],
    items: newDestinationItems,
  };
 setDetails(newDetails)
  }
 
// handling pop up 
 const [isPopupVisible, setPopupVisible] = useState(false);
 const handleProfile=()=>{
  setPopupVisible(!isPopupVisible);
 };

 //Handling sprint
 const [isPopupSprint, setPopupSprint] = useState(false);
 const handleSprint=()=>{
  setPopupSprint(!isPopupSprint);
 };

//  handleDots
const [remIssues,setRemIssues]=useState([])
const[currIssue,setCurrIssue]=useState()
 const [isPopupDots, setPopupDots] = useState(false);
 const newItem=[];
 const handleDots=(args)=>{
   details.map((detail) => {
    if( detail.issueType !== args){
      newItem.push(detail.issueType)
    }
  });
  setCurrIssue(args)
  setRemIssues(newItem);
  setPopupDots(!isPopupDots);
  console.log(remIssues1)
  console.log(currIssue1)
 };

 //handleIssue

const [remIssues1,setRemIssues1]=useState([])
const[currIssue1,setCurrIssue1]=useState()
const [issueCheck,setIssueCheck]=useState(false)
 const newItem1=[];
 const handleIssue=(args)=>{
   details.map((detail) => {
    if( detail.issueType !== args){
      newItem1.push(detail.issueType)
    }
  });
  setCurrIssue1(args)
  setRemIssues1(newItem1);
  setIssueCheck(true)
 };
// sidebar
const [sidebarOpen, setSideBarOpen] = useState(true);
 const handleViewSidebar = () => {
   setSideBarOpen(!sidebarOpen);
 }
return (
  <div className="board-component">
  {/* <Navbar onClick={handleViewSidebar} /> */}
  <Sidebar isOpen={sidebarOpen} toggleSidebar={handleViewSidebar} />
  <div className="board-area">
   {/* <h1 className='heading'>Hello I am Board Page</h1> */}
   <div className="board">
        <ul className="board-nav">
            <li className="board-item"> <Link to="/projects" className='board-link'>Projects / </Link> </li>
            <li className="board-item"> <Link to="/projects" className='board-link'>basic_first </Link> </li>
        </ul>
        <div className="boardname">
        <h2 style={{marginLeft:'30px'}}>Sprint1</h2>
        <button className='sprint-button' onClick={handleSprint}>complete sprint</button>
        {isPopupSprint && (
          <div className="popup-sprint">
            <div className="popup-content-sprint">
              <CompleteSprint x={setPopupSprint} />
            </div>
          </div>
        )}
        </div>
      <div className="icons">

          {/* search-bar  */}
          <div className="search-bar">
            <input type='search' placeholder="Search..." />
            <button className='search-button'>
              <AiOutlineSearch className='search-icon'/>
            </button>
          </div>

          {/* Add-people  */}
           <div className='icon-container'>
            {!isPopupSprint&&<BsFillPersonPlusFill className='user-icon'  onClick={handleProfile} />}

            {isPopupVisible && (
            <div className="popup">
              <div className="popup-content">
                <AddPeople x={setPopupVisible}/>
              </div>
            </div>
            )}
          </div>
      </div>

{/* draganddrop */}
<div className='dd'>
        <div className="header">
            <h1>Jira Board</h1>
          </div>
      <DragDropContext onDragEnd={handleDragEnd}>
          <Droppable droppableId="ROOT" type="group">
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef} className='column'>
                {details.map((detail, index) => (
                  <Draggable
                    draggableId={detail.id}
                    index={index}
                    key={detail.id}
                  >
                    {(provided) => (
                      <div
                        {...provided.dragHandleProps}
                        {...provided.draggableProps}
                        ref={provided.innerRef}
                      className='tasks'
                      >
                        <Droppable droppableId={detail.id}>
      {(provided) => (
        <div {...provided.droppableProps} ref={provided.innerRef}>
          <div className="issuetype">
            <h3>{detail.issueType}</h3>
            <BsThreeDots className='three-dots' onClick={()=>{handleDots(detail.issueType)}} />
            {isPopupDots && (
          <div className="popup-sprint">
              <Delete n1={remIssues}n2={currIssue}/>
          </div>
            )}
          </div>
          <div className="issues-container">
            {detail.items.map((item, index) => (
              <Draggable draggableId={item.id} index={index} key={item.id}>
                {(provided) => (
                  <div
                    className="item-container"
                    {...provided.dragHandleProps}
                    {...provided.draggableProps}
                    ref={provided.innerRef}
                  >
                    <h4 onClick={()=>{handleIssue(detail.issueType)}}>{item.issue}</h4>
                    {issueCheck&&
                    <div className="popup-sprint">
                    <div className="">
                      <IssueForm n1={remIssues1}n2={currIssue1}/>
                    </div>
                  </div>}
                  </div>
                )}
              </Draggable>
            ))}
          </div>
          {provided.placeholder}
        </div>
      )}
    </Droppable>
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
    </div>

    </div>
 </div>
 
</div>

  );
};

export default Board;


