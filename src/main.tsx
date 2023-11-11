// ! antd need, 用于重置浏览器样式, see https://ant.design/docs/react/migration-v5#technology-adjustment
import "antd/dist/reset.css";
// ! vite need, see https://unocss.dev/integrations/vite
import "virtual:uno.css";

import { createRoot } from "react-dom/client";

import { App } from "@/app/app";

createRoot(document.getElementById("root") as HTMLElement).render(<App />);
