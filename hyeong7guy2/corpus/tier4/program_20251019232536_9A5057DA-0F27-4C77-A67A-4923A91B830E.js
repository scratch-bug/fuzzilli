const v2 = new Uint8Array(10);
const v4 = new Int16Array();
function f5() {
    return v4;
}
function f6() {
    return v2;
}
f5[Symbol.species] = f6;
v4.constructor = f5;
const v11 = new Uint8ClampedArray(1471);
v11.__proto__ = v4;
function F12(a14, a15) {
    if (!new.target) { throw 'must be called with new'; }
    let v16 = -1;
    v16--;
    function F18(a20, a21, a22, a23) {
        if (!new.target) { throw 'must be called with new'; }
        v11.slice(a21);
    }
    new F18(1471, v16);
}
new F12();
