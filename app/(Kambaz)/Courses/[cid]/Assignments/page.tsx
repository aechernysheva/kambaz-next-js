import Link from "next/link";

export default function Assignments() {
  return (
    <div id="wd-assignments">
      <input placeholder="Search for Assignments"
             id="wd-search-assignment" />
      <button id="wd-add-assignment-group">+ Group</button>
      <button id="wd-add-assignment">+ Assignment</button>

      <h3 id="wd-assignments-title">
        ASSIGNMENTS 40% of Total Grade<button>+</button> </h3>

      <ul id="wd-assignment-list">

        <li className="wd-assignment-list-item">
          <Link href="/Courses/1234/Assignments/A1"
          className="wd-assignment-link" >
            A1
          </Link><br/>
          Multiple Modules || 
          <b> available on:</b> October 4 at 12:00am <br/>
          <b>Due:</b> October 11 at 11:59pm || 100 pts 
        </li>

        <li className="wd-assignment-list-item">
          <Link href="/Courses/1234/Assignments/A2"
          className="wd-assignment-link" >
            A2
          </Link><br/>
          Multiple Modules || 
          <b> available on:</b> October 11 at 12:00am <br/>
          <b>Due:</b> October 18 at 11:59pm || 100 pts 
        </li>

        <li className="wd-assignment-list-item">
          <Link href="/Courses/1234/Assignments/A3"
          className="wd-assignment-link" >
            A3
          </Link><br/>
          Multiple Modules || 
          <b> available on:</b> October 18 at 12:00am <br/>
          <b>Due:</b> October 25 at 11:59pm || 100 pts 
        </li>

        <li className="wd-assignment-list-item">
          <Link href="/Courses/1234/Assignments/A4"
          className="wd-assignment-link" >
            A4
          </Link><br/>
          Multiple Modules || 
          <b> available on:</b> October 25 at 12:00am <br/>
          <b>Due:</b> November 1 at 11:59pm || 100 pts 
        </li>

        <li className="wd-assignment-list-item">
          <Link href="/Courses/1234/Assignments/A5"
          className="wd-assignment-link" >
            A5
          </Link><br/>
          Multiple Modules || 
          <b> available on:</b> November 1 at 12:00am <br/>
          <b>Due:</b> November 8 at 11:59pm || 100 pts 
        </li>

      </ul>
    </div>
);}
