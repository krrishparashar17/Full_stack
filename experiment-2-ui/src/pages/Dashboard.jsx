import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import TopNavbar from '../components/Navbar';
import PlayerCard from '../components/PlayerCard';
import Charts from '../components/Charts';
import Footer from '../components/Footer';
import { Container, Row, Col, ButtonGroup, Button } from 'react-bootstrap';

const Dashboard = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [filter, setFilter] = useState("All");

  const players = [
    { name:"Virat Kohli", role:"Batsman", matches:500, runs:13000, wickets:4, strikeRate:93.5, image:"/images/virat.jpg" },
    { name:"Rohit Sharma", role:"Batsman", matches:450, runs:11000, wickets:8, strikeRate:90.2, image:"/images/rohit.jpg" },
    { name:"Shubman Gill", role:"Batsman", matches:120, runs:4200, wickets:2, strikeRate:98.1, image:"/images/gill.jpg" },
    { name:"KL Rahul", role:"Batsman", matches:180, runs:4800, wickets:1, strikeRate:91.4, image:"/images/klrahul.jpg" },
    { name:"Hardik Pandya", role:"All-Rounder", matches:250, runs:3000, wickets:85, strikeRate:112.4, image:"/images/hardik.jpg" },
    { name:"Ravindra Jadeja", role:"All-Rounder", matches:320, runs:2800, wickets:190, strikeRate:87.6, image:"/images/jadeja.jpg" },
    { name:"Jasprit Bumrah", role:"Bowler", matches:200, runs:350, wickets:180, strikeRate:85, image:"/images/bumrah.jpg" },
    { name:"Mohammed Shami", role:"Bowler", matches:220, runs:400, wickets:195, strikeRate:88.6, image:"/images/shami.jpg" }
  ];

  const filtered = filter === "All" ? players : players.filter(p => p.role === filter);

  return (
    <div className={darkMode ? "dashboard dark" : "dashboard"}>
      <Sidebar />

      <div className="main-content">
        <TopNavbar darkMode={darkMode} toggleMode={() => setDarkMode(!darkMode)} />

        <Container fluid className="mt-4">
          <ButtonGroup className="mb-4">
            <Button onClick={() => setFilter("All")}>All</Button>
            <Button onClick={() => setFilter("Batsman")}>Batsmen</Button>
            <Button onClick={() => setFilter("All-Rounder")}>All-Rounders</Button>
            <Button onClick={() => setFilter("Bowler")}>Bowlers</Button>
          </ButtonGroup>

          <Row className="g-4 mb-5">
            {filtered.map((p, i) => (
              <Col md={3} key={i}>
                <PlayerCard player={p} />
              </Col>
            ))}
          </Row>

          <Charts />

          <div className="creator-section text-center mt-5">
            <img src="/images/krrish.jpg" className="creator-img" />
            <h5>Created by Krrish</h5>
            <p>React + Bootstrap Cricket Analytics Dashboard</p>
          </div>
        </Container>

        <Footer />
      </div>
    </div>
  );
};

export default Dashboard;
