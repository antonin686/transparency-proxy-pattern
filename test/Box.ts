import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { expect } from "chai";
import { ethers, upgrades } from "hardhat";

describe("Box", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.
  async function deployBankFixture() {
    const name = "BS23 Box";
    const initialValue = 0;
    const [owner, otherAccount] = await ethers.getSigners();

    const Box = await ethers.getContractFactory("Box");
    const box = await upgrades.deployProxy(Box, [name, initialValue], {
      kind: "transparent",
    });
    return { box, owner, otherAccount, name };
  }

  describe("Deployment", function () {
    it("Should be deployed correctly", async function () {
      const { box, name } = await loadFixture(deployBankFixture);

      expect(await box.name()).to.equal(name);
    });
  });
});
