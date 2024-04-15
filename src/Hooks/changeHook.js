import react, { useEffect, useState } from "react"

export default function useChangeHook(key = 'theme', mode = 'dark') {
    const [value, setValue] = useState(
        () => {


            let currentMode
            try {
                currentMode = JSON.parse(localStorage.getItem(key) || String(mode))

            } catch (error) {
                console.log(error)
                currentMode = mode
            }
            return currentMode
        }
    );


    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [mode, value, key]);

    return [value, setValue]
}