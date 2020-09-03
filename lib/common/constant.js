export const {
  CONN_STR,
  JWT_PRIVATE_KEY,
  JWT_PRIVATE_KEY_ID,
  JWT_ISSUER,
  B2C_TENANT_NAME,
  B2C_APPLICATION_ID,
  B2C_SIGNUP_POLICY,
  B2C_REDIRECT_URI,
  INVITATION_LINK,
} = process.env;

export const RECORD_CREATED = { message: 'Record Created!' };
export const RECORD_UPDATED = { message: 'Record Updated!' };
export const RECORD_DELETED = { message: 'Record Deleted!' };

export const DATE_OP = {
  ADD: 'add',
  SUBSCTRACT: 'sub',
};

export const TABLES = {
  TODO: 'Todo',
};

export const DEFAULT_PAGE_SIZE = 25;

export const FIELDS_TO_MASK = ['json'];
export const MASKING_TEXT = '[SANITIZED]';