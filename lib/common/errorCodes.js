/* HTTP Status Codes */
export const OK = 200;
export const CREATED = 201;
export const REQUEST_FAILED = 400;
export const NOT_FOUND = 404;
export const REQUEST_CONFLICT = 409;

/* Generic Error Codes */
export const UNKNOWN_ERROR = { 9901: 'Unknown Error Occured' };
export const REQUEST_VALIDATION_FAILED = { 9902: 'Failed to to validate request' };

/* Todo Error Codes */
export const TODO_CREATE_FAILED = { 1101: 'Failed to create todo' };
export const TODO_UPDATE_FAILED = { 1102: 'Failed to update todo' };
export const TODO_DELETE_FAILED = { 1103: 'Failed to delete todo' };
export const TODO_NOT_FOUND = { 1104: 'Unable to find todo' };