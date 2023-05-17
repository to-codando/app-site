// import globalJsdom from "global-jsdom";
// import * as sinon from "sinon";
import { expect } from "@esm-bundle/chai";

import { AppAbout } from "@/components/AppAbout";

describe("AppAbout component", () => {
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
    expect(AppAbout()).to.have.all.keys(["template", "styles"]);
  });
});
