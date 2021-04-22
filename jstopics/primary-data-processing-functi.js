hmLoadTopic({
hmKeywords:"",
hmTitle:"Primary data processing functions",
hmDescription:"HsM uses Azure functions to persist data received through the Azure IoT-hub to various storage systems.",
hmPrevLink:"prdp-message-routing.html",
hmNextLink:"func-iot-routing-rvs.html",
hmParentLink:"pdpr.html",
hmBreadCrumbs:"<a href=\"backend-infrastructure.html\">Backend infrastructure<\/a> &gt; <a href=\"pdpr.html\">Primary Data Processing<\/a>",
hmTitlePath:"Backend infrastructure > Primary Data Processing > Primary data processing functions",
hmHeader:"<h1 class=\"p_Heading1\"><span class=\"f_Heading1\">Primary data processing functions<\/span><\/h1>\n\r",
hmBody:"<p class=\"p_Normal\">HsM uses Azure functions to persist data received through the Azure IoT-hub to various storage systems.<\/p>\n\r<h1 class=\"p_Heading1\"><span class=\"f_Heading1\">func-iot-routing-css<\/span><\/h1>\n\r<p class=\"p_Normal\">This function persists the latest value of resource instances to the current status storage table within the database of the client service. This database therefore has knowledge about the latest reported state of each resource instance of each device.<\/p>\n\r<h1 class=\"p_Heading1\"><span class=\"f_Heading1\">func-iot-routing-tss<\/span><\/h1>\n\r<p class=\"p_Normal\">This function persists the value of resource instances to the time series database which is the basis for the <a href=\"dans.html\" class=\"topiclink\">data analysis service<\/a>.<\/p>\n\r<h1 class=\"p_Heading1\"><span class=\"f_Heading1\">func-iot-routing-rvs<\/span><\/h1>\n\r<p class=\"p_Normal\">This function persists the value of resource instances to the <a href=\"prdp-raw-data-storage.html\" class=\"topiclink\">raw data storage<\/a>.<\/p>\n\r<h1 class=\"p_Heading1\"><span class=\"f_Heading1\">&nbsp;<\/span><\/h1>\n\r<p class=\"p_Normal\">&nbsp;<\/p>\n\r"
})
