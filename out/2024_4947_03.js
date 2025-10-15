const proto = {
    get a() {
        return 1;
    }
};
const special_obj = Object.create(proto);

function set_a(o, v) {
    o.a = v;
}

for (let i = 0; i < 20000; i++) {
    let o = { a: 1 };
    set_a(i % 2 ? o : special_obj, {});
}

let victim = { a: 1.1, b: 2.2 };
set_a(victim, {});