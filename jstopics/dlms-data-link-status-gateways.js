hmLoadTopic({
hmKeywords:"",
hmTitle:"Stationary gatways",
hmDescription:"The data-link between a gateway device and the HsM Backend is evaluated by the Data Link Monitoring Service into following states listed in table 21",
hmPrevLink:"dlms-data-link-status-ble-networked.html",
hmNextLink:"expectation.html",
hmParentLink:"dlms-data-link-status.html",
hmBreadCrumbs:"<a href=\"backend-infrastructure.html\">Backend infrastructure<\/a> &gt; <a href=\"dlms.html\">Data Link Monitoring Service<\/a> &gt; <a href=\"dlms-connection-metrics.html\">Connection metrics<\/a> &gt; <a href=\"dlms-data-link-status.html\">Data-link status<\/a>",
hmTitlePath:"Backend infrastructure > Data Link Monitoring Service > Connection metrics > Data-link status > Stationary gatways",
hmHeader:"<h1 class=\"p_Heading1\"><span class=\"f_Heading1\">Stationary gatways<\/span><\/h1>\n\r",
hmBody:"<p class=\"p_Normal\">The data-link between a gateway device and the HsM Backend is evaluated by the Data Link Monitoring Service into following states listed in table 21<\/p>\n\r<div style=\"text-align: left; text-indent: 0; line-height: 1.44; padding: 0 0 0 0; margin: 0.3750rem 0 0.2500rem 0;\"><table style=\"width:43.7500rem; border:none; border-spacing:0; border-collapse:collapse;\">\n\r<thead>\n\r<tr>\n\r<th style=\"vertical-align:top; width:7.0625rem; background-color:#F5F5F5; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">data-link state<\/p>\n\r<\/th>\n\r<th style=\"vertical-align:top; width:6.5000rem; background-color:#F5F5F5; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">Effective connection state<\/p>\n\r<\/th>\n\r<th style=\"vertical-align:top; width:29.1875rem; background-color:#F5F5F5; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">Description<\/p>\n\r<\/th>\n\r<\/tr>\n\r<\/thead>\n\r<tbody>\n\r<tr>\n\r<td style=\"vertical-align:top; width:7.0625rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">Not connected<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; width:6.5000rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">offline<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; width:29.1875rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">The stationary gateway is not connected to the HsM Backend Data Link Monitoring Service does also not expect the device to be connected.<\/p>\n\r<\/td>\n\r<\/tr>\n\r<tr>\n\r<td style=\"vertical-align:top; width:7.0625rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">Online<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; width:6.5000rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">online<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; width:29.1875rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">The data-link between the stationary gateway the HsM Backend is established.<\/p>\n\r<\/td>\n\r<\/tr>\n\r<tr>\n\r<td style=\"vertical-align:top; width:7.0625rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">Temporarily offline<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; width:6.5000rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">offline<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; width:29.1875rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">The stationary gateway is currently not connected to the HsM Backend but the Data Link Monitoring Service assumes that this is just temporarily.<\/p>\n\r<p class=\"p_Normal\">The assumption is made simple based on a time-threshold. If a device has been offline for less than 1 day it is assumed to be temporarily offline. If the device is offline for more than 1 day it is assumed to be offline.<\/p>\n\r<\/td>\n\r<\/tr>\n\r<tr>\n\r<td style=\"vertical-align:top; width:7.0625rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">Offline<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; width:6.5000rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">offline<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; width:29.1875rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">The stationary gateway is not connected to the HsM Backend and the Data Link Monitoring Service does not assume that this is just temporary.<\/p>\n\r<\/td>\n\r<\/tr>\n\r<\/tbody>\n\r<\/table>\n\r<\/div>\n\r<p class=\"p_ImageCaption\"><a id=\"fig_80aac9\" class=\"hmanchor\"><\/a><span class=\"f_ImageCaption\">Table 21: Data-link states for stationary gateways.<\/span><\/p>\n\r"
})
