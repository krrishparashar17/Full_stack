function About() {
  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        <h2>About This Project</h2>

        <p>
          This project is built using React and state-based navigation instead of routing made by Krrish Parashar.
        </p>

        <ul>
          <li>⚛ React Functional Components</li>
          <li>🧠 State Management</li>
          <li>🎨 Clean UI Design</li>
        </ul>
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "70vh"
  },
  card: {
    maxWidth: "500px",
    padding: "25px",
    borderRadius: "10px",
    background: "#ecfeff",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)"
  }
};

export default About;
