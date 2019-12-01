const cssLoaderConfig = require('@zeit/next-css/css-loader-config')
const defaultGetLocalIdent = require('css-loader/lib/getLocalIdent');
const withTypescript = require('next-with-typescript')
const withSass = require('@zeit/next-sass')
const withImages = require('next-images')
module.exports = withTypescript(withSass(withImages({
    cssModules: true,
    cssLoaderOptions: {
      importLoaders: 2,
      localIdentName: '[local]___[hash:base64:5]',
    },
    webpack: config => {
      config.module.rules.forEach(rule => {
        if (rule.test.toString().includes('.scss')) {
          rule.rules = rule.use.map(useRule => {
            if (typeof useRule === 'string') {
              return { loader: useRule };
            }
  
            if (useRule.loader.startsWith('css-loader')) {
              return {
                oneOf: [
                  {
                    test: new RegExp('.global.scss$'),
                    loader: useRule.loader,
                    options: { ...useRule.options, modules: false },
                  },
                  {
                    loader: useRule.loader,
                    options: useRule.options,
                  },
                ],
              };
            }
  
            return useRule;
          });
  
          delete rule.use;
        }
      });
      return config;
    },
  }


    /*
    {
        cssModules: true,
        cssLoaderOptions: {
            getLocalIdent: (loaderContext, localIdentName, localName, options) => {
                if (loaderContext.resourcePath.includes('node_modules')) {
                  return localName
                } else {
                  return defaultGetLocalIdent(loaderContext, localIdentName, localName, options);
                }
              }
        },
        sassLoaderOptions: {
            includePaths: ["node_modules", "./node_modules"],
        },
    }
    */

    /*
    {
    webpack(config, options) {

        const { dev, isServer } = options
        const {
            cssModules,
            cssLoaderOptions,
            postcssLoaderOptions,
            sassLoaderOptions = {}
        } = config
        
        config.module.rules.push({
            oneOf: [
                {
                test: /\.module.scss$/,
                use: cssLoaderConfig(config, {
                extensions: ['scss', 'sass'],
                cssModules,
                cssLoaderOptions,
                postcssLoaderOptions,
                dev,
                isServer,
                loaders: [
                    { 
                        loader: 'sass-loader',
                        options: sassLoaderOptions
                    }
                ]
                })
                },
                {
                    test: /\.global.scss$/,
                    use: cssLoaderConfig(config, {
                        extensions: ['scss', 'sass'],
                        cssModules,
                        cssLoaderOptions,
                        postcssLoaderOptions,
                        dev,
                        isServer,
                        loaders: [
                            {
                                loader: 'sass-loader',
                                options: sassLoaderOptions
                            }
                        ]
                    })
                }
            ]
            
        })
        
        return config
      }
    }
    */
    

)))