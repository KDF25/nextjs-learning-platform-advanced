import {NextConfig} from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin({
  experimental: {
    createMessagesDeclaration: './messages/en.json'
  },
});

const config: NextConfig = {
    images: {
    domains: ["utfs.io", "nui4ea25hw.ufs.sh", "example.com"]
  }
};

export default withNextIntl(config);
