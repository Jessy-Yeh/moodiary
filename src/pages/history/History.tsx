import { useEffect, useState } from "react";
import Nav from "../../common/components/Nav/Nav";
import { API_URL } from "../../common/constants";

type THistoryData = {
  status: string;
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

  return (
    <>
      <Nav />
      <table>
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
      </table>
    </>
  );
}
