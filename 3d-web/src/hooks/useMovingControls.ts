import { useState, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';

export default function useMovingControls() {
  const { camera } = useThree();
  const [velocity, setVelocity] = useState({ x: 0, y: 0, z: 0 });
  const [isMovingForward, setIsMovingForward] = useState(false);
  const [isMovingBackward, setIsMovingBackward] = useState(false);
  const [isMovingLeft, setIsMovingLeft] = useState(false);
  const [isMovingRight, setIsMovingRight] = useState(false);
  const acceleration = 0.1;
  const deceleration = 0.2;
  const maxSpeed = 0.5;

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  useEffect(() => {
    const decelerate = () => {
      if (!isMovingForward && !isMovingBackward) {
        setVelocity((prevVelocity) => ({
          x: Math.abs(prevVelocity.x) > deceleration ? prevVelocity.x - Math.sign(prevVelocity.x) * deceleration : 0,
          y: 0,
          z: Math.abs(prevVelocity.z) > deceleration ? prevVelocity.z - Math.sign(prevVelocity.z) * deceleration : 0
        }));
      }
    };

    const decelerateInterval = setInterval(decelerate, 1000 / 60);

    return () => clearInterval(decelerateInterval);
  }, [isMovingForward, isMovingBackward]);

  useFrame(() => {
    let newVelocity = { ...velocity };

    if (isMovingRight) newVelocity.x = Math.min(velocity.x + acceleration, maxSpeed);
    if (isMovingLeft) newVelocity.x = Math.max(velocity.x - acceleration, -maxSpeed);
    if (isMovingForward) newVelocity.z = Math.min(velocity.z + acceleration, maxSpeed);
    if (isMovingBackward) newVelocity.z = Math.max(velocity.z - acceleration, -maxSpeed);

    camera.position.x += newVelocity.x;
    camera.position.z += newVelocity.z;

    setVelocity(newVelocity);
  });

  const handleKeyDown = (event: any) => {
    switch (event.key) {
      case 'w':
        setIsMovingForward(true);
        break;
      case 'a':
        setIsMovingLeft(true);
        break;
      case 's':
        setIsMovingBackward(true);
        break;
      case 'd':
        setIsMovingRight(true);
        break;
      default:
        break;
    }
  };

  const handleKeyUp = (event: any) => {
    switch (event.key) {
      case 'w':
        setIsMovingForward(false);
        break;
      case 'a':
        setIsMovingLeft(false);
        break;
      case 's':
        setIsMovingBackward(false);
        break;
      case 'd':
        setIsMovingRight(false);
        break;
      default:
        break;
    }
  };
}