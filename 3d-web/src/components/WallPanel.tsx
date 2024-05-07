import { Box } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier'
import { DoubleSide } from 'three';

interface WallPanelProps {
    position: [number, number, number]
    , args: [number, number, number]
    , color?: string
    , texture?: any
}

function WallPanel({ position, args, color, texture }: WallPanelProps) {

  return (
    <RigidBody type='fixed'>
        <Box position={position} args={args}>
            { texture ? 
            <meshStandardMaterial map={texture} roughness={0.75} metalness={0.5} side={DoubleSide} />
            : <meshStandardMaterial color={color} />
            }   
        </Box>
    </RigidBody>
  );
}

export default WallPanel;