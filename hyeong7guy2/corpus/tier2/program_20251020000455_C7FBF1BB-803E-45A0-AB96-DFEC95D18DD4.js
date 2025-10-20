const v2 = new Uint8ClampedArray(0);
const v3 = class extends Uint8ClampedArray {
    set h(a5) {
        const v6 = class {
            static valueOf(a8, a9) {
                switch (v2) {
                    case this:
                        break;
                }
                return 0;
            }
        }
        new v6();
        new v6();
    }
}
new v3();
new v3();
new v3();
const v15 = new v3();
v15.BYTES_PER_ELEMENT = v15;
[4,-11,11];
const v18 = Symbol.iterator;
Symbol.for(v18.description);
const v30 = {
    [v18]() {
        let v23 = 10;
        const v29 = {
            next() {
                v23--;
                const v27 = v23 == 0;
                return { done: v27, value: v23 };
            },
        };
        return v29;
    },
};
function f37(a38) {
    for (let v39 = 0; v39 < 5; v39++) {
        const v40 = {};
        function f41(a42, a43) {
            a43 ?? a43;
            const v47 = new SharedArrayBuffer(7);
            v47.b = v47;
            let v49;
            try { v49 = DataView.call(); } catch (e) {}
            const v50 = new DataView(v47);
            try { v50.setUint16(v49, v40); } catch (e) {}
            v50.setFloat16(v40);
            return f41;
        }
        f41();
        %OptimizeFunctionOnNextCall(f41);
    }
}
function F54(a56) {
    if (!new.target) { throw 'must be called with new'; }
}
for (let i59 = 0, i60 = 10; i60; i60--) {
}
F54[Symbol.toPrimitive] = f37;
const v70 = {
    o(a68, a69) {
        super[F54] = 12234;
    },
};
v70.o();
function F72(a74, a75) {
    if (!new.target) { throw 'must be called with new'; }
}
const v76 = new F72();
const v78 = %WasmArray();
function f79() {
}
WebAssembly.instantiateStreaming(v76, v78, v78).catch(f79);
