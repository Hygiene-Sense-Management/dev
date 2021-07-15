hmLoadTopic({
hmKeywords:"",
hmTitle:"func-iot-routing-tss",
hmDescription:"This function persists the values extracted from resource instance data messages to the time series database which is the basis for the data analysis service.",
hmPrevLink:"impr-func-iot-routing-rvs.html",
hmNextLink:"impr-iot-routing-css.html",
hmParentLink:"impr-data-processing-functions.html",
hmBreadCrumbs:"<a href=\"backend-infrastructure.html\">Backend infrastructure<\/a> &gt; <a href=\"impr.html\">IoT Message Processing<\/a> &gt; <a href=\"impr-data-processing-functions.html\">Primary data processing functions<\/a>",
hmTitlePath:"Backend infrastructure > IoT Message Processing > Primary data processing functions > func-iot-routing-tss",
hmHeader:"<h1 class=\"p_Heading1\"><span class=\"f_Heading1\">func-iot-routing-tss<\/span><\/h1>\n\r",
hmBody:"<p class=\"p_Normal\">This function persists the values extracted from <a href=\"impr-messagetype-resource-instance-data.html\" class=\"topiclink\">resource instance data messages<\/a> to the time series database which is the basis for the <a href=\"daan.html\" class=\"topiclink\">data analysis service<\/a>.<\/p>\n\r<p class=\"p_CondensedNormal\"><span class=\"f_CondensedNormal\">The resource instance values within the message must have a time-stamp greater than current date and time - 30 days and less than current date and time + 5 minutes. &nbsp;Resource instance values with time-stamps outside of this interval will be discarded (and a log message will be written in this case.)<\/span><\/p>\n\r"
})
