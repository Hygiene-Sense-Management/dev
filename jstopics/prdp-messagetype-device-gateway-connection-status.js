hmLoadTopic({
hmKeywords:"",
hmTitle:"Device-gateway connection status",
hmDescription:"The device-gateway connection status message type is used by stationary gateways to actively inform the HsM Backend about connections between the gateway and BLE-networked...",
hmPrevLink:"prdp-message-types.html",
hmNextLink:"prdp-messagetype-gateway-heartbeat.html",
hmParentLink:"prdp-message-types.html",
hmBreadCrumbs:"<a href=\"backend-infrastructure.html\">Backend infrastructure<\/a> &gt; <a href=\"pdpr.html\">Primary Data Processing<\/a> &gt; <a href=\"prdp-message-types.html\">Message types<\/a>",
hmTitlePath:"Backend infrastructure > Primary Data Processing > Message types > Device-gateway connection status",
hmHeader:"<h1 class=\"p_Heading1\"><span class=\"f_Heading1\">Device-gateway connection status<\/span><\/h1>\n\r",
hmBody:"<p class=\"p_Normal\">The<span class=\"f_Term\"> device-gateway connection status<\/span> message type is used by stationary gateways to actively inform the HsM Backend about connections between the gateway and BLE-networked devices. The data in these messages is forwarded to the Data Link Monitoring Service to calculate the actual data-link status between BLE-networked devices and the HsM Backend.<\/p>\n\r<h1 class=\"p_Heading1\"><span class=\"f_Heading1\">Application Properties<\/span><\/h1>\n\r<div style=\"text-align: left; text-indent: 0; line-height: 1.44; padding: 0 0 0 0; margin: 0.3750rem 0 0.2500rem 0;\"><table style=\"width:43.7500rem; border:none; border-spacing:0; border-collapse:collapse;\">\n\r<thead>\n\r<tr>\n\r<th style=\"vertical-align:top; width:13.5000rem; background-color:#F5F5F5; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">Property<\/p>\n\r<\/th>\n\r<th style=\"vertical-align:top; width:29.6250rem; background-color:#F5F5F5; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">Description<\/p>\n\r<\/th>\n\r<\/tr>\n\r<\/thead>\n\r<tbody>\n\r<tr>\n\r<td style=\"vertical-align:top; width:13.5000rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">message-type<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; width:29.6250rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\"><span class=\"f_InlineCode\">device-gateway-connection-status<\/span><\/p>\n\r<\/td>\n\r<\/tr>\n\r<tr>\n\r<td style=\"vertical-align:top; width:13.5000rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">message-type-version<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; width:29.6250rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_InlineCode\"><span class=\"f_InlineCode\">1.0.0<\/span> <\/p>\n\r<\/td>\n\r<\/tr>\n\r<tr>\n\r<td style=\"vertical-align:top; width:13.5000rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">sender-id<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; width:29.6250rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">EUI48 (MAC address) or EUI64 of the gateway\'s network interface Encoded as hexadecimal string (hyphen separated groups of two hexadecimal digits)<\/p>\n\r<\/td>\n\r<\/tr>\n\r<\/tbody>\n\r<\/table>\n\r<\/div>\n\r<p class=\"p_ImageCaption\"><a id=\"fig_d82a4e\" class=\"hmanchor\"><\/a><span class=\"f_ImageCaption\">Table 31: Application properties of this message type<\/span><\/p>\n\r<h1 class=\"p_Heading1\"><span class=\"f_Heading1\">Message body<\/span><\/h1>\n\r<p class=\"p_Normal\">The body of this message type contains a JSON document with the connection status for multiple BLE-networked devices. Figure 4 shows an example message body. The message body structure is defined by the device-gateway connection status <a href=\"hsm-device-gateway-connection-status-v1.0.0.json\" class=\"filelink\">JSON Schema<\/a>.<\/p>\n\r<div style=\"text-align: left; text-indent: 0; line-height: 1.44; padding: 0 0 0 0; margin: 0.3750rem 0 0.2500rem 0;\"><table class=\"BoxCode\" >\n\r<tr class=\"BoxCode\">\n\r<td class=\"BoxCode\"><p class=\"p_CodeExample\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span class=\"f_CodeExample\">{<\/span><\/p>\n\r<p class=\"p_CodeExample\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span class=\"f_CodeExample\"> &nbsp;&quot;Devices&quot;: [<\/span><\/p>\n\r<p class=\"p_CodeExample\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span class=\"f_CodeExample\"> &nbsp; &nbsp;{<\/span><\/p>\n\r<p class=\"p_CodeExample\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span class=\"f_CodeExample\"> &nbsp; &nbsp; &nbsp;&quot;NetworkId&quot;: &quot;F8-75-A4-AC-77-12-34-A5&quot;,<\/span><\/p>\n\r<p class=\"p_CodeExample\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span class=\"f_CodeExample\"> &nbsp; &nbsp; &nbsp;&quot;LoggedAt&quot;: &quot;2021-02-28 22:15:14.123Z&quot;,<\/span><\/p>\n\r<p class=\"p_CodeExample\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span class=\"f_CodeExample\"> &nbsp; &nbsp; &nbsp;&quot;ConnectionStatus&quot;: &quot;online&quot;<\/span><\/p>\n\r<p class=\"p_CodeExample\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span class=\"f_CodeExample\"> &nbsp; &nbsp;},<\/span><\/p>\n\r<p class=\"p_CodeExample\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span class=\"f_CodeExample\"> &nbsp; &nbsp;{<\/span><\/p>\n\r<p class=\"p_CodeExample\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span class=\"f_CodeExample\"> &nbsp; &nbsp; &nbsp;&quot;NetworkId&quot;: &quot;B4-CE-36-6F-1E-73-22-CE&quot;,<\/span><\/p>\n\r<p class=\"p_CodeExample\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span class=\"f_CodeExample\"> &nbsp; &nbsp; &nbsp;&quot;LoggedAt&quot;: &quot;2021-02-28 22:13:12.345Z&quot;,<\/span><\/p>\n\r<p class=\"p_CodeExample\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span class=\"f_CodeExample\"> &nbsp; &nbsp; &nbsp;&quot;ConnectionStatus&quot;: &quot;offline&quot;<\/span><\/p>\n\r<p class=\"p_CodeExample\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span class=\"f_CodeExample\"> &nbsp; &nbsp;}<\/span><\/p>\n\r<p class=\"p_CodeExample\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span class=\"f_CodeExample\"> &nbsp;]<\/span><\/p>\n\r<p class=\"p_CodeExample\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span class=\"f_CodeExample\">}<\/span><\/p>\n\r<\/td>\n\r<\/tr>\n\r<\/table>\n\r<\/div>\n\r<p class=\"p_ImageCaption\"><a id=\"fig_810e83\" class=\"hmanchor\"><\/a><span class=\"f_ImageCaption\">Figure 4: Example message<\/span><\/p>\n\r"
})
