class C1 {
    static {
        this.e = this;
        const v3 = {};
    }
}
new C1();
const v9 = {
    [Symbol]() {
        const v8 = {};
    },
};
v9.d = v9;
Uint32Array[9] = Uint32Array;
function f13() {
    class C14 {
        static {
            try { new this(); } catch (e) {}
            const v17 = () => {
                const v20 = eval();
                v20 ?? v20;
            };
            const f = v17;
            f();
        }
    }
    try { C14(); } catch (e) {}
}
for (let i26 = 0;
    i26 < 200;
    (() => {
        const v30 = i26++;
        v30 <= v30;
    })()) {
    f13.call(i26);
}
const v34 = {};
