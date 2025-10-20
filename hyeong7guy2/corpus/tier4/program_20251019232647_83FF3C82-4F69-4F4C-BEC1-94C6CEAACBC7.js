try {
    const v1 = new Map();
    class C3 extends Map {
        [-256](a5) {
            super.set(a5, v1);
            try {
            } finally {
            }
            Symbol?.iterator;
            v1?.[v1];
            function f11(a12, a13) {
                const v22 = {
                    [-256](a15, a16, a17, a18) {
                        function f19() {
                            return f11;
                        }
                        return f11;
                    },
                    get g() {
                        v1[a12] = this;
                        a12[this] = -256;
                        try { this.toString = this; } catch (e) {}
                        return a5;
                    },
                };
                return v22;
            }
            let v23;
            try { v23 = f11(this, Map); } catch (e) {}
            let v24;
            try { v24 = f11(v23, Map); } catch (e) {}
            try { f11(Map, v23); } catch (e) {}
            try { f11(-256, v1); } catch (e) {}
            let v27;
            try { v27 = f11(Map, Map); } catch (e) {}
            let v28;
            try { v28 = f11(v24, v27); } catch (e) {}
            try { f11(v23, v28); } catch (e) {}
            return f11;
        }
    }
    const v30 = new C3();
    Map instanceof Map;
    for (const v32 of v1) {
        const v33 = {};
    }
    new C3();
    const v35 = new C3();
    [v1,C3,v30,v35,C3];
    new BigUint64Array(114);
    [379.5049143632209,1000000000000.0,-9.131238976353348,1000000.0,1000000000.0,9.732959985234103e+307,-2.220446049250313e-16];
    for (let v44 = 0; v44 < 100; v44++) {
        try { WebAssembly.Exception(v44); } catch (e) {}
        v44 + Math.LN2;
        Float64Array / (v44 ^ v44);
        const v52 = class {
        }
        try { v52.call(); } catch (e) {}
    }
} catch(e54) {
}
