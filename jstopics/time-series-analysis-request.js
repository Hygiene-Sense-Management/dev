hmLoadTopic({
hmKeywords:"",
hmTitle:"Request",
hmDescription:"Time series analyses are based on time series analysis requests that give the Data Analysis Service what data to process and how to process that data. Tables 14 and 14 describe...",
hmPrevLink:"dans-time-series-analysis.html",
hmNextLink:"data-series-source.html",
hmParentLink:"dans-time-series-analysis.html",
hmBreadCrumbs:"<a href=\"backend-infrastructure.html\">Backend infrastructure<\/a> &gt; <a href=\"dans.html\">Data Analysis Service<\/a> &gt; <a href=\"dans-time-series-analysis.html\">Time Series analysis&nbsp;<\/a>",
hmTitlePath:"Backend infrastructure > Data Analysis Service > Time Series analysis  > Request",
hmHeader:"<h1 class=\"p_Heading1\"><span class=\"f_Heading1\">Request<\/span><\/h1>\n\r",
hmBody:"<p class=\"p_Normal\">Time series analyses are based on time series analysis requests that give the Data Analysis Service what data to process and how to process that data. Tables 14 and 14 describe the parameters of a time series analysis request.<\/p>\n\r<div style=\"text-align: left; text-indent: 0; line-height: 1.44; padding: 0 0 0 0; margin: 0.2500rem 0 0.3750rem 0;\"><table style=\"width:43.7500rem; border:none; border-spacing:0; border-collapse:collapse;\">\n\r<thead>\n\r<tr>\n\r<th style=\"vertical-align:top; width:9.1875rem; background-color:#F5F5F5; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">Request parameter<\/p>\n\r<\/th>\n\r<th style=\"vertical-align:top; width:33.8750rem; background-color:#F5F5F5; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">Description<\/p>\n\r<\/th>\n\r<\/tr>\n\r<\/thead>\n\r<tbody>\n\r<tr>\n\r<td style=\"vertical-align:top; width:9.1875rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">Data series sources<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; width:33.8750rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">A collection of data series source (see table 15 for details). At least one data series source has to be specified for each request.<\/p>\n\r<\/td>\n\r<\/tr>\n\r<tr>\n\r<td style=\"vertical-align:top; width:9.1875rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">Time aggregation function<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; width:33.8750rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">Defines how data of a single data series is aggregated within a time bucket.<\/p>\n\r<p class=\"p_Normal\">&nbsp;<\/p>\n\r<\/td>\n\r<\/tr>\n\r<tr>\n\r<td style=\"vertical-align:top; width:9.1875rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">Device aggregation function<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; width:33.8750rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">Defines the aggregated values for time buckets are aggregated over devices.<\/p>\n\r<\/td>\n\r<\/tr>\n\r<tr>\n\r<td style=\"vertical-align:top; width:9.1875rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">time bucket<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; width:33.8750rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">Defines the size of the time buckets.<\/p>\n\r<\/td>\n\r<\/tr>\n\r<\/tbody>\n\r<\/table>\n\r<\/div>\n\r<p class=\"p_ImageCaption\"><a id=\"fig_98f368\" class=\"hmanchor\"><\/a><span class=\"f_ImageCaption\">Table 15: Parameters of a time series analysis request<\/span><\/p>\n\r<div style=\"text-align: left; text-indent: 0; line-height: 1.44; padding: 0 0 0 0; margin: 0.2500rem 0 0.3750rem 0;\"><table style=\"width:43.7500rem; border:none; border-spacing:0; border-collapse:collapse;\">\n\r<tr>\n\r<td style=\"vertical-align:top; width:9.2500rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">Request parameter<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; width:33.8750rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">Description<\/p>\n\r<\/td>\n\r<\/tr>\n\r<tr>\n\r<td style=\"vertical-align:top; width:9.2500rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">Component Id<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; width:33.8750rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">The identifier of the component that generated data for a data series<\/p>\n\r<\/td>\n\r<\/tr>\n\r<tr>\n\r<td style=\"vertical-align:top; width:9.2500rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">Resource type<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; width:33.8750rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">The id of the resource type<\/p>\n\r<\/td>\n\r<\/tr>\n\r<tr>\n\r<td style=\"vertical-align:top; width:9.2500rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">Resource instance number<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; width:33.8750rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">The id of the resource instance number<\/p>\n\r<\/td>\n\r<\/tr>\n\r<tr>\n\r<td style=\"vertical-align:top; width:9.2500rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">Time interval<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; width:33.8750rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">The Data Analysis Service will only process data of this data series source that applies to a date within this interval. The interval is specified with a from and to date - time. These boundaries are inclusive, i.e. they defined a closed date interval<\/p>\n\r<\/td>\n\r<\/tr>\n\r<\/table>\n\r<\/div>\n\r<p class=\"p_ImageCaption\"><a id=\"fig_126332\" class=\"hmanchor\"><\/a><span class=\"f_ImageCaption\">Table 16: Parameters of a data series source within a time series analysis request<\/span><\/p>\n\r"
})
