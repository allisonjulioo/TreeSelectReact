import { action } from 'typesafe-actions';
import { TNodes } from './types';

export const list = () => action(TNodes.GET);
