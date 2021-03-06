export const PULL_SECRET = Cypress.env('PULL_SECRET');
export const SSH_PUB_KEY = Cypress.env('SSH_PUB_KEY');
export const CLUSTER_NAME = Cypress.env('CLUSTER_NAME');
export const OPENSHIFT_VERSION = Cypress.env('OPENSHIFT_VERSION');
export const CYPRESS_CLUSTER_HOSTNAME_MASTER_PREFIX = Cypress.env('CLUSTER_HOSTNAME_MASTER_PREFIX');
export const CYPRESS_CLUSTER_HOSTNAME_WORKER_PREFIX = Cypress.env('CLUSTER_HOSTNAME_WORKER_PREFIX');
export const DNS_DOMAIN_NAME = Cypress.env('DNS_DOMAIN_NAME');
export const API_VIP = Cypress.env('API_VIP');
export const INGRESS_VIP = Cypress.env('INGRESS_VIP');
export const NETWORK_CIDR = Cypress.env('NETWORK_CIDR');
export const NETWORK_HOST_PREFIX = Cypress.env('NETWORK_HOST_PREFIX');
export const SERVICE_NETWORK_CIDR = Cypress.env('SERVICE_NETWORK_CIDR');
export const NUM_MASTERS = parseInt(Cypress.env('NUM_MASTERS'));
export const NUM_WORKERS = parseInt(Cypress.env('NUM_WORKERS'));
export const API_BASE_URL = Cypress.env('API_BASE_URL');
export const OCM_USER = Cypress.env('OCM_USER');
export const ISO_PATTERN = Cypress.env('ISO_PATTERN');
export const HTTP_PROXY = Cypress.env('HTTP_PROXY');
export const HTTPS_PROXY = Cypress.env('HTTPS_PROXY');
export const NO_PROXY = Cypress.env('NO_PROXY');
