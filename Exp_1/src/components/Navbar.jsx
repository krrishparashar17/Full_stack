function Navbar({ currentPage, setPage }) {
  const buttonStyle = (pageName) => ({
    padding: "8px 14px",
    marginLeft: "10px",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    background: currentPage === pageName ? "#6366f1" : "#e5e7eb",
    color: currentPage === pageName ? "#fff" : "#000"
  });

  return (
    <nav style={styles.nav}>
      <h2 style={{ margin: 0 }}>MySPA</h2>

      <div>
        <button style={buttonStyle("home")} onClick={() => setPage("home")}>
          Home
        </button>

        <button style={buttonStyle("about")} onClick={() => setPage("about")}>
          About
        </button>

        <button style={buttonStyle("contact")} onClick={() => setPage("contact")}>
          Contact
        </button>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 30px",
    background: "#111827",
    color: "#fff"
  }
};

export default Navbar;
