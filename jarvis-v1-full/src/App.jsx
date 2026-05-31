import React, { useEffect, useState } from "react";

import "./styles/jarvis.css";

import AICore from "./components/AICore";
import HudOverlay from "./components/HudOverlay";
import DiagnosticsPanel from "./components/DiagnosticsPanel";
import RadarScanner from "./components/RadarScanner";
import ProgressBar from "./components/ProgressBar";

const agents = [
  {
    name: "Friday",
    voice:
      "Friday online. Daily intelligence feed. All systems active."
  },
  {
    name: "Appian",
    voice:
      "Appian online. Twelve automations running. All workflows holding on your command."
  },
  {
    name: "Neura",
    voice:
      "Neura online. All projects tracked and accounted for. What are we building today?"
  },
  {
    name: "Process Monitoring",
    voice:
      "Process Monitoring online. All processes running efficiently. Found nine incomplete processes in the system."
  },
  {
    name: "Record Monitoring",
    voice:
      "Record Monitoring online. All records synced successfully. Two records with missing precedence detected."
  }
];

export default function App() {

  const [showDashboard, setShowDashboard] = useState(false);

  const [screenMessage, setScreenMessage] = useState("");

  const [currentAgent, setCurrentAgent] = useState("");

  const [logs, setLogs] = useState([]);

  const [progress, setProgress] = useState(0);

  const [activeAgents, setActiveAgents] = useState([]);

  const speak = (text) => {

    speechSynthesis.cancel();

    const utterance =
      new SpeechSynthesisUtterance(text);

    utterance.rate = 0.9;

    utterance.pitch = 1;

    speechSynthesis.speak(utterance);
  };

  const addLog = (msg) => {
    setLogs(prev => [...prev, msg]);
  };

  useEffect(() => {

    setScreenMessage(
      "HEY RISHIKESH, WELCOME TO JARVIS WORLD"
    );

    speak(
      "Hey Rishikesh, welcome to Jarvis World"
    );

    setTimeout(() => {

      setScreenMessage(
        "NOW INITIALIZING JARVIS CORE"
      );

      speak(
        "Now Initializing Jarvis Core"
      );

      addLog("[OK] Neural Core Online");
      addLog("[OK] Voice Engine Online");
      addLog("[OK] Security Layer Online");
      addLog("[OK] Knowledge Engine Online");

      setTimeout(() => {

        setShowDashboard(true);

        let i = 0;

        const timer = setInterval(() => {

          if (i < agents.length) {

            const agent = agents[i];

            setCurrentAgent(agent.name);

            setActiveAgents(prev => [
              ...prev,
              agent.name
            ]);

            addLog(
              `[ONLINE] ${agent.name}`
            );

            speak(
              agent.voice
            );

            setProgress(
              Math.round(
                ((i + 1) /
                  agents.length) * 100
              )
            );

            i++;

          } else {

            clearInterval(timer);

            setCurrentAgent("");

            setScreenMessage(
              "ASSEMBLED"
            );

            addLog(
              "[OK] All Agents Assembled"
            );

            speak(
              "All five agents assembled. Groups are at full operational capacity sir."
            );

            setTimeout(() => {

              setScreenMessage(
                "APPLICATION READY TO USE"
              );

              speak(
                "Application ready to use."
              );

            }, 5000);
          }

        }, 6000);

      }, 3000);

    }, 4000);

  }, []);

  return (

    <div className="app">

      {showDashboard && (
        <>
          <HudOverlay />

          <DiagnosticsPanel logs={logs} />

          <RadarScanner />

          <ProgressBar value={progress} />

          <div className="core-wrapper">
            <AICore />
          </div>

          <div className="agent-background">

            {activeAgents.map(agent => (

              <div
                key={agent}
                className="agent-background-item"
              >
                {agent}
              </div>

            ))}

          </div>

        </>
      )}

      <div className="message-overlay">
        {screenMessage}
      </div>

      {currentAgent && (

        <div
          className="agent-popup"
        >

          <div className="popup-logo">
            J
          </div>

          <h2>{currentAgent}</h2>

          <p>
            STATUS : ONLINE
          </p>

        </div>

      )}

    </div>

  );
}