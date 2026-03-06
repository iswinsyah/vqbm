import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { SiteProvider } from './context/SiteContext'
import { ContentProvider } from './context/ContentContext'
import { TestimonialProvider } from './context/TestimonialContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SiteProvider>
      <ContentProvider>
        <TestimonialProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </TestimonialProvider>
      </ContentProvider>
    </SiteProvider>
  </React.StrictMode>,
)