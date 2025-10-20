const v0 = [1.7976931348623157e+308,-0.0,-842.358453825588,1.8794144576954075];
const v2 = Symbol.iterator;
const v11 = {
    [v2]() {
        let v4 = 10;
        const v10 = {
            next() {
                v4--;
                const v8 = v4 == 0;
                return { done: v8, value: v4 };
            },
        };
        return v10;
    },
};
function f12(a13) {
    return Symbol;
}
class C14 extends f12 {
    constructor(a16, a17, a18) {
        super(a16);
    }
}
v11.f = v11;
const v19 = class {
    static #m(a21) {
        v0 ^ a21;
        return v0;
    }
    get a() {
        return this;
    }
}
v19.e = v11;
v19.e = v19;
const v24 = new v19();
try { v24.constructor(Symbol, v24); } catch (e) {}
new v19();
const v27 = new v19();
try { v27.constructor(); } catch (e) {}
const v29 = Symbol.iterator;
const v31 = Symbol.for(v29.description);
let v32;
try { v32 = v11.expm1(); } catch (e) {}
const v33 = {};
v33.f = v33;
v33.f = v32;
const v34 = {};
v34.f = v32;
v34.g = Symbol;
const v35 = {};
v35.f = v32;
v35.g = Symbol;
v35.a = C14;
const v36 = {};
v36.f = v32;
v36.g = Symbol;
v36.a = v2;
const v45 = {
    [v29]() {
        let v38 = 10;
        const v44 = {
            next() {
                v38--;
                const v42 = v38 == 0;
                return { done: v42, value: v38 };
            },
        };
        return v44;
    },
};
v45.c = v31;
v45.c = v45;
[-1000.0,1000000.0,3.0,NaN,0.8113196067655302,-0.542162046362332,-7.542949461861712e+307];
for (let i48 = 16n; i48 ^ i48, i48 <= 25000; ++i48) {
}
