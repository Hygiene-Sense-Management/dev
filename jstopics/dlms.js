hmLoadTopic({
hmKeywords:"",
hmTitle:"Data Link Monitoring Service",
hmDescription:"HsM stationary gateways are used to connect BLE-networked devices to the HsM Backend permanently and therefore enable a near-real-time up-link communication (from devices to...",
hmPrevLink:"data-series-source.html",
hmNextLink:"dlms-monitoring-nongateway-devices.html",
hmParentLink:"backend-infrastructure.html",
hmBreadCrumbs:"<a href=\"backend-infrastructure.html\">Backend infrastructure<\/a>",
hmTitlePath:"Backend infrastructure > Data Link Monitoring Service",
hmHeader:"<h1 class=\"p_Heading1\"><span class=\"f_Heading1\">Data Link Monitoring Service<\/span><\/h1>\n\r",
hmBody:"<p class=\"p_Normal\">HsM stationary gateways are used to connect BLE-networked devices to the HsM Backend permanently and therefore enable a near-real-time up-link communication (from devices to the HsM Backend) and near real-time down-link &nbsp;communication (from the HsM Backend to devices). This communication is realized via messages from or to Azure IoT hub.<\/p>\n\r<p class=\"p_Normal\">BLE-networked devices communicate data via BLE messages to or from stationary gateways. These gateways in turn use MQTT, MQTT over WebSockets, AMQP, AMQP over WebSockets or HTTPS to relay this data to or from the HsM Backend via the Internet. While this communication sequence usually is very stable things can still go wrong due to many reasons; BLE connections can break, the Internet of the stationary gateway connection may be down, devices may run out of energy, stationary gateways may be down etc.<\/p>\n\r<p class=\"p_Normal\">The Data Link Monitoring Service continuously monitors and analyzes the data-links and therefore provides information about the data-link status of devices (both stationary gateways, and BLE-networked devices) as well as information for a historical analysis of data-link quality. <\/p>\n\r<p class=\"p_Normal\">As the Data Link Monitoring Service keeps track of the connections between stationary gateways and BLE-networked devices it also builds up information about the network topology of HsM devices.<\/p>\n\r"
})
