class C3 {
}
new C3();
function f6() {
}
f6.e = f6;
class C7 extends C3 {
}
const v8 = new C7();
const v9 = v8.constructor;
v9.b = v9;
let v10;
try { v10 = new C7(); } catch (e) {}
v10.b = v10;
const v11 = new C7();
new C7();
class C14 {
}
const v15 = {};
v15.a = v15;
function f16(a17, a18) {
    a17.a;
    a17.e = a17;
}
try { f16(-47209, v8); } catch (e) {}
new Int8Array(v11, C14, -47209);
for (let v23 = 0; v23 < 50; v23++) {
    const v24 = {};
    for (const v26 in 2) {
    }
    const v27 = v23 ? v24 : v15;
    v27.g = v27;
    const v30 = {
        [Symbol]() {
        },
    };
    f16(v27);
    const v33 = ("0061736d010000000105015f000003020101070501016600000a0f010d010170016e2000d26efb0700001c0b").match();
    const v34 = v33.join(v33);
    try { v34.bold(); } catch (e) {}
    const v37 = Symbol.asyncIterator;
    v37.description;
    const v40 = C14[v37];
    v40 ?? v40;
    let v42 = f16.bind();
    const v43 = v42?.constructor;
    try { new v43(-8); } catch (e) {}
    let v45;
    try { v45 = v43(Symbol); } catch (e) {}
    const v46 = v45 ?? v45;
    v46 ?? v46;
}
for (const v48 of "boolean") {
    v48[0] = v48;
}
