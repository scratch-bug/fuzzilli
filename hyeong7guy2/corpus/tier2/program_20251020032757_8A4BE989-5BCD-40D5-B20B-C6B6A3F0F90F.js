const v3 = Symbol.offset;
const v12 = {
    [v3]() {
        let v5 = 10;
        const v11 = {
            next() {
                v5--;
                const v9 = v5 == 0;
                return { setDate: v9, value: v5 };
            },
        };
        return v11;
    },
};
new Uint8Array(129);
function f17() {
    return -55335;
}
function f22() {
}
const v23 = `
`;
const v25 = class extends Int8Array {
}
function f26() {
    function f27(a28, a29) {
        return f27;
    }
    const v32 = [v23,"function"];
    new Worker(f27, { arguments: v32, type: "function" });
    return Worker;
}
v25.constructor = f26;
class C36 {
    #h = 1073741824;
    static #m() {
    }
}
new C36();
const v39 = new C36();
const v40 = new C36();
const v41 = v40?.p;
try { new v41(); } catch (e) {}
const v43 = v40?.constructor;
try { new v43(); } catch (e) {}
function f45() {
}
-6 >>> -6;
1.0 - 1.0;
const v52 = new BigInt64Array(1000);
try { v52.entries(); } catch (e) {}
const e = v39;
const v57 = {};
function f59(a60, a61, a62) {
    for (const v63 in a62) {
        function f64(a65, a66) {
            return arguments;
        }
        f64(a60, C36, f64);
    }
    function F69(a71, a72) {
        if (!new.target) { throw 'must be called with new'; }
        function f73() {
            new Uint32Array(1073741824);
            return a71;
        }
        Object.defineProperty(this, "toString", { get: f73 });
    }
    const v76 = new F69(1073741824, 1073741824);
    for (let i78 = 0; i78 < 25000; ++i78) {
    }
    class C84 {
        static [v76](a86, a87, a88) {
        }
    }
}
const v92 = new Worker(f59, { type: "function" });
v92.getMessage(Worker);
v25.constructor();
