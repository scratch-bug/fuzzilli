const v1 = Symbol.iterator;
try { ("getTime").localeCompare(v1); } catch (e) {}
