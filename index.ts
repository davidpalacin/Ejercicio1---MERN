import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();

const port = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, world");
});

app.get("/hello", (req: Request, res: Response) => {
  const name = req.query.name;
  res.status(200).json({
    data: {
      message: `Hola, ${name || "anónimo"}`,
    },
  });
});

app.get("/bye", (req: Request, res: Response) => {
  res.json({
    data: {
      message: `Goodbye, world`,
    },
  });
});

app.listen(port, () => {
  console.log("Server listening on port " + port);
});
