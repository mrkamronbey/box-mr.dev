import { Col, Row } from "react-grid-system";
import { BigContainer } from "../../style-app";
import styles from './error.module.css'
import { Link } from "react-router-dom";
import {BsArrowLeft} from 'react-icons/bs';
import {Button} from '../common/button-common/index'
import ErrorImg from '../../assets/footer/not-found.png'

export const Error = () => {
  return(
    <div className={styles.error}>
        <BigContainer>
            <Row className={styles.error_row}>
                <Col className={styles.error_col}>
                    <h4>404</h4>
                    <Link className={styles.error_btn} to="/"><Button><BsArrowLeft className={styles.arrow_icon}/>Главная меню</Button></Link>
                </Col>
                <Col className={`${styles.error_col} ${styles.error_bottom}`}>
                    <img src={ErrorImg} alt="" />
                </Col>
            </Row>
        </BigContainer>
    </div>
  )
};
