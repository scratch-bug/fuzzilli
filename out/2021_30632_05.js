var global_o = { a: 1.1 };

function store(v) {
    global_o.a = v;
}

for (let i = 0; i < 20000; i++) {
    store(2.2);
}

global_o.b = {};

store({ c: 3.3 });