import React from "react";
import Particles from "react-tsparticles";

export default function ParticleBackground() {

  return (

    <Particles
      options={{
        particles: {
          number: {
            value: 120
          },
          links: {
            enable: true
          },
          move: {
            speed: 1
          }
        }
      }}
    />

  );

}