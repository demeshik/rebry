export default class ArrayDifference {
    static uniqueArrays(array) {
        let obj = {};

        for (let i = 0; i < array.length; i++) {
            let item = array[i];
            obj[item] = true;
        }

        return Object.keys(obj);
    }

    static difference(arr1, arr2) {
        let maxArray = [], minArray = [], arrayDiff = [];

        if (arr1.length > arr2.length) {
            maxArray = this.uniqueArrays([...arr1]);
            minArray = this.uniqueArrays([...arr2]);
        } else {
            maxArray = this.uniqueArrays([...arr2]);
            minArray = this.uniqueArrays([...arr1]);
        }

        for (let i = 0; i < maxArray.length; i++) {
            let item = maxArray[i];

            if (minArray.indexOf(item) === -1) {
                arrayDiff.push(item);
            } else {
                minArray[minArray.indexOf(item)] = null;
            }
        }

        let lastItems = minArray.filter((item) => item !== null);

        return [...arrayDiff, ...lastItems];
    }
}