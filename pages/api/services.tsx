// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from "next";
import { services } from "../../data";

const apiServices = (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ services });
};

export default apiServices;
