'use client'
import AverageCalculator from "./AverageCalculator";
import GuessTheNumber from "./GuessTheNumber";
import ImageGallery from "./ImageGallery";
import LimitedCounter from "./LimitedCounter";
import LiveValidationForm from "./LiveValidationForm";
import LoginForm from "./LoginForm";
import MultiCounter from "./MultiCounter";
import ShoppingList from "./ShoppingList";
import StudentList from "./StudentList";
import SurveySimulator from "./SurveySimulator";
import TextCarrusel from "./TextCarousel";
import ThemeSelector from "./ThemeSelector";
import TimeCounter from "./TimeCounter";
import UserTable from "./UserTable";

export default function Home() {
  const texts = [
    "texto1",
    "texto2",
    "texto3",
    "texto4"
  ]
  return (
    <div>
      <StudentList></StudentList>
      <br></br>
      <LimitedCounter></LimitedCounter>
      <br></br>
      <AverageCalculator></AverageCalculator>
      <br></br>
      <SurveySimulator></SurveySimulator>
      <br></br>
      <ShoppingList></ShoppingList>
      <br></br>
      <LoginForm></LoginForm>
      <br></br>
      <ImageGallery></ImageGallery>
      <br></br>
      <MultiCounter></MultiCounter>
      <br></br>
      <UserTable></UserTable>
      <br></br>
      <GuessTheNumber></GuessTheNumber>
      <br></br>
      <TimeCounter></TimeCounter>
      <br></br>
      <ThemeSelector></ThemeSelector>
      <br></br>
      <LiveValidationForm></LiveValidationForm>
      <br></br>
      <TextCarrusel texts={texts}></TextCarrusel>
    </div>
  );
}
