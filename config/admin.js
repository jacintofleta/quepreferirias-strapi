module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '71ba64946368740ca38b9797ae5a0278'),
  },
});
