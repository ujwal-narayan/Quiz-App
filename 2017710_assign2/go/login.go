package main

import (
	"fmt"

	"github.com/gin-gonic/gin"
)

func Login_r(c *gin.Context) {
	var person Person
	c.Header("access-control-allow-origin", "*")
	var q Person
	c.BindJSON(&person)

	p := getPwd(person.Password)
	db.Where("username = ?", person.Username).First(&q)
	fmt.Println(person.Username)
	if comparePasswords(q.Password, p) {
		c.JSON(200, person)
	} else {
		c.JSON(300, "Incorrect")
	}

}
