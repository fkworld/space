import "./main.css";
import "@mantine/core/styles.css";

import { createRoot } from "react-dom/client";

import { App } from "@/app/app";

createRoot(document.getElementById("root") as HTMLElement).render(<App />);
