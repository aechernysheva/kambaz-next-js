export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label><br/><br/>
      <input id="wd-name" defaultValue="A1 - ENV + HTML" /><br/><br/>
      
      <textarea id="wd-description">
        The assignment is available online Submit a link to the landing page of
      </textarea>
      <br/><br/>

      <table width="100%">
        
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points:</label>
          </td>
          <td>
            <input id="wd-points" defaultValue={100} />
          </td>
        </tr>

        <br/>

        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-assignment-group">Assignment Group:</label>
          </td>
          <td>
            <select id="wd-assignment-group">
                <option>ASSIGNMENTS</option>
                <option>QUIZZES</option>
                <option>EXAMS</option>
                <option>PROJECT</option>
            </select>
          </td>
        </tr>

        <br/>

        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-display-grade-as">Display Grade as:</label>
          </td>
          <td>
            <select id="wd-display-grade-as">
                <option>Percentage</option>
                <option>Points</option>
            </select>
          </td>
        </tr>

        <br/>

        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-submission-type">Submission Type:</label>
          </td>
          <td>
            <select id="wd-submission-type">
                <option>Online</option>
                <option>Presentation</option>
            </select>
          </td>
        </tr>

        <br/>

        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-online-entry-options">Online Entry Options:</label>
          </td>
          <td>
            <input type="checkbox" name="chkbox-entry-op" id="wd-text-entry"/>
            <label htmlFor="wd-text-entry">Text Entry</label>
            <br/>
            
            <input type="checkbox" name="chkbox-entry-op" id="wd-website-url"/>
            <label htmlFor="wd-website-url">Website URL</label>
            <br/>
            
            <input type="checkbox" name="chkbox-entry-op" id="wd-media-recordings"/>
            <label htmlFor="wd-media-recordings">Media Recordings</label>
            <br/>
            
            <input type="checkbox" name="chkbox-entry-op" id="wd-student-annotation"/>
            <label htmlFor="wd-student-annotation">Student Annotation</label>
            <br/>

            <input type="checkbox" name="chkbox-entry-op" id="wd-file-upload"/>
            <label htmlFor="wd-file-upload">File Uploads</label>
          </td>
        </tr>

        <br />

        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-assign-to">Assign to:</label>
          </td>
          <td>
            <input id="wd-assign-to" defaultValue="Everyone" />
          </td>
        </tr>

        <br/>

        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-due-date">Due:</label>
          </td>
          <td>
            <input type="date" id="wd-due-date"/>
          </td>
        </tr>

        <br/>

        <tr>
          <td colSpan={2} align="center">Available</td>
        </tr>

        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-available-from">From: </label>
            <input type="date" id="wd-available-from"/>
          </td>
          <td align="left" valign="top">
            <label htmlFor="wd-available-until">Until: </label>
            <input type="date" id="wd-available-until"/>
          </td>
        </tr>

      </table>
      
      <hr/>

      <table width="100%">
        <tr>
          <td align="right" valign="top"><button>Cancel</button></td>
          <td align="left" valign="top"><button>Save</button></td>
        </tr>
      </table>

    </div>
);}
