const v1 = new Map();
const v2 = v1.values();
Intl.Collator.bind(v2);
gc();
