import { Box, FirstPersonControls } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { RigidBody } from '@react-three/rapier';

export interface JoystickData {
  deltaX: number
  , deltaY: number
}

export default function MovingControlPanel({
  joystickData
}
  : {
    joystickData: JoystickData
  }) {
  useFrame((state) => {
    const { camera } = state;
    const { deltaX, deltaY } = joystickData;
    camera.position.x += deltaX * 0.3;
    camera.position.z -= deltaY * 0.3;

    // 카메라 높이
    camera.position.y = 1.8;
  });

  return (
    <>
      <RigidBody collisionGroups={1} position={[0, 0, 0]}>
        <FirstPersonControls
          movementSpeed={25}
          lookSpeed={0.06}
        >
        </FirstPersonControls>
      </RigidBody>
    </>
  );
}