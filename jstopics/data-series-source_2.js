hmLoadTopic({
hmKeywords:"",
hmTitle:"Processing",
hmDescription:"The time series analysis will process data based on the logic sketched in figure 3. ",
hmPrevLink:"single-value-analysis-request.html",
hmNextLink:"result.html",
hmParentLink:"dans-single-value-analysis.html",
hmBreadCrumbs:"<a href=\"backend-infrastructure.html\">Backend infrastructure<\/a> &gt; <a href=\"daan.html\">Data Analysis Service<\/a> &gt; <a href=\"dans-single-value-analysis.html\">Single value analysis<\/a>",
hmTitlePath:"Backend infrastructure > Data Analysis Service > Single value analysis > Processing",
hmHeader:"<h1 class=\"p_Heading1\"><span class=\"f_Heading1\">Processing<\/span><\/h1>\n\r",
hmBody:"<p class=\"p_Normal\">The time series analysis will process data based on the logic sketched in figure 3. <\/p>\n\r<p class=\"p_Normal\"><img alt=\"dans-time-series-analysis-processing-flowchart\" style=\"margin:0;width:47.1875rem;height:26.7500rem;border:none\" src=\".\/images\/dans-time-series-analysis-processing-flowchart.png\"\/><\/p>\n\r<p class=\"p_Normal\">First the Data Analysis Service fetches and processes data for each defined data series source. The data for each source that is in the time-filter defined with the request is loaded. If the data series source in the request also defines an offset for the data series this offset is applied to the read data. <\/p>\n\r<p class=\"p_Normal\">The data for the data series source is then split into time buckets. For each time bucket the time-aggregation-function defined in the request is applied to calculate exactly one value for the whole bucket or if there are no values within the time bucket no value will be calculated.<\/p>\n\r<p class=\"p_Normal\">These steps are repeated for each data series soruce defined in the request.<\/p>\n\r<p class=\"p_Normal\">If the component aggregation is set to non the result of the processing of each time series is returned as result set. If the component aggregation is set to anything else but none the results of equal time buckets (same start and end date) across components are aggregated using the component aggregation function. This way only one value is calculated for each time-bucked for for all data series sources and only one time-series is returned as result.<\/p>\n\r"
})
