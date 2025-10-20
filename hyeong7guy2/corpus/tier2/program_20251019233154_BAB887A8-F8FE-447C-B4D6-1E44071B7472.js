const v2 = new Uint32Array(2134);
class C3 {
    [v2] = 2134;
}
const v4 = new C3();
const v7 = JSON.stringify({ imp: v4 });
const v8 = JSON.parse;
v8.apply(JSON, [v7]);
