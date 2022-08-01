import { useState } from "react";

import Nav from "../../common/components/Nav/Nav";

export default function Create() {
  const [moodStatus, setMoodStatus] = useState("");
  const [date, setDate] = useState("");
  const [text, setText] = useState("");

  function handleClick() {}

  return (
    <>
      <Nav />
      <h2>record your today&apos;s mood</h2>
      <form>
        <p>select your mood</p>
        <input
          type="radio"
          onChange={(e) => setMoodStatus(e.target.value)}
          name="mood"
          value="happy"
          id="happy"
        />
        <label htmlFor="happy">😀</label>
        <input
          type="radio"
          onChange={(e) => setMoodStatus(e.target.value)}
          name="mood"
          value="sad"
          id="sad"
        />
          <label htmlFor="sad">😢</label>
        <input
          type="radio"
          onChange={(e) => setMoodStatus(e.target.value)}
          name="mood"
          value="angry"
          id="angry"
        />
          <label htmlFor="angry">😠</label>
        <input
          type="radio"
          onChange={(e) => setMoodStatus(e.target.value)}
          name="mood"
          value="anxious"
          id="anxious"
        />
          <label htmlFor="anxious">😟</label>
        <input
          type="radio"
          onChange={(e) => setMoodStatus(e.target.value)}
          name="mood"
          value="relaxed"
          id="relaxed"
        />
          <label htmlFor="relaxed">😌</label>  <p>date</p>
        <input
          type="date"
          id="start"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          min="2022-01-01"
          max="2090-12-31"
        />
        <p>description</p>
        <label htmlFor="description"></label>
        <input
          name="description"
          placeholder="write your feeling..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit" onClick={handleClick}>
          submit
        </button>
      </form>
    </>
  );
}
