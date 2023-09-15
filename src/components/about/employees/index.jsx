import { Carousel } from "3d-react-carousal";
import { BigContainer } from "../../../style-app";
import styles from "./employees.module.css";
import './style.css';
import { EmployeesCard } from "./employees-card";
import { useTranslation } from "react-i18next";
import employeeImg1 from '../../../assets/employes/sherali-img.jpg';
import employeeImg2 from '../../../assets/employes/xasan-img.jpg';
import employeeImg3 from '../../../assets/employes/otkir-img.jpg';
import employeeImg4 from '../../../assets/employes/jurabek-img.jpg';
import employeeImg5 from '../../../assets/employes/dinara-img.png';

export const Employees = () => {
    const {t} =useTranslation()

    const users = [
      {
        id: "n1",
        name: t("Employees.1"),
        job: t("Employees.2"),
        image: employeeImg1,
      },
      {
        id: "n2",
        name: t("Employees.3"),
        job: t("Employees.2"),
        image: employeeImg2,
      },
      {
        id: "n3",
        name: t("Employees.4"),
        job: t("Employees.2"),
        image: employeeImg3,
      },
      {
        id: "n4",
        name: t("Employees.5"),
        job: t("Employees.2"),
        image: employeeImg4,
      },
      {
        id: "n5",
        name: t("Employees.6"),
        job: t("Employees.7"),
        image: employeeImg5,
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
  return (
    <div className={styles.employees}>
      <BigContainer>
        <h2 className={styles.choose_title}>{t("Employees.0")}</h2>
      </BigContainer>
      <Carousel slides={slides} />
    </div>
  );
};
