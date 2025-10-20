function f0(a1, a2) {
    function F3(a5, a6) {
        if (!new.target) { throw 'must be called with new'; }
        Error.prepareStackTrace = f0;
        const v8 = Error();
        const v17 = {
            toString(a11, a12, a13, a14) {
                const v15 = a11.constructor;
                let v16;
                try { v16 = v15(a2); } catch (e) {}
                return v16;
            },
        };
        const t13 = v17.toString;
        t13(BigInt64Array);
        v8.stack;
    }
    new F3();
    return a1;
}
f0(f0, f0);
