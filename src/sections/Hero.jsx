import { Canvas, useFrame } from "@react-three/fiber";
import HeroText from "../components/HeroText";
import ParallaxBackground from "../components/ParallaxBackground";
import { Computer } from "../components/Computer";
import { easing } from "maath";
import { OrbitControls } from "@react-three/drei";

const Hero = () => {
  return (
    <section className="flex items-start justify-center min-h-screen overflow-hidden md:items-start md:justify-start c-space">
      <HeroText />
      <ParallaxBackground />
      <figure
        className="absolute inset-0"
        style={{ width: "100vw", height: "100vh" }}
      >
        <Canvas camera={{ position: [0, 1, 3] }}>
          <ambientLight intensity={3} />
          <directionalLight position={[2, 2, 2]} intensity={1} />
          <Computer scale={0.4} />
          <OrbitControls enableZoom={false} />
        </Canvas>
      </figure>
    </section>
  );
};
export default Hero;
