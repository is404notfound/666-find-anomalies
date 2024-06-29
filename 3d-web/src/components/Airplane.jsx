import { useState, useEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import AirplaneGLB from '../assets/glb/Airplane.glb'
import { useRecoilValue } from "recoil";
import { gameStageState } from "../recoil/games";

export default function Airplane() {
  const INITIAL_POSITION = [800, 120, -100];
  const { nodes, materials } = useGLTF(AirplaneGLB);
  const [position, setPosition] = useState(INITIAL_POSITION);
  const gameStage = useRecoilValue(gameStageState);

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition([position[0] - 0.3, position[1], position[2]]);
    }, 10);

    return () => clearInterval(interval);
  }, [position]);

  useEffect(() => {
    setPosition(INITIAL_POSITION); // eslint-disable-next-line
  }, [gameStage]);

  return (
    <group dispose={null} scale={30} position={position} rotation={[0, 1.5, 0]}>
      <mesh geometry={nodes.Node.geometry} material={materials.mesh} />
    </group>
  )
}

useGLTF.preload('/Airplane.glb')
