import {
    assert,
    describe,
    test,
    clearStore,
    beforeAll,
    afterAll
  } from "matchstick-as/assembly/index"
  import { Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
  import { AddedAccess } from "../generated/schema"
  import { AddedAccess as AddedAccessEvent } from "../generated/AccessControlledOffchainAggregator/AccessControlledOffchainAggregator"
  import { handleAddedAccess } from "../src/access-controlled-offchain-aggregator.ts"
  import { createAddedAccessEvent } from "./access-controlled-offchain-aggregator-utils"
  
  // Tests structure (matchstick-as >=0.5.0)
  // https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0
  
  describe("Describe entity assertions", () => {
    beforeAll(() => {
      let user = Address.fromString("0x0000000000000000000000000000000000000001")
      let newAddedAccessEvent = createAddedAccessEvent(user)
      handleAddedAccess(newAddedAccessEvent)
    })
  
    afterAll(() => {
      clearStore()
    })
  
    // For more test scenarios, see:
    // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test
  
    test("AddedAccess created and stored", () => {
      assert.entityCount("AddedAccess", 1)
  
      // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
      assert.fieldEquals(
        "AddedAccess",
        "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
        "user",
        "0x0000000000000000000000000000000000000001"
      )
  
      // More assert options:
      // https://thegraph.com/docs/en/developer/matchstick/#asserts
    })
  })
