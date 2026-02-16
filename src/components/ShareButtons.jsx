import React, { useState } from 'react';

const ShareButtons = ({ title, url }) => {
    const [copied, setCopied] = useState(false);

    const encodedTitle = encodeURIComponent(title);
    const encodedUrl = encodeURIComponent(url);

    const handleCopyLink = () => {
        navigator.clipboard.writeText(url).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        });
    };

    return (
        <div className="py-6 border-t border-gray-100 mt-8">
            <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-4">Bagikan:</h3>
            <div className="flex flex-wrap gap-3">
                {/* WhatsApp */}
                <a
                    href={`https://wa.me/?text=${encodedTitle}%20${encodedUrl}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition font-medium"
                >
                    <i className="fa-brands fa-whatsapp text-lg"></i>
                    WhatsApp
                </a>

                {/* Facebook */}
                <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium"
                >
                    <i className="fa-brands fa-facebook text-lg"></i>
                    Facebook
                </a>

                {/* Copy Link */}
                <button
                    onClick={handleCopyLink}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition font-medium border ${copied ? 'bg-gray-800 text-white border-gray-800' : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                        }`}
                >
                    <i className={`fa-solid ${copied ? 'fa-check' : 'fa-link'} text-lg`}></i>
                    {copied ? 'Tersalin!' : 'Salin Link'}
                </button>
            </div>
        </div>
    );
};

export default ShareButtons;
