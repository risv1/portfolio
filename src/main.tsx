import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router";
import Router from "./router";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<BrowserRouter>
			<HelmetProvider>
				<Router />
			</HelmetProvider>
		</BrowserRouter>
	</StrictMode>,
);
