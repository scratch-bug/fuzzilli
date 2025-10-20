class C0 {
}
const v5 = Symbol.iterator;
const v20 = {
    [v5]() {
        with (d8) {
            try { test.verifySourcePositions(); } catch (e) {}
            const t2 = test.FastCAPI;
            const v11 = new t2();
            try { v11.add_all_uint32_typed_array(C0); } catch (e) {}
            try { v11.test_wasm_memory(this); } catch (e) {}
        }
        const v18 = {
            next() {
                try { this(10000); } catch (e) {}
                return { done: 10000 };
            },
        };
        try { v18(Int16Array, this, WeakSet, C0); } catch (e) {}
        return v18;
    },
};
const v22 = new Int16Array();
function f23() {
    const v24 = new Date(WeakSet, Date, -128, ...v22, ...v20);
    try { v24.setUTCHours(WeakSet, WeakSet, WeakSet, f23); } catch (e) {}
    return Symbol;
}
f23();
f23();
%OptimizeFunctionOnNextCall(f23);
f23();
