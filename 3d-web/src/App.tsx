import './App.css';
import { Box } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier'
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { Physics } from '@react-three/rapier';
import { OrbitControls } from '@react-three/drei';

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
      <Canvas
        shadows
        camera={{ position: [300, 300, 300], fov: 30 }}
        style={{ flex: 1 }}
    >
      <color attach="background" args={['#f0f0f0']} />
      <Suspense fallback={null}>
        <Physics debug> 1
          <ambientLight intensity={0.5} />
          <directionalLight position={[-10, 10, 0]} intensity={0.4} />
          <RigidBody type='fixed'>
            <Box position={[0, 0, 0]} args={[10, 1, 100]} >
              <meshStandardMaterial color="lightGray" />
            </Box>
          </RigidBody>
          <OrbitControls />
        </Physics>
      </Suspense>
    </Canvas>
  </div>
  );
}

export default App;