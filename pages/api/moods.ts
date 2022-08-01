// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type TMoodHistoryData = {
  status: string;
  date: string;
  text: string;
}[];

const dummyMoodHistoryData = [
  {
    status: "happy",
    date: "01/Aug/2022",
    text: "Mao is gonna play table tennis today~",
  },
  {
    status: "sad",
    date: "31/July/2022",
    text: "We didn't know what to eat :(",
  },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<TMoodHistoryData>
) {
  if (req.method === "GET") {
    res.status(200).json(dummyMoodHistoryData);
  }
  if (req.method === "POST") {
  }
}
