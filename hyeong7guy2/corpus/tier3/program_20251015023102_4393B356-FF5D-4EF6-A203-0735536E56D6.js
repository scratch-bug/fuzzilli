const v0 = class {
}
function F1(a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function f6() {
        const v8 = [268435439,4294967297,-9007199254740992];
        v8.length = 9;
        let {...v9} = v8;
        return this;
    }
    a5.constructor = f6;
    const t11 = a5.constructor;
    t11();
}
new F1(v0, v0, v0);
