new Int32Array(9);
const v5 = new Uint8Array(512);
function F6(a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    const v10 = this?.constructor;
    try { new v10(Int32Array, Int32Array); } catch (e) {}
    try { new a8(v5, v5, a9); } catch (e) {}
    this.g = 9;
}
new F6(Uint8Array, 9);
function F14(a16, a17, a18) {
    if (!new.target) { throw 'must be called with new'; }
}
new F14(9, Uint8Array, v5);
const v22 = ("2147483647").normalize("NFKD");
function f24() {
}
function f25() {
    function f26() {
        const v28 = { done: true };
        new Uint8Array(1878388927);
        function f32(a33) {
            function f34() {
                function f35() {
                    function F36(a38) {
                        if (!new.target) { throw 'must be called with new'; }
                        function F39(a41, a42) {
                            if (!new.target) { throw 'must be called with new'; }
                        }
                        function F43(a45, a46) {
                            if (!new.target) { throw 'must be called with new'; }
                            const v47 = [a45];
                            v47.pop();
                            v47.at(F39);
                            %OptimizeFunctionOnNextCall(F43);
                        }
                        F43(F36, F36);
                    }
                    const v51 = new F36(F36);
                    new F36(v51);
                    new F36();
                    return f32;
                }
                const v54 = {};
                v54.ownKeys = f32;
                new Proxy(f35, v54);
                return f34;
            }
            const v57 = Symbol.iterator;
            const v58 = { [v57]: f34 };
            for (const v60 of v22) {
                const v61 = {};
            }
            return f32;
        }
        return v28;
    }
    return { next: f26 };
}
const v63 = Symbol.iterator;
f24.bind(null, ...{ [v63]: f25 });
let v67 = 60985n;
v67 **= v67;
function f68() {
}
const v69 = { f: f68 };
const v70 = { m: v69 };
