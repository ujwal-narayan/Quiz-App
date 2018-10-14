package main

import (
	"fmt"
	"strconv"

	"github.com/gin-gonic/gin"
)

func CreateQuiz(c *gin.Context) {
	var quiz Quiz
	fmt.Println("here")
	c.BindJSON(&quiz)
	fmt.Println(quiz)

	db.Create(&quiz)
	c.Header("access-control-allow-origin", "*") // Why am I doing this? Find out. Try running with this line commented
	c.JSON(200, quiz)
}
func GetQuiz(c *gin.Context) {
	id := c.Params.ByName("id")
	var quiz Quiz
	if err := db.Where("id = ?", id).First(&quiz).Error; err != nil {
		c.AbortWithStatus(404)
		fmt.Println(err)
	} else {
		c.Header("access-control-allow-origin", "*") // Why am I doing this? Find out. Try running with this line commented
		c.JSON(200, quiz)
	}
}

func GetQuizzes(c *gin.Context) {
	var quiz []Quiz
	if err := db.Find(&quiz).Error; err != nil {
		c.AbortWithStatus(404)
		fmt.Println(err)
	} else {
		c.Header("access-control-allow-origin", "*") // Why am I doing this? Find out. Try running with this line commented
		c.JSON(200, quiz)
	}
}
func DeleteQuiz(c *gin.Context) {
	id := c.Params.ByName("id")
	var quiz Quiz
	var questions []Question
	db.Where("quiz_id = ?", id).Find(&questions)
	for _, element := range questions {
		y := db.Where("id = ?", element.ID).Delete(&element)
		println(y)
	}
	d := db.Where("id = ?", id).Delete(&quiz)
	fmt.Println(d)
	c.Header("access-control-allow-origin", "*")
	c.JSON(200, gin.H{"id #" + id: "deleted"})
}
func UpdateQuiz(c *gin.Context) {
	var quiz Quiz
	id := c.Params.ByName("id")
	if err := db.Where("id = ?", id).First(&quiz).Error; err != nil {
		c.AbortWithStatus(404)
		fmt.Println(err)
	}
	c.BindJSON(&quiz)
	db.Save(&quiz)
	c.Header("access-control-allow-origin", "*") // Why am I doing this? Find out. Try running with this line commented
	c.JSON(200, quiz)
}
func TakeQuiz(c *gin.Context) {
	id := c.Params.ByName("id")
	var questions []Question
	err := db.Where("quiz_id = ?", id).Find(&questions).Error
	fmt.Println(questions)
	if err == nil {
		c.Header("access-control-allow-origin", "*") // Why am I doing this? Find out. Try running with this line commented
		c.JSON(200, questions)
	}

}
func Answered(c *gin.Context) {
	var a QuizAttempted
	c.BindJSON(&a)
	var k QuizAttempted
	db.Where("username = ?", a.Username).First(&k)
	if k.Username == a.Username {
		c.Header("access-control-allow-origin", "*") // Why am I doing this? Find out. Try running with this line commented
		c.JSON(301, a)
	}
	b, err := strconv.ParseInt(a.Quiz, 10, 64)
	if err != nil {
		// handle the error in some way
	}
	a.QuizID = uint(b)
	fmt.Println(a)
	db.Create(&a)
	c.Header("access-control-allow-origin", "*") // Why am I doing this? Find out. Try running with this line commented
	c.JSON(200, a)

}
func Leaderboard(c *gin.Context) {
	var a []QuizAttempted
	db.Find(&a)
	c.Header("access-control-allow-origin", "*") // Why am I doing this? Find out. Try running with this line commented
	c.JSON(200, a)

}
