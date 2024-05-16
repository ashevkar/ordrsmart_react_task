import React from 'react';
import './btn.css';

const ButtonCheck = ({ onClick }) => {
    return (
        <button className='CBox' onClick={onClick}>
            <section className="flex justify-center items-center px-2 w-11 h-11 rounded-xl bg-emerald-400 bg-opacity-20">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/6cf20740ed1f7fc23f9b2a80d945393e2769e9bab0783effe6d5d1fa3f805528?apiKey=e42b6ccdde444188898d595f557489f1&" className="w-full aspect-square" alt="Decorative Tick" />
            </section>
        </button>
    );
}

const ButtonCross = ({ onClick }) => {
    return (
        <button className='XBox' onClick={onClick}>
            <section className="flex justify-center items-center px-2 w-11 h-11 rounded-xl border border-solid bg-rose-700 bg-opacity-20 border-green-300 border-opacity-0">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/d43771def62b0e556e85ae63c6ccebe5e0df7353926943b3297c1e85b9392e5f?apiKey=e42b6ccdde444188898d595f557489f1&" className="w-full aspect-square" alt="Decorative Cross" />
            </section>
        </button>
    );
}

const ButtonDots = ({ onClick }) => {
    return (
        <button className='DotBox' onClick={onClick}>
            <section className="flex justify-center items-center px-2 w-11 h-11 bg-gray-200 rounded-xl shadow-sm">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/0104d462c2cf05fb5b48b0476718b64a56b643a772b00d442ba907418b771d52?apiKey=e42b6ccdde444188898d595f557489f1&" alt="" className="w-full aspect-square" />
            </section>
        </button>
    );
}

export { ButtonCheck, ButtonCross, ButtonDots };