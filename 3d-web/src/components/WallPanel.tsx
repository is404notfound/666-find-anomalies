import { Box } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';
import { RigidBody } from '@react-three/rapier'
import { DoubleSide, Texture } from 'three';

interface WallPanelProps {
  position: [number, number, number]
  , args: [number, number, number]
  , color?: string
  , texture?: Texture
  , isCollision?: boolean
  , direction?: 'up' | 'down' | 'right' | 'left';
}

function WallPanel({ position, args, color, texture, isCollision = false, direction }: WallPanelProps) {
  const wallX = position[0];
  const wallZ = position[2];
  const wallWidth = args[0];
  const wallDepth = args[2];

  useFrame((state) => {
    if (!isCollision) return;

    const { camera } = state;
    const { x, z } = camera.position;

    const isRight = direction === 'right';
    const isLeft = direction === 'left';
    const isUp = direction === 'up';
    const isDown = direction === 'down';

    if (isLeft && x < wallX) {
      camera.position.x = wallX + 5;
    } else if (isRight && x > wallX) {
      camera.position.x = wallX - 5;
    } else if (isUp && z > wallZ) {
      camera.position.z = wallZ - 5;
    } else if (isDown && z < wallZ) {
      camera.position.z = wallZ + 5;
    }
  });

  return (
    <RigidBody type='fixed' collisionGroups={1}>
      <Box position={position} args={args}>
        {texture ?
          <meshStandardMaterial map={texture} roughness={0.75} metalness={0.5} side={DoubleSide} />
          : <meshStandardMaterial color={color} />
        }

      </Box>
    </RigidBody>
  );
}

export default WallPanel;