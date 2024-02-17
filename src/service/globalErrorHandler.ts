import { toast } from 'react-toastify';

export const globalErrorHandler = async (requestFunction: any, successMessage?: any) => {
  try {
    const response = await requestFunction();
    successMessage && toast.success(successMessage);
    return response.data;
  } catch (error: any) {
    const statusCode = error?.response?.status;

    switch (statusCode) {
      case 401:
        toast.error('Unauthorized error: ' + error.message);
        break;
      case 404:
        toast.error(error.message);
        break;
      default:
        toast.error('Unhandled error: ' + error.message);
        break;
    }

    throw error;
  }
};
