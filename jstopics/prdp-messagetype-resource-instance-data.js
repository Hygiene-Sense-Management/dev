hmLoadTopic({
hmKeywords:"",
hmTitle:"Resource instance data",
hmDescription:"Application Properties Property Description message-type resource-instance-data message-type-version 1.0.0  sender-id EUI48 or EUI64 of the gateway relaying the data from B",
hmPrevLink:"prdp-messagetype-gateway-heartbeat.html",
hmNextLink:"prdp-message-routing.html",
hmParentLink:"prdp-message-types.html",
hmBreadCrumbs:"<a href=\"backend-infrastructure.html\">Backend infrastructure<\/a> &gt; <a href=\"pdpr.html\">Primary Data Processing<\/a> &gt; <a href=\"prdp-message-types.html\">Message types &amp; protocols<\/a>",
hmTitlePath:"Backend infrastructure > Primary Data Processing > Message types & protocols > Resource instance data",
hmHeader:"<h1 class=\"p_Heading1\"><span class=\"f_Heading1\">Resource instance data<\/span><\/h1>\n\r",
hmBody:"<h1 class=\"p_Heading1\"><span class=\"f_Heading1\">Application Properties<\/span><\/h1>\n\r<div style=\"text-align: left; text-indent: 0; line-height: 1.44; padding: 0 0 0 0; margin: 0.3750rem 0 0.2500rem 0;\"><table style=\"width:43.7500rem; border:none; border-spacing:0; border-collapse:collapse;\">\n\r<thead>\n\r<tr>\n\r<th style=\"vertical-align:top; width:13.2500rem; background-color:#F5F5F5; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">Property<\/p>\n\r<\/th>\n\r<th style=\"vertical-align:top; width:29.8125rem; background-color:#F5F5F5; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">Description<\/p>\n\r<\/th>\n\r<\/tr>\n\r<\/thead>\n\r<tbody>\n\r<tr>\n\r<td style=\"vertical-align:top; width:13.2500rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">message-type<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; width:29.8125rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\"><span class=\"f_InlineCode\">resource-instance-data<\/span><\/p>\n\r<\/td>\n\r<\/tr>\n\r<tr>\n\r<td style=\"vertical-align:top; width:13.2500rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">message-type-version<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; width:29.8125rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_InlineCode\"><span class=\"f_InlineCode\">1.0.0<\/span> <\/p>\n\r<\/td>\n\r<\/tr>\n\r<tr>\n\r<td style=\"vertical-align:top; width:13.2500rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">sender-id<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; width:29.8125rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">EUI48 or EUI64 of the gateway relaying the data from BLE-networked devices.<\/p>\n\r<\/td>\n\r<\/tr>\n\r<\/tbody>\n\r<\/table>\n\r<\/div>\n\r<p class=\"p_ImageCaption\"><a id=\"fig_62fb25\" class=\"hmanchor\"><\/a><span class=\"f_ImageCaption\">Table 25: Application properties of this message type<\/span><\/p>\n\r<h1 class=\"p_Heading1\"><span class=\"f_Heading1\">Message body<\/span><\/h1>\n\r<p class=\"p_Normal\">The body of this message type contains a JSON document that can hold the multiple resource instance values of multiple devices. Figure 4 shows an example message body. The message body structure is defined by the resource-instance data JSON Schema.<\/p>\n\r<div style=\"text-align: left; text-indent: 0; line-height: 1.44; padding: 0 0 0 0; margin: 0.3750rem 0 0.2500rem 0;\"><table class=\"BoxCode\" >\n\r<tr class=\"BoxCode\">\n\r<td class=\"BoxCode\"><p class=\"p_CodeExample\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span class=\"f_CodeExample\">{<\/span><\/p>\n\r<p class=\"p_CodeExample\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span style=\"width:3.0000rem;display:inline-block\">&nbsp;<\/span><span class=\"f_CodeExample\">&quot;header&quot;: {<\/span><\/p>\n\r<p class=\"p_CodeExample\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span style=\"width:3.0000rem;display:inline-block\">&nbsp;<\/span> &nbsp; &nbsp; &nbsp; &nbsp;<span class=\"f_CodeExample\">&quot;format&quot;: &quot;sensor-data-v1&quot;,<\/span><\/p>\n\r<p class=\"p_CodeExample\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span style=\"width:3.0000rem;display:inline-block\">&nbsp;<\/span> &nbsp; &nbsp; &nbsp; &nbsp;<span class=\"f_CodeExample\">&quot;messageId&quot;: &quot;118&quot;,<\/span><\/p>\n\r<p class=\"p_CodeExample\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span style=\"width:3.0000rem;display:inline-block\">&nbsp;<\/span> &nbsp; &nbsp; &nbsp; &nbsp;<span class=\"f_CodeExample\">&quot;sentAt&quot;: &quot;2019-10-07T14:54:19.573Z&quot;<\/span><\/p>\n\r<p class=\"p_CodeExample\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span style=\"width:3.0000rem;display:inline-block\">&nbsp;<\/span><span class=\"f_CodeExample\">},<\/span><\/p>\n\r<p class=\"p_CodeExample\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span style=\"width:3.0000rem;display:inline-block\">&nbsp;<\/span><span class=\"f_CodeExample\">&quot;sender&quot;: {<\/span><\/p>\n\r<p class=\"p_CodeExample\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span style=\"width:3.0000rem;display:inline-block\">&nbsp;<\/span> &nbsp; &nbsp; &nbsp; &nbsp;<span class=\"f_CodeExample\">&quot;version&quot;: &quot;0.1.0&quot;,<\/span><\/p>\n\r<p class=\"p_CodeExample\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span style=\"width:3.0000rem;display:inline-block\">&nbsp;<\/span> &nbsp; &nbsp; &nbsp; &nbsp;<span class=\"f_CodeExample\">&quot;type&quot;: &quot;pyhsm&quot;,<\/span><\/p>\n\r<p class=\"p_CodeExample\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span style=\"width:3.0000rem;display:inline-block\">&nbsp;<\/span> &nbsp; &nbsp; &nbsp; &nbsp;<span class=\"f_CodeExample\">&quot;id&quot;: &quot;leogw-b827ebfce7b0&quot;<\/span><\/p>\n\r<p class=\"p_CodeExample\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span style=\"width:3.0000rem;display:inline-block\">&nbsp;<\/span><span class=\"f_CodeExample\">},<\/span><\/p>\n\r<p class=\"p_CodeExample\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span style=\"width:3.0000rem;display:inline-block\">&nbsp;<\/span><span class=\"f_CodeExample\">&quot;devices&quot;: [<\/span><\/p>\n\r<p class=\"p_CodeExample\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span style=\"width:3.0000rem;display:inline-block\">&nbsp;<\/span> &nbsp; &nbsp; &nbsp; &nbsp;<span class=\"f_CodeExample\">{<\/span><\/p>\n\r<p class=\"p_CodeExample\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span style=\"width:3.0000rem;display:inline-block\">&nbsp;<\/span> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span class=\"f_CodeExample\">&quot;serialNumber&quot;: &quot;9a81c5de1e811202&quot;,<\/span><\/p>\n\r<p class=\"p_CodeExample\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span style=\"width:3.0000rem;display:inline-block\">&nbsp;<\/span> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span class=\"f_CodeExample\">&quot;type&quot;: &quot;&quot;,<\/span><\/p>\n\r<p class=\"p_CodeExample\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span style=\"width:3.0000rem;display:inline-block\">&nbsp;<\/span> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span class=\"f_CodeExample\">&quot;version&quot;: &quot;&quot;,<\/span><\/p>\n\r<p class=\"p_CodeExample\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span style=\"width:3.0000rem;display:inline-block\">&nbsp;<\/span> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span class=\"f_CodeExample\">&quot;resources&quot;: [<\/span><\/p>\n\r<p class=\"p_CodeExample\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span style=\"width:3.0000rem;display:inline-block\">&nbsp;<\/span> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span class=\"f_CodeExample\">{<\/span><\/p>\n\r<p class=\"p_CodeExample\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span style=\"width:3.0000rem;display:inline-block\">&nbsp;<\/span> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span class=\"f_CodeExample\">&quot;id&quot;: 16,<\/span><\/p>\n\r<p class=\"p_CodeExample\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span style=\"width:3.0000rem;display:inline-block\">&nbsp;<\/span> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span class=\"f_CodeExample\">&quot;instance&quot;: 0,<\/span><\/p>\n\r<p class=\"p_CodeExample\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span style=\"width:3.0000rem;display:inline-block\">&nbsp;<\/span> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span class=\"f_CodeExample\">&quot;values&quot;: [<\/span><\/p>\n\r<p class=\"p_CodeExample\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span style=\"width:3.0000rem;display:inline-block\">&nbsp;<\/span> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span class=\"f_CodeExample\">{<\/span><\/p>\n\r<p class=\"p_CodeExample\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span style=\"width:3.0000rem;display:inline-block\">&nbsp;<\/span> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span class=\"f_CodeExample\">&quot;t&quot;: &quot;2019-10-07T14:54:19.573Z&quot;,<\/span><\/p>\n\r<p class=\"p_CodeExample\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span style=\"width:3.0000rem;display:inline-block\">&nbsp;<\/span> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span class=\"f_CodeExample\">&quot;v&quot;: &quot;0&quot;<\/span><\/p>\n\r<p class=\"p_CodeExample\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span style=\"width:3.0000rem;display:inline-block\">&nbsp;<\/span> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span class=\"f_CodeExample\">}<\/span><\/p>\n\r<p class=\"p_CodeExample\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span style=\"width:3.0000rem;display:inline-block\">&nbsp;<\/span> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span class=\"f_CodeExample\">]<\/span><\/p>\n\r<p class=\"p_CodeExample\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span style=\"width:3.0000rem;display:inline-block\">&nbsp;<\/span> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span class=\"f_CodeExample\">}<\/span><\/p>\n\r<p class=\"p_CodeExample\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span style=\"width:3.0000rem;display:inline-block\">&nbsp;<\/span> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span class=\"f_CodeExample\">]<\/span><\/p>\n\r<p class=\"p_CodeExample\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span style=\"width:3.0000rem;display:inline-block\">&nbsp;<\/span> &nbsp; &nbsp; &nbsp; &nbsp;<span class=\"f_CodeExample\">}<\/span><\/p>\n\r<p class=\"p_CodeExample\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span style=\"width:3.0000rem;display:inline-block\">&nbsp;<\/span><span class=\"f_CodeExample\">]<\/span><\/p>\n\r<p class=\"p_CodeExample\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span class=\"f_CodeExample\">}<\/span><\/p>\n\r<\/td>\n\r<\/tr>\n\r<\/table>\n\r<\/div>\n\r<p class=\"p_ImageCaption\"><a id=\"fig_810e83\" class=\"hmanchor\"><\/a><span class=\"f_ImageCaption\">Figure 5: Example message<\/span><\/p>\n\r"
})
