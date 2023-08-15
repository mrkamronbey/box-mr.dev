import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import styles from "./form-card.module.css";
import { PostContact } from "../../../redux/contact";
import { useDispatch, useSelector } from "react-redux";
import { message } from 'antd';


const FormCard = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch()
  const [names, setNames] = useState('')
  const [number, setNumber] = useState('')
  const [mail, setMail] = useState('')
  const [coment, setComent] = useState('')
  const [disableds, setDisableds] = useState(true);

  const contactPost = useSelector((state) => state.contact);

  const [messageApi, contextHolder] = message.useMessage();
  const key = 'updatable';
  const openMessage = () => {
    messageApi.open({
      key,
      type: 'loading',
      content: 'Loading...',
      style: {
        padding: "10px 20px",
        fontSize: "16px",
        fontWeight: "500"
      },
    });
    contactPost.postContact.Success == true || contactPost.postContact.Error == false ?
      setTimeout(() => {
        messageApi.open({
          key,
          type: 'success',
          content: t("Contact.7"),
          duration: 2,
          style: {
            padding: "10px 20px",
            fontSize: "16px",
            fontWeight: "500"
          }
        });
        // setTimeout(() => {
        //   window.location.reload()
        // }, 3000)
      }, 2500) : setTimeout(() => {
        messageApi.open({
          key,
          type: 'error',
          content: t("Contact.22"),
          duration: 2,
          style: {
            padding: "10px 20px",
            fontSize: "16px",
            fontWeight: "500"
          }
        });
      }, 2500)
  }

  const HandleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(
      PostContact({
        name: names,
        phone_number: number,
        email: mail,
        comment: coment,
      }),
    );

    e.target[0].value = null
    e.target[1].value = null
    e.target[2].value = null
    e.target[3].value = null
  };
  useEffect(() => {
    !number || !names || !mail || !coment ? setDisableds(true) : setDisableds(false);
  }, [coment]);

  return (
    <div className={styles.form_card}>
      <form onSubmit={HandleSubmit} className={styles.form_formik}>
        <label className={styles.form_label} htmlFor="name">
          {t("Form.4")}
          <input type="text"
            onChange={(e) => setNames(e.currentTarget.value)}
            id="name"
            name="name"
            placeholder={t("Form.11")} />
        </label>
        <div className={styles.form_label_box}>
          <label className={styles.form_label} htmlFor="phone">
            {t("Form.5")}
            <input
              type="tel"
              onChange={(e) => setNumber(e.currentTarget.value)}
              id="phone"
              name="phone"
              placeholder="+ 7 999 199 19 19"
            />
          </label>
          <label className={styles.form_label} htmlFor="email">
            {t("Form.6")}
            <input
              type="email"
              id="email"
              name="email"
              onChange={(e) => setMail(e.currentTarget.value)}
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
              placeholder="info@mail.ru"
              required
            />
          </label>
        </div>
        <label className={styles.form_label} htmlFor="coment">
          {t("Form.7")}
          <textarea
            type="text"
            id="coment"
            name="coment"
            onChange={(e) => setComent(e.currentTarget.value)}
            placeholder={t("Form.10")}
          />
        </label>
        <div className={styles.privacy}>
          <input
            type="checkbox"
            id="check"
            name="check"
          />
          <p>{t("Form.8")}</p>
        </div>
        {contextHolder}
        <button onClick={openMessage} disabled={disableds} type="submit" className={styles.form_btn}>{t("Form.9")}</button>
      </form>
    </div>
  );
};

export default FormCard
