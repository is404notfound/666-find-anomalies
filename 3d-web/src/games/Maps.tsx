import WallPanel from "../components/WallPanel";
import { useTexture } from "../hooks/useTexture";

export function Maps() {

const { wallTexture } = useTexture();

    return (
        <>
            {/* Center */}
            <WallPanel position={[0, -15, 0]} args={[80, 1, 100]} color='#330000' />
            {/* <WallPanel position={[0, 25, 0]} args={[80, 1, 100]} color='#330066' /> */}
            <WallPanel position={[-40, 5, -40]} args={[1, 40, 180]} color='white' texture={wallTexture} isCollision={true} />
            <WallPanel position={[40, 5, 40]} args={[1, 40, 180]} color='white' texture={wallTexture} isCollision={true} />

            {/* Back */}
            <WallPanel position={[-50, -15, 90]} args={[180, 1, 80]} color='#330000' />
            {/* <WallPanel position={[-50, 25, 90]} args={[180, 1, 80]} color='#330066' /> */}
            <WallPanel position={[-130, 5, 50]} args={[180, 40, 1]} color='white' texture={wallTexture} isCollision={true} />
            <WallPanel position={[-50, 5, 130]} args={[180, 40, 1]} color='white' texture={wallTexture} isCollision={true} />
            <WallPanel position={[-180, -15, 140]} args={[80, 1, 180]} color='#330000' />
            {/* <WallPanel position={[-180, 25, 140]} args={[80, 1, 180]} color='#330066' /> */}
            <WallPanel position={[-220, 5, 140]} args={[1, 40, 180]} color='white' texture={wallTexture} isCollision={true} />
            <WallPanel position={[-140, 5, 180]} args={[1, 40, 100]} color='white' texture={wallTexture} isCollision={true} />

            {/* Front */}
            <WallPanel position={[50, -15, -90]} args={[180, 1, 80]} color='#330000' />
            {/* <WallPanel position={[50, 25, -90]} args={[180, 1, 80]} color='#330066' /> */}
            <WallPanel position={[130, 5, -50]} args={[180, 40, 1]} color='white' texture={wallTexture} isCollision={true} />
            <WallPanel position={[50, 5, -130]} args={[180, 40, 1]} color='white' texture={wallTexture} isCollision={true} />
            <WallPanel position={[180, -15, -140]} args={[80, 1, 180]} color='#330000' />
            {/* <WallPanel position={[180, 25, -140]} args={[80, 1, 180]} color='#330066' /> */}
            <WallPanel position={[220, 5, -140]} args={[1, 40, 180]} color='white' texture={wallTexture} isCollision={true} />
            <WallPanel position={[140, 5, -180]} args={[1, 40, 100]} color='white' texture={wallTexture} isCollision={true} />
        </>
    );

}

export default Maps;