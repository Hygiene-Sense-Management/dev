hmLoadTopic({
hmKeywords:"",
hmTitle:"Example topic & writing guide",
hmDescription:"Each topic begins with a short introduction or abstract that describes the contents of the topics. This topic is an example topic that shows all styles used in the user manual...",
hmPrevLink:"",
hmNextLink:"",
hmParentLink:"index.html",
hmBreadCrumbs:"",
hmTitlePath:"Glossary",
hmHeader:"<h1 class=\"p_Heading1\"><span class=\"f_Heading1\">Example topic &amp; writing guide<\/span><\/h1>\n\r",
hmBody:"<p class=\"p_Normal\">Each topic begins with a short introduction or abstract that describes the contents of the topics. This topic is an example topic that shows all styles used in the user manual and explains their usage. It also gives general information on how to write documentation. <\/p>\n\r<h1 class=\"p_Heading1\"><span class=\"f_Heading1\">Setting your H&amp;M environment<\/span><\/h1>\n\r<h1 class=\"p_Heading1\"><span class=\"f_Heading1\">Page width<\/span><\/h1>\n\r<p style=\"line-height: 1.20; margin: 0 0 0 0;\">The manuals main publishing target is HTML. The template we use uses a maximum width for the chapter text. To have a good guess on how the documentation will look when published as HTML it is suggested to size the H&amp;M text editor area so that it shows about 19 cm of width (ruler units can be set in user settings) <\/p>\n\r<h1 class=\"p_Heading1\"><span class=\"f_Heading1\">Spell checking<\/span><\/h1>\n\r<h2 class=\"p_Heading2\">We use English (US) as documentation language therefore you should set the spell checker accordingly. For HsM specific words we use an additional dictionary in the root of the repository: <span class=\"f_InlineCode\">HsM Reference manual custom dictionary.adu<\/span><\/h2>\n\r<h1 class=\"p_Heading1\"><span class=\"f_Heading1\">Topic ID guidelines<\/span><\/h1>\n\r<p class=\"p_Normal\">The topic id is important since it will be part of the URL when published to HTML. <\/p>\n\r<p class=\"p_CondensedNormal\" style=\"text-indent: 0; padding-left: 0.8125rem; margin-left: 0;\"><span class=\"f_CondensedNormal\" style=\"font-family: Arial,\'Lucida Sans Unicode\',\'Lucida Grande\',\'Lucida Sans\';display:inline-block;width:0.8125rem;margin-left:-0.8125rem\">&#8226;<\/span>Once<span class=\"f_CondensedNormal\"> published Topic IDs shall not change since we might have links pointing to the topic.<\/span><\/p><p class=\"p_CondensedNormal\" style=\"text-indent: 0; padding-left: 0.8125rem; margin-left: 0;\"><span class=\"f_CondensedNormal\" style=\"font-family: Arial,\'Lucida Sans Unicode\',\'Lucida Grande\',\'Lucida Sans\';display:inline-block;width:0.8125rem;margin-left:-0.8125rem\">&#8226;<\/span><span class=\"f_CondensedNormal\">Random Ids (like GUIDs) are not used since finding a topic internally in H+M (e.g. when linking) is then a nightmare<\/span><\/p><p class=\"p_CondensedNormal\" style=\"text-indent: 0; padding-left: 0.8125rem; margin-left: 0;\"><span class=\"f_CondensedNormal\" style=\"font-family: Arial,\'Lucida Sans Unicode\',\'Lucida Grande\',\'Lucida Sans\';display:inline-block;width:0.8125rem;margin-left:-0.8125rem\">&#8226;<\/span><span class=\"f_CondensedNormal\">Topics ID shall not express the chapter or hierarchy in which the topic is since that might change and then a rename would be necessary<\/span><\/p><p class=\"p_CondensedNormal\" style=\"text-indent: 0; padding-left: 0.8125rem; margin-left: 0;\"><span class=\"f_CondensedNormal\" style=\"font-family: Arial,\'Lucida Sans Unicode\',\'Lucida Grande\',\'Lucida Sans\';display:inline-block;width:0.8125rem;margin-left:-0.8125rem\">&#8226;<\/span><span class=\"f_CondensedNormal\">Do not use CamelCasing: when publishing to html the file names will be all lowercase, therefore camelcasing is gone.<\/span><\/p><p class=\"p_CondensedNormal\" style=\"text-indent: 0; padding-left: 0.8125rem; margin-left: 0;\"><span class=\"f_CondensedNormal\" style=\"font-family: Arial,\'Lucida Sans Unicode\',\'Lucida Grande\',\'Lucida Sans\';display:inline-block;width:0.8125rem;margin-left:-0.8125rem\">&#8226;<\/span><span class=\"f_CondensedNormal\">Word-Separation: if topic consists of more tha one word use the dash to separate.<\/span><\/p><p class=\"p_CondensedNormal\" style=\"text-indent: 0; padding-left: 0.8125rem; margin-left: 0;\"><span class=\"f_CondensedNormal\" style=\"font-family: Arial,\'Lucida Sans Unicode\',\'Lucida Grande\',\'Lucida Sans\';display:inline-block;width:0.8125rem;margin-left:-0.8125rem\">&#8226;<\/span><span class=\"f_CondensedNormal\">Prefixes: Sometimes<\/span> we want to prefix or group topics in order to prevent duplicates. <\/p><h1 class=\"p_Heading1\"><span class=\"f_Heading1\">Structuring the manual<\/span><\/h1>\n\r<p class=\"p_Normal\">No guideline yet<\/p>\n\r<h1 class=\"p_Heading1\"><span class=\"f_Heading1\">Creating Topics<\/span><\/h1>\n\r<p class=\"p_Normal\">When creating a new topic be sure to select the Default.template.xml as Topic template. This way the first Text you write is already in &quot;Paragraph Mode&quot; (see image below). Each topic has metadata, for us following meta data fields are important:<\/p>\n\r<p class=\"p_CondensedNormal\" style=\"text-indent: 0; padding-left: 0.8125rem; margin-left: 0;\"><span class=\"f_CondensedNormal\" style=\"font-family: Arial,\'Lucida Sans Unicode\',\'Lucida Grande\',\'Lucida Sans\';display:inline-block;width:0.8125rem;margin-left:-0.8125rem\">&#8226;<\/span><span class=\"f_CondensedNormal\">Topic name (ID): see above<\/span><\/p><p class=\"p_CondensedNormal\" style=\"text-indent: 0; padding-left: 0.8125rem; margin-left: 0;\"><span class=\"f_Normal\" style=\"font-family: Arial,\'Lucida Sans Unicode\',\'Lucida Grande\',\'Lucida Sans\';display:inline-block;width:0.8125rem;margin-left:-0.8125rem\">&#8226;<\/span><span class=\"f_CondensedNormal\">Keywords: These are the keywords<\/span> used to make up an index for the help file and also for pdf files etc. We should fill these keywords but use them wisely.<\/p><p class=\"p_Normal\">We do not use A-keywords<\/p>\n\r<h1 class=\"p_Heading1\"><span class=\"f_Heading1\">Screenshots &amp; images<\/span><\/h1>\n\r<p class=\"p_Normal\">Generally (at least in the product reference) we try to not add too many images. Where an image is worth a thousand words we will surely use an image, but remember that keeping images up to date is really painful. Images need to be stored in the Help&amp;Manual project folder under the sub folder Baggage. Images must be stored in png format.<\/p>\n\r<p class=\"p_Normal\">Image size is crucial since the Reference Manual will be published online. H+M has an integrated image editor that can be used to crop and resize an image. Do not simply resize the image in the topic but resample the image in the image editor! We avoid to add any arrows or other graphical and textual information to the image itself because this is extremely hard to update!<\/p>\n\r<p class=\"p_Normal\">It is important to be able to identify to which topic images belong (on the files system) therefore following naming rules should be used for images: &lt;TopicId&gt;_&lt;ImageNoOrName&gt;.png.<\/p>\n\r<p class=\"p_Normal\">Help&amp;Manual automatically assigns the Image Caption style to all images. Image caption (description of images) go below the image.<\/p>\n\r<p class=\"p_ImageCaption\"><span class=\"f_ImageCaption\">Figure 1: In Create new topic dialog select the right topic template. <\/span><\/p>\n\r<h1 class=\"p_Heading1\"><span class=\"f_Heading1\">Headers within topics<\/span><\/h1>\n\r<p style=\"line-height: 1.20; margin: 0 0 0 0;\">Within topics we Headers can be used to structure the text. Although we define Heading1 and Heading2 it is usually better to structure the TOC instead of the chapter itself.<\/p>\n\r<h1 class=\"p_Heading1\"><span class=\"f_Heading1\">Identifier<\/span><\/h1>\n\r<p style=\"line-height: 1.20; margin: 0 0 0 0;\">An identifier is used to mark a specific part of a text as being an identifier in the current context and not being part of the text itself. You use identifiers to refer to Screen elements etc. E.g. select <span class=\"f_Term\">Overwrite<\/span> to overwrite existing observations.<\/p>\n\r<h1 class=\"p_Heading1\"><a id=\"anchorswithintopics\" class=\"hmanchor\"><\/a><span class=\"f_Heading1\">Anchors within topics<\/span><\/h1>\n\r<p class=\"p_Normal\">For better linking it is advisable to add anchors within longer topics. Candidate positions are <\/p>\n\r<p class=\"p_CondensedNormal\" style=\"text-indent: 0; padding-left: 0.8125rem; margin-left: 0;\"><span class=\"f_CondensedNormal\" style=\"font-family: Arial,\'Lucida Sans Unicode\',\'Lucida Grande\',\'Lucida Sans\';display:inline-block;width:0.8125rem;margin-left:-0.8125rem\">&#8226;<\/span><span class=\"f_CondensedNormal\">Topic Heading<\/span><\/p><p class=\"p_CondensedNormal\" style=\"text-indent: 0; padding-left: 0.8125rem; margin-left: 0;\"><span class=\"f_CondensedNormal\" style=\"font-family: Arial,\'Lucida Sans Unicode\',\'Lucida Grande\',\'Lucida Sans\';display:inline-block;width:0.8125rem;margin-left:-0.8125rem\">&#8226;<\/span><span class=\"f_CondensedNormal\">Images<\/span><\/p><h1 class=\"p_Heading1\"><span class=\"f_Heading1\">Linking of other topics<\/span><\/h1>\n\r<p class=\"p_Normal\">Where ever possible we link other topics to give the user the possibility to easily navigate between topics. Following rules should be followed when linking:<\/p>\n\r<p class=\"p_CondensedNormal\" style=\"text-indent: 0; padding-left: 0.8125rem; margin-left: 0;\"><span class=\"f_CondensedNormal\" style=\"font-family: Arial,\'Lucida Sans Unicode\',\'Lucida Grande\',\'Lucida Sans\';display:inline-block;width:0.8125rem;margin-left:-0.8125rem\">&#8226;<\/span><span class=\"f_CondensedNormal\">Give each link a meaningful name, do not use see here etc<\/span><\/p><p class=\"p_CondensedNormal\" style=\"text-indent: 0; padding-left: 0.8125rem; margin-left: 0;\"><span class=\"f_CondensedNormal\" style=\"font-family: Arial,\'Lucida Sans Unicode\',\'Lucida Grande\',\'Lucida Sans\';display:inline-block;width:0.8125rem;margin-left:-0.8125rem\">&#8226;<\/span><span class=\"f_CondensedNormal\">One destination should only be linked once in a topic<\/span><\/p><p class=\"p_CondensedNormal\" style=\"text-indent: 0; padding-left: 0.8125rem; margin-left: 0;\"><span class=\"f_CondensedNormal\" style=\"font-family: Arial,\'Lucida Sans Unicode\',\'Lucida Grande\',\'Lucida Sans\';display:inline-block;width:0.8125rem;margin-left:-0.8125rem\">&#8226;<\/span><span class=\"f_CondensedNormal\">If possible link to a specific anchor in the destination.<\/span><\/p><p class=\"p_Normal\">Usually only the first occurrence of a keyword (e.g. feature) shall be linked <\/p>\n\r<h1 class=\"p_Heading1\"><span class=\"f_Heading1\">Lists<\/span><\/h1>\n\r<p class=\"p_Normal\">Unfortunately H&amp;M does not support bullet lists or numbering lists as part of &nbsp;styles. Therefore there is a separate style named List that we use for all lists and then we apply the numbering or bullet style via the lists menu. We agree to use only simple bullets and numbers<span style=\"font-family: Arial,Helvetica,sans-serif;\">.<\/span><\/p>\n\r<p class=\"p_Normal\"><span style=\"font-family: Arial,Helvetica,sans-serif;\">Example for bullet list:<\/span><\/p>\n\r<p class=\"p_CondensedNormal\" style=\"text-indent: 0; padding-left: 0.8125rem; margin-left: 0;\"><span class=\"f_CondensedNormal\" style=\"font-family: Arial,\'Lucida Sans Unicode\',\'Lucida Grande\',\'Lucida Sans\';display:inline-block;width:0.8125rem;margin-left:-0.8125rem\">&#8226;<\/span><span class=\"f_CondensedNormal\">Lists shall never follow directly after a TopicHeading. <\/span><\/p><p class=\"p_CondensedNormal\" style=\"text-indent: 0; padding-left: 0.8125rem; margin-left: 0;\"><span class=\"f_CondensedNormal\" style=\"font-family: Arial,\'Lucida Sans Unicode\',\'Lucida Grande\',\'Lucida Sans\';display:inline-block;width:0.8125rem;margin-left:-0.8125rem\">&#8226;<\/span><span class=\"f_CondensedNormal\">List items shall start with an uppercase character<\/span><\/p><p class=\"p_CondensedNormal\" style=\"text-indent: 0; padding-left: 0.8125rem; margin-left: 0;\"><span class=\"f_CondensedNormal\" style=\"font-family: Arial,\'Lucida Sans Unicode\',\'Lucida Grande\',\'Lucida Sans\';display:inline-block;width:0.8125rem;margin-left:-0.8125rem\">&#8226;<\/span><span class=\"f_CondensedNormal\">Item 3<\/span><\/p><p class=\"p_Normal\">Example for numbering list:<\/p>\n\r<p class=\"p_CondensedNormal\" style=\"text-indent: 0; padding-left: 1.2500rem; margin-left: 0;\"><span class=\"f_CondensedNormal\" style=\"display:inline-block;width:1.2500rem;margin-left:-1.2500rem\">1.<\/span><span class=\"f_CondensedNormal\">Item 1<\/span><\/p><p class=\"p_CondensedNormal\" style=\"text-indent: 0; padding-left: 1.2500rem; margin-left: 0;\"><span class=\"f_CondensedNormal\" style=\"display:inline-block;width:1.2500rem;margin-left:-1.2500rem\">2.<\/span><span class=\"f_CondensedNormal\">Item 2<\/span><\/p><p class=\"p_CondensedNormal\" style=\"text-indent: 0; padding-left: 1.2500rem; margin-left: 0;\"><span class=\"f_CondensedNormal\" style=\"display:inline-block;width:1.2500rem;margin-left:-1.2500rem\">3.<\/span><span class=\"f_CondensedNormal\">Item 3<\/span><\/p><p class=\"p_Normal\">We do not use nested lists.<\/p>\n\r<h1 class=\"p_Heading1\"><span class=\"f_Heading1\">Highlighting important information<\/span><\/h1>\n\r<p class=\"p_Normal\">There might be the need to specially layout important notes or warnings and other important information. This should be done within a single cell table that using one of the <span class=\"f_InlineCode\">Box*<\/span> Table styles.<\/p>\n\r<div style=\"text-align: left; text-indent: 0; line-height: 1.44; padding: 0 0 0 0; margin: 0.3750rem 0 0.2500rem 0;\"><table class=\"BoxImportant\" >\n\r<tr class=\"BoxImportant\">\n\r<td class=\"BoxImportant\"><p class=\"p_Normal\"><span style=\"font-weight: bold;\"> Note<\/span><\/p>\n\r<p class=\"p_Normal\">A single<span class=\"f_CondensedNormal\"> cell tables with a <\/span>Box Note<span class=\"f_CondensedNormal\"> table style can be used to highlight important information within a chapter.<\/span><\/p>\n\r<p class=\"p_Normal\">Within a note all other styles can be used, but we do not use headers within Box table.<\/p>\n\r<\/td>\n\r<\/tr>\n\r<\/table>\n\r<\/div>\n\r<div style=\"text-align: left; text-indent: 0; line-height: 1.44; padding: 0 0 0 0; margin: 0.3750rem 0 0.2500rem 0;\"><table class=\"BoxCaution\" >\n\r<tr class=\"BoxCaution\">\n\r<td class=\"BoxCaution\"><p class=\"p_Normal\"><img alt=\"stop-circle\" style=\"float:left;margin:0;width:0.9375rem;height:0.9375rem;border:none\" src=\".\/images\/stop-circle.svg\"\/><span class=\"f_ImageCaption\"> <\/span><span style=\"font-weight: bold;\">Caution<\/span><\/p>\n\r<p class=\"p_Normal\">This is very important information<\/p>\n\r<p class=\"p_Normal\">Within a note all other styles can be used, but we do not use headers within Box table.<\/p>\n\r<\/td>\n\r<\/tr>\n\r<\/table>\n\r<\/div>\n\r<h1 class=\"p_Heading1\"><span class=\"f_Heading1\">Tables<\/span><\/h1>\n\r<p class=\"p_Normal\">Tables can be helpful in many cases. Help&amp;Manual supports table styles. Every table must use one of the predefined styles. Unfortunately these styles are rather limited therefore we additionally define styles for the contents of the table.<\/p>\n\r<div style=\"text-align: left; text-indent: 0; padding: 0 0 0 0; margin: 0 0 0 0;\"><table style=\"width:43.7500rem; border:none; border-spacing:0; border-collapse:collapse;\">\n\r<thead>\n\r<tr>\n\r<th style=\"vertical-align:top; background-color:#F5F5F5; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">Header<\/p>\n\r<\/th>\n\r<th style=\"vertical-align:top; background-color:#F5F5F5; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">Header<\/p>\n\r<\/th>\n\r<th style=\"vertical-align:top; background-color:#F5F5F5; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">Header <\/p>\n\r<\/th>\n\r<\/tr>\n\r<\/thead>\n\r<tbody>\n\r<tr>\n\r<td style=\"vertical-align:top; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">Content<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">Content<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">Content<\/p>\n\r<\/td>\n\r<\/tr>\n\r<\/tbody>\n\r<\/table>\n\r<\/div>\n\r<p class=\"p_ImageCaption\"><a id=\"fig_deec9b\" class=\"hmanchor\"><\/a><span class=\"f_ImageCaption\">Table 45: Example Table<\/span><\/p>\n\r<h1 class=\"p_Heading1\"><span class=\"f_Heading1\">Glossary<\/span><\/h1>\n\r<p style=\"line-height: 1.20; margin: 0 0 0 0;\"><span style=\"font-family: Arial,Helvetica,sans-serif;\">No advice yet.<\/span><\/p>\n\r<h1 class=\"p_Heading1\"><span class=\"f_Heading1\">Capitalization<\/span><\/h1>\n\r<p class=\"p_Normal\">Topic headers are not capitalized. a valid topic header would be &quot;This is my new topic header&quot; Although names etc are still capitalized E.g. This is an introduction to the Catalog Service<\/p>\n\r"
})
