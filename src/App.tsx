import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import DealsPage from './pages/DealsPage';
import { Language } from './types';

export default function App() {
    const [lang, setLang] = useState<Language>('fr');

    return (
        <BrowserRouter>
            <Layout lang={lang} setLang={setLang}>
                <Routes>
                    <Route path="/" element={<HomePage lang={lang} />} />
                    <Route path="/about" element={<AboutPage lang={lang} />} />
                    <Route path="/deals" element={<DealsPage lang={lang} />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}
