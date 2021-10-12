import { useReducer } from 'react';

const usePhoneNumberValidator = () => {
    const isNumber = (value) => {
        const regex = /^\d+$/;
        return regex.test(String(value));
    };

    const validated = (input) => {
        const validatedVal = String(input)
            .split('')
            .filter((char) => isNumber(char));

        return validatedVal.join('');
    };

    const formatNumber = (value) => {
        const val = value.trim().toLowerCase();
        if (val.length === 10) {
            const formatted = `(${val.slice(0, 3)}) ${val.slice(
                3,
                6
            )}-${val.substring(6, 10)}`;
            return formatted;
        }
        return value;
    };

    const numberReducer = (state, action) => {
        if (action.length > 14) {
            return action.substring(0, 14);
        }
        const numsOnly = validated(action);
        if (numsOnly !== undefined) {
            const formattedText = formatNumber(numsOnly);
            return formattedText;
        }
        return numsOnly;
    };
    const [rawNum, setRawNum] = useReducer(numberReducer, '');

    return { rawNum, setRawNum };
};

export default usePhoneNumberValidator;
