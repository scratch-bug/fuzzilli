const v0 = [-65536,1073741824,512,12];
function f2(a3) {
    function f4() {
        function f5() {
            class C7 {
                [Uint16Array];
            }
            try { new C7(); } catch (e) {}
            try { new C7(); } catch (e) {}
            return f2;
        }
        return { next: f5 };
    }
    const v11 = Symbol?.iterator;
    const v12 = { [v11]: f4 };
    let v14;
    try { v14 = a3.bind(null, ...v12); } catch (e) {}
    return v14;
}
const v17 = { type: "function" };
Object.defineProperty(v17, "arguments", { writable: true, enumerable: true, value: v0 });
new Worker(f2, v17);
for (let i20 = 0;
    i20 < 20000;
    (() => {
        const v24 = i20++;
        v24 + v24;
    })()) {
}
