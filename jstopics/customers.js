hmLoadTopic({
hmKeywords:"",
hmTitle:"Customer and Organizations",
hmDescription:"Relation type Description Invoicing Source customer receives the invoices for items delivered to the target customer Restricted by Navision to companies within the same mandato",
hmPrevLink:"roles.html",
hmNextLink:"clse-devicefilter.html",
hmParentLink:"clse.html",
hmBreadCrumbs:"<a href=\"backend-infrastructure.html\">Backend infrastructure<\/a> &gt; <a href=\"clse.html\">Client Service<\/a>",
hmTitlePath:"Backend infrastructure > Client Service > Customer and Organizations",
hmHeader:"<h1 class=\"p_Heading1\"><span class=\"f_Heading1\">Customer and Organizations<\/span><\/h1>\n\r",
hmBody:"<div style=\"text-align: left; text-indent: 0; line-height: 1.44; padding: 0 0 0 0; margin: 0.3750rem 0 0.2500rem 0;\"><table style=\"width:43.7500rem; border:none; border-spacing:0; border-collapse:collapse;\">\n\r<thead>\n\r<tr>\n\r<th style=\"vertical-align:top; width:10.8125rem; background-color:#F5F5F5; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">Relation type<\/p>\n\r<\/th>\n\r<th style=\"vertical-align:top; width:32.2500rem; background-color:#F5F5F5; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">Description<\/p>\n\r<\/th>\n\r<\/tr>\n\r<\/thead>\n\r<tbody>\n\r<tr>\n\r<td style=\"vertical-align:top; width:10.8125rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">Invoicing<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; width:32.2500rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">Source customer receives the invoices for items delivered to the target customer<\/p>\n\r<p class=\"p_Normal\">Restricted by Navision to companies within the same mandator<\/p>\n\r<p class=\"p_Normal\">Restricted to a single level hierarchy<\/p>\n\r<\/td>\n\r<\/tr>\n\r<tr>\n\r<td style=\"vertical-align:top; width:10.8125rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">Reseller<\/p>\n\r<p class=\"p_Normal\">(Alias: export partner)<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; width:32.2500rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">Source customer resells items to target customer.<\/p>\n\r<p class=\"p_Normal\" style=\"text-indent: 0; padding-left: 0.8125rem; margin-left: 0;\"><span class=\"f_Normal\" style=\"font-family: Arial,\'Lucida Sans Unicode\',\'Lucida Grande\',\'Lucida Sans\';display:inline-block;width:0.8125rem;margin-left:-0.8125rem\">&#8226;<\/span>Implies that the source customer is an organization in HsM.<\/p><p class=\"p_Normal\" style=\"text-indent: 0; padding-left: 0.8125rem; margin-left: 0;\"><span class=\"f_Normal\" style=\"font-family: Arial,\'Lucida Sans Unicode\',\'Lucida Grande\',\'Lucida Sans\';display:inline-block;width:0.8125rem;margin-left:-0.8125rem\">&#8226;<\/span>Resellers (source customer) are marked in Navision as resellers<\/p><p class=\"p_Normal\">&nbsp;<\/p>\n\r<\/td>\n\r<\/tr>\n\r<tr>\n\r<td style=\"vertical-align:top; width:10.8125rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">Company hierarchy<\/p>\n\r<p class=\"p_Normal\">(Alias: chain customer, line management)<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; width:32.2500rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">Source customer is a superior to the target customer.<\/p>\n\r<p class=\"p_Normal\" style=\"text-indent: 0; padding-left: 0.8125rem; margin-left: 0;\"><span class=\"f_Normal\" style=\"font-family: Arial,\'Lucida Sans Unicode\',\'Lucida Grande\',\'Lucida Sans\';display:inline-block;width:0.8125rem;margin-left:-0.8125rem\">&#8226;<\/span>Implies that the HsM permissions on the source customer are inherited by the target customer.<\/p><p class=\"p_Normal\" style=\"text-indent: 0; padding-left: 0.8125rem; margin-left: 0;\"><span class=\"f_Normal\" style=\"font-family: Arial,\'Lucida Sans Unicode\',\'Lucida Grande\',\'Lucida Sans\';display:inline-block;width:0.8125rem;margin-left:-0.8125rem\">&#8226;<\/span>Currently restricted by Navision to source and target being in the same mandator <\/p><\/td>\n\r<\/tr>\n\r<tr>\n\r<td style=\"vertical-align:top; width:10.8125rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">Condition<\/p>\n\r<p class=\"p_Normal\">Alias: Buying syndicate<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; width:32.2500rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">Source customer provides its conditions to target customer.<\/p>\n\r<p class=\"p_Normal\">Restricted by navision to companies within the same mandator<\/p>\n\r<\/td>\n\r<\/tr>\n\r<\/tbody>\n\r<\/table>\n\r<\/div>\n\r<p class=\"p_Normal\">&nbsp;<\/p>\n\r<p class=\"p_Normal\">ManageBillToCustomers: A Bill to customer without this flag set is translated to a &nbsp;<\/p>\n\r<p class=\"p_Normal\">ManageChainCustomers: A chain to customer without this flag is a Conditions relation<\/p>\n\r<p class=\"p_Normal\">&nbsp;<\/p>\n\r<p class=\"p_Normal\">&nbsp;<\/p>\n\r<p class=\"p_Normal\">Kunden zusammenführen<\/p>\n\r<h1 class=\"p_Heading1\" style=\"line-height: 1.20; margin: 0.8750rem 0 0 0;\"><span class=\"f_Heading1\" style=\"font-size: 1.60rem; font-family: Calibri,Vectora,\'Droid Sans\',\'Open Sans\',Frutiger,sans-serif; color: #1e4e79;\">Fall: Ein Kunde mit mehreren Lieferadressen<\/span><\/h1>\n\r<p class=\"p_Normal\" style=\"line-height: 1.20; margin: 0.3750rem 0 0 0;\"><span style=\"font-size: 1.10rem; font-family: Calibri,Vectora,\'Droid Sans\',\'Open Sans\',Frutiger,sans-serif;\">Gemeinde Zell am See = Rechnungsempfänger<\/span><\/p>\n\r<p class=\"p_Normal\" style=\"line-height: 1.20; margin: 0.3750rem 0 0 0;\"><span style=\"font-size: 1.10rem; font-family: Calibri,Vectora,\'Droid Sans\',\'Open Sans\',Frutiger,sans-serif;\">Bauhof = Lieferkunde<\/span><\/p>\n\r<p class=\"p_Normal\" style=\"line-height: 1.20; margin: 0.3750rem 0 0 0;\"><span style=\"font-size: 1.10rem; font-family: Calibri,Vectora,\'Droid Sans\',\'Open Sans\',Frutiger,sans-serif;\">Lieferkunde = Anker wo Spender hängen und Verbrauch Stattfinde<\/span><\/p>\n\r<p class=\"p_Normal\" style=\"line-height: 1.20; margin: 0.3750rem 0 0 0;\"><span style=\"font-size: 1.10rem; font-family: Calibri,Vectora,\'Droid Sans\',\'Open Sans\',Frutiger,sans-serif;\">Lieferkunde = Rechnungskunde in vielen Fällen<\/span><\/p>\n\r<p class=\"p_Normal\" style=\"line-height: 1.20; margin: 0.3750rem 0 0 0;\"><span style=\"font-size: 1.10rem; font-family: Calibri,Vectora,\'Droid Sans\',\'Open Sans\',Frutiger,sans-serif;\">Rechnungskunde\/Lieferkunde = nur eine Hierarchiestufe<\/span><\/p>\n\r<p class=\"p_Normal\" style=\"line-height: 1.20; margin: 0.8750rem 0 0 0;\"><span style=\"font-size: 1.10rem; font-family: Consolas, Courier,monospace;\">&nbsp;<\/span><\/p>\n\r<p class=\"p_Normal\" style=\"line-height: 1.20; margin: 0.8750rem 0 0 0;\"><span style=\"font-size: 1.10rem; font-family: Calibri,Vectora,\'Droid Sans\',\'Open Sans\',Frutiger,sans-serif;\">&nbsp;<\/span><\/p>\n\r<h1 class=\"p_Heading1\" style=\"line-height: 1.20; margin: 0 0 0 0;\"><span class=\"f_Heading1\" style=\"font-size: 1.60rem; font-family: Calibri,Vectora,\'Droid Sans\',\'Open Sans\',Frutiger,sans-serif; color: #1e4e79;\">Kettenkunden<\/span><\/h1>\n\r<p class=\"p_Normal\" style=\"line-height: 1.20; margin: 0.3750rem 0 0 0;\"><span style=\"font-size: 1.10rem; font-family: Calibri,Vectora,\'Droid Sans\',\'Open Sans\',Frutiger,sans-serif;\">Kette ist gleich zu sehen wie ein Rechnungsempfänger<\/span><\/p>\n\r<p class=\"p_Normal\" style=\"line-height: 1.20; margin: 0.3750rem 0 0 0;\"><span style=\"font-size: 1.10rem; font-family: Calibri,Vectora,\'Droid Sans\',\'Open Sans\',Frutiger,sans-serif;\">Beispiel Hogast Einkaufsgenossenschaft bekommt alle Rechnungen verrechnet intern weiter<\/span><\/p>\n\r<p class=\"p_Normal\" style=\"line-height: 1.20; margin: 0.3750rem 0 0 0;\"><span style=\"font-size: 1.10rem; font-family: Calibri,Vectora,\'Droid Sans\',\'Open Sans\',Frutiger,sans-serif;\">&nbsp;<\/span><\/p>\n\r<h1 class=\"p_Heading1\" style=\"line-height: 1.20; margin: 0 0 0 0;\"><span class=\"f_Heading1\" style=\"font-size: 1.60rem; font-family: Calibri,Vectora,\'Droid Sans\',\'Open Sans\',Frutiger,sans-serif; color: #1e4e79;\">Kettenverbund<\/span><\/h1>\n\r<p class=\"p_Normal\" style=\"line-height: 1.20; margin: 0.3750rem 0 0 0;\"><span style=\"font-size: 1.10rem; font-family: Calibri,Vectora,\'Droid Sans\',\'Open Sans\',Frutiger,sans-serif;\">&nbsp;<\/span><\/p>\n\r<p class=\"p_Normal\" style=\"line-height: 1.20; margin: 0.3750rem 0 0 0;\"><span style=\"font-size: 1.10rem; font-family: Calibri,Vectora,\'Droid Sans\',\'Open Sans\',Frutiger,sans-serif;\">(Kettenverbundkunde) - Kettenkunde - Rechnungskunde -Lieferkunden<\/span><\/p>\n\r<p class=\"p_Normal\" style=\"line-height: 1.20; margin: 0.3750rem 0 0 0;\"><span style=\"font-size: 1.10rem; font-family: Calibri,Vectora,\'Droid Sans\',\'Open Sans\',Frutiger,sans-serif;\">Ketten können Organisationsübergreifend sein<\/span><\/p>\n\r<p class=\"p_Normal\" style=\"line-height: 1.20; margin: 0.3750rem 0 0 0;\"><span style=\"font-size: 1.10rem; font-family: Calibri,Vectora,\'Droid Sans\',\'Open Sans\',Frutiger,sans-serif;\">&nbsp;<\/span><\/p>\n\r<p class=\"p_Normal\" style=\"line-height: 1.20; margin: 0.3750rem 0 0 0;\"><span style=\"font-size: 1.10rem; font-family: Calibri,Vectora,\'Droid Sans\',\'Open Sans\',Frutiger,sans-serif;\">Rechnungskunden<\/span><\/p>\n\r<p class=\"p_Normal\" style=\"line-height: 1.20; margin: 0.3750rem 0 0 0;\"><span style=\"font-size: 1.10rem; font-family: Calibri,Vectora,\'Droid Sans\',\'Open Sans\',Frutiger,sans-serif;\">Rechnungskunde - Lieferkunden<\/span><\/p>\n\r<p class=\"p_Normal\" style=\"line-height: 1.20; margin: 0.3750rem 0 0 0;\"><span style=\"font-size: 1.10rem; font-family: Calibri,Vectora,\'Droid Sans\',\'Open Sans\',Frutiger,sans-serif;\">&nbsp;<\/span><\/p>\n\r<p class=\"p_Normal\" style=\"line-height: 1.20; margin: 0.3750rem 0 0 0;\"><span style=\"font-size: 1.10rem; font-family: Calibri,Vectora,\'Droid Sans\',\'Open Sans\',Frutiger,sans-serif;\">Kette ist wie Rechungsempfänger<\/span><\/p>\n\r<p class=\"p_Normal\" style=\"line-height: 1.20; margin: 0.3750rem 0 0 0;\"><span style=\"font-size: 1.10rem; font-family: Calibri,Vectora,\'Droid Sans\',\'Open Sans\',Frutiger,sans-serif;\">&nbsp;<\/span><\/p>\n\r<p class=\"p_Normal\" style=\"line-height: 1.20; margin: 0.3750rem 0 0 0;\"><span style=\"font-size: 1.10rem; font-family: Calibri,Vectora,\'Droid Sans\',\'Open Sans\',Frutiger,sans-serif;\">&nbsp;<\/span><\/p>\n\r<h1 class=\"p_Heading1\" style=\"line-height: 1.20; margin: 0 0 0 0;\"><span class=\"f_Heading1\" style=\"font-size: 1.60rem; font-family: Calibri,Vectora,\'Droid Sans\',\'Open Sans\',Frutiger,sans-serif; color: #1e4e79;\">Rechnungskunden<\/span><\/h1>\n\r<p class=\"p_Normal\" style=\"line-height: 1.20; margin: 0.3750rem 0 0 0;\"><span style=\"font-size: 1.10rem; font-family: Calibri,Vectora,\'Droid Sans\',\'Open Sans\',Frutiger,sans-serif;\">&nbsp;<\/span><\/p>\n\r<h1 class=\"p_Heading1\" style=\"line-height: 1.20; margin: 0 0 0 0;\"><span class=\"f_Heading1\" style=\"font-size: 1.60rem; font-family: Calibri,Vectora,\'Droid Sans\',\'Open Sans\',Frutiger,sans-serif; color: #1e4e79;\">Lieferkunden<\/span><\/h1>\n\r<p class=\"p_Normal\" style=\"line-height: 1.20; margin: 0.3750rem 0 0 0;\"><span style=\"font-size: 1.10rem; font-family: Calibri,Vectora,\'Droid Sans\',\'Open Sans\',Frutiger,sans-serif;\">&nbsp;<\/span><\/p>\n\r<h1 class=\"p_Heading1\" style=\"line-height: 1.20; margin: 0 0 0 0;\"><span class=\"f_Heading1\" style=\"font-size: 1.60rem; font-family: Calibri,Vectora,\'Droid Sans\',\'Open Sans\',Frutiger,sans-serif; color: #1e4e79;\">Organisationen<\/span><\/h1>\n\r<p class=\"p_Normal\" style=\"line-height: 1.20; margin: 0.3750rem 0 0 0;\"><span style=\"font-size: 1.10rem; font-family: Calibri,Vectora,\'Droid Sans\',\'Open Sans\',Frutiger,sans-serif;\">= Vertriebsorganisation<\/span><\/p>\n\r<p class=\"p_Normal\" style=\"line-height: 1.20; margin: 0.3750rem 0 0 0;\"><span style=\"font-size: 1.10rem; font-family: Calibri,Vectora,\'Droid Sans\',\'Open Sans\',Frutiger,sans-serif;\">Auswertung in der Hierarchie der Organisationen<\/span><\/p>\n\r<p class=\"p_Normal\" style=\"line-height: 1.20; margin: 0.3750rem 0 0 0;\"><span style=\"font-size: 1.10rem; font-family: Calibri,Vectora,\'Droid Sans\',\'Open Sans\',Frutiger,sans-serif;\">&nbsp;<\/span><\/p>\n\r<p class=\"p_Normal\" style=\"line-height: 1.20; margin: 0.3750rem 0 0 0;\"><span style=\"font-size: 1.10rem; font-family: Calibri,Vectora,\'Droid Sans\',\'Open Sans\',Frutiger,sans-serif;\">Export Partner<\/span><\/p>\n\r<p class=\"p_Normal\" style=\"line-height: 1.20; margin: 0.3750rem 0 0 0;\"><span style=\"font-size: 1.10rem; font-family: Calibri,Vectora,\'Droid Sans\',\'Open Sans\',Frutiger,sans-serif;\">Schweiz Steinfels: Vertriebsorganisation für HygieneProdukte<\/span><\/p>\n\r<p class=\"p_Normal\" style=\"line-height: 1.20; margin: 0.3750rem 0 0 0;\"><span style=\"font-size: 1.10rem; font-family: Calibri,Vectora,\'Droid Sans\',\'Open Sans\',Frutiger,sans-serif;\">&nbsp;<\/span><\/p>\n\r<p class=\"p_Normal\" style=\"line-height: 1.20; margin: 0.3750rem 0 0 0;\"><span style=\"font-size: 1.10rem; font-family: Calibri,Vectora,\'Droid Sans\',\'Open Sans\',Frutiger,sans-serif;\">Intern oder Export partner<\/span><\/p>\n\r<p class=\"p_Normal\" style=\"line-height: 1.20; margin: 0.3750rem 0 0 0;\"><span style=\"font-size: 1.10rem; font-family: Calibri,Vectora,\'Droid Sans\',\'Open Sans\',Frutiger,sans-serif;\">Organisationen können mehrstufig sein<\/span><\/p>\n\r<p class=\"p_Normal\" style=\"line-height: 1.20; margin: 0.3750rem 0 0 0;\"><span style=\"font-size: 1.10rem; font-family: Calibri,Vectora,\'Droid Sans\',\'Open Sans\',Frutiger,sans-serif;\">&nbsp;<\/span><\/p>\n\r<p class=\"p_Normal\" style=\"line-height: 1.20; margin: 0.3750rem 0 0 0;\"><span style=\"font-size: 1.10rem; font-family: Calibri,Vectora,\'Droid Sans\',\'Open Sans\',Frutiger,sans-serif;\">&nbsp;<\/span><\/p>\n\r<p class=\"p_Normal\" style=\"line-height: 1.20; margin: 0.3750rem 0 0 0;\"><span style=\"font-size: 1.10rem; font-family: Calibri,Vectora,\'Droid Sans\',\'Open Sans\',Frutiger,sans-serif;\">Hogast=Rechnungsempfänger<\/span><\/p>\n\r<p class=\"p_Normal\" style=\"line-height: 1.20; margin: 0.3750rem 0 0 0;\"><span style=\"font-size: 1.10rem; font-family: Calibri,Vectora,\'Droid Sans\',\'Open Sans\',Frutiger,sans-serif;\">&nbsp;<\/span><\/p>\n\r<p class=\"p_Normal\" style=\"line-height: 1.20; margin: 0.3750rem 0 0 0;\"><span style=\"font-size: 1.10rem; font-family: Calibri,Vectora,\'Droid Sans\',\'Open Sans\',Frutiger,sans-serif;\">&nbsp;<\/span><\/p>\n\r<p class=\"p_Normal\" style=\"line-height: 1.20; margin: 0.3750rem 0 0 0;\"><span style=\"font-size: 1.10rem; font-family: Calibri,Vectora,\'Droid Sans\',\'Open Sans\',Frutiger,sans-serif;\">HOGAST ist Einkaufsgemeinschaft:<\/span><\/p>\n\r<p class=\"p_Normal\" style=\"line-height: 1.20; margin: 0.3750rem 0 0 0;\"><span style=\"font-size: 1.10rem; font-family: Calibri,Vectora,\'Droid Sans\',\'Open Sans\',Frutiger,sans-serif;\">HOGAST ist zwar Rechnungsempfänger aber keine Hierarchie<\/span><\/p>\n\r<p class=\"p_Normal\" style=\"line-height: 1.20; margin: 0.3750rem 0 0 0;\"><span style=\"font-size: 1.10rem; font-family: Calibri,Vectora,\'Droid Sans\',\'Open Sans\',Frutiger,sans-serif;\">&nbsp;<\/span><\/p>\n\r<p class=\"p_Normal\" style=\"line-height: 1.20; margin: 0.3750rem 0 0 0;\"><span style=\"font-size: 1.10rem; font-family: Calibri,Vectora,\'Droid Sans\',\'Open Sans\',Frutiger,sans-serif;\">Lieferkunde-&gt;Rechung(Hogast)<\/span><\/p>\n\r<p class=\"p_Normal\" style=\"line-height: 1.20; margin: 0.3750rem 0 0 0;\"><span style=\"font-size: 1.10rem; font-family: Calibri,Vectora,\'Droid Sans\',\'Open Sans\',Frutiger,sans-serif;\">Lieferkunde -&gt;Kette (Hogast Salzburg)<\/span><\/p>\n\r<p class=\"p_Normal\" style=\"line-height: 1.20; margin: 0.3750rem 0 0 0;\"><span style=\"font-size: 1.10rem; font-family: Calibri,Vectora,\'Droid Sans\',\'Open Sans\',Frutiger,sans-serif;\">Beide dürfen nicht die Verbrauchsdaten der Liefekunden sehen.<\/span><\/p>\n\r<p class=\"p_Normal\" style=\"line-height: 1.20; margin: 0.3750rem 0 0 0;\"><span style=\"font-size: 1.10rem; font-family: Calibri,Vectora,\'Droid Sans\',\'Open Sans\',Frutiger,sans-serif;\">&nbsp;<\/span><\/p>\n\r<p class=\"p_Normal\" style=\"line-height: 1.20; margin: 0.3750rem 0 0 0;\"><span style=\"font-size: 1.10rem; font-family: Calibri,Vectora,\'Droid Sans\',\'Open Sans\',Frutiger,sans-serif;\">Hogast-Kettenkunden-Lieferkunden<\/span><\/p>\n\r"
})
