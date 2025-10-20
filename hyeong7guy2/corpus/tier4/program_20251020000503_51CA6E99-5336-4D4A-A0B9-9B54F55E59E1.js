const v3 = new Int32Array(3317);
v3.indexOf(0);
const v7 = new Date(-42552, -42552);
function f8(a9) {
    return v7;
}
const v10 = class extends f8 {
}
const v11 = [v10];
const v12 = v11.flatMap(f8);
function F13(a15) {
    if (!new.target) { throw 'must be called with new'; }
    try { a15.toString(a15, a15, f8, v11); } catch (e) {}
    ~a15;
    const v18 = this.constructor;
    try { new v18(this); } catch (e) {}
}
new F13(v12);
new F13(v10);
