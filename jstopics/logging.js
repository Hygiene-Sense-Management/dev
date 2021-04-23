hmLoadTopic({
hmKeywords:"",
hmTitle:"Logging",
hmDescription:"For monitoring the Digital Twin Registration Agent the program logs via the nlog framework and therefore allows for versatile routing of log messages. ",
hmPrevLink:"configuration-files.html",
hmNextLink:"working-directory.html",
hmParentLink:"configuration.html",
hmBreadCrumbs:"<a href=\"on-premise-infrastructure.html\">On Premise infrastructure<\/a> &gt; <a href=\"dtra.html\">Digital Twin Registration Agent<\/a> &gt; <a href=\"dtra-operations-guide.html\">Operations guide<\/a> &gt; <a href=\"configuration.html\">Configuration<\/a>",
hmTitlePath:"On Premise infrastructure > Digital Twin Registration Agent > Operations guide > Configuration > Logging",
hmHeader:"<h1 class=\"p_Heading1\"><span class=\"f_Heading1\">Logging<\/span><\/h1>\n\r",
hmBody:"<p class=\"p_Normal\">For monitoring the Digital Twin Registration Agent the program logs via the nlog framework and therefore allows for versatile routing of log messages. <\/p>\n\r<p class=\"p_Normal\">Log messages have associated log levels that can be used to route log message. The Digital Twin Registration Agent uses log levels in following way:<\/p>\n\r<div style=\"text-align: left; text-indent: 0; line-height: 1.44; padding: 0 0 0 0; margin: 0.3750rem 0 0.2500rem 0;\"><table style=\"width:43.7500rem; border:none; border-spacing:0; border-collapse:collapse;\">\n\r<thead>\n\r<tr>\n\r<th style=\"vertical-align:top; width:5.2500rem; background-color:#F5F5F5; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">Log level<\/p>\n\r<\/th>\n\r<th style=\"vertical-align:top; width:39.8750rem; background-color:#F5F5F5; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">Notes<\/p>\n\r<\/th>\n\r<\/tr>\n\r<\/thead>\n\r<tbody>\n\r<tr>\n\r<td style=\"vertical-align:top; width:5.2500rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">Fatal<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; width:39.8750rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">Exceptions that prevent the Digital Twin Registration Agent from operating. Io Exceptions, Network down etc. - must be actively monitored.<\/p>\n\r<\/td>\n\r<\/tr>\n\r<tr>\n\r<td style=\"vertical-align:top; width:5.2500rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">Error<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; width:39.8750rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">Exceptions that hinder registration of devices. Must be actively monitored<\/p>\n\r<\/td>\n\r<\/tr>\n\r<tr>\n\r<td style=\"vertical-align:top; width:5.2500rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">Warning<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; width:39.8750rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">Require Weekly checks by administrators<\/p>\n\r<\/td>\n\r<\/tr>\n\r<tr>\n\r<td style=\"vertical-align:top; width:5.2500rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">Info<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; width:39.8750rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">Detailed Protocol of operation. Can be used by administrators to debug behavior<\/p>\n\r<\/td>\n\r<\/tr>\n\r<tr>\n\r<td style=\"vertical-align:top; width:5.2500rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">Debug<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; width:39.8750rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">Only for developer debugging<\/p>\n\r<\/td>\n\r<\/tr>\n\r<tr>\n\r<td style=\"vertical-align:top; width:5.2500rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">Trace<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; width:39.8750rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">Only for developer debugging<\/p>\n\r<\/td>\n\r<\/tr>\n\r<\/tbody>\n\r<\/table>\n\r<\/div>\n\r"
})
