let do_side_effect = false;
let o = { a: 1.1 };

function C() {
    if (do_side_effect) {
        o.a = {};
    }
}

function bug(p) {
    let x = p.a;
    new C();
    return p.a;
}

for (let i = 0; i < 100000; i++) {
    bug(o);
}

do_side_effect = true;
bug(o);