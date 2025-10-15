function f0() {
    return f0;
}
const v1 = [f0,f0,f0];
const v2 = class {
}
const v3 = [-9007199254740990,3,0,7,3,0,-1,7,12541,-2];
const v4 = class {
}
function F5(a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    function f9(a10, a11, a12) {
        const v14 = {};
        function F15(a17, a18, a19, a20) {
            if (!new.target) { throw 'must be called with new'; }
            function f21() {
                return f9;
            }
            function f22(a23) {
                const v29 = {
                    [1]() {
                    },
                    next() {
                        return v14;
                    },
                    next() {
                        return a11;
                    },
                    [a23]() {
                    },
                    construct: f0,
                };
                async function* f30(a31, a32, a33, a34) {
                    yield* [DataView,v3,v4,f30];
                    return v29;
                }
                try { f30(1, v2, 1, v4); } catch (e) {}
                class C38 {
                    static get d() {
                    }
                }
                return v1;
            }
            Object.defineProperty(this, "e", { get: f21, set: f22 });
            this.e = -1;
        }
        new F15(a12, v1, v4);
        return a10;
    }
    f9(a7, F5, f0);
    %OptimizeFunctionOnNextCall(f9);
}
new F5();
const v43 = new F5();
new F5(F5, v43);
