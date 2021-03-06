hmLoadTopic({
hmKeywords:"",
hmTitle:"Date time offset",
hmDescription:"HsM is designed to work consistently and comprehensible in different time-zones. To achieve this HsM usually stores date-time values as date-time-offsets. A date time offset...",
hmPrevLink:"article-numbers.html",
hmNextLink:"resource-instance-ids.html",
hmParentLink:"comm.html",
hmBreadCrumbs:"<a href=\"comm.html\">Common<\/a>",
hmTitlePath:"Common > Date time offset",
hmHeader:"<h1 class=\"p_Heading1\"><span class=\"f_Heading1\">Date time offset<\/span><\/h1>\n\r",
hmBody:"<p class=\"p_Normal\">HsM is designed to work consistently and comprehensible in different time-zones. To achieve this HsM usually stores date-time values as date-time-offsets. A date time offset represents a point in time - typically expressed as date and time of day, relative (but not in) Coordinated Universal Time (UTC). Therefore a date time offset includes a date time value together with an offset that defines the difference between the the current date time offset instance\'s date and time and Coordinated Universal Time (UTC).<\/p>\n\r<p class=\"p_Notes\"><span class=\"f_Notes\" style=\"font-weight: bold;\">Note: <\/span><span class=\"f_Notes\">a date time offset does not have any information about the timezones it stores the offset from UTC that can be used to transform the date and time value to a unambiguous time instant on the global time line. <\/span><\/p>\n\r<p class=\"p_Normal\">Example: The date time offset<span class=\"f_InlineCode\"> 2021-02-15 12:05:00+01:00<\/span> has a data part of <span class=\"f_InlineCode\">2021-02-15<\/span> a time part of  <span class=\"f_InlineCode\">12:05:00<\/span> and an offset to UTC of <span class=\"f_InlineCode\">+01:00<\/span> i.e. this date time offset equals <span class=\"f_InlineCode\">2021-02-15 11:05:00+00:00<\/span>.<\/p>\n\r"
})
