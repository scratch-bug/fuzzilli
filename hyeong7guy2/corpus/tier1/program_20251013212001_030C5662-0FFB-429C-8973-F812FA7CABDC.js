class C3 {
}
const v6 = Float64Array[1];
try { v6(C3, 3, -9223372036854775807, -2); } catch (e) {}
const v10 = class {
}
let v13;
try { v13 = Int16Array.reverse(); } catch (e) {}
function F14(a16, a17) {
    if (!new.target) { throw 'must be called with new'; }
}
const v18 = new F14(v10, v10);
function f19() {
}
async function f20(a21, a22) {
    const v24 = Symbol.asyncDispose;
    const v26 = {
        [v24]() {
        },
    };
    await using v27 = v26;
}
f20(v13, v10);
function f29() {
    Symbol.for();
    function f33() {
        const v36 = -1048576;
        v36 >> v36;
        const v38 = Array(1048576);
        let v39;
        try { v39 = v38.find(v36); } catch (e) {}
        v39 ?? v39;
        return { done: true };
    }
    for (let v44 = 0; v44 < 10; v44++) {
        v44++;
    }
    return { next: f33 };
}
f29();
const v49 = Symbol.iterator;
Symbol.for(v49.description);
const v53 = { [v49]: f29 };
v18[Symbol] = v53;
const v57 = f19();
v57 ?? v57;
const v59 = f19.bind(null, ...v53);
v59.toString();
v59.e = v59;
v59.name = v59;
