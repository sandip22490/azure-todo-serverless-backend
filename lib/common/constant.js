export const {
  B2C_TENANT_NAME,
  B2C_APPLICATION_ID,
  B2C_SIGNUP_POLICY,
  DB_NAME,
  DB_USERNAME,
  DB_PASSWORD,
  DB_HOST,
  DB_INSTANCE,
} = process.env;

export const RECORD_CREATED = { message: 'Record Created!' };
export const RECORD_UPDATED = { message: 'Record Updated!' };
export const RECORD_DELETED = { message: 'Record Deleted!' };

export const DATE_OP = {
  ADD: 'add',
  SUBSCTRACT: 'sub',
};

export const DEFAULT_PAGE_SIZE = 25;

export const FIELDS_TO_MASK = ['json'];
export const MASKING_TEXT = '[SANITIZED]';
