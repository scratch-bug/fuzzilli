function F1(a3) {
    if (!new.target) { throw 'must be called with new'; }
}
const v5 = F1 % Array;
Array(2).concat(v5, 2);
