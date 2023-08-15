
import styles from './employees-card.module.css';

export const EmployeesCard=(props)=>{
    return(
        <div className={styles.card_employees}>
            <img src={props.img} alt="" />
            <div className={styles.card_content}>
                <h3>{props.name}</h3>
                <h5>{props.job}</h5>
            </div>
        </div>
    )
}