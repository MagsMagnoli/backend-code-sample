export type ServerConfig = {
  port: number;
};

export function serverConfig(): ServerConfig {
  return {
    port: parseInt(process.env.SERVER_PORT ?? '3000'),
  };
}
