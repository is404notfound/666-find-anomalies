import { useState } from "react";

export default function Notice() {
    const [showAlert, setShowAlert] = useState(true);

    const messageStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5
    }

    return (
        <>
            <div
                onClick={() => setShowAlert(true)}
                style={{ position: 'absolute', top: 20, left: 20, right: 0, bottom: 0, backgroundColor: 'white', opacity: '30%', width: 30, height: 30, borderRadius: 50, zIndex: 1 }}>
                <span style={{ display: 'flex', justifyContent: 'center', fontSize: 25, color:'grey'}}> ? </span>
            </div>
            {showAlert &&
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1 }}>
                    <div style={{ backgroundColor: 'white', padding: 20, borderRadius: 10, display: 'flow'}}>
                        <h1 > 조작법 :D </h1>
                        <p > * 현재 움직이는 것만 가능합니다. </p>
                        <p > [모바일] 이동: 조이스틱 </p>
                        <p > [모바일] 회전: 좌/우 터치  </p>
                        <p > [모바일] 멈춤 : 화면 중앙 터치  </p>
                        <p > [키보드] 이동: 방향키 혹은 W,S,A,D 키 </p>
                        <div style={messageStyle}>
                            <button style={{ padding: '5px' }} onClick={() => setShowAlert(false)}>ENTER</button>
                        </div>
                    </div>

                </div>
            }
        </>
    )
}
