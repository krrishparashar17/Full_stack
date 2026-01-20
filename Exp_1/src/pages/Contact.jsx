function Contact() {
  return (
    <div style={styles.wrapper}>
      <div style={styles.formBox}>
        <h2>Contact Us</h2>

        <input placeholder="Your Name" style={styles.input} />
        <input placeholder="Your Email" style={styles.input} />
        <textarea placeholder="Message" style={styles.textarea}></textarea>

        <button style={styles.btn}>Send Message</button>
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
  formBox: {
    maxWidth: "400px",
    padding: "25px",
    borderRadius: "10px",
    background: "#fef3c7"
  },
  input: {
    width: "100%",
    padding: "8px",
    marginTop: "10px"
  },
  textarea: {
    width: "100%",
    height: "80px",
    marginTop: "10px"
  },
  btn: {
    marginTop: "15px",
    padding: "10px",
    width: "100%",
    background: "#f59e0b",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer"
  }
};

export default Contact;
