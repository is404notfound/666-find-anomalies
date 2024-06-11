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
            {showAlert &&
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1 }}>
                    <div style={{ backgroundColor: 'white', padding: 20, borderRadius: 10, display: 'flow'}}>
                        <h1 style={messageStyle}> Hello :D </h1>
                        <p style={messageStyle}> * 화면의 좌/우를 터치하여 회전합니다. </p>
                        <p style={messageStyle}> * 모바일은 화면의 중앙을 터치하여 멈춥니다. </p>
                        <p style={messageStyle}>  * 모바일은 조이스틱으로 움직입니다 </p>
                        <p style={messageStyle}>  * 키보드는 W,S,A,D 키로 움직입니다 </p>
                        <div style={messageStyle}>
                            <button style={{ padding:'5px' }} onClick={() => setShowAlert(false)}>ENTER</button>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}
