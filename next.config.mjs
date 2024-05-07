/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
      return [
        {
          source: '/',
          destination: '/search',
          permanent: true
        },
      ];
    },
    webpack(config) {
      config.module.rules.push({
        test: /\.svg$/i,
        rules: [
          {
            test: /\.svg$/,
            use: [
              {
                loader: '@svgr/webpack',
                options: {
                  icon: true,
                },
              },
            ],
          },
        ],
      });
  
      return config;
    },
  };

export default nextConfig;