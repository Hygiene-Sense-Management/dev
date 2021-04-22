hmLoadTopic({
hmKeywords:"",
hmTitle:"Device installation",
hmDescription:"Linking (the digital twin of) a device to a specific room within the location tree of a customer is called device installation. ",
hmPrevLink:"locking.html",
hmNextLink:"technical-check.html",
hmParentLink:"clse.html",
hmBreadCrumbs:"<a href=\"backend-infrastructure.html\">Backend infrastructure<\/a> &gt; <a href=\"clse.html\">Client Service<\/a>",
hmTitlePath:"Backend infrastructure > Client Service > Device installation",
hmHeader:"<h1 class=\"p_Heading1\"><span class=\"f_Heading1\">Device installation<\/span><\/h1>\n\r",
hmBody:"<p class=\"p_Normal\">Linking (the digital twin of) a device to a specific room within the location tree of a customer is called <span style=\"font-style: italic;\">device installation<\/span>. <\/p>\n\r<p class=\"p_Normal\">All devices known to the <a href=\"dtws.html\" class=\"topiclink\">digital twin service<\/a> (and only those) can be installed. To install a specific device in specific a room of a specific customer the user attempting the installation must be authorized to do so. A user is authorized to install a device if he has the appropriate permission on that room and if he can prove <\/p>\n\r<p class=\"p_Normal\">The user knows identifying characteristics of one component of a device AND has the permission to install devices at that specific customer.<\/p>\n\r<p class=\"p_Normal\">For a device to be installed the serial number of a component of this device has to be provided. HsM assumes that if you have access to a device\'s serial number you own the device and you are therefore allowed to link the device to a location. The serial number is encoded in the QR code printed on the device and is also printed a plain text next to the QR code.<\/p>\n\r<p class=\"p_Normal\">A device can be uninstalled and or moved to other locations (i.e. installed to another location). A device can be therefore be installed at multiple locations over time. But a device can only be installed at one location at any point in time. The Client Service keeps a historical record of the locations a device was installed to.<\/p>\n\r<p class=\"p_Normal\">&nbsp;<\/p>\n\r"
})
