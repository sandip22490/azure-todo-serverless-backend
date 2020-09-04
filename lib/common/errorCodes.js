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
export const TASK_CREATE_FAILED = { 1101: 'Failed to create task' };
export const TASK_UPDATE_FAILED = { 1102: 'Failed to update task' };
export const TASK_DELETE_FAILED = { 1103: 'Failed to delete task' };
export const TASK_NOT_FOUND = { 1104: 'Unable to find task' };
