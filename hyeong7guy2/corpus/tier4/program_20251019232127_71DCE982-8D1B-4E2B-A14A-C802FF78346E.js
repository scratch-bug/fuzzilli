const v0 = [];
function f1() {
    return f1;
}
for (let i3 = 0;
    i3 < 20000;
    (() => {
        i3++;
        let v8;
        try { v8 = v0.filter(f1); } catch (e) {}
        v8?.[0];
    })()) {
}
