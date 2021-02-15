hmLoadTopic({
hmKeywords:"",
hmTitle:"Compound devices",
hmDescription:"The Digital Twin Service supports compound device types. It records the current relationship between devices and keeps a history of relationships between devices.",
hmPrevLink:"dtws-lifecycle-compound.html",
hmNextLink:"extended-properties.html",
hmParentLink:"dtws.html",
hmBreadCrumbs:"<a href=\"neutral-backend-infrastructure.html\">Neutral backend infrastructure<\/a> &gt; <a href=\"dtws.html\">Digital Twin Service<\/a>",
hmTitlePath:"Neutral backend infrastructure > Digital Twin Service > Compound devices",
hmHeader:"<h1 class=\"p_Heading1\"><span class=\"f_Heading1\">Compound devices<\/span><\/h1>\n\r",
hmBody:"<p class=\"p_Normal\">The Digital Twin Service supports <a href=\"compound-device-types.html\" class=\"topiclink\">compound device types<\/a>. It records the current relationship between devices and keeps a history of relationships between devices.<\/p>\n\r<p class=\"p_Normal\">Terminology:<\/p>\n\r<p class=\"p_Normal\"><a id=\"compounddevice\" class=\"hmanchor\"><\/a>A device that has another device built-in is called a <span class=\"f_Identifier\">compound device<\/span>.<\/p>\n\r<p class=\"p_Normal\"><a id=\"compoundmemberdevice\" class=\"hmanchor\"><\/a>A device that is part of a parent device is called a <span class=\"f_Identifier\">compound member device.<\/span><\/p>\n\r<p class=\"p_Normal\">&nbsp;<\/p>\n\r<p class=\"p_Normal\">Getting the device id from a component id<\/p>\n\r<p class=\"p_Normal\">When querying the digital twin service for the device by the identifier of a component this query can be issued either for the component’s device or for the component’s root device.<\/p>\n\r<p class=\"p_Normal\">&nbsp;<\/p>\n\r<p class=\"p_Normal\">Getting the device ID by identifier of a component<\/p>\n\r<p class=\"p_Normal\">When evaluating the device id the digital twin service will first search for the given component id and will check if this component is registered with some device. If yes it will return the ID of that device.<\/p>\n\r<p class=\"p_Normal\">&nbsp;<\/p>\n\r<p class=\"p_Normal\">Getting the root device by identifier of a component<\/p>\n\r<p class=\"p_Normal\">When evaluating the root device id the digital twin service will first search for the given component id and will check if this component is registered with some device. Then the digital twin service will check if the device of the component is a contained device, if so it will return the id of the compound device, if not the device id is returned.<\/p>\n\r<p class=\"p_Normal\">&nbsp;<\/p>\n\r<p class=\"p_Normal\">Combining devices<\/p>\n\r<p class=\"p_Normal\">Compound devices are created by instances of the HsM Client Service. I.e. the relationship between a compound device and a compound member device is created by a user through some user interface and then the HsM Client Service will forward this relationship information to the digital twin service.<\/p>\n\r"
})
