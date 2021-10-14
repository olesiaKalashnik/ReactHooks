import { useReducer } from 'react';

const usePhoneNumberValidator = () => {
    const isNumber = (value) => {
        const regex = /^\d+$/;
        return regex.test(String(value));
    };

    const isValidNonNumberChar = (char, position) => {
        const map = { '(': 0, ')': 4, ' ': 5, '-': 9 };
        return position === map[char];
    };

    const validated = (input) => {
        const validatedVal = String(input)
            .split('')
            .filter(
                (char, index) =>
                    isNumber(char) || isValidNonNumberChar(char, index)
            );

        return validatedVal.join('');
    };

    const formatNumber = (value) => {
        const val = value.trim().toLowerCase();
        if (val.length === 10 && isNumber(val)) {
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
    const [phoneNumber, setPhoneNumber] = useReducer(numberReducer, '');

    return { phoneNumber, setPhoneNumber };
};

export default usePhoneNumberValidator;
