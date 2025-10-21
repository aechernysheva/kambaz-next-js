import Link from "next/link";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs"
import { IoEllipsisVertical } from "react-icons/io5";

export default function Assignments() {
  return (
    <div id="wd-assignments">
      <input placeholder="Search for Assignments"
             id="wd-search-assignment" />
      <button id="wd-add-assignment-group">+ Group</button>
      <button id="wd-add-assignment">+ Assignment</button>

      <ListGroupItem className="wd-assignments p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" /> ASSIGNMENTS <IoEllipsisVertical className="fs-4" />
            40% of Total Grade<button>+</button>
          </div>
          <ListGroup className="wd-assignment-list rounded-0">

            <ListGroupItem className="wd-assignment-list-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              <Link href="/Courses/1234/Assignments/A1" className="wd-assignment-link" >
              A1</Link><br/>
              Multiple Modules || <b> available on:</b> October 4 at 12:00am <br/>
              <b>Due:</b> October 11 at 11:59pm || 100 pts 
            </ListGroupItem>
            
            <ListGroupItem className="wd-assignment-list-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              <Link href="/Courses/1234/Assignments/A2" className="wd-assignment-link" >
              A2</Link><br/>
              Multiple Modules || <b> available on:</b> October 11 at 12:00am <br/>
              <b>Due:</b> October 18 at 11:59pm || 100 pts 
            </ListGroupItem>
            
            <ListGroupItem className="wd-assignment-list-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              <Link href="/Courses/1234/Assignments/A3" className="wd-assignment-link" >
              A3</Link><br/>
              Multiple Modules || <b> available on:</b> October 18 at 12:00am <br/>
              <b>Due:</b> October 25 at 11:59pm || 100 pts 
            </ListGroupItem>
            
            <ListGroupItem className="wd-assignment-list-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              <Link href="/Courses/1234/Assignments/A4" className="wd-assignment-link" >
              A4</Link><br/>
              Multiple Modules || <b> available on:</b> October 25 at 12:00am <br/>
              <b>Due:</b> November 1 at 11:59pm || 100 pts 
            </ListGroupItem>
            
            <ListGroupItem className="wd-assignment-list-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              <Link href="/Courses/1234/Assignments/A5" className="wd-assignment-link" >
              A5</Link><br/>
              Multiple Modules || <b> available on:</b> November 1 at 12:00am <br/>
              <b>Due:</b> November 8 at 11:59pm || 100 pts 
            </ListGroupItem>
            
          </ListGroup>
        </ListGroupItem>
      
    </div>
);}
