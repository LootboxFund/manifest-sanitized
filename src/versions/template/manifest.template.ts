import { Address, BLOCKCHAINS, ChainSlugs } from "@wormgraph/helpers";
import { OZChainSlugs } from "../../types/chains";
import {
  CloudRunContainerSlugs,
  OZAutoTaskID,
  OZSentinelID,
  PipedreamActionID,
  PipedreamActionSlugs,
  PipedreamSourceID,
  PipedreamSourceSlugs,
  WidgetSlugs,
  ContractSlugs,
  GlobalMainfest_v0_4_0_demo,
  MultiSigSlugs,
  OZAutoTaskSlugs,
  OZSentinelSlugs,
} from "./types";

export const snapshot: GlobalMainfest_v0_4_0_demo = {
  alias: "0.4.0-demo",
  description: `
    Demo version of Lootbox.
    This is a demo version of lootbox hosted on BSC testnet.
  `,
  chains: [
    {
      chainIDHex: BLOCKCHAINS[ChainSlugs.BSC_TESTNET].chainIdHex,
      chainName: BLOCKCHAINS[ChainSlugs.BSC_TESTNET].chainName,
      priceFeedUSD: BLOCKCHAINS[ChainSlugs.BSC_TESTNET].priceFeedUSD,
    },
    {
      chainIDHex: BLOCKCHAINS[ChainSlugs.POLYGON_TESTNET].chainIdHex,
      chainName: BLOCKCHAINS[ChainSlugs.POLYGON_TESTNET].chainName,
      priceFeedUSD: BLOCKCHAINS[ChainSlugs.POLYGON_TESTNET].priceFeedUSD,
    },
  ],
  date: new Date("Tue Apr 26 2022 07:25:51 GMT-0400 (Eastern Daylight Time)"),
  semver: {
    major: 0,
    minor: 3,
    patch: 1,
    prerelease: ["demo"],
    build: [],
    id: "0.4.0-demo",
  },
  openZeppelin: {
    alias: "0.4.0-demo",
    multiSigs: {
      [BLOCKCHAINS[ChainSlugs.BSC_TESTNET].chainIdHex]: {
        LootboxDAO: {
          alias: "LootboxDAO",
          address: "______________________________" as Address,
          signers: [
            "______________________________" as Address,
            "______________________________" as Address,
          ],
          chainHexID: BLOCKCHAINS[ChainSlugs.BSC_TESTNET].chainIdHex,
          threshold: 1,
          slug: MultiSigSlugs.LootboxDAO,
        },
        LootboxDAO_Treasury: {
          alias: "LootboxDAO Treasury",
          address: "______________________________" as Address,
          signers: [
            "______________________________" as Address,
            "______________________________" as Address,
          ],
          chainHexID: BLOCKCHAINS[ChainSlugs.BSC_TESTNET].chainIdHex,
          threshold: 1,
          slug: MultiSigSlugs.LootboxDAO,
        },
      },
      [BLOCKCHAINS[ChainSlugs.POLYGON_TESTNET].chainIdHex]: {
        LootboxDAO: {
          alias: "LootboxDAO",
          address: "______________________________" as Address,
          signers: ["______________________________" as Address],
          chainHexID: BLOCKCHAINS[ChainSlugs.POLYGON_TESTNET].chainIdHex,
          threshold: 1,
          slug: MultiSigSlugs.LootboxDAO,
        },
        LootboxDAO_Treasury: {
          alias: "LootboxDAO Treasury",
          address: "______________________________" as Address,
          signers: ["______________________________" as Address],
          chainHexID: BLOCKCHAINS[ChainSlugs.POLYGON_TESTNET].chainIdHex,
          threshold: 1,
          slug: MultiSigSlugs.LootboxDAO,
        },
      },
    },
    contracts: {
      [BLOCKCHAINS[ChainSlugs.BSC_TESTNET].chainIdHex]: {
        LootboxInstantFactory: {
          address: "______________________________" as Address,
          slug: ContractSlugs.LootboxInstantFactory,
        },
        LootboxEscrowFactory: {
          address: "______________________________" as Address,
          slug: ContractSlugs.LootboxEscrowFactory,
        },
      },
      [BLOCKCHAINS[ChainSlugs.POLYGON_TESTNET].chainIdHex]: {
        LootboxInstantFactory: {
          address: "____________________________________" as Address,
          slug: ContractSlugs.LootboxInstantFactory,
        },
        LootboxEscrowFactory: {
          address: "____________________________________" as Address,
          slug: ContractSlugs.LootboxEscrowFactory,
        },
      },
    },
    secrets: [
      {
        name: "JWT_ON_CREATE_LOOTBOX", // Secret JWT signer
      },
    ],
    autoTasks: {
      onCreateLootboxInstant: {
        id: "______________________________" as OZAutoTaskID,
        alias: "On creation of an Instant Lootbox",
        semver: "0.4.0-demo",
        slug: OZAutoTaskSlugs.onCreateLootboxInstant,
      },
      onCreateLootboxEscrow: {
        id: "______________________________" as OZAutoTaskID,
        alias: "On creation of an Escrow Lootbox",
        semver: "0.4.0-demo",
        slug: OZAutoTaskSlugs.onCreateLootboxEscrow,
      },
    },
    sentinels: {
      [BLOCKCHAINS[ChainSlugs.BSC_TESTNET].chainIdHex]: {
        onCreateLootboxInstant: {
          id: "______________________________" as OZSentinelID,
          alias: "Instant Lootbox onCreate",
          semver: "0.4.0-demo",
          slug: OZSentinelSlugs.onCreateLootboxInstant,
          ozChainSlug: OZChainSlugs.BSC_TESTNET,
          contractWatchAddress: "______________________________" as Address,
        },
        onCreateLootboxEscrow: {
          id: "2d61148b-def7-4f78-bffc-70f9eca5e7a5" as OZSentinelID,
          alias: "Escrow Lootbox onCreate",
          semver: "0.4.0-demo",
          slug: OZSentinelSlugs.onCreateLootboxEscrow,
          ozChainSlug: OZChainSlugs.BSC_TESTNET,
          contractWatchAddress: "______________________________" as Address,
        },
      },
      [BLOCKCHAINS[ChainSlugs.POLYGON_TESTNET].chainIdHex]: {
        onCreateLootboxInstant: {
          id: "______________________________" as OZSentinelID,
          alias: "Instant Lootbox onCreate",
          semver: "0.4.0-demo",
          slug: OZSentinelSlugs.onCreateLootboxInstant,
          ozChainSlug: OZChainSlugs.POLYGON_TESTNET,
          contractWatchAddress: "______________________________" as Address,
        },
        onCreateLootboxEscrow: {
          id: "______________________________" as OZSentinelID,
          alias: "Escrow Lootbox onCreate",
          semver: "0.4.0-demo",
          slug: OZSentinelSlugs.onCreateLootboxEscrow,
          ozChainSlug: OZChainSlugs.POLYGON_TESTNET,
          contractWatchAddress: "______________________________" as Address,
        },
      },
    },
    semver: "0.4.0-demo",
  },
  pipedream: {
    alias: "0.4.0-demo",
    email: "0_4_0_demo@lootbox.fyi",
    sources: {
      onCreateLootboxInstant: {
        alias: "onCreateLootboxInstant",
        pipedreamID: "______________________________" as PipedreamSourceID,
        semver: "0.1.0",
        webhookEndpoint:
          "https://______________________________.m.pipedream.net",
        slug: PipedreamSourceSlugs.onCreateLootboxInstant,
      },
      onCreateLootboxEscrow: {
        alias: "onCreateLootboxEscrow",
        pipedreamID: "______________________________" as PipedreamSourceID,
        semver: "0.1.0",
        webhookEndpoint:
          "https://______________________________.m.pipedream.net",
        slug: PipedreamSourceSlugs.onCreateLootboxEscrow,
      },
      onUploadABI: {
        alias: "onUploadABI",
        pipedreamID: "______________________________" as PipedreamSourceID,
        semver: "0.1.0",
        webhookEndpoint:
          "https://______________________________.m.pipedream.net",
        slug: PipedreamSourceSlugs.onUploadABI,
      },
    },
    actions: {
      onCreateLootboxInstant: {
        alias: "onCreateLootboxInstant",
        pipedreamID: "______________________________" as PipedreamActionID,
        pipedreamSemver: "0.1.0",
        slug: PipedreamActionSlugs.onCreateLootboxInstant,
      },
      onCreateLootboxEscrow: {
        alias: "onCreateLootboxEscrow",
        pipedreamID: "______________________________" as PipedreamActionID,
        pipedreamSemver: "0.1.0",
        slug: PipedreamActionSlugs.onCreateLootboxEscrow,
      },
      onUploadABI: {
        alias: "onUploadABI",
        pipedreamID: "______________________________" as PipedreamActionID,
        pipedreamSemver: "0.1.0",
        slug: PipedreamActionSlugs.onUploadABI,
      },
    },
    semver: "0.4.0-demo",
  },
  cloudRun: {
    alias: "string",
    semver: "0.4.0-demo",
    containers: {
      stampNewLootbox: {
        slug: CloudRunContainerSlugs.stampNewLootbox,
        fullRoute: "https://stamp-nft-____________.a.run.app/stamp/new/lootbox",
      },
    },
  },
  googleCloud: {
    alias: "0.4.0-demo",
    projectID: "____________",
    semver: "0.4.0-demo",
  },
  storage: {
    downloadUrl: "https://storage.googleapis.com",
    buckets: {
      abi: {
        id: "lootbox-abi-staging",
      },
      stamp: {
        id: "lootbox-stamp-staging",
      },
      assets: { id: "lootbox-assets-staging" },
      data: { id: "lootbox-data-staging" },
      constants: { id: "lootbox-constants-staging" },
      widgets: { id: "lootbox-widgets-staging" },
    },
  },
  secretManager: {
    secrets: [
      {
        name: "OZ_DEFENDER_API_KEY",
        version: 2,
      },
      {
        name: "OZ_DEFENDER_API_SECRET",
        version: 2,
      },
      {
        name: "PD_ABI_UPLOADER_SECRET",
        version: 2,
      },
      {
        name: "JWT_ON_CREATE_LOOTBOX",
        version: 2,
      },
    ],
  },
  microfrontends: {
    alias: "0.4.0-demo",
    semver: "0.4.0-demo",
    widgets: {
      fundraiserPage: {
        alias: "fundraiserPage",
        semver: "0.4.0-demo",
        slug: WidgetSlugs.fundraiserPage,
      },
      createLootbox: {
        alias: "createLootbox",
        semver: "0.4.0-demo",
        slug: WidgetSlugs.createLootbox,
      },
      manageLootbox: {
        alias: "manageLootbox",
        semver: "0.4.0-demo",
        slug: WidgetSlugs.manageLootbox,
      },
    },
    webflow: {
      alias: "0.4.0-demo",
      semver: "0.4.0-demo",
      email: "support@guildfx.exchange",
      lootboxUrl: "https://www.lootbox.fund/demo/0-4-0-demo/buy",
    },
  },
  lootbox: {
    alias: "0.4.0-demo",
    semver: "0.4.0-demo",
    contracts: {
      [BLOCKCHAINS[ChainSlugs.BSC_TESTNET].chainIdHex]: {
        LootboxInstantFactory: {
          address: "______________________________" as Address,
          slug: ContractSlugs.LootboxInstantFactory,
        },
        LootboxEscrowFactory: {
          address: "______________________________" as Address,
          slug: ContractSlugs.LootboxEscrowFactory,
        },
      },
      [BLOCKCHAINS[ChainSlugs.POLYGON_TESTNET].chainIdHex]: {
        LootboxInstantFactory: {
          address: "____________________________________" as Address,
          slug: ContractSlugs.LootboxInstantFactory,
        },
        LootboxEscrowFactory: {
          address: "____________________________________" as Address,
          slug: ContractSlugs.LootboxEscrowFactory,
        },
      },
    },
  },
  firebase: {
    apiKey: "____________",
    authDomain: "____________.firebaseapp.com",
    projectId: "____________",
    storageBucket: "____________.appspot.com",
    messagingSenderId: "____________",
    appId: "____________",
  },
};

export default snapshot;
