import * as express from "express";
import { Response, Request } from "express";
import { speechToText } from "./functions/speechToText";
import "dotenv/config";
const port = process.env.PORT || 4000;

const app = express();
// set up middleware
app.use(
  express.json({
    limit: "50mb",
  })
);

// the handler for speech to text

app.post("/speech-to-text", (req: Request, res: Response) => {
  speechToText(req, res);
});
//

app.get("/", (req, res) => {
  res.send("The Speech to text is working properly");
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
