hmLoadTopic({
hmKeywords:"",
hmTitle:"Latest resource instance value",
hmDescription:"Filters devices by their latest reported resource instance values. ",
hmPrevLink:"clse-devicefiltertermtype-installationdate.html",
hmNextLink:"clse-devicefiltertermtype-latestresourceinstanceupdate.html",
hmParentLink:"clse-devicefiltertermtypes.html",
hmBreadCrumbs:"<a href=\"backend-infrastructure.html\">Backend infrastructure<\/a> &gt; <a href=\"clse.html\">Client Service<\/a> &gt; <a href=\"clse-devicefilter.html\">Device filter<\/a> &gt; <a href=\"clse-devicefiltertermtypes.html\">Device filter term types<\/a>",
hmTitlePath:"Backend infrastructure > Client Service > Device filter > Device filter term types > Latest resource instance value",
hmHeader:"<h1 class=\"p_Heading1\"><span class=\"f_Heading1\">Latest resource instance value<\/span><\/h1>\n\r",
hmBody:"<p class=\"p_Normal\">Filters devices by their latest reported resource instance values. <\/p>\n\r<p class=\"p_Normal\">A resource instance is specified either by device type id, resource id and resource instance number or by resource instance equivalent and device types.<\/p>\n\r<h1 class=\"p_Heading1\"><span class=\"f_Heading1\">Restrictions<\/span><\/h1>\n\r<p class=\"p_Normal\">If a resource instance with a visibility level not available to the executing user is specified no device will pass the filter.<\/p>\n\r<h1 class=\"p_Heading1\"><span class=\"f_Heading1\">Settings<\/span><\/h1>\n\r<div style=\"text-align: left; text-indent: 0; line-height: 1.44; padding: 0 0 0 0; margin: 0.3750rem 0 0.2500rem 0;\"><table style=\"width:43.7500rem; border:none; border-spacing:0; border-collapse:collapse;\">\n\r<thead>\n\r<tr>\n\r<th style=\"vertical-align:top; width:11.6250rem; background-color:#F5F5F5; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">Setting<\/p>\n\r<\/th>\n\r<th style=\"vertical-align:top; width:33.1250rem; background-color:#F5F5F5; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">Description<\/p>\n\r<\/th>\n\r<\/tr>\n\r<\/thead>\n\r<tbody>\n\r<tr>\n\r<td style=\"vertical-align:top; width:11.6250rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">Resource specification<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; width:33.1250rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">This setting defines the queried resource instance. The actually queried resource instance can be given either as specific resource for a specific device type or as a resource instance equivalent for a set of selected device types. Possible settings are therefore:<\/p>\n\r<p class=\"p_Normal\" style=\"text-indent: 0; padding-left: 0.8125rem; margin-left: 0;\"><span class=\"f_Normal\" style=\"font-family: Arial,\'Lucida Sans Unicode\',\'Lucida Grande\',\'Lucida Sans\';display:inline-block;width:0.8125rem;margin-left:-0.8125rem\">&#8226;<\/span>Specific resource instance<\/p><p class=\"p_Normal\" style=\"text-indent: 0; padding-left: 0.8125rem; margin-left: 0;\"><span class=\"f_Normal\" style=\"font-family: Arial,\'Lucida Sans Unicode\',\'Lucida Grande\',\'Lucida Sans\';display:inline-block;width:0.8125rem;margin-left:-0.8125rem\">&#8226;<\/span>Resource instance equivalent<\/p><\/td>\n\r<\/tr>\n\r<tr>\n\r<td colspan=\"2\"  style=\"vertical-align:top; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">Settings for Resource specification = <span style=\"font-style: italic;\">Resource instance equivalent<\/span><\/p>\n\r<\/td>\n\r<\/tr>\n\r<tr>\n\r<td style=\"vertical-align:top; width:11.6250rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\" style=\"margin: 0.3750rem 0 0.2500rem 0.8125rem;\">Resource instance equivalent<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; width:33.1250rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">A resource instance equivalent (as specified by the Catalog Service)<\/p>\n\r<\/td>\n\r<\/tr>\n\r<tr>\n\r<td style=\"vertical-align:top; width:11.6250rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\" style=\"margin: 0.3750rem 0 0.2500rem 0.8125rem;\">Device types<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; width:33.1250rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">A list of device types that shall be included in the filter. Device types that do not have a resource instance equivalent<\/p>\n\r<\/td>\n\r<\/tr>\n\r<tr>\n\r<td colspan=\"2\"  style=\"vertical-align:top; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">Settings for Resource specification = Specific resource instance<\/p>\n\r<\/td>\n\r<\/tr>\n\r<tr>\n\r<td style=\"vertical-align:top; width:11.6250rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\" style=\"margin: 0.3750rem 0 0.2500rem 0.8125rem;\">Device type<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; width:33.1250rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">The device type included in the filter<\/p>\n\r<\/td>\n\r<\/tr>\n\r<tr>\n\r<td style=\"vertical-align:top; width:11.6250rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\" style=\"margin: 0.3750rem 0 0.2500rem 0.8125rem;\">Resource type<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; width:33.1250rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">The resource type <\/p>\n\r<\/td>\n\r<\/tr>\n\r<tr>\n\r<td style=\"vertical-align:top; width:11.6250rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\" style=\"margin: 0.3750rem 0 0.2500rem 0.8125rem;\">Resource instance no<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; width:33.1250rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">The resource instance number.<\/p>\n\r<\/td>\n\r<\/tr>\n\r<\/tbody>\n\r<\/table>\n\r<\/div>\n\r<p class=\"p_ImageCaption\"><a id=\"fig_96ed33\" class=\"hmanchor\"><\/a><span class=\"f_ImageCaption\">Table 10: Settings of this device term type<\/span><\/p>\n\r<h2 class=\"p_Heading2\"><span class=\"f_Heading2\">Comparison settings<\/span><\/h2>\n\r<div style=\"text-align: left; text-indent: 0; line-height: 1.44; padding: 0 0 0 0; margin: 0.3750rem 0 0.2500rem 0;\"><table style=\"width:43.7500rem; border:none; border-spacing:0; border-collapse:collapse;\">\n\r<thead>\n\r<tr>\n\r<th style=\"vertical-align:top; width:11.5625rem; background-color:#F5F5F5; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">Setting<\/p>\n\r<\/th>\n\r<th style=\"vertical-align:top; width:33.1875rem; background-color:#F5F5F5; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">Description<\/p>\n\r<\/th>\n\r<\/tr>\n\r<\/thead>\n\r<tbody>\n\r<tr>\n\r<td style=\"vertical-align:top; width:11.5625rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">Comparison operator<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; width:33.1875rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">Depending on the data type used by the selected resource type comparison operators are allowed:<\/p>\n\r<p class=\"p_Normal\" style=\"text-indent: 0; padding-left: 0.8125rem; margin-left: 0;\"><span class=\"f_Normal\" style=\"font-family: Arial,\'Lucida Sans Unicode\',\'Lucida Grande\',\'Lucida Sans\';display:inline-block;width:0.8125rem;margin-left:-0.8125rem\">&#8226;<\/span>Numeric with single comparison value: &gt;, &lt;, &gt;=, &lt;=, =, !=<\/p><p class=\"p_Normal\" style=\"text-indent: 0; padding-left: 0.8125rem; margin-left: 0;\"><span class=\"f_Normal\" style=\"font-family: Arial,\'Lucida Sans Unicode\',\'Lucida Grande\',\'Lucida Sans\';display:inline-block;width:0.8125rem;margin-left:-0.8125rem\">&#8226;<\/span>Numeric with two comparison values: Between (<span class=\"f_InlineCode\">&gt;= Comparison value 1<\/span> and <span class=\"f_InlineCode\">&lt;= Comparison Value 2<\/span>)<\/p><p class=\"p_Normal\" style=\"text-indent: 0; padding-left: 0.8125rem; margin-left: 0;\"><span class=\"f_Normal\" style=\"font-family: Arial,\'Lucida Sans Unicode\',\'Lucida Grande\',\'Lucida Sans\';display:inline-block;width:0.8125rem;margin-left:-0.8125rem\">&#8226;<\/span>String: Starts with, Equals<\/p><\/td>\n\r<\/tr>\n\r<tr>\n\r<td style=\"vertical-align:top; width:11.5625rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">Comparison value 1<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; width:33.1875rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">The comparison value used for operators with a single comparison value<\/p>\n\r<\/td>\n\r<\/tr>\n\r<tr>\n\r<td style=\"vertical-align:top; width:11.5625rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">Comparison value 2<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; width:33.1875rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">The 2nd comparison value used for operators with two comparison values<\/p>\n\r<\/td>\n\r<\/tr>\n\r<\/tbody>\n\r<\/table>\n\r<\/div>\n\r<p class=\"p_ImageCaption\"><a id=\"fig_96ed33\" class=\"hmanchor\"><\/a><span class=\"f_ImageCaption\">Table 10: Comparison of resource instance values<\/span><\/p>\n\r"
})
