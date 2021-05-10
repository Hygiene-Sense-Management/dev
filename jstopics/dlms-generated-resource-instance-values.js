hmLoadTopic({
hmKeywords:"",
hmTitle:"Generated resource instance values",
hmDescription:"The Data Link Monitoring Service forwards key metrics as resource instance values. I.e. the Data Link Monitoring Service calculates these metrics and generates resource...",
hmPrevLink:"dlms-data-link-monitoring-logic.html",
hmNextLink:"dlms-connection-topology.html",
hmParentLink:"dlms.html",
hmBreadCrumbs:"<a href=\"backend-infrastructure.html\">Backend infrastructure<\/a> &gt; <a href=\"dlms.html\">Data Link Monitoring Service<\/a>",
hmTitlePath:"Backend infrastructure > Data Link Monitoring Service > Generated resource instance values",
hmHeader:"<h1 class=\"p_Heading1\"><span class=\"f_Heading1\">Generated resource instance values<\/span><\/h1>\n\r",
hmBody:"<p class=\"p_Normal\">The Data Link Monitoring Service forwards key <a href=\"dlms-connection-metrics.html\" class=\"topiclink\">metrics<\/a> as resource instance values. I.e. the Data Link Monitoring Service calculates these metrics and generates resource instance values that are then sent to the HsM Backend as if these metrics were generated by the devices themselves. This way those key metrics are made accessible to other components of HsM in a generic and efficient way.<\/p>\n\r<p class=\"p_Normal\">24 lists the metrics forwarded as resource instance values.<\/p>\n\r<div style=\"text-align: left; text-indent: 0; line-height: 1.44; padding: 0 0 0 0; margin: 0.7500rem 0 0.2500rem 0;\"><table style=\"width:43.7500rem; border:none; border-spacing:0; border-collapse:collapse;\">\n\r<thead>\n\r<tr>\n\r<th style=\"vertical-align:top; background-color:#F5F5F5; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">Metric and resource instance name<\/p>\n\r<\/th>\n\r<th style=\"vertical-align:top; background-color:#F5F5F5; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">Resource type<\/p>\n\r<\/th>\n\r<th style=\"vertical-align:top; background-color:#F5F5F5; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">Resource instance no<\/p>\n\r<\/th>\n\r<\/tr>\n\r<\/thead>\n\r<tbody>\n\r<tr>\n\r<td style=\"vertical-align:top; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">Data-link status<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_InlineCode\"><span class=\"f_InlineCode\">0xb001<\/span> <\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_InlineCode\"><span class=\"f_InlineCode\">0<\/span> <\/p>\n\r<\/td>\n\r<\/tr>\n\r<tr>\n\r<td style=\"vertical-align:top; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">Online Ratio<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_InlineCode\"><span class=\"f_InlineCode\">0xb002<\/span> <\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_InlineCode\"><span class=\"f_InlineCode\">0<\/span> <\/p>\n\r<\/td>\n\r<\/tr>\n\r<\/tbody>\n\r<\/table>\n\r<\/div>\n\r<p class=\"p_ImageCaption\"><a id=\"fig_8852e2\" class=\"hmanchor\"><\/a><span class=\"f_ImageCaption\">Table 25: Metrics forwarded as resource instance values<\/span><\/p>\n\r<div style=\"text-align: left; text-indent: 0; line-height: 1.44; padding: 0 0 0 0; margin: 0.3750rem 0 0.2500rem 0;\"><table style=\"width:43.7500rem; border:none; border-spacing:0; border-collapse:collapse;\">\n\r<thead>\n\r<tr>\n\r<th style=\"vertical-align:top; background-color:#F5F5F5; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">data-link status<\/p>\n\r<\/th>\n\r<th style=\"vertical-align:top; background-color:#F5F5F5; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">Stored resource instance value<\/p>\n\r<\/th>\n\r<\/tr>\n\r<\/thead>\n\r<tbody>\n\r<tr>\n\r<td style=\"vertical-align:top; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">Not connected<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">3<\/p>\n\r<\/td>\n\r<\/tr>\n\r<tr>\n\r<td style=\"vertical-align:top; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">Online<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">2<\/p>\n\r<\/td>\n\r<\/tr>\n\r<tr>\n\r<td style=\"vertical-align:top; height:2.4375rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">Temporarily offline<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; height:2.4375rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">1<\/p>\n\r<\/td>\n\r<\/tr>\n\r<tr>\n\r<td style=\"vertical-align:top; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">Offline<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">0<\/p>\n\r<\/td>\n\r<\/tr>\n\r<\/tbody>\n\r<\/table>\n\r<\/div>\n\r<p class=\"p_ImageCaption\"><a id=\"fig_8852e2\" class=\"hmanchor\"><\/a><span class=\"f_ImageCaption\">Table 25: Translation of data-link status to values stored witht he data-link status resource instance.<\/span><\/p>\n\r"
})
