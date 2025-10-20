let v1 = 1000000000000.0;
const v3 = class {
    set a(a5) {
        const v21 = {
            valueOf() {
                let v6 = this;
                let v7 = %WasmArray();
                let v10;
                try { v10 = new Uint8ClampedArray(129); } catch (e) {}
                const v11 = [693913.4712015034,-314050.5385797281];
                function f12() {
                    function f13(a14) {
                        const v15 = v11?.constructor;
                        let v16;
                        try { v16 = v15(); } catch (e) {}
                        v10?.length;
                        v16?.[1];
                    }
                    try { f13(f13); } catch (e) {}
                    try { f13(); } catch (e) {}
                    %OptimizeMaglevOnNextCall(f13);
                    return f13;
                }
                super["t"] = v7;
                ({"e":v7,"g":v1,...v6} = v6);
                return v1;
            },
        };
        const v22 = { ...v21 };
        function f23() {
            function f24(a25, a26, a27) {
                let v29;
                try { v29 = new SharedArrayBuffer(); } catch (e) {}
                let v31;
                try { v31 = new DataView(v29); } catch (e) {}
                let v32;
                try { v32 = v31.getInt32(v22, v31); } catch (e) {}
                if (v32) {
                }
                return v29;
            }
            %OptimizeMaglevOnNextCall(f24);
            try { f24(); } catch (e) {}
            function f34(a35) {
            }
            return f34;
        }
    }
}
new v3();
new v3();
new v3();
const v39 = new v3();
class C40 extends v3 {
    [v39](a42, a43, a44) {
        function F45(a47, a48) {
            if (!new.target) { throw 'must be called with new'; }
            const v50 = Temporal?.PlainTime;
            let v51;
            try { v51 = new v50(a48, a47); } catch (e) {}
            try { v51.add(); } catch (e) {}
        }
        try {
            try { new v3(); } catch (e) {}
        } catch(e54) {
        }
        return a43;
    }
}
new C40();
const v60 = new ArrayBuffer(3725, { maxByteLength: 3725 });
const v62 = new Float32Array(v60);
v62[654] = v62;
new C40();
new C40();
new C40();
function f66() {
    function f67(a68, a69) {
        const v72 = new SharedArrayBuffer(7);
        const v74 = new DataView(v72);
        let v75;
        try { v75 = v74.setFloat64(7, a69); } catch (e) {}
        v74.setInt32(v75, v75 >> v75);
        return f66;
    }
    f67();
    const v79 = f67();
    %OptimizeMaglevOnNextCall(f67);
    return f67(f66, v79);
}
const v81 = { construct: f66 };
v81.construct(v81.construct());
