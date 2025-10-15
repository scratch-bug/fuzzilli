function F1(a3, a4, a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    a3.apply(a6, this);
}
F1.prototype = F1;
F1.length;
const t5 = Object.seal(F1);
new t5(Symbol);
