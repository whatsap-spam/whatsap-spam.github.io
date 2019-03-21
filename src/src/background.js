import path from "path";
import url from "url";
import { app, Menu } from "electron";
import createWindow from "./helpers/window";

import env from "env";

if (env.name !== "production") {
  const userDataPath = app.getPath("userData");
  app.setPath("userData", `${userDataPath} (${env.name})`);
}

app.on("ready", () => {
  const mainWindow = createWindow("main", {
    width: 1180,
    height: 715,
    icon: path.join(__dirname, "icon.ico")
  });

  mainWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, "app.html"),
      protocol: "file:",
      slashes: true
    })
  );

  if (env.name === "development") {
    mainWindow.openDevTools();
  }
});

app.on("window-all-closed", () => {
  app.quit();
});
