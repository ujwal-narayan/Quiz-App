package main

import (
	"fmt"
	"strconv"

	"github.com/gin-gonic/gin"
)

func CreateQuestion(c *gin.Context) {
	var question Question

	c.BindJSON(&question)
	b, err := strconv.ParseInt(question.Quiz, 10, 64)
	if err != nil {
		// handle the error in some way
	}
	question.QuizID = uint(b)
	var q Quiz
	db.Where("id=?", question.QuizID).First(&q)
	fmt.Println(question.QuizID)
	fmt.Println(q.ID)
	if q.ID == question.QuizID {
		db.Create(&question)
		fmt.Println("HER")
		c.Header("access-control-allow-origin", "*") // Why am I doing this? Find out. Try running with this line commented
		c.JSON(200, question)
	} else {
		c.Header("access-control-allow-origin", "*")
		c.JSON(300, question)
	}
}

func GetQuestion(c *gin.Context) {
	id := c.Params.ByName("id")
	var question Question
	if err := db.Where("id = ?", id).First(&question).Error; err != nil {
		c.AbortWithStatus(404)
		fmt.Println(err)
	} else {
		c.Header("access-control-allow-origin", "*") // Why am I doing this? Find out. Try running with this line commented
		c.JSON(200, question)
	}
}

func GetQuestions(c *gin.Context) {
	var question []Question
	if err := db.Find(&question).Error; err != nil {
		c.AbortWithStatus(404)
		fmt.Println(err)
	} else {
		c.Header("access-control-allow-origin", "*") // Why am I doing this? Find out. Try running with this line commented
		c.JSON(200, question)
	}
}
func DeleteQuestion(c *gin.Context) {
	id := c.Params.ByName("id")
	var question Question
	d := db.Where("id = ?", id).Delete(&question)
	fmt.Println(d)
	c.Header("access-control-allow-origin", "*")
	c.JSON(200, gin.H{"id #" + id: "deleted"})
}

func UpdateQuestion(c *gin.Context) {
	var question Question
	id := c.Params.ByName("id")
	if err := db.Where("id = ?", id).First(&question).Error; err != nil {
		c.AbortWithStatus(404)
		fmt.Println(err)
	}
	c.BindJSON(&question)
	db.Save(&question)
	c.Header("access-control-allow-origin", "*") // Why am I doing this? Find out. Try running with this line commented
	c.JSON(200, question)
}
