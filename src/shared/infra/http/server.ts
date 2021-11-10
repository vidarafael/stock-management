import "reflect-metadata";
import express from 'express';
import mainRouter from "./routes";
import {createConnection, getManager} from "typeorm";
import router from "@modules/exampleModule/infra/http/routes/example.routes";

const app = express();
const port = 3333;

app.listen(port, async () => {
    console.log(`SERVER STARTED ON http://localhost:${port}`);
    await createConnection();
});

app.use("/v1/stock-management", mainRouter);