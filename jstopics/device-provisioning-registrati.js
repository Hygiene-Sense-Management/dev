hmLoadTopic({
hmKeywords:"",
hmTitle:"Device Provisioning Registration Agent",
hmDescription:"Flow:  * Start process every X hours at timestamp t * Get all stationary gateway devices from Provider DB, born after t - X - delta   Device type filter is done by ProcuctTypeC",
hmPrevLink:"on-premise-infrastructure.html",
hmNextLink:"dtra.html",
hmParentLink:"on-premise-infrastructure.html",
hmBreadCrumbs:"<a href=\"on-premise-infrastructure.html\">On premise infrastructure<\/a>",
hmTitlePath:"On premise infrastructure > Device Provisioning Registration Agent",
hmHeader:"<h1 class=\"p_Heading1\"><span class=\"f_Heading1\">Device Provisioning Registration Agent<\/span><\/h1>\n\r",
hmBody:"<p class=\"p_Normal\">Flow:<\/p>\n\r<p class=\"p_Normal\">&nbsp;<\/p>\n\r<p class=\"p_Normal\">* Start process every X hours at timestamp t<\/p>\n\r<p class=\"p_Normal\">* Get all stationary gateway devices from Provider DB, born after t - X - delta<br \/>\n\r &nbsp;Device type filter is done by ProcuctTypeCode<br \/>\n\r &nbsp;Date Filter is based on birthDate<\/p>\n\r<p class=\"p_Normal\">* Get EnrollmentID, Primary and secondary Id from Key-Value Storage<\/p>\n\r<p class=\"p_Normal\">* Check if device is already enrolled<\/p>\n\r<p class=\"p_Normal\">* If not, enroll<\/p>\n\r<p class=\"p_Normal\">&nbsp;<\/p>\n\r<h1 class=\"p_Heading1\"><span class=\"f_Heading1\">Logging<\/span><\/h1>\n\r<p class=\"p_Normal\">Two log sinks<\/p>\n\r<p class=\"p_Normal\">1. Enrollment log<\/p>\n\r<p class=\"p_Normal\">2020-11-24 08:12:13.012 &nbsp; &nbsp; &nbsp; &nbsp; &lt;DeviceId&gt; &lt;EnrollmentId&gt; SUCCESS | FAILURE<\/p>\n\r<p class=\"p_Normal\">2. Operations log<\/p>\n\r<p class=\"p_Normal\">Includes all logging info (including enrollment)<\/p>\n\r<p class=\"p_Normal\"><span style=\"width:3.0000rem;display:inline-block\">&nbsp;<\/span><\/p>\n\r<h1 class=\"p_Heading1\"><span class=\"f_Heading1\">Preview version<\/span><\/h1>\n\r<p class=\"p_Normal\">Create command line switch for mock-run<\/p>\n\r<p class=\"p_Normal\">* Mock Getting devices from database: Shall return 2 hard coded devices<\/p>\n\r<h2 class=\"p_Heading2\"><span class=\"f_Heading2\">asdasd<\/span><\/h2>\n\r<h1 class=\"p_Heading1\"><span class=\"f_Heading1\">&nbsp;<\/span><\/h1>\n\r"
})
