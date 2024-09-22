const nextConfig = {
  pageExtensions: ['ts', 'tsx'],
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      oneOf: [
        {
          resourceQuery: /raw/,
          use: ['raw-loader'],
        },
        {
          use: ['url-loader'],
        },
      ],
    })

    config.module.rules.push({
      test: /\.tsx$/,
      resourceQuery: /raw/, 
      use: ['raw-loader'],
    })
    return config
  },
}

export default nextConfig
