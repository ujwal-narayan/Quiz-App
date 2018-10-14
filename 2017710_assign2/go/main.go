package main

import (
	"fmt"
	// Why do we need this package?

	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/sqlite" // If you want to use mysql or any other db, replace this line
)

var db *gorm.DB // declaring the db globally
var err error

func main() {
	db, err = gorm.Open("sqlite3", "./gorm.db")
	if err != nil {
		fmt.Println(err)
	}
	defer db.Close()

	db.AutoMigrate(&Question{})
	db.AutoMigrate(&QuizAttempted{})
	db.AutoMigrate(&Quiz{})
	db.AutoMigrate(&Person{})
	routesHandler()

}
