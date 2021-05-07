hmLoadTopic({
hmKeywords:"",
hmTitle:"Environment variable DTRA_CONFIG_DIR",
hmDescription:"The Windows System Environment Variable DTRA_CONFIG_DIR defines the directory where configuration files are expected and where the Digital Twin Registration Agent will create...",
hmPrevLink:"configuration.html",
hmNextLink:"environment-setting.html",
hmParentLink:"configuration.html",
hmBreadCrumbs:"<a href=\"on-premise-infrastructure.html\">On premise infrastructure<\/a> &gt; <a href=\"dtra.html\">Digital Twin Registration Agent<\/a> &gt; <a href=\"dtra-operations-guide.html\">Operations guide<\/a> &gt; <a href=\"configuration.html\">Configuration<\/a>",
hmTitlePath:"On premise infrastructure > Digital Twin Registration Agent > Operations guide > Configuration > Environment variable DTRA_CONFIG_DIR",
hmHeader:"<h1 class=\"p_Heading1\"><span class=\"f_Heading1\">Environment variable DTRA_CONFIG_DIR<\/span><\/h1>\n\r",
hmBody:"<p class=\"p_Normal\">The Windows System Environment Variable DTRA_CONFIG_DIR defines the directory where configuration files are expected and where the Digital Twin Registration Agent will create subfolders for storing data. Note that the environment variable must be a System environment variable.<\/p>\n\r<p class=\"p_Normal\">The DTRA_CONFIG_DIR variable should point to a local directory and that directory should be included in your backup.You can use the Windows shell to set the environment variable. Example:<\/p>\n\r<p class=\"p_InlineCode\"><span class=\"f_InlineCode\">setx \/M DTRA_CONFIG_DIR &quot;D:Data\\Hsm\\Digital Twin Registration Agent&quot;<\/span><\/p>\n\r<p class=\"p_Normal\">If this system environment variable is not set the Digital Twin Registration Agent will not start, also if the Digital Twin Registration Agent does not find a configuration file that fits the Environment setting<\/p>\n\r"
})
