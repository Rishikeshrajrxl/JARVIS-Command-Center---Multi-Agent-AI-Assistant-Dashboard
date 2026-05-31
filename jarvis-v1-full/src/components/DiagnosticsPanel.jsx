import React from "react";

export default function DiagnosticsPanel({ logs }) {
  return (
    <div className="diagnostics">
      <h3>BOOT LOG</h3>

      {logs.map((log, index) => (
        <p key={index}>{log}</p>
      ))}
    </div>
  );
}