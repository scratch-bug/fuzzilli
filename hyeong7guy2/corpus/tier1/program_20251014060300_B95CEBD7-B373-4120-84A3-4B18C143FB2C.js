function f0(a1) {
}
class C2 extends f0 {
    constructor(a4, a5, a6) {
        super();
    }
}
const v8 = WebAssembly.Module;
for (let v9 = 0; v9 < 100; v9++) {
    Reflect.construct(C2, [], v8);
}
