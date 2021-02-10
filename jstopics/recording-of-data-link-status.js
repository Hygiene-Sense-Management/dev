hmLoadTopic({
hmKeywords:"",
hmTitle:"Recording of data link status",
hmDescription:"The data link status of a HsM device is recorded as resource instance values for each device. I.e. the data link status of each HsM device is recorded as time-series of data.",
hmPrevLink:"gateway-devices.html",
hmNextLink:"monitoring-data-link-between-n.html",
hmParentLink:"data-link-monitoring-service.html",
hmBreadCrumbs:"<a href=\"backend-infrastructure.html\">Backend infrastructure<\/a> &gt; <a href=\"data-link-monitoring-service.html\">Data Link Monitoring Service<\/a>",
hmTitlePath:"Backend infrastructure > Data Link Monitoring Service > Recording of data link status",
hmHeader:"<h1 class=\"p_Heading1\"><span class=\"f_Heading1\">Recording of data link status<\/span><\/h1>\n\r",
hmBody:"<p class=\"p_Normal\">The data link status of a HsM device is recorded as resource instance values for each device. I.e. the data link status of each HsM device is recorded as time-series of data.<\/p>\n\r<h1 class=\"p_Heading1\"><span class=\"f_Heading1\">Data-link status change (Non-gateway devices and stationary gateways)<\/span><\/h1>\n\r<p class=\"p_Normal\">Whenever a change in the data-link status of a device is detected by the HsM data link monitoring the new status after the status change is recorded as a resource instance value and stored with the device. Recorded status can be:<\/p>\n\r<p class=\"p_Normal\" style=\"text-indent: 0; padding-left: 0.8125rem; margin-left: 0;\"><span class=\"f_Normal\" style=\"font-family: Arial,\'Lucida Sans Unicode\',\'Lucida Grande\',\'Lucida Sans\';display:inline-block;width:0.8125rem;margin-left:-0.8125rem\">&#8226;<\/span>Online<\/p><p class=\"p_Normal\" style=\"text-indent: 0; padding-left: 0.8125rem; margin-left: 0;\"><span class=\"f_Normal\" style=\"font-family: Arial,\'Lucida Sans Unicode\',\'Lucida Grande\',\'Lucida Sans\';display:inline-block;width:0.8125rem;margin-left:-0.8125rem\">&#8226;<\/span>Offline - Device link lost (will not be used for stationary gateways)<\/p><p class=\"p_Normal\" style=\"text-indent: 0; padding-left: 0.8125rem; margin-left: 0;\"><span class=\"f_Normal\" style=\"font-family: Arial,\'Lucida Sans Unicode\',\'Lucida Grande\',\'Lucida Sans\';display:inline-block;width:0.8125rem;margin-left:-0.8125rem\">&#8226;<\/span>Offline - Gateway link lost<\/p><p class=\"p_Normal\">Due to technical reasons the timestamp of this change in not always precise as the change of the data link status might be detected with a certain delay.<\/p>\n\r<h1 class=\"p_Heading1\"><span class=\"f_Heading1\">Last used stationary gateway (Non-gateway devices only)<\/span><\/h1>\n\r<p class=\"p_Normal\">For non-gateway devices the last used stationary gateway, i.e. the stationary gateway that was last used by the non-gateway device to connect to the &nbsp;HsM backend) is stored.<\/p>\n\r<h1 class=\"p_Heading1\"><span class=\"f_Heading1\">Last-detected-online (Non-gateway devices and stationary gateways)<\/span><\/h1>\n\r<p class=\"p_Normal\">The timestamp when a data-link status of the device was last Online. This is used to for differentiating between temporarily offline and offline.<\/p>\n\r"
})