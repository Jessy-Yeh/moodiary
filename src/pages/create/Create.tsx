import { FormEvent, useState } from "react";

import { API_URL } from "../../common/constants";
import Nav from "../../common/components/Nav/Nav";

import MoodRatingRadio from "./components/MoodRatingRadio/MoodRatingRadio";

import styles from "./Create.module.css";
import formatDate from "./utils/formatDate";

export default function Create() {
  const [moodStatus, setMoodStatus] = useState("neutral");
  const [date, setDate] = useState("");
  const [text, setText] = useState("");

  async function postMood(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const postBody = {
      status: moodStatus,
      date: date,
      text: text,
    };

    const res = await fetch(API_URL, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(postBody),
    });

    const data = await res.json();
    console.log(data);
  }

  return (
    <>
      <Nav />
      <div className={styles.formContainer}>
        <h2 className={styles.title}>What&apos;s Your Mood Today?</h2>
        <form className={styles.form} onSubmit={postMood}>
          <p className={styles.subtitle}>I am feeling...</p>

          <div className={styles.ratingContainer}>
            <div className={styles.rating}>
              <MoodRatingRadio
                value="super-happy"
                moodStatus={moodStatus}
                setMoodStatus={setMoodStatus}
              />
              <MoodRatingRadio
                value="happy"
                moodStatus={moodStatus}
                setMoodStatus={setMoodStatus}
              />
              <MoodRatingRadio
                value="neutral"
                moodStatus={moodStatus}
                setMoodStatus={setMoodStatus}
              />
              <MoodRatingRadio
                value="sad"
                moodStatus={moodStatus}
                setMoodStatus={setMoodStatus}
              />
              <MoodRatingRadio
                value="super-sad"
                moodStatus={moodStatus}
                setMoodStatus={setMoodStatus}
              />
            </div>
          </div>

          <p className={styles.subtitle}>Date</p>
          <input
            className={styles.date}
            type="date"
            id="date"
            value={!date ? formatDate(new Date()) : date}
            onChange={(e) => setDate(e.target.value)}
            min="2022-01-01"
            max="2090-12-31"
          />

          <p className={styles.subtitle}>
            I am{" "}
            <span className={styles.moodText}>
              {{ moodStatus } ? moodStatus : `...`}
            </span>{" "}
            because...
          </p>
          <textarea
            className={styles.text}
            rows={3}
            name="description"
            placeholder="write your feeling..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button className={styles.submit} type="submit">
            submit
          </button>
        </form>
      </div>
    </>
  );
}
