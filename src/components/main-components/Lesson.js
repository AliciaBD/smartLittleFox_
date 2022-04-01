import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  ButtonPagination,
  ButtonWord,
  ButtonIcon,
  ButtonCTA,
  ButtonEvaluation,
} from "../buttons/Buttons";
import Image from "../images/Image";
import Diamond from "../images/Diamond";
import AnimSoundWaves from "../animations/AnimSoundWaves";
import AnimFoxJump from "../animations/AnimFoxJump";
import Loading from "../loading/Loading";
import {
  createGroups,
  randomizeArray,
  replaceHyphens,
} from "../../functions/globalFunctions";
import { useGetLesson } from "../../functions/fetchData";
import { Link } from "react-router-dom";

function Lesson() {
  const { lessonTitle, lessonId } = useParams();
  const { loading, data } = useGetLesson(lessonId);
  const title = replaceHyphens(lessonTitle);

  return (
    <section className="lesson">
      {/* <h3>{lessonTitle}</h3> */}
      {loading ? <Loading /> : <Learn data={data} title={title} />}
    </section>
  );
}

export default Lesson;

const Learn = (props) => {
  const [lessonGroups, setLessonGroups] = useState(createGroups(props.data));
  const [group, setGroup] = useState(lessonGroups[0]);
  const [clicks, setClicks] = useState(0);
  const [wordOnDisplay, setWordOnDisplay] = useState();
  const [wordsLearned, setWordsLearned] = useState([group.content[0]]);
  const [voiceEnd, setVoiceEnd] = useState(true);
  const [translation, setTranslation] = useState();
  const [learn, setLearn] = useState(true);
  const [evaluate, setEvaluate] = useState(false);

  var synth = window.speechSynthesis;
  var voices = synth.getVoices();
  var utter = new SpeechSynthesisUtterance();

  const speakWord = (word) => {
    // var utter = new SpeechSynthesisUtterance(word);
    utter.text = word;
    utter.lang = "en-US";
    utter.voice = voices[1];
    synth.speak(utter);
    utter.onend = function (event) {
      setVoiceEnd(true);
    };
  };

  function getWord() {
    setVoiceEnd(false);
    setClicks(clicks + 1);
    speakWord(group.content[clicks + 1].word);
    setWordsLearned([...wordsLearned, group.content[clicks + 1]]);
    setTranslation(group.content[clicks + 1].translation);
    setWordOnDisplay(group.content[clicks + 1].word);
  }

  function updateWord(word, translation) {
    setVoiceEnd(false);
    speakWord(word);
    setWordOnDisplay(word);
    setTranslation(translation);
  }

  function indexdefaultGroup() {
    const unlockedGroup = lessonGroups.find(
      ({ state, finished }) => state === "unlocked" && !finished
    );
    if (unlockedGroup === undefined) {
      const firstGroup = lessonGroups.find(({ finished }) => finished);
      return firstGroup.groupNumber;
    }
    return unlockedGroup.groupNumber;
  }

  const learnPart = (
    <div className="main learn">
      <div className="learn-top">
        {lessonGroups.map(({ groupNumber, state }, index) => {
          if (state === "unlocked") {
            return (
              <ButtonPagination
                key={index}
                onClick={() => setGroup(lessonGroups[index])}
                page="lesson"
                type="pagination"
                active={groupNumber === group.groupNumber ? true : false}
                locked={false}
                id={`btnPag-${groupNumber}`}
              >
                Group {groupNumber + 1}
              </ButtonPagination>
            );
          } else {
            return (
              <ButtonPagination
                key={index}
                page="lesson"
                type="pagination"
                locked={true}
              >
                Group {groupNumber + 1} <i className="fas fa-lock fa-sm"></i>
              </ButtonPagination>
            );
          }
        })}
      </div>
      <div className="learn-main">
        <div className="card learn-list">
          {wordsLearned.map(({ id, word, translation }) => (
            <ButtonWord
              key={id}
              page="lesson"
              type="word"
              onClick={() => updateWord(word, translation)}
            >
              {word}
            </ButtonWord>
          ))}
        </div>
        <div className="learn-board-group">
          <div className="card learn-board">
            <div className="board-head">
              <h1>{wordOnDisplay}</h1>
              <ButtonIcon
                page="lesson"
                type="icon"
                onClick={() => speakWord(wordOnDisplay)}
              >
                <i className="fas fa-volume-up fa-lg"></i>
              </ButtonIcon>
            </div>
            <div className="board-body">
              <h2>({translation})</h2>
              <Image lesson={props.title} name={wordOnDisplay} />
            </div>
          </div>
          {wordsLearned.length === group.content.length ? (
            <div className="learn-board-btns">
              {voiceEnd ? (
                <ButtonCTA
                  page="lesson"
                  type="CTA"
                  onClick={() => setEvaluate(true)}
                >
                  <Diamond />
                  PLAY
                </ButtonCTA>
              ) : (
                <AnimSoundWaves page="lesson" type="CTA" />
              )}
            </div>
          ) : (
            <div className="learn-board-btns">
              {voiceEnd ? (
                <ButtonCTA page="lesson" type="CTA" onClick={() => getWord()}>
                  next
                </ButtonCTA>
              ) : (
                <AnimSoundWaves page="lesson" type="CTA" />
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );

  const evaluation = (
    <Evaluation
      lessonGroups={lessonGroups}
      setLessonGroups={setLessonGroups}
      activeGroup={group.groupNumber}
      setEvaluate={setEvaluate}
      title={props.title}
    />
  );

  useEffect(() => {
    setClicks(0);
    setWordsLearned([group.content[0]]);
    setTranslation(group.content[0].translation);
    setWordOnDisplay(group.content[0].word);
  }, [group]);

  useEffect(() => {
    if (clicks === 0) {
      speakWord(group.content[clicks].word);
    }
  }, [clicks, group]);

  useEffect(() => {
    if (evaluate) {
      setLearn(false);
    }
    if (!evaluate) {
      setLearn(true);
      let idNum = indexdefaultGroup();
      const activeButton = document.querySelector(`#btnPag-${idNum}`);
      activeButton.click();
    }
  }, [evaluate]);

  return (
    <div className="lesson-content">{evaluate ? evaluation : learnPart}</div>
  );
};

const Evaluation = (props) => {
  const groupContent = props.lessonGroups[props.activeGroup].content;
  const words = () => {
    let arr = [];
    groupContent.map((item) =>
      arr.push({ word: item.word, translation: item.translation })
    );
    return arr;
  };
  const [questions, setQuestions] = useState(randomizeArray(words()));
  const [choices, setChoices] = useState(groupContent);
  const [testIsOver, setTestIsOver] = useState();

  const updateOptions = (option) => {
    const reduced = choices.filter(({ word }) => word !== option);
    setChoices(reduced);
    const [first, ...rest] = [...questions];
    setQuestions([...rest]);
  };

  function updateLessonGroups() {
    let arr = props.lessonGroups;
    let activeGroup = props.activeGroup;
    //update finish property
    arr[activeGroup].finished = true;
    //unlock next group
    if (activeGroup + 1 !== arr.length) {
      arr[activeGroup + 1].state = "unlocked";
    }
    return arr;
  }

  useEffect(() => {
    if (choices.length === 0) {
      setQuestions(randomizeArray(words()));
      setChoices(groupContent);
      setTestIsOver(true);
      props.setLessonGroups(updateLessonGroups());
    }
  });

  if (testIsOver) {
    return (
      <CardContinue
        setTestIsOver={setTestIsOver}
        setEvaluate={props.setEvaluate}
        lessonGroups={props.lessonGroups}
        title={props.title}
      />
    );
  }
  return (
    <div className="main evaluate">
      <h1 className="card evaluate-header">Match the words</h1>
      <div className="card evaluate-board">
        <h2>({questions[0].translation})</h2>
        <Image lesson={props.title} name={questions[0].word} />
      </div>
      <div className="evaluate-buttons">
        {choices.map(({ id, word }) => (
          <ButtonEvaluation
            key={id}
            option={word}
            question={questions[0].word}
            updateOptions={updateOptions}
          />
        ))}
      </div>
    </div>
  );
};

const CardContinue = (props) => {
  const [lessonFinish, setLessonFinish] = useState(false);

  const finishLessonBtns = (
    <div className="continue-buttons">
      <ButtonCTA
        page="lesson"
        type="secondary"
        onClick={() => props.setTestIsOver(false)}
      >
        Volver a jugar
      </ButtonCTA>
      <ButtonCTA
        page="lesson"
        type="secondary"
        onClick={() => props.setEvaluate(false)}
      >
        Seguir en {props.title}
      </ButtonCTA>
      <ButtonCTA page="lesson" type="CTA" as={Link} to={"/lessons"}>
        Siguiente leccion
      </ButtonCTA>
    </div>
  );

  const unfinishLessonBtns = (
    <div className="continue-buttons">
      <ButtonCTA
        page="lesson"
        type="secondary"
        onClick={() => props.setTestIsOver(false)}
      >
        Volver a jugar
      </ButtonCTA>
      <ButtonCTA
        page="lesson"
        type="CTA"
        onClick={() => props.setEvaluate(false)}
      >
        Continuar
      </ButtonCTA>
    </div>
  );

  function isLessonFinish() {
    const groupNotFinish = props.lessonGroups.find(({ finished }) => !finished);
    if (groupNotFinish === undefined) return true;
    return false;
  }

  useEffect(() => {
    if (isLessonFinish()) setLessonFinish(true);
  });

  return (
    <div className="main continue">
      <div className="continue-card">
        <AnimFoxJump />
      </div>
      {lessonFinish ? finishLessonBtns : unfinishLessonBtns}
    </div>
  );
};
