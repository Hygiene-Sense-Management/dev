hmLoadTopic({
hmKeywords:"",
hmTitle:"func-iot-routing-legacy",
hmDescription:"All messages that did not match the filter criteria of any route fill be caught by the built in Azure IoT Hub endpoint and will be routed to this function. This function will...",
hmPrevLink:"impr-iot-routing-css.html",
hmNextLink:"impr-raw-data-storage.html",
hmParentLink:"impr-data-processing-functions.html",
hmBreadCrumbs:"<a href=\"backend-infrastructure.html\">Backend infrastructure<\/a> &gt; <a href=\"impr.html\">IoT Message Processing<\/a> &gt; <a href=\"impr-data-processing-functions.html\">Primary data processing functions<\/a>",
hmTitlePath:"Backend infrastructure > IoT Message Processing > Primary data processing functions > func-iot-routing-legacy",
hmHeader:"<h1 class=\"p_Heading1\"><span class=\"f_Heading1\">func-iot-routing-legacy<\/span><\/h1>\n\r",
hmBody:"<p class=\"p_Normal\">All messages that did not match the filter criteria of any route fill be caught by the built in Azure IoT Hub endpoint and will be routed to this function. This function will try to detect legacy resource instance data messages (resource instance data messages that have no system or application properties) by inspecting the message body.<\/p>\n\r<p class=\"p_Normal\">If a legacy resource instance message is detected the function will enrich this message with message properties and will feed the message back into the event hub so that it will then be processed as usual.<\/p>\n\r<p class=\"p_Normal\">If the function did not detect a legacy message the message will be discarded an a log entry will be written.<\/p>\n\r"
})
