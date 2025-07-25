const serverBoot = require('./server/bootstrap')
const serverTear = require('./server/teardown')

exports.config = {
  output: './output',
  helpers: {
    Appium: {
      platform: 'Android',
      app: 'C:/Users/Deivid Fuzari/Downloads/appqazando/app-release.apk',
      host: 'localhost',
      port: 4723,
      path: '/',
      desiredCapabilities: {
        platformName: 'Android',
        automationName: 'UiAutomator2',
        appPackage: 'com.qazandoapp',
        appActivity: 'MainActivity',
        deviceName: 'Pixel',
        platformVersion: '9',
        // browserName: 'Chrome'
      }
    }
  },
  include: {
    I: './steps_file.js',
    login_page: './pages/login.page.js',
    home_page: './pages/home.page.js'
  },
  mocha: {},
  async bootstrap() {
    await serverBoot.start()
  },
  async teardown() {
    await serverTear.stop()
  },
  timeout: null,
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: ['./step_definitions/steps.js']
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    retryFailedStep: {
      enabled: true
    },
    retryTo: {
      enabled: true
    },
    eachElement: {
      enabled: true
    },
    pauseOnFail: {}
  },
  stepTimeout: 0,
  stepTimeoutOverride: [{
    pattern: 'wait.*',
    timeout: 0
  },
  {
    pattern: 'amOnPage',
    timeout: 0
  }
  ],
  tests: './steps/*_test.js',
  name: 'qazando-appium-codecept'
}