// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import bookList from "../../data/bookList.json";
export default function handler(req, res) {
  res.status(200).json(bookList);
}
