hmLoadTopic({
hmKeywords:"",
hmTitle:"Gateway oriented storage structure",
hmDescription:"The gateway oriented blob storage container is not turned on by default but can be enabled by configuration of the Func-iot-routing-rvs function. This raw data storage...",
hmPrevLink:"raw-data-blob-storage-structur.html",
hmNextLink:"gateway-registration.html",
hmParentLink:"prdp-raw-data-storage.html",
hmBreadCrumbs:"<a href=\"backend-infrastructure.html\">Backend infrastructure<\/a> &gt; <a href=\"pdpr.html\">Primary Data Processing<\/a> &gt; <a href=\"prdp-raw-data-storage.html\">Raw data storage<\/a>",
hmTitlePath:"Backend infrastructure > Primary Data Processing > Raw data storage > Gateway oriented storage structure",
hmHeader:"<h1 class=\"p_Heading1\"><span class=\"f_Heading1\">Gateway oriented storage structure<\/span><\/h1>\n\r",
hmBody:"<p class=\"p_Normal\">The gateway oriented blob storage container is not turned on by default but can be enabled by configuration of the <span class=\"f_Term\">Func-iot-routing-rvs <\/span>function. This raw data storage container is mainly intended to help developers with debugging the IoT Hub communication. HsM does not use or process the data in this storage in any way but keeps it for reasons of long-term data safety.<\/p>\n\r<p class=\"p_Normal\">Figure 7 shows the virtual file system structure used in this container. Additional to the parts described in <a href=\"raw-data-blob-storage-structur.html\" class=\"topiclink\">Date oriented storage structure<\/a> this structure also includes a <span class=\"f_InlineCode\">GatewayNetworkId<\/span> that identifies the Gateway used to send data to the HsM Backend.<\/p>\n\r<p class=\"p_Normal\"><img alt=\"prdp-rawdatastorage-virtual-structure-gateway\" style=\"margin:0;width:30.6875rem;height:15.2500rem;border:none\" src=\".\/images\/prdp-rawdatastorage-virtual-structure-gateway.png\"\/><\/p>\n\r<p class=\"p_Normal\"><a id=\"fig_1bb563\" class=\"hmanchor\"><\/a><span class=\"f_ImageCaption\">Figure 8: &nbsp;The virtual file system structure used in the Raw Data Blob Storage container. <\/span><\/p>\n\r<p class=\"p_Normal\">&nbsp;<\/p>\n\r"
})
