import { useEffect, useState } from "react";

export function useKeyPress(key: number) {
    const [keyPressed, setKeyPressed] = useState(false);


    const downKey = ({ targetKey }: any) => {
        if (key === targetKey) {
            setKeyPressed(true)
        }
    }
    const upKey = ({ targetKey }: any) => {
        console.log(targetKey);
        if (key === targetKey) {
            setKeyPressed(false)
        }
    }

    useEffect(() => {
        window.addEventListener("keydown", downKey);
        window.addEventListener("keyup", upKey);

        return () => {
            window.removeEventListener("keydown", downKey);
            window.removeEventListener("keyup", upKey);
        }
    });

    return [keyPressed, setKeyPressed];
}