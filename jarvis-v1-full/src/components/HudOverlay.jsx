import React from "react";

export default function HudOverlay() {
  return (
    <>
      <div className="hud hud-right">
        <div>CORE HEALTH : 100%</div>
        <div>NETWORK : ACTIVE</div>
        <div>MEMORY : 32 TB</div>
      </div>

      <div className="hud hud-left">
        <div>JARVIS OS</div>
        <div>VERSION 4.0</div>
        <div>STATUS : ONLINE</div>
      </div>
    </>
  );
}