import {
  Address,
  ChainIDHex,
  ContractAddress,
  Url,
  ChainInfo,
} from "@wormgraph/helpers";
import {
  OZChainSlugs,
  BucketType,
  SemanticVersion,
  SecretName,
  SecretVersion,
  OZSecretName,
  BucketId,
} from "../../types";

type RepoSemver = string;
type DeployedSemver = string;
type ContractGroupSemver = string;
type StorageDownloadUrl = "https://storage.googleapis.com";

interface BaseSemver {
  major: number;
  minor: number;
  patch: number;
  prerelease: string[];
  build: string[];
  id: SemanticVersion;
}

interface OZSecret {
  name: OZSecretName;
}

// type OZChainMultiSigs = Record<MultiSigSlug, MultiSig>;

type OZChainContracts = Record<OZContractSlugs, Contract>;

type OZChainSentinels = Record<OZSentinelSlug, OZSentinel>;

type OpenZeppelinSemver = string;
interface OpenZeppelin {
  alias: string;
  // multiSigs: Record<ChainIDHex, OZChainMultiSigs>;
  contracts: Record<ChainIDHex, OZChainContracts>;
  autoTasks: Record<OZAutoTaskSlug, OZAutoTask>;
  sentinels: Record<ChainIDHex, OZChainSentinels>;
  semver: OpenZeppelinSemver;
  secrets: OZSecret[];
}

// export enum MultiSigSlugs {
//   LootboxDAO = "LootboxDAO",
//   LootboxDAO_Treasury = "LootboxDAO_Treasury",
// }
// type MultiSigSlug = MultiSigSlugs;
// interface MultiSig {
//   alias: string;
//   address: Address;
//   signers: Address[];
//   chainHexID: ChainIDHex;
//   threshold: number;
//   slug: MultiSigSlug;
// }

export enum OZTeammemberSlugs {
  Oxterran = "Oxterran",
  Oxnewton = "Oxnewton",
}

type Role = "founder" | "staff" | "engineer";

export type OZAutoTaskID = string & { readonly _: unique symbol };
export enum OZAutoTaskSlugs {
  onCreateLootboxCosmic = "onCreateLootboxCosmic",
}
type OZAutoTaskSlug = OZAutoTaskSlugs;
interface OZAutoTask {
  id: OZAutoTaskID;
  alias: string;
  semver: RepoSemver;
  slug: OZAutoTaskSlug;
  // webhookEndpoint: Url;
}

export type OZSentinelID = string & { readonly _: unique symbol };
export enum OZSentinelSlugs {
  onCreateLootboxCosmic = "onCreateLootboxCosmic",
}
type OZSentinelSlug = OZSentinelSlugs;
interface OZSentinel {
  id: OZSentinelID;
  alias: string;
  semver: RepoSemver;
  slug: OZSentinelSlug;
  ozChainSlug: OZChainSlugs;
  contractWatchAddress: Address;
}

type LootboxManifestSemver = string;

interface LootboxChainContracts {
  [ContractSlugs.LootboxCosmicFactory]: LootboxFactory;
  [ContractSlugs.LootboxEscrowFactory]: LootboxEscrowFactory;
  [ContractSlugs.LootboxInstantFactory]: LootboxEscrowFactory;
  [ContractSlugs.PartyBasketFactory]: PartyBasketFactory;
}

export type LootboxContracts = Record<ChainIDHex, LootboxChainContracts>;

interface Lootbox {
  alias: string;
  semver: LootboxManifestSemver;
  contracts: LootboxContracts;
}

export enum ContractSlugs {
  LootboxCosmicFactory = "LootboxCosmicFactory",
  LootboxInstantFactory = "LootboxInstantFactory",
  LootboxEscrowFactory = "LootboxEscrowFactory",
  PartyBasketFactory = "PartyBasketFactory",
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

interface LootboxEscrowFactory extends Contract {
  bulkMinterSuperStaff: Address;
}

interface PartyBasketFactory extends Contract {
  whitelister: Address;
}

type PipedreamSemver = string;
interface Pipedream {
  alias: string;
  semver: PipedreamSemver;
  email: string;
  sources: Record<PipedreamSourceSlug, PipedreamSource>;
  actions: Record<PipedreamActionSlug, PipedreamAction>;
}

export enum PipedreamSourceSlugs {
  onCreateLootboxCosmic = "onCreateLootboxCosmic",
}
export type PipedreamSourceID = string & { readonly _: unique symbol };
type PipedreamSourceSlug = PipedreamSourceSlugs;

interface PipedreamSource {
  alias: string;
  pipedreamID: PipedreamSourceID;
  semver: DeployedSemver;
  // slug: PipedreamSourceSlug;
  slug: string;
  webhookEndpoint: Url;
}

export enum PipedreamActionSlugs {
  onCreateLootboxCosmic = "onCreateLootboxCosmic",
}
type PipedreamActionSlug = PipedreamActionSlugs;
export type PipedreamActionID = string & { readonly _: unique symbol };
interface PipedreamAction {
  alias: string;
  pipedreamID: PipedreamActionID;
  pipedreamSemver: DeployedSemver;
  // slug: PipedreamActionSlug;
  slug: string;
}

export type PipedreamWorkflowID = string & { readonly _: unique symbol };

export enum CloudRunContainerSlugs {
  stampNewLootbox = "stampNewLootbox",
  stampNewTicket = "stampNewTicket",
  lootboxServer = "lootboxServer",
  activationIngestor = "activationIngestor",
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
  /** @deprecated */
  lootboxUrl: string;
  createPage: string;
  /** @deprecated */
  managePage: string;
  myFundraisersPage: string;
  myCollectionsPage: string;
  tournamentCreatePage: string;
  tournamentManagePage: string;
  tournamentPublicPage: string;
  authPage: string;
  myProfilePage: string;
  battleFeed: string;
  /** @deprecated */
  basketRedeemPage: string;
  /** @deprecated */
  basketManagePage: string;
  lootboxFeed: string;
  battlePage: string;
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

export interface GlobalMainfest_v0_7_4_prod {
  alias: string;
  date: Date;
  description: string;
  chains: ChainInfo[];
  semver: BaseSemver;
  openZeppelin: OpenZeppelin;
  pipedream: Pipedream;
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
