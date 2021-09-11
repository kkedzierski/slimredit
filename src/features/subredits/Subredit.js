import styles from './Subreddits.module.css';

export default function Subredit () {
    return (
        <div className={styles.container}>
            <h3 className={styles.title}>Subredits: </h3>
            <div className={styles.subredditBody} id="subredits">
                <button class="subredit">
                    <p>Name</p>
                    <img alt="subredit"/>
                </button>
            </div>
        </div>
    )
}