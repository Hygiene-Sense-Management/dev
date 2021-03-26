hmLoadTopic({
hmKeywords:"",
hmTitle:"Mobile gateway",
hmDescription:"The app can act as mobile gateway for BLE (Bluetooth low energy) enabled HsM devices. I.e. data received from devices via BLE is relayed to the HsM Backend.",
hmPrevLink:"frontends.html",
hmNextLink:"xiap.html",
hmParentLink:"frontends.html",
hmBreadCrumbs:"<a href=\"frontends.html\">Frontends<\/a>",
hmTitlePath:"Frontends > Mobile gateway",
hmHeader:"<h1 class=\"p_Heading1\"><span class=\"f_Heading1\">Mobile gateway<\/span><\/h1>\n\r",
hmBody:"<p class=\"p_Normal\">The app can act as <span class=\"f_Term\">mobile gateway<\/span> for BLE (Bluetooth low energy) enabled HsM devices. I.e. data received from devices via BLE is relayed to the HsM Backend.<\/p>\n\r<p class=\"p_Normal\">BLE enabled HsM actively sends a limited amount data of their resource instances via Bluetooth advertising and the apps can build up a BLE connection to the devices to read out all resource instance data.<\/p>\n\r<p class=\"p_Normal\">&nbsp;<\/p>\n\r<p class=\"p_Normal\">The app actively builds up connections to BLE devices nearby to query all resource instance values<\/p>\n\r<h1 class=\"p_Heading1\"><span class=\"f_Heading1\">BLE Beacons<\/span><\/h1>\n\r<p class=\"p_Normal\">All HsM devices act as Bluetooth Beacons sending out beacon packets every x seconds. These beacons are used to wake up the HsM apps on a smart phone. I.e. when the smart phone receives a beacon it knows which app to wake up. Once woken up the app will browse all devices nearby and read out all data. Waking up is performed only once every 15 minutes.<\/p>\n\r<h1 class=\"p_Heading1\"><span class=\"f_Heading1\">BLE Advertising<\/span><\/h1>\n\r<p class=\"p_Normal\">All HsM devices send out BLE Advertisement packets containing useful data for others to receive and process. The payload of the advertisement packets differs for different device types and is described in the catalog.<\/p>\n\r<h1 class=\"p_Heading1\"><span class=\"f_Heading1\">BLE Browsing<\/span><\/h1>\n\r<p class=\"p_Normal\">If the app is active it continuously scans the BLE environment for devices it can connect to (by receiving their advertisement data). It will try to connect to all devices (one after the other) and will enumerate the resource instance values. The same device will be browsed only once per 10 minutes.<\/p>\n\r"
})
