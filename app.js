phones = [
    '555-555-5555',
    '(555)555-5555',
    '555 555 5555',
    '555 555-555',
    '1-555-555-5555',
    '(1)555-555-5555',
    '5555555555',
    '555-five-55-aebdgtxi;;3tt4greqr6seve',
    '5-trumprules-555-5-5-5-5-5-5',
    '2798504trumpforprez23587928579428795458792',
    '1-800-ninjas-are-cool',
    '1900-acdc4life.'
]

var pattern = /^[1-9]\d{2}-\d{3}-\d{4}$/;

function isPhoneValid(phoneStr) {
    return pattern.test(phoneStr);
}

function removeChars(phoneStr) {
    var str;
    str = phoneStr.replace(/[-]/g, " ");
    str = str.replace(/[(]/g, "");
    str = str.replace(/[)]/g, " ");
    str = str.replace(/[1]/g, "");
    str = str.replace(/[\s]/g, "");
    str = str.replace(/[e]/g, "5");
    str = str.replace(/[abcdfghijklmnopqrstuvwxyz;.123467890]/g, "");
    return str;
}

function reformatPhone(phoneStr) {
    var updatedPhoneStr = removeChars(phoneStr);
    var reformattedNumber = updatedPhoneStr.slice(0, 3) + "-" +
        updatedPhoneStr.slice(4, 7) + "-" +
        updatedPhoneStr.slice(6);
    return reformattedNumber;
}

function convertPhone(phoneNumbers) {
    for (i = 0; i < phoneNumbers.length; i++) {
        var phone = isPhoneValid(phoneNumbers[i]);
        if (phone) {
            validPhoneNumbers.push("Valid phone number: " + phoneNumbers[i]);
        }
        if (!phone) {
            var reformattedNumber = reformatPhone(phoneNumbers[i]);
            if (reformattedNumber.length === 12) {
                validPhoneNumbers.push("Valid phone number: " + reformattedNumber);
            }
            if (reformattedNumber.length < 12) {
                validPhoneNumbers.push("Not a valid phone number: " + phoneNumbers[i]);
            }
            if (reformattedNumber.length > 12) {
                reformattedNumber = reformattedNumber.slice(0, 12);
                validPhoneNumbers.push("Valid phone number: " + reformattedNumber);
            }
        }
    }
}

validPhoneNumbers = [];
convertPhone(phones);
console.log(validPhoneNumbers);