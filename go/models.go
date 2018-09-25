package main

type Person struct {
	ID        uint   `json:"id"`
	Username  string `json:"username" gorm:"unique_index"`
	FirstName string `json:"firstname"`
	LastName  string `json:"lastname"`
	Password  string `json:"password"`
}
type Question struct {
	ID      uint   `json:"id"`
	Quesion string `json:"question"`
	Answer  string `json:"answer"`
	By      string `json:"by"`
	Likes   int    `json:"likes"`
	Right   uint   `json:"right"`
	Point   int    `json:"points"`
	Quiz    int    `json:"quiz"`
}
