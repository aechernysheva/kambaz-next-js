"use client"
import { useParams } from "next/navigation";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function CourseNavigation() {
  const { cid } = useParams();
  const pathname = usePathname();
  const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades"];

  return (
    <div id="wd-courses-navigation"  className="wd list-group fs-5 rounded-0">
      {links.map((link) => (
        <Link key={links.indexOf(link)} 
          className={`list-group-item 
            ${pathname.endsWith(link) ? "active" : "text-danger border-0"}`}
          id="wd-course-home-link"
          href={`/Courses/${cid}/${link}`}>{link}</Link>
      ))}

      <Link className="list-group-item text-danger border-0" id="wd-course-people-link"
        href={`/Courses/${cid}/People/Table`}>People</Link>
    </div>
  );}
