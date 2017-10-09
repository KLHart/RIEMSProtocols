cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
        "id": "cordova-plugin-statusbar.statusbar",
        "pluginId": "cordova-plugin-statusbar",
        "clobbers": [
            "window.StatusBar"
        ]
    },
    {
        "file": "plugins/cordova-plugin-inappbrowser/www/inappbrowser.js",
        "id": "cordova-plugin-inappbrowser.inappbrowser",
        "pluginId": "cordova-plugin-inappbrowser",
        "clobbers": [
            "cordova.InAppBrowser.open",
            "window.open"
        ]
    },
    {
        "file": "plugins/cordova-plugin-inappbrowser/src/browser/InAppBrowserProxy.js",
        "id": "cordova-plugin-inappbrowser.InAppBrowserProxy",
        "pluginId": "cordova-plugin-inappbrowser",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-document-viewer/www/sitewaertsdocumentviewer.js",
        "id": "cordova-plugin-document-viewer.SitewaertsDocumentViewer",
        "pluginId": "cordova-plugin-document-viewer",
        "clobbers": [
            "cordova.plugins.SitewaertsDocumentViewer",
            "SitewaertsDocumentViewer"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.2.2",
    "cordova-plugin-console": "1.0.7",
    "cordova-plugin-statusbar": "1.0.1",
    "cordova-plugin-inappbrowser": "1.7.1",
    "cordova-plugin-document-viewer": "0.9.3"
}
// BOTTOM OF METADATA
});