function hot_function(target, source) {
    Object.assign(target, source);
}

for (let i = 0; i < 10000; i++) {
    hot_function({}, {a: 1});
}

const target = {};
new Set([target]);

hot_function(target, {x: 2});