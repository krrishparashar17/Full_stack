import { Card, Badge } from 'react-bootstrap';

const PlayerCard = ({ player }) => {
  return (
    <Card className="stat-card shadow-sm h-100 text-center">
      <Card.Img
        variant="top"
        src={player.image}
        className="player-img"
      />

      <Card.Body>
        <Card.Title>{player.name}</Card.Title>
        <Badge bg="info" className="mb-2">{player.role}</Badge>

        <p className="mb-1">Matches: <strong>{player.matches}</strong></p>
        <p className="mb-1">Runs: <strong>{player.runs}</strong></p>
        <p className="mb-1">Wickets: <strong>{player.wickets}</strong></p>
        <p>Strike Rate: <strong>{player.strikeRate}</strong></p>
      </Card.Body>
    </Card>
  );
};

export default PlayerCard;
