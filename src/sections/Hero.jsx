import { motion } from "motion/react";
import { Canvas } from "@react-three/fiber";
import HeroText from "../components/HeroText";
import ParallaxBackground from "../components/ParallaxBackground";
import { Computer } from "../components/Computer";
import { OrbitControls } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import * as THREE from "three";

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <section
      className={`flex ${
        isMobile
          ? "flex-col items-center justify-center"
          : "flex-row items-start justify-between"
      } min-h-screen overflow-hidden c-space`}
      id="home"
    >
      <HeroText />
      <ParallaxBackground />
      <figure
        className={`z-10 w-full md:w-1/2 ${
          isMobile ? "h-[300px] mt-1" : "h-[600px] mt-20"
        }`}
      >
        <motion.div
          initial={{ y: -200, opacity: 0 }} // começa fora da tela, no topo
          animate={{ y: 0, opacity: 1 }} // desce pro lugar e aparece
          transition={{
            type: "spring", // efeito elástico
            stiffness: 80,
            damping: 15,
            duration: 2,
          }}
          className="w-full h-full"
        >
          <Canvas camera={{ position: [0, 1, 3] }}>
            <ambientLight intensity={3} />
            <directionalLight position={[2, 2, 2]} intensity={1} />
            <Computer scale={isMobile ? 0.6 : 0.45} />
            <OrbitControls
              enableZoom={false}
              enablePan={false}
              mouseButtons={{
                LEFT: THREE.MOUSE.ROTATE,
                RIGHT: null,
              }}
            />
          </Canvas>
        </motion.div>
      </figure>
    </section>
  );
};

export default Hero;
