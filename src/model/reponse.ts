export type CypErrorResponse = {
   url: string;
   status: number;
   statusText: string;
   code: string;
   message: string;
};
export type CypResponse<T> = {
   data?: T;
   error?: CypErrorResponse;
};