import WallPanel from "../components/WallPanel";
import { useTexture } from "../hooks/useTexture";

export function Maps() {

const { wallTexture } = useTexture();

    return (
        <>
            {/* Start */}
            <WallPanel position={[20, -15, 40]} args={[6200, 1, 6200]} color='#000000' />
            <WallPanel position={[-60, 5, -50]} args={[1, 40, 240]} color='#FFFF00' texture={wallTexture} isCollision={true} />
            <WallPanel position={[100, 5, 110]} args={[1, 40, 240]} color='#FFFF00' texture={wallTexture} isCollision={true} />

            {/* Back */}
            <WallPanel position={[-70, -15, 140]} args={[350, 1, 160]} color='#000000' />
            <WallPanel position={[-230, 5, 70]} args={[340, 40, 1]} color='#FFFF00' texture={wallTexture} isCollision={true} />
            <WallPanel position={[-80, 5, 220]} args={[380, 40, 1]} color='#FFFF00' texture={wallTexture} isCollision={true} />
            <WallPanel position={[-320, -15, 220]} args={[160, 1, 300]} color='#000000' />
            <WallPanel position={[-400, 5, 430]} args={[1, 40, 730]} color='pink' texture={wallTexture} isCollision={true} />
            <WallPanel position={[-270, 5, 560]} args={[1, 40, 680]} color='red' texture={wallTexture} isCollision={true} />

            {/* End */}
            <WallPanel position={[-420, 5, 900]} args={[400, 40, 1]} color='pink' texture={wallTexture} isCollision={true} />
            
            {/* Field */}
            <WallPanel position={[130, -15, -90]} args={[380, 1, 160]} color='#000000' />
            <WallPanel position={[275, 5, -10]} args={[350, 40, 1]} color='#FFFF00' texture={wallTexture} isCollision={true} />
            <WallPanel position={[130, 5, -170]} args={[380, 40, 1]} color='#FFFF00' texture={wallTexture} isCollision={true} />

            {/* Front */}
            <WallPanel position={[370, -15, -160]} args={[160, 1, 300]} color='#000000' />
            <WallPanel position={[450, 5, -350]} args={[1, 40, 800]} color='red' texture={wallTexture} isCollision={true} />
            <WallPanel position={[320, 5, -535]} args={[1, 40, 730]} color='#00FFFF' texture={wallTexture}  isCollision={true} />
            <WallPanel position={[330, -15, -360]} args={[240, 1, 100]} color='#000000' />

            {/* End */}
            <WallPanel position={[500, 5, -900]} args={[400, 40, 1]} color='blue' texture={wallTexture} isCollision={true} />
        </>
    );

}

export default Maps;


// import WallPanel from "../components/WallPanel";
// import { useTexture } from "../hooks/useTexture";

// export function Maps() {

// const { wallTexture } = useTexture();

//     return (
//         <>
//             {/* Start */}
//             <WallPanel position={[20, -15, 40]} args={[160, 1, 110]} color='#330000' />
//             <WallPanel position={[-60, 5, -50]} args={[1, 40, 240]} color='white' texture={wallTexture} isCollision={true} />
//             <WallPanel position={[100, 5, 110]} args={[1, 40, 240]} color='white' texture={wallTexture} isCollision={true} />

//             {/* Back */}
//             <WallPanel position={[-70, -15, 140]} args={[350, 1, 160]} color='#330000' />
//             <WallPanel position={[-230, 5, 70]} args={[340, 40, 1]} color='white' texture={wallTexture} isCollision={true} />
//             <WallPanel position={[-70, 5, 220]} args={[340, 40, 1]} color='white' texture={wallTexture} isCollision={true} />
//             <WallPanel position={[-320, -15, 220]} args={[160, 1, 300]} color='#330000' />
//             <WallPanel position={[-400, 5, 270]} args={[1, 40, 400]} color='white' texture={wallTexture} isCollision={true} />
//             <WallPanel position={[-240, 5, 295]} args={[1, 40, 150]} color='white' texture={wallTexture} isCollision={true} />
//             <WallPanel position={[-230, -15, 450]} args={[340, 1, 160]} color='blue' />
//             <WallPanel position={[-70, 5, 370]} args={[340, 40, 1]} color='red' isCollision={true} />
//             <WallPanel position={[-230, 5, 530]} args={[340, 40, 1]} color='white' texture={wallTexture} isCollision={true} />



//             {/* Field */}
//             <WallPanel position={[130, -15, -90]} args={[380, 1, 160]} color='#330000' />
//             <WallPanel position={[275, 5, -10]} args={[350, 40, 1]} color='white' texture={wallTexture} isCollision={true} />
//             <WallPanel position={[130, 5, -170]} args={[380, 40, 1]} color='white' texture={wallTexture} isCollision={true} />

//             {/* Front */}
//             <WallPanel position={[370, -15, -160]} args={[160, 1, 300]} color='#330000' />
//             <WallPanel position={[450, 5, -210]} args={[1, 40, 400]} color='white' texture={wallTexture} isCollision={true} />
//             <WallPanel position={[320, 5, -240]} args={[1, 40, 140]} color='white' texture={wallTexture} isCollision={true} />
//             <WallPanel position={[330, -15, -360]} args={[240, 1, 100]} color='#330000' />
//             <WallPanel position={[330, 5, -410]} args={[240, 40, 1]} color='white' texture={wallTexture} isCollision={true} />
//         </>
//     );

// }

// export default Maps;