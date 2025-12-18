import styles from "./Footer.module.scss";
import { socials } from "../../data/socials";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInside}></div>
      <div className={`content ${styles.content}`}>
        <h3 className={styles.branding}>
          Got a Project in Mind? Let's Talk :)
        </h3>

        <form
          className={styles.contactForm}
          onSubmit={(e) => e.preventDefault()}
        >
          <div>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              required
            />
          </div>
          <div>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              required
            />
          </div>
          <div>
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Message"
              required
            />
          </div>
          <button type="submit">Send</button>
        </form>

        <ul className={styles.socials}>
          {socials.map((social) => (
            <li key={social.name}>
              <a href={social.url} target="_blank" rel="noopener noreferrer">
                <img src={social.icon ?? ""} alt={social.name} />
                {social.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
