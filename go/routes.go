// routes.go

package main

func initializeRoutes() {

	// Handle the index route
	router.GET("/", showIndexPage)

	// Handle GET requests at /question/view/some_question_id
	router.GET("/question/view/:question_id", getQuestion)
}
