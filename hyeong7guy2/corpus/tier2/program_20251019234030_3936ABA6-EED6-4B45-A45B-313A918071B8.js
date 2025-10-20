[1073741823];
const v3 = new WeakSet();
function f4(a5) {
    const v6 = class extends WeakSet {
        o(a8) {
        }
    }
    new v6();
    new v6();
}
Symbol.toPrimitive;
const v13 = class {
    static [v3](a15) {
        return "bind";
    }
}
Symbol.toPrimitive;
const v20 = class {
    [v13](a22, a23, a24, a25) {
        return v3;
    }
}
new v20();
const v28 = Symbol.iterator;
const v36 = {
    [v28]() {
        const v35 = {
            next() {
                const v33 = 10 == 0;
                return { done: v33 };
            },
        };
    },
};
class C38 {
}
function F39(a41, a42) {
    if (!new.target) { throw 'must be called with new'; }
}
function f43() {
}
function f44(a45) {
    function f46() {
        ("🙌🏿").fontsize();
    }
    const v49 = { construct: f46 };
}
Object.defineProperty(F39, "f", { enumerable: true, get: f43, set: f44 });
const v50 = {};
for (let i52 = -14; i52 < 20000; i52++) {
    const v60 = i52 % 2 ? F39 : v50;
    v60.f = v60;
}
