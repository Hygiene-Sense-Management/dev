hmLoadTopic({
hmKeywords:"",
hmTitle:"Saved device filters",
hmDescription:"Device filters can be saved on the HsM Client Service for later reuse.",
hmPrevLink:"clse-devicefiltertermtype-organization.html",
hmNextLink:"administrators-guide.html",
hmParentLink:"clse-devicefilter.html",
hmBreadCrumbs:"<a href=\"backend-infrastructure.html\">Backend infrastructure<\/a> &gt; <a href=\"clse.html\">Client Service<\/a> &gt; <a href=\"clse-devicefilter.html\">Device filter<\/a>",
hmTitlePath:"Backend infrastructure > Client Service > Device filter > Saved device filters",
hmHeader:"<h1 class=\"p_Heading1\"><span class=\"f_Heading1\">Saved device filters<\/span><\/h1>\n\r",
hmBody:"<p class=\"p_Normal\">Device filters can be saved on the HsM Client Service for later reuse.<\/p>\n\r<p class=\"p_Normal\">Three properties of saved device filters determine to whom and in which circumstances these device filter will visible and available for execution:<\/p>\n\r<p class=\"p_Normal\" style=\"text-indent: 0; padding-left: 1.2500rem; margin-left: 0;\"><span class=\"f_Normal\" style=\"display:inline-block;width:1.2500rem;margin-left:-1.2500rem\">1.<\/span><span class=\"f_Identifier\">Storage scope<\/span>: Device filters can be stored in following scopes: global, organization, customer. Global is defined as being a higher scope than organization and organization is a higher scope than customer.<\/p><p class=\"p_Normal\" style=\"text-indent: 0; padding-left: 1.2500rem; margin-left: 0;\"><span class=\"f_Normal\" style=\"display:inline-block;width:1.2500rem;margin-left:-1.2500rem\">2.<\/span><span class=\"f_Identifier\">Personal \/ public<\/span>: Device filters are either personal or public<\/p><p class=\"p_Normal\" style=\"text-indent: 0; padding-left: 1.2500rem; margin-left: 0;\"><span class=\"f_Normal\" style=\"display:inline-block;width:1.2500rem;margin-left:-1.2500rem\">3.<\/span><span class=\"f_Identifier\">Inheritable<\/span>: Device filters can be inherited to contexts below the storage context if they are defined as inheritable.<\/p><p class=\"p_Normal\">A device filter will be available to a specific user in a specific <a href=\"clse-devicefilter-executionscope.html\" class=\"topiclink\">execution scope<\/a> if: <\/p>\n\r<p class=\"p_Normal\">The device filter\'s storage scope is the same as the execution scope OR if the device filters storage scope is higher than the execution scope AND the device filter is marked as inheritable.<\/p>\n\r<p class=\"p_Normal\">AND<\/p>\n\r<p class=\"p_Normal\">The device filter is public OR the device filter is personal AND the creator of the device filter is the current user OR the current user has the permission to manage personal device filters of other users within the execution context OR a context higher than the execution context.<\/p>\n\r<p class=\"p_Normal\">Note: device filters saved in the scope of an organization are also inherited to sub-organizations if the inheritable property is set.<\/p>\n\r<h1 class=\"p_Heading1\"><span class=\"f_Heading1\">Modifying device filters<\/span><\/h1>\n\r<p class=\"p_Normal\">Device filters can be modified an deleted by the owner (= creator) of the device filter and by other users who have the permission to manage device filters of other users.<\/p>\n\r"
})
