function F1() {
    if (!new.target) { throw 'must be called with new'; }
}
const v3 = class {
    static get g() {
    }
    get f() {
    }
}
new v3();
const v7 = class {
    static set g(a9) {
    }
    static set b(a11) {
    }
}
class C12 extends v7 {
}
new C12();
new Float32Array();
try {
    for (let i25 = 0; i25 < 20000; ++i25) {
    }
    const v48 = {};
    const v49 = {};
    const v54 = {
        set g(a52) {
        },
    };
    Map.constructor;
    for (let i61 = 0; i61 < 20000; i61++) {
        const v67 = {};
        i61 % 2;
    }
    Uint8Array(102);
    const t34 = WebAssembly.Instance;
    t34();
    const v77 = class {
    }
} catch(e78) {
}
