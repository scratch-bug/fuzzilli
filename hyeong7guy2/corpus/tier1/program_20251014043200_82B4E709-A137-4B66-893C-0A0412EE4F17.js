function F0() {
    if (!new.target) { throw 'must be called with new'; }
    function f2() {
    }
    class C3 extends f2 {
    }
    class C4 extends C3 {
    }
    const v6 = {};
    function f7() {
        return F0;
    }
    Object.defineProperty(f7, "toString", { configurable: true, value: f7 });
    let v8 = -9223372036854775807;
    ++v8;
    const v12 = Symbol.iterator;
    const v14 = {
        [v12]() {
        },
    };
    class C15 {
    }
    const v16 = {};
    function f17(a18, a19) {
    }
    for (let v20 = 0; v20 < 100; v20++) {
        const v21 = {};
        v21.a = C15;
        let v23 = v20 % 2;
        Object.defineProperty(v21, "a", { value: 0.7352659747889693 });
        const v26 = {
            [Symbol]() {
                v23 = this;
            },
        };
        let v27 = f17.bind();
    }
}
new F0();
for (let v29 = 0; v29 < 100; v29++) {
}
