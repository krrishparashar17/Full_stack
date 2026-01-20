function Home() {
  return (
    <div style={styles.container}>
      <h1>Welcome to MySPA</h1>

      <p style={styles.text}>
        MySPA is a simple single page application that uses a custom navigation
        system instead of traditional page routing.
      </p>

      <p style={styles.text}>
        Use the navigation bar at the top to switch between Home, About, and
        Contact pages. The content changes instantly without reloading the page.
      </p>

      <div style={styles.infoBox}>
        <p>🧭 Navigation Type: State-based</p>
        <p>⚡ Page Reload: No</p>
        <p>📄 Pages: Home, About, Contact</p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "40px",
    background: "#eef2ff",
    borderRadius: "12px"
  },
  text: {
    marginTop: "12px",
    lineHeight: "1.6"
  },
  infoBox: {
    marginTop: "20px",
    padding: "15px",
    background: "#ffffff",
    borderRadius: "8px",
    boxShadow: "0 0 6px rgba(0,0,0,0.1)"
  }
};

export default Home;
