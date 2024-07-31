import { Box, Text } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier'
import { DoubleSide, Texture } from 'three';

interface PanelProps {
  position: [number, number, number]
  , args: [number, number, number]
  , color?: string
  , texture?: Texture
  , content?: string | number
  , textColor?: string
  , textPosition?: [number, number, number]
  , textScale?: [number, number, number]
}

function Panel({
  position
  , args
  , color
  , texture
  , content
  , textColor
  , textPosition
  , textScale
}: PanelProps) {
  
  return (
    <RigidBody type='fixed' collisionGroups={1}>
      <Box position={position} args={args}>
        {texture ?
          <meshStandardMaterial map={texture} roughness={0.75} metalness={0.5} side={DoubleSide} />
          : <meshStandardMaterial color={color} />
        }
        <Text
          position={textPosition}
          fontSize={5}
          color={textColor}
          anchorX="center"
          anchorY="middle"
          rotation={[0, 1.5, 0]}
          scale={textScale && textScale}
        >
          {content}
        </Text>
      </Box>
    </RigidBody>
  );
}

export default Panel;