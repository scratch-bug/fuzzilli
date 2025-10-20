function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    a4.prototype;
}
F1.prototype = 1000;
new F1(1000, F1);
