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
  GlobalMainfest_v0_7_4_prod,
  OZAutoTaskSlugs,
  OZSentinelSlugs,
  LootboxContracts,
  GoogleCloudRegion,
} from "./types";

// TODO: remove this
const PIPEDREAM_SEMVER = "0.7.1-prod";
// TODO: remove this
const PIPEDREAM_SEMVER_SLUG = "0-7-0-prod";
// TODO: remove this
const OPEN_ZEPPELIN_SEMVER = "0.7.1-prod";

// Deployed Lootbox contracts
const contracts: LootboxContracts = {
  [BLOCKCHAINS[ChainSlugs.BSC_MAINNET].chainIdHex]: {
    LootboxCosmicFactory: {
      address: "____________" as Address,
      slug: ContractSlugs.LootboxCosmicFactory,
      lootboxDAO: "____________" as Address,
      whitelister: "____________" as Address,
    },
    /** @deprecated */
    LootboxInstantFactory: {
      address: "_________________________________" as Address,
      slug: ContractSlugs.LootboxInstantFactory,
      bulkMinterSuperStaff: "_________________________________" as Address,
    },
    /** @deprecated */
    LootboxEscrowFactory: {
      address: "_________________________________" as Address,
      slug: ContractSlugs.LootboxEscrowFactory,
      bulkMinterSuperStaff: "_________________________________" as Address,
    },
    /** @deprecated */
    PartyBasketFactory: {
      address: "_________________________________" as Address,
      slug: ContractSlugs.PartyBasketFactory,
      whitelister: "_________________________________" as Address,
    },
  },
  [BLOCKCHAINS[ChainSlugs.POLYGON_MAINNET].chainIdHex]: {
    LootboxCosmicFactory: {
      address: "____________" as Address,
      slug: ContractSlugs.LootboxCosmicFactory,
      lootboxDAO: "____________" as Address,
      whitelister: "____________" as Address,
    },
    /** @deprecated */
    LootboxInstantFactory: {
      address: "_________________________________" as Address,
      slug: ContractSlugs.LootboxInstantFactory,
      bulkMinterSuperStaff: "_________________________________" as Address,
    },
    /** @deprecated */
    LootboxEscrowFactory: {
      address: "_________________________________" as Address,
      slug: ContractSlugs.LootboxEscrowFactory,
      bulkMinterSuperStaff: "_________________________________" as Address,
    },
    /** @deprecated */
    PartyBasketFactory: {
      address: "_________________________________" as Address,
      slug: ContractSlugs.PartyBasketFactory,
      whitelister: "_________________________________" as Address,
    },
  },
};

export const snapshot: GlobalMainfest_v0_7_4_prod = {
  alias: "0.7.4-prod",
  description: `
  Post web3 festival PH Quick Wins
  `,
  chains: [
    {
      ...BLOCKCHAINS[ChainSlugs.BSC_MAINNET],
    },
    {
      ...BLOCKCHAINS[ChainSlugs.POLYGON_MAINNET],
    },
  ],
  date: new Date("Thu Dec 01 2022 19:09:06 GMT+0700 (Indochina Time)"),
  semver: {
    major: 0,
    minor: 7,
    patch: 4,
    prerelease: ["prod"],
    build: [],
    id: "0.7.4-prod",
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
      [BLOCKCHAINS[ChainSlugs.BSC_MAINNET].chainIdHex]: {
        onCreateLootboxCosmic: {
          id: "______" as OZSentinelID,
          alias: `[${OPEN_ZEPPELIN_SEMVER}] Cosmic Lootbox onCreate`,
          semver: OPEN_ZEPPELIN_SEMVER, // NOT USED
          slug: OZSentinelSlugs.onCreateLootboxCosmic, // NOT USED
          ozChainSlug: OZChainSlugs.BSC_MAINNET,
          contractWatchAddress:
            contracts[BLOCKCHAINS[ChainSlugs.BSC_MAINNET].chainIdHex]
              .LootboxCosmicFactory.address,
        },
      },
      [BLOCKCHAINS[ChainSlugs.POLYGON_MAINNET].chainIdHex]: {
        onCreateLootboxCosmic: {
          id: "______" as OZSentinelID,
          alias: `[${OPEN_ZEPPELIN_SEMVER}] Cosmic Lootbox onCreate`,
          semver: OPEN_ZEPPELIN_SEMVER, // NOT USED
          slug: OZSentinelSlugs.onCreateLootboxCosmic, // NOT USED
          ozChainSlug: OZChainSlugs.POLYGON_MAINNET,
          contractWatchAddress:
            contracts[BLOCKCHAINS[ChainSlugs.POLYGON_MAINNET].chainIdHex]
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
  cloudRun: {
    alias: "string",
    semver: "0.7.4-prod",
    containers: {
      stampNewLootbox: {
        slug: CloudRunContainerSlugs.stampNewLootbox,
        fullRoute:
          "https://stamp-nft-0-7-1-prod-____________.a.run.app/stamp/new/lootbox",
      },
      stampNewTicket: {
        slug: CloudRunContainerSlugs.stampNewTicket,
        fullRoute:
          "https://stamp-nft-0-7-1-prod-____________.a.run.app/stamp/new/ticket",
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
    region: GoogleCloudRegion.asiaSouthEast1,
    alias: "0.7.4-prod", // TODO remove this!
    projectID: "____________",
    semver: "0.7.4-prod", // TODO remove this!
  },
  storage: {
    downloadUrl: "https://storage.googleapis.com",
    buckets: {
      abi: {
        id: "lootbox-abi-prod",
      },
      stamp: {
        id: "lootbox-stamp-prod",
      },
      data: { id: "lootbox-data-prod" },
      constants: { id: "lootbox-constants-prod" },
      widgets: { id: "lootbox-widgets-prod" },
      pixel: {
        id: "lootbox-pixel-prod-____________",
        accessUrl: "https://track.lootbox.fund",
        files: {
          adTrackingPixel: "pixel.png",
        },
      },
      redirectPage: {
        id: "lootbox-pixel-prod-____________",
        accessUrl: "https://redirect.lootbox.fund",
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
        version: 2,
      },
      {
        name: "OZ_DEFENDER_API_SECRET",
        version: 2,
      },
      {
        name: "PD_ABI_UPLOADER_SECRET",
        version: 1,
      },
      {
        name: "JWT_ON_CREATE_LOOTBOX",
        version: 1,
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
    alias: "0.7.4-prod",
    semver: "0.7.4-prod",
    widgets: {
      fundraiserPage: {
        alias: "fundraiserPage",
        semver: "0.7.4-prod",
        slug: WidgetSlugs.fundraiserPage,
      },
      createLootbox: {
        alias: "createLootbox",
        semver: "0.7.4-prod",
        slug: WidgetSlugs.createLootbox,
      },
      manageLootbox: {
        alias: "manageLootbox",
        semver: "0.7.4-prod",
        slug: WidgetSlugs.manageLootbox,
      },
    },
    webflow: {
      alias: "0.7.4-prod",
      semver: "0.7.4-prod",
      email: "____________",
      lootboxUrl: "https://www.lootbox.fund/buy",
      createPage: "https://www.lootbox.fund/create",
      managePage: "https://www.lootbox.fund/manage",
      authPage: "https://www.lootbox.fund/auth",
      myProfilePage: "https://go.lootbox.fund/profile",
      tournamentManagePage: "https://www.lootbox.fund/tournament/manage",
      tournamentCreatePage: "https://www.lootbox.fund/tournament/create",
      tournamentPublicPage: "https://www.lootbox.fund/tournament",
      /** Not in use atm */
      myFundraisersPage:
        "https://www.lootbox.fund/prod/0-7-0-prod/my-fundraisers",
      /** Not in use atm */
      myCollectionsPage:
        "https://www.lootbox.fund/prod/0-7-0-prod/my-collections",
      battleFeed: "https://www.lootbox.fund/battle-feed",
      basketRedeemPage: "https://www.lootbox.fund/basket/redeem",
      basketManagePage: "https://www.lootbox.fund/basket/manage",
      lootboxFeed: "https://www.lootbox.fund/lootbox-feed",
      battlePage: "https://www.lootbox.fund/watch",
      referral: "https://go.lootbox.fund",
      publicProfile: "https://go.lootbox.fund/user",
      cosmicLootboxPage: "https://go.lootbox.fund/earn",
      anonSignup: "https://go.lootbox.fund/onboard",
      logout: "https://go.lootbox.fund/logout",
      landingPage: "https://www.lootbox.fund",
      myTickets: "https://go.lootbox.fund/my-tickets",
    },
    dashboard: {
      promoter: "https://host.lootbox.fund",
      advertiser: "https://marketing.lootbox.fund",
    },
  },
  lootbox: {
    alias: "0.7.4-prod",
    semver: "0.7.4-prod",
    contracts: {
      ...contracts,
    },
  },
  cloudFunctions: {
    region: "asia-southeast1",
    pubsubPixelTracking: {
      topic: "pixel-tracking",
    },
    pubsubClickRedirectTracking: {
      topic: "click-redirect",
    },
    pubsubBillableActivationEvent: {
      topic: "memo-billable-activation",
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
  sendgrid: {
    emailTemplates: {
      lootboxDeposit: {
        id: "____________",
      },
    },
  },
  bigQuery: {
    datasets: {
      firestoreExport: {
        location: "asia-southeast1",
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
};

export default snapshot;
