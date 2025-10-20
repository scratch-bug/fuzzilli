const v1 = /a[bc]d/dsygm;
v1.constructor = "n";
try { ("toString").split(v1); } catch (e) {}
