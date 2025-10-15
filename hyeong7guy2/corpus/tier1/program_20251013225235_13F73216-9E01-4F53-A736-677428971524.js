class C0 {
    static #m(a2) {
        a2 ||= a2;
    }
}
const v7 = Symbol.iterator;
const v15 = {
    [v7]() {
        this.d = this;
        let v9 = 10;
        const v14 = {
            next() {
                v9--;
                return { done: v9 };
            },
        };
        return v14;
    },
};
const v18 = new Int16Array(882);
const v20 = new WeakSet();
class C21 {
}
const v22 = class {
}
new v22();
function f24() {
}
f24.call(C0);
function f26() {
    const v27 = new Date(v20, Date, 882, ...v18, ...v15);
    v27.setMonth(C21, v7);
    return C0;
}
const v30 = Symbol.keyFor;
try { new v30(); } catch (e) {}
f24[Symbol.toPrimitive] = f26;
-4;
const v65 = [0,97,115,109,1,0,0,0,1,4,1,96,0,0,2,7,1,1,109,1,102,0,0,7,8,1,4,109,97,105,110];
const v66 = {};
for (const v67 in v65) {
    let v68;
    try { v68 = (0).propertyIsEnumerable(f24); } catch (e) {}
    v68 && v68;
}
