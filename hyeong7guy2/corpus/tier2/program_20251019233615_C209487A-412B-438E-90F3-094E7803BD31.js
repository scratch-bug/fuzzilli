function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.f = this;
    this.f = 3;
}
const v3 = new F0();
const v4 = new F0();
function f5(a6) {
    return a6;
}
class C7 extends f5 {
    toString(a9) {
        return a9;
    }
}
const v10 = new F0();
const v11 = new F0();
const v13 = new Map();
function F16(a18, a19, a20) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = v4;
    this.d = a18;
    this.h = a18;
}
new F16(v4, v3, v13);
const v22 = new F16(v11, v10, v10);
const v23 = new F16(v10, Map, v22);
let a = [NaN,4.0,-1000000.0,-2.9433119462364976,-1e-15,-1000000000.0];
class C27 {
    #o(a29, a30) {
        [];
        return this;
    }
    static #valueOf(a33, a34) {
        return a;
    }
}
new C27();
new C27();
try {
    function F37() {
        if (!new.target) { throw 'must be called with new'; }
    }
    try { F16(F37, "bind", F0); } catch (e) {}
    function f43() {
        const t45 = (129).constructor;
        const v46 = new t45();
        function F47(a49, a50) {
            if (!new.target) { throw 'must be called with new'; }
            function f51() {
                const v52 = { a: a49 };
                const t51 = JSON.stringify;
                t51(v52);
                for (let i58 = 0, i59 = 10; i59; i59--) {
                }
                function f65(a66) {
                }
                return f65;
            }
            Object.defineProperty(this, "toString", { get: f51 });
        }
        const v67 = new F47(v46);
        class C68 {
            static [v67](a70, a71, a72) {
            }
        }
        return F0;
    }
    Float32Array.valueOf = f43;
    new Float32Array(15);
    F37 <= Float32Array ? F37 : Float32Array;
    const t70 = -2.2250738585072014e-308;
    delete t70[1073741824];
    const v77 = class extends Int32Array {
    }
    function F78(a80, a81, a82) {
        if (!new.target) { throw 'must be called with new'; }
    }
    new F78();
    for (let i85 = 0;
        i85 < 1000;
        (() => {
            i85++;
            const v101 = {
                p(a91, a92, a93, a94) {
                    const v95 = async (a96, a97, a98) => {
                        await a91;
                    };
                    super.toString(Int32Array, v77);
                },
            };
            v101[Symbol.toStringTag] = i85;
            v101.p();
            function F105() {
                if (!new.target) { throw 'must be called with new'; }
                new Proxy(Int32Array, {});
                new SharedArrayBuffer(128, { maxByteLength: 2147483649 });
            }
            new F105();
        })()) {
    }
    const v119 = new Uint8Array(Uint8Array, -27880);
    v119.values();
    v23.__proto__ = v10;
} catch(e121) {
}
