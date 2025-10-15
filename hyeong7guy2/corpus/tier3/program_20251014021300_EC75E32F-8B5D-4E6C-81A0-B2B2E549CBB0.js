const v1 = [4096,4096,4096];
const v2 = [v1,v1];
try {
const t0 = 4096;
t0(...v2, ...v1);
} catch (e) {}
