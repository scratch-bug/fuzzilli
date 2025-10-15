function f4(a5) {
    a5 ?? a5;
    let v7 = undefined;
    v7 = [];
    async function f9() {
        await v7;
        Error();
    }
    const v13 = f9();
    function f14(a15) {
        function f16(a17) {
            const v19 = new SharedArrayBuffer();
            let v20;
            try { v20 = v19.slice(a17, a17); } catch (e) {}
            return v20;
        }
        return v7;
    }
    v13.constructor = f14;
    const v21 = v13.then(-9.503007040815746);
    try { v21.finally(v21); } catch (e) {}
    v13.catch();
    return f9;
}
try { f4(-9.503007040815746); } catch (e) {}
for (let v26 = 0; v26 < 1000; v26++) {
    v26 >> v26;
}
const v29 = class {
    valueOf(a31) {
        for (let v32 = 0; v32 < 32; v32++) {
        }
    }
}
function F33(a35) {
    if (!new.target) { throw 'must be called with new'; }
    try { this.__defineSetter__("toInstant", v29); } catch (e) {}
    this.b = a35;
}
new F33(v29);
function f38() {
}
function f39(a40) {
}
const v44 = {
    construct(a42, a43) {
    },
};
