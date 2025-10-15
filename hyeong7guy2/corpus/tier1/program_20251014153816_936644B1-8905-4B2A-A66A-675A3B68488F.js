function f2() {
    return Object;
}
function f3(a4) {
    return f3;
}
Object.defineProperty(Object, "toISOString", { get: f2, set: f3 });
for (let i6 = 0;
    i6 < 20000;
    (() => {
        i6++;
        Object[1073741825] = "my";
    })()) {
    Object.toISOString = Object;
}
