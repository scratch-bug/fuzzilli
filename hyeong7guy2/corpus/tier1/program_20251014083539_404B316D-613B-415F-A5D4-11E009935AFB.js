const v2 = new Float64Array(16);
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    Object.defineProperty(v2, 5, { writable: true, value: a6 });
}
new F3();
