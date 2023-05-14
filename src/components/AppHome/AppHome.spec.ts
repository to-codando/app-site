// import globalJsdom from "global-jsdom";
// import * as sinon from "sinon";
import { expect } from "@esm-bundle/chai";

import { AppHome } from "@/components/AppHome";

describe("AppHome component", () => {
  // let cleanup: { (): void };

  // before(() => {
  //   cleanup = globalJsdom();
  // });

  // after(() => {
  //   cleanup();
  // });

  // beforeEach(async () => {});

  // afterEach(async () => {});

  it("First helloApp tste test", () => {
    expect(AppHome()).to.have.all.keys(["template", "styles"]);
  });
});
