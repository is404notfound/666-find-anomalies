import './App.css';
import { Canvas } from '@react-three/fiber';
import { Suspense, useState } from 'react';
import { Physics } from '@react-three/rapier';
import VirtualJoystick from './components/VirtualJoystick';
import MovingControlPanel, { JoystickData } from './components/MovingControlPanel';
import Maps from './games/Maps';
import Structures from './games/Structures';
import { RecoilRoot } from 'recoil';
import Notice from './components/Notice';

function App() {
  const [joystickData, setJoystickData] = useState<JoystickData>({ deltaX: 0, deltaY: 0 });

  return (
    <div
      style={
        {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          width: '100vw',
          backgroundColor: '#f0f0f0'
        }
      }
    >
      <RecoilRoot>
        <Notice />
        <Canvas
          shadows
          camera={{ fov: 90, far: 500, near: 1, position: [-7, 0, 50] }}
          style={{ flex: 1 }}
        >
          <color attach="background" args={['#f0f0f0']} />
          <Suspense fallback={null}>
            <Physics gravity={[0, 1, 0]}> 1
              <ambientLight intensity={1.5} />
              <MovingControlPanel joystickData={joystickData} />
              <Maps />
              <Structures />
            </Physics>
          </Suspense>
        </Canvas>
        <VirtualJoystick onMove={setJoystickData} />
      </RecoilRoot>
    </div>

  );
}

export default App;