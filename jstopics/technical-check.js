hmLoadTopic({
hmKeywords:"",
hmTitle:"Technical Check",
hmDescription:"Definition of overdue The technical checks for a customer has a due date d The technical check for a customer has a grace period before g1, and grace period after g2 The...",
hmPrevLink:"locking.html",
hmNextLink:"dase.html",
hmParentLink:"clse.html",
hmBreadCrumbs:"<a href=\"backend-infrastructure.html\">Backend infrastructure<\/a> &gt; <a href=\"clse.html\">Client Service<\/a>",
hmTitlePath:"Backend infrastructure > Client Service > Technical Check",
hmHeader:"<h1 class=\"p_Heading1\"><span class=\"f_Heading1\">Technical Check<\/span><\/h1>\n\r",
hmBody:"<p class=\"p_Normal\">Definition of overdue<\/p>\n\r<p class=\"p_Normal\">The technical checks for a customer has a due date d The technical check for a customer has a grace period before g1, and grace period after g2 The technical check is due in the interval (d-g1, d +g2] The technical check is overdue in in the interval (d+g2, ∞)<\/p>\n\r<p class=\"p_Normal\">technical checks performed for rooms of a customer at date x where x &gt; d + g2 are still mapped to period (d-g, d +g] if the technical check for the customer was not completed within (d - g, d + g] technical checks performed for rooms of a customer at date x where x &gt; d + g are not mapped to any interval if the technical check for the customer was completed within (d - g, d + g]<\/p>\n\r<p class=\"p_Normal\">Resetting the due date might automatically complete a technical check for a customer Resetting the due date is not necessary even in overdue cases.<\/p>\n\r"
})
