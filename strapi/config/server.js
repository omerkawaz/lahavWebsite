module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  url: "https://lahavstendel.co.il/api",
  admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET", "21cf5309ebd69897734891ae430ba8f2"),
    },
  },
});
