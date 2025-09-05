import { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';
import withPWA from 'next-pwa';

// i18n plugin
const withNextIntl = createNextIntlPlugin({
  experimental: {
    createMessagesDeclaration: './messages/en.json'
  },
});

// base config
const config = {
  images: {
    domains: ["utfs.io", "nui4ea25hw.ufs.sh", "example.com"]
  }
};

// combine plugins
export default withNextIntl(
  withPWA({
    dest: 'public',
    disable: false,
    register: true,
    skipWaiting: true,
  })(config) as NextConfig
);
