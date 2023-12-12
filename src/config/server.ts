import "dotenv/config";

export const dev = {
  app: {
    port: Number(process.env.PORT) || 8080,
  },
  db: {
    url: process.env.MONGODB_URL || 'mongodb://127.0.0.1:27017/e-commerce-db',
  },
};
