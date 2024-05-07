import { OrbitControls } from '@react-three/drei';
import useMovingControls from '../hooks/useMovingControls';

export default function MovingControlPanel() {
  useMovingControls();

  return (
    <>
      <OrbitControls target={[0, 0, 100]} />
    </>
  );
}