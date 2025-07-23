import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import BrowserRouter and necessary components
import React from "react";
import Body from "./Components/Body";
import Header from "./Components/Header";
import MoveSwapComponent from "./Components/MoveNswap/MoveSwapComponent";
import Calculator from "./Components/Calculator/Calculator";
import Accordian from "./Components/Accordian/Accordian";
import PrivateRoutes from "./Components/PrivateRoutes";
import SearchPage from "./Components/SearchBar/SearchPage";
import Context from "./Components/UseContextExample/Context";
import AutoCompleteComponent from "./Components/AutoComplete/AutoCompleteComponent";
import Modalpage from "./Components/Modal/Modalpage";
import CarouselBody from "./Components/Carousel/CarouselBody";
import Game from "./Components/TicTacToe/Game";
import FileFolderPage from "./Components/file-folder/FileFolderPage";
import Pagination from "./Components/Pagination/Pagination";
import ProgressContainer from "./Components/Progress-bar/ProgressContainer";
import NestedCheckbox from "./Components/Nested-Checkboxes/NestedCheckbox";
import OTPInput from "./Components/OTP-Input/OTPInput";
import RedditComment from "./Components/Reddit/RedditComment";
import MatchPairGame from "./Components/Match-pair/MatchPairGame";

function App() {
  return (
    <Router basename="/frontend-machine-coding">
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Body />} />

          <Route index element={<RedditComment />} />
          <Route path="/reddit-comment" element={<RedditComment />} />
          <Route path="/move-swap" element={<MoveSwapComponent />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/context" element={<Context />} />
          <Route path="/autocomplete" element={<AutoCompleteComponent />} />
          <Route path="/modal" element={<Modalpage />} />
          <Route path="/carousel" element={<CarouselBody />} />
          <Route path="/game" element={<Game />} />
          <Route path="/file-folder" element={<FileFolderPage />} />
          <Route path="/pagination" element={<Pagination />} />
          <Route path="/progress-bar" element={<ProgressContainer />} />
          <Route path="/nested-checkbox" element={<NestedCheckbox />} />
          <Route path="/otp-input" element={<OTPInput />} />
          <Route path="/match-pair" element={<MatchPairGame />} />
          <Route element={<PrivateRoutes />}>
            <Route path="/calculator" element={<Calculator />} />
            <Route path="/accordian" element={<Accordian />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
