import { useRecoilValue } from "recoil";
import Panel from "../components/Panel";
import { gameStageState } from "../recoil/games";

export function Structures() {
    const gameStage = useRecoilValue(gameStageState);

    return (
        <>
            <Panel position={[-39, 5, 20]} args={[1, 10, 10]} color='#333300' content={gameStage} textColor='gray' textPosition={[1, 0, 0]} />
            <Panel position={[39, 5, -20]} args={[1, 10, 10]} color='#333300' content={gameStage} textColor='gray' textPosition={[-1, 0, 0]} textScale={[-1, 1, 1]} />
        </>
    );

}

export default Structures;