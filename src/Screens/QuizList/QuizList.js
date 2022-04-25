import React, { Component } from "react";
import MCQs from "../MCQs/MCQs";
import coverPic1 from "../../images/quiz.jpg";
import coverPic2 from "../../images/test.png";

class QuizList extends Component {
  constructor() {
    super();
    this.state = {
      quiz_list: [
        { quizName: "HTML", tests: 2 },
        { quizName: "CSS", tests: 1 },
        { quizName: "JAVASCRIPT", tests: 3 }
      ],
      quiz_info: [
        {
          quizName: "HTML",
          tests: [
            {
              name: "Test 1",
              questions: 5,
              time: 60,
              quiz_questions: [
                {
                  quiz: "What is abbreviation of HTML?",
                  option1: "Hyper Type Multi Language",
                  option2: "Higher Text Multiple Language",
                  option3: "Hyper Text Markup Language",
                  option4: "Hollow Type Markup Language ",
                  answer: "3"
                }
              ]
            },
            {
              name: "Test 2",
              questions: 10,
              time: 120,
              quiz_questions: [
                {
                  quiz:
                    "The external JavaScript file must contain the <script> tag.",
                  option1: "True",
                  option2: "False",
                  option3: "Neither true nor false",
                  option4: "None of above",
                  answer: "1"
                }
              ]
            }
          ]
        },
        {
          quizName: "CSS",
          tests: [
            {
              name: "Test 1",
              questions: 10,
              time: 120,
              quiz_questions: [
                {
                  quiz: "What does CSS stand for?",
                  option1: "Colorful Style Sheets",
                  option2: "Creative Style Sheets",
                  option3: "Cascading Style Sheets",
                  option4: "Computer Style Sheets",
                  answer: "3"
                }
              ]
            }
          ]
        },
        {
          quizName: "JAVASCRIPT",
          tests: [
            {
              name: "Test 1",
              questions: 5,
              time: 60,
              quiz_questions: [
                {
                  quiz:
                    'What is the correct JavaScript syntax to change the content of this <p id="demo">This is a demonstration.</p> HTML element?',
                  option1:
                    'document.getElementByName("p").innerHTML = "Hello World!";',
                  option2:
                    'document.getElement("p").innerHTML = "Hello World!";',
                  option3:
                    'document.getElementById("demo").innerHTML = "Hello World!";',
                  option4: '#demo.innerHTML = "Hello World!";',
                  answer: "3"
                }
              ]
            },
            {
              name: "Test 2",
              questions: 6,
              time: 120,
              quiz_questions: [
                {
                  quiz:
                    'How to write an IF statement for executing some code if "i" is NOT equal to 5?',
                  option1: "if i <> 5",
                  option2: "if (i != 5)",
                  option3: "if (i <> 5)",
                  option4: "if i =! 5 then",
                  answer: "2"
                }
              ]
            },
            {
              name: "Test 3",
              questions: 5,
              time: 60,
              quiz_questions: [
                {
                  quiz:
                    "How do you find the number with the highest value of x and y?",
                  option1: "Math.ceil(x, y)",
                  option2: "Math.max(x, y)",
                  option3: "top(x, y)",
                  option4: "ceil(x, y)",
                  answer: "1"
                }
              ]
            }
          ]
        }
      ],
      saveSelectedQuizObj: null,
      renderSelectedTestObj: false,
      renderMCQs: false,
      currentTestIndex: null
    };
    this.back = this.back.bind(this);
    this.backToDashboard = this.backToDashboard.bind(this);
  }

  // saving selected quiz to state
  updateQuizInfoState(index) {
    const { quiz_info } = this.state;
    this.setState({
      saveSelectedQuizObj: quiz_info[index],
      renderSelectedTestObj: true
    });
  }

  // back button function
  back() {
    this.setState({ renderSelectedTestObj: false });
  }

  backToDashboard(param) {
    this.setState({ renderMCQs: param });
  }

  renderQuizInfo() {
    const { saveSelectedQuizObj } = this.state;
    return (
      <div>
        <h2>{saveSelectedQuizObj.quizName} Quiz</h2>

        <div className="row">
          {saveSelectedQuizObj.tests.map((test, i) => {
            return (
              <div
                className="col-md-4"
                key={`${saveSelectedQuizObj.quizName}_${test.name}`}
              >
                <div className="card" style={{ width: "18rem" }}>
                  <img
                    className="card-img-top"
                    src={coverPic2}
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{test.name}</h5>
                    <p className="card-text">
                      Total Questions: {test.questions}
                    </p>
                    <p>Total Time: {test.time / 60} Minutes</p>
                    <button
                      className="btn btn-success"
                      onClick={() => {
                        this.setState({
                          renderMCQs: true,
                          currentTestIndex: i,
                          renderSelectedTestObj: false
                        });
                      }}
                    >
                      Start Quiz {i + 1} <i className=" fa fa-paper-plane" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <br />
        <button className="btn btn-secondary" onClick={this.back}>
          Back <i className="fa fa-backward" />
        </button>
      </div>
    );
  }

  renderQuizList() {
    const { quiz_list } = this.state;
    return (
      <div>
        <h2>Dashboard</h2>

        <div className="row">
          {quiz_list.map((qList, index) => {
            return (
              <div className="col-md-4" key={`${qList}_${index}`}>
                <div className="card" style={{ width: "18rem" }}>
                  <img
                    className="card-img-top"
                    src={coverPic1}
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{qList.quizName} Quiz</h5>
                    <p className="card-text">
                      Test your skills of {qList.quizName} by taking this small quiz.
                      It has {qList.tests} tests.
                    </p>
                    <button
                      className="btn btn-info"
                      onClick={this.updateQuizInfoState.bind(this, index)}
                    >
                      Next <i className=" fa fa-paper-plane" />
                    </button>
                    {/* <button className="btn btn-primary" >Next <i class=" fa fa-paper-plane"></i></button> */}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  render() {
    const {
      renderSelectedTestObj,
      renderMCQs,
      saveSelectedQuizObj,
      currentTestIndex
    } = this.state;
    return (
      <div>
        {renderSelectedTestObj ? (
          this.renderQuizInfo()
        ) : renderMCQs ? (
          <MCQs
            currentQuesObj={saveSelectedQuizObj}
            currentTestIndex={currentTestIndex}
            backToDashboard={this.backToDashboard}
          />
        ) : (
          this.renderQuizList()
        )}
        {console.log(currentTestIndex, saveSelectedQuizObj, renderMCQs)}
      </div>
    );
  }
}

export default QuizList;
