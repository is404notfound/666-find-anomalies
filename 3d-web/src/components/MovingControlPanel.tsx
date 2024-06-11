import { useEffect, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { FirstPersonControls } from '@react-three/drei';
import { RigidBody } from '@react-three/rapier';
import { Camera } from 'three';
import { useRecoilState } from 'recoil';
import { downPortalState, gameStageState, upPortalState } from '../recoil/games';

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
  const lastMoveTimeRef = useRef(Date.now());
  const [stage, setStage] = useRecoilState(gameStageState);
  const [upPortal, setUpPortal] = useRecoilState(upPortalState);
  const [downPortal, setDownPortal] = useRecoilState(downPortalState);

  const handleMouseMove = () => lastMoveTimeRef.current = Date.now();

  const setCameraMovement = (camera: Camera) => {
    const { deltaX, deltaY } = joystickData;

    // 카메라 이동
    camera.position.x += deltaX * 0.3;
    camera.position.z -= deltaY * 0.3;

    // 카메라 높이
    camera.position.y = 1.8;
  };

  const setInPortal = (camera: Camera) => {
    const { x, z } = camera.position;

    if (upPortal && x > 100) {
      setDownPortal(false);
      camera.position.x = -0.8 * x;
      camera.position.z = -1.05 * z;
      setStage(stage + 1);
    }

    if (downPortal && x < -100) {
      setUpPortal(false);
      camera.position.x = -0.81 * x;
      camera.position.z = -1.12 * z;
      stage > 0 ? setStage(stage - 1) : setStage(0);
    }

    if (x > -30 || x < 30) {
      setUpPortal(true);
      setDownPortal(true);
    }
  };

  useFrame((state) => {
    const { camera } = state;

    setCameraMovement(camera);
    setInPortal(camera);
  });

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <RigidBody collisionGroups={1} position={[0, 0, 0]}>
        <FirstPersonControls
          movementSpeed={25}
          lookSpeed={0.06}
          lookVertical={false}
        />
      </RigidBody>
    </>
  );
}