const v0 = [];
const v1 = class {
}
const v2 = [-9007199254740990,3,0,7,3,0,-1,7,12541,-2];
const v3 = class {
}
function F4(a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    function f8(a9, a10, a11) {
        const v13 = {};
        function F14(a16, a17, a18, a19) {
            if (!new.target) { throw 'must be called with new'; }
            function f20() {
                return f8;
            }
            function f21(a22) {
                const v26 = {
                    [1]() {
                    },
                    next() {
                        return v13;
                    },
                };
                async function* f27(a28, a29, a30, a31) {
                    const v33 = { maxByteLength: 268435456 };
                    yield* [DataView,v2,v3,f27];
                    return a18;
                }
                try { f27(1, v1, 1, v3); } catch (e) {}
                class C37 {
                    static get d() {
                    }
                }
                return a11;
            }
            Object.defineProperty(this, "e", { get: f20, set: f21 });
            this.e = -1;
        }
        new F14(a11, v0, v3);
        return F4;
    }
    f8();
    %OptimizeFunctionOnNextCall(f8);
}
const v41 = new F4();
new F4();
new F4(v41, v3);
