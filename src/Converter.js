const power = 3, divide = 2, multiply = 2, plus = 1, minus = 1, none = 0;

export default class Converter {

    private compare(operand, firstItem, secondItem) {
        
    }

    static convert(postfixString) {
        let stack = [];

        for (let i = 0; i < postfixString.length; i++) {

            if (postfixString[i].search(/d/) !== -1 ) {
                stack.push({
                    number: postfixString[i],
                    prior: none
                })
            }
            else {

            }
        }
    }
}