const v1 = [0];
for (const v2 in v1) {
    try { undefined.propertyIsEnumerable(v1, 0, v2, v1); } catch (e) {}
}
new BigInt64Array(521603039);
