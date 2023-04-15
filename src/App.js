import React from "react";
import { ClimbingBoxLoader } from "react-spinners";
import { routes } from "./shared/routes/index";
import AppProvider from "./shared/context";
import "./index.css";

function App() {
  return (
    <>
      <AppProvider>
        <React.Suspense
          fallback={
            <div className="center">
              <ClimbingBoxLoader color={"#1976d2"} size={30} />
            </div>
          }
        >
          {routes}
        </React.Suspense>
      </AppProvider>
    </>
  );
}

export default App;
