import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar, Pie } from "react-chartjs-2";
import { Card, Row, Col } from "react-bootstrap";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend
);

const Charts = () => {

  // BAR CHART – RUNS
  const runsData = {
    labels: ["Virat", "Rohit", "Gill", "KL Rahul", "Hardik"],
    datasets: [
      {
        label: "Total Runs",
        data: [13000, 11000, 4200, 4800, 3000],
        backgroundColor: "#0d6efd",
      },
    ],
  };

  // PIE CHART – WICKETS
  const wicketsData = {
    labels: ["Bumrah", "Shami", "Jadeja", "Ashwin"],
    datasets: [
      {
        data: [180, 195, 190, 260],
        backgroundColor: ["#dc3545", "#198754", "#0dcaf0", "#ffc107"],
      },
    ],
  };

  // BAR CHART – STRIKE RATE
  const strikeRateData = {
    labels: ["Virat", "Rohit", "Gill", "KL Rahul", "Hardik"],
    datasets: [
      {
        label: "Strike Rate",
        data: [93.5, 90.2, 98.1, 91.4, 112.4],
        backgroundColor: "#20c997",
      },
    ],
  };

  return (
    <>
      {/* TOP FULL-WIDTH CHART */}
      <Card className="mb-4 shadow-sm">
        <Card.Body>
          <Card.Title>🏏 Batsmen – Runs Comparison</Card.Title>
          <Bar data={runsData} />
        </Card.Body>
      </Card>

      {/* SIDE BY SIDE CHARTS */}
      <Row className="g-4">
        <Col md={4}>
          <Card className="shadow-sm">
            <Card.Body>
              <Card.Title>🎯 Wicket Distribution</Card.Title>
              <div className="small-pie">
                <Pie data={wicketsData} />
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col md={8}>
          <Card className="shadow-sm">
            <Card.Body>
              <Card.Title>⚡ Strike Rate Comparison</Card.Title>
              <Bar data={strikeRateData} />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Charts;
