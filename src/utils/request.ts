import axios, { AxiosInstance, AxiosResponse, AxiosError, AxiosBasicCredentials, AxiosRequestConfig } from 'axios';
import AuthConfig from './types/authConfig';


class ApiRequest {
  private axiosInstance: AxiosInstance;

  constructor(baseURL: string, authConfig?: AuthConfig) {
    this.axiosInstance = axios.create({
      baseURL,
      timeout: 5000,
      ...this.getAuthConfig(authConfig),
    });
  }

  private getAuthConfig(authConfig?: AuthConfig): AxiosRequestConfig {
    if (!authConfig) {
      return {};
    }
    
    switch (authConfig.type) {
      case 'basic':
        return {
          auth: {
            username: authConfig.username!,
            password: authConfig.password!,
          } as AxiosBasicCredentials,
        };
      case 'token':
        return {
          headers: {
            'Authorization': `Bearer ${authConfig.token}`,
          },
        };
      default:
        return {};
    }
  }

  private handleResponse<T>(response: AxiosResponse<T>): T {
    return response.data;
  }

  private handleError(error: AxiosError): never {
    if (error.response) {
      console.log(error.response.data)
      throw new Error(`Erro ${error.response.status}: ${error.response.data}`);
    } else if (error.request) {
      throw new Error('Sem resposta do servidor');
    } else {
      throw new Error('Erro de configuração da requisição');
    }
  }

  public async get<T>(url: string, token: string, queryParams?: Record<string, any>): Promise<T> {
    try {
      const response = await this.axiosInstance.get<T>(url, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      return this.handleResponse(response);
    } catch (error) {
      this.handleError(error as AxiosError);
    }
  }

  public async post<T>(url: string, data?: any): Promise<T> {
    try {
      const response = await this.axiosInstance.post<T>(url, data);
      return this.handleResponse(response);
    } catch (error) {
      this.handleError(error as AxiosError);
    }
  }

  public async put<T>(url: string, data: any): Promise<T> {
    try {
      const response = await this.axiosInstance.put<T>(url, data);
      return this.handleResponse(response);
    } catch (error) {
      this.handleError(error as AxiosError);
    }
  }

  public async delete<T>(url: string): Promise<T> {
    try {
      const response = await this.axiosInstance.delete<T>(url);
      return this.handleResponse(response);
    } catch (error) {
      this.handleError(error as AxiosError);
    }
  }
}

export default ApiRequest;