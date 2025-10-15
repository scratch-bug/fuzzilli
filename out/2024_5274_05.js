let do_side_effect = false;

class C {
    static {
        C.bug = (p) => {
            if (do_side_effect) {
                (() => this)();
            }
            return p;
        };
    }
}

const arr = [13.37];
const trigger_obj = {
    [Symbol.isConcatSpreadable]: true,
    length: 1,
    get 0() {
        return C.bug(1.1);
    }
};

for (let i = 0; i < 25000; i++) {
    if (i === 24999) {
        do_side_effect = true;
    }
    arr.concat(trigger_obj);
}