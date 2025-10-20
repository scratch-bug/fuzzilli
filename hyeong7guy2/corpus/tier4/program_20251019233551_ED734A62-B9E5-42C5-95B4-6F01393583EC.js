const v1 = ("n").search("n");
const v2 = /a[bc]d/dsygm;
v2.constructor = v1;
try { ("toString").split(v2); } catch (e) {}
