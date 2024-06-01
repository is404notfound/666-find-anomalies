import { Box, FirstPersonControls } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { RigidBody } from '@react-three/rapier';
import { useEffect, useRef, useState } from 'react';
import { Camera } from 'three';

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
  const [isEnabled, setIsEnabled] = useState(true);
  const lastMoveTimeRef = useRef(Date.now());
 


  useEffect(() => {
    const handleMouseMove = () => {
      lastMoveTimeRef.current = Date.now();
  
      if (!isEnabled) {
        setIsEnabled(true);
      }
    };
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isEnabled]);
  
  const setCameraMovement = (camera: Camera) => {
    const { deltaX, deltaY } = joystickData;
    const currentTime = Date.now();

    // 카메라 이동
    camera.position.x += deltaX * 0.3;
    camera.position.z -= deltaY * 0.3;

    // 카메라 높이
    camera.position.y = 1.8;

    // 시야 회전 멈춤 처리
    if (currentTime - lastMoveTimeRef.current > 1000) {
      setIsEnabled(false);
    }
  };


  useFrame((state) => {
    const { camera } = state;

    setCameraMovement(camera);
  });

  return (
    <>
      <RigidBody collisionGroups={1} position={[0, 0, 0]}>
        <FirstPersonControls
          movementSpeed={25}
          lookSpeed={0.06}
          lookVertical={false}
          enabled={isEnabled}
        >
          <axesHelper args={[5]} />
          <Box args={[1, 1, 1]} />
        </FirstPersonControls>
      </RigidBody>
    </>
  );
}