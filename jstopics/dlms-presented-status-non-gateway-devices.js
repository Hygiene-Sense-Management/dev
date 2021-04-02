hmLoadTopic({
hmKeywords:"",
hmTitle:"Non-gateway devices",
hmDescription:"The data-link between a non-gateway device and the HsM Backend via gateways is evaluated by the Data Link Monitoring Service into the states listed in table 2.",
hmPrevLink:"dlms-data-link-status.html",
hmNextLink:"dlms-presented-status-gateway-devices.html",
hmParentLink:"dlms-data-link-status.html",
hmBreadCrumbs:"<a href=\"backend-infrastructure.html\">Backend infrastructure<\/a> &gt; <a href=\"dlms.html\">Data Link Monitoring Service<\/a> &gt; <a href=\"dlms-connection-metrics.html\">Connection metrics<\/a> &gt; <a href=\"dlms-data-link-status.html\">Data link status<\/a>",
hmTitlePath:"Backend infrastructure > Data Link Monitoring Service > Connection metrics > Data link status > Non-gateway devices",
hmHeader:"<h1 class=\"p_Heading1\"><span class=\"f_Heading1\">Non-gateway devices<\/span><\/h1>\n\r",
hmBody:"<p class=\"p_Normal\">The data-link between a non-gateway device and the HsM Backend via gateways is evaluated by the Data Link Monitoring Service into the states listed in table 2.<\/p>\n\r<div style=\"text-align: left; text-indent: 0; line-height: 1.44; padding: 0 0 0 0; margin: 0.2500rem 0 0.3750rem 0;\"><table style=\"width:43.7500rem; border:none; border-spacing:0; border-collapse:collapse;\">\n\r<thead>\n\r<tr>\n\r<th style=\"vertical-align:top; width:7.0625rem; background-color:#F5F5F5; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">Data link state<\/p>\n\r<\/th>\n\r<th style=\"vertical-align:top; width:6.5000rem; background-color:#F5F5F5; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">Effective connection state<\/p>\n\r<\/th>\n\r<th style=\"vertical-align:top; width:29.1875rem; background-color:#F5F5F5; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">Description<\/p>\n\r<\/th>\n\r<\/tr>\n\r<\/thead>\n\r<tbody>\n\r<tr>\n\r<td style=\"vertical-align:top; width:7.0625rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">Not connected<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; width:6.5000rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">offline<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; width:29.1875rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">The device is not connected via a gateway and the Data Link Monitoring Service does also not expect the device to be connected via a stationary gateway.<\/p>\n\r<\/td>\n\r<\/tr>\n\r<tr>\n\r<td style=\"vertical-align:top; width:7.0625rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">Online<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; width:6.5000rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">online<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; width:29.1875rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">The data-link between the non-gateway device and the stationary gateway is established and the data link between this stationary gateway and the HsM Backend is established.<\/p>\n\r<\/td>\n\r<\/tr>\n\r<tr>\n\r<td style=\"vertical-align:top; width:7.0625rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">Temporarily offline<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; width:6.5000rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">offline<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; width:29.1875rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">The device is currently not connected to the HsM Backend but the Data Link Monitoring Service assumes that this is just temporarily.<\/p>\n\r<p class=\"p_Normal\">The assumption is made simple based on a time-threshold. If a device has been offline for less than 1 day it is assumed to be temporarily offline. If the device is offline for more than 1 day it is assumed to be offline.<\/p>\n\r<\/td>\n\r<\/tr>\n\r<tr>\n\r<td style=\"vertical-align:top; width:7.0625rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">Offline<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; width:6.5000rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">offline<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; width:29.1875rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p style=\"line-height: 2.3; margin: 0.2500rem 0 0 0;\">The device is not connected to the HsM Backend and the Data Link Monitoring Service does not assume that this is just temporary.<\/p>\n\r<\/td>\n\r<\/tr>\n\r<\/tbody>\n\r<\/table>\n\r<\/div>\n\r<p class=\"p_ImageCaption\"><a id=\"fig_80aac9\" class=\"hmanchor\"><\/a><span class=\"f_ImageCaption\">Table 17: Data link states for non-gateway devices<\/span><\/p>\n\r<p class=\"p_Normal\">If a non-gateway device is offline (i.e. to the HsM Backend) this can be either an error or it can be an expected state. If the Data Link Monitoring Service expects that the non-connected device should be online but the device is actually offline it will put the device into <span style=\"font-style: italic;\">temporarily offline<\/span> or <span style=\"font-style: italic;\">offline <\/span>state. If the Data Link Monitoring Service does not expect the device to be online an the device actually offline it will put the device to not-connected state.<\/p>\n\r<p class=\"p_Normal\">The expectation if a device should be online or offline is based on following events (the latest event counts):<\/p>\n\r<p class=\"p_Normal\" style=\"text-indent: 0; padding-left: 0.8125rem; margin-left: 0;\"><span class=\"f_Normal\" style=\"font-family: Arial,\'Lucida Sans Unicode\',\'Lucida Grande\',\'Lucida Sans\';display:inline-block;width:0.8125rem;margin-left:-0.8125rem\">&#8226;<\/span>If a non-gateway device was never connected to the HsM Backend the Data Link Monitoring Service does not know about this device and therefore it does not expect this device to be online.<\/p><p class=\"p_Normal\" style=\"text-indent: 0; padding-left: 0.8125rem; margin-left: 0;\"><span class=\"f_Normal\" style=\"font-family: Arial,\'Lucida Sans Unicode\',\'Lucida Grande\',\'Lucida Sans\';display:inline-block;width:0.8125rem;margin-left:-0.8125rem\">&#8226;<\/span>If a non-gateway device connects to the HsM Backend via a stationary gateway the Data Link Monitoring Service expects the device to be online in future, except if it received an expectation of hard-offline via the API before.<\/p><p class=\"p_Normal\" style=\"text-indent: 0; padding-left: 0.8125rem; margin-left: 0;\"><span class=\"f_Normal\" style=\"font-family: Arial,\'Lucida Sans Unicode\',\'Lucida Grande\',\'Lucida Sans\';display:inline-block;width:0.8125rem;margin-left:-0.8125rem\">&#8226;<\/span>If the  Data Link Monitoring Service receives an expectation via its REST API it will use this expectation. The expectation sent for a gateway device will be set for all non-gateway devices that were connected to that stationary gateway at the time the expectation was sent to the REST API.<\/p>"
})
