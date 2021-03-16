hmLoadTopic({
hmKeywords:"",
hmTitle:"Data source",
hmDescription:"The data source defines what system created a record in the TRACE_Product table. Usually Records in the TRACE_Product Table should be created by the End-Test procedures, but...",
hmPrevLink:"product-record-state.html",
hmNextLink:"neutral-backend-infrastructure.html",
hmParentLink:"trace_product.html",
hmBreadCrumbs:"<a href=\"on-premise-infrastructure.html\">On Premise infrastructure<\/a> &gt; <a href=\"provieder-db.html\">Provider DB<\/a> &gt; <a href=\"trace_product.html\">TRACE_Product<\/a>",
hmTitlePath:"On Premise infrastructure > Provider DB > TRACE_Product > Data source",
hmHeader:"<h1 class=\"p_Heading1\"><span class=\"f_Heading1\">Data source<\/span><\/h1>\n\r",
hmBody:"<p class=\"p_Normal\">The data source defines what system created a record in the TRACE_Product table. Usually Records in the TRACE_Product Table should be created by the End-Test procedures, but there are other systems that also need to create records there in order to provide a consistent digital twin data flow.<\/p>\n\r<p class=\"p_Normal\">&nbsp;<\/p>\n\r<div style=\"text-align: left; text-indent: 0; padding: 0 0 0 0; margin: 0 0 0.3750rem 0;\"><table style=\"width:43.7500rem; border:none; border-spacing:0; border-collapse:collapse;\">\n\r<tr>\n\r<td style=\"vertical-align:top; padding:0.1250rem; border:solid thin #c0c0c0;\"><p class=\"p_Normal\">Data Source<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; padding:0.1250rem; border:solid thin #c0c0c0;\"><br \/>\n\r<\/td>\n\r<\/tr>\n\r<tr>\n\r<td style=\"vertical-align:top; padding:0.1250rem; border:solid thin #c0c0c0;\"><p class=\"p_Normal\">0<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; padding:0.1250rem; border:solid thin #c0c0c0;\"><p class=\"p_Normal\">End-Test procedure<\/p>\n\r<\/td>\n\r<\/tr>\n\r<tr>\n\r<td style=\"vertical-align:top; padding:0.1250rem; border:solid thin #c0c0c0;\"><p class=\"p_Normal\">1<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; padding:0.1250rem; border:solid thin #c0c0c0;\"><p class=\"p_Normal\">SEP-Data Takeover. In the past data were recorded by the End-Test procedures to a different database. At one point these records were taken over into the TRACE_Product table. The records created were marked with this source.<\/p>\n\r<\/td>\n\r<\/tr>\n\r<tr>\n\r<td style=\"vertical-align:top; padding:0.1250rem; border:solid thin #c0c0c0;\"><p class=\"p_Normal\">2<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; padding:0.1250rem; border:solid thin #c0c0c0;\"><p class=\"p_Normal\">Manual: <\/p>\n\r<\/td>\n\r<\/tr>\n\r<tr>\n\r<td style=\"vertical-align:top; padding:0.1250rem; border:solid thin #c0c0c0;\"><p class=\"p_Normal\">3<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; padding:0.1250rem; border:solid thin #c0c0c0;\"><p class=\"p_Normal\">At one point in time devices found in the HsM System but not in the Provider DB were inserted in the provider DB. This Data Source ID was used to mark them.<\/p>\n\r<\/td>\n\r<\/tr>\n\r<tr>\n\r<td style=\"vertical-align:top; padding:0.1250rem; border:solid thin #c0c0c0;\"><p class=\"p_Normal\">4<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; padding:0.1250rem; border:solid thin #c0c0c0;\"><p class=\"p_Normal\">QR Code generator<\/p>\n\r<\/td>\n\r<\/tr>\n\r<\/table>\n\r<\/div>\n\r<p class=\"p_Normal\">&nbsp;<\/p>\n\r<p class=\"p_Normal\">&nbsp;<\/p>\n\r"
})