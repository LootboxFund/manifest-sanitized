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
  GlobalMainfest_v0_7_4_demo,
  OZAutoTaskSlugs,
  OZSentinelSlugs,
  LootboxContracts,
  GoogleCloudRegion,
} from "./types";

const PIPEDREAM_SEMVER = "0.7.2-demo";
const PIPEDREAM_SEMVER_SLUG = "0-7-2-demo";
const OPEN_ZEPPELIN_SEMVER = "0.7.2-demo";

// Deployed Lootbox contracts
const contracts: LootboxContracts = {
  [BLOCKCHAINS[ChainSlugs.BSC_TESTNET].chainIdHex]: {
    LootboxCosmicFactory: {
      address: "____________" as Address,
      slug: ContractSlugs.LootboxCosmicFactory,
      lootboxDAO: "____________" as Address,
      whitelister: "____________" as Address,
    },
    /** @deprecated */
    LootboxInstantFactory: {
      address: "____________" as Address,
      slug: ContractSlugs.LootboxInstantFactory,
      bulkMinterSuperStaff: "____________" as Address,
    },
    /** @deprecated */
    LootboxEscrowFactory: {
      address: "____________" as Address,
      slug: ContractSlugs.LootboxEscrowFactory,
      bulkMinterSuperStaff: "____________" as Address,
    },
    /** @deprecated */
    PartyBasketFactory: {
      address: "____________" as Address,
      slug: ContractSlugs.PartyBasketFactory,
      whitelister: "____________" as Address,
    },
  },
  [BLOCKCHAINS[ChainSlugs.POLYGON_TESTNET].chainIdHex]: {
    LootboxCosmicFactory: {
      address: "____________" as Address,
      slug: ContractSlugs.LootboxCosmicFactory,
      lootboxDAO: "____________" as Address,
      whitelister: "____________" as Address,
    },
    /** @deprecated */
    LootboxInstantFactory: {
      address: "____________" as Address,
      slug: ContractSlugs.LootboxInstantFactory,
      bulkMinterSuperStaff: "____________" as Address,
    },
    /** @deprecated */
    LootboxEscrowFactory: {
      address: "____________" as Address,
      slug: ContractSlugs.LootboxEscrowFactory,
      bulkMinterSuperStaff: "____________" as Address,
    },
    /** @deprecated */
    PartyBasketFactory: {
      address: "____________" as Address,
      slug: ContractSlugs.PartyBasketFactory,
      whitelister: "____________" as Address,
    },
  },
};

export const snapshot: GlobalMainfest_v0_7_4_demo = {
  alias: "0.7.4-demo",
  description: `
    With Analytics
  `,
  chains: [
    {
      ...BLOCKCHAINS[ChainSlugs.BSC_TESTNET],
    },
    {
      ...BLOCKCHAINS[ChainSlugs.POLYGON_TESTNET],
    },
  ],
  date: new Date("Sun Nov 27 2022 11:31:43 GMT-0500 (Eastern Standard Time)"),
  semver: {
    major: 0,
    minor: 7,
    patch: 4,
    prerelease: ["demo"],
    build: [],
    id: "0.7.4-demo",
  },
  /** @deprecated replaced with firebase cloud functions */
  openZeppelin: {
    alias: OPEN_ZEPPELIN_SEMVER,
    contracts: {
      ...contracts,
    },
    secrets: [
      {
        name: "JWT_ON_CREATE_LOOTBOX", // Secret JWT signer
      },
    ],
    autoTasks: {
      onCreateLootboxCosmic: {
        id: "______" as OZAutoTaskID,
        alias: "On creation of a Cosmic Lootbox",
        semver: OPEN_ZEPPELIN_SEMVER,
        slug: OZAutoTaskSlugs.onCreateLootboxCosmic,
      },
    },
    sentinels: {
      [BLOCKCHAINS[ChainSlugs.BSC_TESTNET].chainIdHex]: {
        onCreateLootboxCosmic: {
          id: "______" as OZSentinelID,
          alias: `[${OPEN_ZEPPELIN_SEMVER}] Cosmic Lootbox onCreate`,
          semver: OPEN_ZEPPELIN_SEMVER, // NOT USED
          slug: OZSentinelSlugs.onCreateLootboxCosmic, // NOT USED
          ozChainSlug: OZChainSlugs.BSC_TESTNET,
          contractWatchAddress:
            contracts[BLOCKCHAINS[ChainSlugs.BSC_TESTNET].chainIdHex]
              .LootboxCosmicFactory.address,
        },
      },
      [BLOCKCHAINS[ChainSlugs.POLYGON_TESTNET].chainIdHex]: {
        onCreateLootboxCosmic: {
          id: "______" as OZSentinelID,
          alias: `[${OPEN_ZEPPELIN_SEMVER}] Cosmic Lootbox onCreate`,
          semver: OPEN_ZEPPELIN_SEMVER, // NOT USED
          slug: OZSentinelSlugs.onCreateLootboxCosmic, // NOT USED
          ozChainSlug: OZChainSlugs.POLYGON_TESTNET,
          contractWatchAddress:
            contracts[BLOCKCHAINS[ChainSlugs.POLYGON_TESTNET].chainIdHex]
              .LootboxCosmicFactory.address,
        },
      },
    },
    semver: OPEN_ZEPPELIN_SEMVER,
  },
  /** @deprecated replaced with firebase cloud functions */
  pipedream: {
    alias: PIPEDREAM_SEMVER,
    email: "____________",
    sources: {
      onCreateLootboxCosmic: {
        alias: `[${PIPEDREAM_SEMVER}] onCreateLootboxCosmic`, // Used as PD name
        pipedreamID: "______" as PipedreamSourceID,
        semver: "0.1.0",
        webhookEndpoint: "https://______.m.pipedream.net",
        slug: `${PIPEDREAM_SEMVER_SLUG}-${PipedreamSourceSlugs.onCreateLootboxCosmic}`, // Used as PD key
      },
    },
    actions: {
      onCreateLootboxCosmic: {
        alias: `[${PIPEDREAM_SEMVER}] onCreateLootboxCosmic`, // Used as PD name
        pipedreamID: "______" as PipedreamActionID,
        pipedreamSemver: "0.1.0",
        slug: `${PIPEDREAM_SEMVER_SLUG}-${PipedreamActionSlugs.onCreateLootboxCosmic}`, // Used as PD key
      },
    },
    semver: PIPEDREAM_SEMVER,
  },
  bigQuery: {
    datasets: {
      firestoreExport: {
        location: "US",
        tables: {
          claim: {
            id: `____________.firestore_export.claim_schema_claim_schema_latest`,
          },
          lootbox: {
            id: `____________.firestore_export.lootbox_schema_lootbox_schema_latest`,
          },
          lootboxSnapshot: {
            id: `____________.firestore_export.lootbox_tournament_snapshot_schema_lootbox_snapshot_schema_latest`,
          },
          user: {
            id: `____________.firestore_export.user_schema_user_schema_latest`,
          },
        },
      },
    },
  },
  cloudRun: {
    alias: "string",
    semver: "0.7.4-demo",
    containers: {
      stampNewLootbox: {
        slug: CloudRunContainerSlugs.stampNewLootbox,
        fullRoute:
          "https://stamp-nft-0-7-1-demo-____________.a.run.app/stamp/new/lootbox",
      },
      stampNewTicket: {
        slug: CloudRunContainerSlugs.stampNewTicket,
        fullRoute:
          "https://stamp-nft-0-7-1-demo-____________.a.run.app/stamp/new/ticket",
      },
      lootboxServer: {
        slug: CloudRunContainerSlugs.lootboxServer,
        fullRoute: "https://lootbox-server-____________.a.run.app/graphql",
      },
      activationIngestor: {
        slug: CloudRunContainerSlugs.activationIngestor,
        fullRoute: "https://activation-ingestor-____________.a.run.app",
      },
    },
  },
  googleCloud: {
    alias: "0.7.4-demo",
    projectID: "____________",
    semver: "0.7.4-demo",
    region: GoogleCloudRegion.usCentral1,
  },
  storage: {
    downloadUrl: "https://storage.googleapis.com",
    buckets: {
      // affiliateFrontend: {
      //   id: "lootbox-advertiser-frontend-staging",
      // },
      abi: {
        id: "lootbox-abi-staging",
      },
      stamp: {
        id: "lootbox-stamp-staging",
      },
      data: { id: "lootbox-data-staging" },
      constants: { id: "lootbox-constants-staging" },
      widgets: { id: "lootbox-widgets-staging" },
      pixel: {
        id: "lootbox-pixel-tracking-____________-staging",
        accessUrl: "https://staging.track.lootbox.fund",
        files: {
          adTrackingPixel: "pixel.png",
        },
      },
      redirectPage: {
        id: "_______",
        accessUrl: "https://staging.redirect.lootbox.fund",
        files: {
          page: "redirect.html",
        },
      },
    },
  },
  secretManager: {
    secrets: [
      {
        name: "PARTY_BASKET_WHITELISTER_PRIVATE_KEY",
        version: 1,
      },
      {
        name: "OZ_DEFENDER_API_KEY",
        version: 3,
      },
      {
        name: "OZ_DEFENDER_API_SECRET",
        version: 3,
      },
      {
        name: "PD_ABI_UPLOADER_SECRET",
        version: 3,
      },
      {
        name: "JWT_ON_CREATE_LOOTBOX",
        version: 3,
      },
      {
        name: "STAMP_SECRET",
        version: 1,
      },
      {
        name: "SENDGRID_DEPOSIT_EMAIL_API_KEY",
        version: 1,
      },
    ],
  },
  microfrontends: {
    alias: "0.7.3-demo",
    semver: "0.7.3-demo",
    widgets: {
      fundraiserPage: {
        alias: "fundraiserPage",
        semver: "0.7.3-demo",
        slug: WidgetSlugs.fundraiserPage,
      },
      createLootbox: {
        alias: "createLootbox",
        semver: "0.7.3-demo",
        slug: WidgetSlugs.createLootbox,
      },
      manageLootbox: {
        alias: "manageLootbox",
        semver: "0.7.3-demo",
        slug: WidgetSlugs.manageLootbox,
      },
    },
    webflow: {
      alias: "0.7.4-demo",
      semver: "0.7.4-demo",
      email: "____________",
      lootboxUrl: "https://www.lootbox.fund/demo/0-7-2-demo/buy",
      createPage: "https://www.lootbox.fund/demo/0-7-2-demo/create",
      managePage: "https://www.lootbox.fund/demo/0-7-2-demo/manage",
      authPage: "https://www.lootbox.fund/demo/0-7-2-demo/auth",
      myProfilePage: "https://staging.go.lootbox.fund/profile",
      tournamentManagePage:
        "https://www.lootbox.fund/demo/0-7-2-demo/tournament/manage",
      tournamentCreatePage:
        "https://www.lootbox.fund/demo/0-7-2-demo/tournament/create",
      tournamentPublicPage:
        "https://www.lootbox.fund/demo/0-7-2-demo/tournament",
      /** Not in use atm */
      myFundraisersPage:
        "https://www.lootbox.fund/demo/0-7-2-demo/my-fundraisers",
      /** Not in use atm */
      myCollectionsPage:
        "https://www.lootbox.fund/demo/0-7-2-demo/my-collections",
      battleFeed: "https://www.lootbox.fund/demo/0-7-2-demo/battle-feed",
      basketRedeemPage:
        "https://www.lootbox.fund/demo/0-7-2-demo/basket/redeem",
      basketManagePage:
        "https://www.lootbox.fund/demo/0-7-2-demo/basket/manage",
      lootboxFeed: "https://www.lootbox.fund/demo/0-7-2-demo/lootbox-feed",
      battlePage: "https://www.lootbox.fund/demo/0-7-2-demo/watch",
      referral: "https://staging.go.lootbox.fund",
      anonSignup: "https://staging.go.lootbox.fund/onboard",
      publicProfile: "https://staging.go.lootbox.fund/user",
      cosmicLootboxPage: "https://staging.go.lootbox.fund/earn",
      logout: "https://staging.go.lootbox.fund/logout",
      landingPage: "https://www.lootbox.fund",
      myTickets: "https://staging.go.lootbox.fund/my-tickets",
    },
    dashboard: {
      promoter: "https://staging.promoter.lootbox.fund",
      advertiser: "https://staging.marketing.lootbox.fund",
    },
  },
  lootbox: {
    alias: "0.7.4-demo",
    semver: "0.7.4-demo",
    contracts: {
      ...contracts,
    },
  },
  cloudFunctions: {
    region: "us-central1",
    pubsubPixelTracking: {
      topic: "pixel-tracking",
    },
    pubsubClickRedirectTracking: {
      topic: "click-redirect-staging",
    },
    pubsubBillableActivationEvent: {
      topic: "memo-billable-activation",
    },
  },
  sendgrid: {
    emailTemplates: {
      lootboxDeposit: {
        id: "____________",
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
