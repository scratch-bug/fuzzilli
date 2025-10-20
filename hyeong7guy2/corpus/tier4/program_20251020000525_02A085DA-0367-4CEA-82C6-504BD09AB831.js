try {
    const v9 = {
        [Symbol]() {
            let v2 = 10;
            const v8 = {
                next() {
                    v2++;
                    const v6 = v2 == 0;
                    return { done: v6, value: v2 };
                },
            };
            return v8;
        },
    };
    class C10 {
        [v9](a12, a13, a14) {
        }
    }
    const v15 = /[M(a)?]/sym;
    function F16(a18, a19) {
        if (!new.target) { throw 'must be called with new'; }
        const v20 = this.constructor;
        try { new v20(v15, a18); } catch (e) {}
        a19++;
    }
    new F16(v15, F16);
} catch(e24) {
}
