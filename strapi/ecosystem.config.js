module.exports = {
  apps: [
    {
      name: "strapi",
      script: "npm",
      args: "start",
      watch: true, // automatically restart the server for file changes
      max_memory_restart: "450M",
      env: {
        NODE_ENV: "production",
        DATABASE_HOST: "localhost",
        DATABASE_PORT: "5432",
        DATABASE_NAME: "strapi",
        DATABASE_USERNAME: "nisan",
        DATABASE_PASSWORD: "528631",
      },
    },
  ],
};
