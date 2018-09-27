package main

type Person struct {
	ID        uint   `json:"id"`
	Username  string `json:"username" gorm:"unique_index"`
	FirstName string `json:"firstname"`
	LastName  string `json:"lastname"`
	Password  string `json:"password"`
	Points    string `json:"point"`
}
type Question struct {
	ID        uint   `json:"id"`
	Quesion   string `json:"question"`
	A         string `json:"a"`
	B         string `json:"b"`
	C         string `json:"c"`
	D         string `json:"d"`
	CorrectA  bool   `json:"correcta" gorm:"default:'false'"`
	CorrectB  bool   `json:"correctb" gorm:"default:'false'"`
	CorrectC  bool   `json:"correctc" gorm:"default:'false'"`
	CorrectD  bool   `json:"correctd" gorm:"default:'false'"`
	Likes     int    `json:"likes"`
	Points    string `json:"points"`
	Quiz      string `json:"quiz"`
	QuizID    uint   `json:"quizid"`
	ActPoints int    `json:"actualpoints"`
}
type QuizAttempted struct {
	ID       uint   `json:"id"`
	Username string `json:"username"`
	Points   int    `json:"points"`
	Quiz     string `json:"quiz"`
	QuizID   uint   `json:"quizid"`
}
type Quiz struct {
	ID    uint   `json:"id"`
	Name  string `json:"name"`
	Genre string `json:"genre"`
	Likes int    `json:"likes"`
}
