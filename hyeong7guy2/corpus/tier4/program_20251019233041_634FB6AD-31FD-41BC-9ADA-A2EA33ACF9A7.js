const v2 = new Float32Array(1024);
v2[45] = v2;
v2[0] = v2;
v2.toSorted();
