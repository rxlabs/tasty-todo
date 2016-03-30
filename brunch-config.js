exports.config = {
  npm: {
    styles: {
      'normalize.css': ['normalize.css']
    }
  },

  conventions: {
    ignored: [
      /[\\/]_/,
      /\.spec\.js$/
    ]
  },

  files: {
    javascripts: {
      joinTo: 'app.js'
    },
    stylesheets: {
      joinTo: 'app.css'
    }
  },

  server: {
    hostname: '0.0.0.0'
  },

  overrides: {
    production: {
      plugins: {
        postcss: {
          processors: [
            require('autoprefixer'),
            require('cssnano')
          ]
        }
      }
    }
  },

  plugins: {
    digest: {
      prependHost: {
        production: 'https://rxlabs.github.io/tasty-todo'
      },
      referenceFiles: /\.(css|html|js)$/
    },

    postcss: {
      processors: [
        require('autoprefixer')
      ]
    },

    sass: {
      options: {
        includePaths: ['node_modules']
      }
    },

    static: {
      processors: [
        require('html-brunch-static')({
          handlebars: {
            enableProcessor: true,
            helpers: {
              join (context, block) {
                return context.join(block.hash.delimiter)
              },
              updated_time () {
                return new Date().toISOString()
              }
            }
          }
        })
      ]
    }
  }
}
