import { RequestErrorMessage } from '../../constants/errorMessage';

export type RequestError = {
  data: string;
  error: string;
  originalStatus: number;
  status: string;
}
