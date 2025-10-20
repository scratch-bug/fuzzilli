function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
}
const v3 = class extends F0 {
}
const v5 = new Date();
v5.length = v5;
v5[Symbol.isConcatSpreadable] = v3;
([-12800]).concat(v5);
