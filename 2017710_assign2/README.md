# Quiz-App
Quiz App built using Go and React.

## By Ujwal Narayan

## Functionalities

1. Registration
2. Sign Up
3. Hashed passwords
4. Routes are protected 
5. Admin can
    1. Add People
    2. Delete People
    3. Add Questions 
    4. Add Quizzes 
6. List of all questions attempted the questions
7. Leaderboard
8. Powerups :)
9. Multiple genres
10. Multiple Correct 
11. Single Correct 
12. Minimal Deseign
13. Gorgeous UI

## Instructions 

1. Backend 
    1. `cd go`
    2. `go build -o main main.go routes.go hash.go models.go people.go questions.go login.go quizzes.go`
2. Frontend
    1. `cd react-app`
    2. `yarn`
    3. `yarn start`
   
## Packages Needed 

    "fmt"
    "log"
	"golang.org/x/crypto/bcrypt"
	"strconv"
    "github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"


