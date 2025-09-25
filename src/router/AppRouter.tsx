import { Route, Routes } from "react-router";
import HomePage from "../pages/HomePage";
import MasterLayout from "../components/display/MasterLayout";
import NewTask from "../pages/NewTask";
import NotFound from "../components/display/NotFound";

function AppRouter() {
  return (
    <Routes>
      <Route
        index
        element={
          <MasterLayout title={"To-Do App"}>
            <HomePage />
          </MasterLayout>
        }
      />

      <Route
        path="/new"
        element={
          <MasterLayout backLink="/" title={"Add Task"}>
            <NewTask />
          </MasterLayout>
        }
      />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRouter;
