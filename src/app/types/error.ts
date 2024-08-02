import { RequestErrorMessage } from '../../constants/errorMessage';

export type RequestError =
  | {
      data: {
        error: keyof typeof RequestErrorMessage;
        message: string;
      };
    }
  | {
      data: {
        errors: Record<string, string[]>;
        message: string;
      };
    };
