const v2 = new Int32Array(16);
let v4;
try { v4 = Symbol(); } catch (e) {}
v4 ?? v4;
const v6 = Symbol.iterator;
const v15 = {
    [Symbol]() {
        let v8 = 10;
        const v14 = {
            next() {
                v8--;
                const v12 = v8 == 0;
                return { done: v12, value: v8 };
            },
        };
        return v14;
    },
};
v15.e = v15;
v15.e = v15;
const v17 = new Date();
try { v17.setMilliseconds(v6); } catch (e) {}
try { Float64Array.from(v2); } catch (e) {}
new Float64Array(564);
const v24 = class {
}
const v25 = v24.name;
try { v25.padEnd(-50953n); } catch (e) {}
function F27(a29, a30) {
    if (!new.target) { throw 'must be called with new'; }
    this?.__lookupSetter__;
    function f32(a33, a34, a35) {
        a33.length;
        let v37;
        try { v37 = a35(); } catch (e) {}
        v37 ?? v37;
        let v39 = 0;
        v39 >>> v39;
        while ((() => {
                const v42 = v39 < 2;
                !v42;
                return v42;
            })()) {
            const v44 = v39++;
            v44 | v44;
            function f46(a47, a48) {
                const t46 = a47?.constructor;
                new t46(a48);
                a48 ?? a48;
                a47.name = a47;
                return f32;
            }
            let v52;
            try { v52 = f46(v24); } catch (e) {}
            v52.arguments;
            const v55 = Temporal.PlainMonthDay;
            try { new v55(v55, v39); } catch (e) {}
        }
        return v39;
    }
    f32(v24, F27, a30);
    %OptimizeFunctionOnNextCall(f32);
}
try { new F27(v4, 564); } catch (e) {}
const v59 = new F27(v24, v24);
const v60 = v59?.constructor;
try { new v60(Symbol, 564); } catch (e) {}
const v62 = new F27();
function f63(a64) {
    a64.e = a64;
    const v66 = gc();
    v66 ?? v66;
    return a64;
}
Object.defineProperty(v62, "constructor", { configurable: true, enumerable: true, value: f63 });
try { v62.constructor(Symbol, Symbol); } catch (e) {}
