hmLoadTopic({
hmKeywords:"",
hmTitle:"Monitoring stationary gateway devices",
hmDescription:"The Data Link Monitoring Service monitors the data link between stationary gateways and the HsM Backend based on heartbeat messages sent by stationary gateways.",
hmPrevLink:"dlms-monitoring-nongateway-devices.html",
hmNextLink:"dlms-connection-metrics.html",
hmParentLink:"dlms.html",
hmBreadCrumbs:"<a href=\"backend-infrastructure.html\">Backend infrastructure<\/a> &gt; <a href=\"dlms.html\">Data Link Monitoring Service<\/a>",
hmTitlePath:"Backend infrastructure > Data Link Monitoring Service > Monitoring stationary gateway devices",
hmHeader:"<h1 class=\"p_Heading1\"><span class=\"f_Heading1\">Monitoring stationary gateway devices<\/span><\/h1>\n\r",
hmBody:"<p class=\"p_Normal\">The Data Link Monitoring Service monitors the data link between stationary gateways and the HsM Backend based on <a href=\"prdp-messagetype-gateway-heartbeat.html\" class=\"topiclink\">heartbeat messages<\/a> sent by stationary gateways.<\/p>\n\r<p class=\"p_Normal\">Heartbeat messages received by the Data Link Monitoring Service via Azure IoT Hub indicate that the stationary gateway device is online and include information for the Data Link Monitoring Service when it should expect the next heartbeat message.<\/p>\n\r<p class=\"p_Normal\">Stationary gateways send a first heartbeat message directly after start up. By default the frequency of heartbeat messages is 1h. However the stationary gateway can choose different frequencies.<\/p>\n\r<div style=\"text-align: left; text-indent: 0; line-height: 1.44; padding: 0 0 0 0; margin: 0.3750rem 0 0.2500rem 0;\"><table class=\"BoxImportant\" >\n\r<tr class=\"BoxImportant\">\n\r<td class=\"BoxImportant\"><p class=\"p_Normal\"><span style=\"font-weight: bold;\">Note:<\/span> Note: How quickly a broken data link between a stationary gateway and the HsM Backend is detected depends on the frequency of heartbeat messages. And on the configuration of the Data Link Monitoring Service. See chapter <a href=\"dlms-capability.html\" class=\"topiclink\">Capability<\/a> for more details.<\/p>\n\r<\/td>\n\r<\/tr>\n\r<\/table>\n\r<\/div>\n\r<p class=\"p_Normal\">&nbsp;<\/p>\n\r"
})
