hmLoadTopic({
hmKeywords:"",
hmTitle:"Date interval definitions",
hmDescription:"Date intervals are used to filter or query timestamped data that is within an given start date and end date. Since HsM deals with time-series a lot the HsM Client Service...",
hmPrevLink:"organization.html",
hmNextLink:"static-date-interval-definition.html",
hmParentLink:"client-service.html",
hmBreadCrumbs:"<a href=\"backend-infrastructure.html\">Backend infrastructure<\/a> &gt; <a href=\"client-service.html\">Client Service<\/a>",
hmTitlePath:"Backend infrastructure > Client Service > Date interval definitions",
hmHeader:"<h1 class=\"p_Heading1\"><span class=\"f_Heading1\">Date interval definitions<\/span><\/h1>\n\r",
hmBody:"<p class=\"p_Normal\">Date intervals are used to filter or query timestamped data that is within an given start date and end date. Since HsM deals with time-series a lot the HsM Client Service provides versatile ways of defining date intervals.<\/p>\n\r<p class=\"p_Normal\"><a href=\"static-date-interval-definition.html\" class=\"topiclink\">Static date interval definitions<\/a> contain a fixed start date and end date. <a href=\"adaptive-date-interval-specifi.html\" class=\"topiclink\">Adaptive date interval definitions<\/a> do not define fixed start and end dates but rather offsets that are applied to the current date and time when the adaptive date interval definition is accessed. I.e. an adaptive date interval definition is transformed to a static date interval definition based on the date and time when the definition is accessed.<\/p>\n\r<p class=\"p_Normal\">Both types of date interval definitions also allow to specify if the start date and end date are included in the date interval or not.<\/p>\n\r<h1 class=\"p_Heading1\"><span class=\"f_Heading1\">Validation<\/span><\/h1>\n\r<p class=\"p_Normal\">A valid date interval definition is valid if the effective date interval is proper or degenerated but not if it is empty (see <a href=\"https:\/\/en.wikipedia.org\/wiki\/Interval_(mathematics\" target=\"_blank\" class=\"weblink\">Wikipedia<\/a>) for an explanation of interval terminology)<\/p>\n\r"
})
