import { useGLTF } from '@react-three/drei'
import LowPolyDino from '../assets/glb/LowPolyDino.glb'

export default function Model(props) {
  const { nodes, materials } = useGLTF(LowPolyDino)

  return (
    <group {...props} dispose={null} scale={40} position={[140,-10,-300]} rotation={[0, 3, 0]}>
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
