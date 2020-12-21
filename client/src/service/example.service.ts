import axios, { AxiosPromise } from "axios";

import { ExamplesResponse } from "./interfaces";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

export const getExamples = (): AxiosPromise<ExamplesResponse> =>
  axios.get(`${BACKEND_URL}/examples`);
