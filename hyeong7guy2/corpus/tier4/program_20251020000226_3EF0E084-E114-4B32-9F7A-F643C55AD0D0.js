function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    ++Symbol;
}
new F1();
const v9 = new Float32Array(128);
v9.includes(Symbol);
