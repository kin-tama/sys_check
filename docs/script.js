var parser = new UAParser();


var browser = parser.getBrowser();
var cpu = parser.getCPU();
var os = parser.getOS();
var device = parser.getDevice();
var engine = parser.getEngine();
var width = window.screen.width;
var height = window.screen.height;
var depth = window.screen.colorDepth;
var orientation = window.screen.orientation;
var viewportHeight = window.visualViewport.height
var viewportWidth = window.visualViewport.width

var tabCPU = document.getElementById('cpu');
var tabOS = document.getElementById('os');
var tabDevice = document.getElementById('dev');
var tabBrowser = document.getElementById('browser');
var tabWidth = document.getElementById('width');
var tabHeight = document.getElementById('heigth');
var tabOrientation = document.getElementById('orientation');
var tabDepth = document.getElementById('depth');
var tabAgent = document.getElementById('agent');
var main = document.getElementById('main');

tabCPU.textContent = cpu.architecture ? cpu.architecture : "unavailable";
tabOS.textContent = `${os.name}, version: ${os.version}`;
tabDevice.textContent = `type: ${device.type ?? 'unavailable'}, model: ${device.model ?? 'unavailable'}, vendor: ${device.vendor ?? 'unavailable'}`;
tabBrowser.textContent = `Name: ${browser.name ?? 'unavailable'}, major: ${browser.major ?? 'unavailable'}, version: ${browser.version ?? 'unavailable'}`;
tabWidth.textContent = `${width ?? 'unavailable'} pixels`;
tabHeight.textContent = `${height ?? 'unavailable'} pixels`;
tabOrientation.textContent = `${orientation.type ?? 'unavailable'}`;
tabDepth.textContent = `${depth ?? 'unavailable'} bit`;
tabAgent.textContent = window.navigator.userAgent;
main.style.width = viewportWidth;
main.style.height = viewportHeight;

if (window.navigator.userAgent.toLowerCase().indexOf('intel')) {
    tabCPU.textContent = 'Intel'
}

