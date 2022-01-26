import { useState } from "react";

function useInput(ref, validationFunction) {
    const [isValid, setIsValid] = useState(false)
    const [inputTouched, setInputTouched] = useState(false)

    function validateInput() {
        setInputTouched(true)
        if(!validationFunction(ref.current.value)) {
            setIsValid(false)
            return
        }
        setIsValid(true)
    }
    return {
        isValid,
        inputTouched,
        validateInput,
        setInputTouched
    }
}

export default useInput