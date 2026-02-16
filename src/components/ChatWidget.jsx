import React, { useState, useRef, useEffect } from 'react';
import { useSite } from '../context/SiteContext';

const ChatWidget = () => {
    const { settings } = useSite();
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { role: 'model', text: 'Assalamualaikum! 👋\nAda yang bisa saya bantu mengenai Villa Quran Baron Malang?', time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen]);

    const getSystemPrompt = () => {
        const h = settings.home || {};
        const p = h.profile || {};
        const f = h.features || {};

        let context = `
INFORMASI WEBSITE:
Nama Situs: ${settings.title}
Deskripsi: ${settings.description}
Mudir/Pimpinan: ${p.mudirName} (${p.mudirTitle})
Sambutan: ${p.welcomeHeadline}
Fitur/Program Utama:
1. ${(f.card1?.title || '')}: ${(f.card1?.desc || '')}
2. ${(f.card2?.title || '')}: ${(f.card2?.desc || '')}
3. ${(f.card3?.title || '')}: ${(f.card3?.desc || '')}

INSTRUKSI KHUSUS:
${settings.aiPersona || 'Jawab dengan ramah dan membantu.'}

Jawablah pertanyaan user berdasarkan informasi di atas. Jika tidak tahu, sarankan untuk menghubungi kontak WhatsApp admin.
        `;
        return context;
    };

    const handleSend = async () => {
        if (!input.trim()) return;
        const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

        if (!settings.geminiApiKey) {
            setMessages(prev => [...prev,
            { role: 'user', text: input, time },
            { role: 'model', text: '⚠️ Mohon maaf, API Key belum diatur di menu Pengaturan Admin.', time }
            ]);
            setInput('');
            return;
        }

        const userMessage = input;
        setInput('');
        setMessages(prev => [...prev, { role: 'user', text: userMessage, time }]);
        setIsLoading(true);

        try {
            const historyText = messages.map(m => `${m.role === 'user' ? 'User' : 'Assistant'}: ${m.text}`).join('\n');
            const fullPrompt = `${getSystemPrompt()}\n\nRIWAYAT CHAT:\n${historyText}\nUser: ${userMessage}\nAssistant:`;

            const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${settings.geminiApiKey}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    contents: [{ parts: [{ text: fullPrompt }] }]
                })
            });

            const data = await response.json();

            if (data.error) {
                throw new Error(data.error.message);
            }

            const aiText = data.candidates?.[0]?.content?.parts?.[0]?.text || "Maaf, saya tidak mengerti.";

            setMessages(prev => [...prev, { role: 'model', text: aiText, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }]);

        } catch (error) {
            console.error("AI Error:", error);
            setMessages(prev => [...prev, { role: 'model', text: "Maaf, terjadi gangguan koneksi.", time }]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') handleSend();
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end font-sans">
            {/* Chat Window */}
            {isOpen && (
                <div className="bg-[#efeae2] w-80 sm:w-96 rounded-lg shadow-2xl border border-gray-200 overflow-hidden mb-4 animate-fade-in-up flex flex-col h-[500px]">
                    {/* WA Header */}
                    <div className="bg-[#008069] p-3 flex items-center gap-3 text-white shadow-md z-10">
                        <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center overflow-hidden">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/1200px-WhatsApp.svg.png" className="w-full h-full object-cover p-1" alt="Bot" />
                        </div>
                        <div className="flex-1">
                            <h3 className="font-bold text-base leading-none">CS Villa Quran</h3>
                            <p className="text-xs text-white/80 mt-1">online</p>
                        </div>
                        <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white px-2">
                            <i className="fa-solid fa-xmark text-lg"></i>
                        </button>
                    </div>

                    {/* Messages Area */}
                    <div className="flex-1 p-4 overflow-y-auto space-y-2 bg-[url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')] bg-repeat">
                        {messages.map((msg, idx) => (
                            <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                <div className={`relative max-w-[80%] rounded-lg px-3 py-2 text-sm shadow-sm ${msg.role === 'user'
                                        ? 'bg-[#d9fdd3] text-gray-900 rounded-tr-none'
                                        : 'bg-white text-gray-900 rounded-tl-none'
                                    }`}>
                                    <div className="whitespace-pre-wrap">{msg.text}</div>
                                    <div className={`text-[10px] text-gray-500 mt-1 flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                        {msg.time}
                                        {msg.role === 'user' && <i className="fa-solid fa-check-double text-blue-500 ml-1"></i>}
                                    </div>

                                    {/* Tail */}
                                    <div className={`absolute top-0 w-0 h-0 border-[6px] border-transparent ${msg.role === 'user'
                                            ? 'right-[-8px] border-t-[#d9fdd3] border-l-[#d9fdd3] border-b-transparent border-r-transparent'
                                            : 'left-[-8px] border-t-white border-r-white border-b-transparent border-l-transparent'
                                        }`}></div>
                                </div>
                            </div>
                        ))}
                        {isLoading && (
                            <div className="flex justify-start">
                                <div className="bg-white px-3 py-2 rounded-lg rounded-tl-none shadow-sm inline-block">
                                    <p className="text-xs text-gray-500 italic">sedang mengetik...</p>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* WA Input Area */}
                    <div className="p-2 bg-[#f0f2f5] flex items-center gap-2">
                        <button className="text-gray-500 p-2 hover:bg-gray-200 rounded-full">
                            <i className="fa-regular fa-face-smile text-xl"></i>
                        </button>
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyPress={handleKeyPress}
                            placeholder="Ketik pesan..."
                            className="flex-1 px-4 py-2 bg-white border-none rounded-lg text-sm focus:outline-none"
                        />
                        {input.trim() ? (
                            <button
                                onClick={handleSend}
                                className="w-10 h-10 bg-[#008069] text-white rounded-full flex items-center justify-center hover:bg-[#006e5a] transition"
                            >
                                <i className="fa-solid fa-paper-plane text-sm"></i>
                            </button>
                        ) : (
                            <button className="w-10 h-10 text-gray-500 flex items-center justify-center">
                                <i className="fa-solid fa-microphone text-xl"></i>
                            </button>
                        )}
                    </div>
                </div>
            )}

            {/* Float Button */}
            {!isOpen && (
                <button
                    onClick={() => setIsOpen(true)}
                    className="w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:bg-[#20bd5a] transition transform hover:scale-110 flex items-center justify-center group relative"
                >
                    <i className="fa-brands fa-whatsapp text-3xl"></i>
                    <span className="absolute right-full mr-3 bg-gray-800 text-white text-xs font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
                        Chat AI
                    </span>
                    <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full border-2 border-white animate-pulse"></span>
                </button>
            )}
        </div>
    );
};

export default ChatWidget;
