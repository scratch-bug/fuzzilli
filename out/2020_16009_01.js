function poc(o) {
    o.a = 2.3023e-320;
    return o.b;
}

for (let i = 0; i < 20000; i++) {
    let o = {a: 1, b: {}};
    poc(o);
}

let o = {a: 1, b: {}};
poc(o);