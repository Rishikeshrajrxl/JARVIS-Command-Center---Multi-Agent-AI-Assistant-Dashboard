import React from "react";
import { motion } from "framer-motion";

export default function AgentCard({ name, active }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      className={`card ${active ? "on" : "off"}`}
    >
      <h3>{name}</h3>
      <p>{active ? "ONLINE" : "WAITING"}</p>
    </motion.div>
  );
}