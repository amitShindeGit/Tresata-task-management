import AppRouter from "./router/AppRouter";
import { TaskProvider } from "./utils/context/TaskProvider";

function App() {
  return (
    <TaskProvider>
      <AppRouter />
    </TaskProvider>
  );
}

export default App;
