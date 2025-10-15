function set_prop(o) {
    o.y = 2.2;
}

for (let i = 0; i < 100000; ++i) {
    let obj = { x: 1.1, y: 1.1 };
    set_prop(obj);
}

let target = { x: 1.1, y: 1.1 };
target.z = 3.3;

set_prop(target);