import axios from 'axios';
import {
  API_SERVICE,
  GET_ENDPOINTS,
  TGetEndpoints,
} from '../constants/endpoints';

export const fetchData = async ({
  requestUrl,
}: {
  requestUrl: TGetEndpoints;
}) => {
  const url = GET_ENDPOINTS[requestUrl];

  const { data } = await axios.get(`${API_SERVICE}${url}`);

  return data;
};
