try {
    const v0 = /xyz{93}/dusym;
    const v1 = [-6.881871268079429,NaN];
    const v3 = new WeakSet();
    const v4 = v3.add(v0);
    const v7 = class extends WeakSet {
        static get f() {
            new Uint8Array(257);
            return v3;
        }
    }
    const v12 = v7.f;
    const v13 = new v7();
    const v14 = v7[5];
    const v15 = delete v7.f;
    const v16 = v4;
    const v18 = class extends v12.constructor {
        static [256n] = v14;
        [v4](a20, a21) {
            return v12;
        }
    }
    const v22 = new v18();
    const v23 = v13.has;
    let v24;
    try { v24 = new v23(v1); } catch (e) {}
    const v25 = new v7();
    function f26() {
        [v22,v7,arguments,v15,arguments];
        return 256n;
    }
    f26(v14, v24, 256n, v25);
    const v30 = new v7();
    const t33 = v30.constructor;
    new t33();
    const v33 = new v7();
    v33.f = v33;
    const v34 = {};
    v34.a = v34;
    var g = v34;
    for (let i37 = 0; i37 < 100000; i37++) {
        const v43 = {
            apply: f26,
            construct: f26,
            has: f26,
            isExtensible: f26,
            ownKeys: f26,
        };
    }
} catch(e44) {
}
