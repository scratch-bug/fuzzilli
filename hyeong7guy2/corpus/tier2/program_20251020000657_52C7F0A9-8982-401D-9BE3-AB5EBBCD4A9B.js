const v2 = new Float64Array(140);
v2[41] = v2;
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    function f7(a8, a9) {
        v2.sort();
    }
    Object.defineProperty(this, "toString", { writable: true, value: f7 });
    Object.defineProperty(v2, 5, { writable: true, value: this });
}
new F3();
