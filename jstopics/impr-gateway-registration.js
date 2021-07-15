hmLoadTopic({
hmKeywords:"",
hmTitle:"Gateway registration",
hmDescription:"All gateways must be registered with the Azure IoT Hub before they can send messages.",
hmPrevLink:"impr-blob-contents.html",
hmNextLink:"isco.html",
hmParentLink:"impr.html",
hmBreadCrumbs:"<a href=\"backend-infrastructure.html\">Backend infrastructure<\/a> &gt; <a href=\"impr.html\">IoT Message Processing<\/a>",
hmTitlePath:"Backend infrastructure > IoT Message Processing > Gateway registration",
hmHeader:"<h1 class=\"p_Heading1\"><span class=\"f_Heading1\">Gateway registration<\/span><\/h1>\n\r",
hmBody:"<p class=\"p_Normal\">All gateways must be registered with the Azure IoT Hub before they can send messages.<\/p>\n\r<p class=\"p_Normal\">The Client Service provides the function to register gateways on Azure IoT Hub. This way of registering devices is used by mobile gateways. There is an enpoint that delivers connsction strings (including the shared access key)<\/p>\n\r<p class=\"p_Normal\">Stationary gateways are registered via the Azure device provisioning service. During production stationary gateways are already enrolled with the azure device provisioning service. Once the device starts up it will get the address of the Azure IoT Hub it shall connect to from the device provisioning service and with it it also gets the authorization to connect to that Azure IoT Hub.<\/p>\n\r"
})
