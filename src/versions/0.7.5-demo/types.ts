import { Address, ChainIDHex, Url, ChainInfo } from "@wormgraph/helpers";
import {
  BucketType,
  SemanticVersion,
  SecretName,
  SecretVersion,
  BucketId,
} from "../../types";

type StorageDownloadUrl = "https://storage.googleapis.com";

interface BaseSemver {
  major: number;
  minor: number;
  patch: number;
  prerelease: string[];
  build: string[];
  id: SemanticVersion;
}

type LootboxManifestSemver = string;

interface LootboxChainContracts {
  [ContractSlugs.LootboxCosmicFactory]: LootboxFactory;
}

export type LootboxContracts = Record<ChainIDHex, LootboxChainContracts>;

interface Lootbox {
  alias: string;
  semver: LootboxManifestSemver;
  contracts: LootboxContracts;
}

export enum ContractSlugs {
  LootboxCosmicFactory = "LootboxCosmicFactory",
}

export enum OZContractSlugs {
  LootboxCosmicFactory = "LootboxCosmicFactory",
}

type ContractSlug = ContractSlugs;
interface Contract {
  address: Address;
  slug: Partial<ContractSlug>;
}

interface LootboxFactory extends Contract {
  lootboxDAO: Address;
  whitelister: Address;
}

export enum CloudRunContainerSlugs {
  /** @deprecated this is the old design.... */
  stampNewLootbox = "stampNewLootbox",
  /** @deprecated this is the old design... @todo implement the updated ticket designs */
  stampNewTicket = "stampNewTicket",
  lootboxServer = "lootboxServer",
  activationIngestor = "activationIngestor",
  simpleLootboxStamp = "simpleLootboxStamp",
  inviteStamp = "inviteStamp",
  victoryStamp = "victoryStamp",
  lossStamp = "lossStamp",
}
type CloudRunContainerSlug = CloudRunContainerSlugs;
interface CloudRun {
  alias: string;
  semver: SemanticVersion;
  containers: Record<CloudRunContainerSlug, CloudRunContainer>;
}
interface CloudRunContainer {
  slug: CloudRunContainerSlug;
  fullRoute: Url;
}

export enum GoogleCloudRegion {
  usCentral1 = "us-central1",
  asiaSouthEast1 = "asia-southeast1",
}
interface GoogleCloud {
  alias: string;
  projectID: string;
  semver: SemanticVersion;
  region: GoogleCloudRegion;
}

type MicrofrontendsSemver = string;
interface Microfrontends {
  alias: string;
  semver: MicrofrontendsSemver;
  widgets: Record<WidgetSlug, Widget>;
  webflow: Webflow;
  dashboard: {
    promoter: string;
    advertiser: string;
    playerOnboard: string;
    hostPowerCasual: string;
  };
}

export enum WidgetSlugs {
  fundraiserPage = "fundraiserPage",
  createLootbox = "createLootbox",
  manageLootbox = "manageLootbox",
}
type WidgetSlug = WidgetSlugs;
type WidgetSemver = string;
interface Widget {
  alias: string;
  semver: WidgetSemver;
  slug: WidgetSlug;
}

type WebflowSemver = string;
interface Webflow {
  alias: string;
  semver: WebflowSemver;
  email: string;
  authPage: string;
  myProfilePage: string;
  battleFeed: string;
  lootboxFeed: string;
  referral: string;
  anonSignup: string;
  publicProfile: string;
  cosmicLootboxPage: string;
  logout: string;
  landingPage: string;
  myTickets: string;
}

interface SecretManagerSecret {
  name: SecretName;
  version: SecretVersion;
}
interface SecretManager {
  secrets: SecretManagerSecret[];
}

interface Bucket {
  id: BucketId;
}

interface PixelBucket extends Bucket {
  /** I.e. url to load balancer for pixel.png */
  accessUrl: string;
  files: {
    /** i.e. pixel.png */
    adTrackingPixel: string;
  };
}
interface RedirectPageBucket extends Bucket {
  accessUrl: string;
  files: {
    page: string;
  };
}
interface Storage {
  downloadUrl: StorageDownloadUrl;
  buckets: Omit<Record<BucketType, Bucket>, "assets" | "pixel"> & {
    pixel: PixelBucket;
    redirectPage: RedirectPageBucket;
  };
}

interface Firebase {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: BucketId;
  messagingSenderId: string;
  appId: string;
}

type CloudFunctionRegion = "us-central1" | "asia-southeast1";

interface CloudFunctions {
  region: CloudFunctionRegion;
  pubsubPixelTracking: {
    topic: string;
  };
  pubsubClickRedirectTracking: {
    topic: string;
  };
  pubsubBillableActivationEvent: {
    topic: string;
  };
}

export type EmailTemplateSlug = "lootboxDeposit";

interface SendgridEmailTemplate {
  id: string;
}

export interface Sendgrid {
  emailTemplates: Record<EmailTemplateSlug, SendgridEmailTemplate>;
}

export interface BigQueryTable {
  /** id like: `____________.firestore_export.claim_schema_claim_schema_latest` */
  id: string;
  // /** location like: "US" */
  // location: string;
}

export interface BigQueryTables {
  claim: BigQueryTable;
  lootbox: BigQueryTable;
  lootboxSnapshot: BigQueryTable;
  user: BigQueryTable;
  activation: BigQueryTable;
  adEvent: BigQueryTable;
  flight: BigQueryTable;
  claimPrivacy: BigQueryTable;
  questionAnswer: BigQueryTable;
  offer: BigQueryTable;
  tournament: BigQueryTable;
}

export interface BigQuery {
  datasets: {
    firestoreExport: {
      tables: BigQueryTables;
      /** location like: "US" */
      location: string;
    };
  };
}

export interface GlobalMainfest_v0_7_5_demo {
  alias: string;
  date: Date;
  description: string;
  chains: ChainInfo[];
  semver: BaseSemver;
  firebase: Firebase;
  googleCloud: GoogleCloud;
  cloudRun: CloudRun;
  microfrontends: Microfrontends;
  secretManager: SecretManager;
  lootbox: Lootbox;
  storage: Storage;
  cloudFunctions: CloudFunctions;
  sendgrid: Sendgrid;
  bigQuery: BigQuery;
}
