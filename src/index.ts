import { AppDataSource } from './data-source';

AppDataSource.initialize()
  .then(() => console.log('Started!'))
  .catch((error) => console.log(error));
