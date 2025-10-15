class C1 {
    m() {
        super[8n] = this;
        return this;
    }
    static [8n] = 8n;
}
const v3 = new C1();
new C1();
const v5 = new C1();
const v6 = new C1();
function f7() {
    return v6;
}
class C9 extends C1 {
    #m(a11, a12, a13, a14) {
        return a12;
        return v5;
    }
    static ["undefined"](a16, a17, a18) {
    }
}
new C9();
[256,-10955];
function f21() {
    return v3;
}
function f22() {
}
class C23 {
    static set h(a25) {
        a25 & this;
    }
    static [f22] = f22;
    constructor() {
    }
}
function f29() {
    return Float64Array;
}
const v31 = new Float64Array();
const v33 = {
    get c() {
    },
};
const v35 = Object.create(v33);
function f36(a37, a38) {
    a37.toISOString = a37;
}
for (let i40 = 0; i40 < 20000; i40++) {
    const v47 = { a: 1 };
    const v50 = i40 % 2 ? v47 : v35;
    const v51 = {};
    1 < 5;
    function f54(a55) {
        if (a55) {
            const v57 = { p1: 1.1 };
        }
        const v58 = {};
        return { q1: v58 };
    }
    f54();
    f36(v50, v51, 0, Float64Array, v31);
}
const v62 = new C23();
const v63 = new C23();
function F64(a66, a67) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = v63;
    this.g = a66;
}
new F64(f22, F64);
class C69 extends F64 {
    [v62](a71, a72) {
        return this.g;
    }
    set g(a75) {
    }
}
const v76 = new C69();
const v77 = new C69();
const v78 = new C69();
let v79 = [1000000000.0,-4.0];
const v80 = class {
    static {
        let v81 = this;
        [v81,...v79] = v79;
    }
}
function F82(a84, a85) {
    if (!new.target) { throw 'must be called with new'; }
}
new F82(v76);
new F82(v77, v78);
