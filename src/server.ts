import { App } from './app';

const server: any = new App().getApp();
const PORT: number = 2022;
server.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
