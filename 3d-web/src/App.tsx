import './App.css';
import { Canvas } from '@react-three/fiber';
import { Suspense, useState } from 'react';
import { Physics } from '@react-three/rapier';
import WallPanel from './components/WallPanel';
import VirtualJoystick from './components/VirtualJoystick';
import MovingControlPanel, { JoystickData } from './components/MovingControlPanel';
import { useTexture } from './hooks/useTexture';

function App() {
  const [joystickData, setJoystickData] = useState<JoystickData>({ deltaX: 0, deltaY: 0 });
  const { wallTexture, floorTexture, topTexture } = useTexture();
  
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
      <VirtualJoystick onMove={setJoystickData} />
      <Canvas
        shadows
        camera={{ fov: 75, far: 1000, near: 1 }}
        style={{ flex: 1 }}
      >
        <color attach="background" args={['#f0f0f0']} />
        <Suspense fallback={null}>
          <Physics gravity={[0, 1, 0]}> 1
            <ambientLight intensity={0.5} />
            <directionalLight position={[20, 20, 20]} intensity={3} />
            <MovingControlPanel joystickData={joystickData} />

            {/* Center */}
            <WallPanel position={[0, -15, 0]} args={[80, 1, 100]} color='white' texture={floorTexture}/>
            <WallPanel position={[0, 25, 0]} args={[80, 1, 100]} color='white'  texture={topTexture} />
            <WallPanel position={[-40, 5, -40]} args={[1, 40, 180]} color='white' texture={wallTexture} />
            <WallPanel position={[40, 5, 40]} args={[1, 40, 180]} color='white' texture={wallTexture} />

            {/* Front */}
            <WallPanel position={[-50, -15, 90]} args={[180, 1, 80]} color='white' texture={floorTexture}/>
            <WallPanel position={[-50, 25, 90]} args={[180, 1, 80]} color='white' texture={topTexture}/>
            <WallPanel position={[-130, 5, 50]} args={[180, 40, 1]} color='white' texture={wallTexture} />
            <WallPanel position={[-50, 5, 130]} args={[180, 40, 1]} color='white' texture={wallTexture} />

            <WallPanel position={[-180, -15, 140]} args={[80, 1, 180]} color='white' texture={floorTexture}/>
            <WallPanel position={[-180, 25, 140]} args={[80, 1, 180]} color='white' texture={topTexture}/>
            <WallPanel position={[-220, 5, 140]} args={[1, 40, 180]} color='white' texture={wallTexture} />
            <WallPanel position={[-140, 5, 180]} args={[1, 40, 100]} color='white' texture={wallTexture} />

            {/* Back */}
            <WallPanel position={[50, -15, -90]} args={[180, 1, 80]} color='white' texture={floorTexture}/>
            <WallPanel position={[50, 25, -90]} args={[180, 1, 80]} color='white' texture={topTexture}/>
            <WallPanel position={[130, 5, -50]} args={[180, 40, 1]} color='white' texture={wallTexture} />
            <WallPanel position={[50, 5, -130]} args={[180, 40, 1]} color='white' texture={wallTexture} />

            <WallPanel position={[180, -15, -140]} args={[80, 1, 180]} color='white' texture={floorTexture}/>
            <WallPanel position={[180, 25, -140]} args={[80, 1, 180]} color='white' texture={topTexture}/>
            <WallPanel position={[220, 5, -140]} args={[1, 40, 180]} color='white' texture={wallTexture} />
            <WallPanel position={[140, 5, -180]} args={[1, 40, 100]} color='white' texture={wallTexture} />

          </Physics>
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;