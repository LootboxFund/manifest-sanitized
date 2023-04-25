import { Address, BLOCKCHAINS, ChainSlugs } from "@wormgraph/helpers";
import { OZChainSlugs } from "../../types/chains";
import {
  CloudRunContainerSlugs,
  WidgetSlugs,
  ContractSlugs,
  GlobalMainfest_v0_7_5_demo,
  LootboxContracts,
  GoogleCloudRegion,
} from "./types";

// Deployed Lootbox contracts
const contracts: LootboxContracts = {
  [BLOCKCHAINS[ChainSlugs.BSC_TESTNET].chainIdHex]: {
    LootboxCosmicFactory: {
      address: "____________" as Address,
      slug: ContractSlugs.LootboxCosmicFactory,
      lootboxDAO: "____________" as Address,
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
  },
};

export const snapshot: GlobalMainfest_v0_7_5_demo = {
  alias: "0.7.5-demo",
  description: `
    Cleaned manifest without Defender or Pipedream or Party Baskets
  `,
  chains: [
    {
      ...BLOCKCHAINS[ChainSlugs.BSC_TESTNET],
    },
    {
      ...BLOCKCHAINS[ChainSlugs.POLYGON_TESTNET],
    },
  ],
  date: new Date("Tue Dec 20 2022 19:30:45 GMT-0500 (Eastern Standard Time)"),
  semver: {
    major: 0,
    minor: 7,
    patch: 5,
    prerelease: ["demo"],
    build: [],
    id: "0.7.5-demo",
  },
  bigQuery: {
    datasets: {
      firestoreExport: {
        location: "US",
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
            id: `____________.firestore_export.question-answer_schema_question_answer_schema_latest`,
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
      authPage: "https://www.lootbox.fund/demo/0-7-2-demo/auth",
      myProfilePage: "https://staging.go.lootbox.fund/profile",
      battleFeed: "https://www.lootbox.fund/demo/0-7-2-demo/battle-feed",
      lootboxFeed: "https://www.lootbox.fund/demo/0-7-2-demo/lootbox-feed",
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
      playerOnboard: "https://staging.go.lootbox.fund/join",
      hostPowerCasual: "https://staging.go.lootbox.fund/host",
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
