import { Joystick, JoystickShape } from 'react-joystick-component';
import { IJoystickUpdateEvent } from 'react-joystick-component/build/lib/Joystick';

const VirtualJoystick = ({ onMove }: {
  onMove: (data: any) => void
}) => {
  const handleMove = (e: IJoystickUpdateEvent) => {
    const { x, y } = e;
    onMove({ deltaX: x || 0, deltaY: y || 0});
  };

  const handleStop = () => {
    onMove({ deltaX: 0, deltaY: 0 });
  };

  return (
    <div
      style={{
        position: 'absolute',
        bottom: '10%',
        left: '50%',
        zIndex: 1,
      }}
    >
      <Joystick
        size={100}
        baseColor="black"
        stickColor="white"
        baseShape={JoystickShape.Square}
        move={handleMove}
        stop={handleStop}
      />
    </div>
  );
};

export default VirtualJoystick;