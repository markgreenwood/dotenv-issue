import dotenv from "dotenv";
import path from "path";

dotenv.config({
  path: path.join(__dirname, "../.env"),
  debug: true,
});

export function getConfiguration() {
  const { env } = process;
  return {
    config1: env.CONFIG_VAR_1 || "default1",
    config2: env.CONFIG_VAR_2 || "default2",
    config3: env.CONFIG_VAR_3 || "default3",
  };
}

export default getConfiguration;
