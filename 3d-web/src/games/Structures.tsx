import { useRecoilValue } from "recoil";
import Panel from "../components/Panel";
import { gameStageState } from "../recoil/games";
import Airplane from "../components/Airplane"
import LowPolyDino from "../components/LowPolyDino";

export function Structures() {
    const gameStage = useRecoilValue(gameStageState);

    return (
        <>
            <Panel position={[-59, 5, 20]} args={[1, 10, 10]} color='#333300' content={gameStage} textColor='gray' textPosition={[1, 0, 0]} />
            <Panel position={[99, 5, 50]} args={[1, 10, 10]} color='#333300' content={gameStage} textColor='gray' textPosition={[-1, 0, 0]} textScale={[-1, 1, 1]} />
            {gameStage > 0 && <LowPolyDino />}
            <Airplane />
        </>
    );
}

export default Structures;