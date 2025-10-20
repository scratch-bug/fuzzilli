const v1 = [1e-15,1.7976931348623157e+308,-1000000000.0,3.0,4.599773558330199,2.220446049250313e-16,-2.220446049250313e-16,0.5341359869979712,0.8439554535640003];
const v4 = new Uint8Array(10);
const v6 = new Int16Array();
function f7() {
    return f7;
}
function f8() {
    return v4;
}
f7[Symbol.species] = f8;
v6.constructor = f7;
const v11 = new Uint8ClampedArray(v1);
v11.__proto__ = v6;
function F12(a14, a15) {
    if (!new.target) { throw 'must be called with new'; }
    function F16(a18, a19, a20, a21) {
        if (!new.target) { throw 'must be called with new'; }
        v11.slice();
    }
    new F16();
}
new F12(f7, Uint8ClampedArray);
