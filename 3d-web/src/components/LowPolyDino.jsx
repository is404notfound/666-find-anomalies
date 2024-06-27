import { useGLTF } from '@react-three/drei'
import LowPolyDino from '../assets/glb/LowPolyDino.glb'
import { useEffect, useState } from 'react'

export default function Model(props) {
  const { nodes, materials } = useGLTF(LowPolyDino)
  const [position, setPosition] = useState([90,-10,10]);

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition([position[0], position[1], position[2] + 0.05]);
    }, 10);

    return () => clearInterval(interval);
  }, [position]);

  return (
    <group {...props} dispose={null} scale={30} position={position} rotation={[0, 3, 0]}>
      <primitive object={nodes.Bone} />
      <primitive object={nodes.Bone001} />
      <group position={[-0.142, 0.032, 0.06]} scale={[0.609, 0.609, 1.042]}>
        <skinnedMesh geometry={nodes.Cube001.geometry} material={materials.Dino} skeleton={nodes.Cube001.skeleton} />
        <skinnedMesh geometry={nodes.Cube001_1.geometry} material={materials.Dino2} skeleton={nodes.Cube001_1.skeleton} />
      </group>
    </group>
  )
}

useGLTF.preload(LowPolyDino)