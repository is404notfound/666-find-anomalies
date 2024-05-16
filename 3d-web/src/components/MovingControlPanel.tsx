import { FirstPersonControls } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

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
  });

  return (
    <>
      <FirstPersonControls movementSpeed={20} />
    </>
  );
}