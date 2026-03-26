import { Navigate, Route, Routes } from 'react-router-dom'
import MainLayout from '../../layout'
import AiConversationPage from '../../pages/AiConversationPage'
import CombineWordsPage from '../../pages/CombineWordsPage'
import CommunityPage from '../../pages/CommunityPage'
import ConnectImageWordPage from '../../pages/ConnectImageWordPage'
import DialogueCompletePage from '../../pages/DialogueCompletePage'
import DiscoverPage from '../../pages/DiscoverPage'
import DiscoverViPage from '../../pages/DiscoverViPage'
import FlashcardPage from '../../pages/FlashcardPage'
import ForgotPasswordPage from '../../pages/ForgotPasswordPage'
import HomeViPage from '../../pages/HomeViPage'
import InputTestStep1Page from '../../pages/InputTestStep1Page'
import InputTestStep2Page from '../../pages/InputTestStep2Page'
import InputTestStep3Page from '../../pages/InputTestStep3Page'
import InputTestStep4Page from '../../pages/InputTestStep4Page'
import InputTestStep5Page from '../../pages/InputTestStep5Page'
import LandingPage from '../../pages/LandingPage'
import LoginV1Page from '../../pages/LoginV1Page'
import LoginV2Page from '../../pages/LoginV2Page'
import MultipleChoicePage from '../../pages/MultipleChoicePage'
import PodcastPage from '../../pages/PodcastPage'
import ProfilePage from '../../pages/ProfilePage'
import PronunciationPage from '../../pages/PronunciationPage'
import RegisterPage from '../../pages/RegisterPage'
import RhythmBoardPage from '../../pages/RhythmBoardPage'
import SentenceArrangePage from '../../pages/SentenceArrangePage'
import StatisticsPage from '../../pages/StatisticsPage'
import TopicSelectionPage from '../../pages/TopicSelectionPage'

function Allroute() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomeViPage />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/home-vi" element={<HomeViPage />} />
        <Route path="/discover" element={<DiscoverPage />} />
        <Route path="/discover-vi" element={<DiscoverViPage />} />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login-v1" element={<LoginV1Page />} />
        <Route path="/login" element={<LoginV2Page />} />
        <Route path="/topic-selection" element={<TopicSelectionPage />} />
        <Route path="/input-test/step-1" element={<InputTestStep1Page />} />
        <Route path="/input-test/step-2" element={<InputTestStep2Page />} />
        <Route path="/input-test/step-3" element={<InputTestStep3Page />} />
        <Route path="/input-test/step-4" element={<InputTestStep4Page />} />
        <Route path="/input-test/step-5" element={<InputTestStep5Page />} />
        <Route path="/exercise/combine-words" element={<CombineWordsPage />} />
        <Route path="/exercise/connect-image-word" element={<ConnectImageWordPage />} />
        <Route path="/exercise/sentence-arrange" element={<SentenceArrangePage />} />
        <Route path="/exercise/multiple-choice" element={<MultipleChoicePage />} />
        <Route path="/exercise/flashcard" element={<FlashcardPage />} />
        <Route path="/exercise/rhythm-board" element={<RhythmBoardPage />} />
        <Route path="/exercise/pronunciation" element={<PronunciationPage />} />
        <Route path="/exercise/podcast" element={<PodcastPage />} />
        <Route path="/exercise/ai-conversation" element={<AiConversationPage />} />
        <Route path="/exercise/dialogue-complete" element={<DialogueCompletePage />} />
        <Route path="/statistics" element={<StatisticsPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}

export default Allroute
