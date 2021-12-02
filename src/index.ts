import { createConfig } from './config/index';
import { createContext } from './context';
import { createServeer } from './server';

async function main() {
  const config = createConfig();

  const context = createContext(config);

  const server = await createServeer(context);

  server.listen(config.server.port, () => {
    console.log(`Server started. port=${config.server.port}`);
  });
}

main();
