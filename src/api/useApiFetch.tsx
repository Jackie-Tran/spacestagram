import axios from 'axios';
import { useEffect, useState } from 'react';

export type ApiFetchParams = {
  query: string;
  params?: Record<string, any>;
  payload?: Record<string, string>;
  responseTransformer?: (_res: any) => Record<string, any>;
};

export type ApiFetchResponse = {
  status: string;
  data: any;
};

type QueryStatus = 'LOADING' | 'FAIL' | 'SUCCESS';

const identityTransformer = (res: any) => res;

const buildQuery = (endpoint: string, params: Record<string, any>): string => {
  let paramString = `?api_key=${process.env.REACT_APP_NASA_API_KEY}`;
  Object.entries(params).forEach(([key, value]) => {
    paramString += `&${key}=${value}`;
  });
  return endpoint + paramString;
};

export const useApiFetch = ({
  query,
  params = {},
  payload = {},
  responseTransformer = identityTransformer,
}: ApiFetchParams): ApiFetchResponse => {
  const [status, setStatus] = useState<QueryStatus>('LOADING');
  const [data, setData] = useState<Record<string, any>>();

  useEffect(() => {
    const newEndpoint = buildQuery(query, params);
    const fetchData = async () => {
      try {
        const res = await axios.get(newEndpoint, payload);
        setData(responseTransformer(res));
        setStatus('SUCCESS');
      } catch (error) {
        setStatus('FAIL');
      }
    };
    fetchData();
  }, []);

  return { status, data };
};
