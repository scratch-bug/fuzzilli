function f2() {
    return Symbol;
}
class C4 {
    static {
        let v5 = this;
        function f6(a7, a8, a9) {
            function f11(a12) {
                return a12;
            }
            this.onmessage = f11;
            for (let v13 = 0; v13 < 5; v13++) {
                Object.defineProperty(a8, this, { set: f11 });
                const v15 = [Reflect];
                function f17() {
                    return f17();
                }
                const v19 = class extends f17 {
                }
                function f20(a21) {
                    a21.__defineGetter__(v19, f20);
                    return v5;
                }
                Object.prototype;
                a7.__proto__ = Symbol;
                async function* f24(a25, a26, a27) {
                    await v13;
                    f24(v19, v5, f6);
                    !512n;
                }
                try { f24(f11, v13, Array); } catch (e) {}
                Reflect.construct(f11, v15, f2);
            }
            [f6,v5,f2] = a8;
            512n & -65535;
            return v5;
        }
        new Worker(f6, { type: "function" });
    }
}
