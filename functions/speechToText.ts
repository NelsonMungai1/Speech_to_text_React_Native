import { Response, Request } from "express";
export const speechToText = async (req: Request, res: Response) => {
  const data = req.body;
  const audioUrl = data?.audioUrl;
  const audioConfig = data?.audioConfig;

  if (!audioConfig)
    return res.status(422).send("No audio config was provided.");
  if (!audioUrl) return res.status(422).send("No audio url was provided.");
};
