import { Address, BLOCKCHAINS, ChainSlugs } from "@wormgraph/helpers";
import { OZChainSlugs } from "../../types/chains";
import {
  CloudRunContainerSlugs,
  ContractSlugs,
  GlobalMainfest_v0_7_5_prod,
  LootboxContracts,
  GoogleCloudRegion,
  WidgetSlugs,
} from "./types";

// Deployed Lootbox contracts
const contracts: LootboxContracts = {
  [BLOCKCHAINS[ChainSlugs.BSC_MAINNET].chainIdHex]: {
    LootboxCosmicFactory: {
      address: "____________" as Address,
      slug: ContractSlugs.LootboxCosmicFactory,
      lootboxDAO: "____________" as Address,
      whitelister: "____________" as Address,
    },
  },
  [BLOCKCHAINS[ChainSlugs.POLYGON_MAINNET].chainIdHex]: {
    LootboxCosmicFactory: {
      address: "____________" as Address,
      slug: ContractSlugs.LootboxCosmicFactory,
      lootboxDAO: "____________" as Address,
      whitelister: "____________" as Address,
    },
  },
};

export const snapshot: GlobalMainfest_v0_7_5_prod = {
  alias: "0.7.5-prod",
  description: `
    Cleaned manifest without Defender or Pipedream or Party Baskets
  `,
  chains: [
    {
      ...BLOCKCHAINS[ChainSlugs.BSC_MAINNET],
    },
    {
      ...BLOCKCHAINS[ChainSlugs.POLYGON_MAINNET],
    },
  ],
  date: new Date("Fri Dec 23 2022 15:59:04 GMT-0500 (Eastern Standard Time)"),
  semver: {
    major: 0,
    minor: 7,
    patch: 5,
    prerelease: ["prod"],
    build: [],
    id: "0.7.5-prod",
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
      // New stamp designs
      simpleLootboxStamp: {
        slug: CloudRunContainerSlugs.simpleLootboxStamp,
        fullRoute: "https://____________.run.app/stamp/new/simple",
      },
      inviteStamp: {
        slug: CloudRunContainerSlugs.inviteStamp,
        fullRoute: "https://____________.run.app/stamp/new/invite",
      },
      victoryStamp: {
        slug: CloudRunContainerSlugs.victoryStamp,
        fullRoute: "https://____________.run.app/stamp/new/victory",
      },
      lossStamp: {
        slug: CloudRunContainerSlugs.lossStamp,
        fullRoute: "https://____________.run.app/stamp/new/loss",
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
      authPage: "https://www.lootbox.fund/auth",
      myProfilePage: "https://go.lootbox.fund/profile",
      battleFeed: "https://www.lootbox.fund/battle-feed",
      lootboxFeed: "https://www.lootbox.fund/lootbox-feed",
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
      playerOnboard: "https://go.lootbox.fund/join",
      hostPowerCasual: "https://go.lootbox.fund/host",
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
          claimPrivacy: {
            id: `____________.firestore_export.claim_schema_claim_privacy_scope_schema_latest`,
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
          activation: {
            id: `____________.firestore_export.activation_schema_activation_schema_latest`,
          },
          adEvent: {
            id: `____________.firestore_export.ad_event_schema_ad_event_schema_latest`,
          },
          flight: {
            id: `____________.firestore_export.flight_schema_flight_schema_latest`,
          },
          questionAnswer: {
            id: `____________.firestore_export.question_answer_schema_question_answer_schema_latest`,
          },
          offer: {
            id: `____________.firestore_export.offer_schema_offer_schema_latest`,
          },
          tournament: {
            id: `____________.firestore_export.tournament_schema_tournament_schema_latest`,
          },
        },
      },
    },
  },
};

export default snapshot;
