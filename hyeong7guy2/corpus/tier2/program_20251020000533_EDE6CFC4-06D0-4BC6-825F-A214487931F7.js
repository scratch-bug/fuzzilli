const v3 = class {
    static m(a5) {
        let v6 = 10;
        for (; v6--;) {
            [1073741825,4];
            async function* f11(a12, a13) {
                await v6;
                yield* [v6,a12,this,a13];
                return this;
            }
            f11(-1000000000000.0, 0);
        }
        return -1000000000000.0;
    }
}
new v3();
class C19 {
    set e(a21) {
        super.h = a21;
    }
    static [v3](a23, a24) {
        return a24;
    }
    valueOf(a26, a27) {
        %VerifyType(this);
        return 6;
    }
    static #o(a29, a30) {
        return 6;
    }
}
new C19();
new C19();
const v33 = class {
}
const v36 = class {
}
function f37() {
    const v38 = [3];
    v38[2147483647] = v33;
    v38.length = 3;
    return v33;
}
Object.defineProperty(v36, Symbol.iterator, { writable: true, configurable: true, enumerable: true, value: f37 });
try { new Int32Array(v36); } catch (e) {}
const v44 = class extends C19 {
    static #valueOf(a46, a47, a48) {
        const v50 = Symbol.dispose;
        const v52 = {
            value: this,
            [v50]() {
                return v50;
            },
        };
        using v53 = v52;
        return a48;
    }
}
const v54 = new v44();
%VerifyType(C19);
try {
    v54.valueOf(v54, v44);
} catch(e56) {
}
const v59 = new Float64Array(536870912);
function F60(a62, a63) {
    if (!new.target) { throw 'must be called with new'; }
    function f64() {
        function f65(a66) {
            const v67 = v59[599];
            try {
                Temporal();
            } catch(e70) {
            }
            v67 === v67;
        }
        f65();
        f65(536870912);
        %OptimizeMaglevOnNextCall(f65);
        return f65;
    }
    Object.defineProperty(this, "toString", { get: f64 });
}
const v74 = new F60();
new Array(14);
class C78 {
    static [v74](a80, a81, a82) {
    }
}
Array.fromAsync().then(Array, Array);
