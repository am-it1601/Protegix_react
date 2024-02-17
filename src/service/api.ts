import axiosInstance from './axiosInstance';
import { globalErrorHandler } from './globalErrorHandler';

export const fetchData = async () => globalErrorHandler(() => axiosInstance.get(''));

export const addNewNote = async (note: any) =>
  globalErrorHandler(() => axiosInstance.post('', note), 'Note added successfully');
