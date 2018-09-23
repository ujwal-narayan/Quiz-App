package main

import "errors"

type question struct {
	ID       int    `json:"id" binding:"required"`
	Question string `json:"question" binding:"required"`
	Answer   string `json:"answer" binding:"required"`
	Likes    int    `json:"likes"`
	Dislikes int    `json:"dislikes"`
	Right    int    `json:"right"`
}

var questionsList = []question{
	question{ID: 1, Question: "Question 1", Answer: "Question 1 Answer", Likes: 0, Dislikes: 0, Right: 0},
	question{ID: 2, Question: "Question 2", Answer: "Question 2 Answer", Likes: 0, Dislikes: 0, Right: 0},
}

// Return a list of all the articles
func getAllQuestions() []question {
	return questionsList
}

//Return a question by it's id
func getQuestionByID(id int) (*question, error) {
	for _, a := range questionsList {
		if a.ID == id {
			return &a, nil
		}
	}
	return nil, errors.New("Question not found")
}
