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
    date: "01/09/2022",
    text: "Mao is gonna play table tennis today~",
  },
  {
    status: "sad",
    date: "16/04/2022",
    text: "We didn't know what to eat :(",
  },
  {
    status: "super-sad",
    date: "20/09/2022",
    text: "We didn't know what to eat :(",
  },
  {
    status: "super-happy",
    date: "02/07/2022",
    text: "A meeting of the government's vaccine experts - the Joint Committee on Vaccination and Immunisation - recommended a rapid booster campaign for children aged one to nine.The aim is two-fold. First to reduce the risk of any child catching the virus and being paralysed and also to raise immunity levels so the virus finds it harder to spread",
  },
  {
    status: "neutral",
    date: "31/08/2022",
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
  // if (req.method === "POST") {
  //   const { status, date, text } = req.body;
  //   const result = await prisma.post.create({
  //     data: {
  //       status,
  //       date,
  //       text,
  //     },
  //   });
  //   res.json(result);
  // }
}
