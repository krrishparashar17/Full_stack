import { Nav } from 'react-bootstrap';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h4 className="text-white text-center py-3">Cricket Board</h4>
      <Nav className="flex-column px-2">
        <Nav.Link className="text-white">Overview</Nav.Link>
        <Nav.Link className="text-white">Batsmen</Nav.Link>
        <Nav.Link className="text-white">All-Rounders</Nav.Link>
        <Nav.Link className="text-white">Bowlers</Nav.Link>
      </Nav>
    </div>
  );
};

export default Sidebar;
