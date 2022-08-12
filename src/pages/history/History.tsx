import { useEffect, useState } from "react";
import Nav from "../../common/components/Nav/Nav";
import { API_URL } from "../../common/constants";
import MoodCard from "./components/MoodCard/MoodCard";

import styles from "./History.module.css";

type THistoryData = {
  status: "super-happy" | "happy" | "neutral" | "sad" | "super-sad";
  date: string;
  text: string;
}[];

export default function History() {
  const [historyData, setHistoryData] = useState<THistoryData | null>(null);
  console.log(historyData);
  useEffect(() => {
    const getData = async () => {
      const res = await fetch(API_URL);
      const data = await res.json();
      setHistoryData(data);
    };
    getData();
  }, []);

  return (
    <>
      <Nav />
      {/* <table className={styles.table}>
        <thead>
          <tr>
            <th>Mood</th>
            <th>Date</th>
            <th>Description</th>
          </tr>
        </thead>

        {historyData ? (
          <tbody>
            {historyData.map((mood, idx) => (
              <tr key={idx}>
                <td>{mood.status}</td>
                <td>{mood.date}</td>
                <td>{mood.text}</td>
              </tr>
            ))}
          </tbody>
        ) : null}
      </table> */}

      <div className={styles[`mood-card-container`]}>
        {historyData ? (
          <>
            {historyData.map((mood, index) => (
              <MoodCard
                key={index}
                mood={mood.status}
                date={mood.date}
                text={mood.text}
              />
            ))}
          </>
        ) : null}
      </div>
    </>
  );
}
