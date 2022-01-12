import axios from 'axios';
import { useEffect, useState } from 'react';

export type ApiFetchParams<DataType> = {
  query: string;
  params?: Record<string, any>;
  payload?: Record<string, string>;
  responseTransformer?: (_res: any) => DataType;
};

export type ApiFetchResponse<DataType> = {
  status: QueryStatus;
  data: DataType | undefined;
};

export type QueryStatus = 'LOADING' | 'FAIL' | 'SUCCESS';

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
  const [data, setData] = useState<DataType>();
  const [endpoint, setEndpoint] = useState<string>(buildQuery(query, params));

  useEffect(() => {
    setEndpoint(buildQuery(query, params));
  }, [params]);

  useEffect(() => {
    setStatus('LOADING');
    const fetchData = async () => {
      try {
        const res = await axios.get(endpoint, payload);
        setData(responseTransformer(res));
        setStatus('SUCCESS');
      } catch (error) {
        setStatus('FAIL');
        console.log(error);
      }
    };
    fetchData();
  }, [endpoint]);

  return { status, data };
}
