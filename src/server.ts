import express from "express";
import { routes } from "./routes";
import { errorHandler } from "./middlewares/error-handler";

const app = express();

app.use(express.json());
app.use("/api", routes);
app.use(errorHandler);

app.listen(3000, () => {
    console.log("server running on port 3000");
});
