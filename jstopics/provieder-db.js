hmLoadTopic({
hmKeywords:"",
hmTitle:"Provider DB",
hmDescription:"When inserting a record with ProductRecordStateId = 0 the TRG_TRACE_Product_InsteadOfInsert trigger will intercept the insert and will apply following logic:",
hmPrevLink:"",
hmNextLink:"",
hmParentLink:"common.html",
hmBreadCrumbs:"",
hmTitlePath:"Common > Article numbers",
hmHeader:"<h1 class=\"p_Heading1\"><span class=\"f_Heading1\">Provider DB<\/span><\/h1>\n\r",
hmBody:"<p class=\"p_Normal\">&nbsp;<\/p>\n\r<p class=\"p_Normal\">When inserting a record with <span class=\"f_InlineCode\">ProductRecordStateId = 0<\/span> the <span class=\"f_InlineCode\">TRG_TRACE_Product_InsteadOfInsert<\/span> trigger will intercept the insert and will apply following logic:<\/p>\n\r<p class=\"p_Normal\">&nbsp;<\/p>\n\r<p class=\"p_Normal\">If there is already a record with the same BLUUID and ProductRecordState 0 <\/p>\n\r<p class=\"p_Normal\" style=\"text-indent: 0; padding-left: 0.8125rem; margin-left: 0;\"><span class=\"f_Normal\" style=\"font-family: Arial,\'Lucida Sans Unicode\',\'Lucida Grande\',\'Lucida Sans\';display:inline-block;width:0.8125rem;margin-left:-0.8125rem\">&#8226;<\/span>this record will be set to productRecordState 2 (re-tested)<\/p><p class=\"p_Normal\" style=\"text-indent: 0; padding-left: 0.8125rem; margin-left: 0;\"><span class=\"f_Normal\" style=\"font-family: Arial,\'Lucida Sans Unicode\',\'Lucida Grande\',\'Lucida Sans\';display:inline-block;width:0.8125rem;margin-left:-0.8125rem\">&#8226;<\/span>The DeviceId of this record will be used for the record to be inserted (overriding any user-provided deviceid)<\/p><p class=\"p_Normal\">Else<\/p>\n\r<p class=\"p_Normal\" style=\"text-indent: 0; padding-left: 0.8125rem; margin-left: 0;\"><span class=\"f_Normal\" style=\"font-family: Arial,\'Lucida Sans Unicode\',\'Lucida Grande\',\'Lucida Sans\';display:inline-block;width:0.8125rem;margin-left:-0.8125rem\">&#8226;<\/span>The insert is done without any additional logic<\/p><p class=\"p_Normal\">&nbsp;<\/p>\n\r<p class=\"p_Normal\">&nbsp;<\/p>\n\r<p style=\"margin: 0 0 0 0;\"><span style=\"font-size: 0.90rem; font-family: Consolas; color: #0000ff;\">CREATE<\/span><span style=\"font-size: 0.90rem; font-family: Consolas;\"> <\/span><span style=\"font-size: 0.90rem; font-family: Consolas; color: #0000ff;\">UNIQUE<\/span><span style=\"font-size: 0.90rem; font-family: Consolas;\"> <\/span><span style=\"font-size: 0.90rem; font-family: Consolas; color: #0000ff;\">INDEX<\/span><span style=\"font-size: 0.90rem; font-family: Consolas;\"> IX_UniqueBluuid <\/span><span style=\"font-size: 0.90rem; font-family: Consolas; color: #0000ff;\">on<\/span><span style=\"font-size: 0.90rem; font-family: Consolas;\"> Trace_Product<\/span><span style=\"font-size: 0.90rem; font-family: Consolas; color: #0000ff;\"> <\/span><span style=\"font-size: 0.90rem; font-family: Consolas; color: #808080;\">(<\/span><span style=\"font-size: 0.90rem; font-family: Consolas;\">Bluuid<\/span><span style=\"font-size: 0.90rem; font-family: Consolas; color: #808080;\">,<\/span><span style=\"font-size: 0.90rem; font-family: Consolas;\"> ProductRecordStateId<\/span><span style=\"font-size: 0.90rem; font-family: Consolas; color: #808080;\">)<\/span><span style=\"font-size: 0.90rem; font-family: Consolas;\"> <\/span><span style=\"font-size: 0.90rem; font-family: Consolas; color: #0000ff;\">WHERE<\/span><span style=\"font-size: 0.90rem; font-family: Consolas;\"> ProductRecordStateId <\/span><span style=\"font-size: 0.90rem; font-family: Consolas; color: #808080;\">=<\/span><span style=\"font-size: 0.90rem; font-family: Consolas;\"> 0 <\/span><span style=\"font-size: 0.90rem; font-family: Consolas; color: #808080;\">AND<\/span><span style=\"font-size: 0.90rem; font-family: Consolas;\"> Bluuid <\/span><span style=\"font-size: 0.90rem; font-family: Consolas; color: #808080;\">IS<\/span><span style=\"font-size: 0.90rem; font-family: Consolas;\"> <\/span><span style=\"font-size: 0.90rem; font-family: Consolas; color: #808080;\">NOT<\/span><span style=\"font-size: 0.90rem; font-family: Consolas;\"> <\/span><span style=\"font-size: 0.90rem; font-family: Consolas; color: #808080;\">NULL<\/span><\/p>\n\r<p style=\"margin: 0 0 0 0;\"><span style=\"font-size: 0.90rem; font-family: Consolas; color: #0000ff;\">CREATE<\/span><span style=\"font-size: 0.90rem; font-family: Consolas;\"> <\/span><span style=\"font-size: 0.90rem; font-family: Consolas; color: #0000ff;\">UNIQUE<\/span><span style=\"font-size: 0.90rem; font-family: Consolas;\"> <\/span><span style=\"font-size: 0.90rem; font-family: Consolas; color: #0000ff;\">INDEX<\/span><span style=\"font-size: 0.90rem; font-family: Consolas;\"> IX_UniqueDeviceId <\/span><span style=\"font-size: 0.90rem; font-family: Consolas; color: #0000ff;\">on<\/span><span style=\"font-size: 0.90rem; font-family: Consolas;\"> Trace_Product<\/span><span style=\"font-size: 0.90rem; font-family: Consolas; color: #0000ff;\"> <\/span><span style=\"font-size: 0.90rem; font-family: Consolas; color: #808080;\">(<\/span><span style=\"font-size: 0.90rem; font-family: Consolas;\">DeviceId<\/span><span style=\"font-size: 0.90rem; font-family: Consolas; color: #808080;\">,<\/span><span style=\"font-size: 0.90rem; font-family: Consolas;\"> ProductRecordStateId<\/span><span style=\"font-size: 0.90rem; font-family: Consolas; color: #808080;\">)<\/span><span style=\"font-size: 0.90rem; font-family: Consolas;\"> <\/span><span style=\"font-size: 0.90rem; font-family: Consolas; color: #0000ff;\">WHERE<\/span><span style=\"font-size: 0.90rem; font-family: Consolas;\"> ProductRecordStateId <\/span><span style=\"font-size: 0.90rem; font-family: Consolas; color: #808080;\">=<\/span><span style=\"font-size: 0.90rem; font-family: Consolas;\"> 0<\/span><\/p>\n\r<p style=\"margin: 0 0 0 0;\"><span style=\"font-size: 0.90rem; font-family: Consolas; color: #0000ff;\">CREATE<\/span><span style=\"font-size: 0.90rem; font-family: Consolas;\"> <\/span><span style=\"font-size: 0.90rem; font-family: Consolas; color: #0000ff;\">UNIQUE<\/span><span style=\"font-size: 0.90rem; font-family: Consolas;\"> <\/span><span style=\"font-size: 0.90rem; font-family: Consolas; color: #0000ff;\">INDEX<\/span><span style=\"font-size: 0.90rem; font-family: Consolas;\"> IX_UniqueSerialNo <\/span><span style=\"font-size: 0.90rem; font-family: Consolas; color: #0000ff;\">on<\/span><span style=\"font-size: 0.90rem; font-family: Consolas;\"> Trace_Product<\/span><span style=\"font-size: 0.90rem; font-family: Consolas; color: #0000ff;\"> <\/span><span style=\"font-size: 0.90rem; font-family: Consolas; color: #808080;\">(<\/span><span style=\"font-size: 0.90rem; font-family: Consolas;\">SerialNo<\/span><span style=\"font-size: 0.90rem; font-family: Consolas; color: #808080;\">,<\/span><span style=\"font-size: 0.90rem; font-family: Consolas;\"> ProductRecordStateId<\/span><span style=\"font-size: 0.90rem; font-family: Consolas; color: #808080;\">)<\/span><span style=\"font-size: 0.90rem; font-family: Consolas;\"> <\/span><span style=\"font-size: 0.90rem; font-family: Consolas; color: #0000ff;\">WHERE<\/span><span style=\"font-size: 0.90rem; font-family: Consolas;\"> ProductRecordStateId <\/span><span style=\"font-size: 0.90rem; font-family: Consolas; color: #808080;\">IN(<\/span><span style=\"font-size: 0.90rem; font-family: Consolas;\">0<\/span><span style=\"font-size: 0.90rem; font-family: Consolas; color: #808080;\">,<\/span><span style=\"font-size: 0.90rem; font-family: Consolas;\">2<\/span><span style=\"font-size: 0.90rem; font-family: Consolas; color: #808080;\">)<\/span><\/p>\n\r"
})