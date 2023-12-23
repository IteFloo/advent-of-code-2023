const R = require('ramda');
class AlmanacData {
    constructor(intervals) {
        this.intervals = intervals;
    }

    bindingAnInterval(value) {
        return R.find(function (valeurs) {
            let range = valeurs[2];
            let startSource = valeurs[1];
            if(startSource <= value && value < (startSource + range)) {
                return true;
            }
            return  false;
        })(this.intervals);
    }

    getDestValue(sourceValue) {
        let bindingValue;
        let startDest;
        let startSource;
        let range;
        bindingValue = this.bindingAnInterval(sourceValue);
        if(bindingValue) {
            [startDest, startSource, range] = bindingValue;
            return startDest + (sourceValue - startSource);
        }

        return sourceValue;
    }
}

module.exports = AlmanacData;
