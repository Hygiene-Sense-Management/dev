hmLoadTopic({
hmKeywords:"",
hmTitle:"Message delivery process",
hmDescription:"Message delivery trys retry * Pass in delegate * Delegate successfully executed -> message completed * Delegate not successful (exception) -> retry 3 times (immediate) After th",
hmPrevLink:"authentication--authorization2.html",
hmNextLink:"c2dd.html",
hmParentLink:"isco.html",
hmBreadCrumbs:"<a href=\"backend-infrastructure.html\">Backend infrastructure<\/a> &gt; <a href=\"isco.html\">Inter Service Communication<\/a>",
hmTitlePath:"Backend infrastructure > Inter Service Communication > Message delivery process",
hmHeader:"<h1 class=\"p_Heading1\"><span class=\"f_Heading1\">Message delivery process<\/span><\/h1>\n\r",
hmBody:"<p class=\"p_Normal\">Message delivery trys retry<\/p>\n\r<p class=\"p_Normal\">* Pass in delegate<\/p>\n\r<p class=\"p_Normal\">* Delegate successfully executed -&gt; message completed<\/p>\n\r<p class=\"p_Normal\">* Delegate not successful (exception) -&gt; retry 3 times (immediate)<\/p>\n\r<p class=\"p_Normal\">After that dead letter queue<\/p>\n\r<p class=\"p_Normal\">=&gt; things might get out of sync over time. (serial number change)<\/p>\n\r<p class=\"p_Normal\"><span style=\"font-weight: bold;\">Timeout on message processing<\/span><\/p>\n\r<p class=\"p_Normal\">If delegate is not doing it in 90s then we also retry<\/p>\n\r<p class=\"p_Normal\"><span style=\"font-weight: bold;\">Solution<\/span><\/p>\n\r<p class=\"p_Normal\">* Alert rules on dead letter queue<\/p>\n\r<p class=\"p_Normal\">* Requeue from dead letter queue - needs a tool<\/p>\n\r<p class=\"p_Normal\">* Brute force: Sync endpoint is already there but is disabled right now<\/p>\n\r<p class=\"p_Normal\">&nbsp;<\/p>\n\r"
})
