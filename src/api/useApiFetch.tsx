import axios from 'axios';
import { useEffect, useState } from 'react';

export type ApiFetchParams<DataType> = {
  query: string;
  params?: Record<string, any>;
  payload?: Record<string, string>;
  responseTransformer?: (_res: any) => DataType;
};

export type ApiFetchResponse<DataType> = {
  status: string;
  data: DataType | null;
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

export function useApiFetch<DataType>({
  query,
  params = {},
  payload = {},
  responseTransformer = identityTransformer,
}: ApiFetchParams<DataType>): ApiFetchResponse<DataType> {
  const [status, setStatus] = useState<QueryStatus>('LOADING');
  const [data, setData] = useState<DataType | null>(null);

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
}
