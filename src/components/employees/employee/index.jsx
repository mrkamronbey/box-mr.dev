import { BigContainer } from "../../../style-app";
import { useTranslation } from "react-i18next";
import styles from "./employee.module.css";
import Slider from "react-slick";
import user1 from "../../../assets/employes/1.png";
import user2 from "../../../assets/employes/2.png";
import user3 from "../../../assets/employes/3.png";
import user4 from "../../../assets/employes/4.png";
import user5 from "../../../assets/employes/5.png";
import user6 from "../../../assets/employes/6.png";
import user7 from "../../../assets/employes/7.png";
import user8 from "../../../assets/employes/8.png";
import { EmployeeCard } from "../employee-card";
import './style.css';

export const Employee = () => {
  const { t } = useTranslation();

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "10px",
    slidesToShow: 6,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    rows: 1,
    slidesPerRow: 1,
    responsive: [
      {
        breakpoint: 1230,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          rows: 1,
          dots: false,
        },
      },
      {
        breakpoint: 870,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          rows: 1,
        },
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          rows: 1,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          rows: 1,
        },
      },
    ],
  };

  const users = [
    {
      id: "n1",
      name: t("Employees.1"),
      job: t("Employees.2"),
      image: user1,
    },
    {
      id: "n2",
      name: t("Employees.3"),
      job: t("Employees.2"),
      image: user2,
    },
    {
      id: "n3",
      name: t("Employees.4"),
      job: t("Employees.2"),
      image: user3,
    },
    {
      id: "n4",
      name: t("Employees.5"),
      job: t("Employees.2"),
      image: user4,
    },
    {
      id: "n5",
      name: t("Employees.6"),
      job: t("Employees.2"),
      image: user5,
    },
    {
      id: "n6",
      name: t("Employees.7"),
      job: t("Employees.2"),
      image: user6,
    },
    {
      id: "n7",
      name: t("Employees.8"),
      job: t("Employees.2"),
      image: user7,
    },
    {
      id: "n8",
      name: t("Employees.9"),
      job: t("Employees.2"),
      image: user8,
    },
  ];

  return (
    <div className={styles.employee}>
      <BigContainer>
        <div className={styles.choose_title}>
          <h2>{t("Employees.0")}</h2>
        </div>
        <Slider {...settings}>
          {users.map((user) => (
            <EmployeeCard
              key={user.id}
              image={user.image}
              title={user.name}
              text={user.job}
            />
          ))}
        </Slider>
      </BigContainer>
    </div>
  );
};
