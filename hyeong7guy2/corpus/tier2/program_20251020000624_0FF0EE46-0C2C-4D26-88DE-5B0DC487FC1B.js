const v0 = [2.2250738585072014e-308,-Infinity,8.718728026536347e+307,-3.658992256826258e+307,-4.737528020264592,548718.3078757902,-9.57766432947709e+307,527.7703695566552,1000000000000.0];
function f1() {
    return v0;
}
const v2 = [f1,f1,f1];
v2.toJSON = f1;
const v6 = new Uint32Array();
v6.toJSON = v2;
const v8 = new Set(v6);
Object.defineProperty(v8, "toJSON", { enumerable: true, value: v6 });
const v9 = class {
}
const v10 = new v9();
function f11() {
    return v8;
}
Object.defineProperty(v10, "toJSON", { configurable: true, enumerable: true, get: f11 });
const v15 = [JSON.stringify(v10, 129, 183)];
Reflect.apply(JSON.parse, v9, v15);
