const v3 = new Float32Array(512);
try { v3.sort(512); } catch (e) {}
const v6 = Symbol.iterator;
const v15 = {
    [v6]() {
        let v8 = 10;
        const v14 = {
            next() {
                v8--;
                const v12 = v8 == 0;
                return { done: v12, value: v8 };
            },
        };
        return v14;
    },
};
const v16 = class extends Float32Array {
    valueOf(a18) {
        for (let v19 = 0; v19 < 35; v19++) {
        }
        return v3;
    }
}
new v16();
const v21 = new v16();
v21.length = v21;
new v16();
const v23 = new v16();
try { v23.constructor(); } catch (e) {}
class C25 {
    static #m(a27) {
        a27 ||= a27;
    }
}
try { C25.call(Symbol); } catch (e) {}
const v33 = Symbol.iterator;
const v42 = {
    [v33]() {
        this.d = this;
        let v35 = 10;
        const v41 = {
            next() {
                const v37 = v35--;
                v37 * v37;
                const v40 = { done: v37 };
                v40.d = v40;
                return v40;
            },
        };
        return v41;
    },
};
let v43 = 882;
v43--;
const v46 = new Int16Array(v43);
const v48 = new WeakSet();
class C49 {
}
const v50 = class {
}
new v50();
function f52() {
}
const v53 = f52.call(C25);
v53 ?? v53;
function f55() {
    const v56 = new Date(v48, Date, v43, ...v46, ...v42);
    v56.setMonth(C49, v33);
}
const v59 = Symbol.keyFor;
try { new v59(); } catch (e) {}
f52[Symbol.toPrimitive] = f55;
let v85 = 7;
v85++;
-0;
97 / 97;
const v96 = [0,97,115,109,1,0,0,0,1,4,1,96,0,0,2,7,1,1,109,1,102,0,0,v85,8,1,4,109,97,105,110];
const v97 = {};
for (const v98 in v96) {
    let v99;
    try { v99 = v98.propertyIsEnumerable(f52); } catch (e) {}
    v99 && v99;
}
