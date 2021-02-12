hmLoadTopic({
hmKeywords:"",
hmTitle:"Non gateway devices",
hmDescription:"The data-link between a non-gateway device and the HsM Backend via gateways can be in one of the following states:",
hmPrevLink:"presented-data-link-status.html",
hmNextLink:"gateway-devices.html",
hmParentLink:"presented-data-link-status.html",
hmBreadCrumbs:"<a href=\"backend-infrastructure.html\">Backend infrastructure<\/a> &gt; <a href=\"data-link-monitoring-service.html\">Data Link Monitoring Service<\/a> &gt; <a href=\"presented-data-link-status.html\">Data link status<\/a>",
hmTitlePath:"Backend infrastructure > Data Link Monitoring Service > Data link status > Non gateway devices",
hmHeader:"<h1 class=\"p_Heading1\"><span class=\"f_Heading1\">Non gateway devices<\/span><\/h1>\n\r",
hmBody:"<p class=\"p_Normal\"> The data-link between a non-gateway device and the HsM Backend via gateways can be in one of the following states:<\/p>\n\r<p class=\"p_Normal\" style=\"text-indent: 0; padding-left: 1.2500rem; margin-left: 0;\"><span class=\"f_Normal\" style=\"display:inline-block;width:1.2500rem;margin-left:-1.2500rem\">1.<\/span>Not connected: The device is not connected via a gateway and the HsM Backend does not expect the device to be connected via gateway.<\/p><p class=\"p_Normal\" style=\"text-indent: 0; padding-left: 1.2500rem; margin-left: 0;\"><span class=\"f_Normal\" style=\"display:inline-block;width:1.2500rem;margin-left:-1.2500rem\">2.<\/span>Connected: The data-link between the non-gateway device and the gateway is established and the data link between this stationary gateway and the HsM Backend system is established. Data sent by the non-gateway device will be immediately delivered to the HsM Backend, data sent by the HsM Backend will be immediately delivered to the non-gateway devices.<\/p><p style=\"text-indent: 0; line-height: 2.3; padding-left: -0.4375rem; margin: 0.2500rem 0 0 1.6875rem;\"><span class=\"f_Normal\" style=\"display:inline-block;width:1.2500rem;margin-left:-1.2500rem\">3.<\/span>Offline: The HsM Backend expects a connection but no device connection was detected within the last 20 minutes.<\/p><p class=\"p_Normal\">The HsM Backend decides if it expects a device to be connected via following events (latest event counts):<\/p>\n\r<p class=\"p_Normal\" style=\"text-indent: 0; padding-left: 0.8125rem; margin-left: 0;\"><span class=\"f_Normal\" style=\"font-family: Arial,\'Lucida Sans Unicode\',\'Lucida Grande\',\'Lucida Sans\';display:inline-block;width:0.8125rem;margin-left:-0.8125rem\">&#8226;<\/span>If a device connects to the HsM Backend the HsM Backend expects the device to be connected in future.<\/p><p class=\"p_Normal\" style=\"text-indent: 0; padding-left: 0.8125rem; margin-left: 0;\"><span class=\"f_Normal\" style=\"font-family: Arial,\'Lucida Sans Unicode\',\'Lucida Grande\',\'Lucida Sans\';display:inline-block;width:0.8125rem;margin-left:-0.8125rem\">&#8226;<\/span>If a device changes customer and\/or location the HsM Backend does not expect the device to be connected<\/p><p class=\"p_Normal\" style=\"text-indent: 0; padding-left: 0.8125rem; margin-left: 0;\"><span class=\"f_Normal\" style=\"font-family: Arial,\'Lucida Sans Unicode\',\'Lucida Grande\',\'Lucida Sans\';display:inline-block;width:0.8125rem;margin-left:-0.8125rem\">&#8226;<\/span>If a gateway device is uninstalled or moved all devices that were last registered with this gateway will not be expected to have a connection.<\/p><p class=\"p_Normal\" style=\"text-indent: 0; padding-left: 0.8125rem; margin-left: 0;\"><span class=\"f_Normal\" style=\"font-family: Arial,\'Lucida Sans Unicode\',\'Lucida Grande\',\'Lucida Sans\';display:inline-block;width:0.8125rem;margin-left:-0.8125rem\">&#8226;<\/span>If the user manually defines that a device is not connected via a gateway, the HsM Backend does not expect the device to be connected via a gateway.<\/p>"
})
