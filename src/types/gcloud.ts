import { SemanticVersion } from "../types";

export interface GCloud_Config {
  bucketName: string;
  prefixes: GBucketPrefixes;
  semver: SemanticVersion;
}

/** Buckets have a unique id */
export type BucketId = string;
/**
 * They also have an "internal" type
 * "abi" => bucket containing abis
 * "data" => bucket containing data about the lootbox as a json
 * "assets" => bucket containing lootbox ticket assets (pictures)
 * "stamp" => contains pictures for lootbox stamp
 */
export type BucketType =
  | "abi"
  | "data"
  | "assets"
  | "stamp"
  | "constants"
  | "widgets"
  | "pixel";
// | "affiliateFrontend";

export type GBucketPrefixes =
  | "tokens"
  | "crowdsales"
  | "guilds"
  | "abi"
  | "lootbox"
  | "lootbox-uri"
  | "nft-ticket-stamp";
export enum GBucketPrefixesEnum {
  "tokens" = "tokens",
  "crowdsales" = "crowdsales",
  "guilds" = "guilds",
  "abi" = "abi",
  "lootbox" = "lootbox",
  "lootbox-uri" = "lootbox-uri",
  "nft-ticket-stamp" = "nft-ticket-stamp",
}
