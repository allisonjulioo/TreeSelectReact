import axios, { AxiosInstance } from 'axios';
import { Constants } from '../../constants';

export class NodeService extends Constants {
  public api: AxiosInstance = axios.create({
    baseURL: this.base_url,
  });
}
