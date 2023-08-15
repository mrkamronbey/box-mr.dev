import { Carousel } from "3d-react-carousal";
import { BigContainer } from "../../../style-app";
import styles from "./employees.module.css";
import './style.css';
import employeeImg from "../../../assets/home/employe-img.png";
import { EmployeesCard } from "./employees-card";
import { useTranslation } from "react-i18next";

const users = [
  {
    id: "n1",
    name: "Rustamov Shaxzod",
    job: "Programmist",
    image: employeeImg,
  },
  {
    id: "n2",
    name: "Rustamov Shaxzod",
    job: "Programmist",
    image: employeeImg,
  },
  {
    id: "n3",
    name: "Rustamov Shaxzod",
    job: "Programmist",
    image: employeeImg,
  },
  {
    id: "n4",
    name: "Rustamov Shaxzod",
    job: "Programmist",
    image: employeeImg,
  },
  {
    id: "n5",
    name: "Rustamov Shaxzod",
    job: "Programmist",
    image: employeeImg,
  },
];

const slides = users.map((user) => (
  <EmployeesCard
    key={user.id}
    img={user.image}
    name={user.name}
    job={user.job}
  />
));

export const Employees = () => {
    const {t} =useTranslation()
  return (
    <div className={styles.employees}>
      <BigContainer>
        <h2 className={styles.choose_title}>{t("Employees.0")}</h2>
      </BigContainer>
      <Carousel slides={slides} />
    </div>
  );
};
