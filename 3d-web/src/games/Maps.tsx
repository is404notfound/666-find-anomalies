import WallPanel from "../components/WallPanel";
import { useTexture } from "../hooks/useTexture";

export function Maps() {

const { wallTexture } = useTexture();

    return (
        <>
            {/* Start */}
            <WallPanel position={[20, -15, 40]} args={[6200, 1, 6200]} color='#000000' />
            <WallPanel position={[-60, 5, -50]} args={[1, 160, 240]} color='#FFFF00' texture={wallTexture}  isCollision={true} direction="left" />
            <WallPanel position={[100, 5, 110]} args={[1, 160, 240]} color='#FFFF00' texture={wallTexture} isCollision={true} direction="right" />

            {/* Back */}
            <WallPanel position={[-70, -15, 140]} args={[350, 1, 160]} color='#000000' />
            <WallPanel position={[-230, 5, 70]} args={[340, 160, 1]} color='#FFFF00' isCollision={true} texture={wallTexture} direction="up" />
            <WallPanel position={[-80, 5, 220]} args={[380, 160, 1]} color='#FFFF00' isCollision={true} texture={wallTexture} direction="down" />
            <WallPanel position={[-320, -15, 220]} args={[160, 1, 300]} color='#000000' />
            <WallPanel position={[-400, 5, 430]} args={[1, 160, 730]} color='pink' texture={wallTexture} isCollision={true} direction="left" />
            <WallPanel position={[-270, 5, 560]} args={[1, 160, 680]} color='red' texture={wallTexture} isCollision={true} direction="right" />

            {/* End */}
            <WallPanel position={[-420, 5, 900]} args={[400, 160, 1]} color='pink' texture={wallTexture} isCollision={true} />
            
            {/* Field */}
            <WallPanel position={[130, -15, -90]} args={[380, 1, 160]} color='#000000' />
            <WallPanel position={[275, 5, -10]} args={[350, 160, 1]} color='#FFFF00' texture={wallTexture} isCollision={true} direction="down" />
            <WallPanel position={[130, 5, -170]} args={[380, 160, 1]} color='#FFFF00' texture={wallTexture} isCollision={true} direction="up" />

            {/* Front */}
            <WallPanel position={[370, -15, -160]} args={[160, 1, 300]} color='#000000' />
            <WallPanel position={[450, 5, -350]} args={[1, 160, 800]} color='red' texture={wallTexture} isCollision={true} direction="right"/>
            <WallPanel position={[320, 5, -535]} args={[1, 160, 730]} color='#00FFFF' texture={wallTexture} isCollision={true} direction="left" />
            <WallPanel position={[330, -15, -360]} args={[240, 1, 100]} color='#000000' />

            {/* End */}
            <WallPanel position={[500, 5, -900]} args={[400, 160, 1]} color='blue' texture={wallTexture} isCollision={true} direction="up" />
        </>
    );

}

export default Maps;