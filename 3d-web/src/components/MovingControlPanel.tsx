import { useFrame } from '@react-three/fiber';
import { FirstPersonControls } from '@react-three/drei';
import { RigidBody } from '@react-three/rapier';
import { Camera, Vector3 } from 'three';
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
  const [stage, setStage] = useRecoilState(gameStageState);
  const [upPortal, setUpPortal] = useRecoilState(upPortalState);
  const [downPortal, setDownPortal] = useRecoilState(downPortalState);

  const setInPortal = (camera: Camera) => {
    const { x, z } = camera.position;
    let xAdd = 0;

    if (upPortal && z < -450) {
      setDownPortal(false);
      xAdd = x - 385;
      camera.position.x = -335 + xAdd;
      camera.position.z = 521;
      setStage(stage + 1);
    }

    if (downPortal && z > 450) {
      setUpPortal(false);
      xAdd = x + 335;
      camera.position.x = 385 + xAdd;
      camera.position.z = -451;
      stage > 0 ? setStage(stage - 1) : setStage(0);
    }

    if (z > -130 && z < 130) {
      setUpPortal(true);
      setDownPortal(true);
    }
  };

  const setCameraMovement = (camera: Camera) => {
    const { deltaX, deltaY } = joystickData;
    const rotationSpeed = 0.015;
    const movementSpeed = 0.3;

    camera.rotation.y -= deltaX * rotationSpeed;

    // 방향 계산
    const forward = new Vector3(0, 0, -1);
    forward.applyQuaternion(camera.quaternion);
    forward.y = 0;
    forward.normalize();

    const right = new Vector3(1, 0, 0);
    right.applyQuaternion(camera.quaternion);
    right.y = 0;
    right.normalize();

    camera.position.addScaledVector(forward, deltaY * movementSpeed);
    camera.position.addScaledVector(right, deltaX * movementSpeed);

    // 카메라 높이 고정
    camera.position.y = 1.8;
  };

  useFrame((state) => {
    const { camera } = state;

    setCameraMovement(camera);
    setInPortal(camera);
  });

  return (
    <>
      <RigidBody collisionGroups={1} position={[0, 0, 0]}>
        <FirstPersonControls
          movementSpeed={50}
          lookSpeed={0.06}
          lookVertical={false}
        />
      </RigidBody>
    </>
  );
}