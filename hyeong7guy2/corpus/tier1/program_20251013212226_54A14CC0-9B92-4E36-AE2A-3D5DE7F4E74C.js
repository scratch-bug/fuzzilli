var global_o = { a: 1.1 };
function store(a4) {
    global_o.a = a4;
}
for (let i6 = 0; i6 < 20000; i6++) {
}
global_o.b = {};
store({});
