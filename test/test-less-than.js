const gb = require("./gbtest")(__filename);

test("less-than", () => {
  gb.cycles(200);
  expect(gb.stack).toEqual([0x0, 0xFFFF, 0x0, 0xFFFF]);
});
