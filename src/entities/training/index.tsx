import { observable } from 'mobx';
import { ITraining } from './types';

export class TrainingStore {
  @observable trainings: any = [
    { type: 'Сноуборд', places: ['Новопеределкино', 'Крылатское'] },
    { type: 'Скейтборд', places: ['ЦСКА', 'Верднадского'] },
    { type: 'Батут', places: ['ЦСКА', 'AllPro'] },
  ];
}

export default new TrainingStore();
