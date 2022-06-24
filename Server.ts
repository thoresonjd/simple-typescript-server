import { App } from './App';

let server: any = new App().getApp();
let PORT: number = 2022;
server.listen(PORT, () => console.log(`apitest listening on port ${PORT}`));