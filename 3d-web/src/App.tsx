import './App.css';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { Physics } from '@react-three/rapier';
import MovingControlPanel from './components/MovingControlPanel';
import Maps from './games/Maps';
import Structures from './games/Structures';
import { RecoilRoot } from 'recoil';

function App() {
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
        <Canvas
          shadows
          camera={{ fov: 65, far: 500, near: 1, position: [-7, 0, 50] }}
          style={{ flex: 1 }}
        >
          <color attach="background" args={['#f0f0f0']} />
          <Suspense fallback={null}>
            <Physics gravity={[0, 1, 0]}> 1
              <ambientLight intensity={1.5} />
              <MovingControlPanel />
              <Maps />
              <Structures />
            </Physics>
          </Suspense>
        </Canvas>
      </RecoilRoot>
    </div>
  );
}

export default App;