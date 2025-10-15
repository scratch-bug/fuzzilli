const v1 = Symbol.iterator;
const v10 = {
    [v1]() {
        let v3 = 10;
        const v9 = {
            next() {
                v3--;
                const v7 = v3 == 0;
                return { done: v7, value: v3 };
            },
        };
        return v9;
    },
};
class C12 {
    static o(a14, a15) {
        this[v10] &= a14;
        return 1543116418n;
    }
    static a = v10;
}
new C12();
function f18() {
    return 1543116418n;
}
function F19(a21, a22) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = 1951377386;
}
const v23 = new F19(1543116418n, v10);
const v24 = new F19(1951377386, 1951377386);
[-2.0,4.0,-9.63034953910879e+307,-340.6135661757403,1.0];
{
    delete v10[536870888];
}
if (false) {
} else {
}
const v29 = new F19(v23, v24);
[4294967297,8,-1491048972,56497];
/x(?:ab){4,7}/isy;
const v35 = new Float32Array(13);
v35 ?? 1543116418n;
try { Symbol["keyFor"](..."keyFor", v10, f18, ...1543116418n, 1543116418n, v29); } catch (e) {}
function F39(a41, a42) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a42;
    this.h = v23;
}
new F39(v10, v23);
new F39(v24, v23);
const v45 = [1024,257,1073741825,10,2147483649,27668,9223372036854775807,10,268435456,-624873012];
const v48 = class {
}
function f49() {
    const v50 = [f49,f49,f49];
    for (let i51 = 3; i51 < 25000; i51++) {
        v45[3] = v50[4] | 7;
        const v64 = {
            valueOf() {
                try {
                    Symbol("pop");
                } catch(e63) {
                }
                return "pop";
            },
        };
        v45["pop"]();
    }
    return v50;
}
Object.defineProperty(v48, Symbol.iterator, { writable: true, configurable: true, enumerable: true, value: f49 });
try { new Int32Array(v48); } catch (e) {}
