import styles from "./Contact.module.scss";

const Contact = () => {
  return (
    <div className={styles.contact}>
      <div className={`banner ${styles.banner}`}>
        <div className={`bannerText ${styles.bannerText}`}>
          <h1>Contact</h1>
          <p>Let's talk, send an email :)</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
