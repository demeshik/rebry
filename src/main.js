import $ from 'jquery'
import InfiniteString from './InfiniteString'
import ArrayDifference from './ArrayDifference'

function fieldsState(state) {
    $('#stringOutput').css('display', state);
    $('#requiredNumber').css('display', state);
}

$(document).ready(() => {
    fieldsState('none');

    $('#stringGenBut').click(() => {
        if (!InfiniteString.isStringIsNumber($('#stringLengthInput').val())) {
            fieldsState('none');

            alert('Your length isn\'t a Number!');
            throw Error('Your length isn\'t a Number!');
        }
        else {
            $('#stringOutput').val(InfiniteString.generateString($('#stringLengthInput').val()));
            alert('Generated!');

            fieldsState('block');
        }
    });

    $('input[name="getItemByIndex"]').click(() => {
        if (!InfiniteString.isStringIsNumber($('#requiredIndex').val())) {

            alert('Your index isn\'t a Number!');
            throw Error('Your index isn\'t a Number!');
        }
        else {
            let version = $('input[name="getItemByIndex"]:checked').val();
            let item = InfiniteString.getNumber($('#stringOutput').val(), $('#requiredIndex').val(), version);

            alert(item);
        }
    });

});