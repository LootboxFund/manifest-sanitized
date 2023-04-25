/**
 * This file is NOT for storing secrets. Only store secret "names" used in gcp secret manager.
 */

/** Secrets in GCP secret manager (GSM)*/
export type SecretName =
  | "OZ_DEFENDER_API_KEY"
  | "OZ_DEFENDER_API_SECRET"
  | "PD_ABI_UPLOADER_SECRET"
  | "JWT_ON_CREATE_LOOTBOX"
  | "STAMP_SECRET"
  | "PARTY_BASKET_WHITELISTER_PRIVATE_KEY"
  | "SENDGRID_DEPOSIT_EMAIL_API_KEY";

/** Versions for GSM secrets*/
export type SecretVersion = number | string;

/** Secrets in Openzepellin Defender Autotasks */
export type OZSecretName = "JWT_ON_CREATE_LOOTBOX";
