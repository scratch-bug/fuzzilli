class C0 {
}
function f1(a2, a3) {
    let v4 = [-1e-15,-1000.0,-2.2250738585072014e-308,0.27724171973070033,-158786.79002396786];
    for (let i6 = 0;
        (() => {
            function f8(a9) {
                return f1;
            }
            return i6 < 10000;
        })();
        i6++) {
        v4 ^= v4;
    }
    return a2;
}
Object.defineProperty(C0, "constructor", { writable: true, enumerable: true, value: f1 });
const t17 = C0.constructor;
t17();
