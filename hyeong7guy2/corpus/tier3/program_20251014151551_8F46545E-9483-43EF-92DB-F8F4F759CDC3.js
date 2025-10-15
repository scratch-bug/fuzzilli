const v4 = { alphabet: "base64url" };
let v6 = new Uint8Array(198);
const v7 = v6.setFromBase64("xzMrWslKAOyWbR3FwvJJN92rox1U2ey1_m8tFSi01rJIbtRqyELtXyjGmf7G92HXG2JIzIRlzJjnVAL9MXzeje-erujwT-v2VGo=", v4);
for (let i = 0; i < 5; i++) {
    v6 += v6;
    v7[v6] >>= 127;
}
