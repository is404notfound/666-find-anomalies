import { useRecoilValue } from "recoil";
import Panel from "../components/Panel";
import { gameStageState } from "../recoil/games";
import Airplane from "../components/Airplane"
import LowPolyDino from "../components/LowPolyDino";
import UFO from "../components/UFO";
import { useTexture } from "hooks/useTexture";

export function Structures() {
    const gameStage = useRecoilValue(gameStageState);
    const { dinosaurNewsTexture, geneticNewsTexture, ufoPosterTexture } = useTexture();

    return (
        <>
            <UFO />
            {/* <Airplane /> */}
            {gameStage > 0 && <LowPolyDino />}
            <Panel position={[-59, 25, 20]} args={[1, 10, 10]} color='#333300' content={gameStage} textColor='gray' textPosition={[1, 0, 0]} />
            <Panel position={[99, 25, 50]} args={[1, 10, 10]} color='#333300' content={gameStage} textColor='gray' textPosition={[-1, 0, 0]} textScale={[-1, 1, 1]} />
            <Panel position={[150, 20, -11]} args={[20, 30, 1]} texture={ufoPosterTexture} />
            <Panel position={[190, 20, -11]} args={[20, 30, 1]} texture={dinosaurNewsTexture} />
            <Panel position={[240, 20, -11]} args={[40, 30, 1]} texture={geneticNewsTexture} />


        </>
    );
}

export default Structures;