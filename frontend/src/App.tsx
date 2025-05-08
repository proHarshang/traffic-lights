import "./App.css";
import TrafficSignalsPage from "@/pages/TrafficSignalsPage";
import { EmergencyProvider } from "@/context/EmergencyContext";

function App() {
  return (
    <EmergencyProvider>
      <TrafficSignalsPage />
    </EmergencyProvider>
  );
}

export default App;
