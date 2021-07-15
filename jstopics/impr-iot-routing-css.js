hmLoadTopic({
hmKeywords:"",
hmTitle:"func-iot-routing-css",
hmDescription:"This function persists the latest value of resource instances to the current status storage table within the database of the Client Service. This way the Client Service has...",
hmPrevLink:"impr-iot-routing-tss.html",
hmNextLink:"impr-iot-routing-legacy.html",
hmParentLink:"impr-data-processing-functions.html",
hmBreadCrumbs:"<a href=\"backend-infrastructure.html\">Backend infrastructure<\/a> &gt; <a href=\"impr.html\">IoT Message Processing<\/a> &gt; <a href=\"impr-data-processing-functions.html\">Primary data processing functions<\/a>",
hmTitlePath:"Backend infrastructure > IoT Message Processing > Primary data processing functions > func-iot-routing-css",
hmHeader:"<h1 class=\"p_Heading1\"><span class=\"f_Heading1\">func-iot-routing-css<\/span><\/h1>\n\r",
hmBody:"<p class=\"p_Normal\">This function persists the latest value of resource instances to the current status storage table within the database of the Client Service. This way the Client Service has knowledge about the latest reported state of each resource instance of each device.<\/p>\n\r<p class=\"p_CondensedNormal\"><span class=\"f_CondensedNormal\">The resource instance values within the message must have a time-stamp greater than current date and time - 30 days and less than current date and time + 5 minutes. &nbsp;Resource instance values with time-stamps outside of this interval will be discarded (and a log message will be written in this case.)<\/span><\/p>\n\r<p class=\"p_Normal\">The function will only update the current status storage within the Client Service database if the received values are actually more recent than the latest stored data in the database. The function will also compare the latest value in the current status storage of the Client Service against the value in the resource instance data message. If the values are the same the function will only update the LastUpdate date in the Client Service to indicate that the a resource value was received but did not change.<\/p>\n\r"
})
