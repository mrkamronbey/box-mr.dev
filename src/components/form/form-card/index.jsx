import styles from "./form-card.module.css";

export const FormMap = () => {
  return (
    <div className={styles.map}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2995.9002308608915!2d69.21578947512143!3d41.33278279938192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b8be72b6d9d%3A0x750e6cd7eb305648!2sBeruniy%20shoh%20ko&#39;
                     chasi%2C%20%D0%A2%D0%BEshkent%2C%20O%60zbekiston!5e0!3m2!1suz!2s!4v1691684215030!5m2!1suz!2s"
        width="100%"
        height="320"
        style={{ border: "0" }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};
