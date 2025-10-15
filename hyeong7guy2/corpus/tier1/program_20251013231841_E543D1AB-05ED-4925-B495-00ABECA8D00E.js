function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = -4294967295;
}
function f3(a4, a5) {
    let v6 = 0;
    v6 < 2;
    v6++;
}
F0.toString = f3;
const v10 = new F0();
const v11 = class extends F0 {
    static valueOf(a13, a14) {
        F0.h;
        return v10;
    }
    [F0] = F0;
}
function F17(a19, a20, a21) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = v11;
}
new F17(F0, v11, F17);
const v23 = class {
}
for (let i25 = 0;
    i25 < 1000;
    (() => {
        i25++;
        const v30 = {};
    })()) {
    let v32 = undefined;
    const v33 = [];
    v32 = v33;
    async function f34() {
        await v33;
        Error();
        return v23;
    }
    function f38() {
    }
    const v39 = f34();
    function f40() {
    }
    v39.catch();
}
