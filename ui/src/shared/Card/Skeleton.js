import styles from "./Skeleton.module.scss";

export const SkeltonCategoryTag = () => {
  return (
    <div style={{ height: "30px" }}>
      <p className={styles.line}></p>
    </div>
  );
};

const S = () => {
  return (
    <div>
      <article className={styles.skeleton}>
        <div className={styles.image}></div>
        <p className={styles.line}></p>
        <p className={styles.line}></p>
        <p className={styles.line}></p>
        <p className={styles.line}></p>
      </article>
    </div>
  );
};

export default S;
