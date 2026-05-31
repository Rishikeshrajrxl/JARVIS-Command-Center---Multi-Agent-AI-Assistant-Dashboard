import { motion } from "framer-motion";

export default function BootScreen() {

  return (

    <motion.div
      className="boot-screen"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
    >

      <h1>JARVIS OS v2.0</h1>

      <h3>BOOTING...</h3>

    </motion.div>

  );

}