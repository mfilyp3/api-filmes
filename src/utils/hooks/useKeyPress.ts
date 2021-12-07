import { useEffect, useState } from "react";

export function useKeyPress(key: number): boolean {
    const [keyPressed, setKeyPressed] = useState<boolean>(false);


    const downKey = (pressedKey: KeyboardEvent): void => {
        const { which } = pressedKey;
        if (which === key) {
            setKeyPressed(true)
        }
    }

    const upKey = (pressedKey: KeyboardEvent): void => {
        const { which } = pressedKey;
        if (which === key) {
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
    }, []);

    return keyPressed;

}