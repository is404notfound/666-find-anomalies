import './App.css';
import { Canvas, useLoader } from '@react-three/fiber';
import { Suspense } from 'react';
import { Physics } from '@react-three/rapier';
import WallPanel from './components/WallPanel';
import pattern from './assets/glitch-wall.jpeg';
import { RepeatWrapping, TextureLoader } from 'three';
import MovingControlPanel from './components/MovingControlPanel';


function App() {
  const textureRepeat = [4, 4];
  const texture = useLoader(TextureLoader, pattern);
  texture.wrapS = RepeatWrapping;
  texture.wrapT = RepeatWrapping;
  texture.repeat.set(textureRepeat[0], textureRepeat[1]);

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
      <Canvas
        shadows
        camera={{ position: [0, 5, -60], fov: 30 }}
        style={{ flex: 1 }}
      >
        <color attach="background" args={['#f0f0f0']} />
        <Suspense fallback={null}>
          <Physics debug> 1
            <ambientLight intensity={0.5} />
            <directionalLight position={[-10, 10, 0]} intensity={0.4} />
            <WallPanel position={[0, 0, 0]} args={[10, 1, 100]} color='white' />
            <WallPanel position={[0, 10, 0]} args={[10, 1, 100]} color='white' />
            <WallPanel position={[-5, 5, -5]} args={[1, 10, 110]} color='pink' texture={texture} />
            <WallPanel position={[5, 5, -5]} args={[1, 10, 110]} color='pink' texture={texture} />
            <MovingControlPanel />
          </Physics>
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;