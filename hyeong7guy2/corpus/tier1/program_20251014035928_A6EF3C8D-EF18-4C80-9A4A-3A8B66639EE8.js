function f0() {
    return f0;
}
const v2 = {};
v2.e = v2;
function f3(a4, a5) {
    const v6 = a4?.__defineSetter__;
    try { v6(); } catch (e) {}
    a4.a = a4;
    return a4;
}
for (let v8 = 0; v8 < 50; v8++) {
    const v9 = {};
    for (const v11 in 2) {
    }
    const v13 = v8 % 2 ? v9 : v2;
    v13.a = 2;
    const v16 = {
        [Symbol]() {
        },
    };
    const v17 = f3(v13);
    v17 ?? v17;
    const v20 = ("0061736d010000000105015f000003020101070501016600000a0f010d010170016e2000d26efb0700001c0b").match("0061736d010000000105015f000003020101070501016600000a0f010d010170016e2000d26efb0700001c0b");
    v17 ?? v17;
    v17 ?? v17;
    let v23 = f3.bind();
    v23.constructor = v23;
    const v24 = v23?.constructor;
    try { v24(f0); } catch (e) {}
    try { v24(Symbol); } catch (e) {}
    for (const v27 of v20) {
    }
}
for (const v28 of "boolean") {
}
