// handlers.question.go

package main

import (
	"net/http"
	"strconv"

	"github.com/gin-gonic/gin"
)

func showIndexPage(c *gin.Context) {
	questions := getAllQuestions()

	// Call the render function with the name of the template to render
	render(c, gin.H{
		"title":   "Home Page",
		"payload": questions}, "index.html")

}

func getQuestion(c *gin.Context) {
	// Check if the Question ID is valid
	if questionID, err := strconv.Atoi(c.Param("question_id")); err == nil {
		// Check if the question exists
		if question, err := getQuestionByID(questionID); err == nil {
			// Call the HTML method of the Context to render a template
			// Call the render function with the title, article and the name of the
			// template
			render(c, gin.H{
				"title":   question.Question,
				"payload": question}, "question.html")

		} else {
			// If the question is not found, abort with an error
			c.AbortWithError(http.StatusNotFound, err)
		}

	} else {
		// If an invalid question ID is specified in the URL, abort with an error
		c.AbortWithStatus(http.StatusNotFound)
	}
}
