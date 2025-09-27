import Link from "next/link";
import Image from "next/image";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />

      <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
      
      <div id="wd-dashboard-courses">

        <div className="wd-dashboard-course">
          <Link href="/Courses/1000" className="wd-dashboard-course-link">
            <Image src="/images/the_fame.jpg" 
            width={200} height={200} alt="the fame album art"/>
            <div>
              <h5> LG1000 LG1 </h5>
              <p className="wd-dashboard-course-title">
                Analysis of The Fame, a studio album by Lady Gaga 
              </p>
              <button> Go </button><br/><br/>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link href="/Courses/2000" className="wd-dashboard-course-link">
            <Image src="/images/the_fame_monster.jpg" 
            width={200} height={200} alt="the fame monster album art"/>
            <div>
              <h5> LG2000 LG2 </h5>
              <p className="wd-dashboard-course-title">
                Analysis of The Fame Monster, a studio album by Lady Gaga
              </p>
              <button> Go </button><br/><br/>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link href="/Courses/3000" className="wd-dashboard-course-link">
            <Image src="/images/born_this_way.jpg" 
            width={200} height={200} alt="born this way album art"/>
            <div>
              <h5> LG3000 LG3 </h5>
              <p className="wd-dashboard-course-title">
                Analysis of Born This Way, a studio album by Lady Gaga
              </p>
              <button> Go </button><br/><br/>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link href="/Courses/4000" className="wd-dashboard-course-link">
            <Image src="/images/artpop.jpg" 
            width={200} height={200} alt="ARTPOP album art"/>
            <div>
              <h5> LG4000 LG4 </h5>
              <p className="wd-dashboard-course-title">
                Analysis of ARTPOP, a studio album by Lady Gaga
              </p>
              <button> Go </button><br/><br/>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link href="/Courses/5000" className="wd-dashboard-course-link">
            <Image src="/images/joanne.jpg" 
            width={200} height={200} alt="joanne album art"/>
            <div>
              <h5> LG5000 LG5 </h5>
              <p className="wd-dashboard-course-title">
                Analysis of Joanne, a studio album by Lady Gaga
              </p>
              <button> Go </button><br/><br/>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link href="/Courses/6000" className="wd-dashboard-course-link">
            <Image src="/images/chromatica.jpg" 
            width={200} height={200} alt="chromatica album art"/>
            <div>
              <h5> LG6000 LG6 </h5>
              <p className="wd-dashboard-course-title">
                Analysis of Chromatica, a studio album by Lady Gaga
              </p>
              <button> Go </button><br/><br/>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link href="/Courses/7000" className="wd-dashboard-course-link">
            <Image src="/images/mayhem.jpg" 
            width={200} height={200} alt="mayhem album art"/>
            <div>
              <h5> LG7000 LG7 </h5>
              <p className="wd-dashboard-course-title">
                Analysis of Mayhem, a studio album by Lady Gaga
              </p>
              <button> Go </button><br/><br/>
            </div>
          </Link>
        </div>

      </div>
    </div>
);}
