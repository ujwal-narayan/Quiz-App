package main

import (
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func routesHandler() {
	r := gin.Default()
	r.GET("/people/", GetPeople) // Creating routes for each functionality
	r.GET("/people/:id", GetPerson)
	r.POST("/people", CreatePerson)
	r.PUT("/people/:id", UpdatePerson)
	r.DELETE("/people/:id", DeletePerson)
	r.GET("/questions/", GetQuestions) // Creating routes for each functionality
	r.GET("/questions/:id", GetQuestion)
	r.POST("/questions", CreateQuestion)
	r.PUT("/questions/:id", UpdateQuestion)
	r.DELETE("/questions/:id", DeleteQuestion)
	r.Use((cors.Default()))
	r.Run(":8080") // Run on port 8080
}
