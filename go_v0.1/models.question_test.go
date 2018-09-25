// models.question_test.go

package main

import "testing"

// Test the function that fetches all articles
func TestGetAllQuestions(t *testing.T) {
	alist := getAllQuestions()

	// Check that the length of the list of articles returned is the
	// same as the length of the global variable holding the list
	if len(alist) != len(questionsList) {
		t.Fail()
	}

	// Check that each member is identical
	for i, v := range alist {
		if v.Question != questionsList[i].Question ||
			v.ID != questionsList[i].ID ||
			v.Answer != questionsList[i].Answer {

			t.Fail()
			break
		}
	}
}
