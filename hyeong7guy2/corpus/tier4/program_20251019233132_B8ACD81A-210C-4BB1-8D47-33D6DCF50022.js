const v0 = /[a$(?: foo )a[bc]d(?<a>.)\k<a>+]/m;
const v1 = [v0,v0];
try { ("function").matchAll(v1); } catch (e) {}
