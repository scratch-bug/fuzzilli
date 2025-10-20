const v2 = class extends Int8Array {
}
new v2();
-296494875n >> -296494875n;
function f7() {
    return v2;
}
function f8() {
    const v10 = new Float64Array();
    const v11 = v10.keys();
    let v12;
    try { v12 = v11.flatMap(v2); } catch (e) {}
    %VerifyType(v12);
    function f13() {
        Array(1048576);
        return { done: true };
    }
    f13();
    return { next: f13 };
}
const v20 = Symbol.iterator;
f7.bind(null, ...{ [v20]: f8 });
