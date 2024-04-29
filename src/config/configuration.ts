import { join } from 'path';

/* -------------------------------------------- types ------------------------------------------- */

export interface IPackageJson {
  name: string;
  version: string;
  description: string;
  author: string;
  contact: {
    name: string;
    url: string;
    email: string;
  };
  license: string;
}

/* ------------------------------------ configuracion default ----------------------------------- */
export const configuration = () => {
  const locatePackagejson = process.cwd();
  let pm2 = false;
  if (locatePackagejson.includes('dist')) {
    pm2 = true;
  }

  return {
    packageJson: require(join(process.cwd(), pm2 ? '../package.json' : 'package.json')),
    port: parseInt(process.env.ENV_PORT, 10) || 8400,
    appMaxSize: process.env.ENV_FILE_MAX_SIZE || '100mb',
    debugServer: process.env.DEBUG_SERVER || 'false',
    showSwagger: process.env.ENV_SWAGGER_SHOW || 'false',
    appTagName: process.env.ENV_APP_NAME || null,

    dbMongoUrl: process.env.ENV_DATA_BASE_URL ?? null,

    microservices: {
      msLogsUrl: process.env.ENV_SERVICE_MS_LOGS ?? null,
      msShortlinkUrl: process.env.ENV_SERVICE_MS_SHORTLINK ?? null,
      msShortlinkApiUrl: process.env.ENV_SERVICE_MS_SHORTLINK_API ?? null,
      msFiles: {
        url: process.env.ENV_SERVICE_MS_FILES_URL ?? null,
        nas: process.env.ENV_SERVICE_MS_FILES_NAS ?? null,
        path: process.env.ENV_SERVICE_MS_FILES_PATH ?? null,
      },
      msPersonasUrl: process.env.ENV_SERVICE_MS_PERSONAS ?? null,
    },

    cors: process.env.ENV_CORS?.split(',') || ['https://jl2.test.mp.gob.bo'],
  };
};
