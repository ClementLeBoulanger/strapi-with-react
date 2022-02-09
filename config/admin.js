module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'f252dd0102acc14782e099af601c1773'),
  },
});
