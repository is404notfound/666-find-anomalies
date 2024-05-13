import './App.css';
import { Canvas, useLoader } from '@react-three/fiber';
import { Suspense, useState } from 'react';
import { Physics } from '@react-three/rapier';
import WallPanel from './components/WallPanel';
import pattern from './assets/glitch-wall.jpeg';
import { RepeatWrapping, TextureLoader } from 'three';
import { FirstPersonControls } from '@react-three/drei';

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
        camera={{fov: 75, far: 1000, near: 1 }}
        style={{ flex: 1 }}
        >
        <color attach="background" args={['#f0f0f0']} />
        <Suspense fallback={null}>
          <Physics gravity={[0, 1, 0]}> 1
            <ambientLight intensity={0.5} />
            <directionalLight position={[-10, 10, 0]} intensity={0.4} />
            <FirstPersonControls movementSpeed={20} />

            {/* Center */}
            <WallPanel position={[0, -15, 0]} args={[80, 1, 100]} color='pink' />
            <WallPanel position={[0, 25, 0]} args={[80, 1, 100]} color='pink' />
            <WallPanel position={[-40, 5, -40]} args={[1, 40, 180]} color='white' texture={texture} />
            <WallPanel position={[40, 5, 40]} args={[1, 40, 180]} color='white' texture={texture} />

            {/* Front */}
            <WallPanel position={[-50, 25, 90]} args={[180, 1, 80]} color='white' />
            <WallPanel position={[-50, -15, 90]} args={[180, 1, 80]} color='white' />
            <WallPanel position={[-130, 5, 50]} args={[180, 40, 1]} color='white' texture={texture} />
            <WallPanel position={[-50, 5, 130]} args={[180, 40, 1]} color='white' texture={texture} />
            
            <WallPanel position={[-180, -15, 140]} args={[80, 1, 180]} color='white' />
            <WallPanel position={[-180, 25, 140]} args={[80, 1, 180]} color='white' />
            <WallPanel position={[-220, 5, 140]} args={[1, 40, 180]} color='white' texture={texture} />
            <WallPanel position={[-140, 5, 180]} args={[1, 40, 100]} color='white' texture={texture} />

            {/* Back */}
            <WallPanel position={[50, -15, -90]} args={[180, 1, 80]} color='white' />
            <WallPanel position={[50, 25, -90]} args={[180, 1, 80]} color='white' />
            <WallPanel position={[130, 5, -50]} args={[180, 40, 1]} color='white' texture={texture} />
            <WallPanel position={[50, 5, -130]} args={[180, 40, 1]} color='white' texture={texture} />

            <WallPanel position={[180, -15, -140]} args={[80, 1, 180]} color='white' />
            <WallPanel position={[180, 25, -140]} args={[80, 1, 180]} color='white' />
            <WallPanel position={[220, 5, -140]} args={[1, 40, 180]} color='white' texture={texture} />
            <WallPanel position={[140, 5, -180]} args={[1, 40, 100]} color='white' texture={texture} />

          </Physics>
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;