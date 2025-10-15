function hot_function(a1, a2) {
    Object.assign(a1, a2);
}
for (let i6 = 0; i6 < 10000; i6++) {
    const v12 = {};
    hot_function(v12, { a: 1 });
}
const target = {};
new Set([target]);
hot_function(target, { x: 2 });
