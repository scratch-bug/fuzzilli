function f0(a1) {
    a1[0] + 1;
    Reflect.construct(Dummy, [], P);
    return a1[0];
}
function Dummy() {
}
let v14 = [1,2];
const v15 = () => {
};
const handler = { construct: v15 };
const v19 = new Proxy(Dummy, handler);
const P = v19;
for (let i22 = 0; i22 < 30000; i22++) {
    v14 = [1,2];
    f0(v14);
}
v14 = [1,2,3];
f0(v14);
