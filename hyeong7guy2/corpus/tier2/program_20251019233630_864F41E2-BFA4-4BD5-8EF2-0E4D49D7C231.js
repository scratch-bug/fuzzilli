const t0 = "🙌🏿";
t0[2] = "🙌🏿";
const v1 = /a\Sa(?:b)ta?/dsgvi;
class C2 {
    constructor() {
        v1.test(C2);
    }
}
function f6() {
}
function f7() {
    const v8 = new C2();
    return v8;
}
const v9 = { construct: f7 };
const v10 = new Proxy(f6, v9);
function F11(a13) {
    if (!new.target) { throw 'must be called with new'; }
}
const v14 = class extends F11 {
    constructor(a16, a17) {
        super();
        new Float64Array(536870912);
    }
}
new v14();
function f24() {
}
function f25() {
    function f26() {
        const v29 = Array(1048576);
        try { Array.from(...v29, Array, f26); } catch (e) {}
        return { done: true };
    }
    return { next: f26 };
}
const v36 = Symbol.iterator;
f24.bind(null, ...{ [v36]: f25 });
for (let v40 = 0; v40 < 500; v40++) {
    Reflect.construct(v10, v9);
}
