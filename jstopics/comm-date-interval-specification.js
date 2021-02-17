hmLoadTopic({
hmKeywords:"",
hmTitle:"Date interval specification",
hmDescription:"Date interval specifications are used to filter or query timestamped data that is within an given start date and end date. Since HsM deals with time-series a lot the HsM Client...",
hmPrevLink:"comm.html",
hmNextLink:"comm-date-interval-specification-static.html",
hmParentLink:"comm.html",
hmBreadCrumbs:"<a href=\"comm.html\">Common<\/a>",
hmTitlePath:"Common > Date interval specification",
hmHeader:"<h1 class=\"p_Heading1\"><span class=\"f_Heading1\">Date interval specification<\/span><\/h1>\n\r",
hmBody:"<p class=\"p_Normal\"><span class=\"f_Identifier\">Date interval specifications<\/span> are used to filter or query timestamped data that is within an given start date and end date. Since HsM deals with time-series a lot the HsM Client Service provides versatile ways of specifying date intervals. Date interval specifications are based on date time offsets.<\/p>\n\r<p class=\"p_Normal\"><a href=\"comm-date-interval-specification-static.html\" class=\"topiclink\">Static date interval definitions<\/a> contain a fixed start date and end date. <a href=\"comm-date-interval-specification-adaptive.html\" class=\"topiclink\">Adaptive date interval definitions<\/a> do not define fixed start and end dates but rather offsets that are applied to the current date and time when the adaptive date interval specification is accessed. I.e. an adaptive date interval specification is transformed to a static date interval based on the date and time when the definition is accessed.<\/p>\n\r<p class=\"p_Normal\">Both types of date interval specification also allow to specify if the start date and end date are included in the date interval or not, i.e. if the resulting date interval is left-closed, left-open, right-closed or right-open.<\/p>\n\r<h1 class=\"p_Heading1\"><span class=\"f_Heading1\">Validation<\/span><\/h1>\n\r<p class=\"p_Normal\">A valid date interval definition is valid if the effective date interval is proper or degenerated but not if it is empty (see <a href=\"https:\/\/en.wikipedia.org\/wiki\/Interval_(mathematics\" target=\"_blank\" class=\"weblink\">Wikipedia<\/a> for an explanation of interval terminology)<\/p>\n\r"
})
