"use client";
import React from 'react';
import { useState, useEffect } from "react";

const BackGround: React.FC = () => {

    const [backGroundNumber, setBackGroundNumber] = useState(1);

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (backGroundNumber == 10) {
                setBackGroundNumber(1);
            }
            else {
                setBackGroundNumber(backGroundNumber => backGroundNumber + 1);
            }
        }, 5000);
        return () => {
            clearInterval(intervalId);
        };
    }, [backGroundNumber]);

    return (
        <section
            className="backgroundAnimation overflow-hidden w-full h-full scale-110 brightness-75 lg:scale-100 lg:brightness-50"
            style={{
                backgroundSize: "100% 100%",
                backgroundImage: `url(/assets/imgs/backGround/backGround${backGroundNumber}.PNG)`,
            }}
        >
        </section>
    )
}

export default BackGround;