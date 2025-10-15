let trigger_gc = false;
class C2 {
}
const v14 = {
    construct(a5, a6, a7) {
        if (trigger_gc) {
            new Array(262144);
            trigger_gc = false;
        }
        return Reflect.construct(a5, a6, a7);
    },
};
const v15 = new Proxy(C2, v14);
const P = v15;
function hot_function() {
    new P();
    new Array(1);
    return C2;
}
for (let i23 = 0; i23 < 20000; i23++) {
    hot_function();
}
trigger_gc = true;
hot_function();
