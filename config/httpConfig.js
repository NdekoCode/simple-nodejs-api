import morgan from "morgan";
import fs from "fs";
import { fileURLToPath } from "url";
import path from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
export const httpServerConfig = (app) => {
  app.use(
    morgan("dev", {
      skip: (req, res) => res.status < 400,
    })
  );
  app.use(
    morgan("common", {
      stream: fs.createWriteStream(
        path.join(path.dirname(__dirname), "access.log"),
        {
          flag: "a",
        }
      ),
    })
  );
};
