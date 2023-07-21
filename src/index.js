module.exports = function toReadable(number) {
    const getNumberDigits = (number) =>
        number
            .toString()
            .split("")
            .map((item) => +item);

    const toReadableDigit = (number) => {
        const DIGITS = [
            "zero",
            "one",
            "two",
            "three",
            "four",
            "five",
            "six",
            "seven",
            "eight",
            "nine",
        ];
        return DIGITS[number % 10];
    };
    const toReadableTens = (number) => {
        const TEN_TO_NINETEEN = [
            "ten",
            "eleven",
            "twelve",
            "thirteen",
            "fourteen",
            "fifteen",
            "sixteen",
            "seventeen",
            "eighteen",
            "nineteen",
        ];
        const TENS = [
            "twenty",
            "thirty",
            "forty",
            "fifty",
            "sixty",
            "seventy",
            "eighty",
            "ninety",
        ];
        let tensAndOnes = number % 100;
        return 10 <= tensAndOnes && tensAndOnes <= 19
            ? TEN_TO_NINETEEN[tensAndOnes % 10]
            : `${TENS[Math.floor(tensAndOnes / 10) - 2]}` +
                  `${
                      tensAndOnes % 10 === 0
                          ? ""
                          : ` ${toReadableDigit(tensAndOnes)}`
                  }`;
    };
    const toReadableHundreds = (number) => {
        let hundreds = Math.floor((number % 1000) / 100);
        let tens = Math.floor((number % 100) / 10);
        let ones = number % 10;
        return (
            `${hundreds ? toReadableDigit(hundreds) + " hundred" : ""}` +
            `${
                tens
                    ? ` ${toReadableTens(number)}`
                    : ones
                    ? ` ${toReadableDigit(number)}`
                    : ""
            }`
        );
    };
    let numberOfDigits = number.toString().length;
    let readableNumber = "";
    switch (numberOfDigits) {
        case 1:
            readableNumber = toReadableDigit(number);
            break;
        case 2:
            readableNumber = toReadableTens(number);
            break;
        case 3:
            readableNumber = toReadableHundreds(number);
            break;
        default:
            break;
    }
    return readableNumber;
};
