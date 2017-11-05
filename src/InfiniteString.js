export default class InfiniteString {
    static isStringIsNumber(string) {
        return string != null && string.trim() != '' && !isNaN(Number(string));
    }

    static generateString(length) {
        let infString = "";
        for (let i = 0; i < length; i++) {
            infString += i.toString();
        }

        return infString;
    }

    static getNumber(string, index, version) {
        switch (version) {
            case '1':
                return string[index];
            case '2':
                let sIndex = 0;
                let sNumberLength = index.search(/1[0]+/) === 0 ? index.length - 1 : index.length;
                let testNumber = string.substr(string.indexOf(index, sIndex) - sNumberLength, sNumberLength);

                while (Number.parseInt(testNumber) + 1 !== Number.parseInt(index)) {
                    sIndex = string.indexOf(index, sIndex + index.length);
                    testNumber = string.substr(string.indexOf(index, sIndex) - sNumberLength, sNumberLength);
                }


                //let testNumber = string.substr(string.indexOf(index) - index.length, index.length);
                //let numberLength = Number.parseInt(testNumber) + 1 === Number.parseInt(index) ? index.length : index.length - 1;
                //let number = string.substr(index - 1, numberLength);
                return testNumber;

        }
    }
}