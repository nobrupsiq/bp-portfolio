import { useGLTF } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export function Computer(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("../../public/models/my_computer.glb");

  useFrame((state) => {
    const t = state.clock.getElapsedTime(); // tempo correndo desde o início

    if (group.current) {
      // Movimento suave de vai e volta
      group.current.rotation.y = Math.sin(t) * 0.4; // direita ↔ esquerda
      group.current.rotation.x = Math.sin(t / 2) * 0.1; // leve inclinação pra cima ↔ baixo
    }
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_2.geometry}
        material={materials.palette}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload("/models/my_computer.glb");
