hmLoadTopic({
hmKeywords:"",
hmTitle:"Raw data blob storage structure",
hmDescription:"The blobs in the Raw data blob storage are organized using a virtual file system structure. Figure 2 shows this virtual structure.",
hmPrevLink:"prdp-raw-data-storage.html",
hmNextLink:"prdp-message-types.html",
hmParentLink:"prdp-raw-data-storage.html",
hmBreadCrumbs:"<a href=\"backend-infrastructure.html\">Backend infrastructure<\/a> &gt; <a href=\"pdpr.html\">Primary Data Processing<\/a> &gt; <a href=\"prdp-raw-data-storage.html\">Raw data storage<\/a>",
hmTitlePath:"Backend infrastructure > Primary Data Processing > Raw data storage > Raw data blob storage structure",
hmHeader:"<h1 class=\"p_Heading1\"><span class=\"f_Heading1\">Raw data blob storage structure<\/span><\/h1>\n\r",
hmBody:"<p class=\"p_Normal\">The blobs in the Raw data blob storage are organized using a virtual file system structure. Figure 2 shows this virtual structure.<\/p>\n\r<p class=\"p_Normal\"><img alt=\"prdp-rawdatastorage-virtual-structure\" style=\"margin:0;width:31.6875rem;height:14.6250rem;border:none\" src=\".\/images\/prdp-rawdatastorage-virtual-structure.png\"\/><\/p>\n\r<p class=\"p_Normal\"><a id=\"fig_1bb563\" class=\"hmanchor\"><\/a><span class=\"f_ImageCaption\">Figure 3: &nbsp;The virtual file system structure used in the Raw Data Blob Storage. See <\/span><span class=\"f_ImageCaption\">17<\/span><\/p>\n\r<div style=\"text-align: left; text-indent: 0; line-height: 1.44; padding: 0 0 0 0; margin: 0.2500rem 0 0.3750rem 0;\"><table style=\"width:43.7500rem; border:none; border-spacing:0; border-collapse:collapse;\">\n\r<thead>\n\r<tr>\n\r<th style=\"vertical-align:top; background-color:#F5F5F5; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">Message Type code<\/p>\n\r<\/th>\n\r<th style=\"vertical-align:top; background-color:#F5F5F5; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">Each type of message gets its own code<\/p>\n\r<\/th>\n\r<\/tr>\n\r<\/thead>\n\r<tbody>\n\r<tr>\n\r<td style=\"vertical-align:top; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">Message type code<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">In device to cloud communication HsM uses different types of messages for different purposes. Each type of message gets its own virtual folder. Note that different versions of the same type of message will still be stored in the same virtual folder, so you cannot expect only one syntactical format within one message type code folder.<\/p>\n\r<\/td>\n\r<\/tr>\n\r<tr>\n\r<td style=\"vertical-align:top; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">Year<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">Year of the time-instant when the message was persisted to the blob storage, encoded as 4 digits (.NET date format string: yyyy).<\/p>\n\r<\/td>\n\r<\/tr>\n\r<tr>\n\r<td style=\"vertical-align:top; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">Month<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">Month of the time-instant when the message was persisted to the blob storage, encoded as 2 digits with leading zeros if necessary. (.NET date format string: MM).<\/p>\n\r<\/td>\n\r<\/tr>\n\r<tr>\n\r<td style=\"vertical-align:top; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">Day<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">Day of the time-instant when the message was persisted to the blob storage, encoded as 2 digits with leading zeros if necessary. (.NET date format string: dd).<\/p>\n\r<\/td>\n\r<\/tr>\n\r<tr>\n\r<td style=\"vertical-align:top; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">Hour<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">Hour of the time-instant when the message was persisted to the blob storage, encoded as 2 digits hour on a 24h clock with leading zeros if necessary (.NET date format string: HH).<\/p>\n\r<\/td>\n\r<\/tr>\n\r<tr>\n\r<td style=\"vertical-align:top; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">Minute<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">Minute of the time-instant when the message was persisted to the blob storage, encoded as 2 digits hour on a 24h clock with leading zeros if necessary (.NET date format string: mm).<\/p>\n\r<\/td>\n\r<\/tr>\n\r<tr>\n\r<td style=\"vertical-align:top; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">MillisecondsInMinute<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">Milliseconds from start of minute of the time-instant when the message was persisted to the blob storage, encoded as 2 digits hour on a 24h clock with leading zeros if necessary (.NET date format string: mm).<\/p>\n\r<\/td>\n\r<\/tr>\n\r<\/tbody>\n\r<\/table>\n\r<\/div>\n\r"
})
