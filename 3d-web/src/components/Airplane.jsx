import { useState, useEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import AirplaneGLB from '../assets/glb/Airplane.glb'
import { useRecoilValue } from "recoil";
import { gameStageState } from "../recoil/games";

export default function Airplane() {
  const inisialPosition = [0, 120, -300];
  const { nodes, materials } = useGLTF(AirplaneGLB);
  const [position, setPosition] = useState(inisialPosition);
  const gameStage = useRecoilValue(gameStageState);

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition([position[0], position[1], position[2] + 0.75]);
    }, 10);

    return () => clearInterval(interval);
  }, [position]);

  useEffect(() => {
    setPosition(inisialPosition);
  }, [gameStage]);

  return (
    <group dispose={null} scale={30} position={position} rotation={[0, 3, 0]}>
      <mesh geometry={nodes.Node.geometry} material={materials.mesh} />
    </group>
  )
}

useGLTF.preload('/Airplane.glb')
