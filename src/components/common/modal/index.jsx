import { useTranslation } from "react-i18next";
import styles from "./modal.module.css";
import { GrClose } from "react-icons/gr";
import { Button } from "../button-common";
import { useState } from "react";
import { PostContact } from "../../../redux/contact";
import { useDispatch, useSelector } from "react-redux";

export const Modal = (props) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState(" ");
  const [email, setEmail] = useState(" ");
  const [message, setMessage] = useState(" ");

  const contactPost = useSelector((state) => state.contact);

  const HandleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(
      PostContact({
        name: name,
        phone_number: phone,
        email: email,
        comment: message,
      })
    );
    window.location.reload()
  };
  return (
    <div
      className={
        props.open
          ? `${styles.modal_curtain} ${styles.modal_curtain_active}`
          : styles.modal_curtain
      }
    >
      <div className={styles.modal}>
        <button className={styles.close_btn} onClick={props.HandleClose}>
          <GrClose className={styles.close_icon} />
        </button>
        <form onSubmit={HandleSubmit}>
          <label>
            {t("Form.4")}
            <br />
            <input
              placeholder={t("Form.11")}
              type="text"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
          <label>
            {t("Form.5")}
            <br />
            <input
              placeholder="+998"
              type="text"
              onChange={(e) => setPhone(e.target.value)}
            />
          </label>
          <label>
            {t("Form.6")}
            <br />
            <input
              placeholder="...@gmil.com"
              type="text"
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label>
            {t("Form.7")}
            <br />
            <textarea
              placeholder={t("Form.10")}
              type="text"
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </label>
        </form>
        <Button className={styles.schet_btn} onClick={HandleSubmit}>{t("Form.12")}</Button>
      </div>
    </div>
  );
};
