import styles from "./ClearDateBtn.module.css";

interface IProps {
  setDate: (p: string | null) => void;
}

export default function ClearDateBtn({ setDate }: IProps) {
  return (
    <button className={styles.button} onClick={() => setDate(null)}>
      Clear Date
    </button>
  );
}
