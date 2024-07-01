var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "frontmatter-2",
  "level": "1",
  "url": "frontmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  copyright  "
},
{
  "id": "sec-math-models",
  "level": "1",
  "url": "sec-math-models.html",
  "type": "Worksheet",
  "number": "1.1",
  "title": "Mathematical Models",
  "body": " Mathematical Models    Media outlets regularly publish rankings of cell phone carriers, travel destinations, colleges, TVs, and credit cards, just to mention a few.  Here's an example of one such ranking - the \" Best Places to Retire on Earth ,\" according to investopedia.com . To determine which countries are the best for retirees, they used a scoring system that measured seven categories:   Visa\/benefits  Climate  Cost of living  Development  Healthcare  Housing  Affinity rating   The top 4 countries with the highest cumulative average score across all those categories are Costa Rica, Portugal, Mexico, and Panama.  When creating rankings like the one above, we first need to decide what factors (variables) will contribute to the overall ranking. Then, we need to decide how those factors can be measured (quantified). Finally, we need a formula that combines all of them into one overall score.   Important factors for a decision or situation are called variables . Variables that have values that are numbers called quantitative variables .   In your group, agree on a topic that interests everyone (or most of you!), and try to come up with a strategy to create a ranking system related to that topic. For example, you could think about how you’d rank the restaurants in your area. After agreeing on a topic, think about:   What variables to use;  How to measure those variables; and  How to combine all of them into one overall score.        Every year, U.S. News & World Report publishes a list of the best colleges in the United States. Colleges on the list are ranked based on many different factors, such as first-year student retention, graduation rates, and faculty strength.    Using what you know about how U.S. News ranks colleges, discuss what things you might include in your decision in choosing a college. That is, what factors would be important to your decision?    Brainstorm how numeric values could be used to quantify (express with numbers) the variables you identified above. Include the units of measurement.    A mathematical model is a description of a system, or situation, using mathematical concepts, language, and numbers. People often use variables to help create mathematical models. Mathematical models can be represented as equations, tables, graphs, or descriptions in words.   "
},
{
  "id": "sec-math-models-2-2",
  "level": "2",
  "url": "sec-math-models.html#sec-math-models-2-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "variables quantitative variables "
},
{
  "id": "sec-math-models-2-3",
  "level": "2",
  "url": "sec-math-models.html#sec-math-models-2-3",
  "type": "Activity",
  "number": "1.1.1",
  "title": "",
  "body": " In your group, agree on a topic that interests everyone (or most of you!), and try to come up with a strategy to create a ranking system related to that topic. For example, you could think about how you’d rank the restaurants in your area. After agreeing on a topic, think about:   What variables to use;  How to measure those variables; and  How to combine all of them into one overall score.   "
},
{
  "id": "sec-math-models-3-1",
  "level": "2",
  "url": "sec-math-models.html#sec-math-models-3-1",
  "type": "Activity",
  "number": "1.1.2",
  "title": "",
  "body": "  Every year, U.S. News & World Report publishes a list of the best colleges in the United States. Colleges on the list are ranked based on many different factors, such as first-year student retention, graduation rates, and faculty strength.    Using what you know about how U.S. News ranks colleges, discuss what things you might include in your decision in choosing a college. That is, what factors would be important to your decision?    Brainstorm how numeric values could be used to quantify (express with numbers) the variables you identified above. Include the units of measurement.   "
},
{
  "id": "sec-math-models-3-2",
  "level": "2",
  "url": "sec-math-models.html#sec-math-models-3-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "mathematical model "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
