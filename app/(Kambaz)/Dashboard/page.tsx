import Link from "next/link";
import * as db from "../Database";
import { Row, Col, Button } from "react-bootstrap";
import { Card, CardImg, CardBody, CardTitle, CardText } from "react-bootstrap";

export default function Dashboard() {
  const courses = db.courses;
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2> <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {courses.map((course) => (
            <Col className="wd-dashboard-course" style={{ width: "300px" }} 
                 key={course.number}>
              <Card>
                <Link href={`/Courses/${course._id}/Home`} 
                      className="wd-dashboard-course-link text-decoration-none text-dark">
                  <CardImg src= {course.image} variant="top"
                     width="100%" height="100%" alt="the fame album art"/>
                  <CardBody className="card-body">
                    <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                      {course.name} </CardTitle>
                    <CardText className="wd-dashboard-course-description overflow-hidden" 
                              style={{ height: "100px" }}>
                      {course.description} </CardText>
                    <Button variant="primary"> Go </Button>
                  </CardBody>
                </Link>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
);}
          

{/*
        <Col className="wd-dashboard-course" style={{ width: "300px" }}>
          <Card>
            <Link href="/Courses/2000/Home" 
                  className="wd-dashboard-course-link text-decoration-none text-dark">
            <CardImg variant="top" src="/images/the_fame_monster.jpg" 
                     width="100%" height="100%" alt="the fame monster album art"/>
            <CardBody>
              <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                LG2000 LG2</CardTitle>
              <CardText className="wd-dashboard-course-description overflow-hidden" 
                        style={{ height: "100px" }}>
                Analysis of The Fame Monster, a studio album by Lady Gaga</CardText>
              <Button variant="primary"> Go </Button>
            </CardBody>
          </Link>
          </Card>
        </Col>

        <Col className="wd-dashboard-course" style={{ width: "300px" }}>
          <Card>
            <Link href="/Courses/3000/Home" 
                  className="wd-dashboard-course-link text-decoration-none text-dark">
            <CardImg variant="top" src="/images/born_this_way.jpg" 
                     width="100%" height="100%" alt="born this way album art"/>
            <CardBody>
              <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                LG3000 LG3</CardTitle>
              <CardText className="wd-dashboard-course-description overflow-hidden" 
                        style={{ height: "100px" }}>
                Analysis of Born This Way, a studio album by Lady Gaga</CardText>
              <Button variant="primary"> Go </Button>
            </CardBody>
          </Link>
          </Card>
        </Col>

        <Col className="wd-dashboard-course" style={{ width: "300px" }}>
          <Card>
            <Link href="/Courses/4000/Home" 
                  className="wd-dashboard-course-link text-decoration-none text-dark">
            <CardImg variant="top" src="/images/artpop.jpg" 
                     width="100%" height="100%" alt="ARTPOP album art"/>
            <CardBody>
              <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                LG4000 LG4</CardTitle>
              <CardText className="wd-dashboard-course-description overflow-hidden" 
                        style={{ height: "100px" }}>
                Analysis of ARTPOP, a studio album by Lady Gaga</CardText>
              <Button variant="primary"> Go </Button>
            </CardBody>
          </Link>
          </Card>
        </Col>

        <Col className="wd-dashboard-course" style={{ width: "300px" }}>
          <Card>
            <Link href="/Courses/5000/Home" 
                  className="wd-dashboard-course-link text-decoration-none text-dark">
            <CardImg variant="top" src="/images/joanne.jpg" 
                     width="100%" height="100%" alt="joanne album art"/>
            <CardBody>
              <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                LG5000 LG5</CardTitle>
              <CardText className="wd-dashboard-course-description overflow-hidden" 
                        style={{ height: "100px" }}>
                Analysis of Joanne, a studio album by Lady Gaga</CardText>
              <Button variant="primary"> Go </Button>
            </CardBody>
          </Link>
          </Card>
        </Col>

        <Col className="wd-dashboard-course" style={{ width: "300px" }}>
          <Card>
            <Link href="/Courses/6000/Home" 
                  className="wd-dashboard-course-link text-decoration-none text-dark">
            <CardImg variant="top" src="/images/chromatica.jpg" 
                     width="100%" height="100%" alt="chromatica album art"/>
            <CardBody>
              <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                LG6000 LG6</CardTitle>
              <CardText className="wd-dashboard-course-description overflow-hidden" 
                        style={{ height: "100px" }}>
                Analysis of Chromatica, a studio album by Lady Gaga</CardText>
              <Button variant="primary"> Go </Button>
            </CardBody>
          </Link>
          </Card>
        </Col>

        <Col className="wd-dashboard-course" style={{ width: "300px" }}>
          <Card>
            <Link href="/Courses/7000/Home" 
                  className="wd-dashboard-course-link text-decoration-none text-dark">
            <CardImg variant="top" src="/images/mayhem.jpg" 
                     width="100%" height="100%" alt="mayhem album art"/>
            <CardBody>
              <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                LG7000 LG7</CardTitle>
              <CardText className="wd-dashboard-course-description overflow-hidden" 
                        style={{ height: "100px" }}>
                Analysis of Mayhem, a studio album by Lady Gaga</CardText>
              <Button variant="primary"> Go </Button>
            </CardBody>
          </Link>
          </Card>
        </Col>
*/}

