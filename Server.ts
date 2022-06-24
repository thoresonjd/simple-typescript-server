import { App } from './App';

const server: any = new App().getApp();
const PORT: number = 2022;
server.listen(PORT, () => console.log(`apitest listening on port ${PORT}`));
