import styles from './employee-card.module.css'

export const EmployeeCard=(props)=>{
    return(
        <div className={styles.card} >
            <div className={styles.img_box}>
                <img src={props.image} alt="employee img" />
                <h3>{props.title}</h3>
            </div>
            <div className={styles.content_box}>
                <p>{props.text}</p>
            </div>
        </div>
    )
}