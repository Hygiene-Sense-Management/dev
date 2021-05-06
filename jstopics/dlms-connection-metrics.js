hmLoadTopic({
hmKeywords:"",
hmTitle:"Connection metrics",
hmDescription:"The results of monitoring the data links between BLE-networked devices and monitoring the data links between stationary gateways and the the HsM Backend are processed by the...",
hmPrevLink:"dlms-monitoring-gateway-devices.html",
hmNextLink:"dlms-data-link-status.html",
hmParentLink:"dlms.html",
hmBreadCrumbs:"<a href=\"backend-infrastructure.html\">Backend infrastructure<\/a> &gt; <a href=\"dlms.html\">Data Link Monitoring Service<\/a>",
hmTitlePath:"Backend infrastructure > Data Link Monitoring Service > Connection metrics",
hmHeader:"<h1 class=\"p_Heading1\"><span class=\"f_Heading1\">Connection metrics<\/span><\/h1>\n\r",
hmBody:"<p class=\"p_Normal\">The results of <a href=\"dlms-monitoring-nongateway-devices.html\" class=\"topiclink\">monitoring<\/a> the data links between BLE-networked devices and <a href=\"dlms-monitoring-gateway-devices.html\" class=\"topiclink\">monitoring<\/a> the data links between stationary gateways and the the HsM Backend are processed by the Data Link Monitoring Service into metrics that allow the consumer of this service to assess the current status of data links and the robustness of data links over time. <\/p>\n\r<p class=\"p_Normal\">The Data Link Monitoring Service itself records the current status of the connection of each known device and keeps a historical record of the network topology, i.e. which BLE-networked device was connected to what stationary gateway over time. The current status of the data links between devices and the HsM Backend as well as some other parameters indicating the quality of the connection are fed into the primary data processing as <a href=\"dlms-generated-resource-instance-values.html\" class=\"topiclink\">resource instance values<\/a> and are therefore further processed and published with the Client Service and Data Analysis Service.<\/p>\n\r"
})
