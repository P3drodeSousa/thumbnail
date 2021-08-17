import chrome from "chrome-aws-lambda";

// const chromeExecPaths = {
//   win32: 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
//   linux: '/usr/bin/google-chrome',
//   darwin: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
// }

// const exePath = chromeExecPaths[process.platform]
const executablePath = await chromium.executablePath

export async function getOptions(isDev) {
  let options;

  if (isDev) {
    options = {
      args: [],
      executablePath: exePath,
      headless: true
    };
  } else {
    options = {
      args: chromium.args,
		executablePath,
		headless: chromium.headless,
		ignoreHTTPSErrors: true
    };
  }

  return options;
}
