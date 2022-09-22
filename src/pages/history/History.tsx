import { useEffect, useState } from "react";

import Nav from "../../common/components/Nav/Nav";
import { API_URL } from "../../common/constants";
import MoodCard from "./components/MoodCard/MoodCard";
import formatDate from "./utils/formatDate";
import ClearDateBtn from "./components/ClearDateBtn/ClearDateBtn";
import Calendar from "react-calendar";
// import "../../common/styles/calendar.css";

import styles from "./History.module.css";
import ClearDate from "./components/ClearDateBtn/ClearDateBtn";

type THistoryData = {
  hide: boolean;
  status: "super-happy" | "happy" | "neutral" | "sad" | "super-sad";
  date: string;
  text: string;
}[];

export default function History() {
  const [historyData, setHistoryData] = useState<THistoryData | null>(null);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(API_URL);
      const data = await res.json();
      setHistoryData(data);
    };
    getData();
  }, []);

  const [date, setDate] = useState<Date | null>(null);
  const isFiltered = date !== null;

  const historyDataToDisplay = isFiltered
    ? historyData?.filter((mood) => {
        const formattedDate = formatDate(date);
        return mood.date === formattedDate;
      })
    : historyData;

  return (
    <>
      <Nav />
      <div className={styles[`calendar-container`]}>
        <Calendar
          onChange={setDate}
          value={date}
          maxDate={new Date()}
          // onClickDay={alert(`Clicked date is ${value}`)}
          // selectRange={true}
        />
        <ClearDateBtn setDate={setDate} />
      </div>
      <div className={styles[`mood-card-container`]}>
        {historyDataToDisplay?.map((mood, index) => (
          <MoodCard
            key={index}
            mood={mood.status}
            date={mood.date}
            text={mood.text}
          />
        ))}
      </div>
    </>
  );
}
