function poc(a1, a2) {
    a1[0];
    new a2();
    if (a1[0] === 1.1) {
        a1[0] = 2;
    }
}
let arr = [1];
const v12 = () => {
    arr[0] = 1.1;
    return {};
};
const handler = { construct: v12 };
function f18() {
}
const v19 = new Proxy(f18, handler);
const proxy = v19;
function f21() {
}
const dummy = f21;
for (let i24 = 0; i24 < 30000; i24++) {
    poc(arr, dummy);
    arr = [1];
}
poc(arr, proxy);
