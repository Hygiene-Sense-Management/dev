hmLoadTopic({
hmKeywords:"",
hmTitle:"Authorization",
hmDescription:"Client Service protects the access to data and actions with permissions only users that are granted a specific permission can read or modify specific data or execute specific...",
hmPrevLink:"active-directory-groups-to-rol.html",
hmNextLink:"permissions.html",
hmParentLink:"clse.html",
hmBreadCrumbs:"<a href=\"backend-infrastructure.html\">Backend infrastructure<\/a> &gt; <a href=\"clse.html\">Client Service<\/a>",
hmTitlePath:"Backend infrastructure > Client Service > Authorization",
hmHeader:"<h1 class=\"p_Heading1\"><span class=\"f_Heading1\">Authorization<\/span><\/h1>\n\r",
hmBody:"<p class=\"p_Normal\">Client Service protects the access to data and actions with permissions only users that are granted a specific permission can read or modify specific data or execute specific actions. <\/p>\n\r<p class=\"p_Normal\">Permissions ha<\/p>\n\r<p class=\"p_Normal\">Permissions are not directly assigned to users but are combined into roles and then roles are assigned to users.<\/p>\n\r<p class=\"p_Normal\">&nbsp;<\/p>\n\r<p class=\"p_Normal\">&nbsp;<\/p>\n\r<h1 class=\"p_Heading1\"><span class=\"f_Heading1\">Permissions:<\/span><\/h1>\n\r<p class=\"p_Normal\">Permissions sind die kleinsten Atome.<\/p>\n\r<p class=\"p_Normal\">Permissions sind vom System vordefiniert.<\/p>\n\r<p class=\"p_Normal\">Permission können sich auf bestimme Wirklungsbereich beziehen, das ist aber nicht wirklich in der Permission codier, sonder wird nur manuell über Permission Rolle Zuornung und die Rolle einen Scope hat.<\/p>\n\r<p class=\"p_Normal\">Permissions beziehen sich auf bestimmte Objekte (z.B. Devices, ...)<\/p>\n\r<h1 class=\"p_Heading1\"><span class=\"f_Heading1\">Scopes<\/span><\/h1>\n\r<p class=\"p_Normal\">Customer: Dies Permission wirkt auf einen customer. Ob die Rollen und permissins an kettenkunden vererbt werden ist eine Customer einstellung. Tabelle Customer - Customer User Role<\/p>\n\r<p class=\"p_Normal\">Organization: Dies permission wirkt auf eie organization. Zuordnungstabelle: OrganizationUserRole, permission wirkt auch auf alle Kunden.<\/p>\n\r<p class=\"p_Normal\">-&gt; Organization limited<\/p>\n\r<p class=\"p_Normal\">Global: Dies permission wirkt auf das gesamte System (d.h. auch auf alle Organisationen und alle Customers)<\/p>\n\r<p class=\"p_Normal\">&nbsp;<\/p>\n\r<h1 class=\"p_Heading1\"><span class=\"f_Heading1\">Verbindung zu Xibu und Service APp<\/span><\/h1>\n\r<p class=\"p_Normal\">Eine Permission in HsM (z.b. XIBU_TECHNICAN) bedingt eine Rolle in der APp. Die Permissions auf der App werden aber von der App verwaltet.<\/p>\n\r<p class=\"p_Normal\">&nbsp;<\/p>\n\r<h1 class=\"p_Heading1\"><span class=\"f_Heading1\">Zuordnung Customer-User-Role<\/span><\/h1>\n\r<p class=\"p_Normal\">&nbsp;<\/p>\n\r<p class=\"p_Normal\">Rollen sind container für Permissions<\/p>\n\r<p class=\"p_Normal\">Zuordnung geht immer über Rolle.<\/p>\n\r<p class=\"p_Normal\">Benutzer und ROlle m:n<\/p>\n\r<p class=\"p_Normal\">&nbsp;<\/p>\n\r<p class=\"p_Normal\">Roles werden von Hagleitner definiert und sind nicht User-definierbar.<\/p>\n\r<p class=\"p_Normal\">SCopes sind von Hagleitner definiert und können nicht vom User definiert werden.<\/p>\n\r<p class=\"p_Normal\">&nbsp;<\/p>\n\r<p class=\"p_Normal\">Rollen werden um ein Scope Attribut erweitert dameit gelten die Permissions in dieser Rolle nur für diesen Scope.<\/p>\n\r<p class=\"p_Normal\">&nbsp;<\/p>\n\r<p class=\"p_Normal\">Rolle zuweieung bu Benutze hat immer ein Scope Attribut<\/p>\n\r<p class=\"p_Normal\">&nbsp;<\/p>\n\r<p class=\"p_Normal\">Es gibt kein Benutzergruppen konzept<\/p>\n\r<p class=\"p_Normal\">&nbsp;<\/p>\n\r<p class=\"p_Normal\">Permissions are always additive.<\/p>\n\r<p class=\"p_Normal\">&nbsp;<\/p>\n\r<p class=\"p_Normal\">&nbsp;<\/p>\n\r<p class=\"p_Normal\">Object = Scope<\/p>\n\r<p class=\"p_Normal\">&nbsp;<\/p>\n\r<p class=\"p_Normal\">Permission <\/p>\n\r<p class=\"p_Normal\">&nbsp;<\/p>\n\r<h1 class=\"p_Heading1\"><span class=\"f_Heading1\">Wie kommen User zu Ihren Roles<\/span><\/h1>\n\r<p class=\"p_Normal\">Unterschied zwischen ferated und local <\/p>\n\r<p class=\"p_Normal\">Im AD Gruppentypen mit HOP_<\/p>\n\r<p class=\"p_Normal\">AD Gruppen werden in unser Backend synchronisiert. (eignetlich nur sync in eine Richtung)<\/p>\n\r<p class=\"p_Normal\">Mapping von Group Names zu Rollen wirdanhand der syntax ActiveDirectoryGroupOrganizationRole Tabelle<\/p>\n\r<p class=\"p_Normal\">&nbsp;<\/p>\n\r<p class=\"p_Normal\">&nbsp;<\/p>\n\r<p class=\"p_Normal\">&nbsp;<\/p>\n\r"
})
