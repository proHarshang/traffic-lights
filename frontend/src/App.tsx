import "./App.css";
import TrafficSignalsPage from "@/pages/TrafficSignalsPage";
import { EmergencyProvider } from "@/context/EmergencyContext";
import { TrafficLightProvider } from "@/context/TrafficLightContext";

function App() {
  return (
    <EmergencyProvider>
      <TrafficLightProvider>
      <TrafficSignalsPage />
    </TrafficLightProvider>
    </EmergencyProvider>
  );
}

export default App;
