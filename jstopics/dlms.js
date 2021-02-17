hmLoadTopic({
hmKeywords:"",
hmTitle:"Data Link Monitoring Service",
hmDescription:"HsM stationary gateways are used to connect non-gateway devices to the HsM Backend permanently and therefore enable a near-real-time uplink communication (from devices to the...",
hmPrevLink:"administrators-guide_2.html",
hmNextLink:"dlms-presented-status.html",
hmParentLink:"backend-infrastructure.html",
hmBreadCrumbs:"<a href=\"backend-infrastructure.html\">Backend infrastructure<\/a>",
hmTitlePath:"Backend infrastructure > Data Link Monitoring Service",
hmHeader:"<h1 class=\"p_Heading1\"><span class=\"f_Heading1\">Data Link Monitoring Service<\/span><\/h1>\n\r",
hmBody:"<p class=\"p_Normal\">HsM stationary gateways are used to connect non-gateway devices to the HsM Backend permanently and therefore enable a near-real-time uplink communication (from devices to the HsM Backend) and near real-time downlink &nbsp;communication (from the HsM Backend to devices).<\/p>\n\r<p class=\"p_Normal\">When non-gateway devices are using stationary gateways to communicate with the HsM Backend, the devices do so by utilizing Bluetooth connections to gateways. These gateways in turn use MQTT over TCP to relay the data to or from the HsM Backend via the Internet. While this communication sequence usually is very stable things can still go wrong due to many reasons; Bluetooth connections can break, internet connection may be down, devices may run out of energy, stationary gateways may be down etc.<\/p>\n\r<p class=\"p_Normal\">HsM data link monitoring continuously analyzes the data links and therefore provides information about the data link status of devices (both gateway, and non-gateway devices) as well as information for a historical analysis of data link quality.<\/p>\n\r"
})
