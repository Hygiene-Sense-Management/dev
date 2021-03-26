hmLoadTopic({
hmKeywords:"",
hmTitle:"REST API",
hmDescription:"Common API Without authentication GET \/service-info Standard API Basic authentication connection Metrics GET \/connection-metrics\/{id}\/data-link-status: Gets the current data",
hmPrevLink:"dlms-data-link-monitoring-logic.html",
hmNextLink:"pdpr.html",
hmParentLink:"dlms.html",
hmBreadCrumbs:"<a href=\"backend-infrastructure.html\">Backend infrastructure<\/a> &gt; <a href=\"dlms.html\">Data Link Monitoring Service<\/a>",
hmTitlePath:"Backend infrastructure > Data Link Monitoring Service > REST API",
hmHeader:"<h1 class=\"p_Heading1\"><span class=\"f_Heading1\">REST API<\/span><\/h1>\n\r",
hmBody:"<h1 class=\"p_Heading1\"><span class=\"f_Heading1\">Common API<\/span><\/h1>\n\r<p class=\"p_Normal\">Without authentication<\/p>\n\r<p class=\"p_InlineCode\"><span class=\"f_InlineCode\">GET \/service-info<\/span><\/p>\n\r<h1 class=\"p_Heading1\"><span class=\"f_Heading1\">Standard API<\/span><\/h1>\n\r<p class=\"p_Normal\">Basic authentication<\/p>\n\r<h2 class=\"p_Heading2\"><span class=\"f_Heading2\">connection Metrics<\/span><\/h2>\n\r<p class=\"p_Normal\"><span class=\"f_InlineCode\">GET \/connection-metrics\/{id}\/data-link-status<\/span>: Gets the current data link status of the device. Returns date and time when the status was last set and the status itself (Enum)<\/p>\n\r<p class=\"p_Normal\"><span class=\"f_InlineCode\">GET \/connection-metrics\/{id}\/online-ratio<\/span>: &nbsp;Gets the online ratio of the given device. I.e. the ration of online-time \/ offline-time expressed in percent.<\/p>\n\r<p class=\"p_Normal\"><span class=\"f_InlineCode\">GET \/connection-metrics\/{id}\/total-?status?-times:<\/span> Gets the cumulated times the device was in each state.<\/p>\n\r<p class=\"p_Normal\"><span class=\"f_InlineCode\">PUT \/connection-metrics\/{id}\/statistic-reset<\/span> : Will reset statistical values stored for this device (online-ratio, time-sums etc)<\/p>\n\r<p class=\"p_Normal\"><span class=\"f_InlineCode\">PUT \/connection-metrics\/{id}\/data-link-status-expectation<\/span>: Puts the expectation (online, offline, hard offline)<\/p>\n\r<p class=\"p_Normal\"><span class=\"f_InlineCode\">GET \/connection-device\/{id}\/data-link-status-expectation<\/span>: Gets the expectation (online, soft-offline, hard offline). <\/p>\n\r<h2 class=\"p_Heading2\"><span class=\"f_Heading2\">Connection topology<\/span><\/h2>\n\r<p class=\"p_Normal\"><span class=\"f_InlineCode\">GET \/connection-topology\/connected-devices\/{gateway-device-id}?since={datetimeoffset}<\/span>: List of devices that were connected to the given gateway device since the given date. If date is not given will only list the currently connected devices.<\/p>\n\r<p class=\"p_Normal\"><span class=\"f_InlineCode\">GET \/connection-topology\/used-gateways\/{non-gateway-device-id}?since={datetimeoffset}<\/span>: Gets an ordered list of the gateways a device used in the past. Maximum 255 entries will be returned, together with the time when the device established connection to that device. If since is not given will only return the latest used gateway.<\/p>\n\r"
})