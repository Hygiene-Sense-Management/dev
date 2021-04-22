hmLoadTopic({
hmKeywords:"",
hmTitle:"REST API",
hmDescription:"Terminiology DataLinkConenctionState: Inludes Status, ComputedAt, ComponentId, OnlineTime, OfflineTime DeviceStateResponse: Online\/Offline Logged At GatewayConnectioninfo: Respo",
hmPrevLink:"dlms-data-link-monitoring-logic.html",
hmNextLink:"pdpr.html",
hmParentLink:"dlms.html",
hmBreadCrumbs:"<a href=\"backend-infrastructure.html\">Backend infrastructure<\/a> &gt; <a href=\"dlms.html\">Data Link Monitoring Service<\/a>",
hmTitlePath:"Backend infrastructure > Data Link Monitoring Service > REST API",
hmHeader:"<h1 class=\"p_Heading1\"><span class=\"f_Heading1\">REST API<\/span><\/h1>\n\r",
hmBody:"<h1 class=\"p_Heading1\"><span class=\"f_Heading1\" style=\"color: #000000;\">Terminiology<\/span><\/h1>\n\r<p class=\"p_Normal\">DataLinkConenctionState: Inludes Status, ComputedAt, ComponentId, OnlineTime, OfflineTime<\/p>\n\r<p class=\"p_Normal\">DeviceStateResponse: Online\/Offline Logged At<\/p>\n\r<p class=\"p_Normal\">GatewayConnectioninfo: Respons List of Gateways the device was connected to<\/p>\n\r<p class=\"p_Normal\">&nbsp;<\/p>\n\r<h1 class=\"p_Heading1\"><span class=\"f_Heading1\">Routing:<\/span><\/h1>\n\r<p class=\"p_Normal\">Only valid message are routed &nbsp;&gt;= 10 minutes (600 seconds) and sender I must be given <\/p>\n\r<p class=\"p_Normal\">In code we use Base Types EUI to validate sender EUI, then we fail in code. Application insights will be logged to application insights.<\/p>\n\r<p class=\"p_Normal\">&nbsp;<\/p>\n\r<h1 class=\"p_Heading1\"><span class=\"f_Heading1\">Heartbeat logic<\/span><\/h1>\n\r<p class=\"p_Normal\">Gateway heartbeat messages consumed<\/p>\n\r<p class=\"p_Normal\">Information is stored<\/p>\n\r<p class=\"p_Normal\">Another message is triggered that triggers the recalculation of the effective state<\/p>\n\r<p class=\"p_Normal\">&nbsp;<\/p>\n\r<p class=\"p_Normal\">&nbsp;<\/p>\n\r<p class=\"p_Normal\" style=\"margin: 0 0 0 0;\">&nbsp;<\/p>\n\r<p class=\"p_Normal\" style=\"margin: 0 0 0 0;\"><span style=\"font-size: 1.10rem;\">[3:53 PM] Al Khatib, Sami<\/span><\/p>\n\r<p class=\"p_Normal\" style=\"margin: 0 0 0 0;\"><span style=\"font-size: 1.10rem;\"># API Endpoint Definition<\/span><\/p>\n\r<p class=\"p_Normal\" style=\"margin: 0 0 0 0;\"><span style=\"font-size: 1.10rem;\">&nbsp;<\/span><\/p>\n\r<p class=\"p_Normal\" style=\"margin: 0 0 0 0;\"><span style=\"font-size: 1.10rem;\">## Devices Endpoints<\/span><\/p>\n\r<p class=\"p_Normal\" style=\"margin: 0 0 0 0;\"><span style=\"font-size: 1.10rem;\">&nbsp;<\/span><\/p>\n\r<p class=\"p_Normal\" style=\"margin: 0 0 0 0;\"><span style=\"font-size: 1.10rem;\">HTTP GET -&gt; \/api\/{​​​​​​​​version}​​​​​​​​\/devices\/{​​​​​​​​id}​​​​​​​​\/data-link-status<\/span><\/p>\n\r<p class=\"p_Normal\" style=\"margin: 0 0 0 0;\"><span style=\"font-size: 1.10rem;\">HTTP GET -&gt; \/api\/{​​​​​​​​version}​​​​​​​​\/devices\/{​​​​​​​​id}​​​​​​​​\/online-ratio<\/span><\/p>\n\r<p class=\"p_Normal\" style=\"margin: 0 0 0 0;\"><span style=\"font-size: 1.10rem;\">HTTP GET -&gt; \/api\/{​​​​​​​​version}​​​​​​​​\/devices\/{​​​​​​​​id}​​​​​​​​\/online-offline-values<\/span><\/p>\n\r<p class=\"p_Normal\" style=\"margin: 0 0 0 0;\"><span style=\"font-size: 1.10rem;\">HTTP GET -&gt; \/api\/{​​​​​​​​version}​​​​​​​​\/devices\/{​​​​​​​​id}​​​​​​​​\/connected-devices?utctime<\/span><\/p>\n\r<p class=\"p_Normal\" style=\"margin: 0 0 0 0;\"><span style=\"font-size: 1.10rem;\">HTTP GET -&gt; \/api\/{​​​​​​​​version}​​​​​​​​\/devices\/{​​​​​​​​id}​​​​​​​​\/connected-gateways?utctime<\/span><\/p>\n\r<p class=\"p_Normal\" style=\"margin: 0 0 0 0;\"><span style=\"font-size: 1.10rem;\">HTTP PUT-&gt; \/api\/{​​​​​​​​version}​​​​​​​​\/devices\/{​​​​​​​​id}​​​​​​​​\/statistic-reset<\/span><\/p>\n\r<p class=\"p_Normal\" style=\"margin: 0 0 0 0;\"><span style=\"font-size: 1.10rem;\">&nbsp;<\/span><\/p>\n\r<p class=\"p_Normal\" style=\"margin: 0 0 0 0;\"><span style=\"font-size: 1.10rem;\">## User Expectation Endpoints for devices<\/span><\/p>\n\r<p class=\"p_Normal\" style=\"margin: 0 0 0 0;\"><span style=\"font-size: 1.10rem;\">&nbsp;<\/span><\/p>\n\r<p class=\"p_Normal\" style=\"margin: 0 0 0 0;\"><span style=\"font-size: 1.10rem;\">HTTP GET-&gt; \/api\/{​​​​​​​​version}​​​​​​​​\/userexpectation-status\/{​​​​​​​​id}​​​​​​​​\/<\/span><\/p>\n\r<p class=\"p_Normal\" style=\"margin: 0 0 0 0;\"><span style=\"font-size: 1.10rem;\">HTTP PUT-&gt; \/api\/{​​​​​​​​version}​​​​​​​​\/userexpectation-status\/{​​​​​​​​id}​​​​​​​​\/<\/span><\/p>\n\r<p class=\"p_Normal\" style=\"margin: 0 0 0 0;\"><span style=\"font-size: 1.10rem;\">&nbsp;<\/span><\/p>\n\r<p class=\"p_Normal\" style=\"margin: 0 0 0 0;\"><span style=\"font-size: 1.10rem;\">## Service Info<\/span><\/p>\n\r<p class=\"p_Normal\" style=\"margin: 0 0 0 0;\"><span style=\"font-size: 1.10rem;\">&nbsp;<\/span><\/p>\n\r<p class=\"p_Normal\" style=\"margin: 0 0 0 0;\"><span style=\"font-size: 1.10rem;\">HTTP GET -&gt; \/api\/{​​​​​​​​version}​​​​​​​​\/service-info<\/span><\/p>\n\r<h1 class=\"p_Heading1\"><span class=\"f_Heading1\">&nbsp;<\/span><\/h1>\n\r<h1 class=\"p_Heading1\"><span class=\"f_Heading1\">Common API<\/span><\/h1>\n\r<p class=\"p_Normal\">Without authentication<\/p>\n\r<p class=\"p_InlineCode\"><span class=\"f_InlineCode\">GET \/service-info<\/span><\/p>\n\r<h1 class=\"p_Heading1\"><span class=\"f_Heading1\">Standard API<\/span><\/h1>\n\r<p class=\"p_Normal\">Basic authentication<\/p>\n\r<h2 class=\"p_Heading2\"><span class=\"f_Heading2\">connection Metrics<\/span><\/h2>\n\r<p class=\"p_Normal\"><span class=\"f_InlineCode\">GET \/connection-metrics\/{id}\/data-link-state<\/span>: Gets the current data link status of the device. Returns date and time when the status was last set and the status itself (Enum)<\/p>\n\r<p class=\"p_Normal\"><span class=\"f_InlineCode\">GET \/connection-metrics\/{id}\/online-ratio<\/span>: &nbsp;Gets the online ratio of the given device. I.e. the ration of online-time \/ offline-time expressed in percent.<\/p>\n\r<p class=\"p_Normal\"><span class=\"f_InlineCode\">GET \/connection-metrics\/{id}\/total-?status?-times:<\/span> Gets the cumulated times the device was in each state.<\/p>\n\r<p class=\"p_Normal\"><span class=\"f_InlineCode\">PUT \/connection-metrics\/{id}\/statistic-reset<\/span> : Will reset statistical values stored for this device (online-ratio, time-sums etc)<\/p>\n\r<p class=\"p_Normal\"><span class=\"f_InlineCode\">PUT \/connection-metrics\/{id}\/data-link-status-expectation<\/span>: Puts the expectation (online, offline, hard offline)<\/p>\n\r<p class=\"p_Normal\"><span class=\"f_InlineCode\">GET \/connection-device\/{id}\/data-link-status-expectation<\/span>: Gets the expectation (online, soft-offline, hard offline). <\/p>\n\r<h2 class=\"p_Heading2\"><span class=\"f_Heading2\">Connection topology<\/span><\/h2>\n\r<p class=\"p_Normal\"><span class=\"f_InlineCode\">GET \/connection-topology\/connected-devices\/{gateway-device-id}?since ={datetimeoffset}<\/span>: List of devices that were connected to the given gateway device since the given date. If date is not given will only list the currently connected devices. Maximum 5000 entries will be returned, together with the time when the device established connection to that device. If since is not given will only return the latest used gateway.<\/p>\n\r<p class=\"p_Normal\"><span class=\"f_InlineCode\">GET \/connection-topology\/used-gateways\/{non-gateway-device-id}?since={datetimeoffset}<\/span>: Gets an ordered list of the gateways a device used in the past. Maximum 5000 entries will be returned, together with the time when the device established connection to that device. If since is not given will only return the latest used gateway.<\/p>\n\r"
})
