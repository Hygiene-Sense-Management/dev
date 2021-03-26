hmLoadTopic({
hmKeywords:"",
hmTitle:"Device gateway link status",
hmDescription:"Application Properties Property  message-type Always set to device-gateway-link-status message-type-version 1.0.0  sender EUI48 or EUI64 of gateway Message body The body",
hmPrevLink:"gateway-heartbeat.html",
hmNextLink:"sensor-data-.html",
hmParentLink:"prdp-message-types.html",
hmBreadCrumbs:"<a href=\"backend-infrastructure.html\">Backend infrastructure<\/a> &gt; <a href=\"pdpr.html\">Primary Data Processing<\/a> &gt; <a href=\"prdp-message-types.html\">Message types &amp; protocols<\/a>",
hmTitlePath:"Backend infrastructure > Primary Data Processing > Message types & protocols > Device gateway link status",
hmHeader:"<h1 class=\"p_Heading1\"><span class=\"f_Heading1\">Device gateway link status<\/span><\/h1>\n\r",
hmBody:"<h1 class=\"p_Heading1\"><span class=\"f_Heading1\">Application Properties<\/span><\/h1>\n\r<div style=\"text-align: left; text-indent: 0; line-height: 1.44; padding: 0 0 0 0; margin: 0.2500rem 0 0.3750rem 0;\"><table style=\"width:43.7500rem; border:none; border-spacing:0; border-collapse:collapse;\">\n\r<thead>\n\r<tr>\n\r<th style=\"vertical-align:top; background-color:#F5F5F5; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">Property<\/p>\n\r<\/th>\n\r<th style=\"vertical-align:top; background-color:#F5F5F5; padding:0.1250rem; border:solid thin #e1e1e1;\"><br \/>\n\r<\/th>\n\r<\/tr>\n\r<\/thead>\n\r<tbody>\n\r<tr>\n\r<td style=\"vertical-align:top; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">message-type<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">Always set to <span class=\"f_InlineCode\">device-gateway-link-status<\/span><\/p>\n\r<\/td>\n\r<\/tr>\n\r<tr>\n\r<td style=\"vertical-align:top; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">message-type-version<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_InlineCode\"><span class=\"f_InlineCode\">1.0.0<\/span> <\/p>\n\r<\/td>\n\r<\/tr>\n\r<tr>\n\r<td style=\"vertical-align:top; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">sender<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">EUI48 or EUI64 of gateway<\/p>\n\r<\/td>\n\r<\/tr>\n\r<\/tbody>\n\r<\/table>\n\r<\/div>\n\r<h1 class=\"p_Heading1\"><span class=\"f_Heading1\">Message body<\/span><\/h1>\n\r<p class=\"p_Normal\">The body of this message type contains a JSON document that can list the status for multiple non-gateway devices.<\/p>\n\r<div style=\"text-align: left; text-indent: 0; line-height: 1.44; padding: 0 0 0 0; margin: 0.2500rem 0 0.3750rem 0;\"><table class=\"Box\" >\n\r<tr class=\"Box\">\n\r<td class=\"Box\"><p class=\"p_CodeExample\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span class=\"f_CodeExample\">{<\/span><\/p>\n\r<p class=\"p_CodeExample\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span style=\"width:3.0000rem;display:inline-block\">&nbsp;<\/span><span class=\"f_CodeExample\">&quot;definitions&quot;: {},<\/span><\/p>\n\r<p class=\"p_CodeExample\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span style=\"width:3.0000rem;display:inline-block\">&nbsp;<\/span><span class=\"f_CodeExample\">&quot;\$schema&quot;: &quot;http:\/\/json-schema.org\/draft-07\/schema#&quot;, <\/span><\/p>\n\r<p class=\"p_CodeExample\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span style=\"width:3.0000rem;display:inline-block\">&nbsp;<\/span><span class=\"f_CodeExample\">&quot;\$id&quot;: &quot;https:\/\/example.com\/object1616498845.json&quot;, <\/span><\/p>\n\r<p class=\"p_CodeExample\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span style=\"width:3.0000rem;display:inline-block\">&nbsp;<\/span><span class=\"f_CodeExample\">&quot;title&quot;: &quot;Root&quot;, <\/span><\/p>\n\r<p class=\"p_CodeExample\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span style=\"width:3.0000rem;display:inline-block\">&nbsp;<\/span><span class=\"f_CodeExample\">&quot;type&quot;: &quot;object&quot;,<\/span><\/p>\n\r<p class=\"p_CodeExample\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span style=\"width:3.0000rem;display:inline-block\">&nbsp;<\/span><span class=\"f_CodeExample\">&quot;required&quot;: [<\/span><\/p>\n\r<p class=\"p_CodeExample\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span style=\"width:3.0000rem;display:inline-block\">&nbsp;<\/span> &nbsp; &nbsp; &nbsp; &nbsp;<span class=\"f_CodeExample\">&quot;Devices&quot;<\/span><\/p>\n\r<p class=\"p_CodeExample\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span style=\"width:3.0000rem;display:inline-block\">&nbsp;<\/span><span class=\"f_CodeExample\">],<\/span><\/p>\n\r<p class=\"p_CodeExample\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span style=\"width:3.0000rem;display:inline-block\">&nbsp;<\/span><span class=\"f_CodeExample\">&quot;properties&quot;: {<\/span><\/p>\n\r<p class=\"p_CodeExample\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span style=\"width:3.0000rem;display:inline-block\">&nbsp;<\/span> &nbsp; &nbsp; &nbsp; &nbsp;<span class=\"f_CodeExample\">&quot;Devices&quot;: {<\/span><\/p>\n\r<p class=\"p_CodeExample\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span style=\"width:3.0000rem;display:inline-block\">&nbsp;<\/span> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span class=\"f_CodeExample\">&quot;\$id&quot;: &quot;#root\/Devices&quot;, <\/span><\/p>\n\r<p class=\"p_CodeExample\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span style=\"width:3.0000rem;display:inline-block\">&nbsp;<\/span> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span class=\"f_CodeExample\">&quot;title&quot;: &quot;Devices&quot;, <\/span><\/p>\n\r<p class=\"p_CodeExample\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span style=\"width:3.0000rem;display:inline-block\">&nbsp;<\/span> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span class=\"f_CodeExample\">&quot;type&quot;: &quot;array&quot;,<\/span><\/p>\n\r<p class=\"p_CodeExample\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span style=\"width:3.0000rem;display:inline-block\">&nbsp;<\/span> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span class=\"f_CodeExample\">&quot;default&quot;: [],<\/span><\/p>\n\r<p class=\"p_CodeExample\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span style=\"width:3.0000rem;display:inline-block\">&nbsp;<\/span> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span class=\"f_CodeExample\">&quot;items&quot;:{<\/span><\/p>\n\r<p class=\"p_CodeExample\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span style=\"width:3.0000rem;display:inline-block\">&nbsp;<\/span> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span class=\"f_CodeExample\">&quot;\$id&quot;: &quot;#root\/Devices\/items&quot;, <\/span><\/p>\n\r<p class=\"p_CodeExample\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span style=\"width:3.0000rem;display:inline-block\">&nbsp;<\/span> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span class=\"f_CodeExample\">&quot;title&quot;: &quot;Items&quot;, <\/span><\/p>\n\r<p class=\"p_CodeExample\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span style=\"width:3.0000rem;display:inline-block\">&nbsp;<\/span> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span class=\"f_CodeExample\">&quot;type&quot;: &quot;object&quot;,<\/span><\/p>\n\r<p class=\"p_CodeExample\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span style=\"width:3.0000rem;display:inline-block\">&nbsp;<\/span> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span class=\"f_CodeExample\">&quot;required&quot;: [<\/span><\/p>\n\r<p class=\"p_CodeExample\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span style=\"width:3.0000rem;display:inline-block\">&nbsp;<\/span> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span class=\"f_CodeExample\">&quot;Id&quot;,<\/span><\/p>\n\r<p class=\"p_CodeExample\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span style=\"width:3.0000rem;display:inline-block\">&nbsp;<\/span> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span class=\"f_CodeExample\">&quot;Timestamp&quot;,<\/span><\/p>\n\r<p class=\"p_CodeExample\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span style=\"width:3.0000rem;display:inline-block\">&nbsp;<\/span> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span class=\"f_CodeExample\">&quot;Status&quot;<\/span><\/p>\n\r<p class=\"p_CodeExample\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span style=\"width:3.0000rem;display:inline-block\">&nbsp;<\/span> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span class=\"f_CodeExample\">],<\/span><\/p>\n\r<p class=\"p_CodeExample\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span style=\"width:3.0000rem;display:inline-block\">&nbsp;<\/span> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span class=\"f_CodeExample\">&quot;properties&quot;: {<\/span><\/p>\n\r<p class=\"p_CodeExample\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span style=\"width:3.0000rem;display:inline-block\">&nbsp;<\/span> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span class=\"f_CodeExample\">&quot;Id&quot;: {<\/span><\/p>\n\r<p class=\"p_CodeExample\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span style=\"width:3.0000rem;display:inline-block\">&nbsp;<\/span> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span class=\"f_CodeExample\">&quot;\$id&quot;: &quot;#root\/Devices\/items\/Id&quot;, <\/span><\/p>\n\r<p class=\"p_CodeExample\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span style=\"width:3.0000rem;display:inline-block\">&nbsp;<\/span> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span class=\"f_CodeExample\">&quot;title&quot;: &quot;Id&quot;, <\/span><\/p>\n\r<p class=\"p_CodeExample\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span style=\"width:3.0000rem;display:inline-block\">&nbsp;<\/span> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span class=\"f_CodeExample\">&quot;type&quot;: &quot;string&quot;,<\/span><\/p>\n\r<p class=\"p_CodeExample\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span style=\"width:3.0000rem;display:inline-block\">&nbsp;<\/span> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span class=\"f_CodeExample\">&quot;default&quot;: &quot;&quot;,<\/span><\/p>\n\r<p class=\"p_CodeExample\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span style=\"width:3.0000rem;display:inline-block\">&nbsp;<\/span> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span class=\"f_CodeExample\">&quot;examples&quot;: [<\/span><\/p>\n\r<p class=\"p_CodeExample\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span style=\"width:3.0000rem;display:inline-block\">&nbsp;<\/span> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span class=\"f_CodeExample\">&quot;asd-asd-asd-asd&quot;<\/span><\/p>\n\r<p class=\"p_CodeExample\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span style=\"width:3.0000rem;display:inline-block\">&nbsp;<\/span> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span class=\"f_CodeExample\">],<\/span><\/p>\n\r<p class=\"p_CodeExample\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span style=\"width:3.0000rem;display:inline-block\">&nbsp;<\/span> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span class=\"f_CodeExample\">&quot;pattern&quot;: &quot;^.*\$&quot;<\/span><\/p>\n\r<p class=\"p_CodeExample\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span style=\"width:3.0000rem;display:inline-block\">&nbsp;<\/span> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span class=\"f_CodeExample\">},<\/span><\/p>\n\r<p class=\"p_CodeExample\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span style=\"width:3.0000rem;display:inline-block\">&nbsp;<\/span> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span class=\"f_CodeExample\">&quot;Timestamp&quot;: {<\/span><\/p>\n\r<p class=\"p_CodeExample\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span style=\"width:3.0000rem;display:inline-block\">&nbsp;<\/span> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span class=\"f_CodeExample\">&quot;\$id&quot;: &quot;#root\/Devices\/items\/Timestamp&quot;, <\/span><\/p>\n\r<p class=\"p_CodeExample\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span style=\"width:3.0000rem;display:inline-block\">&nbsp;<\/span> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span class=\"f_CodeExample\">&quot;title&quot;: &quot;Timestamp&quot;, <\/span><\/p>\n\r<p class=\"p_CodeExample\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span style=\"width:3.0000rem;display:inline-block\">&nbsp;<\/span> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span class=\"f_CodeExample\">&quot;type&quot;: &quot;string&quot;,<\/span><\/p>\n\r<p class=\"p_CodeExample\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span style=\"width:3.0000rem;display:inline-block\">&nbsp;<\/span> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span class=\"f_CodeExample\">&quot;default&quot;: &quot;&quot;,<\/span><\/p>\n\r<p class=\"p_CodeExample\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span style=\"width:3.0000rem;display:inline-block\">&nbsp;<\/span> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span class=\"f_CodeExample\">&quot;examples&quot;: [<\/span><\/p>\n\r<p class=\"p_CodeExample\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span style=\"width:3.0000rem;display:inline-block\">&nbsp;<\/span> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span class=\"f_CodeExample\">&quot;2021-02-28 22:15:14.123+01:00&quot;<\/span><\/p>\n\r<p class=\"p_CodeExample\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span style=\"width:3.0000rem;display:inline-block\">&nbsp;<\/span> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span class=\"f_CodeExample\">],<\/span><\/p>\n\r<p class=\"p_CodeExample\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span style=\"width:3.0000rem;display:inline-block\">&nbsp;<\/span> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span class=\"f_CodeExample\">&quot;pattern&quot;: &quot;^.*\$&quot;<\/span><\/p>\n\r<p class=\"p_CodeExample\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span style=\"width:3.0000rem;display:inline-block\">&nbsp;<\/span> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span class=\"f_CodeExample\">},<\/span><\/p>\n\r<p class=\"p_CodeExample\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span style=\"width:3.0000rem;display:inline-block\">&nbsp;<\/span> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span class=\"f_CodeExample\">&quot;Status&quot;: {<\/span><\/p>\n\r<p class=\"p_CodeExample\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span style=\"width:3.0000rem;display:inline-block\">&nbsp;<\/span> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span class=\"f_CodeExample\">&quot;\$id&quot;: &quot;#root\/Devices\/items\/Status&quot;, <\/span><\/p>\n\r<p class=\"p_CodeExample\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span style=\"width:3.0000rem;display:inline-block\">&nbsp;<\/span> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span class=\"f_CodeExample\">&quot;title&quot;: &quot;Status&quot;, <\/span><\/p>\n\r<p class=\"p_CodeExample\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span style=\"width:3.0000rem;display:inline-block\">&nbsp;<\/span> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span class=\"f_CodeExample\">&quot;type&quot;: &quot;string&quot;,<\/span><\/p>\n\r<p class=\"p_CodeExample\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span style=\"width:3.0000rem;display:inline-block\">&nbsp;<\/span> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span class=\"f_CodeExample\">&quot;default&quot;: &quot;&quot;,<\/span><\/p>\n\r<p class=\"p_CodeExample\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span style=\"width:3.0000rem;display:inline-block\">&nbsp;<\/span> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span class=\"f_CodeExample\">&quot;examples&quot;: [<\/span><\/p>\n\r<p class=\"p_CodeExample\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span style=\"width:3.0000rem;display:inline-block\">&nbsp;<\/span> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span class=\"f_CodeExample\">&quot;online&quot;<\/span><\/p>\n\r<p class=\"p_CodeExample\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span style=\"width:3.0000rem;display:inline-block\">&nbsp;<\/span> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span class=\"f_CodeExample\">],<\/span><\/p>\n\r<p class=\"p_CodeExample\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span style=\"width:3.0000rem;display:inline-block\">&nbsp;<\/span> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span class=\"f_CodeExample\">&quot;pattern&quot;: &quot;^.*\$&quot;<\/span><\/p>\n\r<p class=\"p_CodeExample\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span style=\"width:3.0000rem;display:inline-block\">&nbsp;<\/span> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span class=\"f_CodeExample\">}<\/span><\/p>\n\r<p class=\"p_CodeExample\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span style=\"width:3.0000rem;display:inline-block\">&nbsp;<\/span> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span class=\"f_CodeExample\">}<\/span><\/p>\n\r<p class=\"p_CodeExample\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span style=\"width:3.0000rem;display:inline-block\">&nbsp;<\/span> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span class=\"f_CodeExample\">}<\/span><\/p>\n\r<p class=\"p_CodeExample\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span class=\"f_CodeExample\">&nbsp;<\/span><\/p>\n\r<p class=\"p_CodeExample\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span style=\"width:3.0000rem;display:inline-block\">&nbsp;<\/span> &nbsp; &nbsp; &nbsp; &nbsp;<span class=\"f_CodeExample\">}<\/span><\/p>\n\r<p class=\"p_CodeExample\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span style=\"width:3.0000rem;display:inline-block\">&nbsp;<\/span><span class=\"f_CodeExample\">}<\/span><\/p>\n\r<p class=\"p_CodeExample\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span class=\"f_CodeExample\">}<\/span><\/p>\n\r<p class=\"p_CodeExample\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span class=\"f_CodeExample\">&nbsp;<\/span><\/p>\n\r<\/td>\n\r<\/tr>\n\r<\/table>\n\r<\/div>\n\r<div style=\"text-align: left; text-indent: 0; line-height: 1.44; padding: 0 0 0 0; margin: 0.2500rem 0 0.3750rem 0;\"><table class=\"Box\" >\n\r<tr class=\"Box\">\n\r<td class=\"Box\"><p class=\"p_CodeExample\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span class=\"f_CodeExample\">{<\/span><\/p>\n\r<p class=\"p_CodeExample\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span class=\"f_CodeExample\"> &nbsp;&quot;Devices&quot;: <\/span><\/p>\n\r<p class=\"p_CodeExample\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span class=\"f_CodeExample\"> &nbsp;[<\/span><\/p>\n\r<p class=\"p_CodeExample\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span class=\"f_CodeExample\"> &nbsp; &nbsp;{<\/span><\/p>\n\r<p class=\"p_CodeExample\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span class=\"f_CodeExample\"> &nbsp; &nbsp; &nbsp;&quot;ComponentIdentifier&quot;: &quot;asd-asd-asd-asd&quot;,<\/span><\/p>\n\r<p class=\"p_CodeExample\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span class=\"f_CodeExample\"> &nbsp; &nbsp; &nbsp;&quot;Timestamp&quot;: &quot;2021-02-28 22:15:14.123+01:00&quot;,<\/span><\/p>\n\r<p class=\"p_CodeExample\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span class=\"f_CodeExample\"> &nbsp; &nbsp; &nbsp;&quot;Status&quot;: &quot;online&quot;<\/span><\/p>\n\r<p class=\"p_CodeExample\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span class=\"f_CodeExample\"> &nbsp; &nbsp;},<\/span><\/p>\n\r<p class=\"p_CodeExample\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span class=\"f_CodeExample\"> &nbsp; &nbsp;{<\/span><\/p>\n\r<p class=\"p_CodeExample\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span class=\"f_CodeExample\"> &nbsp; &nbsp; &nbsp;&quot;ComponentIdentifier&quot;: &quot;asd-asd-asd-123&quot;,<\/span><\/p>\n\r<p class=\"p_Normal\"><span class=\"f_CodeExample\"> &nbsp; &nbsp; &nbsp;&quot;Timestamp&quot;: &quot;2021-02-28 22:13:12.345+01:00&quot;,<\/span><\/p>\n\r<p class=\"p_CodeExample\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span class=\"f_CodeExample\"> &nbsp; &nbsp; &nbsp;&quot;Status&quot;: &quot;offline&quot;<\/span><\/p>\n\r<p class=\"p_CodeExample\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span class=\"f_CodeExample\"> &nbsp; &nbsp;},<\/span><\/p>\n\r<p class=\"p_CodeExample\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span class=\"f_CodeExample\"> &nbsp;]<\/span><\/p>\n\r<p class=\"p_CodeExample\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span class=\"f_CodeExample\">}<\/span><\/p>\n\r<\/td>\n\r<\/tr>\n\r<\/table>\n\r<\/div>\n\r"
})
