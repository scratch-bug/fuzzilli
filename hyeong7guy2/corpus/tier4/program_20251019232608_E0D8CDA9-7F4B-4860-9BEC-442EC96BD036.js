function f1(a2, a3) {
    return a2;
}
const v5 = Float64Array.from(WeakSet);
class C7 {
    [v5] = 1073741824;
}
const v8 = new C7();
v8.toString = f1;
const v11 = JSON.stringify({ ...v8, arguments: 1073741824 });
const v12 = JSON.parse;
v12.apply(JSON, [v11]);
