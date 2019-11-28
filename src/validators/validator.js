'use strict';

let errors = [];

function ValidationContract() {
    errors = [];
}

ValidationContract.prototype.isRequired = (value, message) => {
    if (!value || value.length <= 0)
        errors.push({ message: message });
}

ValidationContract.prototype.hasMinLen = (value, min, message) => {
    if (!value || value.length < min)
        errors.push({ message: message });
}

ValidationContract.prototype.isEmail = (value, message) => {
    var reg = new RegExp(/^\w+([-+.]'\w+)*@\w+([-.]zw+)*\.\w+([-.]\w+)*$/);
    if (!reg.test(value))
        errors.push({ message: message });
}

ValidationContract.prototype.errors = () => {
    return errors;
}

ValidationContract.prototype.clean = (value, message) => {
    errors = [];
}

ValidationContract.prototype.isValid = (value, message) => {
    return errors.length == 0;
}

module.exports = ValidationContract;