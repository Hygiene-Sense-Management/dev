hmLoadTopic({
hmKeywords:"",
hmTitle:"Location of configuration file",
hmDescription:"All  configuration for Digital Twin Registration Agent is done through a configuration file. ",
hmPrevLink:"environment-setting.html",
hmNextLink:"configuration-files.html",
hmParentLink:"configuration.html",
hmBreadCrumbs:"<a href=\"on-premise-infrastructure.html\">On Premise infrastructure<\/a> &gt; <a href=\"dtra.html\">Digital Twin Registration Agent<\/a> &gt; <a href=\"dtra-operations-guide.html\">Operations guide<\/a> &gt; <a href=\"configuration.html\">Configuration<\/a>",
hmTitlePath:"On Premise infrastructure > Digital Twin Registration Agent > Operations guide > Configuration > Location of configuration file",
hmHeader:"<h1 class=\"p_Heading1\"><span class=\"f_Heading1\">Location of configuration file<\/span><\/h1>\n\r",
hmBody:"<p class=\"p_Normal\">All &nbsp;configuration for Digital Twin Registration Agent is done through a configuration file. <\/p>\n\r<p class=\"p_Normal\">Which configuration file is used depends on the <span class=\"f_InlineCode\">--Environment<\/span> command line switch passed to the Digital Twin Registration Agent and the system environment variable <span class=\"f_InlineCode\">DTRA_CONFIG_DIR<\/span>. The actual configuration file used is then. <span class=\"f_InlineCode\">&lt;DTRA_CONFIG_DIR&gt;\\appsettings.&lt;environment&gt;.json<\/span><\/p>\n\r<p class=\"p_Normal\">If the configuration file is not found the Digital Twin Registration Agent will not start, this exception is logged to the windows event log (when started as a service) or to the terminal.<\/p>\n\r"
})
